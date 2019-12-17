<template>
	<view class="content">
		<view class="navbar">
			<view v-for="(item, index) in navList" :key="index" class="nav-item" :class="{current: tabCurrentIndex === index}" @click="tabClick(index)">
				{{item.text}}
			</view>
		</view>

		<swiper :current="tabCurrentIndex" class="swiper-box" duration="300" @change="changeTab">
			<swiper-item class="tab-content" v-for="(tabItem,tabIndex) in navList" :key="tabIndex">
				<scroll-view class="list-scroll-content" scroll-y @scrolltolower="loadData">
					<!-- 空白页 -->
					<empty v-if="tabItem.loaded === true && tabItem.orderList.length === 0"></empty>
					<!-- 订单列表 -->
					<view v-for="(item,index) in tabItem.orderList" :key="index" class="order-item">
						<view class="i-top">
							<text class="time">{{item.time}}</text>
							<text class="state" :style="{color: item.stateTipColor}">{{item.stateTip}}</text>
							<text v-if="item.state===9" class="del-btn yticon icon-iconfontshanchu1" @click="deleteOrder(index,item)"></text>
						</view>
						<view class="cn_number" @tap="goDetail(item.ordersn)">订单编号：{{item.ordersn}} <image src="../../static/jiantou-r.png" class="jiantou"></image> </view>
						<view class="goods-box-single" v-for="(goodsItem, goodsIndex) in item.goodsList" :key="goodsIndex">
							<image class="goods-img" :src="goodsItem.thumb" mode="aspectFill"></image>
							<view class="right">
								<text class="title clamp">{{goodsItem.title}}</text>
								<text class="attr-box">产品编号:{{goodsItem.goodssn}}</text>
								<text class="attr-box clamp" v-if="goodsItem.attr != null ">规格:{{goodsItem.attr}}</text>
								<text class="price">{{goodsItem.price}}<text> x {{goodsItem.number}}</text></text>
							</view>
						</view>
						<view class="price-box">
							共<text class="num">{{item.total}}</text>件商品 合计<text class="price">{{item.price}}</text>（含运费/税费）
						</view>
						<view class="action-box b-t">
							<button class="action-btn" @click="cancelOrder(item)" v-if="item.state==1">取消订单</button>
							<button class="action-btn" @click="cancelOrder(item)" v-if="item.state==2 && item.kequ==1">取消订单</button>
							<button class="action-btn" v-if="item.state==3" @click="goDelivery(item.id)">查看物流</button>
							<button class="action-btn" v-if="item.state==4">评价</button>
							<button class="action-btn recom" v-if="item.state==1" @tap="navTo('/pages/money/pay?ordersn='+item.ordersn)">立即支付</button>
							<button class="action-btn recom" v-if="item.state==2 || item.state==9 || item.state==4" @tap="zaicimai(item.zaicimai)">再次购买</button>
							<button class="action-btn recom" v-if="item.state==3" @tap="shouhuo(item)">确认收货</button>
						</view>
					</view>
					<uni-load-more :status="tabItem.loadingType"  v-if="tabItem.orderList.length > 0"></uni-load-more>
					<image src="../../static/order-no.png" v-else mode="" style="width:169upx;height:149upx;margin-left:290upx;margin-top:200upx;"></image>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template> 

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import empty from "@/components/empty";
	import Json from '@/Json';
	export default {
		components: {
			uniLoadMore,
			empty
		},
		data() {
			return {
				tabCurrentIndex: 0,
				navList: [
					{state: 0,text: '全部',loadingType: 'more',orderList: [],pn:0},
					{state: 1,text: '待付款',loadingType: 'more',orderList: [],pn:0},
					{state: 2,text: '待发货',loadingType: 'more',orderList: [],pn:0},
					{state: 3,text: '待收货',loadingType: 'more',orderList: [],pn:0},
					{state: 4,text: '已完成',loadingType: 'more',orderList: [],pn:0}
				],
			};
		},
		
		onLoad(options){
			this.tabCurrentIndex = +options.state;
		},
		onShow() {
			this.loadData('refresh')
		},
		methods: {
			goDetail(id){
				uni.navigateTo({
					url:"/pages/order/detail?id="+id
				})
			},
			navTo(url){
				uni.navigateTo({
					url:url
				})
			},
			goDelivery(id){
				uni.navigateTo({
					url:"/pages/order/delivery?id="+id
				})
			},
			zaicimai(arr){
				uni.setStorageSync('buyarr',arr);
				var url = "/pages/order/createOrder";
				uni.navigateTo({
					url:url
				})
			},
			//获取订单列表
			loadData(source){
				//这里是将订单挂载到tab列表下
				let index = this.tabCurrentIndex;
				let navItem = this.navList[index];
				let state = navItem.state;
				let pn = navItem.pn;
				if(source === 'tabChange' && navItem.loaded === true){				
					//tab切换只有第一次需要加载数据
					return;
				}
				if(navItem.loadingType == 'loading' || navItem.loadingType == 'noMore'){
					return;
				}
				if(pn==0){
					uni.showLoading({
						title: '请稍后'
					})
				}
				navItem.loadingType = 'loading';
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/order/index',
					data:{order_status:state,token:uni.getStorageSync('cbe_token'),pn:pn},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {						
						var datas = resa.data;
						uni.hideLoading();
						if(datas.code == '0'){	
							this.navList[index].pn = Number(pn)+Number(1);
							datas.data.forEach(item=>{
								navItem.orderList.push(item);
							})
							navItem.loadingType = 'loaded';						
						}else{
							this.navList[index].loadingType = "noMore"
						}
					},
				
				})
				return false;
				setTimeout(()=>{
					let orderList = Json.orderList.filter(item=>{
						//添加不同状态下订单的表现形式
						item = Object.assign(item, this.orderStateExp(item.state));
						//演示数据所以自己进行状态筛选
						if(state === 0){
							//0为全部订单
							return item;
						}
						return item.state === state
					});
					orderList.forEach(item=>{
						navItem.orderList.push(item);
					})
					//loaded新字段用于表示数据加载完毕，如果为空可以显示空白页
					this.$set(navItem, 'loaded', true);	
					//判断是否还有数据， 有改为 more， 没有改为noMore 
					navItem.loadingType = 'more';
				}, 600);	
			}, 

			//swiper 切换
			changeTab(e){
				this.tabCurrentIndex = e.target.current;
				this.loadData('tabChange');
			},
			//顶部tab点击
			tabClick(index){
				this.tabCurrentIndex = index;
			},
			//删除订单
			deleteOrder(index,item){
				var that = this;
				uni.showModal({
				    content: '确定删除该订单吗？',
					confirmColor:'#008AB0',
				    success: (e)=>{
				    	if(e.confirm){
							uni.showLoading({
								title: '请稍后'
							})
							this.shanchuOrder(item);
							setTimeout(()=>{
								this.navList[this.tabCurrentIndex].orderList.splice(index, 1);
								uni.hideLoading();
							}, 600)
						}
					},
				})
			},
			//取消订单
			cancelOrder(item){
				var that = this;
				uni.showModal({
				    content: '确定取消该订单吗？',
					confirmColor:'#008AB0',
				    success: (e)=>{
				    	if(e.confirm){
							uni.showLoading({
								title: '请稍后'
							})
							that.quxiaoOrder(item);
							setTimeout(()=>{
								let {stateTip, stateTipColor} = that.orderStateExp(9);
								item = Object.assign(item, {
									state: 9,
									stateTip, 
									stateTipColor
								})
								//取消订单后删除待付款中该项
								let list = that.navList[1].orderList;
								let index = list.findIndex(val=>val.id === item.id);
								index !== -1 && list.splice(index, 1);
								uni.hideLoading();
							}, 600)
						}
					},
				})
			},
			quxiaoOrder(item){
				if(item.status==0){
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/order/order_quxiao',
						data:{id:item.ordersn,token:uni.getStorageSync('cbe_token')},
						method:'POST',
						dataType:'json',
						header: {'content-type' : 'application/x-www-form-urlencoded'},
						success: (resa) => {
							var one = resa.data;
							if(one.code==0){
								
							}
						}
					})
				}
			},
			shouhuo(item){
				var that = this;
				uni.showModal({
				    content: '确定已经收货了吗？',
					confirmColor:'#008AB0',
				    success: (e)=>{
				    	if(e.confirm){
							uni.showLoading({
								title: '请稍后'
							})
							uni.request({
								url:uni.getStorageSync('hostname') + '?action=index/order/order_shouhuo',
								data:{id:item.ordersn,token:uni.getStorageSync('cbe_token')},
								method:'POST',
								dataType:'json',
								header: {'content-type' : 'application/x-www-form-urlencoded'},
								success: (resa) => {
									uni.hideLoading();
									var one = resa.data;
									if(one.code==0){
										that.loadData();
										setTimeout(()=>{
											let {stateTip, stateTipColor} = that.orderStateExp(4);
											item = Object.assign(item, {
												state: 4,
												stateTip, 
												stateTipColor
											})
											//取消订单后删除待付款中该项
											let list = that.navList[1].orderList;
											let index = list.findIndex(val=>val.id === item.id);
											index !== -1 && list.splice(index, 1);
											uni.hideLoading();
										}, 600)
									}
								}
							})
				    	}
				    }
				});
			},
			shanchuOrder(item){
				if(item.status==-1){
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/order/order_shanchu',
						data:{id:item.ordersn,token:uni.getStorageSync('cbe_token')},
						method:'POST',
						dataType:'json',
						header: {'content-type' : 'application/x-www-form-urlencoded'},
						success: (resa) => {
							var one = resa.data;
							if(one.code==0){
								
							}
						}
					})
				}
			},
			//订单状态文字和颜色
			orderStateExp(state){
				let stateTip = '',
					stateTipColor = '#37b0c9';
				switch(+state){
					case 1:
						stateTip = '待付款'; break;
					case 2:
						stateTip = '待发货'; break;
					case 3:
						stateTip = '待收货'; break;
					case 4:
						stateTip = '已完成'; break;
					case 9:
						stateTip = '已取消'; 
						stateTipColor = '#909399';
					break;
				}
				return {stateTip, stateTipColor};
			}
		},
	}
</script>

<style lang="scss">
	page, .content{
		background: $page-color-base;
		height: 100%;
	}
	
	.swiper-box{
		height: calc(100% - 40px);
	}
	.list-scroll-content{
		height: 100%;
	}
	
	.navbar{
		display: flex;
		height: 100upx;
		padding: 0 5px;
		background: #fff;
		box-shadow: 0 1px 5px rgba(0,0,0,.06);
		position: relative;
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 28upx;
			color: #323232;
			position: relative;
			&.current{
				color: #008ab0;
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 44px;
					height: 0;
					border-bottom: 6upx solid #008ab0;
				}
			}
		}
	}

	.uni-swiper-item{
		height: auto;
	}
	.order-item{
		display: flex;
		flex-direction: column;
		background: #fff;
		margin-top:16upx;
		padding-top: 10upx;
		.i-top{
			display: flex;
			align-items: center;
			height: 30upx;
			padding:30upx 30upx;
			font-size: $font-base;
			color: $font-color-dark;
			position: relative;
			.time{
				flex: 1; color:#808080; font-size:28upx;
			}
			.state{
				color: #37b0c9; font-size:28upx;
			}
			.del-btn{
				padding: 10upx 0 10upx 36upx;
				font-size: $font-lg;
				color: $font-color-light;
				position: relative;
				&:after{
					content: '';
					width: 0;
					height: 30upx;
					border-left: 1px solid $border-color-dark;
					position: absolute;
					left: 20upx;
					top: 50%;
					transform: translateY(-50%);
				}
			}
		}
		/* 多条商品 */
		.cn_number{
			clear: both; color:#333333; font-size:28upx; padding:20upx 30upx; border-bottom: 1upx solid #ebebeb;
			.jiantou{
				width:30upx;height:30upx;float: right;
			}
		}
		/* 单条商品 */
		.goods-box-single{
			display: flex;
			padding: 30upx 40upx;
			.goods-img{
				display: block;
				width: 180upx;
				height: 180upx;
				border:1upx solid #ebebeb;
			}
			.right{
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 0 0 0 30upx;
				overflow: hidden;
				.title{
					font-size: 26upx;
					color: #323232;
					line-height: 1;
					padding-bottom:15upx;
				}
				.attr-box{
					height:40upx;
					font-size: 24upx;
					color: #808080;
				}
				.price{
					padding-top:10upx;
					font-size: 28upx;
					color: #37b0c9;
					text{
						float: right; color:#353535;
					}
					&:before{
						content: '￥';
						font-size: $font-sm;
						margin: 0 2upx 0 0upx;
					}
				}
			}
		}
		
		.price-box{
			display: flex;
			justify-content: flex-end;
			align-items: baseline;
			padding: 20upx 30upx;
			font-size: 28upx;
			color: #333333;
			border-top: 1upx solid #ebebeb;
			.num{
				margin: 0 8upx;
				color: #333333;
			}
			.price{
				font-size: 28upx;
				color: #333333;
				&:before{
					content: '￥';
					font-size: 28upx;
					margin: 0 2upx 0 0upx;
				}
			}
		}
		.action-box{
			display: flex;
			justify-content: flex-end;
			align-items: center;
			height: 100upx;
			position: relative;
			padding-right: 30upx;
		}
		.action-btn{
			width: 160upx;
			height: 60upx;
			margin: 0;
			margin-left: 24upx;
			padding: 0;
			text-align: center;
			line-height: 60upx;
			font-size: 28upx;
			color: #808080;
			background: #fff;
			border-radius: 100px;
			&:after{
				border-radius: 100px;
			}
			&.recom{
				background: #008ab0;
				color: #ffffff;
				&:after{
					border-color: #f7bcc8;
				}
			}
		}
	}
	
	
	/* load-more */
	.uni-load-more {
		display: flex;
		flex-direction: row;
		height: 80upx;
		align-items: center;
		justify-content: center
	}
	
	.uni-load-more__text {
		font-size: 28upx;
		color: #999
	}
	
	.uni-load-more__img {
		height: 24px;
		width: 24px;
		margin-right: 10px
	}
	
	.uni-load-more__img>view {
		position: absolute
	}
	
	.uni-load-more__img>view view {
		width: 6px;
		height: 2px;
		border-top-left-radius: 1px;
		border-bottom-left-radius: 1px;
		background: #999;
		position: absolute;
		opacity: .2;
		transform-origin: 50%;
		animation: load 1.56s ease infinite
	}
	
	.uni-load-more__img>view view:nth-child(1) {
		transform: rotate(90deg);
		top: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(2) {
		transform: rotate(180deg);
		top: 11px;
		right: 0
	}
	
	.uni-load-more__img>view view:nth-child(3) {
		transform: rotate(270deg);
		bottom: 2px;
		left: 9px
	}
	
	.uni-load-more__img>view view:nth-child(4) {
		top: 11px;
		left: 0
	}
	
	.load1,
	.load2,
	.load3 {
		height: 24px;
		width: 24px
	}
	
	.load2 {
		transform: rotate(30deg)
	}
	
	.load3 {
		transform: rotate(60deg)
	}
	
	.load1 view:nth-child(1) {
		animation-delay: 0s
	}
	
	.load2 view:nth-child(1) {
		animation-delay: .13s
	}
	
	.load3 view:nth-child(1) {
		animation-delay: .26s
	}
	
	.load1 view:nth-child(2) {
		animation-delay: .39s
	}
	
	.load2 view:nth-child(2) {
		animation-delay: .52s
	}
	
	.load3 view:nth-child(2) {
		animation-delay: .65s
	}
	
	.load1 view:nth-child(3) {
		animation-delay: .78s
	}
	
	.load2 view:nth-child(3) {
		animation-delay: .91s
	}
	
	.load3 view:nth-child(3) {
		animation-delay: 1.04s
	}
	
	.load1 view:nth-child(4) {
		animation-delay: 1.17s
	}
	
	.load2 view:nth-child(4) {
		animation-delay: 1.3s
	}
	
	.load3 view:nth-child(4) {
		animation-delay: 1.43s
	}
	
	@-webkit-keyframes load {
		0% {
			opacity: 1
		}
	
		100% {
			opacity: .2
		}
	}
</style>
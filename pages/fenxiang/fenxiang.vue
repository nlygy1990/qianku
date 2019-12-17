<template>
	<view class="content">
		<view class="navbar" :style="{position:headerPosition,top:headerTop}">
			<view class="nav-item" :class="{current: filterIndex === 0}" @click="tabClick(0)">分享注册</view>
			<view class="nav-item" :class="{current: filterIndex === 1}" @click="tabClick(1)">分享产品</view>
			<view class="nav-item" :class="{current: filterIndex === 2}" @click="tabClick(2)">分享订单</view>
		</view>
		<view class="topst text-right" v-if="filterIndex === 0">累计注册人数：{{count}}</view>
		<view class="topst" v-if="filterIndex === 1">累计注册人数：{{count}} 零售顾客通过我的分享购买最多的产品（只记录本月和上月的分享购买的产品）：</view>
		<view class="topst" v-if="filterIndex === 2">
			<text class="lleft">订单数量：{{count}}</text>
			<text class="lright">订单累计金额：￥{{total}}</text>
			<view class="clear"></view>
		</view>
		<view class="zhuce" v-if="filterIndex === 0">
			<view class="zhuce-list" v-for="(item,index) in goodsList" :key="index">
				<view class="name">{{item.username}}</view>
				<view class="phone">{{item.mobile}}</view>
				<view class="time">{{item.createtime}}</view>
				<view class="clear"></view>
			</view>
		</view>
		<view class="chanpin" v-if="filterIndex === 1">
			<view class="goods-box-single" v-for="(item,index) in goodsList" :key="index">
				<image class="goods-img" :src="item.thumb" mode="aspectFill"></image>
				<view class="right">
					<text class="title clamp">{{item.title}}</text>
					<text class="attr-box">产品编号:{{item.goodssn}}</text>
					<text class="attr-box">规格:{{item.guige}}</text>
					<text class="price">{{ite,price}}</text>
				</view>
			</view>
		</view>
		<view class="zhuce" v-if="filterIndex === 2">
			<view class="zhuce-list" v-for="(item,index) in goodsList" :key="index">
				<view class="name">{{item.name}}</view>
				<view class="money">￥{{item.price}}</view>
				<view class="time">{{item.createtime}}</view>
				<view class="clear"></view>
			</view>
		</view>
		<uni-load-more :status="loadingType"></uni-load-more>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			uniLoadMore	
		},
		data() {
			return {
				loadingType: 'more',
				headerPosition:"fixed",
				headerTop:"0px",
				pn:0,
				filterIndex: 0,
				goodsList:[],
				count:'',
				total:'0'
			};
		},
		onShow() {
			if(uni.getStorageSync('cbe_token')){
				this.loadData();
			}else{
				uni.showToast({ title:"未登录或无权限",icon: "none"});
				var timer = setTimeout(()=>{
					uni.navigateBack({
						delta:1
					})
				},1000);
			}
		},
		methods:{
			tabClick(index){
				this.pn = 0;
				if(this.filterIndex === index && index !== 2){
					return;
				}
				this.filterIndex = index;
				if(index === 2){
					this.priceOrder = this.priceOrder === 1 ? 2: 1;
				}else{
					this.priceOrder = 0;
				}
				uni.pageScrollTo({
					duration: 300,
					scrollTop: 0
				})
				uni.showLoading({
					title: '正在加载'
				})
				this.loadingType = 'more';
				this.goodsList = [];
				this.count     = 0;
				this.loadData('refresh', 1);
			},
			async loadData(type='add', loading){
				if(type === 'add'){
					if(this.loadingType === 'nomore'){
						uni.hideLoading()
						return;
					}
					this.loadingType = 'loading';
				}else{
					this.loadingType = 'more'
				}
				let goodsList = await this.getMyfenxiang();
				if(type === 'refresh'){
					this.goodsList = [];
				}
				this.goodsList = this.goodsList.concat(goodsList);
				
				//判断是否还有下一页，有是more  没有是nomore(测试数据判断大于20就没有了)
				this.loadingType  = this.goodsList.length > this.count ? 'nomore' : 'more';
				if(type === 'refresh'){
					if(loading == 1){
						uni.hideLoading()
					}else{
						uni.stopPullDownRefresh();
					}
				}
			},
			async getMyfenxiang(){
				return new Promise((resolve, reject) => {
					uni.showLoading({
						title: '请稍后'
					})
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/member/myFenxiang',
						data: {pn:this.pn,filterIndex:this.filterIndex,token:uni.getStorageSync('cbe_token')},
						method:'POST',
						dataType:'json',
						header: {'content-type' : 'application/x-www-form-urlencoded'},
						success: (res) => {
							uni.hideLoading()
							if(res.data.code==0){
								this.pn = Number(this.pn)+Number(1);
								this.count = res.data.count;
								resolve(res.data.data);
							}else{
								this.loadingType = "nomore"
							}
						},
						fail: (err) => {
							reject('err')
						}
					});
				})
			},
		}
	}
</script>

<style lang="scss">
	page{
		width:100%;background: #f4f4f4;
	}
	.clear{
		clear:both;
	}
	.navbar{
		position: fixed;
		left: 0;
		top: var(--window-top);
		display: flex;
		width: 100%;
		height: 80upx;
		background: #fff;
		box-shadow: 0 2upx 10upx rgba(0,0,0,.06);
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 30upx;
			color: $font-color-dark;
			position: relative;
			&.current{
				color: #008ab0;
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 120upx;
					height: 0;
					border-bottom: 4upx solid #008ab0;
				}
			}
		}
	}
	.topst{
		width:100%;padding:30upx 40upx; background: #f6f7f7; color:#37b0c9; font-size:26upx;margin-top:80upx;
		.lleft{
			float: left;
		}
		.lright{
			float: right;
		}
	}
	.text-right{
		text-align: right;
	}
	.zhuce{
		width:100%;padding:0upx 40upx; background: #FFFFFF;
		.zhuce-list{
			width:100%; border-bottom: 1upx solid #f2f2f2;height:103upx;
			view{
				line-height: 103upx;float: left;
			}
			.name{
				color:#323232; font-size:28upx; width: 175upx;
			}
			.phone{
				color:#323232 ;font-size: 28upx;
			}
			.money{
				color:#323232 ;font-size: 28upx;
			}
			.time{
				float: right; color:#808080; font-size: 28upx;
			}
		}
	}
	.chanpin{
		background: #FFFFFF; padding:0 40upx;
	}
	.goods-box-single{
		display: flex;
		padding: 30upx 0upx;
		border-bottom: 1upx solid #f2f2f2;
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
</style>

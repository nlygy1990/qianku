<template>
	<view class="content">
		<view class="list-item" v-for="(item,index) in goodsList" :key="index">
			<view class="ititle" @tap="navToDetailPage(item)">服务单号：{{item.refundno?item.refundno:''}} <image src="../../static/jiantou-r.png" class="jiantou"></image></view>
			<view class="goods-box-single">
				<image class="goods-img" :src="item.goods.thumb" mode="aspectFill"></image>
				<view class="right">
					<text class="title clamp">{{item.goods.title?item.goods.title:''}}</text>
					<text class="attr-box">产品编号:{{item.bh?item.bh:''}}</text>
					<text class="attr-box" v-if="item.optionname != null ">规格:{{item.optionname?item.optionname:''}}</text>
					<text class="price">{{item.price?item.price:''}}<text> x {{item.refoundtotal?item.refoundtotal:''}}</text></text>
				</view>
			</view>
			<view class="zhuangtai" v-if="item.status==0">
				<view class="lleft">待处理</view>
				<view class="rright">服务申请已提交，等待后台确认</view>
				<view class="clear"></view>
			</view>
			<view class="zhuangtai" v-if="(item.status==1 && item.refundtime==0) || item.status==2 || item.status==3 || item.status==4">
				<view class="lleft">处理中</view>
				<view class="rright">{{item.wuliu[0].content?item.wuliu[0].content:''}}</view>
				<view class="clear"></view>
			</view>
			<view class="zhuangtai" v-if="item.status==5 || (item.status==1 && item.refundtime>0)">
				<view class="lleft">退货完成</view>
				<view class="rright">已发起退款，服务已完成，感谢您对如新的支持</view>
				<view class="clear"></view>
			</view>
			<view class="zhuangtai" v-if="item.status==-1">
				<view class="lleft">审核不通过</view>
				<view class="rright">如有疑问，请联系客服</view>
				<view class="clear"></view>
			</view>
			<view class="zhuangtai" v-if="item.status==-2">
				<view class="lleft">退货申请取消</view>
				<view class="rright">服务已取消，如有需要可在原订单重新提交服务单</view>
				<view class="clear"></view>
			</view>
			<view class="caozuo">
				<text class="bb"  v-if="(item.status==3 && item.rexpresssn!='') || (item.status==1 && item.refundtime>0)" @tap="navToDetailPage(item)">查看进度</text>
				<text class="bb"  v-if="item.status==3 && item.rexpresssn==''" @tap="jihui(item.id)">寄回货物</text>
				<text class="aa" v-if="item.status==0" @click="quxiaoOrder(item.id)">取消申请</text>
				<text class="aa" v-if="item.status==-1">联系客服</text>
				<view class="clear"></view>
			</view>
		</view>
		<uni-load-more :status="loadingType" v-if="count>0"></uni-load-more>
		<image src="../../static/order-no.png" mode="" class="noshoucang" v-else></image>
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
				headerPosition:"fixed",
				loadingType: 'more', //加载更多状态
				goodsList: [],
				mgoodsList:[],
				pn:0,
				count:1
			};
		},
		onShow() {
			if(uni.getStorageSync('cbe_token')){
				this.loadData('refresh');
			}else{
				uni.showToast({ title:"未登录或无权限",icon: "none"});
				var timer = setTimeout(()=>{
					uni.navigateBack({
						delta:1
					})
				},1000);
			}
		},
		//下拉刷新
		onPullDownRefresh(){
			this.loadData('refresh');
		},
		//加载更多
		onReachBottom(){
			this.loadData();
		},
		methods:{
			goDelivery(ordersn){
				uni.navigateTo({
					url:'/pages/shouhou/wuliu?id='+this.refund.id+"&ordersn="+ordersn
				})
			},
			jihui(id){
				uni.navigateTo({
					url:'/pages/shouhou/jihui?id='+id
				})
			},
			quxiaoOrder(id){
				uni.showModal({
				    content: '确定取消申请吗？',
					confirmColor:'#008AB0',
				    success: (e)=>{
				    	if(e.confirm){
							uni.showLoading({
								title: '请稍后'
							})
							uni.request({
								url:uni.getStorageSync('hostname') + '?action=index/order/quxiao_shouhou',
								data:{id:id,token:uni.getStorageSync('cbe_token')},
								method:'POST',
								dataType:'json',
								header: {'content-type' : 'application/x-www-form-urlencoded'},
								success: (resa) => {
									uni.hideLoading();
									var one = resa.data;
									if(one.code==0){
										
									}
								}
							})
				    	}
				    }
				});
			},
			//加载商品 ，带下拉刷新和上滑加载
			async loadData(type='add',loading) {
				//没有更多直接返回
				if(type === 'add'){
					if(this.loadingType === 'nomore'){
						return;
					}
					this.loadingType = 'loading';
				}else{
					this.loadingType = 'more'
				}
				let goodsList = await this.getMyshoucang();
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
			async getMyshoucang(){
				return new Promise((resolve, reject) => {
					uni.showLoading({
						title: '请稍后'
					})
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/member/myShouhou',
						data: {pn:this.pn,token:uni.getStorageSync('cbe_token')},
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
			//筛选点击
			tabClick(index){
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
				this.loadData('refresh', 1);
				uni.showLoading({
					title: '正在加载'
				})
			},
			//详情
			navToDetailPage(item){
				//测试数据没有写id，用title代替
				let id = item.id;
				uni.navigateTo({
					url: `/pages/shouhou/detail?id=${id}`
				})
			},
			stopPrevent(){}
		}
	}
</script>

<style lang="scss">
	page{
		width:100%; background: #f4f4f4;
		.clear{
			clear:both;
		}
		.noshoucang{
			width:170upx; height:149upx; margin-left:290upx; margin-top:220upx;
		}
		.list-item{
			width:100%; padding:0upx 0upx; background: #FFFFFF; margin-top: 20upx;
			.ititle{
				font-size: 28upx; color:#333333;height: 95upx;line-height: 95upx; padding:0 40upx; border-bottom:1upx solid #ebebeb; position: relative;
				image{
					width:38upx;height:38upx; position: absolute; top:28upx; right:40upx;
				}
			}
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
						color: #333333;
						text{
							float: right; color:#353535;
						}
						&:before{
							content: '￥';
							font-size: 28upx;
							margin: 0 2upx 0 0upx;
						}
					}
				}
			}
			.zhuangtai{
				width:670upx; background: #f6f7f7;padding:30upx 30upx; margin:0 40upx; font-size: 26upx; color:#808080; border-radius:15upx;
				.lleft{
					float: left; font-size: 28upx; color:#37b0c9; padding-right: 30upx;
				}
				.rright{
					float: left; max-width: 480upx;
				}
			}
			.caozuo{
				padding:40upx 40upx 40upx 40upx;
				.aa{
					float: right; width: 170upx; height:60upx; border:1upx solid #008ab0; border-radius:60upx; color:#008ab0; font-size: 28upx; line-height:58upx; text-align: center; margin-right:20upx;
				}
				.bb{
					float: right; width: 170upx; height:60upx; border:1upx solid #008ab0; border-radius:60upx; color:#FFFFFF; font-size: 28upx; line-height:58upx; text-align: center; background: #008ab0;
				}
			}
		}
	}
</style>

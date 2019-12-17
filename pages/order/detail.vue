<template>
	<view class="container">
		<view class="cn-top">
			<view class="zhuangtai" v-if="one.status==0">待付款</view>
			<div class="times" v-if="one.status==0">请在<text>{{datetime.shi}}时{{datetime.fen}}分{{datetime.miao}}秒</text>内完成支付，否则将订单将被取消</div>
			<view class="zhuangtaia" v-if="one.status==1">待发货</view>
			<view class="zhuangtaia" v-if="one.status==2">待收货</view>
			<view class="zhuangtaia" v-if="one.status==3">已完成</view>
			<view class="zhuangtaia" v-if="one.status==4">申请维权中</view>
			<view class="zhuangtaia" v-if="one.status==5">维权完成</view>
			<view class="zhuangtaia" v-if="one.status==-1 && one.refundid==0 && one.refundtime==0">已取消</view>
			<view class="zhuangtaia" v-if="one.status==-1 && one.refundid>0 && one.refundtime>0">已退款</view>
		</view>
		<view class="wuliu" @click="goDelivery(one.ordersn)">
			<image src="../../static/kuaidi.png" mode="" class="kdtu"></image>
			<view class="titles">{{wuliu[0].title?wuliu[0].title:''}}</view>
			<view class="dh" v-if="one.expresssn">快递单号：{{one.expresssn?one.expresssn:'暂未发货'}}</view>
			<view class="sj">{{wuliu[0].desc?wuliu[0].desc:''}}</view>
			<image src="../../static/jiantou-r.png" mode="" class="jt"></image>
		</view>
		<view class="address"  @click="goDelivery(one.id)">
			<view class="name">{{one.address_name?one.address_name:''}} <text>{{one.address_phone_s?one.address_phone_s:''}}</text></view>
			<view class="dizhi">{{one.address_details?one.address_details:''}}</view>
		</view>
		<view v-for="(item,index) in one.bondedwhList" :key="index" class="order-item">
			<view class="titiles">{{item.bondedwh_name?item.bondedwh_name:''}}</view>
			<view class="goods"  v-for="(goodsItem,goodsIndex) in item.goodsList" :key="goodsIndex">
				<view class="goods-box-single">
					<image class="goods-img" :src="goodsItem.thumb" mode="aspectFill"></image>
					<view class="right">
						<text class="title clamp">{{goodsItem.title?goodsItem.title:''}}</text>
						<text class="attr-box">产品编号:{{goodsItem.goodssn}}</text>
						<text class="attr-box clamp" v-if="goodsItem.attr != null">规格:{{goodsItem.attr}}</text>
						<view class="price">{{goodsItem.price}}
							<text class="shouhou" v-if="( one.status==3 || one.status==4 ) && goodsItem.ketui==0" @tap="navTo('/pages/shouhou/shenqing?id='+goodsItem.id)">申请售后</text>
							<text class="shouhou" v-if="( one.status==3 || one.status==4 ) && goodsItem.ketui>0" @tap="navTo('/pages/shouhou/detail?id='+goodsItem.refund.id)">服务单详情</text>
							<text :class="one.status==3||one.status==4||one.status==5?'sj':''"> x {{goodsItem.number}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="goumairen">
			购买人：<text>{{one.address_idcard_s?one.address_idcard_s:''}}</text><text>{{one.address_name?one.address_name:''}}</text>
		</view>
		<view class="numbers">
			<view class="p1">订单编号：{{one.ordersn?one.ordersn:''}}</view>
			<view class="p1" v-if="one.status==1 || one.status==2 || one.status==3">支付单号：{{one.transid?one.transid:''}}</view>
			<view class="p1">下单时间：{{one.addtime?one.addtime:''}}</view>
		</view>
		<view class="jiage">
			<view class="p1">产品总金额 <text>￥{{one.goodsprice?one.goodsprice:''}}</text></view>
			<view class="p1">促销优惠 <text class="jian"> - ￥{{one.deductenough?one.deductenough:''}}</text></view>
			<view class="p1">运费 <text>￥{{one.dispatchprice?one.dispatchprice:''}}</text></view>
			<view class="p1">税费 <text>￥{{one.shuifei?one.shuifei:''}}</text></view>
		<!-- 	<view class="p1">现金优惠 <text class="jian"> - ￥{{one.addtime}}</text></view> -->
			<view class="p1">实付总额（含税费/运费） <text class="zong">￥{{one.price?one.price:''}}</text></view>
		</view>
		<view class="bboo"></view>
		<view class="bottoms">
			<view class="zhifu"  v-if="one.status!=0" @tap="zaicimai(one.zaicimai)">再次购买</view>
			<view class="zhifu"  v-if="one.status==0" @tap="navTo('/pages/money/pay?ordersn='+one.ordersn)">去支付</view>
			<view class="quxiao" v-if="one.status==0" @click="quxiaoOrder(one.ordersn)">取消订单</view>
			<view class="quxiao" v-if="one.status==1 && one.kequ==1" @click="quxiaoOrder(one.ordersn)">取消订单</view>
			<view class="quxiao" v-if="one.status==2" @click="goDelivery(one.ordersn)">查看物流</view>
			<view class="quxiao" v-if="one.status==4">评价</view>
		</view>
	</view>
</template>

<script>
	import uniCountdown from '@/components/uni-countdown/uni-countdown.vue'
	export default {
		components: {
			uniCountdown
		},
		data() {
			return {
				one:[],
				wuliu:[],
				datetime:{shi:'03',fen:'00',miao:'00'},
				hostname:uni.getStorageSync('hostname')
			}
		},
		onLoad(options){
			uni.showLoading({
				title: '请稍后'
			})
			uni.request({
				url:uni.getStorageSync('hostname') + '?action=index/order/order_detail',
				data:{id:options.id,token:uni.getStorageSync('cbe_token')},
				method:'POST',
				dataType:'json',
				header: {'content-type' : 'application/x-www-form-urlencoded'},
				success: (resa) => {
					uni.hideLoading();
					var datas = resa.data;
					this.one=datas.data;
					if(datas.data.status == 0 ){
						this.aatime(datas.data.cha);
					}
					this.wuliu = datas.wllist;
				},
			
			})
		},
		onShow() {
			uni.showLoading({
				title: '请稍后'
			})
			uni.request({
				url:uni.getStorageSync('hostname') + '?action=index/order/order_detail',
				data:{id:this.one.id,token:uni.getStorageSync('cbe_token')},
				method:'POST',
				dataType:'json',
				header: {'content-type' : 'application/x-www-form-urlencoded'},
				success: (resa) => {
					uni.hideLoading();
					var datas = resa.data;
					this.one=datas.data;
					if(datas.data.status == 0 ){
						this.aatime(datas.data.cha);
					}
					this.wuliu = datas.wllist;
				},
			
			})
		},
		methods:{
			timeup(){
				console.log('时间到');
			},
			goDelivery(id){
				uni.navigateTo({
					url:"/pages/order/delivery?ordersn="+id
				})
			},
			zaicimai(arr){
				uni.setStorageSync('buyarr',arr);
				var url = "/pages/order/createOrder";
				uni.navigateTo({
					url:url
				})
			},
			aatime(times){
				var that = this;
				this.timer = setInterval(() => {
					times = times-1;
					if(times>0){
						that.getTime(times);
					}else if(times==0){
						that.quxiaoOrder(that.one.ordersn);
						clearInterval(this.timer);
					}
				},1000);
			},
			quxiaoOrder(id){
				if(this.one.status==0){
					uni.showLoading({
						title: '请稍后'
					})
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/order/order_quxiao',
						data:{id:id,token:uni.getStorageSync('cbe_token')},
						method:'POST',
						dataType:'json',
						header: {'content-type' : 'application/x-www-form-urlencoded'},
						success: (resa) => {
							this.$api.prePage().loadData('refresh');
							uni.hideLoading();
							var one = resa.data;
							if(one.code==0){
								this.one.status = -1;
							}
						}
					})
				}
			},
			navTo(url){
				uni.navigateTo({
					url:url
				})
			},
			getTime(tt){
				var shi = Math.ceil(tt/(60*60))-1;
				var fen = (Math.ceil(tt/60)-1)-shi*60;
				var miao = tt-(shi*60*60)-(fen*60)-1;
				//console.log(shi);
				if(shi<"10"){
					this.datetime.shi = '0'+shi;
				}else{
					this.datetime.shi = shi;
				}
				if(fen<"10"){
					this.datetime.fen = '0'+fen;
				}else{
					this.datetime.fen = fen;
				}
				if(miao<"10"){
					this.datetime.miao = '0'+miao;
					
				}else{
					this.datetime.miao = miao;
				}
			},
		}
	}
</script>

<style lang="scss">
	page{
		background: #f4f4f4;width:100%;height: 100%;
	}
	.container{
		width:100%;
		.cn-top{
			height:160upx;width:100%;background:url("https://wxapp.tegou100.com/static/images/order-top.png") no-repeat; padding: 30upx 0upx;
			.zhuangtai{
				color:#FFFFFF; font-size:30upx; padding:0 40upx;line-height:60upx;
			}
			.times{
				color:#FFFFFF; font-size:26upx; padding:0 40upx;
			}
			.zhuangtaia{
				color:#FFFFFF; font-size:30upx; padding:0 40upx;line-height:100upx;
			}
		}
		.wuliu{
			width:100%; position: relative; background: #FFF; height: auto; padding-bottom:30upx;
			.kdtu{
				width:48upx;height:45upx; position: absolute; left:40upx; top:30upx;background: #FFF;
			}
			.titles{
				padding-top:30upx; font-size:30upx; color:#242424; margin-left: 110upx; background: #FFF;width:540upx;
			}
			.dh{
				margin-top:10upx; font-size:26upx; color:#242424; margin-left: 110upx;width:540upx; background: #FFF;
			}
			.sj{
				 margin-top:10upx; font-size:26upx; color:#242424; margin-left: 110upx; background: #FFF;
			}
			.jt{
				width:40upx;height: 40upx; position: absolute;right: 40upx; top:80upx; background: #FFF;
			}
		}
		.address{
			width:100%;height: 160upx;background: #FFFFFF;margin-top:20upx;padding: 30upx 0upx;
			.name{
				padding:0 40upx; font-size:30upx; color:#242424; font-weight:600;line-height:60upx;
				text{
					padding-left: 50upx;
				}
			}
			.dizhi{
				padding:0 40upx; font-size:26upx; color:#242424;
			}
		}
		.titiles{
			background: #FFFFFF; padding: 0 40upx; margin-top:20upx; border-bottom:1upx solid #ebebeb; height:90upx; line-height: 90upx; font-size: 28upx;
		}
		.goods{
			display: flex;
			flex-direction: column;
			background: #fff;
			padding-top: 10upx;
			padding-bottom: 30upx;
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
						.shouhou{
							padding:5upx 20upx; border:1upx solid #008ab0; border-radius:30upx; color:#008ab0;
						}
						.sj{
							padding-right: 20upx; padding-top: 5upx;
						}
						&:before{
							content: '￥';
							font-size: $font-sm;
							margin: 0 2upx 0 0upx;
						}
					}
				}
			}
		}
		.goumairen{
			background:#FFFFFF; padding:0 40upx; height:90upx; line-height:90upx; font-size:26upx; margin-top: 20upx; color:#333333;
			text{
				float: right;padding-left: 40upx;
			}
		}
		.numbers{
			background:#FFFFFF; padding:30upx 40upx; height:240upx; line-height:65upx; font-size:26upx; margin-top: 20upx; color:#333333; 
		}
		.jiage{
			background:#FFFFFF; padding:30upx 40upx; height:440upx; line-height:65upx; font-size:26upx; margin-top: 20upx; color:#333333;
			text{
				float: right;
			}
			.jian{
				color:#ff69b0;
			}
			.zong{
				color:#37b0c9; font-size:28upx;
			}
		}
		.bboo{
			height:150upx;clear:both;
		}
		.bottoms{
			height:110upx; position: fixed;bottom: 0upx; left:0upx;width:100%; background: #FFFFFF;
			view{
				width:170upx; height:60upx;text-align: center;line-height:58upx;font-size:28upx;margin:25upx 0;margin-right:40upx;border:1upx solid #ebebeb;border-radius: 100upx;
			}
			.quxiao{
				float: right;
			}
			.zhifu{
				float: right;background: #008ab0;color:#ffffff;
			}
		}
	}
</style>

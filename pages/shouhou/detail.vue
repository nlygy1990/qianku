<template>
	<view class="container">
		<view class="cn-top">
			<view class="zhuangtaia" v-if="refund.status==0 || (refund.status==1 && refund.refundtime==0) || refund.status==2 || refund.status==3 || refund.status==4">处理中</view>
			<view class="zhuangtaia" v-if="refund.status==5 || (refund.status==1 && refund.refundtime>0)">已完成</view>
			<view class="zhuangtaia" v-if="refund.status==-1">审核不通过</view>
			<view class="zhuangtaia" v-if="refund.status==-2">已取消</view>
		</view>
		<view class="wuliu" @click="goDelivery(one.ordersn)">
			<image src="../../static/jindu.png" mode="" class="kdtu"></image>
			<view class="titles">售后处理进度</view>
			<view class="dh">{{wuliu[0].title?wuliu[0].title:''}}</view>
			<view class="sj">{{wuliu[0].desc?wuliu[0].desc:''}}</view>
			<image src="../../static/jiantou-r.png" mode="" class="jt"></image>
			<view class="clear"></view>
		</view>
		<view v-for="(item,index) in one.bondedwhList" :key="index" class="order-item">
			<view class="titiles">商品信息</view>
			<view class="goods"  v-for="(goodsItem,goodsIndex) in item.goodsList" :key="goodsIndex">
				<view class="goods-box-single">
					<image class="goods-img" :src="goodsItem.thumb" mode="aspectFill"></image>
					<view class="right">
						<text class="title clamp">{{goodsItem.title?goodsItem.title:''}}</text>
						<text class="attr-box">产品编号:{{goodsItem.goodssn}}</text>
						<text class="attr-box" v-if="goodsItem.attr != null">规格:{{goodsItem.attr}}</text>
						<view class="price">{{goodsItem.price}}
							<text> x {{goodsItem.number}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="jiage">
			<view class="p1">服务单号： <text>{{refund.refundno?refund.refundno:''}}</text></view>
			<view class="p1">申请时间： <text>{{refund.createtime?refund.createtime:''}}</text></view>
			<view class="p1">服务类型： <text>退款</text></view>
			<view class="p1">退货金额： <text>￥{{refund.applyprice?refund.applyprice:''}}</text></view>
			<view class="p1">退款方式： <text>原返</text></view>
		</view>
		<view class="bboo"></view>
		<view class="bottoms">
			<view class="zhifu" v-if="(refund.status==3 && refund.rexpresssn!='') || (refund.status==1 && refund.refundtime>0)"  @click="goDelivery(one.ordersn)">查看进度</view>
			<view class="zhifu" v-if="refund.status==3 && refund.rexpresssn==''"  @tap="jihui(refund.id)">寄回货物</view>
			<view class="quxiao" v-if="refund.status==0" @click="quxiaoOrder(refund.id)">取消申请</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				one:[],
				refund:[],
				wuliu:[],
				id:''
			}
		},
		onLoad(e) {
			if(e.id){
				this.id = e.id;
			}
		},
		onShow() {
			uni.showLoading({
				title: '请稍后'
			})
			uni.request({
				url:uni.getStorageSync('hostname') + '?action=index/order/getShouhouDetail',
				data:{id:this.id,token:uni.getStorageSync('cbe_token')},
				method:'POST',
				dataType:'json',
				header: {'content-type' : 'application/x-www-form-urlencoded'},
				success: (resa) => {
					uni.hideLoading();
					var datas = resa.data;
					this.one = datas.data;
					this.refund = datas.refund;
					this.wuliu = datas.wllist;
				},
			})
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
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #f4f4f4;width:100%;height: 100%;
	}
	.clear{
		clear:both;
	}
	.container{
		width:100%;
		.cn-top{
			height:160upx;width:100%;background:url("https://wxapp.tegou100.com/static/images/shouhou-top.png") no-repeat; padding: 30upx 0upx;
			.zhuangtaia{
				color:#FFFFFF; font-size:30upx; padding:0 40upx;line-height:100upx; background:none; width: 400upx;
			}
		}
		.wuliu{
			width:100%; position: relative; background: #FFF; height: auto; padding-bottom:30upx;
			.kdtu{
				width:48upx;height:45upx; position: absolute; left:40upx; top:30upx;background: #FFF;
			}
			.titles{
				padding-top:30upx; font-size:30upx; color:#242424; margin-left: 110upx; background: #FFF;
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
		.jiage{
			background:#FFFFFF; padding:30upx 40upx; height:380upx; line-height:65upx; font-size:26upx; margin-top: 20upx; color:#333333;
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
		.titiles{
			background: #FFFFFF; padding: 0 40upx; margin-top:20upx; border-bottom:1upx solid #ebebeb; height:90upx; line-height: 90upx; font-size: 28upx;
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

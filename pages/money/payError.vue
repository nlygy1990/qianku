<template>
	<view class="content">
		<view class="ptop">
			<image src="../../static/pay_erro.png" mode=""></image>
			<view class="tit">{{title}}</view>
		</view>
		<view class="yt-list">
			<view class="yt-list-cell">
				<text class="cell-tit clamp">订单号</text>
				<text class="cell-tip">{{orderInfo.ordersn?orderInfo.ordersn:''}}</text>
			</view>
			<view class="yt-list-cell">
				<text class="cell-tit clamp">订单金额</text>
				<text class="cell-tip">￥{{orderInfo.price?orderInfo.price:''}}</text>
			</view>
		</view>
		<view class="btn-group">
			<navigator :url="'/pages/order/order?state=0&ordersn='+id" open-type="redirect" class="mix-btn hollow">查看订单</navigator>
			<navigator :url="'/pages/money/pay?ordersn='+id" open-type="redirect" class="mix-btn" v-if="typea==true">继续支付</navigator>
			<navigator url="'/pages/product/list" open-type="redirect" class="mix-btn" v-else>重新购买</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title:'订单支付失败',
				typea:true,
				orderInfo:{},
				id:''
			}
		},
		onLoad(e) {
			if(e.errortype && e.errortype=="cancle"){
				this.title = "订单超时取消";
				this.typea = false;
			}
			if(e.ordersn){
				this.id = e.ordersn;
				this.getOrder(e.ordersn)
			}
		},
		methods: {
			getOrder(id){
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/order/order_detail',
					data:{id:id,token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						var one = resa.data;
						if(one.code==0){
							this.orderInfo = one.data;
						}
					}
				})
			},
		}
	}
</script>

<style lang='scss'>
	page{width:100%; height:100%; background:#f4f4f4;}
	.content{
		display: flex;
		flex-direction: column;
		.ptop{
			width:750upx; height: 330upx; text-align: center; background: #ffffff; border-top:1upx solid #f4f4f4; padding:35upx 0;
			image{
				width:122upx;height:143upx;
			}
			.tit{
				color:#333333; font-size:30upx; padding-top:10upx;
			}
			.times{
				color:#808080; font-size:26upx; padding-top:10upx;
			}
		}
	}
	.yt-list {
		margin-top: 20upx;
		background: #fff;
	}	
	.yt-list-cell {
		display: flex;
		align-items: center;
		padding: 10upx 30upx 10upx 40upx;
		line-height: 70upx;
		position: relative;
		.cell-tit {
			flex: 1;
			font-size: 26upx;
			color: #333333;
			margin-right: 10upx;
			image{
				width:28upx; height:28upx; margin-left:20upx;
			}
		}
		.cell-tip {
			font-size: 26upx;
			color: #333333;
			&.disabled {
				color: $font-color-light;
			}
	
			&.active {
				color: $base-color;
			}
			&.red{
				color: #ff69b0;
			}
		}
	}
	.btn-group{
		position: fixed;
		left: 40upx;
		right: 40upx;
		bottom: 60upx;
		z-index: 95;
	}
	.mix-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 320upx;
		height: 80upx;
		font-size: 28upx;
		color: #fff;
		background-color:#008ab0;
		border:1upx solid #008ab0;
		border-radius: 10upx;
		float:left;
		margin-left:30upx;
		&.hollow{
			background: #fff;
			color: #008ab0;
			margin-left:0upx;
		}
	}
</style>
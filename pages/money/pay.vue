<template>
	<view class="app">
		<view class="ptop">
			<image src="../../static/pay_success.png" mode=""></image>
			<view class="tit">订单提交成功</view>
			<view class="times">
				请在<text>{{datetime.shi}}时{{datetime.fen}}分{{datetime.miao}}秒</text>内完成支付，否则将订单将被取消
			</view>
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

		<view class="pay-type-list">

			<view class="type-item b-b" @click="changePayType(1)">
				<image src="../../static/wxpay.png" mode="" style="width:50upx;height:40upx;margin-right: 50upx;"></image>
				<view class="con">
					<text class="tit">微信支付</text>
					<text style="display:none;">推荐使用微信支付</text>
				</view>
				<label class="radio">
					<radio value="" color="#008ab0" :checked='payType == 1' />
					</radio>
				</label>
			</view>
			<view class="type-item b-b" @click="changePayType(2)">
				<image src="../../static/alipay.png" mode="" style="width:44upx;height:44upx;margin-right:56upx;"></image>
				<view class="con">
					<text class="tit">支付宝支付</text>
				</view>
				<label class="radio">
					<radio value="" color="#008ab0" :checked='payType == 2' />
					</radio>
				</label>
			</view>
			<view class="type-item" @click="changePayType(3)" style="display:none;">
				<text class="icon yticon icon-erjiye-yucunkuan"></text>
				<view class="con">
					<text class="tit">预存款支付</text>
					<text>可用余额 ¥198.5</text>
				</view>
				<label class="radio">
					<radio value="" color="#008ab0" :checked='payType == 3' />
					</radio>
				</label>
			</view>
		</view>
		<!-- #ifdef MP-WEIXIN -->
		<button class="mix-btn" open-type="getUserInfo" hover-class="none" @getuserinfo="confirm">确认支付</button>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<button class="mix-btn" hover-class="none" @click="confirm">确认支付</button>
		<!-- #endif -->
	</view>
</template>

<script>
	// #ifdef H5
	const wx = require('../../common/jweixin-module');
	// #endif
	export default {
		data() {
			return {
				payType: 1,
				orderInfo: {},
				miao:10800,
				datetime:{shi:'03',fen:'00',miao:'00'},
				id:''
			};
		},
		computed: {
		
		},
		onLoad(options){
			var token = uni.getStorageSync('cbe_token');
			if(token){
				this.id = options.ordersn;
				this.getOrder(options.ordersn);
			}else{
				uni.showToast({ title:"未登录或无权限",icon: "none"});
				var timer = setTimeout(()=>{
					uni.navigateBack({
						delta:1
					})
				},1000);
			}
			// this.aatime(this.miao);
		},

		methods: {
			// #ifdef H5
			
			// #endif
			aatime(times){
				var that = this;
				this.timer = setInterval(() => {
					times = times-1;
					if(times>0){
						that.getTime(times);
					}else{
						that.quxiaoOrder(that.id);
					}
				},1000);
			},
			getTime(tt){
				var shi = Math.ceil(tt/(60*60))-1;
				var fen = (Math.ceil(tt/60)-1)-shi*60;
				var miao = tt-(shi*60*60)-(fen*60)-1;
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
			getOrder(id){
				uni.showLoading({
					title: '加载中',
					mask: true
				});
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/order/order_detail',
					data:{id:id,token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						uni.hideLoading();
						var one = resa.data;
						if(one.code==0){
							this.orderInfo = one.data;
							if(one.data.cha>0){
								this.aatime(one.data.cha);
							}else{
								this.quxiaoOrder(id);
							}
						}
					},
					fail: (resa) => {
						uni.hideLoading();
					}
				})
			},
			quxiaoOrder(id){
				if(this.orderInfo.status==0){
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/order/order_quxiao',
						data:{id:id,token:uni.getStorageSync('cbe_token')},
						method:'POST',
						dataType:'json',
						header: {'content-type' : 'application/x-www-form-urlencoded'},
						success: (resa) => {
							var one = resa.data;
							if(one.code==0){
								uni.showToast({ title: '订单超时取消', icon: 'none' });
								uni.redirectTo({
									url:"/pages/money/payError?errortype=cancle&ordersn="+id
								})
							}
						}
					})
				}
			},
			//选择支付方式
			changePayType(type) {
				this.payType = type;
			},
			checkpay(){
				uni.showLoading({
					title: '等待支付结果'
				});
				var that = this;
				uni.request({
					url: uni.getStorageSync('hostname') + '?action=index/pay/checkpay',
					data: {ordersn:that.orderInfo.ordersn},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (res) => {
						if(res.data.code==0){
							uni.hideLoading();
							var timer = setTimeout(()=>{
								uni.redirectTo({
									url: '/pages/money/paySuccess?ordersn='+that.orderInfo.ordersn
								})
							},100);
						}
					}
				})
			},
			//确认支付
			confirm: async function(e) {
				var that = this;
				if(this.payType==1){ //微信支付
					// #ifdef MP-WEIXIN
						var paytype = 'wechat_mp';
						if(e.detail.errMsg=="getUserInfo:ok"){
							uni.showLoading({
								title: '正在授权',
								mask: true
							});
							uni.login({
								provider: 'weixin',
								success: function (loginRes) {
									if(loginRes.errMsg=="login:ok"){
										var code = loginRes.code;
										uni.getUserInfo({
											provider: 'weixin',
											lang:'zh_CN',
											success: function (infoRes) {
												var infoRes = JSON.stringify(infoRes);
												uni.request({
													url: uni.getStorageSync('hostname') + '?action=index/pay/index',
													data: {types:paytype,token:uni.getStorageSync('cbe_token'),ordersn:that.orderInfo.ordersn,code:loginRes.code,infoRes:infoRes},
													method:'POST',
													dataType:'json',
													header: {'content-type' : 'application/x-www-form-urlencoded'},
													success: (res) => {
														if(res.data.code==0){
															var one  = res.data.data; 
															uni.requestPayment({
																provider: 'wxpay',
																timeStamp: one.timeStamp,
																nonceStr: one.nonceStr,
																package: one.package,
																signType: one.signType,
																paySign: one.paySign,
																success: function (res) {
																	that.checkpay();
																},
																fail: function (err) {
																	uni.redirectTo({
																		url: '/pages/money/payError?ordersn='+that.orderInfo.ordersn
																	})
																}
															});
														}else{
															that.checkpay();
														}
													},
													fail:function(ee){
														uni.showToast({ title: '授权失败，请稍候再试', icon: 'none' });
													}
												})
											},
											fail:function(ee){
												uni.showToast({ title: '授权失败，请稍候再试', icon: 'none' });
											}
										})
									}else{
										uni.showToast({ title: '授权失败，请稍候再试', icon: 'none' });
									}
								},
								fail:function(ee){
									uni.showToast({ title: '授权失败，请稍候再试', icon: 'none' });
								}
							})
						}else{
							uni.showToast({ title: '无权限支付，请先授权', icon: 'none' });
						}
					// #endif
					// #ifdef H5
						var paytype = 'wechat_js';
						var hurl  = uni.getStorageSync('hostname');
						uni.request({
							url: uni.getStorageSync('hostname') + '?action=index/pay/index',
							data: {types:paytype,token:uni.getStorageSync('cbe_token'),ordersn:this.orderInfo.ordersn,hurl:hurl},
							method:'POST',
							dataType:'json',
							header: {'content-type' : 'application/x-www-form-urlencoded'},
							success: (res) => {
								if(res.data.code==0){
									function onBridgeReady(){
										WeixinJSBridge.invoke(
											'getBrandWCPayRequest', {
												"appId":res.data.data.appId,//公众号名称，由商户传入     
												"timeStamp":res.data.data.timeStamp,//时间戳，自1970年以来的秒数     
												"nonceStr":res.data.data.nonceStr, //随机串     
												"package":res.data.data.package,//package   
												"signType":res.data.data.signType,//微信签名方式：     
												"paySign":res.data.data.paySign //微信签名 
											},
											function(res){
												if(res.err_msg == "get_brand_wcpay_request:ok" ){
													that.checkpay();
												} 
											}
										); 
									}
									if (typeof WeixinJSBridge == "undefined"){
										if( document.addEventListener ){
											document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
										}else if (document.attachEvent){
											document.attachEvent('WeixinJSBridgeReady', onBridgeReady); 
											document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
										}
									}else{
										onBridgeReady();
									}
								}else{
									that.checkpay();
								}
							}
						})
					// #endif
				}else{ //支付宝支付
					// uni.redirectTo({
					// 	// url: '/pages/money/payError?ordersn='+this.orderInfo.ordersn
					// 	url:'/pages/money/payapi?types=alipay&ordersn='+this.orderInfo.ordersn
					// })
				}
			},
		}
	}
</script>

<style lang='scss'>
	page{
		width:100%; height:100%; background:#f4f4f4;
	}
	.app {
		width: 100%;
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
				text{
					color:#37b0c9;
				}
			}
		}
	}

	.price-box {
		margin-top: 20upx;
		background-color: #fff;
		height: 265upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		color: #909399;

		.price{
			font-size: 50upx;
			color: #303133;
			margin-top: 12upx;
			&:before{
				content: '￥';
				font-size: 40upx;
			}
		}
	}

	.pay-type-list {
		margin-top: 20upx;
		background-color: #fff;
		padding-left: 60upx;
		
		.type-item{
			height: 120upx;
			padding: 20upx 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 60upx;
			font-size: 30upx;
			position:relative;
		}
		
		.icon{
			width: 100upx;
			font-size: 52upx;
		}
		.icon-erjiye-yucunkuan {
			color: #fe8e2e;
		}
		.icon-weixinzhifu {
			color: #36cb59;
		}
		.icon-alipay {
			color: #01aaef;
		}
		.tit{
			font-size: $font-lg;
			color: $font-color-dark;
			margin-bottom: 4upx;
		}
		.con{
			flex: 1;
			display: flex;
			flex-direction: column;
			font-size: $font-sm;
			color: $font-color-light;
		}
	}
	.mix-btn {
		position: fixed;
		left: 40upx;
		right: 40upx;
		bottom: 60upx;
		z-index: 95;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 670upx;
		height: 80upx;
		font-size: 28upx;
		color: #fff;
		background-color: #008ab0;
		border-radius: 10upx;
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

</style>

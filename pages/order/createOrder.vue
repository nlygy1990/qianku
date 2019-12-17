<template>
	<view>
		<!-- 地址 -->
		<navigator url="/pages/address/address?source=1" class="address-section" hover-class="none">
			<view class="order-content">
				<text class="yticon icon-shouhuodizhi"></text>
				<view class="cen" v-if="addressData.realname">
					<view class="top">
						<text class="name">{{addressData.realname}}</text>
						<text class="mobile">{{addressData.ycphone}}</text>
					</view>
					<text class="address">{{addressData.address}} {{addressData.areaa}}</text>
				</view>
				<view class="noadd" v-else>设置收货地址</view>
				<image src="../../static/jiantou-r.png" mode="" style="width:32upx;height: 32upx;margin-right: 30upx;" class="yticon"></image>
			</view>
		</navigator>
		<!-- 购买人 -->
		<navigator url="/pages/goumairen/goumairen?source=1" class="gmr-section" hover-class="none">
			<view class="order-content">
				<text class="tit">购买人：</text>
				<view class="cen" v-if="goumaiData.realname">
					{{goumaiData.realname}}&emsp;{{goumaiData.ycidcard}}
				</view>
				<view class="nocen" v-else>
					因海关要求，请验证购买支付人身份证信息
				</view>
				<image src="../../static/jiantou-r.png" mode="" style="width:32upx;height: 32upx;margin-right: 30upx;" class="yticon"></image>
			</view>
		</navigator>
		<view class="gmsm">
			<view>根据海关规定，购买跨境商品需提交购买人真实姓名和身份证号码，且该实名信息必须与支付人的姓名和身份证信息一致，否则无法清关。</view>
		</view>

		<view class="goods-section">
			<view class="g-header b-b">
				<text class="name">购买信息</text>
			</view>
			<!-- 商品列表 -->
			<view class="g-item" v-for="(item,key) in goodsData" :key="key">
				<image :src="item.goods_detail.thumb"></image>
				<view class="right">
					<view class="title">{{item.goods_detail.title}}</view>
					<view class="spec">产品编号：{{item.goods_detail.goodssn}}</view>
					<view class="spec" v-if="item.guige!=''">规格：{{item.guige_detail.title}}</view>
					<view class="price-box">
						<text class="price" v-if="item.price>0">￥{{item.price}} 
							<text v-if="item.productprice > item.price">￥{{item.productprice}}</text>
						</text>
						<text class="price" v-else>￥{{item.marketprice}} 
							<text v-if="item.productprice > item.marketprice">￥{{item.productprice}}</text>
						</text>
						<text class="number">x {{item.nums}}</text>
					</view>
				</view>
			</view>
		</view>

		<!-- 优惠明细 -->
		<view class="yt-list">
			<view class="yt-list-cell b-b" v-if="manjian.enough > 0 && manjian.give > 0 && youhuiquanData.couponname==''">
				<view class="cell-icon">
					满减
				</view>
				<text class="cell-tit clamp">
					<text v-if="manjian.enough>0 && manjian.give>0">满{{manjian.enough}}元减{{manjian.give}}元</text>
					<text v-if="manjian.enough>0 && manjian.give>0 && manjian.xenough>0 && manjian.xgive>0" style="display:none;">，</text>
					<text v-if="manjian.xenough>0 && manjian.xgive>0"  style="display:none;">再凑{{manjian.xenough-priceData.price}}减{{manjian.xgive}}</text>
				</text>
				<text class="cell-more wanjia wanjia-gengduo-d"></text>
			</view>
			<view class="yt-list-cell b-b" @tap="toggleMask(youhuiquanData)" v-if="priceData.youhuiquan.keyong>0">
				<view class="cell-icon hb">
					优惠券
				</view>
				<text class="cell-tit clamp">{{youhuiquanData.couponname?youhuiquanData.couponname:'有可用优惠券'}}</text>
				<image src="../../static/jiantou-r.png" mode="" style="width:32upx;height: 32upx;" class="yticon"></image>
			</view>
		</view>
		<!-- 金额明细 -->
		<view class="yt-list">
			<view class="yt-list-cell">
				<text class="cell-tit clamp">产品总金额</text>
				<text class="cell-tip">￥{{priceData.price}}</text>
			</view>
			<view class="yt-list-cell">
				<text class="cell-tit clamp">促销优惠</text>
				<text class="cell-tip red" v-if="priceData.cxyhprice>0">-￥{{priceData.cxyhprice}}</text>
				<text class="cell-tip red" v-else>-￥0.00</text>
			</view>
			<view class="yt-list-cell">
				<text class="cell-tit clamp">运费</text>
				<text class="cell-tip" v-if="priceData.yunfei>0">￥ {{priceData.yunfei}}</text>
				<text class="cell-tip" v-else>包邮</text>
			</view>
			<view class="yt-list-cell">
				<view class="cell-tit clamp" @tap="shuifeishuoming">税费 <image src="../../static/wenhao.png" mode=""></image></view>
				<text class="cell-tip" v-if="priceData.shuifei>0">￥{{priceData.shuifei}}</text>
				<text class="cell-tip" v-else>含税</text>
			</view>
			<view class="yt-list-cell">
				<text class="cell-tit clamp">现金优惠</text>
				<text class="cell-tip red" v-if="priceData.xjyhprice>0">-￥{{priceData.xjyhprice}}</text>
				<text class="cell-tip red" v-else>-￥0.00</text>
			</view>
			<view class="yt-list-cell desc-cell" style="display:none;">
				<text class="cell-tit clamp">备注</text>
				<input class="desc" type="text" v-model="desc" placeholder="请填写备注信息" placeholder-class="placeholder" />
			</view>
			<view class="yt-list-cell aaa">
				<label class="radio"><radio value="r1" checked="true" style="transform:scale(0.7)" color="#008ab0"/>购买如新海外购商品需同意</label>
				<text @tap="navTo('/pages/public/onepage?id=4')">《用户购买需知》</text>
			</view>
		</view>
		
		<!-- 底部 -->
		<view class="footer">
			<view class="price-content">
				<text>实付款</text>
				<text class="price-tip">￥</text>
				<text class="price">{{priceData.totalprice}}</text>
			</view>
			<text class="submit" @click="submit">提交订单</text>
		</view>
		<uni-popup :show="type === 'middle-list'" position="middle" mode="fixed" @hidePopup="togglePopup('')">
			<scroll-view :scroll-y="true" class="uni-center center-box" :style="smheight">
				 <rich-text :nodes="kjshuoming"></rich-text>
				 <view class="zdl" @tap="togglePopup('')">
				 	我知道了
				 </view>
			</scroll-view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				type:'',
				kjshuoming:'',
				smheight:'',
				maskState: 0, //优惠券面板显示状态
				desc: '', //备注
				payType: 1, //1微信 2支付宝
				addressData:[],
				goumaiData:[],
				youhuiquanData:{couponname:''},
				goodsData:[],
				priceData:[],
				manjian:[],
				shijiprice:0
			}
		},
		onLoad(option){
			const res = uni.getSystemInfoSync();
			var wh = res.windowHeight;
			this.smheight = 'max-height:'+(wh-60)+'px';
			var token = uni.getStorageSync('cbe_token');
			if(token){
				this.getProduct('');
				this.getMembers();
			}else{
				uni.showToast({ title:"未登录或无权限",icon: "none"});
				var timer = setTimeout(()=>{
					uni.navigateBack({
						delta:1
					})
				},1000);
			}
		},
		onShow() {
			console.log(this.youhuiquanData);
		},
		methods: {
			ckyh(item){
				var youhui = "";
				if(item.backtype==0){
					youhui = item.deduct;
				}else if(item.backtype==1){
					youhui = (this.priceData.price - (item.discount/10)*this.priceData.price).toFixed(2);
				}
				this.getProduct(youhui);
			},
			getProduct(jian){
				var arr = uni.getStorageSync('buyarr');
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/product/getProduct',
					data:{datas:JSON.stringify(arr),token:uni.getStorageSync('cbe_token'),jian:jian},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						this.goodsData = resa.data.list;
						this.priceData = resa.data.one;
						this.manjian   = resa.data.manjian;
						if(this.shijiprice==0){
							this.shijiprice = resa.data.one.price;
						}
					}
				})
			},
			getMembers(){
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/getAddressMoren',
					data: {token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						uni.hideLoading();
						var one = resa.data;
						if(one.code==0){
							this.addressData = one.one;
							this.goumaiData  = one.two;
							this.kjshuoming  = one.three.content;
						}
					}
				})
			},
			navTo(url){
				uni.navigateTo({
					url:url
				})
			},
			toggleMask(youhuiquan){
				uni.setStorageSync('cbe_shijiprice',this.shijiprice);
				if(youhuiquan.id){
					uni.navigateTo({
						url:"/pages/youhuiquan/youhuiquan?source=1&yhqid="+youhuiquan.id
					})
				}else{
					uni.navigateTo({
						url:"/pages/youhuiquan/youhuiquan?source=1"
					})
				}
			},
			numberChange(data) {
				this.number = data.number;
			},
			changePayType(type){
				this.payType = type;
			},
			submit(){
				if(!this.addressData.realname){
					uni.showToast({ title: '请选择收货地址', icon: 'none' });
					return false;
				}
				if(!this.goumaiData.realname){
					uni.showToast({ title: '请选择购买人', icon: 'none' });
					return false;
				}
				uni.showLoading({
					title: '正在生成订单',
					mask: true
				});
				var address = JSON.stringify(this.addressData);
				var goumairen = JSON.stringify(this.goumaiData);
				var gids = uni.getStorageSync('buyarr');
				var goods = JSON.stringify(this.goodsData);
				var price = JSON.stringify(this.priceData);
				var youhuiquan = JSON.stringify(this.youhuiquanData);
				// #ifdef MP
				var order_from = "wxapp";
				// #endif
				// #ifdef H5
				var order_from = "h5";
				// #endif
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/order/addorder',
					data:{address:address,goumairen:goumairen,goods:goods,price:price,youhuiquan:youhuiquan,token:uni.getStorageSync('cbe_token'),order_from:order_from},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						uni.hideLoading();
						var one = resa.data;
						if(one.code==0){
							uni.showToast({
								title:one.msg,icon:'success',mask:true,duration: 3000
							});
							uni.redirectTo({
								url: '/pages/money/pay?ordersn='+one.ordersn
							})
							this.quxiao(one.ordersn,one.uid);
						}else{
							uni.showToast({ title:one.msg, icon: "none" });
						}
					},
					fail: (resa) => {
						uni.hideLoading();
					}
				})
			},
			quxiao(ordersn,uid){
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/order/jihua_quxiao',
					data:{ordersn:ordersn,uid:uid},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						
					},
					fail: (resa) => {
						
					}
				})
			},
			togglePopup(type) {
				this.type = type;
			},
			shuifeishuoming(){
				this.togglePopup('middle-list');
			},
			stopPrevent(){}
		}
	}
</script>

<style lang="scss">
	page {
		background: $page-color-base;
		padding-bottom: 100upx;
	}
	.aaa{
		height:140upx;background:#f4f4f4;color:#808080; font-size:26upx;
		text{
			color:#37b0c9;
		}
	}
	.address-section {
		padding: 30upx 0;
		background: #fff;
		position: relative;

		.order-content {
			display: flex;
			align-items: center;
		}

		.icon-shouhuodizhi {
			flex-shrink: 0;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 90upx;
			color: #888;
			font-size: 44upx;
		}

		.cen {
			display: flex;
			flex-direction: column;
			flex: 1;
			font-size: 28upx;
			color: $font-color-dark;
		}
		.noadd{
			display: flex;
			flex-direction: column;
			flex: 1;
			font-size: 28upx;
			color: $font-color-dark;
		}

		.name {
			font-size: 34upx;
			margin-right: 24upx;
		}

		.address {
			margin-top: 16upx;
			margin-right: 20upx;
			color: $font-color-light;
		}

		.icon-you {
			font-size: 32upx;
			color: #333333;
			margin-right: 30upx;
		}

		.a-bg {
			position: absolute;
			left: 0;
			bottom: 0;
			display: block;
			width: 100%;
			height: 5upx;
		}
	}

	.gmr-section{
		padding: 30upx 0;
		background: #fff;
		position: relative;
		margin-top:20upx;
		.order-content {
			display: flex;
			align-items: center;
		}
		.tit{
			width:135upx;padding-left:30upx; font-size: 26upx;color:#333333;
		}
		.cen {
			width: 555upx;
			display: flex;
			flex-direction: column;
			flex: 1;
			font-size: 26upx;
			color:#333333;
		}
		.nocen {
			width: 555upx;
			display: flex;
			flex-direction: column;
			flex: 1;
			font-size: 26upx;
			color: #cccccc;
		}
		.icon-you {
			font-size: 32upx;
			color: #333333;
			margin-right: 30upx;
		}
	}
	.gmsm{
		padding: 12upx 30upx 30upx 30upx;
		background: #fff;
		position: relative;
		border-top: 1upx solid #ebebeb;
		view{
			background:#f6f7f7;font-size:24upx;padding:15upx 25upx; color:#808080; line-height:36upx;
		}
	}
	
	.goods-section {
		margin-top: 20upx;
		background: #fff;
		padding-bottom: 1px;
		.g-header {
			display: flex;
			align-items: center;
			height: 84upx;
			padding: 0 30upx;
			position: relative;
		}
		.name {
			font-size: 28upx;
			color: #333333;
		}

		.g-item {
			display: flex;
			margin: 30upx 30upx;
			position: relative;
			image {
				flex-shrink: 0;
				display: block;
				width: 180upx;
				height: 180upx;
				border:1upx solid #cccccc;
			}
			.right {
				flex: 1;
				padding-left: 24upx;
				overflow: hidden;
			}
			.title {
				font-size: 26upx;
				color: #323232;
				padding: 5upx 0;
				padding-top:0upx;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
			.spec {
				font-size: 24upx;
				color: #808080;
			}

			.price-box {
				width:486upx;
				font-size: 28upx;
				padding-top: 10upx;
				position: absolute; bottom: 0upx;
				.price {
					color:#37b0c9;
					font-size: 28upx;
					margin-bottom: 4upx;
					text{
						font-size:24upx;
						color: $font-color-light;
						text-decoration: line-through;
						padding: 0 15upx;
					}
				}
				.number{
					font-size: 28upx;
					color: #353535;
					margin-left: 20upx;
					position: absolute;
					right:0upx;
				}
			}

			.step-box {
				position: relative;
			}
		}
	}
	.yt-list {
		margin-top: 16upx;
		background: #fff;
	}
	.yt-list-cell {
		display: flex;
		align-items: center;
		padding: 10upx 30upx 10upx 40upx;
		line-height: 70upx;
		position: relative;

		&.cell-hover {
			background: #fafafa;
		}

		&.b-b:after {
			left: 30upx;
		}

		.cell-icon {
			height: 38upx;
			width:100upx;
			font-size:26upx;
			color: #ffad43;
			text-align: center;
			line-height: 36upx;
			background: #ffffff;
			border-radius: 38upx;
			margin-right: 12upx;
			border:1upx solid #ffad43;
			&.hb {
				background: #ffffff;
			}
			&.lpk {
				background: #ffffff;
			}
		}

		.cell-more {
			align-self: center;
			font-size: 24upx;
			color: $font-color-light;
			margin-left: 8upx;
			margin-right: -10upx;
		}

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

		&.desc-cell {
			.cell-tit {
				max-width: 90upx;
			}
		}

		.desc {
			flex: 1;
			font-size: $font-base;
			color: $font-color-dark;
		}
	}
	.footer{
		position: fixed;
		left: 0;
		bottom: 0;
		z-index: 995;
		display: flex;
		align-items: center;
		width: 100%;
		height: 110upx;
		justify-content: space-between;
		font-size: 30upx;
		background-color: #fff;
		z-index: 998;
		color: $font-color-base;
		box-shadow: 0 -1px 5px rgba(0,0,0,.1);
		.price-content{
			width: 490upx;
			padding-left:30upx;
			text-align: right;
			font-size:26upx;
		}
		.price-tip{
			font-size: 28upx;
			color:#37b0c9;
			margin-left: 8upx;
		}
		.price{
			font-size: 28upx;
			color: #37b0c9;
		}
		.submit{
			display:flex;
			align-items:center;
			justify-content: center;
			width: 190upx;
			height: 72upx;
			color: #ffffff;
			font-size: 28upx;
			background-color:#008ab0;
			margin-right: 30upx;
			border-radius: 72upx;
		}
	}
	.uni-center{
		width:568upx; max-height: 900upx; min-height:600upx;
		.zdl{
			text-align: center; color:#008ab0; font-size:28upx;padding-top:40upx;
		}
	}
</style>

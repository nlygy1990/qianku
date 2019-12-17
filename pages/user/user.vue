<template>  
    <view class="container">  
		<view class="user-section">
			<!-- #ifdef MP -->
			<view class="top-menu">
				<image src="../../static/email.png" mode="" class="email"  @tap="navTo('/pages/notice/notice')" v-if="!showRigth"></image>
				<image src="../../static/email_c.png" mode="" class="email"  @tap="navTo('/pages/notice/notice')" v-else></image>
				<view class="top-red"></view>
				<image src="../../static/mulu.png" mode="" class="mulu" @tap="show('right')" v-if="!showRigth"></image>
				<image src="../../static/x.png" mode="" class="mulu" @tap="hide()" v-else></image>
				<image src="../../static/gouwuche.png" mode="" class="gouwuche" @tap="navToa('/pages/cart/cart')" v-if="!showRigth"></image>
				<image src="../../static/tab-cart-current.png" mode="" class="gouwuche" @tap="navToa('/pages/cart/cart')" v-else></image>
			</view>
			<!-- #endif -->
			<view class="user-info-box">
				<view class="portrait-box" @tap="navTo('/pages/set/set')">
					<image class="portrait" :src="memberInfo.avatar || '/static/missing-face.png'"></image>
				</view>
				<view class="info-box">
					<text class="username" @tap="navTo('/pages/set/set')" v-if="!memberInfo.length">注册 | 登录</text>
					<view class="nickname" @tap="navTo('/pages/set/set')" v-if="memberInfo.length">{{memberInfo.nickname?memberInfo.nickname:memberInfo.mobile}}</view>
					<view class="cn" @tap="navTo('/pages/shenfen/shenfen')" v-if="memberInfo.length">
						{{memberInfo.CNuser || ''}}
						<text v-if="memberInfo.ishangCNuser">推广商</text>
						<text :style="memberInfo.ishangCNuser?'':'margin-left:0;'" v-else>零售顾客</text>
					</view>
				</view>
				<view class="ewcode" v-if="memberInfo.ishangCNuser==1">
					<image src="../../static/erweima.png" mode="" @tap="navTo('/pages/erweima/erweima')"></image>
				</view>
			</view>
		</view>
		
		<view class="cover-container">
			<!-- 订单 -->
			<view class="titles">
				我的订单
				<view @tap="navTo('/pages/order/order?state=0')">全部订单 > </view>
			</view>
			<view class="lists">
				<view class="items" @tap="navTo('/pages/order/order?state=1')">
					<view class="img"><image src="../../static/daifukuan.png" mode="aspectFit"></image></view>
					<view class="wz">待付款</view>
				</view>
				<view class="items" @tap="navTo('/pages/order/order?state=2')">
					<view class="img"><image src="../../static/daifahuo.png" mode="aspectFit"></image></view>
					<view class="wz">待发货</view>
				</view>
				<view class="items" @tap="navTo('/pages/order/order?state=3')">
					<view class="img"><image src="../../static/daishouhuo.png" mode="aspectFit"></image></view>
					<view class="wz">待收货</view>
				</view>
				<view class="items" @tap="navTo('/pages/order/order?state=4')">
					<view class="img"><image src="../../static/yiwancheng.png" mode="aspectFit"></image></view>
					<view class="wz">已完成</view>
				</view>
			</view>
			<view class="" style="height:20upx;clear: both;"></view>
			<view class="titles">交易管理</view>
			<view class="lists">
				<view class="items" @tap="navTo('/pages/address/address')">
					<view class="img"><image src="../../static/dizhi.png" mode="aspectFit"></image></view>
					<view class="wz">收货地址</view>
				</view>
				<view class="items" @tap="navTo('/pages/youhuiquan/youhuiquan')">
					<view class="img"><image src="../../static/youhuoquan.png" mode="aspectFit"></image></view>
					<view class="wz">优惠券</view>
				</view>
				<view class="items" @tap="navTo('/pages/shouhou/shouhou')">
					<view class="img"><image src="../../static/shouhou.png" mode="aspectFit"></image></view>
					<view class="wz">售后查询</view>
				</view>
				<view class="items" @tap="navTo('/pages/edu/edu')">
					<view class="img"><image src="../../static/goumaiedu.png" mode="aspectFit"></image></view>
					<view class="wz">年度购买额度</view>
				</view>
			</view>
			<view class="" style="height:20upx;clear: both;"></view>
			<view class="titles">我的账号</view>
			<view class="lists">
				<view class="items" @tap="navTo('/pages/set/set')">
					<view class="img"><image src="../../static/wodezhanghao.png" mode="aspectFit"></image></view>
					<view class="wz">我的账号</view>
				</view>
				<view class="items" @tap="navTo('/pages/jifen/jifen')">
					<view class="img"><image src="../../static/wodejifen.png" mode="aspectFit"></image></view>
					<view class="wz">我的积分</view>
				</view>
				<view class="items" @tap="navTo('/pages/shoucang/shoucang')">
					<view class="img"><image src="../../static/wodeshoucang.png" mode="aspectFit"></image></view>
					<view class="wz">我的收藏</view>
				</view>
			</view>
			<view class="" style="height:20upx;clear: both;" v-if="memberInfo.length"></view>
			<view class="titles" v-if="memberInfo.length">我的推广</view>
			<view class="lists" v-if="memberInfo.length">
				<view class="items" @tap="navTo('/pages/shenfen/shenfen')">
					<view class="img"><image src="../../static/wodeshenfen.png" mode="aspectFit"></image></view>
					<view class="wz">我的身份</view>
				</view>
				<view class="items" @tap="navTo('/pages/fenxiang/fenxiang')" v-if="memberInfo.ishangCNuser==1">
					<view class="img"><image src="../../static/wodefenxiang.png" mode="aspectFit"></image></view>
					<view class="wz">我的分享</view>
				</view>
				<view class="items" @tap="navTo('/pages/shouru/shouru')" v-if="memberInfo.ishangCNuser==1">
					<view class="img"><image src="../../static/wodeshouru.png" mode="aspectFit"></image></view>
					<view class="wz">我的收入</view>
				</view>
				<view class="items" @tap="navTo('/pages/bank/bank')" v-if="memberInfo.ishangCNuser==1">
					<view class="img"><image src="../../static/wodeyinhang.png" mode="aspectFit"></image></view>
					<view class="wz">我的银行卡</view>
				</view>
			</view>
		</view>
		
		<uni-drawer :visible="showRigth" mode="right" @close="closeDrawer('right')">
			<view class="search">
				<input type="text" :value="sskeys" placeholder="请输入关键字" class="input" @focus="sousuo" @blur="quxiaoss" @input="bss" @confirm="quSousuo" confirm-type="搜索" />
				<image src="../../static/sousuo.png" mode="" class="sousuo" @tap="quSousuo" v-if="memberInfo.ishangCNuser==1"></image>
				<image src="../../static/erweima_s.png" mode="" class="erweimax" @tap="navTo('/pages/erweima/erweima')" v-if="memberInfo.ishangCNuser==1"></image>
				<image src="../../static/sousuo.png" mode="" class="sousuo" style="left:650upx" @tap="quSousuo" v-else></image>
			</view>
			<scroll-view class="menu-list" scroll-y v-if="ss==false">
				<view class="menu-list-item" @tap="nnavaTo('/pages/public/onepage?id=10')">
					关于我们
					<image src="../../static/jiantou-r.png" mode=""></image>
				</view>
				<view class="menu-list-item" @tap="nnavaTo('/pages/news/index')">
					新闻中心
					<image src="../../static/jiantou-r.png" mode=""></image>
				</view>
				<view class="menu-list-item" @tap="nnavaTo('/pages/shouhou/shouhou')">
					售后服务
					<image src="../../static/jiantou-r.png" mode=""></image>
				</view>
				<view class="menu-list-item"  @tap="lianxi">
					联系我们
					<image src="../../static/jiantou-r.png" mode=""></image>
				</view>
				<view class="menu-list-item" @tap="nnavaTo('/pages/help/help')">
					帮助中心
					<image src="../../static/jiantou-r.png" mode=""></image>
				</view>
				<view class="menu-list-item">
					官网主页
					<image src="../../static/jiantou-r.png" mode=""></image>
				</view>
			</scroll-view>
			<view class="ren" @tap="hide()" v-if="ss==false">
				<image src="../../static/touxiangs.png" mode=""></image>
				<text v-if="userInfo.nickname">个人中心</text>
				<text v-else>注册 | 登录</text>
			</view>
			<view class="shousuo" v-else>
				<view class="sslishi">
					<view class="biaoti" v-if="ssremen.length>0">热门搜索</view>
					<navigator v-for="(item,index) in ssremen" :key="index" :url="'/pages/index/search?keywords='+item" hover-class="none" class="aa">{{item?item:''}}</navigator>
					<view class="biaoti" v-if="sslishi.length>0">历史搜索</view>
					<view class="aa" v-for="(item,index) in sslishi" :key="index" v-if="item!=''">
						<navigator :url="'/pages/index/search?keywords='+item" hover-class="none">{{item?item:''}}</navigator>
						<text class="shanchu" @tap="shanchu(item)">X</text>
					</view>
				</view>
			</view>
		</uni-drawer>
    </view>  
</template>  
<script>  
	import listCell from '@/components/mix-list-cell';
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue';
    import {  
        mapState 
    } from 'vuex';  
	let startY = 0, moveY = 0, pageAtTop = true;
    export default {
		components: {
			listCell,
			uniDrawer
		},
		data(){
			return {
				coverTransform: 'translateY(0px)',
				coverTransition: '0s',
				moving: false,
				showRigth:false,
				token:'',
				ss:false,
				sskeys:'',
				ssremen:[],
				sslishi:[],
				memberInfo:[]
			}
		},
		onLoad(){
			this.sslishi = uni.getStorageSync("cbe_sslishi");
		},
		onShow() {
			if(uni.getStorageSync('cbe_token')){
				this.token = uni.getStorageSync('cbe_token');
				this.getMemberInfo();
			}else{
				this.memberInfo = [];
			}
		},
		// #ifndef MP
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.navTo('/pages/set/set');
			}else if(index === 1){
				// #ifdef APP-PLUS
				const pages = getCurrentPages();
				const page = pages[pages.length - 1];
				const currentWebview = page.$getAppWebview();
				currentWebview.hideTitleNViewButtonRedDot({
					index
				});
				// #endif
				uni.navigateTo({
					url: '/pages/notice/notice'
				})
			}
		},
		// #endif
        computed: {
			...mapState(['hasLogin','userInfo'])
		},
        methods: {
			nnavaTo(url){
				uni.navigateTo({  
					url:url
				})
			},
			bss(e){
				this.sskeys = e.detail.value;
			},
			lianxi(){
				uni.showModal({
					title:"客服热线",
				    content: '400-004-5678',
					confirmColor:'#008AB0',
					confirmText:'现在拨打',
				    success: (e)=>{
				    	if(e.confirm){
							uni.makePhoneCall({
								phoneNumber: '400-004-5678'
							})
				    	}
				    }
				});
			},
			shanchu(e){
				var sslishi = uni.getStorageSync("cbe_sslishi");
				var newsslishi = [];
				var ii = 0;
				for(var i=0;i<sslishi.length;i++){
					if(sslishi[i]!=e){
						newsslishi[ii] = sslishi[i];
						ii++
					}
				}
				this.sslishi = newsslishi;
				uni.setStorageSync("cbe_sslishi",newsslishi);
			},
			quSousuo(){
				if(this.sskeys!=""){
					uni.navigateTo({
						url:'/pages/index/search?keywords='+this.sskeys
					})
				}
			},
			sousuo(){
				this.ss = true;
			},
			quxiaoss(e){
				if(e.detail.value==''){
					this.ss = true;
				}
			},
			navTo(url){
				if(!uni.getStorageSync('cbe_token')){
					url = '/pages/public/login';
				}
				uni.navigateTo({  
					url
				})  
			}, 
			navToa(url){
				uni.switchTab({
					url:url
				})
			},
			coverTouchstart(e){
				if(pageAtTop === false){
					return;
				}
				this.coverTransition = 'transform .1s linear';
				startY = e.touches[0].clientY;
			},
			coverTouchmove(e){
				moveY = e.touches[0].clientY;
				let moveDistance = moveY - startY;
				if(moveDistance < 0){
					this.moving = false;
					return;
				}
				this.moving = true;
				if(moveDistance >= 80 && moveDistance < 100){
					moveDistance = 80;
				}
		
				if(moveDistance > 0 && moveDistance <= 80){
					this.coverTransform = `translateY(${moveDistance}px)`;
				}
			},
			coverTouchend(){
				if(this.moving === false){
					return;
				}
				this.moving = false;
				this.coverTransition = 'transform 0.3s cubic-bezier(.21,1.93,.53,.64)';
				this.coverTransform = 'translateY(0px)';
			},
			show(e) {
				if (e === 'left') {
					this.showLeft = true
				} else {
					this.showRigth = true
				}
			},
			hide() {
				this.showLeft = false
				this.showRigth = false
				this.ss = false;
			},
			closeDrawer(e){
				if (e === 'left') {
					this.showLeft = false
				} else {
					this.showRigth = false
				}
			},
			getMemberInfo(){
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/info',
					data: {token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						var one = resa.data;
						if(one.code==0){
							one.one['phone'] = one.one.mobile.substr(0, 3) + '****' + one.one.mobile.substr(7);
							if(one.one.CNcardNo){
								one.one['CNcardNo'] = one.one.CNcardNo.replace(/^(.{4})(?:\d+)(.{4})$/,"$1******$2");
							}
							this.memberInfo = one.one;
							this.memberInfo.length = 11;
							// console.log(one.one);
						}else{
							this.memberInfo = [];
							uni.removeStorageSync('cbe_token');
						}
					},
					fail: (resa) => {
						this.getMemberInfo();
					}
				})
			}
        }  
    }  
</script>  
<style lang='scss'>
	.bbd{
		width:100%;height:50upx;background: #f7f7f7; text-align: center; line-height:50upx;
		image{
			width:15upx; height:50upx;margin:0 9upx;
		}
	}
	.shousuo{
		width: 100%; padding: 30upx 40upx;
		.sslishi{
			.biaoti{
				font-size: 28upx; color:#323232; height:65upx; line-height:65upx;
			}
			.aa{
				font-size: 28upx; color:#808080; line-height:65upx; height:65upx; position: relative;
				.shanchu{
					position: absolute; right:0upx; top:0upx;
				}
			}
		}
	}
	.menu-list{
		padding:0upx 30upx; padding-top:60upx;
		.menu-list-item{
			width:100%;font-size:30upx; height:100upx; color: #323232;
			image{
				width:30upx;height:30upx;float: right;
			}
		}
	}
	.ren{
		width:690upx;height:70upx; background: #008ab0;color:#FFFFFF; margin:0upx 30upx; text-align: center; line-height:70upx; font-size:28upx; margin-top:60upx; border-radius:15upx; position:relative;
		image{
			width:40upx;height:40upx; margin-right:15upx; position: absolute;left:242upx; top:15upx;
		}
		text{
			position: absolute;left:310upx; top:0upx;
		}
	}
	%flex-center {
	 display:flex;
	 flex-direction: column;
	 justify-content: center;
	 align-items: center;
	}
	%section {
	  display:flex;
	  justify-content: space-around;
	  align-content: center;
	  background: #fff;
	  border-radius: 10upx;
	}
	/* #ifdef MP */
	.top-menu{
		position: absolute;top:30upx;left:0upx;width:750upx; z-index:999999;
		.email{
			width: 50upx;height:50upx;margin-left:30upx;
		}
		.top-red{
			background: #c23934;border:2upx solid #FFFFFF;width:14upx;height:14upx;position:absolute;left:80upx;top:3upx;border-radius:100%;
		}
		.gouwuche{
			width:42upx;height:42upx;float:right;margin-right:30upx;
		}
		.mulu{
			width:42upx;height:42upx;float:right;margin-right:30upx;
		}
	}
	/* #endif */

	.user-section{
		/* #ifdef MP */
		height: 460upx;
		/* #endif */
		/* #ifdef H5 */
		height: 430upx;
		/* #endif */
		padding-top:var(--status-bar-height);
		padding-bottom:70upx;
		position:relative;
		background-color: #0391b7;
		background: url('https://wxapp.tegou100.com/static/images/user_bg.png') center center;
	}
	.user-info-box{
		display:flex;
		align-items:center;
		position:relative;
		z-index: 1;
		.portrait{
			width: 120upx;
			height: 120upx;
			border:5upx solid #fff;
			border-radius: 50%;
			margin-left:30upx;
			/* #ifdef H5 */
			margin-top:120upx;
			/* #endif */
			/* #ifdef APP-PLUS */
			margin-top:100upx;
			/* #endif */
			/* #ifdef MP */
			margin-top:100upx;
			/* #endif */
		}
		.info-box{
			height:120upx;
			line-height:120upx;
			/* #ifdef H5 */
			margin-top:110upx;
			/* #endif */
			/* #ifdef APP-PLUS */
			margin-top:90upx;
			/* #endif */
			/* #ifdef MP */
			margin-top:90upx;
			/* #endif */
		}
		.username{
			font-size: $font-lg + 6upx;
			color: #ffffff;
			margin-left:30upx;
		}
		.nickname{
			font-size: $font-lg + 6upx;
			color: #ffffff;
			margin-left:30upx;
			position: absolute;
			top:70upx;
			/* #ifdef H5 */
			top:85upx;
			/* #endif */
			text{
				margin-left:30upx;border:1upx solid #FFFFFF;padding:5upx 30upx;border-radius:30upx;font-size: 26upx;
			}
		}
		.cn{
			font-size: 26upx;
			color: #ffffff;
			margin-left: 30upx;
			padding-top:30upx;
			text{
				margin-left:30upx;border:1upx solid #FFFFFF;padding:5upx 30upx;border-radius:30upx;
			}
		}
		.ewcode{
			position: absolute;right:40upx;bottom:30upx;
			image{
				width:50upx; height:50upx;
			}
		}
	}
	.cover-container{
		background: $page-color-base;
		margin-top: -150upx;
		padding: 0 0upx;
		position:relative;
		background: #f5f5f5;
		padding-bottom: 20upx;
		.arc{
			position:absolute;
			left: 0;
			top: -34upx;
			width: 100%;
			height: 36upx;
		}
		.titles{
			width:100%;height: 100upx;border-bottom:1upx solid #e2e2e2;line-height:100upx;font-size:30upx;color:#333333;padding: 0 30upx;background: #FFFFFF;
			view{
				float: right;font-size:28upx;color:#808080;
			}
		}
		.lists{
			clear: both; background: #FFFFFF; height:148upx; width:100%;
			.items{
				width:25%;float:left;
				.img{
					width:100%; text-align: center; padding-top:20upx;
					image{
						width:54upx;height:54upx;
					}
				}
				.wz{
					font-size:24upx;width:100%;text-align: center;padding-bottom:20upx;color:#1f1f1f;padding-top:10upx;
				}
			}
		}
	}
	/* #ifdef MP || H5 */
	.search{
		width:750upx; padding:0upx 30upx;padding-top:100upx; position: relative; border-bottom:1upx solid #f6f7f7; padding-bottom:50upx;
		input{
			width:571upx; height: 70upx; font-size:30upx; background:#f6f7f7;padding:0 20upx; border-radius:15upx;position: relative; z-index: 99;
		}
		.sousuo{
			width:34upx;height:34upx; position: absolute; top:120upx; left:545upx; z-index:99999;
		}
		.erweimax{
			width:71upx;height:70upx; position: absolute; top:100upx; right:30upx;
		}
	}
	/* #endif */
</style>
<template>
	<view class="container">
		<!-- 小程序头部兼容 -->
		<!-- #ifdef MP || H5 -->
		<view class="top-menu">
			<image src="../../static/xinxi2.0.png" mode="" class="email" @tap="navTo('/pages/notice/notice')"></image>
			<view class="top-red"></view>
			<image src="../../static/menu01.png" mode="" class="mulu" @tap="show('right')" v-if="!showRigth"></image>
			<image src="../../static/x.png" mode="" class="mulu" @tap="hide()" v-else></image>
			<image src="../../static/gouwuche2.0-1.png" mode="" class="gouwuche" @tap="tabTo('/pages/cart/cart')"></image>
		</view>
		<!-- #endif -->
		
		<!-- 头部轮播 -->
		<view class="carousel-section">
			<!-- 标题栏和状态栏占位符 -->
			<view class="titleNview-placing"></view>
			<!-- 背景色区域 -->
			<view class="titleNview-background" :style="{backgroundColor:titleNViewBackground}"></view>
			<swiper class="carousel" autoplay circular interval="5000" @change="swiperChange">
				<swiper-item v-for="(item, index) in carouselList" :key="index" class="carousel-item" @click="navToDetailPage({title: '轮播广告'})">
					<image :src="item.src" />
				</swiper-item>
			</swiper>
			<view class="bbd">
				<image v-for="(item, index) in carouselList" :key="index" :src="swiperCurrent==index?'../../static/banner_act.png':'../../static/banner_n.png'" mode=""></image>
			</view>
		</view>
		<!-- 分类 -->
		<view class="cate-section" v-if="navList.length==0" style="display:none;">
			<view class="cate-item" @tap="navTo('/pages/order/order?state=0')">
				<image src="/static/c3.png"></image>
				<text>我的订单</text>
			</view>
			<view class="cate-item" @tap="navTo('/pages/youhuiquan/youhuiquan')">
				<image src="/static/c5.png"></image>
				<text>我的优惠券</text>
			</view>
			<view class="cate-item" @tap="navTo('/pages/shoucang/shoucang')">
				<image src="/static/c6.png"></image>
				<text>我的收藏</text>
			</view>
			<view class="cate-item" @tap="nnavaTo('/pages/huodong/huodong')">
				<image src="/static/c7.png"></image>
				<text>活动专区</text>
			</view>
			<view class="cate-item" @tap="nnavaTo('/pages/help/help')">
				<image src="/static/c8.png"></image>
				<text>帮助中心</text>
			</view>
		</view>
		<view class="cate-section" v-else>
			<view class="cate-item" v-for="(item,index) in navList" :key="index" @tap="navTo(item.url)" v-if="index<5">
				<image :src="item.icon"></image>
				<text>{{item.navname}}</text>
			</view>
		</view>
		
		<view class="ctitlea">
			<image src="https://wxapp.tegou100.com/static/images/rxph.png" mode=""></image>
		</view>
		<view class="rexiao">
			<view class="rx-lists" v-for="(item,index) in goodsList" :key="index" v-if="index<3">
				<view class="img" @tap="Toproduct('/pages/product/product?id='+item.id)">
					<image :src="item.thumb" mode=""></image>
				</view>
				<view class="title" @tap="Toproduct('/pages/product/product?id='+item.id)">{{item.title}}</view>
				<view class="price" @tap="Toproduct('/pages/product/product?id='+item.id)">￥{{item.marketprice}}</view>
				<view class="shoucang" @tap="shoucang(item.id,index)"><image src="../../static/shoucang.png" :src="item.isShoucang==0?'../../static/shoucang.png':'../../static/shoucang_act.png'" mode=""></image></view>
			</view>
		</view>
		<view class="ad">
			<image src="http://wxapp.tegou100.com/static/images/ad1.png" mode=""></image>
		</view>
		<view class="rexiao">
			<view class="rx-lists" v-for="(item,index) in goodsList" :key="index" v-if="index==3">
				<view class="img" @tap="Toproduct('/pages/product/product?id='+item.id)">
					<image :src="item.thumb" mode=""></image>
				</view>
				<view class="title" @tap="Toproduct('/pages/product/product?id='+item.id)">{{item.title}}</view>
				<view class="price" @tap="Toproduct('/pages/product/product?id='+item.id)">￥{{item.marketprice}}</view>
				<view class="shoucang"  @tap="shoucang(item.id,index)"><image src="../../static/shoucang.png" :src="item.isShoucang==0?'../../static/shoucang.png':'../../static/shoucang_act.png'" mode=""></image></view>
			</view>
		</view>
		<view class="ad">
			<image src="http://wxapp.tegou100.com/static/images/ad1.png" mode=""></image>
		</view>
		
		<view class="rexiao">
			<view class="rx-lists" v-for="(item,index) in goodsList" :key="index" v-if="index==4">
				<view class="img"  @tap="Toproduct('/pages/product/product?id='+item.id)">
					<image :src="item.thumb" mode=""></image>
				</view>
				<view class="title" @tap="Toproduct('/pages/product/product?id='+item.id)">{{item.title}}</view>
				<view class="price" @tap="Toproduct('/pages/product/product?id='+item.id)">￥{{item.marketprice}}</view>
				<view class="shoucang" @tap="shoucang(item.id,index)"><image src="../../static/shoucang.png" :src="item.isShoucang==0?'../../static/shoucang.png':'../../static/shoucang_act.png'" mode=""></image></view>
			</view>
		</view>
		<view class="btitle">
			<image src="../../static/index_news.png" mode=""></image>
		</view>
		<view class="news">
			<view class="news-lists" v-for="(ie,index) in newsList" :key="index" @tap="gonews(ie)">
				<view class="img">
					<image :src="ie.resp_img" mode=""></image>
				</view>
				<view class="title">{{ie.article_title?ie.article_title:''}}</view>
				<view class="desc">{{ie.resp_desc?ie.resp_desc:''}}</view>
			</view>
		</view>
		<view class="more_news">
			<navigator url="/pages/news/index">查看更多</navigator>
		</view>
		<view class="jiaru">
			<image src="http://wxapp.tegou100.com/static/images/jiaru.png" mode=""></image>
			<view class="jiarua">加入如新</view>
			<view class="more_jiaru">
				<navigator url="">立即加入</navigator>
			</view>
		</view>
		<view class="btitle">
			<image src="../../static/index_pp.png" mode=""></image>
		</view>
		<view class="hot-floor">
			<scroll-view class="floor-list" scroll-x>
				<view class="scoll-wrapper">
					<view v-for="(item, index) in brandList" :key="index" class="floor-item" @tap="gonews(item)">
						<image :src="item.resp_img" mode="aspectFill"></image>
						<view class="ty">品牌故事</view>
						<view class="titlea clamp">{{item.article_title?item.article_title:''}}</view>
						<view class="desc">{{item.resp_desc?item.resp_desc:''}}</view>
						<navigator url="">了解更多>></navigator>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="more_news">
			<navigator url="/pages/brand/brand">查看更多</navigator>
		</view>
		<view style="clear:both;height:60upx;background: #FFFFFF;"></view>
		<view class="guanzhu">
			<view class="ctt">关注我们</view>
			<view class="icon">
				<image src="../../static/weixin.png" mode=""></image>
				<image src="../../static/xinlang.png" mode=""></image>
			</view>
		</view>
		<view class="banquan">
			<view class="bb">
				<text @tap="nnavaTo('/pages/public/onepage?id=6')">企业证照</text>
				<text @tap="nnavaTo('/pages/public/onepage?id=7')">版权声明</text>
				<text @tap="nnavaTo('/pages/public/onepage?id=8')">隐私政策</text>
			</view>
			<view class="copy">粤ICP备20181025001</view>
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
			<view class="ren" @tap="navaTo('/pages/user/user')" v-if="ss==false">
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
	import uniDrawer from '@/components/uni-drawer/uni-drawer.vue'
	import {  
	    mapState 
	} from 'vuex';
	export default {
		components: {
			uniDrawer
		},
		data() {
			return {
				titleNViewBackground: '',
				swiperCurrent: 0,
				swiperLength: 0,
				carouselList: [],
				navList:[],
				goodsList: [],
				newsList:[],
				brandList:[],
				showRigth:false,
				ss:false,
				sskeys:'',
				ssremen:[],
				sslishi:[],
				memberInfo:[]
			};
		},
		onLoad() {
			
		},
		onShow() {
			this.loadData();
			this.sslishi = uni.getStorageSync("cbe_sslishi");
			if(uni.getStorageSync('cbe_token')){
				this.token = uni.getStorageSync('cbe_token');
				this.getMemberInfo();
			}else{
				this.memberInfo = [];
			}
		},
		computed: {
			...mapState(['hasLogin','userInfo'])
		},
		methods: {
			bss(e){
				this.sskeys = e.detail.value;
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
			gonews(e){
				let detail = {
				    author_name: e.article_author,
				    cover: e.resp_img,
				    id: e.id,
				    post_id: e.id,
				    published_at: e.article_date,
				    title: e.article_title
				}
				uni.navigateTo({
				    url: "/pages/news/details?detailDate=" + encodeURIComponent(JSON.stringify(detail))
				})
			},
			navTo(url){
				if(!this.hasLogin){
					url = '/pages/public/login';
				}
				uni.navigateTo({  
					url
				})  
			},
			navaTo(url){
				if(!this.hasLogin){
					url = '/pages/public/login';
					uni.navigateTo({  
						url:url
					})
				}else{
					uni.switchTab({
						url:url
					}) 
				}
			}, 
			tabTo(url){
				uni.switchTab({
					url:url
				}) 
			},
			nnavaTo(url){
				uni.navigateTo({  
					url:url
				})
			},
			Toproduct(url){
				if(uni.getStorageSync('cbe_token')){
					uni.navigateTo({  
						url:url+"&utoken="+uni.getStorageSync('cbe_token')
					})
				}else{
					uni.navigateTo({  
						url:url
					})
				}
			},
			loadData() {
				uni.showLoading({
					title: '请稍后'
				})
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/home/index',
					data: {token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						this.carouselList = resa.data.banner;
						this.navList      = resa.data.nav;
						this.goodsList    = resa.data.product;
						this.newsList     = resa.data.news;
						this.brandList    = resa.data.brand;
						this.ssremen      = resa.data.rmlist;
						uni.hideLoading();
					}
				})
			},
			getProduct(){
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/product/lists',
					data: {token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						this.goodsList = one.data.data;
					}
				})
			},
			//轮播图切换修改背景色
			swiperChange(e) {
				const index = e.detail.current;
				this.swiperCurrent = index;
				this.titleNViewBackground = this.carouselList[index].background;
			},
			//详情页
			navToDetailPage(item) {
				//测试数据没有写id，用title代替
				let id = item.title;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}`
				})
			},
			shoucang(id,index){
				if(uni.getStorageSync('cbe_token')){
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/product/shoucang',
						data: {id:id,token:uni.getStorageSync('cbe_token')},
						method:'POST',
						dataType:'json',
						header: {'content-type' : 'application/x-www-form-urlencoded'},
						success: (resa) => {
							var one = resa.data;
							if(one.code==0){
								if(this.goodsList[index].isShoucang==0){
									this.goodsList[index].isShoucang = 1;
								}else{
									this.goodsList[index].isShoucang = 0;
								}
								uni.showToast({
									title:one.msg,icon:'success',mask:true,duration: 3000
								});
							}
						}
					})
				}else{
					uni.showModal({
						title:"温馨提示",
					    content: '您还没有登录，无法进行收藏操作，是否登录？',
						confirmColor:'#008AB0',
						confirmText:'立即登录',
						cancelText:'再看看',
					    success: (e)=>{
					    	if(e.confirm){
								uni.navigateTo({
									url:"/pages/public/login"
								})
					    	}
					    }
					});
				}
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
							console.log(one.one);
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
		},
		// #ifndef MP
		//点击导航栏 buttons 时触发
		onNavigationBarButtonTap(e) {
			const index = e.index;
			if (index === 0) {
				this.$api.msg('点击了扫描');
			} else if (index === 1) {
				this.showRigth = true
			} else if (index === 2) {
				this.$api.msg('点击了扫描2');
			}
		}
		// #endif
	}
</script>

<style lang="scss">
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
	/* #ifdef MP || H5 */
	.mp-search-box{
		position:absolute;
		left: 0;
		top: 30upx;
		z-index: 9999;
		width: 100%;
		padding: 0 80upx;
		.ser-input{
			flex:1;
			height: 56upx;
			line-height: 56upx;
			text-align: center;
			font-size: 28upx;
			color:$font-color-base;
			border-radius: 20px;
			background: rgba(255,255,255,.6);
		}
	}
	page{
		.cate-section{
			position:relative;
			z-index:5;
			margin-top:-5upx;
		}
		.carousel-section{
			padding: 0;
			.titleNview-placing {
				padding-top: 0;
				height: 0;
			}
			.carousel{
				.carousel-item{
					padding: 0;
				}
			}
		}
	}
	.container{
		padding-top:70upx;
	}
	.top-menu{
		position:fixed;top:0upx;left:0upx;width:750upx;z-index:999999; background: #FFFFFF; padding-top:10upx;
		.email{
			width: 42upx;height:42upx;margin-left:30upx;
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
	
	page {
		background: #f5f5f5;
	}
	.m-t{
		margin-top: 16upx;
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
	/* 头部轮播图 */
	.carousel-section {
		position: relative;
		padding-top: 10px;

		.titleNview-placing {
			height: var(--status-bar-height);
			padding-top: 44px;
			box-sizing: content-box;
		}

		.titleNview-background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 400upx;
			transition: .4s;
		}
	}
	.carousel {
		width: 100%;
		height: 400upx;
		.carousel-item {
			width: 100%;
			height: 100%;
			overflow: hidden;
		}

		image {
			width: 100%;
			height: 100%;
		}
	}
	/* 分类 */
	.cate-section {
		display: flex;
		justify-content: space-around;
		align-items: center;
		flex-wrap:wrap;
		padding: 70upx 22upx; 
		background: #fff;
		.cate-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 24upx;
			color: $font-color-dark;
		}
		/* 原图标颜色太深,不想改图了,所以加了透明度 */
		image {
			width: 68upx;
			height: 68upx;
			margin-bottom: 14upx;
			opacity: .7;
		}
	}
	.ctitle{
		text-align:center; background: #ffffff; width:750upx;
		image{
			width:296upx;
			height:103upx;
			margin:0 227upx;
		}
	}
	.ctitlea{
		width:100%;height:95upx; background: #ffffff;
		image{
			width:100%;height:100%;
		}
	}
	.btitle{
		text-align:center; background: #ffffff; width:750upx; padding-top: 30upx;
		image{
			width:296upx;
			height:58upx;
			margin:0 227upx;
		}
	}
	.rexiao{
		width:750upx;background: #ffffff;padding-top: 40upx; padding-bottom:20upx;
		.rx-lists{
			width:670upx;margin:20upx 40upx;border:1upx solid #f0e9de; position: relative; padding-bottom:30upx;
			.img{
				width:670upx;
				image{
					width:665upx;height:668upx;
				}
			}
			.title{
				padding:10upx 30upx; color:#191919; font-size:28upx;line-height:40upx;text-align: center;
			}
			.price{
				padding:0 30upx; text-align: center; font-size:32upx;color:#191919;
			}
			.shoucang{
				width:40upx;height:40upx; position: absolute;top:20upx; right:20upx;
				image{
					width: 100%;height: 100%;
				}
			}
		}
	}
	.news{
		width:750upx;background: #ffffff;padding-top:10upx; padding-bottom:20upx;
		.news-lists{
			width:690upx;margin:20upx 30upx;border:1upx solid #f0e9de; position: relative; padding-bottom:30upx;
			.img{
				width:690upx;
				image{
					width:690upx;height:360upx;
				}
			}
			.title{
				padding:0 30upx; color:#191919; font-size:28upx;line-height:40upx;font-weight:600;
			}
			.desc{
				padding:10upx 30upx; font-size:24upx;color:#808080;
			}
		}
	}
	.ad{
		width:100%; height:340upx;
		image{
			width:100%;height: 100%;
		}
	}
	.more_news{
		text-align: center; width:100%; background: #ffffff;
		navigator{
			width:180upx;height:50upx;background:#008ab0;color:#ffffff;text-align:center;font-size:32upx;line-height:50upx;border-radius:5upx;margin: 0upx 285upx;
		}
	}
	.jiaru{
		width:750upx;height:420upx; position: relative; padding-top: 50upx; background: #ffffff; padding-bottom: 50upx;
		image{
			width:750upx;height:320upx; position: absolute;top:50upx;left:0;
		}
		.jiarua{
			width:750upx; text-align: center; position: absolute; top:160upx;color:#4d4d4d; font-size:40upx;
		}
		.more_jiaru{
			position: absolute; top:230upx;
			navigator{
				width:180upx;height:50upx;background:#008ab0;color:#ffffff;text-align:center;font-size:32upx;line-height:50upx;border-radius:5upx;margin: 0upx 285upx;
			}
		}
	}
	/* 分类推荐楼层 */
	.hot-floor{
		width: 100%;
		overflow: hidden;
		.floor-list{
			border-radius: 6upx;
			padding-top:40upx;
			padding-left:30upx;
			padding-right: 30upx;
			padding-bottom:40upx;
			background: #fff;
			box-shadow: 1px 1px 5px rgba(0,0,0,.2);
			position: relative;
			z-index: 1;
		}
		.scoll-wrapper{
			display:flex;
			align-items: flex-start;
		}
		.floor-item{
			width:490upx;
			height:580upx;
			margin-right:30upx;
			font-size: $font-sm+2upx;
			color: $font-color-dark;
			line-height: 1.8;
			border:1upx solid #f0e9de;
			image{
				width:480upx;
				height:320upx;
				border-radius: 6upx;
			}
			.ty{
				color: #191919; font-size:26upx;padding:0upx 20upx;
			}
			.titlea{
				color:#191919; font-size:30upx; padding:0 20upx; font-weight:600;
			}
			.desc{
				font-size: 24upx;
				color: #666;
				margin-bottom: 10upx;
				padding: 0 20upx;
				overflow: hidden;
				line-height:40upx;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
			navigator{
				padding:0 20upx; color:#008ab0; font-size:26upx;
			}
		}
		.more{
			display:flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			flex-shrink: 0;
			width: 180upx;
			height: 180upx;
			border-radius: 6upx;
			background: #f3f3f3;
			font-size: $font-base;
			color: $font-color-light;
			text:first-child{
				margin-bottom: 4upx;
			}
		}
	}
	.guanzhu{
		width:100%; height:280upx; background: #63666b;
		.ctt{
			width:100%;text-align: center;color:#FFFFFF;padding-top: 70upx; font-size: 28upx;
		}
		.icon{
			text-align: center; padding-top:28upx;
			image{
				width: 80upx; height:80upx;margin:0 20upx;
			}
		}
	}
	.banquan{
		width:100%;height:150upx; background: #FFFFFF;
		.bb{
			padding:0 40upx; padding-top:20upx;
			text{
				color:#b1b1b1;font-size:20upx;padding-right: 68upx;
			}
		}
		.copy{
			padding:0 40upx;color:#b1b1b1;font-size:20upx; padding-top:10upx;
		}
	}
	/* #ifdef MP || H5 */
	.search{
		width:750upx; padding:0upx 30upx;padding-top:100upx; position: relative; border-bottom:1upx solid #f6f7f7; padding-bottom:50upx;
		input{
			width:571upx; height: 70upx; font-size:30upx; background:#f6f7f7;padding:0 20upx; border-radius:15upx;position: relative; z-index: 99;
		}
		.sousuo{
			width:34upx;height:34upx; position: absolute; top:120upx; left:545upx; z-index:999;
		}
		.erweimax{
			width:71upx;height:70upx; position: absolute; top:100upx; right:30upx;
		}
	}
	/* #endif */
</style>

<template>
	<view class="container">
		<view class="carousel">
			<swiper indicator-dots circular="true" duration="400" indicator-active-color="#77c4d6">
				<swiper-item class="swiper-item" v-for="(item, index) in detail.images" :key="index">
					<view class="image-wrapper"><image :src="item" class="loaded" mode="aspectFill"></image></view>
				</swiper-item>
			</swiper>
			<image src="../../static/share.png" mode="" class="share" style="display:none;"></image>
			<image :src="isShoucang == 0 ? '../../static/shoucang.png' : '../../static/shoucang_act.png'" mode="" class="shoucang" @tap="shoucang"></image>
		</view>

		<view class="introduce-section">
			<view class="bianhao">
				<text class="l">产品编号：{{ detail.goodssn ? detail.goodssn : '' }}</text>
				<text class="r" v-if="token != '' && detail.ishangCNuser == 1 && detail.nocommission == 0 && detail.commission1 > 0">
					推广奖励：
					<text>￥{{ detail.commission1 }}</text>
				</text>
			</view>
			<view class="clear"></view>
			<view class="title">{{ detail.title ? detail.title : '' }}</view>
			<view class="title title_en">{{ detail.title_en ? detail.title_en : '' }}</view>
			<view class="pp">
				<text v-for="(item, index) in detail.labelname" :key="index">{{ item }}</text>
			</view>
			<view class="price-box">
				<text class="t">零售价：</text>
				<text class="price-tip">¥</text>
				<text class="price">{{ detail.marketprice ? detail.marketprice : '' }}</text>
				<text class="m-price" v-if="detail.productprice > detail.marketprice && detail.productprice > 0">¥{{ detail.productprice }}</text>
				<text class="coupon-tip" v-if="detail.productprice > detail.marketprice && detail.productprice > 0">{{ detail.zhekou }}折</text>
			</view>
			<view class="bot-row" style="display:none;">
				<text>销量: 108</text>
				<text>库存: 4690</text>
				<text>浏览量: 768</text>
			</view>
		</view>

		<!--  分享 -->
		<view class="share-section" @click="share" style="display:none;">
			<view class="share-icon">
				<text class="yticon icon-xingxing"></text>
				返
			</view>
			<text class="tit">该商品分享可领49减10红包</text>
			<text class="yticon icon-bangzhu1"></text>
			<view class="share-btn">
				立即分享
				<image src="../../static/jiantou-r.png" mode="" style="width:32upx;height: 32upx;margin-right: 0upx;" class="yticon"></image>
			</view>
		</view>

		<view class="shuifei">
			<view class="shui">
				税费
				<text class="la" v-if="detail.shuifei > 0">￥{{ detail.shuifei ? detail.shuifei : '' }}</text>
				<text class="lc" v-else>含税</text>
				<text class="lb" @tap="shuifeishuoming" style="display:none;">税费说明</text>
				<image src="../../static/wenhao1.png" mode="" style="width:28upx;height:28upx;margin-left: 35upx;" @tap="shuifeishuoming"></image>
			</view>
			<view class="yun">
				运费
				<text v-if="detail.issendfree == 0">
					<text v-if="youfei.dispatchtype == 0">
						<!-- <text class="la">￥{{youfei.dispatchprice}}</text> -->
						<text class="la" v-if="youfei.manjian_e > 0">满￥{{ youfei.manjian_e }}免运费</text>
					</text>
					<text v-else>
						<!-- <text class="la">首重:{{youfei.shouzhong}}g,首费:￥{{youfei.shoufei}},续重:{{youfei.xuzhong}}g,续费:￥{{youfei.xufei}}</text> -->
						<text class="la" v-if="youfei.manjian_e > 0">满￥{{ detail.manjian_e }}免运费</text>
					</text>
				</text>
				<text v-if="detail.issendfree == 1" class="lc">包邮</text>
			</view>
			<view class="huodong" v-if="detail.quanlist.length > 0 || detail.manjian.enoughs.length > 0 || (detail.manjian.enoughmoney > 0 && detail.manjian.enoughdeduct > 0)">
				<view class="l">活动</view>
				<view class="r">
					<view v-if="detail.manjian.enoughmoney > 0 && detail.manjian.enoughdeduct > 0">
						<text>[满减]</text>
						满{{ detail.manjian.enoughmoney }}减{{ detail.manjian.enoughdeduct }}
					</view>
					<view v-for="(item, key) in detail.manjian.enoughs" :key="key" v-if="item.enough > 0 && item.give > 0">
						<text style="color:#FFFFFF;">[满减]</text>
						满{{ item.enough }}减{{ item.give }}
					</view>
					<view v-for="(item, key) in detail.quanlist" :key="key">
						<text :style="key > 0 ? 'color:#ffffff' : ''">[优惠]</text>
						{{ item.title }}
					</view>
				</view>
				<view class="clear"></view>
			</view>
		</view>

		<view class="c-list">
			<view class="c-row b-b" @click="toggleSpec">
				<text class="tit">规格</text>
				<view class="con">
					已选
					<text class="selected-text" v-for="(sItem, sIndex) in specSelected" :key="sIndex">{{ sItem.title }}</text>
					<text class="selected-text">数量 {{ nums }}</text>
				</view>
				<image src="../../static/jiantou-r.png" mode="" style="width:32upx;height: 32upx;margin-right: 0upx;" class="yticon"></image>
			</view>
		</view>

		<image :src="detail.liucheng" mode="" class="liucheng" v-if="detail.liucheng"></image>

		<view class="goods-section" v-if="detail.detail_shopname" @tap="navToDetailPage('/pages/product/list?shopname=' + detail.detail_shopname)">
			<view class="g-header b-b">
				<view class="logo"><image :src="detail.detail_logo"></image></view>
				<text class="name">{{ detail.detail_shopname }}</text>
				<image src="../../static/jiantou-r.png" mode="" style="width:32upx;height: 32upx;margin-right: 0upx;" class="yticon"></image>
			</view>
			<view class="clear"></view>
		</view>

		<!-- 评价 -->
		<view class="eva-section" style="display:none;">
			<view class="e-header">
				<text class="tit">评价</text>
				<text>(86)</text>
				<text class="tip">好评率 100%</text>
				<image src="../../static/jiantou-r.png" mode="" style="width:32upx;height: 32upx;margin-right: 0upx;" class="yticon"></image>
			</view>
			<view class="eva-box">
				<image class="portrait" src="http://img3.imgtn.bdimg.com/it/u=1150341365,1327279810&fm=26&gp=0.jpg" mode="aspectFill"></image>
				<view class="right">
					<text class="name">Leo yo</text>
					<text class="con">商品收到了，79元两件，质量不错，试了一下有点瘦，但是加个外罩很漂亮，我很喜欢</text>
					<view class="bot">
						<text class="attr">购买类型：XL 红色</text>
						<text class="time">2019-04-01 19:21</text>
					</view>
				</view>
			</view>
		</view>

		<view class="detail-desc">
			<view class="d-header" v-if="detail.content"><text>图文详情</text></view>
			<view class="ttz" style="padding:20upx 30upx" v-if="detail.content"><rich-text :nodes="detail.content"></rich-text></view>
			<view class="d-header" style="padding-top: 20upx;" v-if="detail.taozhuang"><text>套装内容</text></view>
			<view class="ttz" style="padding:20upx 30upx;" v-if="detail.taozhuang"><rich-text :nodes="detail.taozhuang"></rich-text></view>
			<view class="d-header" style="padding-top: 20upx;" v-if="detail.shiyong"><text>使用方法</text></view>
			<view class="ttz" style="padding:20upx 30upx;" v-if="detail.shiyong"><rich-text :nodes="detail.shiyong"></rich-text></view>
			<view class="d-header" style="padding-top: 20upx;" v-if="detail.wenti"><text>常见问题</text></view>
			<view class="ttz" style="padding:20upx 30upx;" v-if="detail.wenti"><rich-text :nodes="detail.wenti"></rich-text></view>
			<view class="d-header" style="padding-top: 20upx;">
				<text>{{ detail.gaozhishu.title }}</text>
			</view>
			<view class="ttz" style="padding:20upx 30upx;"><rich-text :nodes="detail.gaozhishu.content"></rich-text></view>
		</view>

		<!-- 底部操作菜单 -->
		<view class="page-bottom">
			<!-- #ifdef H5 || APP-PLUS -->
			<view class="p-b-btn" @click="share"><image src="../../static/share.png" mode="" class="share"></image></view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<button @click="share" class="p-b-btn fenxiang"><image src="../../static/share.png" mode="" class="share"></image></button>
			<!-- #endif -->
			<navigator url="/pages/index/index" open-type="switchTab" class="p-b-btn kk"><image src="../../static/tab-home-current.png" mode="" class="kefu"></image></navigator>
			<navigator url="/pages/cart/cart" open-type="switchTab" class="p-b-btn">
				<text class="shubiao" v-if="cartcount > 0">{{ cartcount }}</text>
				<image src="../../static/tab-cart-current.png" mode="" class="gouwuche"></image>
			</navigator>
			<view class="action-btn-group">
				<button type="primary" class="action-btn no-border add-cart-btn" @tap="toggleSpec">加入购物车</button>
				<button type="primary" class="action-btn no-border buy-now-btn" @tap="buy">立即购买</button>
			</view>
		</view>

		<!-- 规格-模态层弹窗 -->
		<view class="popup spec" :class="specClass" @touchmove.stop.prevent="stopPrevent" @click="toggleSpec">
			<!-- 遮罩层 -->
			<view class="mask"></view>
			<view class="layer attr-content" @click.stop="stopPrevent">
				<view class="a-t">
					<image :src="detail.thumb"></image>
					<view class="right">
						<view class="titlea">{{ detail.title }}</view>
						<text class="pp">
							<text v-for="(item, index) in detail.labelname" :key="index" style="padding-right:20upx;">{{ item }}</text>
						</text>
						<view class="price">
							零售价：
							<text>¥{{ detail.marketprice }}</text>
						</view>
						<text class="stock">库存：{{ detail.total }}件</text>
					</view>
				</view>
				<view v-for="(item, index) in detail.guige" :key="index" class="attr-list">
					<text class="tti">{{ item.title }}</text>
					<view class="item-list">
						<text v-for="(cItem, cIndex) in item.child" :key="cIndex" class="tit" :class="{ selected: cItem.selected }" @click="selectSpec(cItem.id, cItem.specid)">
							{{ cItem.title }}
						</text>
					</view>
				</view>
				<view class="attr-list" style="padding-bottom:30upx;">
					<view style="width:140upx;float:left;">数量</view>
					<!-- #ifdef H5 -->
					<view style="padding-top:15upx;width: 400upx; position: absolute;left:120upx; z-index:66;bottom:198upx;">
						<uni-number-box :min="detail.minbuy" :max="detail.maxbuy" :value="nums" @change="changeNum" />
					</view>
					<!-- #endif -->
					<!-- #ifdef MP -->
					<view style="padding-top:15upx;width: 400upx; float:left;"><uni-number-box :min="detail.minbuy" :max="detail.maxbuy" :value="nums" @change="changeNum" /></view>
					<!-- #endif -->
				</view>
				<button class="btnb" @click="addCart">加入购物车</button>
				<button class="btna" @tap="buy">立即购买</button>
			</view>
		</view>
		<!-- 分享 -->
		<share ref="share" :contentHeight="580" :shareList="shareList" :dataurl="url"></share>
		<uni-popup :show="type === 'middle-list'" position="middle" mode="fixed" @hidePopup="togglePopup('')">
			<scroll-view :scroll-y="true" class="uni-center center-box" :style="smheight">
				<rich-text :nodes="kjshuoming"></rich-text>
				<view class="zdl" @tap="togglePopup('')">我知道了</view>
			</scroll-view>
		</uni-popup>

		<uni-popup :show="type === 'middle-lista'" position="middle" mode="fixed" @hidePopup="togglePopup('')">
			<scroll-view :scroll-y="true" class="uni-centera center-box">
				<rich-text :nodes="kjshuominga"></rich-text>
				<view class="zdl"><button type="primary" open-type="getUserInfo" hover-class="none" @getuserinfo="getuserinfo">点击授权</button></view>
			</scroll-view>
		</uni-popup>

		<view class="go-top"><image src="../../static/go_top.png" mode="" @tap="goTop"></image></view>
		<hchPoster ref="hchPoster" :canvasFlag.sync="canvasFlag" @cancel="canvasCancel" :posterObj.sync="posterData"/>
		<view :hidden="canvasFlag">
		    <canvas class="canvas"  canvas-id="myCanvas" ></canvas><!-- 海报 -->
		</view>
	</view>
</template>

<script>
import { mapMutations } from 'vuex';
import share from '@/components/share';
import uniPopup from '@/components/uni-popup/uni-popup.vue';
import uniNumberBox from '@/components/uni-number-box/uni-number-box.vue';
import hchPoster from '@/components/hch-poster/hch-poster.vue'
export default {
	components: {
		share,
		uniNumberBox,
		uniPopup,
		hchPoster
	},
	data() {
		return {
			canvasFlag:true,
			posterData:[],
			cartcount: 0,
			kjshuoming: '',
			type: '',
			smheight: '',
			isShoucang: 0,
			nums: 1,
			specClass: 'none',
			specSelected: [],
			favorite: true,
			shareList: [],
			youfei: [],
			token: '',
			utoken: '',
			detail: [],
			url: '',
			taozhuang:
				'<div style="font-size:13px; color:#333333; line-height:20px;">ageLOC洁面调理摩丝全新高科技泡沫配方，洁肤爽肤二合一，调节肌肤回复到酸碱平衡状态，同时净化、滋润肌肤，无需再添加化妆水。 当然，根据地域气候的差异，以及不同肌肤的需求，仍可根据肌肤自身需求搭配合适的化妆水，洁肤爽肤二合一，调节肌肤回复到酸碱平衡状态，同时净化、滋润肌肤，无需再添加化妆水。</div>',
			kjshuominga:
				'<div style="font-size:16px;text-align:center;font-weight:600;line-height:30px;padding-top:10px">为了更好的服务您，请点击授权</div><div  style="font-size:12px;text-align:center;line-height:20px">授权仅包含昵称和头像信息</div>'
		};
	},
	async onLoad(options) {
		const res = uni.getSystemInfoSync();
		var wh = res.windowHeight;
		this.smheight = 'max-height:' + (wh - 60) + 'px';
		let id = options.id;
		if (id) {
			this.token = uni.getStorageSync('cbe_token');
			this.getDetail(id);
		}
		if (options.utoken) {
			this.utoken = options.utoken;
		}
		this.shareList = await this.$api.json('shareList');
		if (uni.getStorageSync('cbe_token')) {
			this.url = '/pages/product/product?id=' + this.detail.id + '&utoken=' + uni.getStorageSync('cbe_token');
		} else {
			this.url = '/pages/product/product?id=' + this.detail.id;
		}
		uni.hideShareMenu();
		this.createCanvasImageEvn()
	},
	// #ifdef MP-WEIXIN
	onShareAppMessage(res) {
		if (uni.getStorageSync('cbe_token')) {
			return {
				title: this.detail.title,
				path: '/pages/product/product?id=' + this.detail.id + '&utoken=' + uni.getStorageSync('cbe_token'),
				imageUrl: this.detail.images[0]
			};
		} else {
			return {
				title: this.detail.title,
				path: '/pages/product/product?id=' + this.detail.id,
				imageUrl: this.detail.images[0]
			};
		}
	},
	// #endif
	methods: {
		...mapMutations(['login']),
		createCanvasImageEvn(){
		    Object.assign(this.posterData,
		    {
		        url:'https://img0.zuipin.cn/mp_zuipin/poster/hch-pro.jpg',//商品主图
		        icon:'https://img0.zuipin.cn/mp_zuipin/poster/hch-hyj.png',//会员价图标
		        title:this.detail.title,//标题
		        discountPrice:"250.00",//折后价格
		        orignPrice:"300.00",//原价
		        code:'https://img0.zuipin.cn/mp_zuipin/poster/hch-code.png',//小程序码
		    })
			this.$forceUpdate();//强制渲染数据
			setTimeout(()=>{
				this.canvasFlag=false;//显示canvas海报
				this.deliveryFlag = false;//关闭分享弹窗
				this.$refs.hchPoster.createCanvasImage();//调用子组件的方法
			},500)
		},
		goTop() {
			uni.pageScrollTo({
				scrollTop: 0
			});
		},
		getDetail(id) {
			uni.showLoading({
				title: '加载中',
				mask: true
			});
			uni.request({
				url: uni.getStorageSync('hostname') + '?action=index/product/details',
				data: { id: id, token: uni.getStorageSync('cbe_token') },
				method: 'POST',
				dataType: 'json',
				header: { 'content-type': 'application/x-www-form-urlencoded' },
				success: resa => {
					uni.hideLoading();
					this.imgList = resa.data.data.images;
					this.detail = resa.data.data;
					uni.setNavigationBarTitle({
						title: resa.data.data.title
					});
					this.isShoucang = resa.data.data.isShoucang;
					this.nums = resa.data.data.minbuy;
					this.kjshuoming = resa.data.shuoming.content;
					this.cartcount = resa.data.data.cartcount;
					this.youfei = resa.data.youfei;
					var xid = '';
					resa.data.data.guige.forEach(item => {
						for (let cItem of item.child) {
							if (cItem.specid === item.id) {
								this.$set(cItem, 'selected', true);
								this.specSelected.push(cItem);
								xid += cItem.id + '_';
								break;
							}
						}
					});
					xid = xid.substr(0, xid.length - 1);
					this.checkprice(xid);
				}
			});
		},
		shuifeishuoming() {
			this.togglePopup('middle-list');
		},
		togglePopup(type) {
			this.type = type;
		},
		shoucang() {
			if (uni.getStorageSync('cbe_token')) {
				var id = this.detail.id;
				uni.request({
					url: uni.getStorageSync('hostname') + '?action=index/product/shoucang',
					data: { id: id, token: uni.getStorageSync('cbe_token') },
					method: 'POST',
					dataType: 'json',
					header: { 'content-type': 'application/x-www-form-urlencoded' },
					success: resa => {
						var one = resa.data;
						if (one.code == 0) {
							if (this.isShoucang == 0) {
								this.isShoucang = 1;
							} else {
								this.isShoucang = 0;
							}
							uni.showToast({
								title: one.msg,
								icon: 'success',
								mask: true,
								duration: 3000
							});
						}
					}
				});
			} else {
				uni.showModal({
					title: '温馨提示',
					content: '您还没有登录，无法进行收藏操作，是否登录？',
					confirmColor: '#008AB0',
					confirmText: '立即登录',
					cancelText: '再看看',
					success: e => {
						if (e.confirm) {
							uni.navigateTo({
								url: '/pages/public/login'
							});
						}
					}
				});
			}
		},
		changeNum(value) {
			this.nums = value;
		},
		//规格弹窗开关
		toggleSpec() {
			if (this.specClass === 'show') {
				this.specClass = 'hide';
				setTimeout(() => {
					this.specClass = 'none';
				}, 250);
			} else if (this.specClass === 'none') {
				this.specClass = 'show';
			}
		},
		//选择规格
		selectSpec(id, pid) {
			let list = this.detail.guige;
			let xid = '';
			for (var i = 0; i < list.length; i++) {
				if (list[i].id == pid) {
					for (var j = 0; j < list[i].child.length; j++) {
						if (list[i].child[j]) {
							if (list[i].child[j].id == id) {
								this.$set(list[i].child[j], 'selected', true);
							} else {
								this.$set(list[i].child[j], 'selected', false);
							}
						}
					}
				}
			}
			this.specSelected = [];
			for (var i = 0; i < list.length; i++) {
				for (var j = 0; j < list[i].child.length; j++) {
					if (list[i].child[j].selected == true) {
						this.specSelected.push(list[i].child[j]);
						xid += list[i].child[j].id + '_';
					}
				}
			}
			xid = xid.substr(0, xid.length - 1);
			this.checkprice(xid);
		},
		checkprice(ids) {
			if (ids != '') {
				uni.request({
					url: uni.getStorageSync('hostname') + '?action=index/product/guige',
					data: { ids: ids },
					method: 'POST',
					dataType: 'json',
					header: { 'content-type': 'application/x-www-form-urlencoded' },
					success: resa => {
						var one = resa.data;
						if (one.code == 0) {
							this.detail.marketprice = one.one.marketprice;
							this.detail.productprice = one.one.productprice;
							this.detail.total = one.one.stock;
							this.detail.goodssn = one.one.productsn;
						}
					}
				});
			}
		},
		//分享
		share() {
			if (uni.getStorageSync('cbe_token')) {
				this.$refs.share.toggleMask();
			} else {
				this.togglePopup('middle-lista');
			}
		},
		toFavorite() {
			this.favorite = !this.favorite;
		},
		addCart() {
			if (this.detail.total <= 0) {
				uni.showToast({ title: '库存不足', icon: 'none' });
				return false;
			} else if (this.detail.total < this.nums) {
				uni.showToast({ title: '库存不足', icon: 'none' });
				return false;
			}
			var token = uni.getStorageSync('cbe_token');
			if (token) {
				var id = this.detail.id;
				var guige = '';
				if (this.specSelected.length > 0) {
					var gg = '';
					for (var i = 0; i < this.specSelected.length; i++) {
						gg += this.specSelected[i].id + '_';
					}
					guige = gg.substr(0, gg.length - 1);
				}
				uni.request({
					url: uni.getStorageSync('hostname') + '?action=index/cart/addcart',
					data: { id: id, guige: guige, nums: this.nums, token: uni.getStorageSync('cbe_token'), utoken: this.utoken },
					method: 'POST',
					dataType: 'json',
					header: { 'content-type': 'application/x-www-form-urlencoded' },
					success: resa => {
						uni.hideLoading();
						var one = resa.data;
						this.cartcount = Number(this.cartcount) + Number(this.nums);
						if (one.code == 0) {
							uni.showToast({
								title: one.msg,
								icon: 'success',
								mask: true,
								duration: 3000
							});
							this.toggleSpec();
						} else {
							uni.showToast({ title: one.msg, icon: 'none' });
						}
					},
					fail: resa => {
						uni.hideLoading();
					}
				});
			} else {
				uni.showToast({ title: '尚未登录', icon: 'none' });
				var timer = setTimeout(() => {
					uni.navigateTo({
						url: '/pages/public/login'
					});
				}, 1000);
			}
		},
		buy() {
			if (this.detail.total <= 0) {
				uni.showToast({ title: '库存不足', icon: 'none' });
				return false;
			} else if (this.detail.total < this.nums) {
				uni.showToast({ title: '库存不足', icon: 'none' });
				return false;
			}
			var token = uni.getStorageSync('cbe_token');
			if (token) {
				var id = this.detail.id;
				var guige = '';
				if (this.specSelected.length > 0) {
					var gg = '';
					for (var i = 0; i < this.specSelected.length; i++) {
						gg += this.specSelected[i].id + '_';
					}
					guige = gg.substr(0, gg.length - 1);
				}
				var arr = [{ id: id, guige: guige, nums: this.nums, utoken: this.utoken }];
				uni.setStorageSync('buyarr', arr);
				var url = '/pages/order/createOrder';
				uni.navigateTo({
					url: url
				});
			} else {
				uni.showToast({ title: '未登录或无权限', icon: 'none' });
				var timer = setTimeout(() => {
					uni.navigateTo({
						url: '/pages/public/login'
					});
				}, 1000);
			}
		},
		stopPrevent() {},
		//详情
		navToDetailPage(url) {
			uni.navigateTo({
				url: url
			});
		},
		getuserinfo(e) {
			var that = this;
			if (e.detail.errMsg == 'getUserInfo:ok') {
				uni.showLoading({
					title: '正在授权',
					mask: true
				});
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						if (loginRes.errMsg == 'login:ok') {
							var code = loginRes.code;
							uni.getUserInfo({
								provider: 'weixin',
								lang: 'zh_CN',
								success: function(infoRes) {
									uni.request({
										url: uni.getStorageSync('hostname') + '?action=index/login/wechatlogin&code=' + code,
										data: infoRes,
										method: 'POST',
										dataType: 'json',
										header: { 'content-type': 'application/x-www-form-urlencoded' },
										success: resa => {
											uni.hideLoading();
											var one = resa.data;
											if (one.code == 0) {
												uni.setStorageSync('cbe_token', one.token);
												uni.showToast({
													title: one.msg,
													icon: 'success',
													mask: true,
													duration: 3000
												});
												that.login(one.data);
												var timer = setTimeout(() => {
													that.togglePopup('');
												}, 3000);
											} else if (one.code == 1) {
												uni.setStorageSync('cbe_retoken', one.token);
												uni.showToast({
													title: one.msg,
													icon: 'success',
													mask: true,
													duration: 3000
												});
												var timer = setTimeout(() => {
													uni.navigateTo({
														url: '/pages/public/zhecexieyi'
													});
												}, 2000);
											} else {
												uni.showToast({ title: one.msg, icon: 'none' });
												this.logining = false;
											}
										}
									});
								}
							});
						}
					}
				});
			}
		},
	}
};
</script>

<style lang="scss">
page {
	background: $page-color-base;
	padding-bottom: 160upx;
}
.go-top {
	position: fixed;
	right: 30upx;
	bottom: 150upx;
	z-index: 9999;
	image {
		width: 54upx;
		height: 54upx;
	}
}
.uni-centera {
	width: 568upx;
	height: 250upx;
	.zdl {
		text-align: center;
		color: #008ab0;
		font-size: 28upx;
		padding-top: 40upx;
		button {
			background: #008ab0;
			font-size: 28upx;
			width: 50%;
			height: 80upx;
		}
	}
}
.uni-center {
	width: 568upx;
	max-height: 900upx;
	min-height: 600upx;
	.zdl {
		text-align: center;
		color: #008ab0;
		font-size: 28upx;
		padding-top: 40upx;
	}
}
.clear {
	clear: both;
}
.icon-you {
	font-size: $font-base + 2upx;
	color: #888;
}
.carousel {
	height: 722upx;
	position: relative;
	swiper {
		height: 100%;
	}
	.shoucang {
		position: absolute;
		width: 40upx;
		height: 40upx;
		right: 40upx;
		top: 40upx;
	}
	.share {
		position: absolute;
		width: 30upx;
		height: 30upx;
		right: 40upx;
		bottom: 0upx;
	}
	.image-wrapper {
		width: 100%;
		height: 100%;
	}
	.swiper-item {
		display: flex;
		justify-content: center;
		align-content: center;
		height: 750upx;
		overflow: hidden;
		image {
			width: 100%;
			height: 100%;
		}
	}
}

/* 标题简介 */
.introduce-section {
	background: #fff;
	padding: 20upx 30upx;
	.bianhao {
		width: 100%;
		font-size: 26upx;
		color: #323232;
		.l {
			float: left;
		}
		.r {
			float: right;
			text {
				color: #37b0c9;
			}
		}
	}
	.title {
		font-size: 32upx;
		color: #323232;
		min-height: 40upx;
		line-height: 40upx;
		padding-top: 20upx;
	}
	.title_en {
		font-size: 30upx;
	}
	.pp {
		color: #7f7f7f;
		font-size: 26upx;
		padding: 30upx 0;
		padding-bottom: 10upx;
		text {
			padding: 0 15upx;
			border: 1upx solid #7f7f7f;
			border-radius: 10upx;
			margin-right: 15upx;
		}
	}
	.price-box {
		display: flex;
		align-items: baseline;
		height: 64upx;
		padding: 10upx 0;
		font-size: 28upx;
		color: #37b0c9;
		.t {
			color: #323232;
		}
	}
	.price {
		font-size: 36upx;
	}
	.m-price {
		margin: 0 12upx;
		color: $font-color-light;
		text-decoration: line-through;
	}
	.coupon-tip {
		align-items: center;
		padding: 4upx 10upx;
		background: #37b0c9;
		font-size: $font-sm;
		color: #fff;
		border-radius: 6upx;
		line-height: 1;
		transform: translateY(-4upx);
	}
	.bot-row {
		display: flex;
		align-items: center;
		height: 50upx;
		font-size: $font-sm;
		color: $font-color-light;
		text {
			flex: 1;
		}
	}
}
/* 分享 */
.share-section {
	display: flex;
	align-items: center;
	color: $font-color-base;
	background: linear-gradient(left, #fdf5f6, #fbebf6);
	padding: 12upx 30upx;
	.share-icon {
		display: flex;
		align-items: center;
		width: 70upx;
		height: 30upx;
		line-height: 1;
		border: 1px solid $uni-color-primary;
		border-radius: 4upx;
		position: relative;
		overflow: hidden;
		font-size: 22upx;
		color: $uni-color-primary;
		&:after {
			content: '';
			width: 50upx;
			height: 50upx;
			border-radius: 50%;
			left: -20upx;
			top: -12upx;
			position: absolute;
			background: $uni-color-primary;
		}
	}
	.icon-xingxing {
		position: relative;
		z-index: 1;
		font-size: 24upx;
		margin-left: 2upx;
		margin-right: 10upx;
		color: #fff;
		line-height: 1;
	}
	.tit {
		font-size: $font-base;
		margin-left: 10upx;
	}
	.icon-bangzhu1 {
		padding: 10upx;
		font-size: 30upx;
		line-height: 1;
	}
	.share-btn {
		flex: 1;
		text-align: right;
		font-size: $font-sm;
		color: $uni-color-primary;
	}
	.icon-you {
		font-size: $font-sm;
		margin-left: 4upx;
		color: $uni-color-primary;
	}
}

.shuifei {
	width: 100%;
	background: #ffffff;
	margin: 20upx 0;
	padding: 20upx 0;
	.shui {
		font-size: 26upx;
		color: #808080;
		padding: 20upx 30upx;
		.la {
			padding-left: 35upx;
			color: #333333;
		}
		.lb {
			padding-left: 35upx;
			color: #008ab0;
		}
		.lc {
			font-size: 26upx;
			color: #ff69b0;
			border: 1upx solid #ff69b0;
			padding: 2upx 20upx;
			border-radius: 30upx;
			margin-left: 35upx;
		}
	}
	.yun {
		font-size: 26upx;
		color: #808080;
		padding: 20upx 30upx;
		.la {
			padding-left: 35upx;
			color: #333333;
		}
		.lc {
			font-size: 26upx;
			color: #ff69b0;
			border: 1upx solid #ff69b0;
			padding: 2upx 20upx;
			border-radius: 30upx;
			margin-left: 35upx;
		}
	}
	.huodong {
		font-size: 26upx;
		color: #808080;
		padding: 20upx 30upx;
		.l {
			float: left;
			color: #333333;
		}
		.r {
			float: left;
			padding-left: 35upx;
			text {
				color: #ffad43;
				padding-right: 20upx;
			}
		}
	}
}

.c-list {
	font-size: 26upx;
	color: $font-color-base;
	background: #fff;
	.c-row {
		display: flex;
		align-items: center;
		height: 115upx;
		line-height: 115upx;
		padding: 0 30upx;
		position: relative;
	}
	.tit {
		width: 80upx;
		color: #808080;
	}
	.con {
		flex: 1;
		color: $font-color-dark;
		.selected-text {
			margin-right: 10upx;
			padding-left: 15upx;
		}
	}
	.bz-list {
		height: 40upx;
		font-size: $font-sm + 2upx;
		color: $font-color-dark;
		text {
			display: inline-block;
			margin-right: 30upx;
		}
	}
	.con-list {
		flex: 1;
		display: flex;
		flex-direction: column;
		color: #333333;
		line-height: 40upx;
	}
	.red {
		color: $uni-color-primary;
	}
}

.liucheng {
	width: 750upx;
	margin: 20upx 0;
	height: 160upx;
}

.goods-section {
	background: #fff;
	padding-bottom: 1px;
	.g-header {
		display: flex;
		align-items: center;
		height: 120upx;
		width: 750upx;
		padding: 0 30upx;
		position: relative;
	}
	.logo {
		display: block;
		width: 80upx;
		height: 80upx;
		border-radius: 8px;
		border: 1upx solid #ececec;
		text-align: center;
		image {
			width: 60upx;
			height: 60upx;
			margin-top: 10upx;
		}
	}
	.name {
		font-size: 28upx;
		color: #333333;
		margin-left: 24upx;
	}
	.yticon {
		position: absolute;
		right: 30upx;
	}
}
/* 评价 */
.eva-section {
	margin-top: 20upx;
	display: flex;
	flex-direction: column;
	padding: 20upx 30upx;
	background: #fff;
	.e-header {
		display: flex;
		align-items: center;
		height: 70upx;
		font-size: $font-sm + 2upx;
		color: $font-color-light;
		.tit {
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			margin-right: 4upx;
		}
		.tip {
			flex: 1;
			text-align: right;
		}
		.icon-you {
			margin-left: 10upx;
		}
	}
}
.eva-box {
	display: flex;
	padding: 20upx 0;
	.portrait {
		flex-shrink: 0;
		width: 80upx;
		height: 80upx;
		border-radius: 100px;
	}
	.right {
		flex: 1;
		display: flex;
		flex-direction: column;
		font-size: $font-base;
		color: $font-color-base;
		padding-left: 26upx;
		.con {
			font-size: $font-base;
			color: $font-color-dark;
			padding: 20upx 0;
		}
		.bot {
			display: flex;
			justify-content: space-between;
			font-size: $font-sm;
			color: $font-color-light;
		}
	}
}
/*  详情 */
.detail-desc {
	background: #fff;
	margin-top: 20upx;
	.d-header {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100upx;
		font-size: 30upx;
		color: #333333;
		position: relative;

		text {
			padding: 0 20upx;
			background: #fff;
			position: relative;
			z-index: 1;
		}
		&:after {
			position: absolute;
			left: 50%;
			top: 50%;
			transform: translateX(-50%);
			width: 300upx;
			height: 0;
			content: '';
			border-bottom: 1px solid #ccc;
		}
	}
}

/* 规格选择弹窗 */
.attr-content {
	padding: 10upx 30upx;
	position: relative;
	padding-bottom: 170upx;
	.a-t {
		display: flex;
		image {
			width: 220upx;
			height: 220upx;
			flex-shrink: 0;
			margin-top: 78upx;
			border-radius: 8upx;
		}
		.right {
			margin-top: 78upx;
			display: flex;
			flex-direction: column;
			padding-left: 24upx;
			font-size: $font-sm + 2upx;
			color: $font-color-base;
			line-height: 42upx;
			.titlea {
				font-size: 28upx;
				color: #323232;
			}
			.pp {
				color: #808080;
				font-size: 26upx;
			}
			.price {
				font-size: 28upx;
				color: #323232;
				margin-bottom: 10upx;
				text {
					color: #37b0c9;
					font-size: 36upx;
				}
			}
			.selected-text {
				margin-right: 10upx;
			}
		}
	}
	.attr-list {
		display: flex;
		flex-direction: column;
		font-size: $font-base + 2upx;
		color: $font-color-base;
		padding-top: 30upx;
		padding-left: 10upx;
		.tti {
			color: #808080;
			font-size: 26upx;
		}
	}
	.btnb {
		width: 300upx;
		height: 90upx;
		border-radius: 90upx;
		background: #37b0c9;
		color: #ffffff;
		font-size: 28upx;
		position: absolute;
		left: 40upx;
		bottom: 54upx;
		line-height: 90upx;
	}
	.btna {
		width: 300upx;
		height: 90upx;
		border-radius: 90upx;
		background: #008ab0;
		color: #ffffff;
		font-size: 28upx;
		position: absolute;
		right: 40upx;
		bottom: 54upx;
		line-height: 90upx;
	}
	.item-list {
		padding: 20upx 0 0;
		display: flex;
		flex-wrap: wrap;
		text {
			display: flex;
			align-items: center;
			justify-content: center;
			background: #ffffff;
			margin-right: 20upx;
			margin-bottom: 20upx;
			border-radius: 5upx;
			min-width: 60upx;
			padding: 10upx 30upx;
			font-size: 26upx;
			color: #333333;
			border: 1upx solid #ebebeb;
		}
		.selected {
			background: #ffffff;
			color: #008ab0;
			background: url('../../static/cpxuan.png') no-repeat right bottom;
			background-size: 25%;
			border: 1upx solid #008ab0;
		}
	}
	uni-number-box {
		width: 400upx;
		position: absolute;
		left: 120upx;
		z-index: 66;
		bottom: 205upx;
		.uni-numbox {
			height: 50upx;
			view {
				height: 50upx;
				width: 60upx;
				background: #ffffff;
			}
			input {
				height: 50upx;
				width: 60upx;
				border-right: 1upx solid #ebebeb;
			}
		}
	}
}

/*  弹出层 */
.popup {
	position: fixed;
	left: 0;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 99;

	&.show {
		display: block;
		.mask {
			animation: showPopup 0.2s linear both;
		}
		.layer {
			animation: showLayer 0.2s linear both;
		}
	}
	&.hide {
		.mask {
			animation: hidePopup 0.2s linear both;
		}
		.layer {
			animation: hideLayer 0.2s linear both;
		}
	}
	&.none {
		display: none;
	}
	.mask {
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		background-color: rgba(0, 0, 0, 0.4);
	}
	.layer {
		position: fixed;
		z-index: 99;
		bottom: 0;
		width: 100%;
		min-height: 40vh;
		/*border-radius: 10upx 10upx 0 0;*/
		background-color: #fff;
		.btn {
			height: 66upx;
			line-height: 66upx;
			border-radius: 100upx;
			background: $uni-color-primary;
			font-size: $font-base + 2upx;
			color: #fff;
			margin: 30upx auto 20upx;
		}
	}
	@keyframes showPopup {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@keyframes hidePopup {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 0;
		}
	}
	@keyframes showLayer {
		0% {
			transform: translateY(120%);
		}
		100% {
			transform: translateY(0%);
		}
	}
	@keyframes hideLayer {
		0% {
			transform: translateY(0);
		}
		100% {
			transform: translateY(120%);
		}
	}
}

/* 底部操作菜单 */
.page-bottom {
	position: fixed;
	left: 0upx;
	bottom: 0upx;
	z-index: 95;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 750upx;
	height: 110upx;
	background: #ffffff;
	.p-b-btn {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: $font-sm;
		color: $font-color-base;
		width: 100upx;
		height: 110upx;
		position: relative;
		.shubiao {
			position: absolute;
			right: 10upx;
			color: red;
			top: 10upx;
			font-size: 28upx;
		}
		.yticon {
			font-size: 40upx;
			line-height: 48upx;
			color: $font-color-light;
		}
		&.active,
		&.active .yticon {
			color: $uni-color-primary;
		}
		.gouwuche {
			width: 44upx;
			height: 44upx;
		}
		.share {
			width: 44upx;
			height: 44upx;
		}
		.kefu {
			width: 44upx;
			height: 44upx;
		}
		.icon-shoucang {
			font-size: 46upx;
			color: #008ab0;
		}
	}
	.fenxiang {
		background: #ffffff;
		border: none;
		&:after {
			border: none;
		}
	}
	.kk {
		background: #f6f7f7;
	}
	.action-btn-group {
		display: flex;
		height: 110upx;
		overflow: hidden;
		background: #37b0c9;
		position: relative;
		.action-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 225upx;
			height: 100%;
			font-size: 32upx;
			color: #ffffff;
			padding: 0;
			border-radius: 0;
			background: transparent;
		}
		.buy-now-btn {
			background: #008ab0;
		}
	}
}
</style>

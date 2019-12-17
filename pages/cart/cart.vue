<template>
	<view class="container">
		<!-- 空白页 -->
		<view v-if="!hasLogin || empty===true" class="empty">
			<view v-if="hasLogin" class="empty-tips">
				您的购物车空空如也
				<navigator class="navigator" v-if="hasLogin" url="../index/index" open-type="switchTab">随便逛逛>></navigator>
			</view>
			<view v-else class="empty-tips">
				您的购物车空空如也
				<view class="navigator" @click="navToLogin">去登陆>></view>
			</view>
		</view>
		<view v-else>
			<!-- 列表 -->
			<view class="cart-list">
				<block v-for="(item, index) in cartList" :key="item.id">
					<view class="cangku" >
						<image src="../../static/cartxuan.png" class="anniu" mode="" v-if="item.checked" @click="check('item', index)"></image>
						<image src="../../static/card_wxuan.png" class="anniu" mode="" v-if="!item.checked" @click="check('item', index)"></image>
						<view>{{item.bondedwh_name}}</view>
					</view>
					<view class="youhui" v-if="item.is_enough === 1"  @click="goProductList(item.bondedwh_id)">
						<text class="tt">满足</text>
						<text class="tta">满{{item.enough}}减{{item.give}}活动</text>
						<image src="../../static/jiantou-r.png" mode="" class="ttr"></image>
						<text class="tta" v-if="item.xenough>0 && item.xgive>0">再凑{{item.xenough-item.cart_total}}减{{item.xgive}}</text>
						<!-- <text class="ttb">还差￥80.00</text> -->
					</view>
					<view v-else>
						<view class="youhui"  @click="goProductList(item.bondedwh_id)">
							<text class="tt">满减</text>
							<text class="tta">满{{item.enough}}减{{item.give}}活动</text>
							<image src="../../static/jiantou-r.png" mode="" class="ttr"></image>
							<text class="ttb">还差￥{{item.spread}}</text>
						</view>
					</view>
					<block v-for="(goods_item, goods_index) in item.goods_list" :key="goods_item.id">				
						<uni-swipe-action :options="options2" :is-opened="isOpened" :auto-close="true"  @click="delClick(goods_item.id)">
						<view class="cart-item">
							<view v-if="goods_item.status == 1">
								<view class="xuanze">
									<image src="../../static/cartxuan.png" class="anniu" mode="" v-if="goods_item.checked" @click="check('goods_item',goods_item.id,index)"></image>
									<image src="../../static/card_wxuan.png" class="anniu" mode="" v-if="!goods_item.checked" @click="check('goods_item',goods_item.id,index)"></image>
								</view>
							</view>
							<view class="image-wrappera">
								<image :src="goods_item.image" mode="aspectFill"></image>
							</view>
							<view class="item-right" >
								<view class="clamp title" @click="goProduct(goods_item.goodsid)">{{goods_item.title}}</view>
								<view class="bianhao">产品编号：{{goods_item.goodssn}}</view>
								<view class="attr" v-if="goods_item.attr_val != '' ">规格：{{goods_item.attr_val}}</view>
								<view v-if="goods_item.shuifei >0" style="width: 100%;"><text class="shuis1" >不含税</text></view> 
								<view class="shuis" v-if="goods_item.shuifei <=0" >含税</view>
							</view>
							<view v-if="goods_item.status == 1">
								<view class="price">￥ {{goods_item.price}}</view>
							</view>
							<view class="jiajian">
									<view v-if="goods_item.status == 1">
										<uni-number-box class="step" :min="goods_item.minbuy"  :max="goods_item.maxbuy<goods_item.stock?goods_item.maxbuy:goods_item.stock" :value="goods_item.number>goods_item.stock?goods_item.stock:goods_item.number" :isMax="goods_item.number>=goods_item.stock?true:false" :isMin="goods_item.number===1?true:false"  :index="index"  :goodsindex="goods_index" @eventChange="numberChange"></uni-number-box>
									</view>
									<view  class="xiajia" v-else >
											该商品已下架
									</view>
							</view>	
						</view>			
						</uni-swipe-action>
					</block>
				</block>
			</view>
			<!-- 底部菜单栏 -->
			<view class="action-section">
				<view class="checkbox">
					<image :src="allChecked?'/static/cartxuan.png':'/static/card_wxuan.png'" mode="aspectFit" @click="check('all')"></image>
					<view class="clear-btn" :class="{show: allChecked}" @click="clearCart(1)">清空</view>
					<view class="clear-btn" :class="{show: !allChecked}" @click="clearCart(2)">删除</view>
				</view>
				<view class="total-box">
					<text class="price">总价：<text>¥{{total}}</text> </text>
					<text class="coupon">优惠：<text>-{{youhui?youhui:'0.00'}}</text>元</text>
				</view>
				<button type="primary" class="no-border confirm-btn" @click="createOrder">去结算</button>
			</view>
		</view>
		
		<view class="xihuan">
			<view :class="pindex==0?'active':''" @tap="changpindex(0)">我的收藏</view>
			<view :class="pindex==1?'active':''" @tap="changpindex(1)">我买过的</view>
		</view>
		<view class="clear"></view>
		<view class="hot-floor">
			<scroll-view class="floor-list" scroll-x v-if="pindex==0">
				<view class="scoll-wrapper">
					<view v-for="(item, index) in favList" :key="index" class="floor-item" @click="goProduct(item.id)">
						<image :src="item.thumb" mode="aspectFill"></image>
						<!-- <view class="ty">品牌故事</view> -->
						<view class="titlea">{{item.title}}</view>
						<view class="huodong-box">
							<text v-if="item.issendfree == 1">包邮</text><text v-if="item.cuxiao == 1">促销</text>
							<text  v-if="item.shuifei>0">不含税</text>
							<text style="display:none;" v-else>含税</text>
						</view>
						
						<view class="price-box">
							<text class="price">{{item.marketprice}}</text>
							<!-- <image src="../../static/tab-cart-current.png" mode=""></image> -->
						</view>
					</view>
				</view>
			</scroll-view>
			<scroll-view class="floor-list" scroll-x v-if="pindex==1">
				<view class="scoll-wrapper">
					<view v-for="(item, index) in buyList" :key="index" class="floor-item" @click="goProduct(item.goodsid)">
						<image :src="item.thumb" mode="aspectFill"></image>
						<!-- <view class="ty">品牌故事</view> -->
						<view class="titlea">{{item.title}}</view>
						<view class="huodong-box">
							<text v-if="item.issendfree == 1">包邮</text>
							<text v-if="item.shuifei>0">不含税</text>
							<text v-else>含税 </text>
						</view>
						<view class="price-box">
							<text class="price">{{item.price}}</text>
							<!-- <image src="../../static/tab-cart-current.png" mode=""></image> -->
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex';
	import uniNumberBox from '@/components/uni-number-box.vue'
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	export default {
		components: {
			uniSwipeAction,
			uniNumberBox
		},
		data() {
			return {
				total: 0, //总价格
				youhui:0, //优惠价格
				allChecked: true, //全选状态  true|false
				empty: false, //空白页现实  true|false
				cartList: [],
			    manjian:[],//满减规则
				favList: [],
				buyList:[],
				pindex:0,
				isOpened: false,
				options2: [{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
			};
		},
		onLoad(){
			this.loadData();
		},
		onShow(e){
			this.allChecked = false;
			this.loadData();
		},
		onHide(){ //页面离开后方法
			this.updateCart();
		},
		onBackPress(){
			this.updateCart();
		},
		watch:{
			//显示空白页
			cartList(e){
				let empty = e.length === 0 ? true: false;
				if(this.empty !== empty){
					// this.empty = empty;
				}
			}
		},
		setOpened() {
			this.isOpened = !this.isOpened
		},
		bindOpened() {
			this.isOpened = true
		},
		bindClosed() {
			this.isOpened = false
		},
		computed:{
			...mapState(['hasLogin'])
		},
		
		methods: {
			changpindex(e){
				this.pindex = e;
			},
			setOpened() {
				this.isOpened = !this.isOpened
			},
			bindOpened() {
				this.isOpened = true
			},
			bindClosed() {
				this.isOpened = false
			},
			goProduct(id){
				uni.navigateTo({
					url:"/pages/product/product?id="+id
				})
			},
			goProductList(id){
				uni.navigateTo({
					url:"/pages/product/list?bondedwh_id="+id
				})
			},
			//右滑删除
			delClick(id){
					uni.showModal({
					content: '删除所选商品',
					success: (e)=>{
						if(e.confirm){
							if(id==''){
								uni.showToast({ title:'删除失败，请选择需要删除的商品', icon: "none" });
								return;
							}
							uni.request({
								url:uni.getStorageSync('hostname') + '?action=index/cart/delcart',
								data: {ids:id,token:uni.getStorageSync('cbe_token')},
								method:'POST',
								dataType:'json',
								header: {'content-type' : 'application/x-www-form-urlencoded'},
								success: (res) => {
									if(res.data.code == 0){
										this.loadData();
									}
								}
							})				
						}
					}
				})
			},
			//请求数据
			loadData(){	
				uni.showLoading({
					title: '请稍后'
				})
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/cart/index',
					data: {token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (res) => {
						uni.hideLoading();
						if(res.data.code == 1){
							this.empty = true;
						}else{
							this.empty = false;
							let tmp_cartlist=[];
							tmp_cartlist = res.data.data[0];
							this.favList=res.data.data[1];
							this.buyList=res.data.data[2];
							this.manjian=res.data.data[3];
							const checked = true;
							tmp_cartlist.forEach(item=>{
								item.goods_list.forEach(val=>{
									val.checked = checked;							
								});
								item.checked = checked;
							})	
							this.cartList=[];
							this.cartList = tmp_cartlist;
							this.calcTotal();  //计算总价
						}
					}
				})				
			},
			//监听image加载完成
			onImageLoad(key, index) {
				this.$set(this[key][index], 'loaded', 'loaded');
			},
			//监听image加载失败
			onImageError(key, index) {
				this[key][index].image = '/static/errorImage.jpg';
			},
			navToLogin(){
				uni.navigateTo({
					url: '/pages/public/login'
				})
			},
			 //选中状态处理
			check(type, index,parent_index=''){
				if(type === 'item'){    //仓库
					this.cartList[index].checked = !this.cartList[index].checked;
					const checked = this.cartList[index].checked;
					const list = this.cartList;			    
					list.forEach((item,item_index)=>{
						if(item_index==index){
							item.goods_list.forEach(val=>{
								val.checked = checked;			
							});
							item.checked = checked;
						}
						
					})
				}else if(type==='all'){	 //全选状态
					const list = this.cartList;	
					const checked = !this.allChecked;	
						list.forEach(item=>{
							item.goods_list.forEach(val=>{
								val.checked = checked;						
							});
							item.checked = checked;
						})
						this.allChecked = checked;
				}else{          //单个产品选中状态
					const checked = !this.allChecked;					
					const list = this.cartList;																	
					list.forEach((item,goods_index)=>{		
						var item_checked=true;
						item.goods_list.forEach(val=>{
							if(index == val.id){									
								val.checked = !val.checked;		
							}
							if(val.checked==false){
								item_checked=false;
							}
						});
						if(goods_index == parent_index){
							item.checked = item_checked;
						}
					})
					this.allChecked = checked;
				}
				this.calcTotal();
			},
			//数量
			numberChange(data){
				let goodsList = this.cartList[data.index];
				let goodsInfo=this.cartList[data.index]['goods_list'][data.goodsindex];				
				let guige = goodsInfo.specs;
				let nums = Number(data.number)-Number(goodsInfo.number);
				let id = goodsInfo.goodsid;
				let cartid = goodsInfo.id;
				let bondedwh_id = goodsInfo.bondedwh_id;
				let goodsLists='';
				this.cartList[data.index]['goods_list'][data.goodsindex].number = data.number;
				this.calcTotal();
			},
			//删除
			deleteCartItem(index){
				let list = this.cartList;
				let row = list[index];
				let id = row.id;
				this.cartList.splice(index, 1);
				this.calcTotal();
				uni.hideLoading();
			},
			//清空
			clearCart(type){
				let goodsData = '';
				let content = '';
				if(type==1){
					content='清空购物车？';
				}else{
					content='删除所选商品？';
				}
				uni.showModal({
					content: content,
					success: (e)=>{
						if(e.confirm){
							let list = this.cartList;
							list.forEach(item=>{
								item.goods_list.forEach(val=>{
									if(val.checked == true){	
										goodsData+=val.id+','
									}							
								});
							})	
							if(goodsData==''){
								uni.showToast({ title:'删除失败，请选择需要删除的商品', icon: "none" });
								return;
							}
							uni.request({
								url:uni.getStorageSync('hostname') + '?action=index/cart/delcart',
								data: {ids:goodsData,token:uni.getStorageSync('cbe_token')},
								method:'POST',
								dataType:'json',
								header: {'content-type' : 'application/x-www-form-urlencoded'},
								success: (res) => {
									if(res.data.code == 0){
										this.loadData();
									}
								}
							})				
						}
					}
				})
			},
			//计算总价
			calcTotal(){
				uni.showLoading({
					title:'请稍后'
				});
				let list = this.cartList;
				var _that = this;
				if(list.length === 0){
					uni.hideLoading();
					this.empty = true;
					return;
				}
				let total = 0;
				let checked = true;
				let youhui = 0;
				list.forEach(item=>{
					var item_total=0;
					item.goods_list.forEach(val=>{
						if(val.checked === true && val.status==1){
							total += val.price * val.number;
							item_total +=  val.price * val.number;
						}else if(checked === true){
							checked = false;
						}
					});
					var manjian = _that.manjianCalc(item_total);
					if(manjian['status']==1){
						item.xenough = manjian['xenough'];
						item.xgive = manjian['xgive'];
						item.enough = manjian['enough'];
						item.give = manjian['give'];
						item.is_enough=1;
						item.spread=manjian['xenough']-item_total;
						youhui += manjian['give'];
					}else if(manjian['status']==2){
						item.is_enough=0;
						item.enough = manjian['enough'];
						item.give = manjian['give'];
						item.spread=manjian['xenough']-item_total;	
					}else{
						item.is_enough = -1;
					}
					item.cart_total=item_total;
				})
				this.youhui = Number(youhui.toFixed(2)).toFixed(2);
				this.allChecked = checked;
				this.total = Number(total.toFixed(2)).toFixed(2);
				uni.hideLoading();
			},
			//满减计算
			manjianCalc(total){
				var manjian = this.manjian;
				var res = [];
				res['enough']=0;
				res['give']=0;
				res['xenough']=0;
				res['xgive']=0;
				res['status']=0;
				var cm = manjian.length;
				if(cm>0){
					for(var i=0;i<cm;i++){
						if(total>=manjian[i]['enough']){
							if(manjian[i-1] != undefined ){
								res['xenough']=manjian[i-1]['enough'];
								res['xgive']=manjian[i-1]['give'];
							}else{
								res['xenough']=0;
								res['xgive']=0;
							}
							res['enough']=manjian[i]['enough'];
							res['give']=manjian[i]['give'];
							res['status']=1;
							return res;
						}
					}
					res['status']=2;
					res['enough']=manjian[cm-1]['enough'];
					res['give']=manjian[cm-1]['give'];
					res['xenough']=manjian[cm-1]['enough'];
					res['xgive']=manjian[cm-1]['give'];
				}
				return res;
			},
			//更新购物车数据
			updateCart(){
				let cartList = this.cartList;
				var tmp_cartList=[];
				var json_cartList={};
				var res = true;
				cartList.forEach(p_item=>{
					p_item.goods_list.forEach(item=>{
						console.log(item);
						tmp_cartList.push({
							id:item.id,
							goodsid:item.goodsid,
							optionid:item.optionid,
							total:item.number
						})
					})
				})
				if(tmp_cartList.length!=0){
					json_cartList=JSON.stringify(tmp_cartList);
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/cart/updateCartInfo',
						data: {cartlist:json_cartList,token:uni.getStorageSync('cbe_token')},
						method:'POST',
						dataType:'json',
						header: {'content-type' : 'application/x-www-form-urlencoded'},
						success: (res) => {
							if(res.data.code == 0){
								res =  true;
							}else{
								res =  false;
							}
						},
						fail:(res)=>{
							 res =  false;
						}
					})
				}
				return res;
			},
			//创建订单
			createOrder(){
				uni.showLoading({
					title:'请稍后'
				})
				var res = this.updateCart();
				if(res){
					let list = this.cartList;
					let goodsData = [];
					let bondedwh_id = 0;
					let tmp_flag = true;
					list.forEach((item,index)=>{					
						item.goods_list.forEach(goodsItem=>{
							if(goodsItem.checked && goodsItem.status==1){
								if(bondedwh_id == 0 ){
									bondedwh_id = goodsItem.bondedwh_id;
								}else if(bondedwh_id != goodsItem.bondedwh_id){
									tmp_flag = false;
								}
								goodsData.push({
									id:goodsItem.goodsid,
									guige: goodsItem.specs==null?'':goodsItem.specs,
									nums: goodsItem.number,
									utoken:goodsItem.utoken
								})	
							}	
						})
					})		
					if(!tmp_flag){
						uni.showToast({ title:'提交失败，每次结算只能选择一个仓库进行结算', icon: "none" });
						return;
					}
					if(goodsData.length == 0){
						uni.showToast({ title:'结算失败，请选择需要结算的商品', icon: "none" });
						return;
					}
					if(this.total>5000){
						uni.showToast({ title:'结算失败，订单总金额不能大于5000元', icon: "none" });
						return;
					}
					var arr = goodsData;
					uni.hideLoading();
					uni.setStorageSync('buyarr',arr);
					uni.navigateTo({
						url: `/pages/order/createOrder`
					})
				}else{
					uni.showLoading({
						title:'网络开小差，请稍后再试',
					})
				}
			}
		}
	}
</script>

<style lang='scss'>
	page{
		background: #f4f4f4;
	}
	.clear{
		clear:both;
	}
	.container{
		padding-bottom: 134upx;
		/* 空白页 */
		.empty{
			margin-top: 20upx;
			width: 100%;
			height: 200upx;
			display:flex;
			justify-content: center;
			flex-direction: column;
			align-items:center;
			background: #fff;
			.empty-tips{
				display:flex;
				font-size: 28upx;
				color:#333333;
				.navigator{
					color: #008ab0;
					margin-left: 16upx;
				}
			}
		}
	}
	/* 购物车列表项 */
	.cangku{
		height:90upx;padding:0 40upx; line-height:90upx; background: #FFFFFF; position: relative; margin-top:20upx;
		.anniu{
			width:38upx; height:38upx; position: absolute;top:25upx; left:40upx;
		}
		view{
			color:#333333; font-size:28upx;line-height:90upx; position: absolute;top:-1upx; left:90upx;
		}
	}
	.youhui{
		background: #FFFFFF; padding:30upx 40upx; padding-top:0upx; position: relative;
		.tt{
			color:#ffad43; font-size:26upx; border:1upx solid #ffad43; padding:2upx 20upx; border-radius:30upx;
		}
		.tta{
			color:#333333; font-size:28upx;padding-left:20upx;
		}
		.ttb{
			color:#ff69b0; font-size:28upx; float: right; padding-right: 35upx;
		}
		.ttr{
			width:30upx; height: 30upx; position: absolute; right:40upx;top:5upx;
		}
	}
	
	.cart-item{
		display:flex;
		position:relative;
		height:260upx;
		background: #FFFFFF;
		.xuanze{
			.anniu{
				width:38upx; height:38upx; position: absolute;top:70upx;left:40upx;
			}
		}
		.image-wrappera{
			width: 180upx;
			height: 180upx;
			position: absolute;
			top:0upx; left:100upx;
			border:1upx solid #f0e9de;
			border-radius:8upx;
			image{
				width:100%; height:100%;
			}
		}
		.item-right{
			position:absolute;
			left:310upx;
			height:260upx;
			.title,.price{
				font-size:$font-base + 2upx;
				color: $font-color-dark;
				height: 40upx;
				line-height: 40upx;
				width: 400upx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 1;
				overflow: hidden;
			}
			.bianhao{
				font-size: 24upx;
				color: #808080;
				height:40upx;
				line-height:40upx;
			}
			.attr{
				font-size: 24upx;
				color: #808080;
				height: 34upx;
				line-height:34upx;
				background: #f3f3f3; padding:0 15upx;
			}
			.shuis{
				color:#ff69b0;
				width:80upx; 
				height:38upx; border:1upx solid #ff69b0;border-radius:50upx; 
				font-size:25upx; text-align: center; line-height: 36upx; margin-top:20upx;
			}
			.shuis1{
				color:#ff69b0;
				width:150upx; 
				padding-left:12upx; 
				padding-right:12upx; 
				height:38upx; border:1upx solid #ff69b0;border-radius:50upx; 
				font-size:25upx; text-align: center; line-height: 36upx; margin-top:20upx;
			}
			.yujishuifei{
				   font-size:22upx; color:#c2c2c2;padding:0 20upx;
			}
			
		}
		.price{
			position: absolute;left:310upx; bottom:30upx; color:#37b0c9; font-size:32upx;
		}
		.jiajian{
			.xiajia{
				background: #FFFFFF;width:180upx;height:50upx; font-size:30upx;float:right;
			}
			/* #ifdef H5 */
			position: absolute;right:250upx; bottom:25upx;
			.uni-numbox{
				background: #FFFFFF;width:180upx;height:50upx; float:right;
				.uni-numbox-value{
					border-top:1upx solid #cccccc; border-bottom:1upx solid #cccccc;height:50upx;
				}
				.uni-numbox-minus{
					border-radius:8upx 0upx 0upx 8upx;
				}
				.uni-numbox-plus{
					border-radius:0upx 8upx 8upx 0upx;
				}
			}
			/* #endif */
			/* #ifdef MP */
			position: absolute;right:80upx; bottom:20upx;
			uni-number-box {
				width:180upx;height:50upx; float:right;
				.uni-numbox{
					background: #FFFFFF;
					view{
						width:60upx;height:50upx; background: #FFFFFF; line-height:48upx;text-align: center; border:1upx solid #cccccc;
					}
					input{
						border-top:1upx solid #cccccc; border-bottom:1upx solid #cccccc;height:50upx; background:#FFFFFF; width:60upx; font-size:28upx;
					}
					.uni-numbox-minus{
						border-radius:8upx 0upx 0upx 8upx;
					}
					.uni-numbox-plus{
						border-radius:0upx 8upx 8upx 0upx;
					}
				}
			}
			/* #endif */
		}
	}
	/* 底部栏 */
	.action-section{
		/* #ifdef H5 */
		margin-bottom:100upx;
		/* #endif */
		position:fixed;
		left:0upx;
		bottom:30upx;
		z-index: 95;
		display: flex;
		align-items: center;
		width: 750upx;
		height: 100upx;
		background: rgba(255,255,255,.9);
		.checkbox{
			margin-left:40upx;
			height:52upx;
			position:relative;
			image{
				width: 52upx;
				height: 100%;
				position:relative;
				z-index: 5;
			}
		}
		.clear-btn{
			position:absolute;
			left: 26upx;
			top: 0;
			z-index: 4;
			width: 0;
			height: 52upx;
			line-height: 52upx;
			padding-left: 38upx;
			font-size: 28upx;
			color: #fff;
			background: $font-color-disabled;
			border-radius:0 50px 50px 0;
			opacity: 0;
			transition: .2s;
			&.show{
				opacity: 1;
				width: 120upx;
			}
		}
		.total-box{
			flex: 1;
			display:flex;
			flex-direction: column;
			text-align:right;
			padding-right: 40upx;
			.price{
				font-size: 24upx;
				color:#333333;
				text{
					color:#37b0c9; font-size:28upx;
				}
			}
			.coupon{
				font-size:24upx;
				color: #808080;
				text{
					color: #808080;
				}
			}
		}
		.confirm-btn{
			padding: 0 38upx;
			margin: 0;
			border-radius: 100px;
			height: 72upx;
			line-height: 72upx;
			font-size: 28upx;
			background:#008ab0;
			margin-right: 40upx;
		}
	}
	
	.xihuan{
		height:125upx;background:#FFFFFF; padding:0 40upx; padding-top:30upx; margin-top: 20upx;
		view{
			float:left; font-size: 28upx; color:#333333; width:50%; text-align: center; padding:20upx 0;
		}
		.active{
			color:#008ab0; background: url('../../static/xiahuaxian_b.png') no-repeat bottom center;background-size:20%;
		}
	}
	.hot-floor{
		width: 100%;
		overflow: hidden;
		.floor-list{
			border-radius: 6upx;
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
			width:329upx;
			height:580upx;
			box-shadow: 2upx 2upx 5upx #cccccc;
			margin-right:30upx;
			border:1upx solid #f0e9de;
			position: relative;
			image{
				width:329upx;
				height:329upx;
				border-radius: 6upx;
			}
			.ty{
				color: #808080; font-size:24upx;padding:0upx 20upx;
			}
			.titlea{
				color:#333333; font-size:26upx; padding:15upx 20upx;
				line-height:35upx;
				height:80upx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			.huodong-box{
				padding:0 20upx;
				text{
					color:#ff69b0; font-size:24upx; border:1upx solid #ff69b0; padding:0upx 15upx; margin-right:15upx; border-radius:30upx;
				}
			}
			.shui{
				font-size:22upx; color:#c2c2c2;padding:0 20upx; padding-top:10upx;
			}
			.price-box{
				position: absolute; bottom: 20upx; left:0upx; width: 100%;
				padding:0 20upx; padding-top:20upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 24upx;
				color:  #37b0c9;
				image{
					width:40upx; height:40upx;
				}
			}
			.price{
				font-size: 34upx;
				color: #37b0c9;
				line-height: 1;
				&:before{
					content: '￥';
					font-size: 34upx;
				}
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
	/* 复选框选中状态 */
	.action-section .checkbox.checked,
	.cart-item .checkbox.checked{
		color: $uni-color-primary;
	}
</style>

<template>
	<view class="content">
		<view class="navbar" :style="{position:headerPosition,top:headerTop}">
			<view class="nav-item" :class="{current: filterIndex === 0}" @click="tabClick(0)">综合</view>
			<view class="nav-item" :class="{current: filterIndex === 1}" @click="tabClick(1)">销量</view>
			<view class="nav-item" :class="{current: filterIndex === 3}" @click="tabClick(3)">人气</view>
			<view class="nav-item" :class="{current: filterIndex === 2}" @click="tabClick(2)">
				<text>价格</text>
				<view class="p-box">
					<text :class="{active: priceOrder === 1 && filterIndex === 2}" class="yticon icon-shang"></text>
					<text :class="{active: priceOrder === 2 && filterIndex === 2}" class="yticon icon-shang xia"></text>
				</view>
			</view>
		</view>
		<view class="youhuiquan" v-if="yhqid>0">
			<view class="tti">【优惠券】{{yhqDetail.title?yhqDetail.title:''}}</view>
			<view class="tim">有效期：{{yhqDetail.times?yhqDetail.times:''}}</view>
		</view>
		<view class="goods-list">
			<view v-for="(item, index) in goodsList" :key="index" class="goods-item" @click="navToDetailPage(item)">
				<view class="image-wrapper">
					<image :src="item.image" mode="aspectFill"></image>
				</view>
				<text class="pp" v-if="item.labelname">{{item.labelname[0]}}</text>
				<text class="pp" v-else>{{item.pp.name}}</text>
				<view class="title">{{item.title}}</view>
				<view class="huodong-box">
					<text v-if="item.shuifei<=0">含税</text><text v-if="item.issendfree==1">包邮</text><text v-if="item.cuxiao==1">促销</text>
				</view>
				<view class="shui" v-if="item.shuifei>0">预计税费：￥{{item.shuifei}}</view>
				<view class="shui" v-else><!-- 预计税费：含税 --> </view>
				<view class="price-box">
					<text class="price">{{item.price}}</text>
					<image src="../../static/tab-cart-current.png" mode=""></image>
				</view>
			</view>
		</view>
		<uni-load-more :status="loadingType"></uni-load-more>
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
				cateMaskState: 0,
				headerPosition:"fixed",
				headerTop:"0px",
				loadingType: 'more',
				filterIndex: 0, 
				cateId: 0,
				pcateId:0,
				priceOrder: 0,
				cateList: [],
				goodsList: [],
				count:'',
				pn:0,
				bondedwh_id:0,
				yhqid:0,
				yhqDetail:[],
				shopname:''
				
			};
		},
		onLoad(options){
			// #ifdef H5
			this.headerTop = document.getElementsByTagName('uni-page-head')[0].offsetHeight+'px';
			// #endif
			if(options.tid){
				this.cateId = options.tid;
			}
			if(options.sid){
				this.pcateId = options.sid;
			}
			if(options.bondedwh_id){
				this.bondedwh_id = options.bondedwh_id;
			}
			if(options.yhqid){
				this.yhqid = options.yhqid;
			}
			if(options.shopname){
				this.shopname = options.shopname;
				uni.setNavigationBarTitle({
				    title: options.shopname
				});
			}
			this.loadData();
		},
		onPageScroll(e){
			if(e.scrollTop>=0){
				this.headerPosition = "fixed";
			}else{
				this.headerPosition = "absolute";
			}
		},
		onPullDownRefresh(){
			this.loadData('refresh');
		},
		onReachBottom(){
			this.loadData();
		},
		methods: {
			async loadCateList(fid, sid){
				let list = await this.$api.json('cateList');
				let cateList = list.filter(item=>item.pid == fid);
				
				cateList.forEach(item=>{
					let tempList = list.filter(val=>val.pid == item.id);
					item.child = tempList;
				})
				this.cateList = cateList;
			},
			async loadData(type='add', loading) {
				if(type === 'add'){
					if(this.loadingType === 'nomore'){
						return;
					}
					this.loadingType = 'loading';
				}else{
					this.loadingType = 'more'
				}
				
				let goodsList = await this.getGoodlist();
				if(type === 'refresh'){
					this.goodsList = [];
				}
				if(this.filterIndex === 3){
					goodsList.sort((a,b)=>b.renqi - a.renqi)
				}
				if(this.filterIndex === 2){
					goodsList.sort((a,b)=>{
						if(this.priceOrder == 1){
							return a.price - b.price;
						}
						return b.price - a.price;
					})
				}
				this.goodsList = this.goodsList.concat(goodsList);
				this.loadingType  = this.goodsList.length > this.count ? 'nomore' : 'more';
				if(type === 'refresh'){
					if(loading == 1){
						uni.hideLoading()
					}else{
						uni.stopPullDownRefresh();
					}
				}
			},
			async getGoodlist(){
				return new Promise((resolve, reject) => {
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/product/index',
						data: {pn:this.pn,cateId:this.cateId,pcateId:this.pcateId,filterIndex:this.filterIndex,priceOrder:this.priceOrder,bondedwh_id:this.bondedwh_id,yhqid:this.yhqid,shopname:this.shopname},
						method:'POST',
						dataType:'json',
						header: {'content-type' : 'application/x-www-form-urlencoded'},
						success: (res) => {
							uni.hideLoading()
							if(res.data.code==0){
								this.pn = Number(this.pn)+Number(1);
								this.count = res.data.count;
								this.yhqDetail = res.data.yhqone;
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
			tabClick(index){
				this.pn = 0;
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
			navToDetailPage(item){
				let id = item.id;
				if(uni.getStorageSync('cbe_token')){
					uni.navigateTo({
						url: `/pages/product/product?id=${id}&utoken=${uni.getStorageSync('cbe_token')}`
					})
				}else{
					uni.navigateTo({
						url: `/pages/product/product?id=${id}`
					})
				}
			},
			stopPrevent(){}
		},
	}
</script>

<style lang="scss">
	page, .content{
		background: #FFFFFF;
	}
	.content{
		padding-top: 96upx;
		.youhuiquan{
			width:100%; background: #fff4e6;
			.tti{
				color:#ff9141; font-size: 28upx; padding: 0 40upx; text-align: center; padding-top: 30upx;
			}
			.tim{
				color: #ff9141; font-size: 26upx; text-align: center; padding-bottom: 30upx; padding-top: 10upx;
			}
		}
	}

	.navbar{
		position: fixed;
		left: 0;
		top: var(--window-top);
		display: flex;
		width: 100%;
		height: 80upx;
		background: #fff;
		box-shadow: 0 2upx 10upx rgba(0,0,0,.06);
		z-index: 10;
		.nav-item{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 30upx;
			color: $font-color-dark;
			position: relative;
			&.current{
				color: #008ab0;
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 120upx;
					height: 0;
					border-bottom: 4upx solid #008ab0;
				}
			}
		}
		.p-box{
			display: flex;
			flex-direction: column;
			.yticon{
				display: flex;
				align-items: center;
				justify-content: center;
				width: 30upx;
				height: 14upx;
				line-height: 1;
				margin-left: 4upx;
				font-size: 26upx;
				color: #888;
				&.active{
					color: #008ab0;
				}
			}
			.xia{
				transform: scaleY(-1);
			}
		}
		.cate-item{
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			width: 80upx;
			position: relative;
			font-size: 44upx;
			&:after{
				content: '';
				position: absolute;
				left: 0;
				top: 50%;
				transform: translateY(-50%);
				border-left: 1px solid #ddd;
				width: 0;
				height: 36upx;
			}
		}
	}
	/* 商品列表 */
	.goods-list{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		padding-top:20upx;
		.goods-item{
			display:flex;
			flex-direction: column;
			width:329upx;
			height:560upx;
			padding-bottom:30upx;
			box-shadow: 2upx 2upx 5upx #cccccc;
			margin-bottom:40upx;
			position: relative;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 329upx;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.pp{
			color:#808080; font-size:24upx; padding:0 20upx; padding-top:10upx;
		}
		.title{
			padding:0 20upx;
			padding-top:15upx;
			font-size: 26upx;
			color: #333333;
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
			font-size:22upx; color:#c2c2c2;padding:0 20upx; padding-top:10upx; height:40upx;
		}
		.price-box{
			position: absolute;
			bottom:20upx;left:0upx;
			padding:0 20upx; padding-top:20upx;
			width: 100%;
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
</style>

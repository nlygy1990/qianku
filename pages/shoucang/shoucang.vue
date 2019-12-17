<template>
	<view class="content">
		<view class="goods-list">
			<view v-for="(item, index) in goodsList" :key="index" class="goods-item">
				<view class="image-wrapper"  @tap="navToDetailPage(item.goods)">
					<image :src="item.goods.thumb" mode="aspectFill"></image>
				</view>
				<text class="pp" v-if="item.goods.labelname"  @tap="navToDetailPage(item.goods)">{{item.goods.labelname[0]}}</text>
				<text class="pp" v-else  @tap="navToDetailPage(item.goods)">{{item.goods.pp.name}}</text>
				<view class="title" @tap="navToDetailPage(item.goods)">{{item.goods.title}}</view>
				<view class="huodong-box" @tap="navToDetailPage(item.goods)">
					<text v-if="item.goods.shuifei<=0">含税</text><text v-if="item.goods.issendfree==1">包邮</text><text v-if="item.cuxiao==1">促销</text>
				</view>
				<view class="shui" v-if="item.goods.shuifei>0">预计税费：￥{{item.goods.shuifei}}</view>
				<view class="shui" v-else><!-- 预计税费：含税 --> </view>
				<view class="price-box">
					<text class="price">{{item.goods.marketprice}}</text>
					<image src="../../static/tab-cart-current.png" mode=""></image>
				</view>
			</view>
		</view>
		<uni-load-more :status="loadingType" v-if="count>0"></uni-load-more>
		<image src="../../static/noshoucang.png" mode="" class="noshoucang" v-else></image>
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
				headerPosition:"fixed",
				loadingType: 'more', //加载更多状态
				goodsList: [],
				mgoodsList:[],
				pn:0,
				count:''
			};
		},
		onShow() {
			if(uni.getStorageSync('cbe_token')){
				this.loadData();
			}else{
				uni.showToast({ title:"未登录或无权限",icon: "none"});
				var timer = setTimeout(()=>{
					uni.navigateBack({
						delta:1
					})
				},1000);
			}
		},
		//下拉刷新
		onPullDownRefresh(){
			this.loadData('refresh');
		},
		//加载更多
		onReachBottom(){
			this.loadData();
		},
		methods:{
			//加载商品 ，带下拉刷新和上滑加载
			async loadData(type='add',loading) {
				//没有更多直接返回
				if(type === 'add'){
					if(this.loadingType === 'nomore'){
						return;
					}
					this.loadingType = 'loading';
				}else{
					this.loadingType = 'more'
				}
				let goodsList = await this.getMyshoucang();
				if(type === 'refresh'){
					this.goodsList = [];
				}
				this.goodsList = this.goodsList.concat(goodsList);
				
				//判断是否还有下一页，有是more  没有是nomore(测试数据判断大于20就没有了)
				this.loadingType  = this.goodsList.length > this.count ? 'nomore' : 'more';
				if(type === 'refresh'){
					if(loading == 1){
						uni.hideLoading()
					}else{
						uni.stopPullDownRefresh();
					}
				}
			},
			async getMyshoucang(){
				return new Promise((resolve, reject) => {
					uni.showLoading({
						title: '请稍后'
					})
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/member/myShoucang',
						data: {pn:this.pn,token:uni.getStorageSync('cbe_token')},
						method:'POST',
						dataType:'json',
						header: {'content-type' : 'application/x-www-form-urlencoded'},
						success: (res) => {
							uni.hideLoading()
							if(res.data.code==0){
								this.pn = Number(this.pn)+Number(1);
								this.count = res.data.count;
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
			//筛选点击
			tabClick(index){
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
			//详情
			navToDetailPage(item){
				//测试数据没有写id，用title代替
				let id = item.id;
				uni.navigateTo({
					url: `/pages/product/product?id=${id}`
				})
			},
			stopPrevent(){}
		}
	}
</script>

<style lang="scss">
	page, .content{
		background:#FFFFFF;
	}
	.content{
		padding-top: 30upx;
	}
	.noshoucang{
		width:170upx; height:149upx; margin-left:290upx; margin-top:220upx;
	}
	/* 商品列表 */
	.goods-list{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		.goods-item{
			display:flex;
			flex-direction: column;
			width:329upx;
			padding-bottom:30upx;
			box-shadow: 2upx 2upx 5upx #cccccc;
			margin-bottom:40upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 329upx;
			overflow: hidden;
			border:1upx solid #f1f1f1;
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
</style>

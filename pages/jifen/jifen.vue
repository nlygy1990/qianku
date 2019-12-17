<template>
	<view>
		<view class="jftop">
			<view class="zongjifen">{{zongfen?zongfen:'0'}}</view>
			<view class="zongtis">积分余额</view>
			<navigator url="jifenshangcheng" hover-class="none" class="jf">积分购物</navigator>
		</view>
		<view class="shixiao" @tap="navto">
			<view class="sxtop">即将失效积分：300</view>
			<view class="sxbottom">失效时间：2019.09.09</view>
			<image src="../../static/jiantou-r.png" mode="" class="jt"></image>
		</view>
		<view class="titles">积分记录 <image src="../../static/wenhao.png" mode=""></image></view>
		<view class="lists">
			<view class="l-item" v-for="(item,index) in goodsList" :key="index">
				<view class="tt">{{item.title?item.title:''}}</view>
				<view class="ttime">{{item.createtime?item.createtime:''}}</view>
				<view class="tr">{{item.num?item.num:''}} <image src="../../static/jiantou-r.png" mode="" v-if="item.ordersn!='0'"></image></view>
				<view class="clear"></view>
			</view>
		</view>
		<uni-load-more :status="loadingType" v-if="count>0"></uni-load-more>
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
				count:'',
				zongfen:''
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
			navto(){
				uni.navigateTo({
					url:"/pages/jifen/shixiao"
				})
			},
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
				let goodsLista = await this.getMyshoucang();
				let goodsList  = goodsLista.data;
				// this.count = goodsLista.count;
				this.zongfen = goodsLista.zongfen;
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
						url:uni.getStorageSync('hostname') + '?action=index/member/myJifen',
						data: {pn:this.pn,token:uni.getStorageSync('cbe_token')},
						method:'POST',
						dataType:'json',
						header: {'content-type' : 'application/x-www-form-urlencoded'},
						success: (res) => {
							uni.hideLoading()
							if(res.data.code==0){
								this.pn = Number(this.pn)+Number(1);
								resolve(res.data);
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
			stopPrevent(){}
		}
	}
</script>

<style lang="scss">
	.clear{
		clear:both;
	}
	page{
		width:100%;background: $page-color-base;
	}
	.lists{
		width:100%; padding:0upx 40upx; background: #ffffff;
		.l-item{
			width:100%;height:120upx;border-bottom:1upx solid #f2f2f2; position: relative;
			.tt{
				color:#323232; font-size: 28upx; padding-top: 28upx;
			}
			.ttime{
				color:#808080; font-size: 26upx;
			}
			.tr{
				float:right; position: absolute;height:120upx; line-height: 120upx; right:0upx;top:0upx; color:#333333; font-size: 28upx;
				image{
					width:28upx;height:28upx;
				}
			}
		}
	}
	.jftop{
		width:100%;background: url('http://wxapp.tegou100.com/static/images/user_bg.png'); height:200upx; position: relative;
		.zongjifen{
			color:#ffffff; font-size:46upx; position:absolute; top:55upx; left:40upx;
		}
		.zongtis{
			color: #ffffff; font-size: 26upx; position: absolute; left:50upx; bottom:55upx;
		}
		.jf{
			width:160upx;height:48upx; border-radius:48upx; color:#ffffff; font-size: 26upx; border:1upx solid #ffffff; text-align: center;line-height:48upx; position:absolute; right:40upx; top:76upx;
		}
	}
	.shixiao{
		height:158upx; padding:40upx 40upx; background: #ffffff; position: relative;
		.sxtop{
			color:#242424; font-size: 30upx;
		}
		.sxbottom{
			color:#242424; font-size: 26upx;
		}
		.jt{
			width:35upx; height:35upx; position: absolute; right:40upx; top:59upx;
		}
	}
	.titles{
		margin-top:30upx; width:100%;padding:0upx 40upx; color:#323232; font-size: 30upx;background: #ffffff; border-bottom:1upx solid #f2f2f2; height:104upx; line-height: 104upx;
		image{
			width:32upx; height:32upx; margin-left: 20upx;
		}
	}
</style>

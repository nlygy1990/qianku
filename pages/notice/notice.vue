<template>
	<view>
		<view class="notice-item order" v-for="(item,index) in goodsList" :key="index" v-if="item.types=='order'" @tap="navToDetailPage('/pages/order/detail?id='+item.number)">
			<view class="toubu">
				<view class="tb-left">订单跟踪</view>
				<view class="tb-right">{{item.time?item.time:''}}</view>
				<view class="clear"></view>
			</view>
			<view class="titles">{{item.title?item.title:''}}</view>
			<view v-for="(itema,indexa) in item.content" :key="indexa">
				<view class="cont">
					<view class="desc">{{itema.goods_detail.title?itema.goods_detail.title:''}}</view>
					<view class="no">产品编号：{{itema.guige_detail.goodssn?itema.guige_detail.goodssn:itema.godds_detail.goodssn}}</view>
					<view class="no">订单编号：{{item.number?item.number:''}}</view>
					<view class="imgs"><image :src="itema.goods_detail.thumb" mode=""></image></view>
				</view>
			</view>
		</view>

		<view class="notice-item tongzhi" v-for="(item,index) in goodsList" :key="index" v-if="item.types=='huodong'">
			<view class="toubu">
				<view class="tb-left">活动通知</view>
				<view class="tb-right">{{item.time?item.time:''}}</view>
				<view class="clear"></view>
			</view>
			<view class="titles">{{item.title?item.title:''}}</view>
			<view class="cont">
				<view class="desc">{{item.content?item.content:''}}</view>
				<view class="no">活动时间：{{item.huodongtime?item.huodongtime:''}}</view>
				<view class="imgs"><image src="../../static/emptyCart.jpg" mode=""></image></view>
			</view>
		</view>

		<view class="notice-item youhui" v-for="(item,index) in goodsList" :key="index" v-if="item.types=='youhui'">
			<view class="toubu">
				<view class="tb-left">优惠通知</view>
				<view class="tb-right">{{item.time?item.time:''}}</view>
				<view class="clear"></view>
			</view>
			<view class="titles">{{item.title?item.title:''}}</view>
			<view class="conta"><view class="desc">{{item.content?item.content:''}}</view></view>
		</view>

		<uni-load-more :status="loadingType" v-if="count > 0"></uni-load-more>
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
			loadingType: 'more', //加载更多状态
			goodsList: [],
			count: '',
			pn:0
		};
	},
	onShow() {
		if (uni.getStorageSync('cbe_token')) {
			this.loadData();
		} else {
			uni.showToast({ title: '未登录或无权限', icon: 'none' });
			var timer = setTimeout(() => {
				uni.navigateBack({
					delta: 1
				});
			}, 1000);
		}
	},
	//下拉刷新
	onPullDownRefresh() {
		this.loadData('refresh');
	},
	//加载更多
	onReachBottom() {
		this.loadData();
	},
	methods: {
		//加载商品 ，带下拉刷新和上滑加载
		async loadData(type = 'add', loading) {
			//没有更多直接返回
			if (type === 'add') {
				if (this.loadingType === 'nomore') {
					return;
				}
				this.loadingType = 'loading';
			} else {
				this.loadingType = 'more';
			}
			let goodsList = await this.getMyshoucang();
			if (type === 'refresh') {
				this.goodsList = [];
			}
			this.goodsList = this.goodsList.concat(goodsList);

			//判断是否还有下一页，有是more  没有是nomore(测试数据判断大于20就没有了)
			this.loadingType = this.goodsList.length > this.count ? 'nomore' : 'more';
			if (type === 'refresh') {
				if (loading == 1) {
					uni.hideLoading();
				} else {
					uni.stopPullDownRefresh();
				}
			}
		},
		async getMyshoucang() {
			return new Promise((resolve, reject) => {
				uni.showLoading({
					title: '请稍后'
				});
				uni.request({
					url: uni.getStorageSync('hostname') + '?action=index/member/myNotice',
					data: { pn: this.pn, token: uni.getStorageSync('cbe_token') },
					method: 'POST',
					dataType: 'json',
					header: { 'content-type': 'application/x-www-form-urlencoded' },
					success: res => {
						uni.hideLoading();
						if (res.data.code == 0) {
							this.pn = Number(this.pn) + Number(1);
							this.count = res.data.count;
							resolve(res.data.data);
						} else {
							this.loadingType = 'nomore';
						}
					},
					fail: err => {
						reject('err');
					}
				});
			});
		},
		//筛选点击
		tabClick(index) {
			if (this.filterIndex === index && index !== 2) {
				return;
			}
			this.filterIndex = index;
			if (index === 2) {
				this.priceOrder = this.priceOrder === 1 ? 2 : 1;
			} else {
				this.priceOrder = 0;
			}
			uni.pageScrollTo({
				duration: 300,
				scrollTop: 0
			});
			this.loadData('refresh', 1);
			uni.showLoading({
				title: '正在加载'
			});
		},
		//详情
		navToDetailPage(url) {
			uni.navigateTo({
				url:url
			});
		},
		stopPrevent() {}
	}
};
</script>

<style lang="scss">
.clear {
	clear: both;
}
page {
	background-color: #f3f3f3;
	padding-bottom: 30upx;
	.notice-item {
		width: 750upx;
		min-height: 340upx;
		background: #ffffff;
		margin-top: 20upx;
		padding-bottom: 30upx;
		.toubu {
			width: 100%;
			padding: 0 40upx;
			.tb-left {
				float: left;
				font-size: 26upx;
				min-width: 145upx;
				height: 48upx;
				line-height: 48upx;
				text-align: center;
				border-radius: 48upx;
				margin-top: 28upx;
			}
			.tb-right {
				float: right;
				color: #808080;
				font-size: 26upx;
				margin-top: 40upx;
			}
		}
		.titles {
			font-size: 28upx;
			padding: 30upx 40upx;
			color: #323232;
		}
		.cont {
			position: relative;min-height:170upx;
			.desc {
				font-size: 26upx;
				color: #333333;
				padding: 0 40upx;
				width: 520upx;
			}
			.no {
				padding: 0 40upx;
				width: 520upx;
				font-size: 24upx;
				color: #808080;
				padding-bottom: 10upx;
				padding-top: 10upx;
			}
			.imgs {
				border: 1upx solid #f0e9de;
				width: 150upx;
				height: 150upx;
				position: absolute;
				right: 40upx;
				top: 0upx;
				image {
					width: 100%;
					height: 100%;
				}
			}
		}
		.conta {
			.desc {
				font-size: 26upx;
				color: #333333;
				padding: 0 40upx;
			}
		}
	}
	.order {
		.tb-left {
			border: 1upx solid #37b0c9;
			color: #37b0c9;
		}
	}
	.tongzhi {
		.tb-left {
			color: #ff9141;
			border: 1upx solid #ff9141;
		}
	}
	.youhui {
		min-height: 290upx;
		.tb-left {
			color: #ff69b0;
			border: 1upx solid #ff69b0;
		}
	}
}
</style>

<template>
	<view class="example">
		<view class="delivery">
			<image src="../../static/kuaidi.png"  class="images"></image>
			<view class="detail">
				<view class="company">快递公司： <text>{{one.expresscom?one.expresscom:'未发货'}}</text></view>
				<view class="danhao">快递单号：{{one.expresssn?one.expresssn:'未发货'}}</view>
			</view>			
		</view>
		<view class="wuliu_title">物流动态</view>
		<view class="steps">
			<uni-steps :options="list2" :active="active" activeColor="#37b0c9" direction="column" />
		</view>
	</view>
</template>

<script>
	import uniSteps from '@/components/uni-steps/uni-steps.vue'
	export default {
		components: {
			uniSteps
		},
		data() {
			return {
				one:[],
				active: 1,
				list2: []
			}
		},
		onLoad(e) {
			if(e.ordersn){
				uni.showLoading({
					title: '请稍后'
				})
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/order/order_delivery',
					data:{ordersn:e.ordersn,token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						uni.hideLoading();
						var datas = resa.data;
						this.one = datas.data;
						this.list2 = datas.list; 
						this.active = 0;
					},
				
				})
			}
		},
		methods: {
			change() {
				if (this.active < this.list1.length - 1) {
					this.active += 1
				} else {
					this.active = 0
				}
			}
		}
	}
</script>

<style>
	.delivery{
		height: 220upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		border-top: 20upx solid #f4f4f4;
		border-bottom: 40upx solid #f4f4f4;
	}
	.images{
		width: 48upx;
		height: 46upx;
		margin-top: 36upx;
		margin-left: 40upx;
	}
	.detail{
		margin-top: 26upx;
		margin-left: 22upx;
	}
	.detail .company{
		font-size: 32upx;
		font-weight: 600;
		letter-spacing:2upx;
		color: #242424;
		
	}
	.detail .danhao{
		margin-top: 20upx;
		font-size: 26upx;
		font-weight: 500;
	}
	.wuliu_title{
		height: 118upx;
		font-size: 32upx;
		line-height: 116upx;
		text-indent: 70upx;
		border-bottom: 2upx solid #f4f4f4;
	}
	
	.steps{
		padding-top: 20upx;
		margin-top: 80upx;
		width: 90%;
		margin: 0 auto;
	}
	

</style>
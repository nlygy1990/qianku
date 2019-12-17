<template>
	<view>
		<web-view :src="url" :webview-styles="webviewStyles" @message="getMessage"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url: '',
				webviewStyles: {
                    progress:{
                        color: '#03b0eb'
                    }
                }
			}
		},
		onLoad(options) {
			this.url = uni.setStorageSync('hostname')+"?action=index/pay/index&order="+ordersn+"&types=wechat_js";
		},
		methods: {
			getMessage(event) {
				console.log(event);
				uni.showModal({
					content: JSON.stringify(event.detail),
					showCancel: false
				});
			}
		}
	}
</script>

<style>
</style>

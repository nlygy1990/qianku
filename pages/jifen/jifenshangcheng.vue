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
			var url = "https://www.tegou100.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=creditshop&uid="+uni.getStorageSync('cbe_token');
			this.url = url;
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

<template>
	<view>
		<web-view :src="'http://www.tegou100.com/app/index.php?i=1&c=entry&m=ewei_shopv2&do=mobile&r=article&aid='+url" :webview-styles="webviewStyles" @message="getMessage"></web-view>
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
			if (options && options.url){
				this.url = options.url;
			}
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

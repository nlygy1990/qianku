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
			// var appid = 'wx44d4cc34599bfa05';
			// var redirect_uri = encodeURIComponent(uni.getStorageSync('hostname'));
			// var state = this.randomNum(1000000,9999999);
			var url = uni.getStorageSync('hostname')+"?action=index/login/wxjsnotify";
			// console.log(url);return false;
			// var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appid+"&redirect_uri="+redirect_uri+"&response_type=code&scope=snsapi_userinfo&state="+state+"#wechat_redirect";
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

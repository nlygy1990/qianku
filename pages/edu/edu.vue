<template>
	<view>
		<view>
			<web-view :src="url" :webview-styles="webviewStyles" @message="getMessage"></web-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				url:'https://app.singlewindow.cn/ceb2pubweb/sw/personalAmount',
				webviewStyles:{
					progress:{
					    color: '#03b0eb'
					}
				}
			};
		},
		methods:{
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

<style lang="scss">

</style>

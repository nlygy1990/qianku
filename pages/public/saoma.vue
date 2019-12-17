<template>
	<view>
		
	</view>
</template>

<script>
	export default{
		data(){
			return {}
		},
		onLoad(e) {
			uni.redirectTo({
				url:"/pages/public/register?uid="+e.uid
			})
		}
	}
</script>

<style>
</style>

<template>
	<view>
		<view class="list">
			<navigator url="/pages/public/onepage?id=9" hover-class="none" class="ull">
				<text>如新用户注册协议</text>
				<image src="../../static/jiantou-r.png" mode=""></image>
			</navigator>
			<navigator url="/pages/public/onepage?id=8" hover-class="none" class="ull">
				<text>如新隐私政策</text>
				<image src="../../static/jiantou-r.png" mode=""></image>
			</navigator>
			<navigator url="/pages/public/onepage?id=6" hover-class="none" class="ull">
				<text>企业证照</text>
				<image src="../../static/jiantou-r.png" mode=""></image>
			</navigator>
			<navigator url="/pages/public/onepage?id=8" hover-class="none" class="ull">
				<text>常见问题</text>
				<image src="../../static/jiantou-r.png" mode=""></image>
			</navigator>
			<navigator url="/pages/public/onepage?id=8" hover-class="none" class="ull">
				<text>操作手册</text>
				<image src="../../static/jiantou-r.png" mode=""></image>
			</navigator>
			<navigator url="/pages/public/onepage?id=8" hover-class="none" class="ull">
				<text>咨询热线</text>
				<image src="../../static/jiantou-r.png" mode=""></image>
			</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	page{
		width:100%;background: $page-color-base;
	}
	.list{
		width:100%; padding:0 40upx;background: #ffffff; border-top:1upx solid #f2f2f2;
		.ull{
			height:100upx; line-height: 100upx; position: relative; border-bottom: 1upx solid #f2f2f2;
			text{
				font-size:28upx; color:#323232;
			}
			image{
				width:30upx; height:30upx; position: absolute; right:0upx; top:35upx;
			}
		}
	}
</style>

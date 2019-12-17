<template>
	<view>
		<view class="titles">
			<view class="tl">失效时间</view>
			<view class="tr">失效积分</view>
			<view class="clear"></view>
		</view>
		<view class="clear"></view>
		<view class="aa">
			<view class="list">
				<view class="vl">2019.07.02 15:14:12</view>
				<view class="vr">666</view>
				<view class="clear"></view>
			</view>
			<view class="list">
				<view class="vl">2019.07.02 15:14:12</view>
				<view class="vr">666</view>
				<view class="clear"></view>
			</view>
			<view class="list">
				<view class="vl">2019.07.02 15:14:12</view>
				<view class="vr">666</view>
				<view class="clear"></view>
			</view>
			<view class="list">
				<view class="vl">2019.07.02 15:14:12</view>
				<view class="vr">666</view>
				<view class="clear"></view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.clear{
		clear:both;
	}
	page{
		width:100%;background: $page-color-base;
	}
	.titles{
		width:100%; height:102upx;padding:0upx 40upx; line-height:102upx; background: #FFF;border:1upx solid #f2f2f2; border-left:none; border-right:none;
		.tl{
			float: left; color:#323232; font-size:28upx;
		}
		.tr{
			float: right; color:#323232; font-size:28upx;
		}
	}
	.aa{
		width:100%; padding: 0upx 40upx; background: #FFF;
		.list{
			height:100upx; line-height:100upx; border-bottom: 1upx solid #f2f2f2;
			.vl{
				float: left; color:#323232; font-size:28upx;
			}
			.vr{
				float: right; color:#008ab0; font-size:28upx;
			}
		}
	}
</style>

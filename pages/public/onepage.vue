<template>
	<view class="container">
		<view class="contt">
			<rich-text :nodes="nodes"></rich-text>
		</view>
	</view>
</template>
<script>
	import {  
	    mapMutations  
	} from 'vuex';
	
	export default{
		data(){
			return {
				nodes:''
			}
		},
		onLoad(e) {
			this.getpage(e.id);
		},
		methods: {
			...mapMutations(['zhecexieyi']),
			jujue(){
				uni.navigateBack({
					delta:1
				})
			},
			tongyi(){
				uni.redirectTo({
					url:"register"
				})
			},
			getpage(id){
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/page/onepage',
					data:{id:id},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						var one = resa.data;
						this.nodes = one.one.content;
						uni.setNavigationBarTitle({
							title: one.one.title
						});
					}
				});
			}
		}
	}
</script>
<style lang='scss'>
	page{
		background: #fff;
	}
	.container{
		position:relative;
		background: #FFFFFF;
		.contt{
			width:690upx;margin:20upx 30upx;padding-bottom:120upx;
		}
		.bbb{
			position:fixed;bottom:30upx; z-index: 999;width:100vw; background: #FFFFFF; padding-top: 30upx;
			view{
				float: left;width:320upx;height:80upx;text-align: center;line-height: 80upx;font-size:30upx;
			}
			.jujue{
				margin-left:40upx;border:1upx solid #008ab0;color:#008ab0;border-radius:50upx;background: #FFFFFF;
			}
			.tongyi{
				margin-left:30upx;border:1upx solid #008ab0;color:#FFFFFF;border-radius:50upx;background: #008ab0;
			}
		}
	}
</style>
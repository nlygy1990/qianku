
1。本插件使用uni.createCanvasContext 生成的二维码组件
2。验证码值使用uni.setStorage({key:'imgcode',data:str,});  通过官方的uni.getStorageSync('imgcode'); 可以获取验证码字符
3. 本插件通用插件。


压缩包里面有示例
<template>
		<view class="cus_yan" @click="refresh">
			<imgcode ref="imgcode"></imgcode>
			<text>看不清？点击图片刷新</text>
		</view>
		{{show()}}
</template>



<script>
	import imgcode from '@/pages/zhstars2013-imgcode/zhstars2013-imgcode.vue';
	Vue.component("imgcode",imgcode);
	export default{
		data(){
			return{ 
				
			}
		},
		components:{imgcode},
		methods:{
			refresh:function(){
				this.$refs.imgcode.refresh();
			},
			show:function(){
				var _self=this;
				setTimeout(function(){
					_self.refresh();
				},500);
			}
		}
	}
	
</script>
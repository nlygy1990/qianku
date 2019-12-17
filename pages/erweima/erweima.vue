<template>
	<view class="bg">
		<view class="shuoming">此二维码为您的身份凭证，可作为分享他人注册和身份验证使用</view>
		<view class="erweimabg">
			<view class="nickname">{{memberInfo.nickname?memberInfo.nickname:memberInfo.mobile}}</view>
			<view class="smsm">请扫描我的二维码进行注册</view>
			<image :src="memberInfo.qrcode" mode="" class="ewm"></image>
		</view>
		<view class="save" @click="save">保存到手机</view>
	</view>
</template>

<script>
	import _app from '@/components/QS-SharePoster/app.js';
	import getSharePoster from '@/components/QS-SharePoster/QS-SharePoster.js';
	import hchPoster from '../../components/hch-poster/hch-poster.vue'
	import {  
	    mapMutations  
	} from 'vuex';
	export default {
		components:{
			hchPoster,
		},
		data() {
			return {
				token:'',
				memberInfo:[],
				poster: {},
				qrShow: false,
				canvasId: 'default_PosterCanvasId'
			};
		},
		onLoad() {
			if(uni.getStorageSync('cbe_token')){
				this.token = uni.getStorageSync('cbe_token');
				this.getMemberInfo();
			}else{
				uni.showToast({ title:"未登录或无权限",icon: "none"});
				var timer = setTimeout(()=>{
					uni.navigateBack({
						delta:1
					})
				},1000);
			}
		},
		methods: {
			save(){
				
			},
			getMemberInfo(){
				uni.showLoading({
					title: '加载中',
					mask: true
				});
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/info',
					data: {token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						uni.hideLoading();
						var one = resa.data;
						if(one.code==0){
							this.memberInfo = one.one;
						}
					}
				})
			}
		}
	}
</script>

<style lang='scss'>
	page{
		width:100%;height:100%;
	}
	.bg{
		width:100%;height:100%;background: url('http://wxapp.tegou100.com/static/images/erweimabg.png') no-repeat center center;background-size: cover;
		.shuoming{
			width:580upx;margin: 0 85upx;text-align: center;color:#FFFFFF; font-size:30upx; padding-top:60upx; line-height:50upx;
		}
		.erweimabg{
			width:560upx;height: 660upx;background: #FFFFFF; border-radius:30upx; margin:60upx 95upx; text-align: center;
			.nickname{
				width:560upx;color:#333333; font-size: 28upx;text-align: center;padding-top:70upx;
			}
			.smsm{
				width:560upx;color:#333333; font-size: 28upx;text-align: center;padding-top:23upx;
			}
			.ewm{
				width:350upx; height:350upx;margin-top:63upx;
			}
		}
		.save{
			width:670upx;height: 80upx;border:1upx solid #FFFFFF;margin:0 40upx;border-radius:10upx; line-height: 80upx; text-align: center; color:#FFFFFF; font-size: 28upx;
		}
	}
</style>

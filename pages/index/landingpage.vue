<template>
	<view>
		<uni-popup :show="type === 'middle-list'" position="middle" mode="fixed" @hidePopup="togglePopup('')">
			<scroll-view :scroll-y="true" class="uni-center center-box">
				 <rich-text :nodes="kjshuoming"></rich-text>
				 <view class="zdl">
				 	<button type="primary" open-type="getUserInfo" hover-class="none" @getuserinfo="getuserinfo">点击授权</button>
				 </view>
			</scroll-view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				type:'middle-list',
				kjshuoming:'<div style="font-size:16px;text-align:center;font-weight:600;line-height:30px;padding-top:10px">为了更好的服务您，请点击授权</div><div  style="font-size:12px;text-align:center;line-height:20px">授权仅包含昵称和头像信息</div>'
			};
		},
		methods:{
			getuserinfo(e){
				var that = this;
				if(e.detail.errMsg=="getUserInfo:ok"){
					uni.showLoading({
						title: '正在授权',
						mask: true
					});
					uni.login({
						provider: 'weixin',
						success: function (loginRes) {
							if(loginRes.errMsg=="login:ok"){
								var code = loginRes.code;
								uni.getUserInfo({
									provider: 'weixin',
									lang:'zh_CN',
									success: function (infoRes) {
										uni.request({
											url:uni.getStorageSync('hostname') + '?action=index/login/wechatlogin&code='+code,
											data: infoRes,
											method:'POST',
											dataType:'json',
											header: {'content-type' : 'application/x-www-form-urlencoded'},
											success: (resa) => {
												uni.hideLoading();
												var one = resa.data;
												if(one.code==0){
													uni.setStorageSync('cbe_token',one.token);
													uni.showToast({
														title:one.msg,icon:'success',mask:true,duration: 3000
													});
													that.login(one.data);
													var timer = setTimeout(()=>{
														uni.navigateBack({
															delta:1
														})
													},3000);
												}else if(one.code==1){
													uni.setStorageSync('cbe_retoken',one.token);
													uni.showToast({
														title:one.msg,icon:'success',mask:true,duration: 3000
													});
													var timer = setTimeout(()=>{
														uni.navigateTo({
															url:"dsflogin"
														})
													},2000);
												}else{
													uni.showToast({ title:one.msg, icon: "none" });
													this.logining = false;
												}
											}
										})
									}
								});
							}
						}
					});
				}
			},
		}
	}
</script>

<style lang="scss">
	.uni-center{
		width:568upx; height:250upx;
		.zdl{
			text-align: center; color:#008ab0; font-size:28upx;padding-top:40upx;
			button{
				background: #008ab0;font-size: 28upx;width:50%;height:80upx;
			}
		}
	}
</style>

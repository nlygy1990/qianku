<template>
	<view class="content">
		<view class="nocard" v-if="!memberInfo.bankcard || memberInfo.bankcard=='null'">
			<view class="tishi">
				您还未绑定银行卡，将影响商品分享推广和奖励发放，请尽快绑定您的常用银行卡！
			</view>
			<view class="add" @tap="navTo('/pages/bank/bindbank')">+ 绑定银行卡</view>
		</view>
		<view class="havecard" v-else>
			<view class="bankname">{{memberInfo.bank}}</view>
			<view class="bankcard">{{memberInfo.bankcard}}</view>
			<view class="bankrealname">开卡人：{{memberInfo.bankrealname}}</view>
			<view class="bankidcard">开卡人身份证号码：{{memberInfo.bankidcard}}</view>
			<view class="edit" @tap="navTo('/pages/bank/bindbank')">修改</view>
		</view>
	</view>
</template>

<script>
	import {  
	    mapMutations  
	} from 'vuex';
	export default {
		data() {
			return {
				token:'',
				memberInfo:[]
			};
		},
		onShow() {
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
			navTo(url){
				uni.navigateTo({
					url:url
				})
			},
			getMemberInfo(){
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/info',
					data: {token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						var one = resa.data;
						if(one.code==0){
							if(one.one.bankidcard){
								one.one['bankidcard'] = one.one.bankidcard.replace(/^(.{6})(?:\d+)(.{4})$/,"$1********$2");
							}
							if(one.one.bankcard){
								one.one['bankcard'] = one.one.bankcard.replace(/^(.{6})(?:\d+)(.{4})$/,"$1********$2");
							}
							this.memberInfo = one.one;
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		width:100%;height:100%;background:#f4f4f4;
	}
	.content{
		.nocard{
			.tishi{
				color:#37b0c9; font-size:24upx;line-height:40upx;padding:30upx 40upx;
			}
			.add{
				width:670upx;height:245upx;background: #FFFFFF; margin: 0 40upx; text-align: center; line-height:245upx; font-size: 28upx; color:#008ab0;
			}
		}
		.havecard{
			width:670upx; height:245upx; background: #FFFFFF;margin: 0 40upx;border-radius:20upx;margin-top:35upx; position: relative;box-shadow:5upx 5upx 5px #cccccc;
			.bankname{
				color:#343434; font-size:32upx; padding:40upx 40upx 0 40upx;
			}
			.bankcard{
				color:#808080; font-size: 26upx; padding:0upx 40upx 0 40upx;
			}
			.bankrealname{
				color:#343434; font-size: 26upx;padding:30upx 40upx 0 40upx;
			}
			.bankidcard{
				color:#343434; font-size: 26upx;padding:0upx 40upx 0 40upx;
			}
			.edit{
				position: absolute; top:40upx; right:40upx; color:#008ab0; font-size:28upx;
			}
		}
	}
</style>

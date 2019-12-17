<template>
	<view class="cncenter">
		<view class="lingshou" v-if="memberInfo.ishangCNuser==0">
			<view class="list-cell m-t" hover-class="cell-hover">
				<text class="cell-tit">我的身份</text>
				<text class="cell-mid">零售顾客</text>
			</view>
			<view class="shenqing">
				<view class="sqsm">申请成为推广商</view>
				<view class="sqsms">
					如果您已获得如新CN卡号，可点击绑定您的账号，成为如新海外购平台的推广商，获得专属产品分享链接及分享红利。
				</view>
			</view>
			<view class="shenqing-btn" @tap="navTo('/pages/public/bindCn?callback=shenfen')">推广商申请</view>
		</view>
		<view class="tuiguang" v-else>
			<view class="list-cell m-t" hover-class="cell-hover">
				<text class="cell-tit">我的身份</text>
				<text class="cell-mid">推广商</text>
			</view>
			<view class="cninfo">
				<view class="list-cell m-t" hover-class="cell-hover">
					<text class="cell-tit">CN号</text>
					<text class="cell-mid">{{memberInfo.CNuser}}</text>
				</view>
				<view class="list-cell m-t" hover-class="cell-hover">
					<text class="cell-tit">姓名</text>
					<text class="cell-mid">{{memberInfo.CNrealName}}</text>
				</view>
				<view class="list-cell m-t" hover-class="cell-hover">
					<text class="cell-tit">身份证</text>
					<text class="cell-mid">{{memberInfo.CNcardNo}}</text>
				</view>
			</view>
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
							one.one['phone'] = one.one.mobile.substr(0, 3) + '****' + one.one.mobile.substr(7);
							if(one.one.CNcardNo){
								one.one['CNcardNo'] = one.one.CNcardNo.replace(/^(.{4})(?:\d+)(.{4})$/,"$1******$2");
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
		width:100%; height:100%;background: #f4f4f4;
	}
	.cncenter{
		width:100%; height:100%;
		.list-cell{
			display:flex;
			align-items:baseline;
			padding: 20upx $page-row-spacing;
			line-height:60upx;
			position:relative;
			background: #fff;
			justify-content: center;
			.cell-mid{
				font-size: 28upx; color:#808080;
			}
			&.m-t{
				margin-top: 1upx; 
			}
			.cell-tit{
				flex: 1;
				font-size: 28upx;
				color: #323232;
				margin-right:10upx;
			}
		}
		.lingshou{
			.shenqing{
				width:100%;margin-top:20upx;background: #ffffff; padding-bottom: 35upx;
				.sqsm{
					flex: 1;
					font-size: 28upx;
					color: #323232;
					padding:0 30upx;padding-top:35upx;
				}
				.sqsms{
					flex: 1;
					font-size: 26upx;
					color: #323232;
					padding:0 30upx;
					padding-top: 20upx;
					line-height: 45upx;
				}
			}
			.shenqing-btn{
				width:670upx; height:80upx; position: fixed; left:40upx; bottom:60upx; text-align: center;line-height:80upx; background: #008ab0; color:#FFFFFF; font-size:28upx;border-radius:10upx;
			}
		}
		.tuiguang{
			.cninfo{
				background: #FFFFFF;margin-top: 20upx;padding:35upx 0;
			}
		}
	}
</style>

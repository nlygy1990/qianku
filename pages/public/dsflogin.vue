<template>
	<view class="container">
		<view class="input-content">
			<view class="input-item">
				<input 
					type="text" 
					:value="username" 
					placeholder="请输入手机号/账号"
					placeholder-style="color:#cbcbcb"
					maxlength="11"
					data-key="username"
					@input="inputChange"
				/>
			</view>
			<view class="input-item">
				<input 
					type="text" 
					:value="password" 
					placeholder="请输入密码"
					placeholder-style="color:#cbcbcb"
					placeholder-class="input-empty"
					maxlength="32"
					:password="showPassword"
					data-key="password"
					@input="inputChange"
					@confirm="toLogin"
				/>
				<view class="uni-icon" @tap="changePassword">
					<image :src="showPassword ? '../../static/yanjing.png' : '../../static/yanjingact.png'" mode=""></image>
				</view>
			</view>
			<view class="forget-section">
				<text @tap="toPhone">手机验证码登录</text>
				<text @tap="toRegister">注册</text>
			</view>
			<view style="clear: both;height:100upx;"></view>
			<button class="confirm-btn" @tap="toLogin" :disabled="logining">登录</button>
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
				username:'',
				password:'',
				showPassword: true,
				logining: false,
			}
		},
		onLoad(){
			console.log(uni.getStorageSync('cbe_retoken'));
		},
		methods: {
			...mapMutations(['register','login']),
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			changePassword() {
				this.showPassword = !this.showPassword;
			},
			toPhone(){
				uni.redirectTo({
					url:"phonelogin"
				})
			},
			toRegister(){
				uni.redirectTo({
					url:"zhecexieyi"
				})
			},
			toLogin(){
				this.logining = true;
				if(!this.username){
					uni.showToast({ title: '手机号码/账号不能为空', icon: 'none' });
					this.logining = false;return false;
				}
				if(!this.password){
					uni.showToast({ title: '密码不能为空', icon: 'none' });
					this.logining = false;return false;
				}
				uni.showLoading({
					title: '正在登录',
					mask: true
				});
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/login/pwdlogin',
					data: {username:this.username,password:this.password,usertoken:uni.getStorageSync('cbe_retoken')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						uni.hideLoading();
						var one = resa.data;
						if(one.code==0){
							uni.setStorageSync('cbe_token',one.token);
							this.phonetoken = '';
							uni.showToast({
								title:one.msg,icon:'success',mask:true,duration: 3000
							});
							this.login(one.data);
							var timer = setTimeout(()=>{
								uni.navigateBack({
									delta:1
								})
							},3000);
						}else{
							uni.showToast({ title:one.msg, icon: "none" });
							this.logining = false;
						}
					}
				})
			}
		}
	}
</script>

<style lang='scss'>
	page{
		background: #fff;
	}
	.tishi{
		width:690upx;font-size:24upx;color:#343434;line-height: 100upx;
	}
	.container{
		position:relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		background: #FFFFFF;
	}
	.wrapper{
		position:relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 40upx;
	}
	.input-content{
		padding:40upx 30upx;
	}
	.input-item{
		position: relative;
		display:flex;
		flex-direction: column;
		align-items:flex-start;
		justify-content: center;
		height: 100upx;
		border-radius: 4px;
		margin-bottom: 10upx;
		border-bottom:1upx solid #eaeaea;
		&:last-child{
			margin-bottom: 0;
		}
		.tit{
			height: 50upx;
			line-height: 56upx;
			font-size: $font-sm+2upx;
			color: $font-color-base;
		}
		input{
			height:50upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			width: 100%;
		}
		text{
			position:absolute;right:0upx;font-size:30upx;color:#008ab0;border:1upx solid #008ab0;padding:10upx 30upx;border-radius:50upx;z-index:999;
		}
		.uu{
			position: absolute;right:0;font-size:26upx;color:#08b000;
		}
		.uuu{
			position: absolute;right:0;font-size:26upx;color:#b0002f;
		}
		.canvas-img-code{
			position:absolute;right:120upx;z-index: 999;
			canvas{
				border:1upx solid #eaeaea;background:#eaeaea;
			}
		}
		.uni-icon{
			position: absolute;right:20upx;font-size:40upx;z-index:999;color:#008ab0;
			image{
				width:40upx;height:40upx;
			}
		}
		.kabuqing{
			position:absolute;right:0;z-index: 999;color:#008ab0;font-size:30upx;
		}
	}
	
	.confirm-btn{
		width: 690upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 30upx;
		background: #008ab0;
		color: #fff;
		font-size: $font-lg;
		&:after{
			border-radius: 100px;
		}
	}
	.forget-section{
		font-size: 30upx;
		color: #008ab0;
		text-align: center;
		margin-top: 40upx;
		:first-child{
			float:left;padding-left: 30upx;
		}
		:last-child{
			float: right;padding-right: 30upx;
		}
	}
</style>
</style>
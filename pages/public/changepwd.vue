<template>
	<view class="container">
		<view class="input-content">
			<view class="input-item">
				<input 
					type="text" 
					:value="password" 
					placeholder="请设置密码,6~20位数"
					placeholder-style="color:#cbcbcb"
					placeholder-class="input-empty"
					maxlength="20"
					:password="showPassword"
					data-key="password"
					@input="inputChange"
				/>
				<view class="uni-icon" @tap="changePassword">
					<image :src="showPassword ? '../../static/yanjing.png' : '../../static/yanjingact.png'" mode=""></image>
				</view>
			</view>
			<view class="input-item">
				<input 
					type="text" 
					:value="repassword" 
					placeholder="请再次确认密码"
					placeholder-style="color:#cbcbcb"
					placeholder-class="input-empty"
					maxlength="20"
					:password="showPassworda"
					data-key="repassword"
					@input="inputChange"
					@confirm="toChange"
				/>
				<view class="uni-icon" @tap="changePassworda">
					<image :src="showPassworda ? '../../static/yanjing.png' : '../../static/yanjingact.png'" mode=""></image>
				</view>
			</view>
			<view class="tishi">
				密码长度须为6-20非纯数字，可包含字母、数字或下划线
			</view>
			<button class="quxiao" @tap="quxiao">取消</button>
			<button class="confirm-btn" @tap="toChange" :disabled="logining">立即重置</button>
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
				logining: false,
				password: '',
				repassword: '',
				showPassword: true,
				showPassworda: true
			}
		},
		onShow() {
			console.log(uni.getStorageSync("cbe_forgetToken"));
		},
		methods:{
			...mapMutations(['register']),
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			changePassword() {
				this.showPassword = !this.showPassword;
			},
			changePassworda() {
				this.showPassworda = !this.showPassworda;
			},
			quxiao(){
				uni.redirectTo({
					url:"login"
				})
			},
			CheckPassWord(password) {
				var str = password;
				if (str == null || str.length < 6 || str.length > 20) {
					return false;
				}
				var reg1 = new RegExp(/^[0-9A-Za-z_]+$/);
				if (!reg1.test(str)) {
					return false;
				}
				var reg = new RegExp(/[A-Za-z_].*[0-9]|[0-9].*[A-Za-z_]/);
				if (reg.test(str)) {
					return true;
				} else {
					return false;
				}
			},
			toChange(){
				if(!this.password){
					uni.showToast({ title: '密码不能为空', icon: 'none' });
					this.logining = false;return false;
				}else{
					if(!this.CheckPassWord(this.password)){
						uni.showToast({ title: '密码格式不正确', icon: 'none' });
						this.logining = false;return false;
					}
				}
				if(!this.repassword){
					uni.showToast({ title: '请再次确认密码', icon: 'none' });
					this.logining = false;return false;
				}
				if(this.password!=this.repassword){
					uni.showToast({ title: '两次密码不一致', icon: 'none' });
					this.logining = false;return false;
				}
				uni.showLoading({
					title: '正在重置',
					mask: true
				});
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/login/forgetchangepwd',
					data: {password:this.password,repassword:this.repassword,token:uni.getStorageSync("cbe_forgetToken")},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						uni.hideLoading();
						var one = resa.data;
						if(one.code==0){
							uni.showToast({
								title:one.msg,icon:'success',mask:true,duration: 3000
							});
							uni.removeStorageSync("cbe_forgetToken");
							var timer = setTimeout(()=>{
								uni.redirectTo({
									url:"login"
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
	
	.quxiao{
		position: absolute;
		left:30upx;
		width: 320upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 70upx;
		background: #fff;
		color: #008ab0;
		font-size: $font-lg;
		border:1upx solid #008ab0;
		&:after{
			border-radius: 100px;
		}
	}
	
	.confirm-btn{
		position: absolute;
		right:30upx;
		width: 320upx;
		height: 76upx;
		line-height: 76upx;
		border-radius: 50px;
		margin-top: 70upx;
		background: #008ab0;
		color: #fff;
		font-size: $font-lg;
		&:after{
			border-radius: 100px;
		}
	}
</style>

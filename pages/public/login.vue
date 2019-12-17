<template>
	<view class="container">
		<image src="../../static/zuojiantou.png" mode="" class="back-btn" @tap="navBack"></image>
		<!-- <view class="back-btn yticon icon-zuojiantou-up" @tap="navBack"></view> -->
		<view class="topbg">
			<view class="toptitle">登录</view>
			<view class="logo">
				<image src="../../static/logo.png" mode=""></image>
			</view>
			<view class="topbottom">
				<view class="tleft" @tap="changeLogin(1)" :class="index==1?'active':''">手机验证码登录</view>
				<view class="tleft" @tap="changeLogin(0)" :class="index==0?'active':''">账号登录</view>
			</view>
		</view>
		<!-- 设置白色背景防止软键盘把下部绝对定位元素顶上来盖住输入框等 -->
		<view class="wrapper">
			<view class="input-content" v-if="index==0">
				<view class="input-item">
					<input 
						type="text" 
						:value="username" 
						placeholder="请输入手机号码/账号"
						placeholder-style="color:#cbcbcb"
						maxlength="32"
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
			</view>
			<view class="input-content" v-if="index==1">
				<view class="input-item">
					<input 
						type="text" 
						:value="mobile" 
						placeholder="请输入手机号码"
						placeholder-style="color:#cbcbcb"
						maxlength="11"
						data-key="mobile"
						@input="inputChange"
					/>
				</view>
				<view class="input-item">
					<input 
						type="text" 
						:value="imgcode" 
						placeholder="请输入图形验证码"
						placeholder-style="color:#cbcbcb"
						placeholder-class="input-empty"
						maxlength="4"
						data-key="imgcode"
						@input="inputChange" 
					/>
					<view class="canvas-img-code" @tap="refresh">
						<canvas :style="{width:width+'px',height:height+'px'}" canvas-id="imgcanvas"  @error="canvasIdErrorCallback"></canvas>
					</view>
					<view class="kabuqing" @tap="refresh">换一张</view>
				</view>
				<view class="input-item">
					<input 
						type="number" 
						:value="phonecode" 
						placeholder="请输入手机验证码"
						placeholder-style="color:#cbcbcb"
						placeholder-class="input-empty"
						maxlength="6"
						data-key="phonecode"
						@input="inputChange"
						@confirm="toLogin"
					/>
					<text @tap="getPhoneCode">{{getcode}}</text>
				</view>
			</view>
			<button class="confirm-btn" @tap="toLogin" :disabled="logining">登录</button>
			<view class="forget-section">
				<text @tap="toRegist">立即注册</text>
				<text @tap="toForget">忘记密码?</text>
			</view>
		</view>
		<view class="qita">
			<view class="tti">
				其他方式登录
			</view>
			<!-- #ifdef APP-PLUS || H5-->
			<view class="login-fs">
				<image src="../../static/wechat.png" mode="" @tap="wechatLogin"></image>
				<image src="../../static/qq.png" mode="" @tap="qqLogin"></image>
			</view>
			<!-- #endif -->
			<!-- #ifdef MP-WEIXIN -->
			<view class="login-fs">
				<button type="primary" open-type="getUserInfo" hover-class="none" @getuserinfo="getuserinfo"><image src="../../static/wechat.png" mode=""></image></button>
				<button type="primary" open-type="getUserInfo" hover-class="none"><image src="../../static/qq.png" mode="" @tap="qqLogin"></image></button>
			</view>
			<!-- #endif -->
		</view>
		<view class="clear" style="height:20upx;clear:both;"></view>
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
				password: '',
				showPassword: true,
				mobile: '',
				imgcode:'',
				imgyzcode:'',
				phonecode:'',
				phonetoken:'',
				scode:false,
				getcode:'获取验证码',
				logining: false,
				index:1,
				width:70,height:30
			}
		},
		onLoad(e){
			var _self = this;
			setTimeout(function(){
				_self.init();
			},100)
			uni.removeStorageSync('cbe_retoken');
			uni.removeStorageSync('cbe_token');
			if(e.code){
				this.getWxuserinfo(e.code);
			}
		},
		onShow() {
			if(uni.getStorageSync('cbe_token')){
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
			uni.removeStorageSync('cbe_retoken');
			this.init();
		},
		methods: {
			...mapMutations(['login']),
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			changePassword() {
				this.showPassword = !this.showPassword;
			},
			changeLogin(e){
				this.index = e;
				this.init();
			},
			navBack(){
				uni.navigateBack({
					delta:1
				});
			},
			toRegist(){
				uni.navigateTo({
					url:'zhecexieyi',
				})
			},
			toForget(){
				uni.navigateTo({
					url:'forget',
				})
			},
			wechatLogin(){
				// #ifdef APP-PLUS
				uni.login({
					provider: 'weixin',
					success: function (loginRes) {
						console.log(loginRes.authResult);
					}
				});
				// #endif
				// #ifdef H5
				var appid = 'wx44d4cc34599bfa05';
				var redirect_uri = encodeURIComponent(uni.getStorageSync('hostname'));
				var state = this.randomNum(1000000,9999999);
				var url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid="+appid+"&redirect_uri="+redirect_uri+"&response_type=code&scope=snsapi_userinfo&state="+state+"#wechat_redirect";
				window.location.href = url;
				// uni.navigateTo({
				// 	url:"/pages/index/webview"
				// })
				// #endif
			},
			randomNum(minNum,maxNum){ 
				switch(arguments.length){ 
					case 1: 
						return parseInt(Math.random()*minNum+1,10); 
					break; 
					case 2: 
						return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
					break; 
					default: 
						return 0; 
					break; 
				} 
			},
			getWxuserinfo(code){
				uni.showLoading({
					title: '正在处理',
					mask: true
				});
				var that = this;
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/login/wxjsapiLogin',
					data: {code:code},
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
								// window.location.href = uni.getStorageSync('hostname')+"h5/#/pages/user/user";
								uni.switchTab({
									url:"/pages/user/user"
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
			},
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
															url:"/pages/public/zhecexieyi"
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
			async toLogin(){
				this.logining = true;
				if(this.index==0){
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
						data: {username:this.username,password:this.password},
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
				}else{
					var reg = /^1[0-9]{10,10}$/;
					if(!this.mobile){
						uni.showToast({ title: '手机号码不能为空', icon: 'none' });
						this.logining = false;return false;
					}else{
						if(!reg.test(this.mobile)){
							uni.showToast({ title: '手机号码格式错误', icon: "none" });
							this.logining = false;return false;
						}
					}
					if(!this.imgcode){
						uni.showToast({ title: '图形验证码不能为空', icon: 'none' });
						this.logining = false;return false;
					}else{
						if(this.imgcode!=this.imgyzcode){
							uni.showToast({ title: '图形验证码错误', icon: 'none' });
							this.logining = false;return false;
						}
					}
					if(!this.phonecode){
						uni.showToast({ title: '手机验证码不能为空', icon: 'none' });
						this.logining = false;return false;
					}
					uni.showLoading({
						title: '正在登录',
						mask: true
					});
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/login/phonelogin',
						data: {phone:this.mobile,imgcode:this.imgcode,code:this.phonecode,token:this.phonetoken},
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
			},
			getPhoneCode:function(e){
				if(this.scode==false){
					var reg = /^1[0-9]{10,10}$/;
					if(!reg.test(this.mobile)){
						uni.showToast({ title: '手机号码格式错误', icon: "none" });
					}else{
						if(!this.imgcode){
							uni.showToast({ title: '图形验证码不能为空', icon: 'none' });
							return false;
						}else{
							if(this.imgcode!=this.imgyzcode){
								uni.showToast({ title: '图形验证码错误', icon: 'none' });
								this.logining = false;return false;
							}
						}
						var ntime = 120;
						this.scode = true;
						this.timer = setInterval(() => {
							ntime = ntime-1;
							if(ntime=='0'){
								this.getcode = '获取验证码';
								ntime = 120;
								this.scode = false;
								clearInterval(this.timer);
							}else{
								this.getcode = '重新获取('+ntime+'s)';
							}
						},1000);
						uni.showLoading({
							title: '正在获取',
							mask: true
						});
						uni.request({
							url: uni.getStorageSync('hostname') + '?action=index/common/getphonecode', //获取手机验证码信息,
							data: {phone:this.mobile,use:'login'},
							method:'POST',
							dataType:'json',
							header: {'content-type' : 'application/x-www-form-urlencoded'},
							success: (resa) => {
								uni.hideLoading();
								var one = resa.data;
								if(one.code == 0){
									console.log(one.msg);
									uni.showToast({
										title:one.msg,icon:'success',mask:true,duration: 3000
									});
									this.phonetoken = one.token;
									this.index = 1;
								}else{
									uni.showToast({ title:one.msg,icon: "none"});
									this.getcode = '获取验证码';
									ntime = 120;
									this.scode = false;
									clearInterval(this.timer);
								}
								
							},
							fail:(resa)=> {
								uni.showToast({ title: '网络连接超时，请检查您的网络', icon: "none" });
								var timer = setTimeout(()=>{
									this.getcode = '获取验证码';
									ntime = 120;
									this.scode = false;
									clearInterval(this.timer);
								},1000);
							}
						})
					}
				}
			},
			async init(){
				var context = uni.createCanvasContext('imgcanvas',this),w=this.width,h=this.height;
				context.setFillStyle("white");
				context.setLineWidth(5);			
				context.fillRect(0, 0, w, h);
				var pool= ["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","W","S","Y","Z","1","2","3","4","5","6","7","8","9","0"],str='';
				for(var i=0;i<4;i++){
					var c = pool[this.rn(0,pool.length)];//随机的字
					var deg = this.rn(-30,30);//字体的旋转角度
					context.setFontSize(18);
					context.setTextBaseline("top");
					let rc = await this.rc(80,150);
					context.setFillStyle(rc);
					context.save();
					context.translate(15*i+15,parseInt(h/1.5));
					context.rotate(deg*Math.PI/180);
					context.fillText(c,-15+5,-15);
					context.restore();
					str+=c;
				}
				uni.setStorage({
					key:'imgcode',
					data:str,
				});
				this.imgyzcode = str;
				for(var i=0;i<40;i++){
					context.beginPath();
					context.arc(this.rn(0,w),this.rn(0,h),1,0,2*Math.PI);
					context.closePath();
					context.setFillStyle(this.rc(150,200));
					context.fill();
				}
				context.draw();			
			},
			async rc(min,max){
				return new Promise((resolve, reject) => {
					var r= this.rn(min,max);
					var g= this.rn(min,max);
					var b= this.rn(min,max);
					resolve("rgb("+r+","+g+","+b+")");
				})
			},
			rn(max,min){
				return parseInt(Math.random()*(max-min))+min;
			},
			refresh:function(){
				this.init();
			},
			canvasIdErrorCallback: function (e) {
			    console.error(e.detail.errMsg)
			}
		},

	}
</script>

<style lang='scss'>
	@import url("../../common/uni-icon.css");
	page{
		background: #fff;height: 100vh;
	}
	.container{
		position:relative;
		width: 100vw;
		height: 100vh;
		/* overflow: hidden; */
		background: #FFFFFF;
		.topbg{
			/* #ifdef APP-PLUS || MP */
			height:490upx;
			/* #endif */
			/* #ifdef H5 */
			height:370upx;
			/* #endif */
			width: 100%;
			background-color:#0490b7; 
			background: url('https://wxapp.tegou100.com/static/images/login_bg.png') center center;
			position: relative;
			.toptitle{
				width:100%;
				padding-top:var(--status-bar-height);
				text-align: center;
				color:#FFFFFF;
				font-size:40upx;
				position:absolute;
				z-index: 9;
				top:34upx;
				left:0upx;
			}
			.logo{
				/* #ifdef APP-PLUS || MP */
				bottom:170upx;
				/* #endif */
				/* #ifdef H5 */
				bottom:140upx;
				/* #endif */
				position:absolute; width:100vw; text-align: center;
				image{
					width:110px;height:35px;
				}
			}
			.topbottom{
				position:absolute;left:0; bottom:-1upx;width:100vw;height:150upx;
				.tleft{
					width:50%;float:left;text-align: center;color:#d7f8ff;font-size:30upx;line-height:150upx;
				}
				.active{
					color:#fFFFFF;font-size:32upx;font-weight:600;background: url("../../static/login_ajt.png") no-repeat center bottom;background-size:10%;
				}
			}
		}
	}
	.wrapper{
		position:relative;
		z-index: 90;
		background: #fff;
		padding-bottom: 40upx;
	}
	.back-btn{
		position:absolute;
		left: 30upx;
		z-index: 9999;
		top: calc(var(--status-bar-height) + 40upx);
		font-size: 40upx;
		color: #FFFFFF;
		width:32upx;
		height: 32upx;
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
			height: 50upx;
			font-size: $font-base + 2upx;
			color: $font-color-dark;
			width: 100%;
		}
		text{
			position:absolute;right:0upx;font-size:30upx;color:#008ab0;border:1upx solid #008ab0;padding:8upx 30upx;border-radius:50upx;z-index:999;
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
	.qita{
		width:690upx;margin:0 30upx;border-top:1upx solid #E6E6E6;margin-top:110upx;
	}
	.qita .tti{
		width:250upx;margin-left:220upx;font-size:32upx;background: #FFFFFF;margin-top: -25upx;text-align: center;
	}
	.login-fs{
		width:690upx;text-align: center;margin-top:50upx;
	}
	.login-fs button{
		background: none;border:1upx solid #FFFFFF;float: left;width:50%;position:relative;color:#FFFFFF;
	}
	.login-fs button:after{
		border:none;
	}
	.login-fs image{
		width:70upx;height: 70upx;margin:0 30upx;
	}
</style>

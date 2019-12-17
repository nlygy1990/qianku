<template>
	<view class="container">
		<view class="input-content">
			<view class="input-item">
				<input 
					type="text" 
					:value="mobile" 
					placeholder="请输入手机号码"
					placeholder-style="color:#cbcbcb"
					maxlength="11"
					data-key="mobile"
					@input="inputChangm"
				/>
				<view class="uu" v-if="keyong==1">√ 可用</view>
				<view class="uuu" v-if="keyong==2">× 该手机号已注册</view>
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
				/>
				<text  @tap="getPhoneCode" class="code">{{getcode}}</text>
			</view>
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
					@confirm="toRegiser"
				/>
				<view class="uni-icon" @tap="changePassworda">
					<image :src="showPassworda ? '../../static/yanjing.png' : '../../static/yanjingact.png'" mode=""></image>
				</view>
			</view>
			<view class="tishi">
				密码长度须为6-20非纯数字，可包含字母、数字或下划线
			</view>
			<view class="clear"></view>
			<view class="input-item" style="border-bottom:none;">
				<view class="kk" @tap="checkboxChange">
					<label>
						<checkbox value="xieyi" color="#008ab0" :checked="xieyi" />
					</label>
				</view>
				<view class="uuua">已阅读并同意<text @tap="toXieyi">《如新海外购用户协议》</text></view>
			</view>
		</view>
		<button class="confirm-btn" @tap="toRegiser" :disabled="logining">注册</button>
		<view class="forget-section">
			<text @tap="toLogin">已有账号？立即登录</text>
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
				keyong:0,
				password: '',
				repassword: '',
				showPassword: true,
				mobile: '',
				imgcode:'',
				imgyzcode:'',
				phonecode:'',
				phonetoken:'',
				showPassworda: true,
				scode:false,
				getcode:'获取验证码',
				logining: false,
				usertoken:'',
				bkts:'如果您已获得如新CN卡号，可点击绑定您的账号，成为如新海外购平台的推广商，获得专属产品分享链接及分享红利。',
				width:70,height:30,
				uid:0,
				xieyi:true
			}
		},
		onLoad(e){
			var _self = this;
			setTimeout(function(){
				_self.init();
			},100)
			this.usertoken = uni.getStorageSync('cbe_retoken');
			if(e.uid){
				this.uid = e.uid;
			}
		},
		onShow() {
			if(uni.getStorageSync('cbe_token')){
				uni.switchTab({
					url:"/pages/index/index"
				})
			}
		},
		methods: {
			...mapMutations(['register','login']),
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			toXieyi(){
				uni.navigateTo({
					url:'/pages/public/onepage?id=16'
				})
			},
			checkboxChange(e){
				this.xieyi = !this.xieyi
			},
			inputChangm(e){
				var mobile = e.detail.value;
				this.mobile = mobile;
				var reg = /^1[0-9]{10,10}$/;
				if(!reg.test(mobile)){
					this.keyong = 0;
				}else{
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/login/checkphone',
						data: {phone:mobile},
						method:'POST',
						dataType:'json',
						header: {'content-type' : 'application/x-www-form-urlencoded'},
						success: (resa) => {
							var one = resa.data;
							if(one.code==0){
								this.keyong = 1;
							}else{
								this.keyong = 2;
							}
						}
					})
				}
			},
			changePassword() {
				this.showPassword = !this.showPassword;
			},
			changePassworda() {
				this.showPassworda = !this.showPassworda;
			},
			toLogin(){
				if(!this.usertoken){
					uni.navigateBack({
						delta:1
					})
				}else{
					uni.redirectTo({
						url:"dsflogin"
					})
				}
			},
			toRegiser(){
				this.logining = true;
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
				if(!this.xieyi){
					uni.showToast({ title: '请先同意注册协议', icon: 'none' });
					this.logining = false;return false;
				}
				uni.showLoading({
					title: '正在提交',
					mask: true
				});
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/login/register',
					data: {phone:this.mobile,imgcode:this.imgcode,code:this.phonecode,token:this.phonetoken,password:this.password,repassword:this.repassword,usertoken:this.usertoken,uid:this.uid},
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
							var bkts = this.bkts;
							var timer = setTimeout(()=>{
								uni.showModal({
									title: '推广商申请',
									cancelText:'跳过',
									confirmText:'绑定',
									content: bkts,
									success: function (res) {
										if(res.confirm) {
											uni.redirectTo({
												url:'bindCn'
											})
										}else if(res.cancel) {
											uni.switchTab({
												url:"../user/user"
											})
										}
									}
								});
							},2000);
						}else{
							uni.showToast({ title:one.msg, icon: "none" });
							this.logining = false;
						}
					}
				})
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
							data: {phone:this.mobile,use:'register'},
							method:'POST',
							dataType:'json',
							header: {'content-type' : 'application/x-www-form-urlencoded'},
							success: (resa) => {
								uni.hideLoading();
								var one = resa.data;
								if(one.code == 0){
									uni.showToast({
										title:one.msg,icon:'success',mask:true,duration: 3000
									});
									console.log(one.msg);
									this.phonetoken = one.token;
								}else{
									uni.showToast({ title:one.msg,icon: "none"});
									var timer = setTimeout(()=>{
										this.getcode = '获取验证码';
										ntime = 120;
										this.scode = false;
										clearInterval(this.timer);
									},1000);
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
			init:function(){
				var context = uni.createCanvasContext('imgcanvas',this),w=this.width,h=this.height;
				context.setFillStyle("white");
				context.setLineWidth(5);			
				context.fillRect(0, 0, w, h);
				var pool=["A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","W","S","Y","Z","1","2","3","4","5","6","7","8","9","0"],str='';
				for(var i=0;i<4;i++){
					var c = pool[this.rn(0,pool.length)];//随机的字
					var deg = this.rn(-30,30);//字体的旋转角度
					context.setFontSize(18);
					context.setTextBaseline("top");
					context.setFillStyle(this.rc(80,150));
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
			rc:function(min,max){
			    var r=this.rn(min,max);
				var g=this.rn(min,max);
				var b=this.rn(min,max);
				return "rgb("+r+","+g+","+b+")";
			},
			rn:function(max,min){
				return parseInt(Math.random()*(max-min))+min;
			},
			refresh:function(){
				this.init();
			},
			canvasIdErrorCallback: function (e) {
			    console.error(e.detail.errMsg)
			}
		}
	}
</script>

<style lang='scss'>
	page{
		background: #fff;
	}
	.clear{
		clear:both;
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
		.code{
			position:absolute;right:0upx;font-size:30upx;color:#b2b2b2;border:1upx solid #b2b2b2;padding:8upx 30upx;border-radius:50upx;z-index:999;
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
		.kk{
			width:40upx; height:40upx; position: absolute; left:0upx;z-index:99;
		}
		.uuua{
			position: absolute; left:40upx; font-size: 28upx; color:#666666;  height:40upx; padding-left:30upx; padding-top: 14upx;
			text{
				color:#008ab0;
			}
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

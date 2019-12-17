<template>
	<view class="container">
		<view class="input-content">
			<view class="tishi">
				为了您的账号安全，请先验证再进行下一步操作
			</view>
			<view class="input-item">
				<input 
					type="text" 
					:value="mobile" 
					placeholder="请输入已注册的手机号"
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
					maxlength="6"
					data-key="phonecode"
					@input="inputChange"
					@confirm="toNext"
				/>
				<text @tap="getPhoneCode">{{getcode}}</text>
			</view>
			<button class="quxiao" @tap="quxiao">取消</button>
			<button class="confirm-btn" @tap="toNext" :disabled="logining">下一步</button>
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
				mobile:'',
				imgcode:'',
				phonecode:'',
				phonetoken:'',
				logining: false,
				realname:'',
				token:'',
				checked:false,
				scode:false,
				getcode:'获取验证码',
				width:70,height:30
			}
		},
		onLoad() {
			var _self = this;
			setTimeout(function(){
				_self.init();
			},100)
		},
		methods: {
			...mapMutations(['bindCn']),
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			quxiao(){
				uni.redirectTo({
					url:"login"
				})
			},
			toNext(){
				this.logining = true;
				if(!this.mobile){
					uni.showToast({ title: '请填写手机号码', icon: 'none' });
					this.logining = false;return false;
				}
				if(!this.imgcode){
					uni.showToast({ title: '请填写图形验证码', icon: 'none' });
					this.logining = false;return false;
				}
				if(!this.phonecode){
					uni.showToast({ title: '请填写手机验证码', icon: 'none' });
					this.logining = false;return false;
				}
				uni.showLoading({
					title: '正在验证',
					mask: true
				});
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/login/forgetyz',
					data: {phone:this.mobile,imgcode:this.imgcode,code:this.phonecode,token:this.phonetoken},
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
							uni.setStorageSync("cbe_forgetToken",one.token);
							var timer = setTimeout(()=>{
								uni.redirectTo({
									url:"changepwd"
								})
							},3000);
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
							data: {phone:this.mobile,use:'forget'},
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
									this.phonetoken = one.token;
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
	.tishi{
		width:750upx;
		font-size:26upx;
		color:#37b0c9;
		text-align: center;
		background: #f9f9f9;
		height:80upx;
		line-height:80upx;
		margin-left:-30upx;
		/* position: absolute;
		left:0upx; */
	}
	.tishia{
		width:690upx;
		font-size:24upx;
		color:#343434;
		text-align:left;
		height:80upx;
		line-height:80upx;
	}
	.tishib{
		width:690upx;
		font-size:30upx;
		color:#343434;
		text-align:left;
		height:80upx;
		line-height:80upx;
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
		padding:40upx 30upx;position: relative;
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
			height:50upx;
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
			position:absolute;right:0upx;font-size:30upx;color:#b2b2b2;border:1upx solid #b2b2b2;padding:8upx 30upx;border-radius:50upx;z-index:999;
		}
		.canvas-img-code{
			position:absolute;right:120upx;z-index: 999;
			canvas{
				border:1upx solid #eaeaea;background:#eaeaea;
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
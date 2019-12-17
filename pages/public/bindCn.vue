<template>
	<view class="container">
		<view class="input-content">
			<view class="tishi">
				温馨提示：一个CN号仅可和一个如新海外购绑定，请仔细填写
			</view>
			<view class="input-item">
				<input 
					type="text" 
					:value="cnnumber" 
					placeholder="请输入CN号"
					placeholder-style="color:#cbcbcb"
					maxlength="11"
					data-key="cnnumber"
					@input="inputChangm"
				/>
				<view class="uu" v-if="keyong==1">√ 可用</view>
				<view class="uuu" v-if="keyong==2">× 不可用</view>
			</view>
			<view class="input-item">
				<input 
					type="text" 
					:value="cnpwd" 
					placeholder="请输入CN号密码"
					placeholder-style="color:#cbcbcb"
					maxlength="11"
					data-key="cnpwd"
					:password="showPassword"
					@input="inputChange"
					@blur="checkcn"
					@confirm="checkcn"
				/>
				<view class="uni-icon" @tap="changePassword">
					<image :src="showPassword ? '../../static/yanjing.png' : '../../static/yanjingact.png'" mode=""></image>
				</view>
			</view>
			<view v-if="!cuowu">
				<!-- <view class="tishia" v-if="!realname">
					CN号一旦绑定将无法修改。可在个人中心-我的身份查看
				</view> -->
				<view class="tishib">
					{{realname}}
				</view>
			</view>
			<view class="cuowu" v-else>
				{{cuowu}}
			</view>
			<view class="xieyi" v-if="realname">
				<label class="checkbox" @tap="changexy">
					<checkbox value="r1" color="#23A5F0" :checked="checked" />
					<text>绑定CN号需同意</text>
				</label>
				<navigator url="xieyi">《用户协议》</navigator>
			</view>
			<button class="quxiao" @tap="quxiao">取消</button>
			<button class="confirm-btn" @tap="toNext" :disabled="logining">绑定</button>
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
				cuowu:'',
				cnnumber:'',
				cnpwd:'',
				logining: false,
				showPassword: true,
				realname:'',
				token:'',
				keyong:0,
				checked:false,
				callback:''
			}
		},
		onLoad(e) {
			if(e.callback){
				this.callback = e.callback;
			}
		},
		onShow() {
			var token = uni.getStorageSync('cbe_token');
			if(token){
				this.token = token;
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
			...mapMutations(['bindCn','login']),
			inputChange(e){
				this.cuowu = '';
				this.keyong = 0;
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			changePassword() {
				this.showPassword = !this.showPassword;
			},
			changexy:function(){
				this.checked = !this.checked;
			},
			quxiao(){
				if(this.callback){
					uni.navigateBack({
						delta:1
					})
				}else{
					uni.switchTab({
						url:"../user/user"
					})
				}
			},
			inputChangm(e){
				this.cuowu = '';
				this.realname = '';
				this.cnpwd = '';
				var cnnumber = e.detail.value;
				this.cnnumber = cnnumber; //CN0600610
				if(cnnumber.length<=8){
					this.keyong = 0;
				}else{
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/login/checkbdcn',
						data: {cnnumber:cnnumber},
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
			checkcn(){
				if(!this.cnnumber){
					return false;
				}
				if(!this.cnpwd){
					return false;
				}
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/login/checkcn',
					data: {cnnumber:this.cnnumber,cnpwd:this.cnpwd},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						var one = resa.data;
						if(one.code==0){
							this.cuowu = '';
							this.realname = one.realname;
						}else{
							this.cuowu = one.msg;
						}
					}
				})
			},
			toNext(){
				var that = this;
				this.logining = true;
				if(!this.cnnumber){
					uni.showToast({ title: '请填写CN号', icon: 'none' });
					this.logining = false;return false;
				}
				if(!this.cnpwd){
					uni.showToast({ title: '请填写CN号密码', icon: 'none' });
					this.logining = false;return false;
				}
				if(!this.checked){
					uni.showToast({ title: '绑定CN号需同意《用户协议》', icon: 'none' });
					this.logining = false;return false;
				}
				uni.showLoading({
					title: '正在绑定',
					mask: true
				});
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/login/bindcn',
					data: {cnnumber:this.cnnumber,cnpwd:this.cnpwd,token:this.token},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						uni.hideLoading();
						var one = resa.data;
						if(one.code==0){
							this.cuowu = '';
							uni.showToast({
								title:one.msg,icon:'success',mask:true,duration: 3000
							});
							if(that.callback){
								var timer = setTimeout(()=>{
									uni.navigateBack({
										delta:1
									})
								},2000);
							}else{
								this.login(one.data);
								var timer = setTimeout(()=>{
									uni.switchTab({
										url:"../user/user"
									})
								},2000);
							}
						}else{
							this.cuowu = one.msg;
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
	.cuowu{
		width:690upx;
		font-size:30upx;
		color:#ff68ad;
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
			position:absolute;right:0upx;font-size:30upx;color:#008ab0;border:1upx solid #008ab0;padding:10upx 30upx;border-radius:50upx;z-index:999;
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
		.uu{
			position: absolute;right:0;font-size:26upx;color:#08b000;
		}
		.uuu{
			position: absolute;right:0;font-size:26upx;color:#b0002f;
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
	.xieyi{
		width:650upx;margin-top:30upx;font-size:28upx;color:#999999;margin-bottom:70upx;
	}
	.xieyi text{
		float: left;
	}
	.xieyi checkbox{
		float: left;
	}
	.xieyi navigator{
		color:#37b0c9;float: left;
	}
</style>

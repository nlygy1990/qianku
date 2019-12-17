<template>
	<view class="content">
		<view class="ctops">为保证您的账号安全，请验证后再进行下一步操作</view>
		<view class="list-cell b-b">
			<text class="cell-tit">使用手机{{memberInfo.phone?memberInfo.phone:''}}验证</text>
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
		<button class="confirm-btn" @tap="toNext" :disabled="logining">确定</button>
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
				phonecode:'',
				phonetoken:'',
				logining: false,
				token:'',
				scode:false,
				getcode:'获取验证码',
				memberInfo:[],
				keywords:'',
				val:''
			}
		},
		onLoad(e) {
			this.keywords = e.keywords;
			this.val = e.val;
			var token = uni.getStorageSync('cbe_token');
			if(token){
				this.getMember();
			}else{
				uni.showToast({ title:"未登录或无权限",icon: "none"});
				var timer = setTimeout(()=>{
					uni.navigateBack({
						delta:1
					})
				},1000);
			}
		},
		methods:{
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			toNext(){
				this.logining = true;
				if(!this.phonecode){
					uni.showToast({ title: '手机验证码不能为空', icon: 'none' });
					this.logining = false;return false;
				}
				uni.showLoading({
					title: '正在验证',
					mask: true
				});
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/anquanrenzheng',
					data: {token:uni.getStorageSync('cbe_token'),phonecode:this.phonecode,phonetoken:this.phonetoken},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						uni.hideLoading();
						var one = resa.data;
						if(one.code==0){
							uni.setStorageSync('cbe_anquan',one.data);
							uni.redirectTo({
								url:"/pages/set/publish?keywords="+this.keywords+"&val="+this.val
							})
						}else{
							uni.showToast({ title:one.msg, icon: "none" });
							this.logining = false;
						}
					}
				})
			},
			getMember(){
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/info',
					data: {token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						var one = resa.data;
						if(one.code==0){
							this.mobile = one.one.mobile;
							one.one['phone'] = one.one.mobile.substr(0, 3) + '****' + one.one.mobile.substr(7);
							this.memberInfo = one.one;
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
							data: {phone:this.mobile,use:'anquan'},
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
		}
	}
</script>

<style lang='scss'>
page{
	width:100%; height:100%; background: #f4f4f4;
	.content{
		.ctops{
			width:100%; height:90upx; font-size: 24upx; color:#808080; line-height:90upx; padding:0 40upx;
		}
		.list-cell{
			display:flex;
			align-items:baseline;
			padding: 20upx 40upx;
			line-height:60upx;
			position:relative;
			background: #fff;
			justify-content: center;
			&.b-b:after{
				left: 30upx;
				right: 30upx;
			}
			&.m-t{
				margin-top: 16upx; 
			}
			.cell-tit{
				flex: 1;
				font-size: 28upx;
				color: #323232;
				margin-right:10upx;
			}
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
			padding:0upx 40upx;
			background: #fff;
			input{
				height: 50upx;
				font-size: $font-base + 2upx;
				color: $font-color-dark;
				width: 100%;
			}
			text{
				position:absolute;right:40upx;font-size:30upx;color:#008ab0;border:1upx solid #008ab0;padding:8upx 30upx;border-radius:50upx;z-index:999;
			}
		}
		.confirm-btn{
			width: 670upx;
			height: 76upx;
			position: absolute;
			bottom:40upx;
			left:40upx;
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
	}
}
</style>

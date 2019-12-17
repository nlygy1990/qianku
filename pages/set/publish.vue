<template>
	<view class="content">
		<view class="changepwd" v-if="keywords=='password'">
			<view class="ctops">修改手机号，您可以通过新手机号进行登录，旧手机号将作废不可以登录</view>
			<view class="input-item b-b">
				<view class="tit">旧密码</view>
				<input 
					type="text" 
					:value="oldpassword" 
					placeholder="请输入旧密码"
					placeholder-style="color:#cbcbcb"
					placeholder-class="input-empty"
					maxlength="32"
					:password="showPassword"
					data-key="oldpassword"
					@input="inputChange"
				/>
				<view class="uni-icon" @tap="changePassword">
					<image :src="showPassword ? '../../static/yanjing.png' : '../../static/yanjingact.png'" mode=""></image>
				</view>
			</view>
			<view class="input-item b-b">
				<view class="tit">新密码</view>
				<input 
					type="text" 
					:value="newpassword" 
					placeholder="请输入新密码"
					placeholder-style="color:#cbcbcb"
					placeholder-class="input-empty"
					maxlength="32"
					:password="showPassworda"
					data-key="newpassword"
					@input="inputChange"
				/>
				<view class="uni-icon" @tap="changePassworda">
					<image :src="showPassworda ? '../../static/yanjing.png' : '../../static/yanjingact.png'" mode=""></image>
				</view>
			</view>
			<view class="input-item">
				<view class="tit">确认密码</view>
				<input 
					type="text" 
					:value="renewpassword" 
					placeholder="请再次输入新密码"
					placeholder-style="color:#cbcbcb"
					placeholder-class="input-empty"
					maxlength="32"
					:password="showPasswordb"
					data-key="renewpassword"
					@input="inputChange"
				/>
				<view class="uni-icon" @tap="changePasswordb">
					<image :src="showPasswordb ? '../../static/yanjing.png' : '../../static/yanjingact.png'" mode=""></image>
				</view>
			</view>
			<view class="ctops">密码长度须为6-20位非纯数字，可包含字母、数字或下划线‘-’</view>
			<button class="confirm-btn" @tap="toChange" :disabled="logining">提交</button>
		</view>
		<view class="changusername" v-if="keywords=='username' || keywords=='nickname'">
			<view class="ctops" v-if="keywords=='username'">初始账号默认您注册的手机号码，修改后，您可以使用账号+密码的方式进行登录。</view>
			<view class="input-item b-b">
				<view class="tit">账号</view>
				<input 
					type="text" 
					:value="username" 
					placeholder="请输入账号"
					placeholder-style="color:#cbcbcb"
					placeholder-class="input-empty"
					maxlength="32"
					data-key="username"
					@input="inputChangeu"
				/>
				<view class="uu" v-if="keyong==1">√ 可用</view>
				<view class="uuu" v-if="keyong==2">× 不可用</view>
			</view>
			<button class="confirm-btn" @tap="toChangeInfo" :disabled="logining">提交</button>
		</view>
		<view class="changephone" v-if="keywords=='phone'">
			<view class="ctops">修改手机号，您可以通过新手机号进行登录，旧手机号将作废不可以登录</view>
			<view class="input-item b-b">
				<view class="tit">新手机号</view>
				<input 
					type="text" 
					:value="mobile" 
					placeholder="请输入新手机号码"
					placeholder-style="color:#cbcbcb"
					placeholder-class="input-empty"
					maxlength="32"
					data-key="mobile"
					@input="inputChangep"
				/>
				<view class="uu" v-if="keyong==1">√ 可用</view>
				<view class="uuu" v-if="keyong==2">× 不可用</view>
			</view>
			<view class="input-item">
				<view class="tit">短信验证码</view>
				<input 
					type="number" 
					:value="phonecode" 
					placeholder="请输入手机验证码"
					placeholder-style="color:#cbcbcb"
					maxlength="6"
					data-key="phonecode"
					@input="inputChange"
					@confirm="toChangePhone"
				/>
				<text @tap="getPhoneCode">{{getcode}}</text>
			</view>
			<button class="confirm-btn" @tap="toChangePhone" :disabled="logining">提交</button>
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
				klist:{password:'修改密码',username:'修改账号',phone:'修改手机',nickname:'修改昵称'},
				keywords:'',
				val:'',
				username:'',
				mobile:'',
				phonecode:'',
				oldpassword:'',
				newpassword:'',
				renewpassword:'',
				showPassword:true,
				showPassworda:true,
				showPasswordb:true,
				logining:false,
				keyong:0,
				scode:false,
				getcode:'获取验证码',
				phonetoken:''
			}
		},
		onLoad(e) {
			var token = uni.getStorageSync('cbe_token');
			if(token){
				uni.setNavigationBarTitle({
					title: this.klist[e.keywords]
				});
				this.keywords = e.keywords;
				this.val = e.val;
				this.username = e.val;
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
			...mapMutations(['logout']),
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			inputChangeu(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
				if(this.keywords=='username'){
					if(e.detail.value == this.val || e.detail.value.length<4){
						return false;
					}
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/member/Checkusername',
						data: {username:e.detail.value},
						method:'POST',
						dataType:'json',
						header: {'content-type' : 'application/x-www-form-urlencoded'},
						success: (resa) => {
							var one = resa.data;
							if(one.code==0){
								this.keyong = 1
							}else{
								this.keyong = 2
							}
						},
					});
				}
			},
			inputChangep(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
				if(this.keywords=='phone'){
					if(e.detail.value == this.val){
						return false;
					}
					var reg = /^1[0-9]{10,10}$/;
					if(!reg.test(e.detail.value)){
						this.keyong = 2;
						return false;
					}
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/member/Checkphone',
						data: {phone:e.detail.value},
						method:'POST',
						dataType:'json',
						header: {'content-type' : 'application/x-www-form-urlencoded'},
						success: (resa) => {
							var one = resa.data;
							if(one.code==0){
								this.keyong = 1
							}else{
								this.keyong = 2
							}
						},
					});
				}
			},
			changePassword(){
				this.showPassword = !this.showPassword
			},
			changePassworda(){
				this.showPassworda = !this.showPassworda
			},
			changePasswordb(){
				this.showPasswordb = !this.showPasswordb
			},
			toChangeInfo(){
				this.logining = true;
				var arr = '';
				if(this.keywords=="username"){
					if(this.username == this.val){
						uni.showToast({ title: '您的账号没有修改', icon: 'none' });
						this.logining = false;return false;
					}
					arr = {keys:'username',val:this.username,token:uni.getStorageSync('cbe_token')}
				}else if(this.keywords=="nickname"){
					if(this.username == this.val){
						uni.showToast({ title: '您的昵称没有修改', icon: 'none' });
						this.logining = false;return false;
					}
					arr = {keys:'nickname',val:this.username,token:uni.getStorageSync('cbe_token')}
				}
				uni.showLoading({
					title: '正在重置',
					mask: true
				});
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/changeInfo',
					data: arr,
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
							var timer = setTimeout(()=>{
								uni.navigateBack({
									delta:1
								})
							},3000);
						}else{
							uni.showToast({ title:one.msg, icon: "none" });
							this.logining = false;
						}
					},
				})
			},
			toChange(){
				this.logining = true;
				if(this.oldpassword==""){
					uni.showToast({ title: '旧密码不能为空', icon: 'none' });
					this.logining = false;return false;
				}
				if(this.newpassword==""){
					uni.showToast({ title: '新密码不能为空', icon: 'none' });
					this.logining = false;return false;
				}else{
					if(!this.CheckPassWord(this.newpassword)){
						uni.showToast({ title: '密码格式不正确', icon: 'none' });
						this.logining = false;return false;
					}
				}
				if(!this.renewpassword){
					uni.showToast({ title: '请再次输入新密码', icon: 'none' });
					this.logining = false;return false;
				}
				if(this.newpassword!=this.renewpassword){
					uni.showToast({ title: '两次密码不一致', icon: 'none' });
					this.logining = false;return false;
				}
				uni.showLoading({
					title: '正在重置',
					mask: true
				});
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/changepwd',
					data: {oldpassword:this.oldpassword,newpassword:this.newpassword,renewpassword:this.renewpassword,token:uni.getStorageSync('cbe_token')},
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
							uni.removeStorageSync('cbe_token');
							this.logout();
							var timer = setTimeout(()=>{
								uni.redirectTo({
									url:"/pages/public/login"
								})
							},3000);
						}else{
							uni.showToast({ title:one.msg, icon: "none" });
							this.logining = false;
						}
					}
				})
			},
			toChangePhone(){
				this.logining = true;
				if(!this.mobile){
					uni.showToast({ title: '新手机号不能为空', icon: 'none' });
					this.logining = false;return false;
				}else{
					var reg = /^1[0-9]{10,10}$/;
					if(!reg.test(this.mobile)){
						uni.showToast({ title: '新手机号格式不正确', icon: 'none' });
						this.logining = false;return false;
					}
				}
				if(!this.phonecode){
					uni.showToast({ title: '手机验证码不能为空', icon: 'none' });
					this.logining = false;return false;
				}
				uni.showLoading({
					title: '正在处理',
					mask: true
				});
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/changeMobile',
					data: {mobile:this.mobile,phonecode:this.phonecode,phonetoken:this.phonetoken,token:uni.getStorageSync('cbe_token')},
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
							var timer = setTimeout(()=>{
								uni.navigateBack({
									delta:1
								})
							},3000);
						}else{
							uni.showToast({ title:one.msg, icon: "none" });
							this.logining = false;
						}
					},
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
							data: {phone:this.mobile,use:'bind'},
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
			}
		}
	}
</script>

<style lang='scss'>
	page{
		width:100%; height:100%; background: #f4f4f4;
		.content{
			.changepwd,.changusername,.changephone{
				.ctops{
					width:100%; font-size: 24upx; color:#808080; line-height:40upx; padding:20px 40upx;
				}
				.input-item{
					position: relative;
					display:flex;
					flex-direction: column;
					align-items:flex-start;
					justify-content: center;
					height: 100upx;
					border-radius: 4px;
					padding:0upx 40upx;
					background: #fff;
					.tit{
						font-size: 28upx; color:#323232; position:absolute; top:0upx;height:100upx; line-height: 100upx;
					}
					input{
						height: 50upx;
						font-size: 28upx;
						color: #cccccc;
						width: 100%;
						padding-left:160upx;
					}
					.uni-icon{
						position: absolute;right:20upx;font-size:40upx;z-index:999;color:#008ab0;
						image{
							width:40upx;height:40upx;
						}
					}
					.uu{
						position: absolute;right:40upx;font-size:26upx;color:#08b000;
					}
					.uuu{
						position: absolute;right:40upx;font-size:26upx;color:#b0002f;
					}
					text{
						position:absolute;right:40upx;font-size:30upx;color:#008ab0;border:1upx solid #008ab0;padding:8upx 30upx;border-radius:50upx;z-index:999;
					}
				}
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
</style>

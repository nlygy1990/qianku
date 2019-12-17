<template>
	<view class="container">
		<view class="list-cell b-b m-t" @click="navTo('/pages/erweima/erweima')" hover-class="cell-hover" :hover-stay-time="50" v-if="memberInfo.ishangCNuser==1">
			<text class="cell-tit">我的二维码</text>
			<image src="../../static/ewcode.png" mode="" class="aa"></image>
			<image src="../../static/jiantou-r.png" class="bb"></image>
		</view>
		<view class="list-cell b-b" @click="navToa('/pages/set/publish','nickname',memberInfo.nickname?memberInfo.nickname:memberInfo.mobile)" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">昵称</text>
			<text class="cell-mid">{{memberInfo.nickname?memberInfo.nickname:memberInfo.mobile}}</text>
			<image src="../../static/jiantou-r.png" class="bb"></image>
		</view>
		<view class="list-cell b-b" @click="navToa('/pages/set/publish','username',memberInfo.username?memberInfo.username:memberInfo.mobile)" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">账号</text>
			<text class="cell-mid">{{memberInfo.username?memberInfo.username:memberInfo.mobile}}</text>
			<image src="../../static/jiantou-r.png" class="bb"></image>
		</view>
		<view class="list-cell b-b" @click="navToa('/pages/set/publish','password','')" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">账号密码</text>
			<text class="cell-mid">修改密码</text>
			<image src="../../static/jiantou-r.png" class="bb"></image>
		</view>
		<view class="list-cell" @click="navToa('/pages/set/publish','phone',memberInfo.phone)" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">手机号</text>
			<text class="cell-mid">{{memberInfo.phone}}</text>
			<image src="../../static/jiantou-r.png" class="bb"></image>
		</view>
		
		<view class="list-cell b-b m-t">
			<text class="cell-tit">QQ</text>
			<text class="cell-mid" v-if="memberInfo.openid_qq=='' || memberInfo.openid_qq==='null' || memberInfo.openid_qq==false">绑定</text>
			<text class="cell-mid" v-else>已绑定{{memberInfo.openid_qq}}</text>
			<image src="../../static/jiantou-r.png" class="bb"></image>
		</view>
		<view class="list-cell">
			<text class="cell-tit">微信</text>
			<text class="cell-mid" v-if="memberInfo.openid_wx=='' || memberInfo.openid_wx=='null'" @click="navTo('/pages/bind/bind?types=wechat')" hover-class="cell-hover" :hover-stay-time="50">绑定</text>
			<text class="cell-mid" v-else>已绑定</text>
			<image src="../../static/jiantou-r.png" class="bb"></image>
		</view>
		<view class="list-cell b-b m-t" @tap="lianxi" hover-class="cell-hover" :hover-stay-time="50">
			<text class="cell-tit">联系我们</text>
			<image src="../../static/jiantou-r.png" class="bb"></image>
		</view>
		<view class="list-cell" @tap="navTo('/pages/help/help')">
			<text class="cell-tit">帮助中心</text>
			<image src="../../static/jiantou-r.png" class="bb"></image>
		</view>
		<view class="list-cell log-out-btn" @click="toLogout">
			<text class="cell-tit">退出登录</text>
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
		methods:{
			...mapMutations(['logout']),
			lianxi(){
				uni.showModal({
					title:"客服热线",
				    content: '400-004-5678',
					confirmColor:'#008AB0',
					confirmText:'现在拨打',
				    success: (e)=>{
				    	if(e.confirm){
							uni.makePhoneCall({
								phoneNumber: '400-004-5678'
							})
				    	}
				    }
				});
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
							this.memberInfo = one.one;
						}
					}
				})
			},
			navTo(url){
				uni.navigateTo({
					url:url
				})
			},
			navToa(url,keywords,val){
				if(uni.getStorageSync('cbe_anquan')){
					uni.navigateTo({
						url:url+"?keywords="+keywords+'&val='+val
					})
				}else{
					uni.navigateTo({
						url:"/pages/set/anquan?keywords="+keywords+'&val='+val
					})
				}
			},
			//退出登录
			toLogout(){
				uni.showModal({
				    content: '确定要退出登录么',
					confirmColor:'#008AB0',
				    success: (e)=>{
				    	if(e.confirm){
							uni.removeStorageSync('cbe_token');
				    		this.logout();
				    		setTimeout(()=>{
				    			uni.navigateBack();
				    		}, 200)
				    	}
				    }
				});
			},
			//switch
			switchChange(e){
				let statusTip = e.detail.value ? '打开': '关闭';
				this.$api.msg(`${statusTip}消息推送`);
			},

		}
	}
</script>

<style lang='scss'>
	page{
		background: $page-color-base;
	}
	.list-cell{
		display:flex;
		align-items:baseline;
		padding: 20upx $page-row-spacing;
		line-height:60upx;
		position:relative;
		background: #fff;
		justify-content: center;
		&.log-out-btn{
			margin-top: 40upx;
			width:670upx; height: 80upx; margin-left:40upx; border-radius: 15upx; line-height:40upx;
			.cell-tit{
				color: #333333;
				text-align: center;
				margin-right: 0;
			}
		}
		&.cell-hover{
			background:#fafafa;
		}
		&.b-b:after{
			left: 30upx;
			right: 30upx;
		}
		&.m-t{
			margin-top: 16upx; 
		}
		.cell-mid{
			font-size: 28upx; color:#808080; padding-right: 40upx;
		}
		.cell-more{
			align-self: baseline;
			font-size:$font-lg;
			color:$font-color-light;
			margin-left:10upx;
		}
		.cell-tit{
			flex: 1;
			font-size: 28upx;
			color: #323232;
			margin-right:10upx;
		}
		.cell-tip{
			font-size: $font-base;
			color: $font-color-light;
		}
		.aa{
			width:28upx;height:30upx; margin-top:10upx;
		}
		.bb{
			width:35upx;height: 35upx; position: absolute;right:25upx;top:30upx;
		}
		switch{
			transform: translateX(16upx) scale(.84);
		}
	}
</style>

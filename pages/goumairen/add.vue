<template>
	<view class="content">
		<view class="ctop">
			<text>温馨提示：</text>海关规定购买跨境商品，购买人需提交真实姓名和身份证号码进行实名认证，且实名认证信息与支付本订单的银行卡实名信息一致。
		</view>
		<view class="row b-b">
			<text class="tit">购买人姓名：</text>
			<input class="input" type="text" :value="realname" data-key="realname" @input="inputChange" placeholder="请填写真实姓名" placeholder-class="placeholder" />
		</view>
		<view class="row">
			<text class="tit">身份证号码：</text>
			<input class="input" type="text" :value="idcard" data-key="idcard" @input="inputChange" placeholder="请输填写身份证号码" placeholder-class="placeholder" />
		</view>
		<button class="add-btn" @tap="confirm" v-if="source==1">保存并使用</button>
		<button class="add-btn" @tap="confirm" v-else>保存</button>
	</view>
</template>

<script>
	import {  
	    mapMutations  
	} from 'vuex';
	export default {
		data() {
			return {
				realname:'',
				idcard:'',
				token:'',
				id:'',
				source:0
			};
		},
		onLoad(e) {
			let title = '新增购买人';
			if(e.id){
				this.id = e.id;
				title = '编辑购买人';
				this.getGoumairen(e.id);
			}
			if(e.source){
				this.source = e.source;
			}
			uni.setNavigationBarTitle({
				title
			})
		},
		onShow() {
			if(uni.getStorageSync('cbe_token')){
				this.token = uni.getStorageSync('cbe_token');
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
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			getGoumairen(id){
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/getGoumairen',
					data: {token:uni.getStorageSync('cbe_token'),id:id},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						var one = resa.data;
						if(one.code==0){
							this.realname = one.data.realname;
							this.idcard   = one.data.idcard;
						}else{
							uni.showToast({ title:one.msg, icon: "none" });
						}
					},
				})
			},
			confirm(){
				if(!this.realname){
					this.$api.msg('请输入真实姓名');
					return;
				}
				if(!this.idcard){
					this.$api.msg('请输入身份证号码');
					return;
				}
				uni.showLoading({
					title: '正在处理',
					mask: true
				});
				var that = this;
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/goumairenPost',
					data: {realname:this.realname,token:this.token,idcard:this.idcard,id:this.id},
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
							if(that.source==1){
								this.$api.prePage().fahuiaa(JSON.stringify(one.data));
								var timer = setTimeout(()=>{
									uni.navigateBack({
										delta:1
									})
								},2000);
							}else{
								var timer = setTimeout(()=>{
									uni.navigateBack({
										delta:1
									})
								},2000);
							}
						}else{
							uni.showToast({ title:one.msg, icon: "none" });
						}
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #FFFFFF; width:100%; height:100%;
	}
	.content{
		.ctop{
			background: #f6f7f7; font-size: 24upx;color:#808080; padding:30upx 40upx; line-height:35upx;
			text{
				color:#37b0c9;
			}
		}
		.row{
			display: flex;
			align-items: center;
			position: relative;
			padding:0 40upx;
			height: 110upx;
			background: #fff;
			
			.tit{
				flex-shrink: 0;
				width: 185upx;
				font-size: 28upx;
				color:#323232;
			}
			picker{
				float: right; text-align: right;position: absolute;right:40upx;
			}
			.input{
				flex: 1;
				font-size: 28upx;
				color:#323232 !important;
				text-align: right;
			}
			.placeholder{
				flex: 1;
				font-size: 28upx;
				color:#cccccc;
				text-align: right;
			}
		}
		.add-btn{
			position: fixed;
			left: 40upx;
			right: 40upx;
			bottom: 60upx;
			z-index: 95;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 670upx;
			height: 80upx;
			font-size: 28upx;
			color: #fff;
			background-color: #008ab0;
			border-radius: 10upx;
		}
	}
</style>

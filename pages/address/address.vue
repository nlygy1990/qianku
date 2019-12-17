<template>
	<view class="content b-t">
		<view class="nodizhi" v-if="addressList.length==0">
			暂无收货地址，快去<text @tap="addAddress('add')">新建地址></text>
		</view>
		<view class="list" v-for="(item, index) in addressList" :key="index">
			<view class="wrappera" @tap="checkAddress(item)">
				<view class="u-box">
					<text class="name">{{item.realname}}</text>
					<text class="mobile">{{item.ycphone}}</text>
				</view>
				<view class="address">{{item.address}} {{item.areaa}}</view>
			</view>
			<view class="caozuo">
				<label class="radio" @tap="moren(item.id,item.isdefault,index)">
					<radio value="r2" color="#008ab0" style="transform:scale(0.7)" v-if="item.isdefault===1" checked />
					<radio value="r2" color="#008ab0" style="transform:scale(0.7)" v-else />设为默认
				</label>
				<view class="rri" @tap="del(item.id)">
					<image src="../../static/del.png" mode="" class="del"></image>
					删除
				</view>
				<view class="rri" @tap.stop="addAddress('edit', item)">
					<image src="../../static/edit.png" mode="" class="edit"></image>
					编辑
				</view>
			</view>
		</view>
		<button class="add-btn" @tap="addAddress('add')">新建地址</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				source: 0,
				addressList: []
			}
		},
		onShow() {
			if(uni.getStorageSync('cbe_token')){
				this.token = uni.getStorageSync('cbe_token');
				this.getAddressList();
			}else{
				uni.showToast({ title:"未登录或无权限",icon: "none"});
				var timer = setTimeout(()=>{
					uni.navigateBack({
						delta:1
					})
				},1000);
			}
		},
		onLoad(option){
			if(option.source){
				this.source = option.source;
			}
		},
		methods: {
			//选择地址
			checkAddress(item){
				if(this.source == 1){
					this.$api.prePage().addressData = item;
					uni.navigateBack()
				}
			},
			del(id){
				var that = this;
				uni.showModal({
					title: '温馨提示',
					confirmText:'删除',
					content: "确定要删除该地址信息吗？",
					success: function (res) {
						if(res.confirm) {
							uni.showLoading({
								title: '正在处理',
								mask: true
							});
							uni.request({
								url:uni.getStorageSync('hostname') + '?action=index/member/addressDel',
								data: {token:uni.getStorageSync('cbe_token'),id:id},
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
										that.getAddressList();
									}else{
										uni.showToast({ title:one.msg, icon: "none" });
									}
								}
							})
						}
					}
				});
			},
			moren(id,mm,index){
				if(mm==1){
					return false;
				}
				var that = this;
				uni.showModal({
					title: '温馨提示',
					confirmText:'设置',
					content: "确定要设置该地址为默认地址吗？",
					success: function (res) {
						if(res.confirm) {
							uni.showLoading({
								title: '正在处理',
								mask: true
							});
							uni.request({
								url:uni.getStorageSync('hostname') + '?action=index/member/addressMoren',
								data: {token:uni.getStorageSync('cbe_token'),id:id},
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
										that.addressList = [];
										that.getAddressList();
									}else{
										uni.showToast({ title:one.msg, icon: "none" });
									}
								}
							})
						}
					}
				});
			},
			fahuiaa(aa,cc){
				var bb = JSON.parse(aa);
				var dd = JSON.parse(cc);
				this.sji().addressData = bb;
				this.sji().goumaiData  = dd;
				uni.navigateBack({
					delta:1
				})
			},
			sji(){
				let pages = getCurrentPages();
				let prePage = pages[pages.length - 3];
				// #ifdef H5
				return prePage;
				// #endif
				return prePage.$vm;
			},
			addAddress(type, item){
				if(this.source==0){
					uni.navigateTo({
						url: `/pages/address/addressManage?type=${type}&data=${JSON.stringify(item)}`
					})
				}else{
					uni.navigateTo({
						url: `/pages/address/addressManage?source=1&type=${type}&data=${JSON.stringify(item)}`
					})
				}
			},
			getAddressList(){
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/addressList',
					data: {token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						var one = resa.data;
						if(one.code==0){
							this.addressList = one.data;
						}
					}
				})
			}
		}
	}
</script>

<style lang='scss'>
	page{
		padding-bottom: 120upx; background: #f4f4f4; height:100%;
	}
	.content{
		position: relative;
	}
	.nodizhi{
		text-align: center; color:#808080; font-size:30upx; line-height:400upx;
		text{
			color:#37b0c9;
		}
	}
	.list{
		background: #fff;
		position: relative;
		margin-bottom:20upx;
	}
	.wrappera{
		width:670upx;padding:30upx 40upx;
		.address{
			font-size: 26upx; color:#323232;padding-top:10upx;
		}
	}
	.caozuo{
		clear:both;border-top:1upx solid #f2f2f2; padding:10upx 40upx;
		.radio{
			font-size:26upx;color:#323232;
		}
		.rri{
			font-size:26upx; color:#323232; float: right; margin-top:15upx;margin-left:65upx;
			.del{
				width:29upx;height:28upx;margin-right:10upx;
			}
			.edit{
				width:26upx;height:26upx;margin-right:10upx;
			}
		}
	}
	.u-box{
		font-size: 30upx;
		color: #323232;
		margin-top: 16upx;
		.name{
			margin-right: 30upx;
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
</style>

<template>
	<view class="content">
		<view class="wxts">温馨提示：</view>
		<view class="wxtsa">
			1、请准备好退货商品按以下收货地址发起退货：【黄小姐，15036963269，广东省广州市南沙 大院4街道302, 520000】
		</view>
		<view class="wxtsb">
			2、请正确填写快递公司和快递单号，以便客服快速查询进度。
		</view>
		<view class="row b-b a">
			<text class="tit">快递/物流公司：</text>
			<picker @change="bindPickerChange" :value="index" :range="array" range-key="name">
			    <text :class="kaika?'input':'placeholder'">{{expresscom?expresscom:'请选择'}} ></text>
			</picker>
		</view>
		<view class="row b-b">
			<text class="tit">快递单号：</text>
			<input type="text" class="input" :value="expresssn" @input="binput" placeholder="请填写快递单号"  />
		</view>
		<button class="add-btn" @tap="confirm">提交</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:0,
				kaika:false,
				expresssn:'',
				expressid:'',
				expresscom:'',
				array:[],
				id:''
			}
		},
		onLoad(e) {
			if(e.id){
				this.id = e.id;
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/order/getExpresscom',
					data:{id:e.id,token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						var datas = resa.data;
						this.array = datas.data;
					},
				})
			}
		},
		methods:{
			bindPickerChange: function(e) {
				this.index = e.target.value;
				var ea = e.target.value;
				this.expresscom = this.array[ea].name;
				this.expressid  = this.array[ea].id;
				this.kaika = true;
			},
			binput(e){
				this.expresssn = e.detail.value;
			},
			confirm(){
				if(this.expressid==""){
					uni.showToast({ title:"请选择快递/物流公司",icon: "none"});
					return false;
				}
				if(this.expresssn==""){
					uni.showToast({ title:"请填写快递单号",icon: "none"});
					return false;
				}
				uni.showLoading({
					title: '正在提交'
				})
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/order/jihui',
					data:{id:this.id,expressid:this.expressid,expresssn:this.expresssn,token:uni.getStorageSync('cbe_token')},
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
							},2000);
						}else{
							uni.showToast({ title:one.msg,icon: "none"});
						}
					}
				})
			}
		}
	}
</script>
<style lang="scss">
	page{
		background: #f4f4f4;width:100%;height: 100%;
	}
	.wxts{
		font-size: 24upx; color:#37b0c9; padding:40upx 40upx; padding-bottom: 20upx;
	}
	.wxtsa,.wxtsb{
		font-size: 24upx; color:#808080; padding: 0 40upx; line-height:40upx;
	}
	.wxtsb{
		padding-top:5upx;
	}
	.a{
		margin-top:40upx;
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
			width: 200upx;
			font-size: 28upx;
			color:#333333;
		}
		picker{
			float: right; text-align: right;position: absolute;right:40upx;
		}
		.input{
			flex: 1;
			font-size: 28upx;
			color:#333333 !important;
			text-align: right;
		}
		.placeholder{
			flex: 1;
			font-size: 28upx;
			color:#808080;
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
</style>

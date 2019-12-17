<template>
	<view class="container">
		<view class="goods">
			<view class="goods-box-single">
				<image class="goods-img" :src="one.goodsdetail.thumb" mode="aspectFill"></image>
				<view class="right">
					<text class="title clamp">{{one.goodsdetail.title?one.goodsdetail.title:''}}</text>
					<text class="attr-box">产品编号:{{one.productsn?one.productsn:one.goodssn}}</text>
					<text class="attr-box">规格:{{one.optionname?one.optionname:''}}</text>
					<view class="price">{{price}}</view>
					<text class="sl">申请数量</text>
					<view class="anniu">
						<uni-number-box :min="1" :max="one.total" :value="nums" @eventChange="changeNum" />
					</view>
				</view>
			</view>
		</view>
		<view class="row b-b">
			<text class="tit">申请原因：</text>
			<picker @change="bindPickerChange" :value="index" :range="array">
		        <text :class="kaika?'input':'placeholder'">{{yuanyin?yuanyin:'请选择'}} ></text>
		    </picker>
		</view>
		<view class="row" style="margin-top: 0upx;">
			<text class="tit">问题描述：</text>
		</view>
		<view class="miaosu">
			<textarea :value="wenti" @input="binput" placeholder="请描述收到的包裹产品名称、数量等情况，并将快递单、箱外观、箱内核问题商品分别拍照上传，便于客服同事快速了解并处理" placeholder-class="aa" />
		</view>
		<view class="zhaopian">
			<view class="zz" v-for="(image,index) in imageList" :key="index">
				<image :src="image" :data-src="image" mode="aspectFill" @tap="previewImage"></image>
				<image src="../../static/del-icon.png" mode="" class="del" @tap="del(index)"></image>
			</view>
			<image src="../../static/add-icon.png" mode="aspectFill" @tap="chooseImage"></image>
			<view class="clear"></view>
		</view>
		<view class="shuom">建议您提供有效凭证，包含商品照片或物流凭证等</view>
		<navigator url="/pages/public/onepage?id=11" hover-class="none" class="shili">参考拍照实例></navigator>
		<view class="clear" style="height:200upx;"></view>
		<button class="add-btn" @tap="confirm">提交</button>
	</view>
</template>

<script>
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	import uniNumberBox from '@/components/uni-number-box.vue'
	export default {
		components: {
			uniNumberBox
		},
		data() {
			return {
				index:0,
				kaika:false,
				price:0.00,
				nums:1,
				yuanyin:'',
				wenti:'',
				array:['货品损坏','货品瑕疵','货物与订单不符'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				imageList:[],
				pic:'',
				one:[],
			};
		},
		onLoad(e) {
			if(e.id){
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/order/getShouhou',
					data:{id:e.id,token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						uni.hideLoading();
						var one = resa.data;
						if(one.code==0){
							this.one = one.one;
							this.nums = one.one.total;
							this.price = (this.one.price * this.nums).toFixed(2);
						}
					}
				})
			}
		},
		methods:{
			changeNum(value){
				this.nums = value.number;
				this.price = (this.one.price * value.number).toFixed(2);
			},
			binput(e){
				this.wenti = e.detail.value;
			},
			del(id){
				var imageList = [];
				for(var i = 0;i<this.imageList.length;i++){
					if(i==id){
						
					}else{
						imageList.push(this.imageList[i]);
					}
				}
				this.imageList = imageList;
			},
			confirm(){
				if(this.nums==0){
					uni.showToast({ title:"请选择申请数量",icon: "none"});
					return false;
				}
				if(this.yuanyin==""){
					uni.showToast({ title:"请选择申请原因",icon: "none"});
					return false;
				}
				if(this.wenti==""){
					uni.showToast({ title:"请填写问题描述",icon: "none"});
					return false;
				}
				if(this.imageList.length == 0){
					uni.showToast({ title:"请上传您的凭证",icon: "none"});
					return false;
				}
				uni.showLoading({
					title: '正在提交'
				})
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/order/addShouhou',
					data:{id:this.one.id,orderid:this.one.orderid,nums:this.nums,yuanyin:this.yuanyin,wenti:this.wenti,pic:this.pic,token:uni.getStorageSync('cbe_token')},
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
			},
			bindPickerChange: function(e) {
				this.index = e.target.value;
				var ea = e.target.value;
				this.yuanyin = this.array[ea];
				this.kaika = true;
			},
			chooseImage: async function() {
				if (this.imageList.length === 9) {
					let isContinue = await this.isFullImg();
					if (!isContinue) {
						return;
					}
				}
				var that = this;
				uni.chooseImage({
					sourceType: ['camera', 'album'],
					sizeType: ['compressed', 'original'],
					count: this.imageList.length + this.count[this.countIndex] > 9 ? 9 - this.imageList.length : this.count[this.countIndex],
					success: (res) => {
						var rl = res.tempFilePaths.length;
						for(var i=0;i<rl;i++){
							var imgsrc = res.tempFilePaths[i];
							const uploadTask = uni.uploadFile({
								url: uni.getStorageSync('hostname') + '?action=index/common/upload',
								filePath:imgsrc,
								name:"data",
								header: {'content-type' : 'application/x-www-form-urlencoded'},
								success: res => {
									var pic = that.pic;
									if(pic){
										that.pic = pic+","+res.data;
									}else{
										that.pic = res.data;
									}
									uni.showToast({
										title: '上传成功',
										icon: 'success',
										duration: 1000
									});
								},
								fail: err => {
									uni.showModal({
										content: err.errMsg,
										showCancel: false
									});
								}
							});
						}
						this.imageList = this.imageList.concat(res.tempFilePaths);
					},
					fail:(res)=> {
						
					}
				})
			},
			isFullImg: function() {
				return new Promise((res) => {
					uni.showModal({
						content: "已经有9张图片了,是否清空现有图片？",
						success: (e) => {
							if (e.confirm) {
								this.imageList = [];
								res(true);
							} else {
								res(false)
							}
						},
						fail: () => {
							res(false)
						}
					})
				})
			},
			previewImage: function(e) {
				var current = e.target.dataset.src
				uni.previewImage({
					current: current,
					urls: this.imageList
				})
			},
		}
	}
</script>

<style lang="scss">
	page{
		background: #f4f4f4;width:100%;height: 100%;
	}
	.shuom{
		font-size:26upx; color:#808080; padding: 0 40upx; background: #FFF;padding-bottom: 10upx;
	}
	.shili{
		font-size:26upx; color:#008ab0; padding: 0 40upx; background: #FFF;padding-bottom: 40upx;
	}
	.clear{
		clear: both;
	}
	.zhaopian{
		padding: 40upx 40upx;background: #FFFFFF;
		.zz{
			float: left; margin-right:20upx; position: relative;
		}
		image{
			width:120upx;height:120upx;float: left;
		}
		.del{
			width:28upx; height:28upx; position:absolute; z-index: 99; top:-5upx; right:-5upx;
		}
	}
	.miaosu{
		padding: 0upx 40upx;background: #FFFFFF;width:100%;
		textarea{
			background: #f6f7f7; padding: 30upx; font-size: 26upx; color:#333333;line-height:30upx; width:100%;
		}
		.aa{
			 color:#b2b2b2;line-height:30upx;
		}
	}
	.row{
		display: flex;
		align-items: center;
		position: relative;
		padding:0 40upx;
		height: 110upx;
		background: #fff;
		margin-top:20upx;
		.tit{
			flex-shrink: 0;
			width: 185upx;
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
	.goods{
		display: flex;
		flex-direction: column;
		background: #fff;
		padding-top: 10upx;
		padding-bottom: 30upx;
		position: relative;
		.goods-box-single{
			display: flex;
			padding: 30upx 40upx;
			.goods-img{
				display: block;
				width: 180upx;
				height: 180upx;
				border:1upx solid #ebebeb;
			}
			.right{
				flex: 1;
				display: flex;
				flex-direction: column;
				padding: 0 0 0 30upx;
				overflow: hidden;
				.title{
					font-size: 26upx;
					color: #323232;
					line-height: 1;
					padding-bottom:15upx;
				}
				.attr-box{
					height:40upx;
					font-size: 24upx;
					color: #808080;
				}
				.price{
					padding-top:10upx;
					font-size: 28upx;
					color: #323232;
					&:before{
						content: '￥';
						font-size: 28upx;
						margin: 0 2upx 0 0upx;
					}
				}
				.sl{
					position: absolute; right:240upx;bottom:36upx; font-size: 26upx; color:#323232;
				}
				.anniu{
					width:200upx; position: absolute; z-index:66;bottom:30upx;right:40upx;
				}
			}
		}
	}
</style>

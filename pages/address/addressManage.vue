<template>
	<view class="content">
		<view class="wxts">
			<input type="text" :value="id" style="display:none;" maxlength="-1" v-if="id" />
			<view class="wxts-top" @tap="changisa">
				<text>温馨提示：</text>
				<image src="../../static/xiajt.png" mode="" v-if="isa"></image>
				<image src="../../static/shangjt.png" mode="" v-else></image>
			</view>
			<view class="wxts-b" v-if="isa">
				根据海关政策要求，购买跨境商品的收货人需填写身份证上...
			</view>
			<view class="wxts-b" v-else>
				根据海关政策要求，购买跨境商品的收货人需填写身份证上的完整实名信息，手机号码必须真实有效，收货地址必须完整详细。否则可能导致订单无法通关。
			</view>
		</view>
		<view class="row b-b">
			<text class="tit">收货人姓名：</text>
			<input class="input" type="text" :value="realname" data-key="realname" @input="inputChange" placeholder="请填写身份证上姓名" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">身份证号码：</text>
			<input class="input" type="idcard" :value="cardno" data-key="cardno" @input="inputChange" maxlength="18" placeholder="请填写身份证号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">手机号码：</text>
			<input class="input" type="number" :value="mobile" data-key="mobile" @input="inputChange" maxlength="11" placeholder="请填写手机号码" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">所在地区：</text>
			<text @tap="chooseLocation" :class="addressname?'input':'placeholder'">
				{{address}} >
			</text>
			<text class="yticon icon-shouhuodizhi" @tap="chooseLocation" style="display:none;"></text>
			<input type="text" :value="address" style="display:none;" maxlength="-1" />
			<input type="text" :value="sheng" style="display:none;" maxlength="-1" />
			<input type="text" :value="shi" style="display:none;" maxlength="-1" />
			<input type="text" :value="xian" style="display:none;" maxlength="-1" />
			<input type="text" :value="addressname" style="display:none;" maxlength="-1" />
			<input type="text" :value="latitude" style="display:none;" maxlength="-1" />
			<input type="text" :value="longitude" style="display:none;" maxlength="-1" />
		</view>
		<view class="row b-b"> 
			<text class="tit">详细地址：</text>
			<input class="input" type="text" :value="area" data-key="area" @input="inputChange" maxlength="-1" placeholder="请填写详细地址" placeholder-class="placeholder" />
		</view>
		<button class="add-btn" @tap="confirm" v-if="source==1">保存并使用</button>
		<button class="add-btn" @tap="confirm" v-else>保存</button>
		<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
	import mpvueCityPicker from '../../components/mpvue-citypicker/mpvueCityPicker.vue'
	export default {
		components: {
			mpvueCityPicker
		},
		data() {
			return {
				themeColor: '#008ab0',
				cityPickerValueDefault: [0, 0, 0],
				id:'',
				realname:'',
				cardno:'',
				mobile:'',
				sheng:'',
				shi:'',
				xian:'',
				address:'请选择',
				addressname:'',
				latitude:'',
				longitude:'',
				area:'',
				isa:true,
				token:'',
				manageType:'',
				source:0
			}
		},
		onShow() {
			if(uni.getStorageSync('cbe_token')){
				this.token = uni.getStorageSync('cbe_token');
				// this.getAlist();
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
			let title = '新增收货地址';
			if(option.type==='edit'){
				title = '编辑收货地址'
				var addressData = JSON.parse(option.data)
				this.id = addressData.id;
				this.realname = addressData.realname;
				this.cardno = addressData.cardno;
				this.mobile = addressData.mobile;
				this.address = addressData.address;
				this.sheng = addressData.sheng;
				this.shi = addressData.shi;
				this.xian = addressData.area;
				this.area = addressData.areaa;
				this.addressname = addressData.addressname;
				this.latitude = addressData.latitude;
				this.longitude = addressData.longitude;
			}
			if(option.source){
				this.source = option.source;
			}
			this.manageType = option.type;
			uni.setNavigationBarTitle({
				title
			})
		},
		methods: {
			changisa(){
				this.isa = !this.isa;
			},
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			onCancel(e) {
				console.log(e)
			},
			onConfirm(e) {
				this.addressname = e.label;
				this.address = e.label;
				this.sheng = e.value[0];
				this.shi  = e.value[1];
				this.xian = e.value[2];
			},
			getAlist(){
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/cityList',
					data: {token:this.token},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						var one = resa.data;
						if(one.code==0){
							this.shenglist = one.data.sheng;
							this.shilist   = one.data.shi;
							this.xianlist  = one.data.xian;
						}
					}
				})
			},
			//地图选择地址
			chooseLocation(){
				this.$refs.mpvueCityPicker.show()
				return false;
				uni.chooseLocation({
					success: (data)=> {
						this.address = data.address;
						this.addressname = data.name;
						this.latitude  = data.latitude;
						this.longitude = data.longitude;
					}
				})
			},
			//提交
			confirm(){
				if(!this.realname){
					this.$api.msg('请填写身份证上姓名');
					return;
				}
				if(!this.cardno){
					this.$api.msg('请填写身份证号码');
					return;
				}
				if(!/(^1[3|4|5|7|8|9][0-9]{9}$)/.test(this.mobile)){
					this.$api.msg('请输入正确的手机号码');
					return;
				}
				if(!this.address || this.address=="请选择"){
					this.$api.msg('请选择所在地区');
					return;
				}
				if(!this.area){
					this.$api.msg('请填写门牌号信息');
					return;
				}
				uni.showLoading({
					title: '正在提交',
					mask: true
				});
				var that = this;
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/addressPost',
					data: {realname:this.realname,cardno:this.cardno,mobile:this.mobile,token:this.token,address:this.address,addressname:this.addressname,latitude:this.latitude,longitude:this.longitude,area:this.area,id:this.id,sheng:this.sheng,shi:this.shi,xian:this.xian},
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
								this.$api.prePage().fahuiaa(JSON.stringify(one.data),JSON.stringify(one.dataa));
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
			},
		}
	}
</script>

<style lang="scss">
	page{
		
	}
	.wxts{
		font-size:24upx; padding:30upx 40upx; background: #f6f7f7;
		.wxts-top{
			text{
				color:#37b0c9;
			}
			image{
				width:24upx;height:16upx; float:right;
			}
		}
		.wxts-b{
			color:#808080;padding:10upx 0; line-height:40upx;
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
		.icon-shouhuodizhi{
			font-size: 36upx;
			color: $font-color-light;
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

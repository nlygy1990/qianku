<template>
	<view class="content">
		<view class="row b-b m-t">
			<text class="tit">银行卡号：</text>
			<input class="input" type="text" :value="bankcard" data-key="bankcard" @input="inputChange" placeholder="请输入银行卡号" placeholder-class="placeholder" />
		</view>
		<view class="row b-b">
			<text class="tit">开卡行：</text>
			<picker @change="bindPickerChange" :value="index" :range="array">
                <text :class="kaika?'input':'placeholder'">{{bank?bank:'请选择'}} ></text>
            </picker>
		</view>
		<view class="row b-b">
			<text class="tit">开卡人：</text>
			<input class="input" type="text" :value="bankrealname" data-key="bankrealname" @input="inputChange" placeholder="请输入开卡人姓名" placeholder-class="placeholder" />
		</view>
		<view class="row">
			<text class="tit">身份证：</text>
			<input class="input" type="text" :value="bankidcard" data-key="bankidcard" @input="inputChange" placeholder="请输入开卡人身份证号码" placeholder-class="placeholder" />
		</view>
		<button class="add-btn" @tap="confirm">保存</button>
	</view>
</template>
<script>
	import {  
	    mapMutations  
	} from 'vuex';
	export default {
		data() {
			return {
				index:0,
				bankcard:'',
				bank:'',
				bankrealname:'',
				bankidcard:'',
				token:'',
				kaika:false,
				memberInfo:[],
				array:['中国银行','中国农业银行']
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
		methods: {
			navTo(url){
				uni.navigateTo({
					url:url
				})
			},
			bindPickerChange: function(e) {
				this.index = e.target.value;
				var ea = e.target.value;
				this.bank = this.array[ea];
				this.kaika = true;
			},
			inputChange(e){
				const key = e.currentTarget.dataset.key;
				this[key] = e.detail.value;
			},
			confirm(){
				if(!this.bankcard){
					this.$api.msg('请输入银行卡号');
					return;
				}else{
					if(!this.checkBankno(this.bankcard)){
						this.$api.msg('银行卡号格式不正确');
						return;
					}
				}
				if(!this.bank){
					this.$api.msg('请选择开卡行');
					return;
				}
				if(!this.bankrealname){
					this.$api.msg('请输入开卡人姓名');
					return;
				}
				if(!this.bankidcard){
					this.$api.msg('请输入开卡人身份证号码');
					return;
				}else{
					if(!this.checkIdcard(this.bankidcard)){
						this.$api.msg('身份证号码格式不正确');
						return;
					}
				}
				uni.showLoading({
					title: '正在处理',
					mask: true
				});
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/bankPost',
					data: {bankcard:this.bankcard,bank:this.bank,bankrealname:this.bankrealname,token:this.token,bankidcard:this.bankidcard},
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
							uni.showToast({ title:one.msg, icon: "none" });
						}
					}
				})
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
							this.bankcard = one.one.bankcard;
							this.bank = one.one.bank;
							this.bankrealname = one.one.bankrealname;
							if(one.one.bankidcard){
								this.kaika = true;
								this.bankidcard = one.one.bankidcard;
								// this.bankidcard = one.one.bankidcard.replace(/^(.{4})(?:\d+)(.{4})$/,"$1******$2");
							}
						}
					}
				})
			},
			checkBankno(bankno) {
				var lastNum = bankno.substr(bankno.length - 1, 1);//取出最后一位（与luhm进行比较）
				var first15Num = bankno.substr(0, bankno.length - 1);//前15或18位
				var newArr = [];
				for (var i = first15Num.length - 1; i > -1; i--) { //前15或18位倒序存进数组
					newArr.push(first15Num.substr(i, 1));
				}
				var arrJiShu = []; //奇数位*2的积 <9
				var arrJiShu2 = []; //奇数位*2的积 >9
				var arrOuShu = []; //偶数位数组
				for (var j = 0; j < newArr.length; j++) {
					if ((j + 1) % 2 == 1) {//奇数位
						if (parseInt(newArr[j]) * 2 < 9)
							arrJiShu.push(parseInt(newArr[j]) * 2); else
							arrJiShu2.push(parseInt(newArr[j]) * 2);
					}
					else //偶数位
						arrOuShu.push(newArr[j]);
				}
				var jishu_child1 = [];//奇数位*2 >9 的分割之后的数组个位数
				var jishu_child2 = [];//奇数位*2 >9 的分割之后的数组十位数
				for (var h = 0; h < arrJiShu2.length; h++) {
					jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
					jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
				}
				var sumJiShu = 0; //奇数位*2 < 9 的数组之和
				var sumOuShu = 0; //偶数位数组之和
				var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
				var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
				var sumTotal = 0;
				for (var m = 0; m < arrJiShu.length; m++) {
					sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
				}
				for (var n = 0; n < arrOuShu.length; n++) {
					sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
				}
				for (var p = 0; p < jishu_child1.length; p++) {
					sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
					sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
				}
				//计算总和
				sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);
				//计算Luhm值
				var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
				var luhm = 10 - k;
				if (lastNum == luhm) {
					return true;
				}
				else {
					return false;
				}
			},
			checkIdcard(personnumber) {
				personnumber = personnumber.toUpperCase();
				//身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
				if (!(/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(personnumber))) {
					return false;
				}
				//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
				//下面分别分析出生日期和校验位
				var len, re;
				len = personnumber.length;
				if (len == 15) {
					re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
					var arrSplit = personnumber.match(re);

					//检查生日日期是否正确
					var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
					var bGoodDay;
					bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
					if (!bGoodDay) {
						return false;
					}
					else {
						//将15位身份证转成18位
						//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
						var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
						var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
						var nTemp = 0, i;
						personnumber = personnumber.substr(0, 6) + '19' + personnumber.substr(6, personnumber.length - 6);
						for (i = 0; i < 17; i++) {
							nTemp += personnumber.substr(i, 1) * arrInt[i];
						}
						personnumber += arrCh[nTemp % 11];
						return true;
					}
				}
				if (len == 18) {
					re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
					var arrSplit = personnumber.match(re);
					//检查生日日期是否正确
					var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
					var bGoodDay;
					bGoodDay = (dtmBirth.getFullYear() == Number(arrSplit[2])) && ((dtmBirth.getMonth() + 1) == Number(arrSplit[3])) && (dtmBirth.getDate() == Number(arrSplit[4]));
					if (!bGoodDay) {
						return false;
					} else {
						//检验18位身份证的校验码是否正确。
						//校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
						var valnum;
						var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
						var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
						var nTemp = 0, i;
						for (i = 0; i < 17; i++) {
							nTemp += personnumber.substr(i, 1) * arrInt[i];
						}
						valnum = arrCh[nTemp % 11];
						if (valnum != personnumber.substr(17, 1)) {
							return false;
						}
						return true;
					}
				}
				return false;
			}
		}
	}
</script>

<style lang="scss">
	page{
		width:100%;height:100%;background: #F4F4F4;
	}
	.m-t{
		border-top:1upx solid $border-color-base;
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
</style>

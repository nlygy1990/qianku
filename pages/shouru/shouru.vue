<template>
	<view>
		<view class="lists">
			<view class="gg" @tap="togglePopup('middle-list')">说明</view>
			<view v-for="(item,index) in list" :key="index">
				<view class="nian">{{item.nian}}</view>
				<view class="nlist">
					<view class="ull">
						<text class="xiangmu">报酬：</text>
						<text class="money">￥{{item.baochou}}</text>
						<view class="clear"></view>
					</view>
					<view class="ull">
						<text class="xiangmu">报酬调整：</text>
						<text class="money">￥{{item.baochou_edit}}</text>
						<view class="clear"></view>
					</view>
					<view class="ull">
						<text class="xiangmu">应发金额：</text>
						<text class="money">￥{{item.yingfa}}</text>
						<view class="clear"></view>
					</view>
					<view class="ull">
						<text class="xiangmu">计税额：</text>
						<text class="money">￥{{item.jishui}}</text>
						<view class="clear"></view>
					</view>
					<view class="ull">
						<text class="xiangmu">总税额：</text>
						<text class="money">￥{{item.zongshui}}</text>
						<view class="clear"></view>
					</view>
					<view class="ull">
						<text class="xiangmu">实发金额：</text>
						<text class="money">￥{{item.shifa}}</text>
						<view class="clear"></view>
					</view>
				</view>
			</view>
		</view>
		<uni-popup :show="type === 'middle-list'" position="middle" mode="fixed" @hidePopup="togglePopup('')">
			<scroll-view :scroll-y="true" class="uni-center center-box" :style="smheight">
				<view class="cont">
					<rich-text :nodes="kjshuoming"></rich-text>
				</view>
				<view class="zdl" @tap="togglePopup('')">
				 	我知道了
				</view>
			</scroll-view>
		</uni-popup>
	</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default {
		components: {
			uniPopup
		},
		data() {
			return {
				type:'',
				kjshuoming:'<div style="font-size:14px;color:#333333;">说明：</div><div style="font-size:12px;color:#333333;line-height:18px"><br/>1、请您务必妥善保密您电子清单查询（下载）账号及密码，切勿告知他人，以免造成个人信息泄露。<br/><br/>2、您可查询近三个月的收入清单，每月最后一天起更新当月发放的收入清单。<br/><br/>3、您可致电400-045-569对当月电子收入清单进行详细了解，如您有任何疑问，请在收入发放月次月15日之前以书面形式向您所在的分公司提出，否则视为您放弃本期收入的异议权。</div>',
				smheight:'',
				list:[]
			};
		},
		onLoad() {
			const res = uni.getSystemInfoSync();
			var wh = res.windowHeight;
			this.smheight = 'max-height:'+(wh-60)+'px';
			this.type = '';
		},
		onShow() {
			if(uni.getStorageSync('cbe_token')){
				this.myshouru();
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
			togglePopup(type) {
				this.type = type;
			},
			myshouru(){
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/shouruList',
					data: {token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						var one = resa.data;
						this.list = one.data;
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.clear{
		clear:both;
	}
	.gg{
		position: fixed; top:20upx; right:30upx; color:#0490b7; font-size: 28upx; z-index: 999;
	}
	.lists{
		.nian{
			height:80upx;background:#f6f7f7;line-height: 80upx; padding: 0upx 40upx; color:#000000; font-size: 26upx;
		}
		.nlist{
			padding: 0 40upx;
			.ull{
				border-bottom: 1upx solid #f2f2f2; height:103upx; line-height: 103upx;
				.xiangmu{
					color: #323232; font-size: 28upx;
				}
				.money{
					text-align: right;float: right; color:#333333; font-size: 28upx;
				}
			}
		}
	}
	.uni-center{
		width:568upx; max-height: 900upx; min-height:200upx;
		.cont{
			padding-bottom:90upx;
		}
		.zdl{
			text-align: center; color:#008ab0; font-size:28upx;height:80upx; position: absolute;bottom:0upx;width:100%; line-height: 80upx;
		}
	}
</style>

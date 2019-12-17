<template>
	<view class="content">
		<view class="ctop">
			<text>温馨提示：</text>1.海关规定，购买跨境商品需提供实际支付人身份信息，请选择实际购买支付人信息。2.海关规定跨境电商年度购买限额为26000元人民币，超出限值将无法下单
		</view>
		<view v-for="(item,index) in goumairenList" :key="index">
			<uni-swipe-action :options="options2" :is-opened="isOpened" :auto-close="true"  @click="delClick(item.id)">
				<view class="gm-list">
					<view class="name">{{item.realname}}<text>{{item.ycidcard}}</text></view>
					<view class="idcard">本年度平台已购买的总额：{{item.zongedu}}元</view>
					<view class="xuan" v-if="source==1">
						<image src="../../static/cartxuan.png" mode="" @tap="xuanze(item,1)" v-if="item.idcard==checkid && item.realname==realname"></image>
						<image src="../../static/card_wxuan.png" mode="" @tap="xuanze(item,0)" v-else></image>
					</view>
					<view class="xuan" v-else>
						<image src="../../static/edit.png" mode="" @tap="edits(item.id)"></image>
					</view>
				</view>
			</uni-swipe-action>
		</view>
		<navigator url="add?source=1" hover-class="none" class="add" v-if="source==1">添加购买人</navigator>
		<navigator url="add" hover-class="none" class="add" v-else>添加购买人</navigator>
		<view class="queding" @tap="queding" v-if="source==1">确定</view>
	</view>
</template>

<script>
	import uniSwipeAction from '@/components/uni-swipe-action/uni-swipe-action.vue'
	export default {
		components: {
			uniSwipeAction
		},
		data() {
			return {
				checkid:'',
				realname:'',
				xlist:[],
				goumairenList:[],
				source:0,
				isOpened: false,
				options2: [{
					text: '删除',
					style: {
						backgroundColor: '#dd524d'
					}
				}],
			};
		},
		onLoad(e) {
			if(uni.getStorageSync('cbe_token')){
				this.token = uni.getStorageSync('cbe_token');
				this.getGoumairenList();
			}else{
				uni.showToast({ title:"未登录或无权限",icon: "none"});
				var timer = setTimeout(()=>{
					uni.navigateBack({
						delta:1
					})
				},1000);
			}
			if(e.source){
				this.source = e.source;
				if(this.$api.prePage() && this.$api.prePage().goumaiData.idcard){
					this.checkid = this.$api.prePage().goumaiData.idcard;
					this.realname = this.$api.prePage().goumaiData.realname;
					this.xlist = this.$api.prePage().goumaiData;
				}
				uni.setNavigationBarTitle({
					title:'购买人'
				})
			}else{
				uni.setNavigationBarTitle({
					title:'我的购买人'
				})
			}
		},
		methods:{
			delClick(id){
				var that = this;
				uni.showModal({
					title: '温馨提示',
					confirmText:'删除',
					content: "确定要删除该购买人信息吗？",
					success: function (res) {
						if(res.confirm) {
							uni.showLoading({
								title: '正在处理',
								mask: true
							});
							uni.request({
								url:uni.getStorageSync('hostname') + '?action=index/member/goumairenDel',
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
										that.getGoumairenList();
									}else{
										uni.showToast({ title:one.msg, icon: "none" });
									}
								}
							})
						}
					}
				});
			},
			xuanze(item,i){
				if(i==0){
					this.xlist = item;
					this.checkid = item.idcard;
					this.realname = item.realname;
				}else{
					this.checkid = '';
					this.realname = '';
					this.xlist = [];
				}
			},
			edits(id){
				uni.navigateTo({
					url:"add?id="+id
				})
			},
			queding(){
				if(this.xlist.idcard){
					this.$api.prePage().goumaiData = this.xlist;
					uni.navigateBack();
				}else{
					this.$api.msg('请选择购买人');
				}
			},
			fahuiaa(aa){
				var bb = JSON.parse(aa);
				this.sji().goumaiData  = bb;
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
			getGoumairenList(){
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/goumairenList',
					data: {token:uni.getStorageSync('cbe_token')},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						var one = resa.data;
						if(one.code==0){
							this.goumairenList = one.data;
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
	.content{
		background: #FFFFFF;
		.ctop{
			background: #f6f7f7; font-size: 24upx;color:#808080; padding:30upx 40upx; line-height:35upx;
			text{
				color:#37b0c9;
			}
		}
		.gm-list{
			width:670upx; height:144upx; border-bottom:1upx solid #f2f2f2; margin:0upx 40upx; position: relative;
			.name{
				color: #323232; font-size: 28upx;padding-top: 35upx;
				text{
					font-size:28upx; padding-left: 100upx;
				}
			}
			.idcard{
				color:#808080; font-size: 26upx;padding-top: 10upx;
			}
			.xuan{
				width:38upx;height:38upx; position: absolute; top:53upx; right:0upx;
				image{
					width:100%; height:100%;
				}
			}
		}
		.add{
			color:#008ab0; font-size:28upx; padding:30upx 40upx;
		}
		.queding{
			width:670upx; height:80upx; line-height: 80upx; text-align: center; color:#FFFFFF; background: #008ab0; border-radius: 8upx; position: fixed; bottom:30upx; left:40upx;
		}
	}
}
</style>

<template>
	<view>
		<view class="navtop" v-if="source==0">
			<view class="nav-item" :class="index==0?'active':''" @tap="changeIndex(0)">未使用({{weiyong}})</view>
			<view class="nav-item" :class="index==1?'active':''" @tap="changeIndex(1)">已使用({{yiyong}})</view>
			<view class="nav-item" :class="index==2?'active':''" @tap="changeIndex(2)">已失效({{shixiao}})</view>
		</view>
		<view class="navtop" v-else>
			<view class="nav-itema" :class="indexa==0?'active':''" @tap="changeIndexa(0)">可用优惠券({{keyong}})</view>
			<view class="nav-itema" :class="indexa==1?'active':''" @tap="changeIndexa(1)">不可用优惠券({{bukeyong}})</view>
		</view>
		<view v-if="source==0">
			<view class="yhqlist" v-if="index==0">
				<view class="yhq-item" v-for="(item,key) in cuoponList" :key="key" v-if="item.status==0">
					<image src="../../static/weiyong.png" mode="" class="beijing"></image>
					<view class="yhq-left">
						<view class="money" v-if="item.backtype==0">
							<text>￥</text> {{item.deduct}}
						</view>
						<view class="money" v-if="item.backtype==1">
							{{item.discount}}<text>折</text>
						</view>
						<view class="money" v-if="item.backtype==2 && item.backmoney>0">
							<text>返</text>{{item.backmoney}} <text>余额</text>
						</view>
						<view class="money" v-if="item.backtype==2 && item.backcredit>0">
							<text>返</text>{{item.backcredit}} <text>积分</text>
						</view>
						<view class="money" v-if="item.backtype==2 && item.backredpack>0">
							<text>返</text>{{item.backredpack}} <text>现金</text>
						</view>
						<view class="tiaojian" v-if="item.enough>0">满￥{{item.enough}}可用</view>
						<view class="tiaojian" v-if="item.enough==0">购买立减</view>
					</view>
					<view class="yhq-right">
						<view class="title">{{item.couponname}}</view>
						<view class="bianhao">券编号：{{item.number}}</view>
						<view class="fanwei">
							使用范围：{{item.sysm}}
						</view>
						<view class="qixian" v-if="item.timelimit==1">有效期：{{item.timestart}} - {{item.timeend}}</view>
						<view class="qixian" v-else>有效期：长期有效</view>
					</view>
					<text class="use" @tap="toUse(item.id)">立即使用</text>
				</view>
				<view class="zanwu" v-if="weiyong==0">
					暂无未使用优惠券
				</view>
			</view>
			<view class="yhqlist" v-if="index==1">
				<view class="yhq-item" v-for="(item,key) in cuoponList" :key="key" v-if="item.status==1">
					<image src="../../static/yiyong.png" mode="" class="beijing"></image>
					<view class="yhq-left">
						<view class="money" v-if="item.backtype==0">
							<text>￥</text> {{item.deduct}}
						</view>
						<view class="money" v-if="item.backtype==1">
							{{item.discount}}<text>折</text>
						</view>
						<view class="money" v-if="item.backtype==2 && item.backmoney>0">
							<text>返</text>{{item.backmoney}} <text>余额</text>
						</view>
						<view class="money" v-if="item.backtype==2 && item.backcredit>0">
							<text>返</text>{{item.backcredit}} <text>积分</text>
						</view>
						<view class="money" v-if="item.backtype==2 && item.backredpack>0">
							<text>返</text>{{item.backredpack}} <text>现金</text>
						</view>
						<view class="tiaojian" v-if="item.enough>0">满￥{{item.enough}}可用</view>
						<view class="tiaojian" v-if="item.enough==0">购买立减</view>
					</view>
					<view class="yhq-right">
						<view class="title">{{item.couponname}}</view>
						<view class="bianhao">券编号：{{item.number}}</view>
						<view class="fanwei">
							使用范围：{{item.sysm}}
						</view>
						<view class="qixian" v-if="item.timelimit==1">有效期：{{item.timestart}} - {{item.timeend}}</view>
						<view class="qixian" v-else>有效期：长期有效</view>
					</view>
				</view>
				<view class="zanwu" v-if="yiyong==0">
					暂无已使用优惠券
				</view>
			</view>
			<view class="yhqlist" v-if="index==2">
				<view class="yhq-item" v-for="(item,key) in cuoponList" :key="key" v-if="item.status==2">
					<image src="../../static/shixiao.png" mode="" class="beijing"></image>
					<view class="yhq-left">
						<view class="money" v-if="item.backtype==0">
							<text>￥</text> {{item.deduct}}
						</view>
						<view class="money" v-if="item.backtype==1">
							{{item.discount}}<text>折</text>
						</view>
						<view class="money" v-if="item.backtype==2 && item.backmoney>0">
							<text>返</text>{{item.backmoney}} <text>余额</text>
						</view>
						<view class="money" v-if="item.backtype==2 && item.backcredit>0">
							<text>返</text>{{item.backcredit}} <text>积分</text>
						</view>
						<view class="money" v-if="item.backtype==2 && item.backredpack>0">
							<text>返</text>{{item.backredpack}} <text>现金</text>
						</view>
						<view class="tiaojian" v-if="item.enough>0">满￥{{item.enough}}可用</view>
						<view class="tiaojian" v-if="item.enough==0">购买立减</view>
					</view>
					<view class="yhq-right">
						<view class="title">{{item.couponname}}</view>
						<view class="bianhao">券编号：{{item.number}}</view>
						<view class="fanwei">
							使用范围：{{item.sysm}}
						</view>
						<view class="qixian" v-if="item.timelimit==1">有效期：{{item.timestart}} - {{item.timeend}}</view>
						<view class="qixian" v-else>有效期：长期有效</view>
					</view>
				</view>
				<view class="zanwu" v-if="shixiao==0">
					暂无已失效优惠券
				</view>
			</view>
		</view>
		<view v-else>
			<view class="yhqlist" v-if="indexa==0">
				<view class="yhq-item" v-for="(item,key) in cuoponList" :key="key" v-if="item.status==0"  @tap="xuanze(item)">
					<image src="../../static/weiyong.png" mode="" class="beijing"></image>
					<view class="yhq-left">
						<view class="money" v-if="item.backtype==0">
							<text>￥</text> {{item.deduct}}
						</view>
						<view class="money" v-if="item.backtype==1">
							{{item.discount}}<text>折</text>
						</view>
						<view class="money" v-if="item.backtype==2 && item.backmoney>0">
							<text>返</text>{{item.backmoney}} <text>余额</text>
						</view>
						<view class="money" v-if="item.backtype==2 && item.backcredit>0">
							<text>返</text>{{item.backcredit}} <text>积分</text>
						</view>
						<view class="money" v-if="item.backtype==2 && item.backredpack>0">
							<text>返</text>{{item.backredpack}} <text>现金</text>
						</view>
						<view class="tiaojian" v-if="item.enough>0">满￥{{item.enough}}可用</view>
						<view class="tiaojian" v-if="item.enough==0">购买立减</view>
					</view>
					<view class="yhq-right">
						<view class="title">{{item.couponname}}</view>
						<view class="bianhao">券编号：{{item.number}}</view>
						<view class="fanwei">
							使用范围：{{item.sysm}}
						</view>
						<view class="qixian" v-if="item.timelimit==1">有效期：{{item.timestart}} - {{item.timeend}}</view>
						<view class="qixian" v-else>有效期：长期有效</view>
					</view>
					<image src="../../static/cartxuan.png" mode="" class="xuan" v-if="yhqid==item.id"></image>
					<image src="../../static/card_wxuan.png" mode="" class="xuan" v-else></image>
				</view>
				<view class="zanwu" v-if="keyong==0">
					暂无可用优惠券
				</view>
			</view>
			<view class="yhqlist" v-if="indexa==1">
				<view class="yhq-item" v-for="(item,key) in cuoponList" :key="key" v-if="item.status==1">
					<image src="../../static/yiyong.png" mode="" class="beijing"></image>
					<view class="yhq-left">
						<view class="money" v-if="item.backtype==0">
							<text>￥</text> {{item.deduct}}
						</view>
						<view class="money" v-if="item.backtype==1">
							{{item.discount}}<text>折</text>
						</view>
						<view class="money" v-if="item.backtype==2 && item.backmoney>0">
							<text>返</text>{{item.backmoney}} <text>余额</text>
						</view>
						<view class="money" v-if="item.backtype==2 && item.backcredit>0">
							<text>返</text>{{item.backcredit}} <text>积分</text>
						</view>
						<view class="money" v-if="item.backtype==2 && item.backredpack>0">
							<text>返</text>{{item.backredpack}} <text>现金</text>
						</view>
						<view class="tiaojian" v-if="item.enough>0">满￥{{item.enough}}可用</view>
						<view class="tiaojian" v-if="item.enough==0">购买立减</view>
					</view>
					<view class="yhq-right">
						<view class="title">{{item.couponname}}</view>
						<view class="bianhao">券编号：{{item.number}}</view>
						<view class="fanwei">
							使用范围：{{item.sysm}}
						</view>
						<view class="qixian" v-if="item.timelimit==1">有效期：{{item.timestart}} - {{item.timeend}}</view>
						<view class="qixian" v-else>有效期：长期有效</view>
					</view>
				</view>
				<view class="zanwu" v-if="bukeyong==0">
					暂无不可用优惠券
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index:0,
				source:0,
				xlist:[],
				checkid:0,
				indexa:0,
				weiyong:0,
				yiyong:0,
				shixiao:0,
				cuoponList:[],
				id:'207',
				money:200,
				keyong:0,
				bukeyong:0,
				yhqid:'0'
			};
		},
		onLoad(e) {
			if(e.source){
				this.source = e.source;
				if(this.$api.prePage() && this.$api.prePage().youhuiquanData.id){
					this.checkid = this.$api.prePage().youhuiquanData.id;
					this.xlist = this.$api.prePage().youhuiquanData;
				}
				uni.setNavigationBarTitle({
					title:'选择优惠券'
				})
				this.yhqid = e.yhqid;
			}else{
				uni.setNavigationBarTitle({
					title:'我的优惠券'
				})
			}
			if(uni.getStorageSync('cbe_token')){
				this.token = uni.getStorageSync('cbe_token');
				this.getYouhuiquanList();
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
			getYouhuiquanList(){
				uni.showLoading({
					title: '请稍后'
				});
				var money = uni.getStorageSync('cbe_shijiprice');
				if(this.source=="0"){
					var datas = {token:uni.getStorageSync('cbe_token')};
				}else{
					var datas = {token:uni.getStorageSync('cbe_token'),ids:this.id,money:money};
				}
				uni.request({
					url:uni.getStorageSync('hostname') + '?action=index/member/youhuiquan',
					data: datas,
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
					success: (resa) => {
						var one = resa.data;
						uni.hideLoading();
						if(one.code==0){
							this.cuoponList = one.list;
							if(this.source=="0"){
								this.weiyong = one.weiyong;
								this.yiyong  = one.yiyong;
								this.shixiao = one.shixiao;
							}else{
								this.keyong = one.keyong;
								this.bukeyong = one.bukeyong;
							}
							uni.removeStorageSync('cbe_shijiprice');
						}
					},
					fail: (resa) => {
						this.getYouhuiquanList();
					}
				})
			},
			toUse(id){
				uni.navigateTo({
					url:"/pages/product/list?yhqid="+id
				})
			},
			changeIndex(e){
				this.index = e;
			},
			changeIndexa(e){
				this.indexa = e;
			},
			xuanze(id){
				if(id.id==this.yhqid){
					this.quxiaoxuan();
					return false;
				}
				if(id.backtype==0){
					id.couponname = id.couponname + ",立减" + id.deduct + "元";
				}
				if(id.backtype==1){
					id.couponname = id.couponname + ",立享" + id.discount + "折优惠";
				}
				if(id.backtype==2 && id.backmoney>0){
					id.couponname = id.couponname + ",立返" + id.backmoney + "余额";
				}
				if(id.backtype==2 && id.backcredit>0){
					id.couponname = id.couponname + ",立返" + id.backcredit + "积分";
				}
				if(id.backtype==2 && id.backredpack>0){
					id.couponname = id.couponname + ",立返" + id.backredpack + "现金";
				}
				this.sji().youhuiquanData = id;
				this.sji().ckyh(id);
				uni.navigateBack({
					delta:1
				})
			},
			quxiaoxuan(){
				this.sji().youhuiquanData = {couponname:''};
				this.sji().ckyh('');
				uni.navigateBack({
					delta:1
				})
			},
			sji(){
				let pages = getCurrentPages();
				let prePage = pages[pages.length - 2];
				// #ifdef H5
				return prePage;
				// #endif
				return prePage.$vm;
			},
		}
	}
</script>

<style lang="scss">
page{
	background: #f4f4f4; width:100%; height:100%;
	.navtop{
		width:100%; height:100upx; background: #FFFFFF; border-top:1upx solid #f6f6f6;border-bottom:1upx solid #f6f6f6;
		.nav-item{
			float: left; font-size:28upx; color:#323232; text-align: center; width:250upx; line-height:100upx;
		}
		.nav-itema{
			float: left; font-size:28upx; color:#323232; text-align: center; width:375upx; line-height:100upx;
		}
		.active{
			color:#008ab0; background: url('../../static/xiahuaxian_b.png') no-repeat center bottom; background-size:25%;
		}
	}
	.zanwu{
		text-align: center; font-size:28upx; color:#808080; padding-top:240upx;
	}
	.yhqlist{
		width:750upx;
		.yhq-item{
			width:750upx; height:216upx; position: relative; margin-top: 25upx;
			.beijing{
				width:100%; height:100%; position: absolute;top:0;left:0; z-index:5;
			}
			.yhq-left{
				width:195upx; height:216upx; position:absolute; left:40upx; top:0; z-index:10;
				.money{
					color:#FFFFFF;font-size:55upx; text-align: center; padding-top: 45upx;
					text{
						font-size:26upx;
					}
				}
				.tiaojian{
					color:#ffffff; font-size:25upx; text-align: center; padding-top:10upx;
				}
			}
			.yhq-right{
				width:447upx; height:216upx; position: absolute; right:40upx; top:0upx; z-index:10;
				.title{
					color:#323232; font-size: 32upx; padding:25upx 0;
				}
				.bianhao,.fanwei,.qixian{
					font-size:22upx; color:#808080; line-height:30upx;
				}
			}
			.use{
				position: absolute; right:70upx; top:30upx; z-index:20; color:#008ab1; border:1upx solid #008ab1; font-size: 24upx; padding: 5upx 15upx; border-radius:30upx;
			}
			.xuan{
				width:38upx; height:38upx; position: absolute; right:70upx; top:30upx;z-index:20;
			}
		}
	}
}
</style>

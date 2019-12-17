<template>
	<view class="content">
		<view class="search">
			<input type="text" :value="keywords" placeholder="请输入关键字" class="input" @input="bss"  @confirm="quSousuo" confirm-type="搜索" />
			<image src="../../static/sousuo.png" mode="" class="sousuo" @tap="quSousuo"></image>
			<image src="../../static/erweima_s.png" mode="" class="erweimax" @tap="navTo('/pages/erweima/erweima')"></image>
		</view>
		<view class="sstishi">搜索“{{keywords?keywords:''}}”找到{{xwcount+cpcount}}个结果</view>
		<view class="navs">
			<view class="aa" :class="lety==0?'active':''" @tap="changea(0)">产品（{{cpcount}}）</view>
			<view class="aa" :class="lety==1?'active':''" @tap="changea(1)">文章（{{xwcount}}）</view>
			<view class="clear"></view>
		</view>
		<view class="chanpin" v-if="lety==0">
			<view class="goods-list" v-if="goodsList.length>0">
				<view v-for="(item, index) in goodsList" :key="index" class="goods-item" @click="navToDetailPage(item)">
					<view class="image-wrapper">
						<image :src="item.image" mode="aspectFill"></image>
					</view>
					<text class="pp" v-if="item.labelname">{{item.labelname[0]}}</text>
					<text class="pp" v-else>{{item.pp.name}}</text>
					<view class="title">{{item.title}}</view>
					<view class="huodong-box">
						<text v-if="item.shuifei<=0">含税</text><text v-if="item.issendfree==1">包邮</text><text v-if="item.cuxiao==1">促销</text>
					</view>
					<view class="shui" v-if="item.shuifei>0">预计税费：￥{{item.shuifei}}</view>
					<view class="shui" v-else>预计税费：含税</view>
					<view class="price-box">
						<text class="price">{{item.price}}</text>
						<image src="../../static/tab-cart-current.png" mode=""></image>
					</view>
				</view>
			</view>
			<uni-load-more  v-if="goodsList.length>0" :status="loadingType"></uni-load-more>
			<view class="nojieguo" v-else>请尝试输入不同的关键词来获取更多搜索产品结果</view>
		</view>
		<view class="wenzhang" v-if="lety==1">
			<view class="uni-list" v-if="listData.length>0">
			    <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value,key) in listData" :key="key" @click="goDetail(value)">
			        <view class="uni-media-list">
			            <image class="uni-media-list-logo" :src="value.resp_img"></image>
			            <view class="uni-media-list-body">
			                <view class="uni-media-list-text-top">{{value.article_title}}</view>
			                <view class="uni-media-list-text-bottom">
			                    <text>{{value.article_author}}</text>
			                    <text>{{value.published_at}}</text>
			                </view>
			            </view>
			        </view>
			    </view>
			</view>
			<view class="nojieguo" v-else>请尝试输入不同的关键词来获取更多搜索文章结果</view>
		</view>
	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	export default {
		components: {
			uniLoadMore	
		},
		data() {
			return {
				keywords:'',
				goodsList:[],
				cpcount:0,
				pn:0,
				lety:0,
				listData:[],
				xwcount:0,
				sslishi:[]
			}
		},
		onLoad(e) {
			if(e.keywords){
				this.keywords = e.keywords;
				this.getlist(e.keywords);
			}
		},
		methods:{
			bss(e){
				this.keywords = e.detail.value;
			},
			changea(id){
				this.lety = id;
			},
			quSousuo(){
				if(this.keywords!=''){
					this.getlist(this.keywords)
				}
			},
			navTo(url){
				if(!uni.getStorageSync('cbe_token')){
					url = '/pages/public/login';
				}
				uni.navigateTo({  
					url
				})  
			},
			getlist(keywords){
				if(keywords!=''){
					uni.request({
						url:uni.getStorageSync('hostname') + '?action=index/home/search',
						data: {keywords:keywords},
						method:'POST',
						dataType:'json',
						header: {'content-type' : 'application/x-www-form-urlencoded'},
						success: (resa) => {
							var one = resa.data;
							this.goodsList = one.cplist;
							this.cpcount   = one.cpcount;
							this.listData  = one.xwlist;
							this.xwcount   = one.xwcount;
							var sslishi = uni.getStorageSync("cbe_sslishi");
							var newsslist = [];
							newsslist[0] = keywords;
							var ii = 1;
							for(var i = 0;i<sslishi.length;i++){
								if(sslishi[i]!=keywords){
									newsslist[ii] = sslishi[i];
									ii++
								}
							}
							uni.setStorageSync('cbe_sslishi',newsslist);
						}
					})
				}
			},
			navToDetailPage(item){
				let id = item.id;
				if(uni.getStorageSync('cbe_token')){
					uni.navigateTo({
						url: `/pages/product/product?id=${id}&utoken=${uni.getStorageSync('cbe_token')}`
					})
				}else{
					uni.navigateTo({
						url: `/pages/product/product?id=${id}`
					})
				}
			},
			goDetail: function(e) {
			    let detail = {
			        author_name: e.article_author,
			        cover: e.resp_img,
			        id: e.id,
			        post_id: e.id,
			        published_at: e.published_at,
			        title: e.article_title
			    }
			    uni.navigateTo({
			        url: "/pages/news/details?detailDate=" + encodeURIComponent(JSON.stringify(detail))
			    })
			},
		}
	}
</script>

<style lang="scss">
	.clear{
		clear:both;
	}
	.content{
		padding-top:106upx;
		.chanpin{
			padding-top: 20upx;
		}
		.nojieguo{
			color:#808080; font-size: 28upx; text-align: center; padding-top: 60upx;
		}
	}
	.search{
		position: fixed;
		left: 0;
		top: var(--window-top);
		display: flex;
		width:100%;
		padding:0upx 30upx;
		border-bottom:1upx solid #f6f7f7; padding-bottom:20upx;
		input{
			width:600upx; height: 70upx; font-size:30upx; background:#f6f7f7;padding:0 20upx; border-radius:15upx;
		}
		.sousuo{
			width:34upx;height:34upx; position: absolute;left:575upx; z-index:999; top:20upx;
		}
		.erweimax{
			width:71upx;height:70upx; position: absolute; right:30upx;
		}
	}
	.sstishi{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		color: #808080; font-size: 28upx;
	}
	.navs{
		position: relative;
		display: flex;
		width: 100%;
		height: 80upx;
		background: #fff;
		z-index: 10;
		.aa{
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: center;
			height: 100%;
			font-size: 30upx;
			color: $font-color-dark;
			position: relative;
			&.active{
				color:#008ab0;
				&:after{
					content: '';
					position: absolute;
					left: 50%;
					bottom: 0;
					transform: translateX(-50%);
					width: 120upx;
					height: 0;
					border-bottom: 4upx solid #008ab0;
				}
			}
		}
	}
	/* 商品列表 */
	.goods-list{
		display:flex;
		flex-wrap:wrap;
		padding: 0 30upx;
		background: #fff;
		.goods-item{
			display:flex;
			flex-direction: column;
			width:329upx;
			padding-bottom:30upx;
			box-shadow: 2upx 2upx 5upx #cccccc;
			margin-bottom:40upx;
			&:nth-child(2n+1){
				margin-right: 4%;
			}
		}
		.image-wrapper{
			width: 100%;
			height: 329upx;
			overflow: hidden;
			image{
				width: 100%;
				height: 100%;
				opacity: 1;
			}
		}
		.pp{
			color:#808080; font-size:24upx; padding:0 20upx; padding-top:10upx;
		}
		.title{
			padding:0 20upx;
			padding-top:15upx;
			font-size: 26upx;
			color: #333333;
			line-height:35upx;
			height:80upx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
		.huodong-box{
			padding:0 20upx;
			text{
				color:#ff69b0; font-size:24upx; border:1upx solid #ff69b0; padding:0upx 15upx; margin-right:15upx; border-radius:30upx;
			}
		}
		.shui{
			font-size:22upx; color:#c2c2c2;padding:0 20upx; padding-top:10upx;
		}
		.price-box{
			padding:0 20upx; padding-top:20upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			font-size: 24upx;
			color:  #37b0c9;
			image{
				width:40upx; height:40upx;
			}
		}
		.price{
			font-size: 34upx;
			color: #37b0c9;
			line-height: 1;
			&:before{
				content: '￥';
				font-size: 34upx;
			}
		}
	}
	.uni-list {
	    background-color: #FFFFFF;
	    position: relative;
	    width: 100%;
	    display: flex;
	    flex-direction: column;
	}
	
	.uni-list:after {
	    position: absolute;
	    z-index: 10;
	    right: 0;
	    bottom: 0;
	    left: 0;
	    height: 1px;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #c8c7cc;
	}
	
	.uni-list::before {
	    position: absolute;
	    z-index: 10;
	    right: 0;
	    top: 0;
	    left: 0;
	    height: 1px;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #c8c7cc;
	}
	
	.uni-list-cell {
	    position: relative;
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	    align-items: center;
	}
	
	.uni-list-cell-hover {
	    background-color: #eee;
	}
	
	.uni-list-cell::after {
	    position: absolute;
	    z-index: 3;
	    right: 0;
	    bottom: 0;
	    left: 30upx;
	    height: 1px;
	    content: '';
	    -webkit-transform: scaleY(.5);
	    transform: scaleY(.5);
	    background-color: #c8c7cc;
	}
	
	.uni-list .uni-list-cell:last-child::after {
	    height: 0upx;
	}
	
	/* 图文列表 */
	.uni-media-list {
	    padding: 22upx 30upx;
	    box-sizing: border-box;
	    display: flex;
	    width: 100%;
	    flex-direction: row;
	}
	
	.uni-navigate-right.uni-media-list {
	    padding-right: 74upx;
	}
	
	.uni-pull-right {
	    flex-direction: row-reverse;
	}
	
	.uni-pull-right>.uni-media-list-logo {
	    margin-right: 0upx;
	    margin-left: 20upx;
	}
	
	.uni-media-list-logo image {
	    height: 100%;
	    width: 100%;
	}
	
	
	.uni-media-list-text-bottom {
	    width: 100%;
	    line-height: 30upx;
	    font-size: 26upx;
	    color: #8f8f94;
	}
	
	.uni-media-list-logo {
	    width: 180upx;
	    height: 140upx;
	    margin-right: 20upx;
	}
	
	.uni-media-list-body {
	    display: flex;
	    flex: 1;
	    flex-direction: column;
	    justify-content: space-between;
	    align-items: flex-start;
	    overflow: hidden;
	    height: auto;
	}
	
	.uni-media-list-text-top {
	    width: 100%;
	    line-height: 36upx;
	    font-size: 30upx;
	    height: 74upx;
	    font-size: 28upx;
	    overflow: hidden;
	}
	
	.uni-media-list-text-bottom {
	    display: flex;
	    flex-direction: row;
	    justify-content: space-between;
	}
</style>

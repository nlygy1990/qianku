<template>
    <view>
        <view class="banner">
            <image class="banner-img" :src="banner.cover"></image>
            <view class="banner-title">{{banner.title}}</view>
        </view>
        <view class="article-meta">
            <text class="article-author">{{banner.author_name}}</text>
            <text class="article-text">发表于</text>
            <text class="article-time">{{banner.published_at}}</text>
        </view>
        <view class="article-content">
            <rich-text :nodes="htmlString"></rich-text>
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                title: 'list-triplex-row',
                banner: {},
                htmlString: ""
            }
        },
        onShareAppMessage() {
            return {
                title: this.banner.title,
                path: '/pages/news/details?detailDate=' + JSON.stringify(this.banner)
            }
        },
        onLoad(event) {
            // 目前在某些平台参数会被主动 decode，暂时这样处理。
            try {
                this.banner = JSON.parse(decodeURIComponent(event.detailDate));
            } catch (error) {
                this.banner = JSON.parse(event.detailDate);
            }
            this.getDetail();
            uni.setNavigationBarTitle({
                title: this.banner.title
            });
        },
        methods: {
            getDetail() {
                uni.request({
					url: uni.getStorageSync('hostname') + '?action=index/home/news_detail',
					data: {id:this.banner.id},
					method:'POST',
					dataType:'json',
					header: {'content-type' : 'application/x-www-form-urlencoded'},
                    success: (data) => {
                        if (data.statusCode == 200) {
                            this.htmlString = data.data.one.article_content.replace(/\\/g, "").replace(/<img/g,"<img style=\"display:none1;\"");
                        }
                    },
                    fail: () => {
                        console.log('fail');
                    }
                })
            }
        }
    }
</script>

<style>
    view {
        font-size: 28upx;
        line-height: 1.8;
    }

    .banner {
        height: 360upx;
        overflow: hidden;
        position: relative;
        background-color: #ccc;
    }

    .banner-img {
        width: 100%;
    }

    .banner-title {
        max-height: 84upx;
        overflow: hidden;
        position: absolute;
        left: 30upx;
        bottom: 30upx;
        width: 90%;
        font-size: 32upx;
        font-weight: 400;
        line-height: 42upx;
        color: white;
        z-index: 11;
    }

    .article-meta {
        padding: 20upx 40upx;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        color: gray;
    }

    .article-text {
        font-size: 26upx;
        line-height: 50upx;
        margin: 0 20upx;
    }

    .article-author,
    .article-time {
        font-size: 30upx;
    }

    .article-content {
        padding: 0 30upx;
        overflow: hidden;
        font-size: 30upx;
        margin-bottom: 30upx;
    }
</style>
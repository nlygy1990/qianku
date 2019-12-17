/* 用户 */
const userInfo = {
	status: 1,
	data: {
		id: 1,
		mobile: 18888888888,
		nickname: 'Leo yo',
		portrait: 'http://img.61ef.cn/news/201409/28/2014092805595807.jpg'
	},
	msg: '提示'
}
/* 首页轮播图 */
const carouselList = []
/* 商品列表 */
const goodsLista = [];
const goodsList = []
const cartList = [];
const detailData = [];
const shareList = [{
		type: 1,
		icon: 'https://wxapp.tegou100.com/static/images/pyq.png',
		text: '朋友圈'
	},
	{
		type: 2,
		icon: 'https://wxapp.tegou100.com/static/images/wxhy.png',
		text: '好友'
	},
	{
		type: 3,
		icon: 'https://wxapp.tegou100.com/static/images/cpewm.png',
		text: '产品二维码'
	},
	{
		type: 4,
		icon: 'https://wxapp.tegou100.com/static/images/fzlj.png',
		text: '复制链接'
	}
]
const lazyLoadList = [];

const orderList = [];
const cateList = [];

export default {
	carouselList,
	cartList,
	detailData,
	lazyLoadList,
	userInfo,
	shareList,
	goodsList,
	orderList,
	cateList
}

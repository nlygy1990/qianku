(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/product/product"],{"292b":function(t,e,n){"use strict";(function(t){n("7086"),n("921b");i(n("66fd"));var e=i(n("af63"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"3e48":function(t,e,n){"use strict";var i=n("f3c7"),o=n.n(i);o.a},7008:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("a34a")),o=n("2f62");function a(t){return t&&t.__esModule?t:{default:t}}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e,n,i,o,a,s){try{var c=t[a](s),r=c.value}catch(u){return void n(u)}c.done?e(r):Promise.resolve(r).then(i,o)}function u(t){return function(){var e=this,n=arguments;return new Promise(function(i,o){var a=t.apply(e,n);function s(t){r(a,i,o,s,c,"next",t)}function c(t){r(a,i,o,s,c,"throw",t)}s(void 0)})}}var l=function(){return n.e("components/share").then(n.bind(null,"c317"))},d=function(){return n.e("components/uni-popup/uni-popup").then(n.bind(null,"0e67"))},h=function(){return n.e("components/uni-number-box/uni-number-box").then(n.bind(null,"6c79"))},g={components:{share:l,uniNumberBox:h,uniPopup:d},data:function(){return{cartcount:0,kjshuoming:"",type:"",smheight:"",isShoucang:0,nums:1,specClass:"none",specSelected:[],favorite:!0,shareList:[],youfei:[],token:"",utoken:"",detail:[],url:"",taozhuang:'<div style="font-size:13px; color:#333333; line-height:20px;">ageLOC洁面调理摩丝全新高科技泡沫配方，洁肤爽肤二合一，调节肌肤回复到酸碱平衡状态，同时净化、滋润肌肤，无需再添加化妆水。 当然，根据地域气候的差异，以及不同肌肤的需求，仍可根据肌肤自身需求搭配合适的化妆水，洁肤爽肤二合一，调节肌肤回复到酸碱平衡状态，同时净化、滋润肌肤，无需再添加化妆水。</div>',kjshuominga:'<div style="font-size:16px;text-align:center;font-weight:600;line-height:30px;padding-top:10px">为了更好的服务您，请点击授权</div><div  style="font-size:12px;text-align:center;line-height:20px">授权仅包含昵称和头像信息</div>'}},onLoad:function(){var e=u(i.default.mark(function e(n){var o,a,s;return i.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=t.getSystemInfoSync(),a=o.windowHeight,this.smheight="max-height:"+(a-60)+"px",s=n.id,s&&(this.token=t.getStorageSync("cbe_token"),this.getDetail(s)),n.utoken&&(this.utoken=n.utoken),e.next=8,this.$api.json("shareList");case 8:this.shareList=e.sent,t.getStorageSync("cbe_token")?this.url="/pages/product/product?id="+this.detail.id+"&utoken="+t.getStorageSync("cbe_token"):this.url="/pages/product/product?id="+this.detail.id,t.hideShareMenu();case 11:case"end":return e.stop()}},e,this)}));function n(t){return e.apply(this,arguments)}return n}(),onShareAppMessage:function(e){return t.getStorageSync("cbe_token")?{title:this.detail.title,path:"/pages/product/product?id="+this.detail.id+"&utoken="+t.getStorageSync("cbe_token"),imageUrl:this.detail.images[0]}:{title:this.detail.title,path:"/pages/product/product?id="+this.detail.id,imageUrl:this.detail.images[0]}},methods:s({},(0,o.mapMutations)(["login"]),{goTop:function(){t.pageScrollTo({scrollTop:0})},getDetail:function(e){var n=this;t.showLoading({title:"加载中",mask:!0}),t.request({url:t.getStorageSync("hostname")+"?action=index/product/details",data:{id:e,token:t.getStorageSync("cbe_token")},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.hideLoading(),n.imgList=e.data.data.images,n.detail=e.data.data,t.setNavigationBarTitle({title:e.data.data.title}),n.isShoucang=e.data.data.isShoucang,n.nums=e.data.data.minbuy,n.kjshuoming=e.data.shuoming.content,n.cartcount=e.data.data.cartcount,n.youfei=e.data.youfei;var i="";e.data.data.guige.forEach(function(t){var e=!0,o=!1,a=void 0;try{for(var s,c=t.child[Symbol.iterator]();!(e=(s=c.next()).done);e=!0){var r=s.value;if(r.specid===t.id){n.$set(r,"selected",!0),n.specSelected.push(r),i+=r.id+"_";break}}}catch(u){o=!0,a=u}finally{try{e||null==c.return||c.return()}finally{if(o)throw a}}}),i=i.substr(0,i.length-1),n.checkprice(i)}})},shuifeishuoming:function(){this.togglePopup("middle-list")},togglePopup:function(t){this.type=t},shoucang:function(){var e=this;if(t.getStorageSync("cbe_token")){var n=this.detail.id;t.request({url:t.getStorageSync("hostname")+"?action=index/product/shoucang",data:{id:n,token:t.getStorageSync("cbe_token")},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){var i=n.data;0==i.code&&(0==e.isShoucang?e.isShoucang=1:e.isShoucang=0,t.showToast({title:i.msg,icon:"success",mask:!0,duration:3e3}))}})}else t.showModal({title:"温馨提示",content:"您还没有登录，无法进行收藏操作，是否登录？",confirmColor:"#008AB0",confirmText:"立即登录",cancelText:"再看看",success:function(e){e.confirm&&t.navigateTo({url:"/pages/public/login"})}})},changeNum:function(t){this.nums=t},toggleSpec:function(){var t=this;"show"===this.specClass?(this.specClass="hide",setTimeout(function(){t.specClass="none"},250)):"none"===this.specClass&&(this.specClass="show")},selectSpec:function(t,e){for(var n=this.detail.guige,i="",o=0;o<n.length;o++)if(n[o].id==e)for(var a=0;a<n[o].child.length;a++)n[o].child[a]&&(n[o].child[a].id==t?this.$set(n[o].child[a],"selected",!0):this.$set(n[o].child[a],"selected",!1));this.specSelected=[];for(o=0;o<n.length;o++)for(a=0;a<n[o].child.length;a++)1==n[o].child[a].selected&&(this.specSelected.push(n[o].child[a]),i+=n[o].child[a].id+"_");i=i.substr(0,i.length-1),this.checkprice(i)},checkprice:function(e){var n=this;""!=e&&t.request({url:t.getStorageSync("hostname")+"?action=index/product/guige",data:{ids:e},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var e=t.data;0==e.code&&(n.detail.marketprice=e.one.marketprice,n.detail.productprice=e.one.productprice,n.detail.total=e.one.stock,n.detail.goodssn=e.one.productsn)}})},share:function(){t.getStorageSync("cbe_token")?this.$refs.share.toggleMask():this.togglePopup("middle-lista")},toFavorite:function(){this.favorite=!this.favorite},addCart:function(){var e=this;if(this.detail.total<=0)return t.showToast({title:"库存不足",icon:"none"}),!1;if(this.detail.total<this.nums)return t.showToast({title:"库存不足",icon:"none"}),!1;var n=t.getStorageSync("cbe_token");if(n){var i=this.detail.id,o="";if(this.specSelected.length>0){for(var a="",s=0;s<this.specSelected.length;s++)a+=this.specSelected[s].id+"_";o=a.substr(0,a.length-1)}t.request({url:t.getStorageSync("hostname")+"?action=index/cart/addcart",data:{id:i,guige:o,nums:this.nums,token:t.getStorageSync("cbe_token"),utoken:this.utoken},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){t.hideLoading();var i=n.data;e.cartcount=Number(e.cartcount)+Number(e.nums),0==i.code?(t.showToast({title:i.msg,icon:"success",mask:!0,duration:3e3}),e.toggleSpec()):t.showToast({title:i.msg,icon:"none"})},fail:function(e){t.hideLoading()}})}else{t.showToast({title:"尚未登录",icon:"none"});setTimeout(function(){t.navigateTo({url:"/pages/public/login"})},1e3)}},buy:function(){if(this.detail.total<=0)return t.showToast({title:"库存不足",icon:"none"}),!1;if(this.detail.total<this.nums)return t.showToast({title:"库存不足",icon:"none"}),!1;var e=t.getStorageSync("cbe_token");if(e){var n=this.detail.id,i="";if(this.specSelected.length>0){for(var o="",a=0;a<this.specSelected.length;a++)o+=this.specSelected[a].id+"_";i=o.substr(0,o.length-1)}var s=[{id:n,guige:i,nums:this.nums,utoken:this.utoken}];t.setStorageSync("buyarr",s);var c="/pages/order/createOrder";t.navigateTo({url:c})}else{t.showToast({title:"未登录或无权限",icon:"none"});setTimeout(function(){t.navigateTo({url:"/pages/public/login"})},1e3)}},stopPrevent:function(){},navToDetailPage:function(e){t.navigateTo({url:e})},getuserinfo:function(e){var n=this;"getUserInfo:ok"==e.detail.errMsg&&(t.showLoading({title:"正在授权",mask:!0}),t.login({provider:"weixin",success:function(e){if("login:ok"==e.errMsg){var i=e.code;t.getUserInfo({provider:"weixin",lang:"zh_CN",success:function(e){var o=this;t.request({url:t.getStorageSync("hostname")+"?action=index/login/wechatlogin&code="+i,data:e,method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){t.hideLoading();var i=e.data;if(0==i.code){t.setStorageSync("cbe_token",i.token),t.showToast({title:i.msg,icon:"success",mask:!0,duration:3e3}),n.login(i.data);setTimeout(function(){n.togglePopup("")},3e3)}else if(1==i.code){t.setStorageSync("cbe_retoken",i.token),t.showToast({title:i.msg,icon:"success",mask:!0,duration:3e3});setTimeout(function(){t.navigateTo({url:"/pages/public/zhecexieyi"})},2e3)}else t.showToast({title:i.msg,icon:"none"}),o.logining=!1}})}})}}}))}})};e.default=g}).call(this,n("543d")["default"])},af63:function(t,e,n){"use strict";n.r(e);var i=n("f87c"),o=n("b4e0");for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);n("3e48");var s=n("2877"),c=Object(s["a"])(o["default"],i["a"],i["b"],!1,null,null,null);e["default"]=c.exports},b4e0:function(t,e,n){"use strict";n.r(e);var i=n("7008"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=o.a},f3c7:function(t,e,n){},f87c:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})}},[["292b","common/runtime","common/vendor"]]]);
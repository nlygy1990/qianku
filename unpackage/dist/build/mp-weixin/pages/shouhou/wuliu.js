(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shouhou/wuliu"],{"2df0":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var c=function(){return e.e("components/uni-steps/uni-steps").then(e.bind(null,"ddc4"))},o={components:{uniSteps:c},data:function(){return{one:[],active:1,list2:[]}},onLoad:function(n){var e=this;n.ordersn&&(t.showLoading({title:"请稍后"}),t.request({url:t.getStorageSync("hostname")+"?action=index/order/refund_delivery",data:{ordersn:n.ordersn,id:n.id,token:t.getStorageSync("cbe_token")},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){t.hideLoading();var c=n.data;e.list2=c.list,e.active=0}}))},methods:{change:function(){this.active<this.list1.length-1?this.active+=1:this.active=0}}};n.default=o}).call(this,e("543d")["default"])},"478d":function(t,n,e){"use strict";var c=function(){var t=this,n=t.$createElement;t._self._c},o=[];e.d(n,"a",function(){return c}),e.d(n,"b",function(){return o})},"4c8f":function(t,n,e){"use strict";(function(t){e("7086"),e("921b");c(e("66fd"));var n=c(e("b612"));function c(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},"51c8":function(t,n,e){},"70ca":function(t,n,e){"use strict";e.r(n);var c=e("2df0"),o=e.n(c);for(var i in c)"default"!==i&&function(t){e.d(n,t,function(){return c[t]})}(i);n["default"]=o.a},b612:function(t,n,e){"use strict";e.r(n);var c=e("478d"),o=e("70ca");for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);e("cc6d");var u=e("2877"),a=Object(u["a"])(o["default"],c["a"],c["b"],!1,null,null,null);n["default"]=a.exports},cc6d:function(t,n,e){"use strict";var c=e("51c8"),o=e.n(c);o.a}},[["4c8f","common/runtime","common/vendor"]]]);
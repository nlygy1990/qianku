(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shouhou-jihui"],{"0cd8":function(t,e,i){"use strict";i.r(e);var n=i("3357"),a=i.n(n);for(var s in n)"default"!==s&&function(t){i.d(e,t,function(){return n[t]})}(s);e["default"]=a.a},"1d93":function(t,e,i){"use strict";i.r(e);var n=i("c94e"),a=i("0cd8");for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);i("7547");var o=i("2877"),r=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"79445161",null);e["default"]=r.exports},3357:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("7f7f");var n={data:function(){return{index:0,kaika:!1,expresssn:"",expressid:"",expresscom:"",array:[],id:""}},onLoad:function(t){var e=this;t.id&&(this.id=t.id,uni.request({url:uni.getStorageSync("hostname")+"?action=index/order/getExpresscom",data:{id:t.id,token:uni.getStorageSync("cbe_token")},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var i=t.data;e.array=i.data}}))},methods:{bindPickerChange:function(t){this.index=t.target.value;var e=t.target.value;this.expresscom=this.array[e].name,this.expressid=this.array[e].id,this.kaika=!0},binput:function(t){this.expresssn=t.detail.value},confirm:function(){return""==this.expressid?(uni.showToast({title:"请选择快递/物流公司",icon:"none"}),!1):""==this.expresssn?(uni.showToast({title:"请填写快递单号",icon:"none"}),!1):(uni.showLoading({title:"正在提交"}),void uni.request({url:uni.getStorageSync("hostname")+"?action=index/order/jihui",data:{id:this.id,expressid:this.expressid,expresssn:this.expresssn,token:uni.getStorageSync("cbe_token")},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){uni.hideLoading();var e=t.data;if(0==e.code){uni.showToast({title:e.msg,icon:"success",mask:!0,duration:3e3});setTimeout(function(){uni.navigateBack({delta:1})},2e3)}else uni.showToast({title:e.msg,icon:"none"})}}))}}};e.default=n},7547:function(t,e,i){"use strict";var n=i("a59f"),a=i.n(n);a.a},a59f:function(t,e,i){var n=i("e6a6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("91374d64",n,!0,{sourceMap:!1,shadowMode:!1})},c94e:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"wxts"},[t._v("温馨提示：")]),i("v-uni-view",{staticClass:"wxtsa"},[t._v("1、请准备好退货商品按以下收货地址发起退货：【黄小姐，15036963269，广东省广州市南沙 大院4街道302, 520000】")]),i("v-uni-view",{staticClass:"wxtsb"},[t._v("2、请正确填写快递公司和快递单号，以便客服快速查询进度。")]),i("v-uni-view",{staticClass:"row b-b a"},[i("v-uni-text",{staticClass:"tit"},[t._v("快递/物流公司：")]),i("v-uni-picker",{attrs:{value:t.index,range:t.array,"range-key":"name"},on:{change:function(e){e=t.$handleEvent(e),t.bindPickerChange(e)}}},[i("v-uni-text",{class:t.kaika?"input":"placeholder"},[t._v(t._s(t.expresscom?t.expresscom:"请选择")+" >")])],1)],1),i("v-uni-view",{staticClass:"row b-b"},[i("v-uni-text",{staticClass:"tit"},[t._v("快递单号：")]),i("v-uni-input",{staticClass:"input",attrs:{type:"text",value:t.expresssn,placeholder:"请填写快递单号"},on:{input:function(e){e=t.$handleEvent(e),t.binput(e)}}})],1),i("v-uni-button",{staticClass:"add-btn",on:{click:function(e){e=t.$handleEvent(e),t.confirm(e)}}},[t._v("提交")])],1)},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},e6a6:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-79445161]{background:#f4f4f4;width:100%;height:100%}.wxts[data-v-79445161]{font-size:%?24?%;color:#37b0c9;padding:%?40?% %?40?%;padding-bottom:%?20?%}.wxtsa[data-v-79445161],.wxtsb[data-v-79445161]{font-size:%?24?%;color:grey;padding:0 %?40?%;line-height:%?40?%}.wxtsb[data-v-79445161]{padding-top:%?5?%}.a[data-v-79445161]{margin-top:%?40?%}.row[data-v-79445161]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;padding:0 %?40?%;height:%?110?%;background:#fff}.row .tit[data-v-79445161]{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;width:%?200?%;font-size:%?28?%;color:#333}.row uni-picker[data-v-79445161]{float:right;text-align:right;position:absolute;right:%?40?%}.row .input[data-v-79445161]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?28?%;color:#333!important;text-align:right}.row .placeholder[data-v-79445161]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?28?%;color:grey;text-align:right}.add-btn[data-v-79445161]{position:fixed;left:%?40?%;right:%?40?%;bottom:%?60?%;z-index:95;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:%?670?%;height:%?80?%;font-size:%?28?%;color:#fff;background-color:#008ab0;border-radius:%?10?%}body.?%PAGE?%[data-v-79445161]{background:#f4f4f4}',""])}}]);
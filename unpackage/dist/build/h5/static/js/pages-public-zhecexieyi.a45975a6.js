(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-zhecexieyi"],{4278:function(t,n,e){"use strict";e.r(n);var a=e("4b23"),i=e("d579");for(var o in i)"default"!==o&&function(t){e.d(n,t,function(){return i[t]})}(o);e("865b");var r=e("2877"),u=Object(r["a"])(i["default"],a["a"],a["b"],!1,null,"0d187f16",null);n["default"]=u.exports},"4b23":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"contt"},[e("v-uni-rich-text",{attrs:{nodes:t.nodes}})],1),e("v-uni-view",{staticClass:"bbb"},[e("v-uni-view",{staticClass:"jujue",on:{click:function(n){n=t.$handleEvent(n),t.jujue(n)}}},[t._v("拒绝")]),e("v-uni-view",{staticClass:"tongyi",on:{click:function(n){n=t.$handleEvent(n),t.tongyi(n)}}},[t._v("同意")])],1)],1)},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},"865b":function(t,n,e){"use strict";var a=e("8a6d"),i=e.n(a);i.a},"8a6d":function(t,n,e){var a=e("a955");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("0222057a",a,!0,{sourceMap:!1,shadowMode:!1})},a248:function(t,n,e){"use strict";var a=e("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("cebc")),o=e("2f62"),r={data:function(){return{nodes:""}},onLoad:function(){this.getpage()},methods:(0,i.default)({},(0,o.mapMutations)(["zhecexieyi"]),{jujue:function(){uni.navigateBack({delta:1})},tongyi:function(){uni.redirectTo({url:"register"})},getpage:function(){var t=this;uni.request({url:uni.getStorageSync("hostname")+"?action=index/page/zhucexieyi",data:{token:""},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){var e=n.data;t.nodes=e.one.content,uni.setNavigationBarTitle({title:e.one.title})}})}})};n.default=r},a955:function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-0d187f16]{background:#fff}.container[data-v-0d187f16]{position:relative;background:#fff}.container .contt[data-v-0d187f16]{width:%?690?%;margin:%?20?% %?30?%;padding-bottom:%?120?%}.container .bbb[data-v-0d187f16]{position:fixed;bottom:%?30?%;z-index:999;width:100vw;background:#fff;padding-top:%?30?%}.container .bbb uni-view[data-v-0d187f16]{float:left;width:%?320?%;height:%?80?%;text-align:center;line-height:%?80?%;font-size:%?30?%}.container .bbb .jujue[data-v-0d187f16]{margin-left:%?40?%;border:%?1?% solid #008ab0;color:#008ab0;border-radius:%?50?%;background:#fff}.container .bbb .tongyi[data-v-0d187f16]{margin-left:%?30?%;border:%?1?% solid #008ab0;color:#fff;border-radius:%?50?%;background:#008ab0}body.?%PAGE?%[data-v-0d187f16]{background:#fff}',""])},d579:function(t,n,e){"use strict";e.r(n);var a=e("a248"),i=e.n(a);for(var o in a)"default"!==o&&function(t){e.d(n,t,function(){return a[t]})}(o);n["default"]=i.a}}]);
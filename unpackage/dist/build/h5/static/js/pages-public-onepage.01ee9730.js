(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-public-onepage"],{"449a":function(t,n,a){var e=a("627a");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var i=a("4f06").default;i("5b4f0314",e,!0,{sourceMap:!1,shadowMode:!1})},"627a":function(t,n,a){n=t.exports=a("2350")(!1),n.push([t.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-720a0102]{background:#fff}.container[data-v-720a0102]{position:relative;background:#fff}.container .contt[data-v-720a0102]{width:%?690?%;margin:%?20?% %?30?%;padding-bottom:%?120?%}.container .bbb[data-v-720a0102]{position:fixed;bottom:%?30?%;z-index:999;width:100vw;background:#fff;padding-top:%?30?%}.container .bbb uni-view[data-v-720a0102]{float:left;width:%?320?%;height:%?80?%;text-align:center;line-height:%?80?%;font-size:%?30?%}.container .bbb .jujue[data-v-720a0102]{margin-left:%?40?%;border:%?1?% solid #008ab0;color:#008ab0;border-radius:%?50?%;background:#fff}.container .bbb .tongyi[data-v-720a0102]{margin-left:%?30?%;border:%?1?% solid #008ab0;color:#fff;border-radius:%?50?%;background:#008ab0}body.?%PAGE?%[data-v-720a0102]{background:#fff}',""])},6622:function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"container"},[a("v-uni-view",{staticClass:"contt"},[a("v-uni-rich-text",{attrs:{nodes:t.nodes}})],1)],1)},i=[];a.d(n,"a",function(){return e}),a.d(n,"b",function(){return i})},"8f12":function(t,n,a){"use strict";var e=a("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(a("cebc")),o=a("2f62"),r={data:function(){return{nodes:""}},onLoad:function(t){this.getpage(t.id)},methods:(0,i.default)({},(0,o.mapMutations)(["zhecexieyi"]),{jujue:function(){uni.navigateBack({delta:1})},tongyi:function(){uni.redirectTo({url:"register"})},getpage:function(t){var n=this;uni.request({url:uni.getStorageSync("hostname")+"?action=index/page/onepage",data:{id:t},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var a=t.data;n.nodes=a.one.content,uni.setNavigationBarTitle({title:a.one.title})}})}})};n.default=r},b57b:function(t,n,a){"use strict";a.r(n);var e=a("8f12"),i=a.n(e);for(var o in e)"default"!==o&&function(t){a.d(n,t,function(){return e[t]})}(o);n["default"]=i.a},d22d:function(t,n,a){"use strict";a.r(n);var e=a("6622"),i=a("b57b");for(var o in i)"default"!==o&&function(t){a.d(n,t,function(){return i[t]})}(o);a("de2a");var r=a("2877"),d=Object(r["a"])(i["default"],e["a"],e["b"],!1,null,"720a0102",null);n["default"]=d.exports},de2a:function(t,n,a){"use strict";var e=a("449a"),i=a.n(e);i.a}}]);
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shenfen/shenfen"],{"44d0":function(e,n,t){"use strict";t.r(n);var o=t("a225"),a=t("b04f");for(var c in a)"default"!==c&&function(e){t.d(n,e,function(){return a[e]})}(c);t("74a1");var r=t("2877"),u=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports},"74a1":function(e,n,t){"use strict";var o=t("7ee1"),a=t.n(o);a.a},"7ee1":function(e,n,t){},a225:function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a})},b04f:function(e,n,t){"use strict";t.r(n);var o=t("fd9a"),a=t.n(o);for(var c in o)"default"!==c&&function(e){t.d(n,e,function(){return o[e]})}(c);n["default"]=a.a},e59c:function(e,n,t){"use strict";(function(e){t("7086"),t("921b");o(t("66fd"));var n=o(t("44d0"));function o(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},fd9a:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;t("2f62");var o={data:function(){return{token:"",memberInfo:[]}},onShow:function(){if(e.getStorageSync("cbe_token"))this.token=e.getStorageSync("cbe_token"),this.getMemberInfo();else{e.showToast({title:"未登录或无权限",icon:"none"});setTimeout(function(){e.navigateBack({delta:1})},1e3)}},methods:{navTo:function(n){e.navigateTo({url:n})},getMemberInfo:function(){var n=this;e.request({url:e.getStorageSync("hostname")+"?action=index/member/info",data:{token:e.getStorageSync("cbe_token")},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data;0==t.code&&(t.one["phone"]=t.one.mobile.substr(0,3)+"****"+t.one.mobile.substr(7),t.one.CNcardNo&&(t.one["CNcardNo"]=t.one.CNcardNo.replace(/^(.{4})(?:\d+)(.{4})$/,"$1******$2")),n.memberInfo=t.one)}})}}};n.default=o}).call(this,t("543d")["default"])}},[["e59c","common/runtime","common/vendor"]]]);
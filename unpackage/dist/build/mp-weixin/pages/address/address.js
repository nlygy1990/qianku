(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/address"],{"26c5":function(e,t,n){"use strict";var a=n("df20"),s=n.n(a);s.a},"30da":function(e,t,n){"use strict";(function(e){n("7086"),n("921b");a(n("66fd"));var t=a(n("9ff6"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"5e3e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{source:0,addressList:[]}},onShow:function(){if(e.getStorageSync("cbe_token"))this.token=e.getStorageSync("cbe_token"),this.getAddressList();else{e.showToast({title:"未登录或无权限",icon:"none"});setTimeout(function(){e.navigateBack({delta:1})},1e3)}},onLoad:function(e){e.source&&(this.source=e.source)},methods:{checkAddress:function(t){1==this.source&&(this.$api.prePage().addressData=t,e.navigateBack())},del:function(t){var n=this;e.showModal({title:"温馨提示",confirmText:"删除",content:"确定要删除该地址信息吗？",success:function(a){a.confirm&&(e.showLoading({title:"正在处理",mask:!0}),e.request({url:e.getStorageSync("hostname")+"?action=index/member/addressDel",data:{token:e.getStorageSync("cbe_token"),id:t},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.hideLoading();var a=t.data;0==a.code?(e.showToast({title:a.msg,icon:"success",mask:!0,duration:3e3}),n.getAddressList()):e.showToast({title:a.msg,icon:"none"})}}))}})},moren:function(t,n,a){if(1==n)return!1;var s=this;e.showModal({title:"温馨提示",confirmText:"设置",content:"确定要设置该地址为默认地址吗？",success:function(n){n.confirm&&(e.showLoading({title:"正在处理",mask:!0}),e.request({url:e.getStorageSync("hostname")+"?action=index/member/addressMoren",data:{token:e.getStorageSync("cbe_token"),id:t},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){e.hideLoading();var n=t.data;0==n.code?(e.showToast({title:n.msg,icon:"success",mask:!0,duration:3e3}),s.addressList=[],s.getAddressList()):e.showToast({title:n.msg,icon:"none"})}}))}})},fahuiaa:function(t,n){var a=JSON.parse(t),s=JSON.parse(n);this.sji().addressData=a,this.sji().goumaiData=s,e.navigateBack({delta:1})},sji:function(){var e=getCurrentPages(),t=e[e.length-3];return t.$vm},addAddress:function(t,n){0==this.source?e.navigateTo({url:"/pages/address/addressManage?type=".concat(t,"&data=").concat(JSON.stringify(n))}):e.navigateTo({url:"/pages/address/addressManage?source=1&type=".concat(t,"&data=").concat(JSON.stringify(n))})},getAddressList:function(){var t=this;e.request({url:e.getStorageSync("hostname")+"?action=index/member/addressList",data:{token:e.getStorageSync("cbe_token")},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var n=e.data;0==n.code&&(t.addressList=n.data)}})}}};t.default=n}).call(this,n("543d")["default"])},6729:function(e,t,n){"use strict";n.r(t);var a=n("5e3e"),s=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=s.a},"9ff6":function(e,t,n){"use strict";n.r(t);var a=n("b12c"),s=n("6729");for(var o in s)"default"!==o&&function(e){n.d(t,e,function(){return s[e]})}(o);n("26c5");var c=n("2877"),i=Object(c["a"])(s["default"],a["a"],a["b"],!1,null,null,null);t["default"]=i.exports},b12c:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c},s=[];n.d(t,"a",function(){return a}),n.d(t,"b",function(){return s})},df20:function(e,t,n){}},[["30da","common/runtime","common/vendor"]]]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-anquan"],{"3b6f":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"ctops"},[e._v("为保证您的账号安全，请验证后再进行下一步操作")]),n("v-uni-view",{staticClass:"list-cell b-b"},[n("v-uni-text",{staticClass:"cell-tit"},[e._v("使用手机"+e._s(e.memberInfo.phone?e.memberInfo.phone:"")+"验证")])],1),n("v-uni-view",{staticClass:"input-item"},[n("v-uni-input",{attrs:{type:"number",value:e.phonecode,placeholder:"请输入手机验证码","placeholder-style":"color:#cbcbcb",maxlength:"6","data-key":"phonecode"},on:{input:function(t){t=e.$handleEvent(t),e.inputChange(t)},confirm:function(t){t=e.$handleEvent(t),e.toNext(t)}}}),n("v-uni-text",{on:{click:function(t){t=e.$handleEvent(t),e.getPhoneCode(t)}}},[e._v(e._s(e.getcode))])],1),n("v-uni-button",{staticClass:"confirm-btn",attrs:{disabled:e.logining},on:{click:function(t){t=e.$handleEvent(t),e.toNext(t)}}},[e._v("确定")])],1)},o=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return o})},"3f8c":function(e,t,n){"use strict";n.r(t);var i=n("3b6f"),o=n("df45");for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);n("99d5");var c=n("2877"),s=Object(c["a"])(o["default"],i["a"],i["b"],!1,null,"7f888adc",null);t["default"]=s.exports},4900:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;n("2f62");var i={data:function(){return{mobile:"",phonecode:"",phonetoken:"",logining:!1,token:"",scode:!1,getcode:"获取验证码",memberInfo:[],keywords:"",val:""}},onLoad:function(e){this.keywords=e.keywords,this.val=e.val;var t=uni.getStorageSync("cbe_token");if(t)this.getMember();else{uni.showToast({title:"未登录或无权限",icon:"none"});setTimeout(function(){uni.navigateBack({delta:1})},1e3)}},methods:{inputChange:function(e){var t=e.currentTarget.dataset.key;this[t]=e.detail.value},toNext:function(){var e=this;if(this.logining=!0,!this.phonecode)return uni.showToast({title:"手机验证码不能为空",icon:"none"}),this.logining=!1,!1;uni.showLoading({title:"正在验证",mask:!0}),uni.request({url:uni.getStorageSync("hostname")+"?action=index/member/anquanrenzheng",data:{token:uni.getStorageSync("cbe_token"),phonecode:this.phonecode,phonetoken:this.phonetoken},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){uni.hideLoading();var n=t.data;0==n.code?(uni.setStorageSync("cbe_anquan",n.data),uni.redirectTo({url:"/pages/set/publish?keywords="+e.keywords+"&val="+e.val})):(uni.showToast({title:n.msg,icon:"none"}),e.logining=!1)}})},getMember:function(){var e=this;uni.request({url:uni.getStorageSync("hostname")+"?action=index/member/info",data:{token:uni.getStorageSync("cbe_token")},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var n=t.data;0==n.code&&(e.mobile=n.one.mobile,n.one["phone"]=n.one.mobile.substr(0,3)+"****"+n.one.mobile.substr(7),e.memberInfo=n.one)}})},getPhoneCode:function(e){var t=this;if(0==this.scode){var n=/^1[0-9]{10,10}$/;if(n.test(this.mobile)){var i=120;this.scode=!0,this.timer=setInterval(function(){i-=1,"0"==i?(t.getcode="获取验证码",i=120,t.scode=!1,clearInterval(t.timer)):t.getcode="重新获取("+i+"s)"},1e3),uni.showLoading({title:"正在获取",mask:!0}),uni.request({url:uni.getStorageSync("hostname")+"?action=index/common/getphonecode",data:{phone:this.mobile,use:"anquan"},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){uni.hideLoading();var n=e.data;0==n.code?(uni.showToast({title:n.msg,icon:"success",mask:!0,duration:3e3}),t.phonetoken=n.token):(uni.showToast({title:n.msg,icon:"none"}),t.getcode="获取验证码",i=120,t.scode=!1,clearInterval(t.timer))},fail:function(e){uni.showToast({title:"网络连接超时，请检查您的网络",icon:"none"});setTimeout(function(){t.getcode="获取验证码",i=120,t.scode=!1,clearInterval(t.timer)},1e3)}})}else uni.showToast({title:"手机号码格式错误",icon:"none"})}}}};t.default=i},"99d5":function(e,t,n){"use strict";var i=n("be30"),o=n.n(i);o.a},ab19:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-7f888adc]{width:100%;height:100%;background:#f4f4f4}uni-page-body .content .ctops[data-v-7f888adc]{width:100%;height:%?90?%;font-size:%?24?%;color:grey;line-height:%?90?%;padding:0 %?40?%}uni-page-body .content .list-cell[data-v-7f888adc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline;padding:%?20?% %?40?%;line-height:%?60?%;position:relative;background:#fff;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}uni-page-body .content .list-cell.b-b[data-v-7f888adc]:after{left:%?30?%;right:%?30?%}uni-page-body .content .list-cell.m-t[data-v-7f888adc]{margin-top:%?16?%}uni-page-body .content .list-cell .cell-tit[data-v-7f888adc]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?28?%;color:#323232;margin-right:%?10?%}uni-page-body .content .input-item[data-v-7f888adc]{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:%?100?%;border-radius:4px;margin-bottom:%?10?%;padding:%?0?% %?40?%;background:#fff}uni-page-body .content .input-item uni-input[data-v-7f888adc]{height:%?50?%;font-size:%?30?%;color:#303133;width:100%}uni-page-body .content .input-item uni-text[data-v-7f888adc]{position:absolute;right:%?40?%;font-size:%?30?%;color:#008ab0;border:%?1?% solid #008ab0;padding:%?8?% %?30?%;border-radius:%?50?%;z-index:999}uni-page-body .content .confirm-btn[data-v-7f888adc]{width:%?670?%;height:%?76?%;position:absolute;bottom:%?40?%;left:%?40?%;line-height:%?76?%;border-radius:50px;margin-top:%?30?%;background:#008ab0;color:#fff;font-size:%?32?%}uni-page-body .content .confirm-btn[data-v-7f888adc]:after{border-radius:100px}body.?%PAGE?%[data-v-7f888adc]{background:#f4f4f4;background:#fff;background:#fff;background:#008ab0}',""])},be30:function(e,t,n){var i=n("ab19");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var o=n("4f06").default;o("31fc745d",i,!0,{sourceMap:!1,shadowMode:!1})},df45:function(e,t,n){"use strict";n.r(t);var i=n("4900"),o=n.n(i);for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);t["default"]=o.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-set-publish"],{"590f":function(e,n,t){"use strict";t.r(n);var i=t("677f"),a=t("da52");for(var o in a)"default"!==o&&function(e){t.d(n,e,function(){return a[e]})}(o);t("c1f0");var s=t("2877"),u=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"5ab56478",null);n["default"]=u.exports},6658:function(e,n,t){var i=t("ed6f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=t("4f06").default;a("ae7c8efc",i,!0,{sourceMap:!1,shadowMode:!1})},"677f":function(e,n,t){"use strict";var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-uni-view",{staticClass:"content"},["password"==e.keywords?t("v-uni-view",{staticClass:"changepwd"},[t("v-uni-view",{staticClass:"ctops"},[e._v("修改手机号，您可以通过新手机号进行登录，旧手机号将作废不可以登录")]),t("v-uni-view",{staticClass:"input-item b-b"},[t("v-uni-view",{staticClass:"tit"},[e._v("旧密码")]),t("v-uni-input",{attrs:{type:"text",value:e.oldpassword,placeholder:"请输入旧密码","placeholder-style":"color:#cbcbcb","placeholder-class":"input-empty",maxlength:"32",password:e.showPassword,"data-key":"oldpassword"},on:{input:function(n){n=e.$handleEvent(n),e.inputChange(n)}}}),t("v-uni-view",{staticClass:"uni-icon",on:{click:function(n){n=e.$handleEvent(n),e.changePassword(n)}}},[t("v-uni-image",{attrs:{src:e.showPassword?"../../static/yanjing.png":"../../static/yanjingact.png",mode:""}})],1)],1),t("v-uni-view",{staticClass:"input-item b-b"},[t("v-uni-view",{staticClass:"tit"},[e._v("新密码")]),t("v-uni-input",{attrs:{type:"text",value:e.newpassword,placeholder:"请输入新密码","placeholder-style":"color:#cbcbcb","placeholder-class":"input-empty",maxlength:"32",password:e.showPassworda,"data-key":"newpassword"},on:{input:function(n){n=e.$handleEvent(n),e.inputChange(n)}}}),t("v-uni-view",{staticClass:"uni-icon",on:{click:function(n){n=e.$handleEvent(n),e.changePassworda(n)}}},[t("v-uni-image",{attrs:{src:e.showPassworda?"../../static/yanjing.png":"../../static/yanjingact.png",mode:""}})],1)],1),t("v-uni-view",{staticClass:"input-item"},[t("v-uni-view",{staticClass:"tit"},[e._v("确认密码")]),t("v-uni-input",{attrs:{type:"text",value:e.renewpassword,placeholder:"请再次输入新密码","placeholder-style":"color:#cbcbcb","placeholder-class":"input-empty",maxlength:"32",password:e.showPasswordb,"data-key":"renewpassword"},on:{input:function(n){n=e.$handleEvent(n),e.inputChange(n)}}}),t("v-uni-view",{staticClass:"uni-icon",on:{click:function(n){n=e.$handleEvent(n),e.changePasswordb(n)}}},[t("v-uni-image",{attrs:{src:e.showPasswordb?"../../static/yanjing.png":"../../static/yanjingact.png",mode:""}})],1)],1),t("v-uni-view",{staticClass:"ctops"},[e._v("密码长度须为6-20位非纯数字，可包含字母、数字或下划线‘-’")]),t("v-uni-button",{staticClass:"confirm-btn",attrs:{disabled:e.logining},on:{click:function(n){n=e.$handleEvent(n),e.toChange(n)}}},[e._v("提交")])],1):e._e(),"username"==e.keywords||"nickname"==e.keywords?t("v-uni-view",{staticClass:"changusername"},["username"==e.keywords?t("v-uni-view",{staticClass:"ctops"},[e._v("初始账号默认您注册的手机号码，修改后，您可以使用账号+密码的方式进行登录。")]):e._e(),t("v-uni-view",{staticClass:"input-item b-b"},[t("v-uni-view",{staticClass:"tit"},[e._v("账号")]),t("v-uni-input",{attrs:{type:"text",value:e.username,placeholder:"请输入账号","placeholder-style":"color:#cbcbcb","placeholder-class":"input-empty",maxlength:"32","data-key":"username"},on:{input:function(n){n=e.$handleEvent(n),e.inputChangeu(n)}}}),1==e.keyong?t("v-uni-view",{staticClass:"uu"},[e._v("√ 可用")]):e._e(),2==e.keyong?t("v-uni-view",{staticClass:"uuu"},[e._v("× 不可用")]):e._e()],1),t("v-uni-button",{staticClass:"confirm-btn",attrs:{disabled:e.logining},on:{click:function(n){n=e.$handleEvent(n),e.toChangeInfo(n)}}},[e._v("提交")])],1):e._e(),"phone"==e.keywords?t("v-uni-view",{staticClass:"changephone"},[t("v-uni-view",{staticClass:"ctops"},[e._v("修改手机号，您可以通过新手机号进行登录，旧手机号将作废不可以登录")]),t("v-uni-view",{staticClass:"input-item b-b"},[t("v-uni-view",{staticClass:"tit"},[e._v("新手机号")]),t("v-uni-input",{attrs:{type:"text",value:e.mobile,placeholder:"请输入新手机号码","placeholder-style":"color:#cbcbcb","placeholder-class":"input-empty",maxlength:"32","data-key":"mobile"},on:{input:function(n){n=e.$handleEvent(n),e.inputChangep(n)}}}),1==e.keyong?t("v-uni-view",{staticClass:"uu"},[e._v("√ 可用")]):e._e(),2==e.keyong?t("v-uni-view",{staticClass:"uuu"},[e._v("× 不可用")]):e._e()],1),t("v-uni-view",{staticClass:"input-item"},[t("v-uni-view",{staticClass:"tit"},[e._v("短信验证码")]),t("v-uni-input",{attrs:{type:"number",value:e.phonecode,placeholder:"请输入手机验证码","placeholder-style":"color:#cbcbcb",maxlength:"6","data-key":"phonecode"},on:{input:function(n){n=e.$handleEvent(n),e.inputChange(n)},confirm:function(n){n=e.$handleEvent(n),e.toChangePhone(n)}}}),t("v-uni-text",{on:{click:function(n){n=e.$handleEvent(n),e.getPhoneCode(n)}}},[e._v(e._s(e.getcode))])],1),t("v-uni-button",{staticClass:"confirm-btn",attrs:{disabled:e.logining},on:{click:function(n){n=e.$handleEvent(n),e.toChangePhone(n)}}},[e._v("提交")])],1):e._e()],1)},a=[];t.d(n,"a",function(){return i}),t.d(n,"b",function(){return a})},b775:function(e,n,t){"use strict";var i=t("288e");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0,t("3b2b");var a=i(t("cebc")),o=t("2f62"),s={data:function(){return{klist:{password:"修改密码",username:"修改账号",phone:"修改手机",nickname:"修改昵称"},keywords:"",val:"",username:"",mobile:"",phonecode:"",oldpassword:"",newpassword:"",renewpassword:"",showPassword:!0,showPassworda:!0,showPasswordb:!0,logining:!1,keyong:0,scode:!1,getcode:"获取验证码",phonetoken:""}},onLoad:function(e){var n=uni.getStorageSync("cbe_token");if(n)uni.setNavigationBarTitle({title:this.klist[e.keywords]}),this.keywords=e.keywords,this.val=e.val,this.username=e.val;else{uni.showToast({title:"未登录或无权限",icon:"none"});setTimeout(function(){uni.navigateBack({delta:1})},1e3)}},methods:(0,a.default)({},(0,o.mapMutations)(["logout"]),{inputChange:function(e){var n=e.currentTarget.dataset.key;this[n]=e.detail.value},inputChangeu:function(e){var n=this,t=e.currentTarget.dataset.key;if(this[t]=e.detail.value,"username"==this.keywords){if(e.detail.value==this.val||e.detail.value.length<4)return!1;uni.request({url:uni.getStorageSync("hostname")+"?action=index/member/Checkusername",data:{username:e.detail.value},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data;0==t.code?n.keyong=1:n.keyong=2}})}},inputChangep:function(e){var n=this,t=e.currentTarget.dataset.key;if(this[t]=e.detail.value,"phone"==this.keywords){if(e.detail.value==this.val)return!1;var i=/^1[0-9]{10,10}$/;if(!i.test(e.detail.value))return this.keyong=2,!1;uni.request({url:uni.getStorageSync("hostname")+"?action=index/member/Checkphone",data:{phone:e.detail.value},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){var t=e.data;0==t.code?n.keyong=1:n.keyong=2}})}},changePassword:function(){this.showPassword=!this.showPassword},changePassworda:function(){this.showPassworda=!this.showPassworda},changePasswordb:function(){this.showPasswordb=!this.showPasswordb},toChangeInfo:function(){var e=this;this.logining=!0;var n="";if("username"==this.keywords){if(this.username==this.val)return uni.showToast({title:"您的账号没有修改",icon:"none"}),this.logining=!1,!1;n={keys:"username",val:this.username,token:uni.getStorageSync("cbe_token")}}else if("nickname"==this.keywords){if(this.username==this.val)return uni.showToast({title:"您的昵称没有修改",icon:"none"}),this.logining=!1,!1;n={keys:"nickname",val:this.username,token:uni.getStorageSync("cbe_token")}}uni.showLoading({title:"正在重置",mask:!0}),uni.request({url:uni.getStorageSync("hostname")+"?action=index/member/changeInfo",data:n,method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){uni.hideLoading();var t=n.data;if(0==t.code){uni.showToast({title:t.msg,icon:"success",mask:!0,duration:3e3});setTimeout(function(){uni.navigateBack({delta:1})},3e3)}else uni.showToast({title:t.msg,icon:"none"}),e.logining=!1}})},toChange:function(){var e=this;return this.logining=!0,""==this.oldpassword?(uni.showToast({title:"旧密码不能为空",icon:"none"}),this.logining=!1,!1):""==this.newpassword?(uni.showToast({title:"新密码不能为空",icon:"none"}),this.logining=!1,!1):this.CheckPassWord(this.newpassword)?this.renewpassword?this.newpassword!=this.renewpassword?(uni.showToast({title:"两次密码不一致",icon:"none"}),this.logining=!1,!1):(uni.showLoading({title:"正在重置",mask:!0}),void uni.request({url:uni.getStorageSync("hostname")+"?action=index/member/changepwd",data:{oldpassword:this.oldpassword,newpassword:this.newpassword,renewpassword:this.renewpassword,token:uni.getStorageSync("cbe_token")},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){uni.hideLoading();var t=n.data;if(0==t.code){uni.showToast({title:t.msg,icon:"success",mask:!0,duration:3e3}),uni.removeStorageSync("cbe_token"),e.logout();setTimeout(function(){uni.redirectTo({url:"/pages/public/login"})},3e3)}else uni.showToast({title:t.msg,icon:"none"}),e.logining=!1}})):(uni.showToast({title:"请再次输入新密码",icon:"none"}),this.logining=!1,!1):(uni.showToast({title:"密码格式不正确",icon:"none"}),this.logining=!1,!1)},toChangePhone:function(){var e=this;if(this.logining=!0,!this.mobile)return uni.showToast({title:"新手机号不能为空",icon:"none"}),this.logining=!1,!1;var n=/^1[0-9]{10,10}$/;return n.test(this.mobile)?this.phonecode?(uni.showLoading({title:"正在处理",mask:!0}),void uni.request({url:uni.getStorageSync("hostname")+"?action=index/member/changeMobile",data:{mobile:this.mobile,phonecode:this.phonecode,phonetoken:this.phonetoken,token:uni.getStorageSync("cbe_token")},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(n){uni.hideLoading();var t=n.data;if(0==t.code){uni.showToast({title:t.msg,icon:"success",mask:!0,duration:3e3});setTimeout(function(){uni.navigateBack({delta:1})},3e3)}else uni.showToast({title:t.msg,icon:"none"}),e.logining=!1}})):(uni.showToast({title:"手机验证码不能为空",icon:"none"}),this.logining=!1,!1):(uni.showToast({title:"新手机号格式不正确",icon:"none"}),this.logining=!1,!1)},CheckPassWord:function(e){var n=e;if(null==n||n.length<6||n.length>20)return!1;var t=new RegExp(/^[0-9A-Za-z_]+$/);if(!t.test(n))return!1;var i=new RegExp(/[A-Za-z_].*[0-9]|[0-9].*[A-Za-z_]/);return!!i.test(n)},getPhoneCode:function(e){var n=this;if(0==this.scode){var t=/^1[0-9]{10,10}$/;if(t.test(this.mobile)){var i=120;this.scode=!0,this.timer=setInterval(function(){i-=1,"0"==i?(n.getcode="获取验证码",i=120,n.scode=!1,clearInterval(n.timer)):n.getcode="重新获取("+i+"s)"},1e3),uni.showLoading({title:"正在获取",mask:!0}),uni.request({url:uni.getStorageSync("hostname")+"?action=index/common/getphonecode",data:{phone:this.mobile,use:"bind"},method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){uni.hideLoading();var t=e.data;0==t.code?(uni.showToast({title:t.msg,icon:"success",mask:!0,duration:3e3}),n.phonetoken=t.token):(uni.showToast({title:t.msg,icon:"none"}),n.getcode="获取验证码",i=120,n.scode=!1,clearInterval(n.timer))},fail:function(e){uni.showToast({title:"网络连接超时，请检查您的网络",icon:"none"});setTimeout(function(){n.getcode="获取验证码",i=120,n.scode=!1,clearInterval(n.timer)},1e3)}})}else uni.showToast({title:"手机号码格式错误",icon:"none"})}}})};n.default=s},c1f0:function(e,n,t){"use strict";var i=t("6658"),a=t.n(i);a.a},da52:function(e,n,t){"use strict";t.r(n);var i=t("b775"),a=t.n(i);for(var o in i)"default"!==o&&function(e){t.d(n,e,function(){return i[e]})}(o);n["default"]=a.a},ed6f:function(e,n,t){n=e.exports=t("2350")(!1),n.push([e.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-5ab56478]{width:100%;height:100%;background:#f4f4f4}uni-page-body .content .changephone .ctops[data-v-5ab56478],uni-page-body .content .changepwd .ctops[data-v-5ab56478],uni-page-body .content .changusername .ctops[data-v-5ab56478]{width:100%;font-size:%?24?%;color:grey;line-height:%?40?%;padding:20px %?40?%}uni-page-body .content .changephone .input-item[data-v-5ab56478],uni-page-body .content .changepwd .input-item[data-v-5ab56478],uni-page-body .content .changusername .input-item[data-v-5ab56478]{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:%?100?%;border-radius:4px;padding:%?0?% %?40?%;background:#fff}uni-page-body .content .changephone .input-item .tit[data-v-5ab56478],uni-page-body .content .changepwd .input-item .tit[data-v-5ab56478],uni-page-body .content .changusername .input-item .tit[data-v-5ab56478]{font-size:%?28?%;color:#323232;position:absolute;top:%?0?%;height:%?100?%;line-height:%?100?%}uni-page-body .content .changephone .input-item uni-input[data-v-5ab56478],uni-page-body .content .changepwd .input-item uni-input[data-v-5ab56478],uni-page-body .content .changusername .input-item uni-input[data-v-5ab56478]{height:%?50?%;font-size:%?28?%;color:#ccc;width:100%;padding-left:%?160?%}uni-page-body .content .changephone .input-item .uni-icon[data-v-5ab56478],uni-page-body .content .changepwd .input-item .uni-icon[data-v-5ab56478],uni-page-body .content .changusername .input-item .uni-icon[data-v-5ab56478]{position:absolute;right:%?20?%;font-size:%?40?%;z-index:999;color:#008ab0}uni-page-body .content .changephone .input-item .uni-icon uni-image[data-v-5ab56478],uni-page-body .content .changepwd .input-item .uni-icon uni-image[data-v-5ab56478],uni-page-body .content .changusername .input-item .uni-icon uni-image[data-v-5ab56478]{width:%?40?%;height:%?40?%}uni-page-body .content .changephone .input-item .uu[data-v-5ab56478],uni-page-body .content .changepwd .input-item .uu[data-v-5ab56478],uni-page-body .content .changusername .input-item .uu[data-v-5ab56478]{position:absolute;right:%?40?%;font-size:%?26?%;color:#08b000}uni-page-body .content .changephone .input-item .uuu[data-v-5ab56478],uni-page-body .content .changepwd .input-item .uuu[data-v-5ab56478],uni-page-body .content .changusername .input-item .uuu[data-v-5ab56478]{position:absolute;right:%?40?%;font-size:%?26?%;color:#b0002f}uni-page-body .content .changephone .input-item uni-text[data-v-5ab56478],uni-page-body .content .changepwd .input-item uni-text[data-v-5ab56478],uni-page-body .content .changusername .input-item uni-text[data-v-5ab56478]{position:absolute;right:%?40?%;font-size:%?30?%;color:#008ab0;border:%?1?% solid #008ab0;padding:%?8?% %?30?%;border-radius:%?50?%;z-index:999}uni-page-body .confirm-btn[data-v-5ab56478]{width:%?670?%;height:%?76?%;position:absolute;bottom:%?40?%;left:%?40?%;line-height:%?76?%;border-radius:50px;margin-top:%?30?%;background:#008ab0;color:#fff;font-size:%?32?%}uni-page-body .confirm-btn[data-v-5ab56478]:after{border-radius:100px}body.?%PAGE?%[data-v-5ab56478]{background:#f4f4f4;background:#fff;background:#008ab0}',""])}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-youhuiquan-youhuiquan"],{"0a40":function(i,t,e){var a=e("b041");t=i.exports=e("2350")(!1),t.push([i.i,'@charset "UTF-8";\n/* 页面左右间距 */\n/* 文字尺寸 */\n/*文字颜色*/\n/* 边框颜色 */\n/* 图片加载中颜色 */\n/* 行为相关颜色 */uni-page-body[data-v-31d39f8d]{background:#f4f4f4;width:100%;height:100%}uni-page-body .navtop[data-v-31d39f8d]{width:100%;height:%?100?%;background:#fff;border-top:%?1?% solid #f6f6f6;border-bottom:%?1?% solid #f6f6f6}uni-page-body .navtop .nav-item[data-v-31d39f8d]{float:left;font-size:%?28?%;color:#323232;text-align:center;width:%?250?%;line-height:%?100?%}uni-page-body .navtop .nav-itema[data-v-31d39f8d]{float:left;font-size:%?28?%;color:#323232;text-align:center;width:%?375?%;line-height:%?100?%}uni-page-body .navtop .active[data-v-31d39f8d]{color:#008ab0;background:url('+a(e("f4ab"))+") no-repeat bottom;background-size:25%}uni-page-body .zanwu[data-v-31d39f8d]{text-align:center;font-size:%?28?%;color:grey;padding-top:%?240?%}uni-page-body .yhqlist[data-v-31d39f8d]{width:%?750?%}uni-page-body .yhqlist .yhq-item[data-v-31d39f8d]{width:%?750?%;height:%?216?%;position:relative;margin-top:%?25?%}uni-page-body .yhqlist .yhq-item .beijing[data-v-31d39f8d]{width:100%;height:100%;position:absolute;top:0;left:0;z-index:5}uni-page-body .yhqlist .yhq-item .yhq-left[data-v-31d39f8d]{width:%?195?%;height:%?216?%;position:absolute;left:%?40?%;top:0;z-index:10}uni-page-body .yhqlist .yhq-item .yhq-left .money[data-v-31d39f8d]{color:#fff;font-size:%?55?%;text-align:center;padding-top:%?45?%}uni-page-body .yhqlist .yhq-item .yhq-left .money uni-text[data-v-31d39f8d]{font-size:%?26?%}uni-page-body .yhqlist .yhq-item .yhq-left .tiaojian[data-v-31d39f8d]{color:#fff;font-size:%?25?%;text-align:center;padding-top:%?10?%}uni-page-body .yhqlist .yhq-item .yhq-right[data-v-31d39f8d]{width:%?447?%;height:%?216?%;position:absolute;right:%?40?%;top:%?0?%;z-index:10}uni-page-body .yhqlist .yhq-item .yhq-right .title[data-v-31d39f8d]{color:#323232;font-size:%?32?%;padding:%?25?% 0}uni-page-body .yhqlist .yhq-item .yhq-right .bianhao[data-v-31d39f8d],uni-page-body .yhqlist .yhq-item .yhq-right .fanwei[data-v-31d39f8d],uni-page-body .yhqlist .yhq-item .yhq-right .qixian[data-v-31d39f8d]{font-size:%?22?%;color:grey;line-height:%?30?%}uni-page-body .yhqlist .yhq-item .use[data-v-31d39f8d]{position:absolute;right:%?70?%;top:%?30?%;z-index:20;color:#008ab1;border:%?1?% solid #008ab1;font-size:%?24?%;padding:%?5?% %?15?%;border-radius:%?30?%}uni-page-body .yhqlist .yhq-item .xuan[data-v-31d39f8d]{width:%?38?%;height:%?38?%;position:absolute;right:%?70?%;top:%?30?%;z-index:20}body.?%PAGE?%[data-v-31d39f8d]{background:#f4f4f4;background:#fff;background:url("+a(e("f4ab"))+") no-repeat bottom;background-size:25%}",""])},"20bd":function(i,t,e){"use strict";e.r(t);var a=e("b146"),n=e.n(a);for(var s in a)"default"!==s&&function(i){e.d(t,i,function(){return a[i]})}(s);t["default"]=n.a},"24a4":function(i,t,e){"use strict";e.r(t);var a=e("99ba"),n=e("20bd");for(var s in n)"default"!==s&&function(i){e.d(t,i,function(){return n[i]})}(s);e("d299");var v=e("2877"),u=Object(v["a"])(n["default"],a["a"],a["b"],!1,null,"31d39f8d",null);t["default"]=u.exports},"44ee":function(i,t,e){var a=e("0a40");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var n=e("4f06").default;n("de2f7ba8",a,!0,{sourceMap:!1,shadowMode:!1})},"99ba":function(i,t,e){"use strict";var a=function(){var i=this,t=i.$createElement,e=i._self._c||t;return e("v-uni-view",[0==i.source?e("v-uni-view",{staticClass:"navtop"},[e("v-uni-view",{staticClass:"nav-item",class:0==i.index?"active":"",on:{click:function(t){t=i.$handleEvent(t),i.changeIndex(0)}}},[i._v("未使用("+i._s(i.weiyong)+")")]),e("v-uni-view",{staticClass:"nav-item",class:1==i.index?"active":"",on:{click:function(t){t=i.$handleEvent(t),i.changeIndex(1)}}},[i._v("已使用("+i._s(i.yiyong)+")")]),e("v-uni-view",{staticClass:"nav-item",class:2==i.index?"active":"",on:{click:function(t){t=i.$handleEvent(t),i.changeIndex(2)}}},[i._v("已失效("+i._s(i.shixiao)+")")])],1):e("v-uni-view",{staticClass:"navtop"},[e("v-uni-view",{staticClass:"nav-itema",class:0==i.indexa?"active":"",on:{click:function(t){t=i.$handleEvent(t),i.changeIndexa(0)}}},[i._v("可用优惠券("+i._s(i.keyong)+")")]),e("v-uni-view",{staticClass:"nav-itema",class:1==i.indexa?"active":"",on:{click:function(t){t=i.$handleEvent(t),i.changeIndexa(1)}}},[i._v("不可用优惠券("+i._s(i.bukeyong)+")")])],1),0==i.source?e("v-uni-view",[0==i.index?e("v-uni-view",{staticClass:"yhqlist"},[i._l(i.cuoponList,function(t,a){return 0==t.status?e("v-uni-view",{key:a,staticClass:"yhq-item"},[e("v-uni-image",{staticClass:"beijing",attrs:{src:"../../static/weiyong.png",mode:""}}),e("v-uni-view",{staticClass:"yhq-left"},[0==t.backtype?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("￥")]),i._v(i._s(t.deduct))],1):i._e(),1==t.backtype?e("v-uni-view",{staticClass:"money"},[i._v(i._s(t.discount)),e("v-uni-text",[i._v("折")])],1):i._e(),2==t.backtype&&t.backmoney>0?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("返")]),i._v(i._s(t.backmoney)),e("v-uni-text",[i._v("余额")])],1):i._e(),2==t.backtype&&t.backcredit>0?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("返")]),i._v(i._s(t.backcredit)),e("v-uni-text",[i._v("积分")])],1):i._e(),2==t.backtype&&t.backredpack>0?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("返")]),i._v(i._s(t.backredpack)),e("v-uni-text",[i._v("现金")])],1):i._e(),t.enough>0?e("v-uni-view",{staticClass:"tiaojian"},[i._v("满￥"+i._s(t.enough)+"可用")]):i._e(),0==t.enough?e("v-uni-view",{staticClass:"tiaojian"},[i._v("购买立减")]):i._e()],1),e("v-uni-view",{staticClass:"yhq-right"},[e("v-uni-view",{staticClass:"title"},[i._v(i._s(t.couponname))]),e("v-uni-view",{staticClass:"bianhao"},[i._v("券编号："+i._s(t.number))]),e("v-uni-view",{staticClass:"fanwei"},[i._v("使用范围："+i._s(t.sysm))]),1==t.timelimit?e("v-uni-view",{staticClass:"qixian"},[i._v("有效期："+i._s(t.timestart)+" - "+i._s(t.timeend))]):e("v-uni-view",{staticClass:"qixian"},[i._v("有效期：长期有效")])],1),e("v-uni-text",{staticClass:"use",on:{click:function(e){e=i.$handleEvent(e),i.toUse(t.id)}}},[i._v("立即使用")])],1):i._e()}),0==i.weiyong?e("v-uni-view",{staticClass:"zanwu"},[i._v("暂无未使用优惠券")]):i._e()],2):i._e(),1==i.index?e("v-uni-view",{staticClass:"yhqlist"},[i._l(i.cuoponList,function(t,a){return 1==t.status?e("v-uni-view",{key:a,staticClass:"yhq-item"},[e("v-uni-image",{staticClass:"beijing",attrs:{src:"../../static/yiyong.png",mode:""}}),e("v-uni-view",{staticClass:"yhq-left"},[0==t.backtype?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("￥")]),i._v(i._s(t.deduct))],1):i._e(),1==t.backtype?e("v-uni-view",{staticClass:"money"},[i._v(i._s(t.discount)),e("v-uni-text",[i._v("折")])],1):i._e(),2==t.backtype&&t.backmoney>0?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("返")]),i._v(i._s(t.backmoney)),e("v-uni-text",[i._v("余额")])],1):i._e(),2==t.backtype&&t.backcredit>0?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("返")]),i._v(i._s(t.backcredit)),e("v-uni-text",[i._v("积分")])],1):i._e(),2==t.backtype&&t.backredpack>0?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("返")]),i._v(i._s(t.backredpack)),e("v-uni-text",[i._v("现金")])],1):i._e(),t.enough>0?e("v-uni-view",{staticClass:"tiaojian"},[i._v("满￥"+i._s(t.enough)+"可用")]):i._e(),0==t.enough?e("v-uni-view",{staticClass:"tiaojian"},[i._v("购买立减")]):i._e()],1),e("v-uni-view",{staticClass:"yhq-right"},[e("v-uni-view",{staticClass:"title"},[i._v(i._s(t.couponname))]),e("v-uni-view",{staticClass:"bianhao"},[i._v("券编号："+i._s(t.number))]),e("v-uni-view",{staticClass:"fanwei"},[i._v("使用范围："+i._s(t.sysm))]),1==t.timelimit?e("v-uni-view",{staticClass:"qixian"},[i._v("有效期："+i._s(t.timestart)+" - "+i._s(t.timeend))]):e("v-uni-view",{staticClass:"qixian"},[i._v("有效期：长期有效")])],1)],1):i._e()}),0==i.yiyong?e("v-uni-view",{staticClass:"zanwu"},[i._v("暂无已使用优惠券")]):i._e()],2):i._e(),2==i.index?e("v-uni-view",{staticClass:"yhqlist"},[i._l(i.cuoponList,function(t,a){return 2==t.status?e("v-uni-view",{key:a,staticClass:"yhq-item"},[e("v-uni-image",{staticClass:"beijing",attrs:{src:"../../static/shixiao.png",mode:""}}),e("v-uni-view",{staticClass:"yhq-left"},[0==t.backtype?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("￥")]),i._v(i._s(t.deduct))],1):i._e(),1==t.backtype?e("v-uni-view",{staticClass:"money"},[i._v(i._s(t.discount)),e("v-uni-text",[i._v("折")])],1):i._e(),2==t.backtype&&t.backmoney>0?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("返")]),i._v(i._s(t.backmoney)),e("v-uni-text",[i._v("余额")])],1):i._e(),2==t.backtype&&t.backcredit>0?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("返")]),i._v(i._s(t.backcredit)),e("v-uni-text",[i._v("积分")])],1):i._e(),2==t.backtype&&t.backredpack>0?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("返")]),i._v(i._s(t.backredpack)),e("v-uni-text",[i._v("现金")])],1):i._e(),t.enough>0?e("v-uni-view",{staticClass:"tiaojian"},[i._v("满￥"+i._s(t.enough)+"可用")]):i._e(),0==t.enough?e("v-uni-view",{staticClass:"tiaojian"},[i._v("购买立减")]):i._e()],1),e("v-uni-view",{staticClass:"yhq-right"},[e("v-uni-view",{staticClass:"title"},[i._v(i._s(t.couponname))]),e("v-uni-view",{staticClass:"bianhao"},[i._v("券编号："+i._s(t.number))]),e("v-uni-view",{staticClass:"fanwei"},[i._v("使用范围："+i._s(t.sysm))]),1==t.timelimit?e("v-uni-view",{staticClass:"qixian"},[i._v("有效期："+i._s(t.timestart)+" - "+i._s(t.timeend))]):e("v-uni-view",{staticClass:"qixian"},[i._v("有效期：长期有效")])],1)],1):i._e()}),0==i.shixiao?e("v-uni-view",{staticClass:"zanwu"},[i._v("暂无已失效优惠券")]):i._e()],2):i._e()],1):e("v-uni-view",[0==i.indexa?e("v-uni-view",{staticClass:"yhqlist"},[i._l(i.cuoponList,function(t,a){return 0==t.status?e("v-uni-view",{key:a,staticClass:"yhq-item",on:{click:function(e){e=i.$handleEvent(e),i.xuanze(t)}}},[e("v-uni-image",{staticClass:"beijing",attrs:{src:"../../static/weiyong.png",mode:""}}),e("v-uni-view",{staticClass:"yhq-left"},[0==t.backtype?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("￥")]),i._v(i._s(t.deduct))],1):i._e(),1==t.backtype?e("v-uni-view",{staticClass:"money"},[i._v(i._s(t.discount)),e("v-uni-text",[i._v("折")])],1):i._e(),2==t.backtype&&t.backmoney>0?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("返")]),i._v(i._s(t.backmoney)),e("v-uni-text",[i._v("余额")])],1):i._e(),2==t.backtype&&t.backcredit>0?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("返")]),i._v(i._s(t.backcredit)),e("v-uni-text",[i._v("积分")])],1):i._e(),2==t.backtype&&t.backredpack>0?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("返")]),i._v(i._s(t.backredpack)),e("v-uni-text",[i._v("现金")])],1):i._e(),t.enough>0?e("v-uni-view",{staticClass:"tiaojian"},[i._v("满￥"+i._s(t.enough)+"可用")]):i._e(),0==t.enough?e("v-uni-view",{staticClass:"tiaojian"},[i._v("购买立减")]):i._e()],1),e("v-uni-view",{staticClass:"yhq-right"},[e("v-uni-view",{staticClass:"title"},[i._v(i._s(t.couponname))]),e("v-uni-view",{staticClass:"bianhao"},[i._v("券编号："+i._s(t.number))]),e("v-uni-view",{staticClass:"fanwei"},[i._v("使用范围："+i._s(t.sysm))]),1==t.timelimit?e("v-uni-view",{staticClass:"qixian"},[i._v("有效期："+i._s(t.timestart)+" - "+i._s(t.timeend))]):e("v-uni-view",{staticClass:"qixian"},[i._v("有效期：长期有效")])],1),i.yhqid==t.id?e("v-uni-image",{staticClass:"xuan",attrs:{src:"../../static/cartxuan.png",mode:""}}):e("v-uni-image",{staticClass:"xuan",attrs:{src:"../../static/card_wxuan.png",mode:""}})],1):i._e()}),0==i.keyong?e("v-uni-view",{staticClass:"zanwu"},[i._v("暂无可用优惠券")]):i._e()],2):i._e(),1==i.indexa?e("v-uni-view",{staticClass:"yhqlist"},[i._l(i.cuoponList,function(t,a){return 1==t.status?e("v-uni-view",{key:a,staticClass:"yhq-item"},[e("v-uni-image",{staticClass:"beijing",attrs:{src:"../../static/yiyong.png",mode:""}}),e("v-uni-view",{staticClass:"yhq-left"},[0==t.backtype?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("￥")]),i._v(i._s(t.deduct))],1):i._e(),1==t.backtype?e("v-uni-view",{staticClass:"money"},[i._v(i._s(t.discount)),e("v-uni-text",[i._v("折")])],1):i._e(),2==t.backtype&&t.backmoney>0?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("返")]),i._v(i._s(t.backmoney)),e("v-uni-text",[i._v("余额")])],1):i._e(),2==t.backtype&&t.backcredit>0?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("返")]),i._v(i._s(t.backcredit)),e("v-uni-text",[i._v("积分")])],1):i._e(),2==t.backtype&&t.backredpack>0?e("v-uni-view",{staticClass:"money"},[e("v-uni-text",[i._v("返")]),i._v(i._s(t.backredpack)),e("v-uni-text",[i._v("现金")])],1):i._e(),t.enough>0?e("v-uni-view",{staticClass:"tiaojian"},[i._v("满￥"+i._s(t.enough)+"可用")]):i._e(),0==t.enough?e("v-uni-view",{staticClass:"tiaojian"},[i._v("购买立减")]):i._e()],1),e("v-uni-view",{staticClass:"yhq-right"},[e("v-uni-view",{staticClass:"title"},[i._v(i._s(t.couponname))]),e("v-uni-view",{staticClass:"bianhao"},[i._v("券编号："+i._s(t.number))]),e("v-uni-view",{staticClass:"fanwei"},[i._v("使用范围："+i._s(t.sysm))]),1==t.timelimit?e("v-uni-view",{staticClass:"qixian"},[i._v("有效期："+i._s(t.timestart)+" - "+i._s(t.timeend))]):e("v-uni-view",{staticClass:"qixian"},[i._v("有效期：长期有效")])],1)],1):i._e()}),0==i.bukeyong?e("v-uni-view",{staticClass:"zanwu"},[i._v("暂无不可用优惠券")]):i._e()],2):i._e()],1)],1)},n=[];e.d(t,"a",function(){return a}),e.d(t,"b",function(){return n})},b041:function(i,t){i.exports=function(i){return"string"!==typeof i?i:(/^['"].*['"]$/.test(i)&&(i=i.slice(1,-1)),/["'() \t\n]/.test(i)?'"'+i.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':i)}},b146:function(i,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{index:0,source:0,xlist:[],checkid:0,indexa:0,weiyong:0,yiyong:0,shixiao:0,cuoponList:[],id:"207",money:200,keyong:0,bukeyong:0,yhqid:"0"}},onLoad:function(i){if(i.source?(this.source=i.source,this.$api.prePage()&&this.$api.prePage().youhuiquanData.id&&(this.checkid=this.$api.prePage().youhuiquanData.id,this.xlist=this.$api.prePage().youhuiquanData),uni.setNavigationBarTitle({title:"选择优惠券"}),this.yhqid=i.yhqid):uni.setNavigationBarTitle({title:"我的优惠券"}),uni.getStorageSync("cbe_token"))this.token=uni.getStorageSync("cbe_token"),this.getYouhuiquanList();else{uni.showToast({title:"未登录或无权限",icon:"none"});setTimeout(function(){uni.navigateBack({delta:1})},1e3)}},methods:{getYouhuiquanList:function(){var i=this;uni.showLoading({title:"请稍后"});var t=uni.getStorageSync("cbe_shijiprice");if("0"==this.source)var e={token:uni.getStorageSync("cbe_token")};else e={token:uni.getStorageSync("cbe_token"),ids:this.id,money:t};uni.request({url:uni.getStorageSync("hostname")+"?action=index/member/youhuiquan",data:e,method:"POST",dataType:"json",header:{"content-type":"application/x-www-form-urlencoded"},success:function(t){var e=t.data;uni.hideLoading(),0==e.code&&(i.cuoponList=e.list,"0"==i.source?(i.weiyong=e.weiyong,i.yiyong=e.yiyong,i.shixiao=e.shixiao):(i.keyong=e.keyong,i.bukeyong=e.bukeyong),uni.removeStorageSync("cbe_shijiprice"))},fail:function(t){i.getYouhuiquanList()}})},toUse:function(i){uni.navigateTo({url:"/pages/product/list?yhqid="+i})},changeIndex:function(i){this.index=i},changeIndexa:function(i){this.indexa=i},xuanze:function(i){if(i.id==this.yhqid)return this.quxiaoxuan(),!1;0==i.backtype&&(i.couponname=i.couponname+",立减"+i.deduct+"元"),1==i.backtype&&(i.couponname=i.couponname+",立享"+i.discount+"折优惠"),2==i.backtype&&i.backmoney>0&&(i.couponname=i.couponname+",立返"+i.backmoney+"余额"),2==i.backtype&&i.backcredit>0&&(i.couponname=i.couponname+",立返"+i.backcredit+"积分"),2==i.backtype&&i.backredpack>0&&(i.couponname=i.couponname+",立返"+i.backredpack+"现金"),this.sji().youhuiquanData=i,this.sji().ckyh(i),uni.navigateBack({delta:1})},quxiaoxuan:function(){this.sji().youhuiquanData={couponname:""},this.sji().ckyh(""),uni.navigateBack({delta:1})},sji:function(){var i=getCurrentPages(),t=i[i.length-2];return t}}};t.default=a},d299:function(i,t,e){"use strict";var a=e("44ee"),n=e.n(a);n.a},f4ab:function(i,t){i.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAGCAYAAACfHf25AAAAH0lEQVQ4jWNk6Nrwn2EEAaaBdgC9waiHhzsY9fBwBwCvFAJF22AfPwAAAABJRU5ErkJggg=="}}]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/bank/bindbank"],{

/***/ 320:
/*!*************************************************************!*\
  !*** G:/APPS/钱库/main.js?{"page":"pages%2Fbank%2Fbindbank"} ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);__webpack_require__(/*! @dcloudio/uni-stat */ 5);

var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _bindbank = _interopRequireDefault(__webpack_require__(/*! ./pages/bank/bindbank.vue */ 321));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_bindbank.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 321:
/*!******************************************!*\
  !*** G:/APPS/钱库/pages/bank/bindbank.vue ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bindbank_vue_vue_type_template_id_2505dd63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bindbank.vue?vue&type=template&id=2505dd63& */ 322);
/* harmony import */ var _bindbank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bindbank.vue?vue&type=script&lang=js& */ 324);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _bindbank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _bindbank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _bindbank_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bindbank.vue?vue&type=style&index=0&lang=scss& */ 326);
/* harmony import */ var _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 16);






/* normalize component */

var component = Object(_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _bindbank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _bindbank_vue_vue_type_template_id_2505dd63___WEBPACK_IMPORTED_MODULE_0__["render"],
  _bindbank_vue_vue_type_template_id_2505dd63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "G:/APPS/钱库/pages/bank/bindbank.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 322:
/*!*************************************************************************!*\
  !*** G:/APPS/钱库/pages/bank/bindbank.vue?vue&type=template&id=2505dd63& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bindbank_vue_vue_type_template_id_2505dd63___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bindbank.vue?vue&type=template&id=2505dd63& */ 323);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bindbank_vue_vue_type_template_id_2505dd63___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_templateLoader_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bindbank_vue_vue_type_template_id_2505dd63___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 323:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/APPS/钱库/pages/bank/bindbank.vue?vue&type=template&id=2505dd63& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 324:
/*!*******************************************************************!*\
  !*** G:/APPS/钱库/pages/bank/bindbank.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bindbank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bindbank.vue?vue&type=script&lang=js& */ 325);
/* harmony import */ var _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bindbank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bindbank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bindbank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bindbank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bindbank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 325:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/APPS/钱库/pages/bank/bindbank.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;























var _vuex = __webpack_require__(/*! vuex */ 10); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { data: function data() {return { index: 0, bankcard: '', bank: '', bankrealname: '', bankidcard: '', token: '', kaika: false, memberInfo: [], array: ['中国银行', '中国农业银行'] };}, onShow: function onShow() {if (uni.getStorageSync('cbe_token')) {this.token = uni.getStorageSync('cbe_token');this.getMemberInfo();} else {uni.showToast({ title: "未登录或无权限", icon: "none" });var timer = setTimeout(function () {
        uni.navigateBack({
          delta: 1 });

      }, 1000);
    }
  },
  methods: {
    navTo: function navTo(url) {
      uni.navigateTo({
        url: url });

    },
    bindPickerChange: function bindPickerChange(e) {
      this.index = e.target.value;
      var ea = e.target.value;
      this.bank = this.array[ea];
      this.kaika = true;
    },
    inputChange: function inputChange(e) {
      var key = e.currentTarget.dataset.key;
      this[key] = e.detail.value;
    },
    confirm: function confirm() {
      if (!this.bankcard) {
        this.$api.msg('请输入银行卡号');
        return;
      } else {
        if (!this.checkBankno(this.bankcard)) {
          this.$api.msg('银行卡号格式不正确');
          return;
        }
      }
      if (!this.bank) {
        this.$api.msg('请选择开卡行');
        return;
      }
      if (!this.bankrealname) {
        this.$api.msg('请输入开卡人姓名');
        return;
      }
      if (!this.bankidcard) {
        this.$api.msg('请输入开卡人身份证号码');
        return;
      } else {
        if (!this.checkIdcard(this.bankidcard)) {
          this.$api.msg('身份证号码格式不正确');
          return;
        }
      }
      uni.showLoading({
        title: '正在处理',
        mask: true });

      uni.request({
        url: uni.getStorageSync('hostname') + '?action=index/member/bankPost',
        data: { bankcard: this.bankcard, bank: this.bank, bankrealname: this.bankrealname, token: this.token, bankidcard: this.bankidcard },
        method: 'POST',
        dataType: 'json',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function success(resa) {
          uni.hideLoading();
          var one = resa.data;
          if (one.code == 0) {
            uni.showToast({
              title: one.msg, icon: 'success', mask: true, duration: 3000 });

            var timer = setTimeout(function () {
              uni.navigateBack({
                delta: 1 });

            }, 2000);
          } else {
            uni.showToast({ title: one.msg, icon: "none" });
          }
        } });

    },
    getMemberInfo: function getMemberInfo() {var _this = this;
      uni.request({
        url: uni.getStorageSync('hostname') + '?action=index/member/info',
        data: { token: uni.getStorageSync('cbe_token') },
        method: 'POST',
        dataType: 'json',
        header: { 'content-type': 'application/x-www-form-urlencoded' },
        success: function success(resa) {
          var one = resa.data;
          if (one.code == 0) {
            _this.bankcard = one.one.bankcard;
            _this.bank = one.one.bank;
            _this.bankrealname = one.one.bankrealname;
            if (one.one.bankidcard) {
              _this.kaika = true;
              _this.bankidcard = one.one.bankidcard;
              // this.bankidcard = one.one.bankidcard.replace(/^(.{4})(?:\d+)(.{4})$/,"$1******$2");
            }
          }
        } });

    },
    checkBankno: function checkBankno(bankno) {
      var lastNum = bankno.substr(bankno.length - 1, 1); //取出最后一位（与luhm进行比较）
      var first15Num = bankno.substr(0, bankno.length - 1); //前15或18位
      var newArr = [];
      for (var i = first15Num.length - 1; i > -1; i--) {//前15或18位倒序存进数组
        newArr.push(first15Num.substr(i, 1));
      }
      var arrJiShu = []; //奇数位*2的积 <9
      var arrJiShu2 = []; //奇数位*2的积 >9
      var arrOuShu = []; //偶数位数组
      for (var j = 0; j < newArr.length; j++) {
        if ((j + 1) % 2 == 1) {//奇数位
          if (parseInt(newArr[j]) * 2 < 9)
          arrJiShu.push(parseInt(newArr[j]) * 2);else
          arrJiShu2.push(parseInt(newArr[j]) * 2);
        } else
          //偶数位
          arrOuShu.push(newArr[j]);
      }
      var jishu_child1 = []; //奇数位*2 >9 的分割之后的数组个位数
      var jishu_child2 = []; //奇数位*2 >9 的分割之后的数组十位数
      for (var h = 0; h < arrJiShu2.length; h++) {
        jishu_child1.push(parseInt(arrJiShu2[h]) % 10);
        jishu_child2.push(parseInt(arrJiShu2[h]) / 10);
      }
      var sumJiShu = 0; //奇数位*2 < 9 的数组之和
      var sumOuShu = 0; //偶数位数组之和
      var sumJiShuChild1 = 0; //奇数位*2 >9 的分割之后的数组个位数之和
      var sumJiShuChild2 = 0; //奇数位*2 >9 的分割之后的数组十位数之和
      var sumTotal = 0;
      for (var m = 0; m < arrJiShu.length; m++) {
        sumJiShu = sumJiShu + parseInt(arrJiShu[m]);
      }
      for (var n = 0; n < arrOuShu.length; n++) {
        sumOuShu = sumOuShu + parseInt(arrOuShu[n]);
      }
      for (var p = 0; p < jishu_child1.length; p++) {
        sumJiShuChild1 = sumJiShuChild1 + parseInt(jishu_child1[p]);
        sumJiShuChild2 = sumJiShuChild2 + parseInt(jishu_child2[p]);
      }
      //计算总和
      sumTotal = parseInt(sumJiShu) + parseInt(sumOuShu) + parseInt(sumJiShuChild1) + parseInt(sumJiShuChild2);
      //计算Luhm值
      var k = parseInt(sumTotal) % 10 == 0 ? 10 : parseInt(sumTotal) % 10;
      var luhm = 10 - k;
      if (lastNum == luhm) {
        return true;
      } else
      {
        return false;
      }
    },
    checkIdcard: function checkIdcard(personnumber) {
      personnumber = personnumber.toUpperCase();
      //身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X。
      if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(personnumber)) {
        return false;
      }
      //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
      //下面分别分析出生日期和校验位
      var len, re;
      len = personnumber.length;
      if (len == 15) {
        re = new RegExp(/^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/);
        var arrSplit = personnumber.match(re);

        //检查生日日期是否正确
        var dtmBirth = new Date('19' + arrSplit[2] + '/' + arrSplit[3] + '/' + arrSplit[4]);
        var bGoodDay;
        bGoodDay = dtmBirth.getFullYear() == Number(arrSplit[2]) && dtmBirth.getMonth() + 1 == Number(arrSplit[3]) && dtmBirth.getDate() == Number(arrSplit[4]);
        if (!bGoodDay) {
          return false;
        } else
        {
          //将15位身份证转成18位
          //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
          var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
          var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
          var nTemp = 0,i;
          personnumber = personnumber.substr(0, 6) + '19' + personnumber.substr(6, personnumber.length - 6);
          for (i = 0; i < 17; i++) {
            nTemp += personnumber.substr(i, 1) * arrInt[i];
          }
          personnumber += arrCh[nTemp % 11];
          return true;
        }
      }
      if (len == 18) {
        re = new RegExp(/^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/);
        var arrSplit = personnumber.match(re);
        //检查生日日期是否正确
        var dtmBirth = new Date(arrSplit[2] + "/" + arrSplit[3] + "/" + arrSplit[4]);
        var bGoodDay;
        bGoodDay = dtmBirth.getFullYear() == Number(arrSplit[2]) && dtmBirth.getMonth() + 1 == Number(arrSplit[3]) && dtmBirth.getDate() == Number(arrSplit[4]);
        if (!bGoodDay) {
          return false;
        } else {
          //检验18位身份证的校验码是否正确。
          //校验位按照ISO 7064:1983.MOD 11-2的规定生成，X可以认为是数字10。
          var valnum;
          var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
          var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
          var nTemp = 0,i;
          for (i = 0; i < 17; i++) {
            nTemp += personnumber.substr(i, 1) * arrInt[i];
          }
          valnum = arrCh[nTemp % 11];
          if (valnum != personnumber.substr(17, 1)) {
            return false;
          }
          return true;
        }
      }
      return false;
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 326:
/*!****************************************************************************!*\
  !*** G:/APPS/钱库/pages/bank/bindbank.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bindbank_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./bindbank.vue?vue&type=style&index=0&lang=scss& */ 327);
/* harmony import */ var _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bindbank_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bindbank_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bindbank_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bindbank_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_custom_block_loader_index_js_ref_0_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_bindbank_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 327:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-custom-block-loader??ref--0-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/APPS/钱库/pages/bank/bindbank.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[320,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/bank/bindbank.js.map
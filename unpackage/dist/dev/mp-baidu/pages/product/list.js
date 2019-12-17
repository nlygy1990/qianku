(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/product/list"],{

/***/ 350:
/*!************************************************************!*\
  !*** G:/APPS/钱库/main.js?{"page":"pages%2Fproduct%2Flist"} ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
__webpack_require__(/*! uni-pages */ 4);
var _list = _interopRequireDefault(__webpack_require__(/*! ./pages/product/list.vue */ 351));
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_list.default.mpType = 'page';
var app = new _vue.default(_list.default);
app.$mount();

/***/ }),

/***/ 351:
/*!*****************************************!*\
  !*** G:/APPS/钱库/pages/product/list.vue ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _list_vue_vue_type_template_id_144eef17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=144eef17& */ 352);
/* harmony import */ var _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.vue?vue&type=script&lang=js& */ 354);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.vue?vue&type=style&index=0&lang=scss& */ 356);
/* harmony import */ var _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/lib/runtime/componentNormalizer.js */ 12);






/* normalize component */

var component = Object(_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _list_vue_vue_type_template_id_144eef17___WEBPACK_IMPORTED_MODULE_0__["render"],
  _list_vue_vue_type_template_id_144eef17___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "G:/APPS/钱库/pages/product/list.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 352:
/*!************************************************************************!*\
  !*** G:/APPS/钱库/pages/product/list.vue?vue&type=template&id=144eef17& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_144eef17___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=template&id=144eef17& */ 353);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_144eef17___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_template_id_144eef17___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ 353:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/APPS/钱库/pages/product/list.vue?vue&type=template&id=144eef17& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "view",
    { staticClass: "content", attrs: { _hid: 0 } },
    [
      _c(
        "view",
        {
          staticClass: "navbar",
          style: { position: _vm.headerPosition, top: _vm.headerTop },
          attrs: { _hid: 1 }
        },
        [
          _c(
            "view",
            {
              staticClass: "nav-item",
              class: { current: _vm.filterIndex === 0 },
              attrs: { _hid: 2 },
              on: {
                click: function($event) {
                  _vm.tabClick(0)
                }
              }
            },
            []
          ),
          _c(
            "view",
            {
              staticClass: "nav-item",
              class: { current: _vm.filterIndex === 1 },
              attrs: { _hid: 4 },
              on: {
                click: function($event) {
                  _vm.tabClick(1)
                }
              }
            },
            []
          ),
          _c(
            "view",
            {
              staticClass: "nav-item",
              class: { current: _vm.filterIndex === 3 },
              attrs: { _hid: 6 },
              on: {
                click: function($event) {
                  _vm.tabClick(3)
                }
              }
            },
            []
          ),
          _c(
            "view",
            {
              staticClass: "nav-item",
              class: { current: _vm.filterIndex === 2 },
              attrs: { _hid: 8 },
              on: {
                click: function($event) {
                  _vm.tabClick(2)
                }
              }
            },
            [
              _c("text", { attrs: { _hid: 9 } }, []),
              _c("view", { staticClass: "p-box", attrs: { _hid: 11 } }, [
                _c("text", {
                  staticClass: "yticon icon-shang",
                  class: {
                    active: _vm.priceOrder === 1 && _vm.filterIndex === 2
                  },
                  attrs: { _hid: 12 }
                }),
                _c("text", {
                  staticClass: "yticon icon-shang xia",
                  class: {
                    active: _vm.priceOrder === 2 && _vm.filterIndex === 2
                  },
                  attrs: { _hid: 13 }
                })
              ])
            ]
          )
        ]
      ),
      _c(
        "view",
        { staticClass: "goods-list", attrs: { _hid: 14 } },
        _vm._l(
          _vm.goodsList,
          function(item, index, item_i2) {
            var _fid = item_i2 !== undefined ? item_i2 : index
            return _c(
              "view",
              {
                key: index,
                staticClass: "goods-item",
                attrs: { _hid: 15, _fid: _fid, _fk: "index" },
                on: {
                  click: function($event) {
                    _vm.navToDetailPage(item)
                  }
                }
              },
              [
                _c(
                  "view",
                  {
                    staticClass: "image-wrapper",
                    attrs: { _hid: 16, _fid: _fid }
                  },
                  [
                    _c("image", {
                      attrs: {
                        src: item.image,
                        mode: "aspectFill",
                        _hid: 17,
                        _fid: _fid,
                        _batrs: "src"
                      }
                    })
                  ]
                ),
                _vm._ri(
                  !!item.labelname,
                  18,
                  item_i2 !== undefined ? item_i2 : index
                )
                  ? _c(
                      "text",
                      { staticClass: "pp", attrs: { _hid: 18, _fid: _fid } },
                      [_vm._v(_vm._s(item.labelname[0]), 19, _fid)]
                    )
                  : _c(
                      "text",
                      { staticClass: "pp", attrs: { _hid: 20, _fid: _fid } },
                      [_vm._v(_vm._s(item.pp.name), 21, _fid)]
                    ),
                _c(
                  "view",
                  { staticClass: "title", attrs: { _hid: 22, _fid: _fid } },
                  [_vm._v(_vm._s(item.title), 23, _fid)]
                ),
                _c(
                  "view",
                  {
                    staticClass: "huodong-box",
                    attrs: { _hid: 24, _fid: _fid }
                  },
                  [
                    _vm._ri(
                      !!(item.shuifei <= 0),
                      25,
                      item_i2 !== undefined ? item_i2 : index
                    )
                      ? _c("text", { attrs: { _hid: 25, _fid: _fid } }, [])
                      : _vm._e(),
                    _vm._ri(
                      !!(item.issendfree == 1),
                      27,
                      item_i2 !== undefined ? item_i2 : index
                    )
                      ? _c("text", { attrs: { _hid: 27, _fid: _fid } }, [])
                      : _vm._e(),
                    _vm._ri(
                      !!(item.cuxiao == 1),
                      29,
                      item_i2 !== undefined ? item_i2 : index
                    )
                      ? _c("text", { attrs: { _hid: 29, _fid: _fid } }, [])
                      : _vm._e()
                  ]
                ),
                _vm._ri(
                  !!(item.shuifei > 0),
                  31,
                  item_i2 !== undefined ? item_i2 : index
                )
                  ? _c(
                      "view",
                      { staticClass: "shui", attrs: { _hid: 31, _fid: _fid } },
                      [_vm._v("预计税费：￥" + _vm._s(item.shuifei), 32, _fid)]
                    )
                  : _c(
                      "view",
                      { staticClass: "shui", attrs: { _hid: 33, _fid: _fid } },
                      []
                    ),
                _c(
                  "view",
                  { staticClass: "price-box", attrs: { _hid: 35, _fid: _fid } },
                  [
                    _c(
                      "text",
                      { staticClass: "price", attrs: { _hid: 36, _fid: _fid } },
                      [_vm._v(_vm._s(item.price), 37, _fid)]
                    ),
                    _c("image", {
                      attrs: {
                        src: "../../static/tab-cart-current.png",
                        mode: "true",
                        _hid: 38,
                        _fid: _fid
                      }
                    })
                  ]
                )
              ]
            )
          },
          15,
          _vm._self
        )
      ),
      _c("uni-load-more", {
        attrs: { status: _vm.loadingType, _hid: 39, _batrs: "status", _cid: 0 }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 354:
/*!******************************************************************!*\
  !*** G:/APPS/钱库/pages/product/list.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=script&lang=js& */ 355);
/* harmony import */ var _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_18_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 355:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--18-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/APPS/钱库/pages/product/list.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 20));





































var _uniLoadMore = _interopRequireDefault(__webpack_require__(/*! @/components/uni-load-more/uni-load-more.vue */ 210));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}var _default =
{
  components: {
    uniLoadMore: _uniLoadMore.default },

  data: function data() {
    return {
      cateMaskState: 0,
      headerPosition: "fixed",
      headerTop: "0px",
      loadingType: 'more',
      filterIndex: 0,
      cateId: 0,
      pcateId: 0,
      priceOrder: 0,
      cateList: [],
      goodsList: [],
      count: '',
      pn: 0,
      bondedwh_id: 0 };


  },
  onLoad: function onLoad(options) {



    if (options.tid) {
      this.cateId = options.tid;
    }
    if (options.sid) {
      this.pcateId = options.sid;
    }
    if (options.bondedwh_id) {
      this.bondedwh_id = options.bondedwh_id;
    }
    this.loadData();
  },
  onPageScroll: function onPageScroll(e) {
    if (e.scrollTop >= 0) {
      this.headerPosition = "fixed";
    } else {
      this.headerPosition = "absolute";
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.loadData('refresh');
  },
  onReachBottom: function onReachBottom() {
    this.loadData();
  },
  methods: {
    loadCateList: function () {var _loadCateList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(fid, sid) {var list, cateList;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  this.$api.json('cateList'));case 2:list = _context.sent;
                cateList = list.filter(function (item) {return item.pid == fid;});

                cateList.forEach(function (item) {
                  var tempList = list.filter(function (val) {return val.pid == item.id;});
                  item.child = tempList;
                });
                this.cateList = cateList;case 6:case "end":return _context.stop();}}}, _callee, this);}));function loadCateList(_x, _x2) {return _loadCateList.apply(this, arguments);}return loadCateList;}(),

    loadData: function () {var _loadData = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var _this = this;var type,loading,goodsList,_args2 = arguments;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:type = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : 'add';loading = _args2.length > 1 ? _args2[1] : undefined;if (!(
                type === 'add')) {_context2.next = 8;break;}if (!(
                this.loadingType === 'nomore')) {_context2.next = 5;break;}return _context2.abrupt("return");case 5:


                this.loadingType = 'loading';_context2.next = 9;break;case 8:

                this.loadingType = 'more';case 9:_context2.next = 11;return (


                  this.getGoodlist());case 11:goodsList = _context2.sent;
                if (type === 'refresh') {
                  this.goodsList = [];
                }
                if (this.filterIndex === 3) {
                  goodsList.sort(function (a, b) {return b.renqi - a.renqi;});
                }
                if (this.filterIndex === 2) {
                  goodsList.sort(function (a, b) {
                    if (_this.priceOrder == 1) {
                      return a.price - b.price;
                    }
                    return b.price - a.price;
                  });
                }
                this.goodsList = this.goodsList.concat(goodsList);
                this.loadingType = this.goodsList.length > this.count ? 'nomore' : 'more';
                if (type === 'refresh') {
                  if (loading == 1) {
                    uni.hideLoading();
                  } else {
                    uni.stopPullDownRefresh();
                  }
                }case 18:case "end":return _context2.stop();}}}, _callee2, this);}));function loadData() {return _loadData.apply(this, arguments);}return loadData;}(),

    getGoodlist: function () {var _getGoodlist = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3() {var _this2 = this;return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:return _context3.abrupt("return",
                new Promise(function (resolve, reject) {
                  uni.request({
                    url: uni.getStorageSync('hostname') + '?action=index/product/index',
                    data: { pn: _this2.pn, cateId: _this2.cateId, pcateId: _this2.pcateId, filterIndex: _this2.filterIndex, priceOrder: _this2.priceOrder, bondedwh_id: _this2.bondedwh_id },
                    method: 'POST',
                    dataType: 'json',
                    header: { 'content-type': 'application/x-www-form-urlencoded' },
                    success: function success(res) {
                      uni.hideLoading();
                      if (res.data.code == 0) {
                        _this2.pn = Number(_this2.pn) + Number(1);
                        _this2.count = res.data.count;
                        resolve(res.data.data);
                      } else {
                        _this2.loadingType = "nomore";
                      }
                    },
                    fail: function fail(err) {
                      reject('err');
                    } });

                }));case 1:case "end":return _context3.stop();}}}, _callee3, this);}));function getGoodlist() {return _getGoodlist.apply(this, arguments);}return getGoodlist;}(),

    tabClick: function tabClick(index) {
      this.pn = 0;
      if (this.filterIndex === index && index !== 2) {
        return;
      }
      this.filterIndex = index;
      if (index === 2) {
        this.priceOrder = this.priceOrder === 1 ? 2 : 1;
      } else {
        this.priceOrder = 0;
      }
      uni.pageScrollTo({
        duration: 300,
        scrollTop: 0 });

      this.loadData('refresh', 1);
      uni.showLoading({
        title: '正在加载' });

    },
    navToDetailPage: function navToDetailPage(item) {
      var id = item.id;
      if (uni.getStorageSync('cbe_token')) {
        uni.navigateTo({
          url: "/pages/product/product?id=".concat(id, "&utoken=").concat(uni.getStorageSync('cbe_token')) });

      } else {
        uni.navigateTo({
          url: "/pages/product/product?id=".concat(id) });

      }
    },
    stopPrevent: function stopPrevent() {} } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-baidu/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 356:
/*!***************************************************************************!*\
  !*** G:/APPS/钱库/pages/product/list.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./list.vue?vue&type=style&index=0&lang=scss& */ 357);
/* harmony import */ var _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_1_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_index_js_ref_8_oneOf_1_2_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_loaders_stylePostLoader_js_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_lib_loader_js_ref_8_oneOf_1_4_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_C_Users_wuyazi_Desktop_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_list_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 357:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-1!./node_modules/css-loader??ref--8-oneOf-1-2!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/sass-loader/lib/loader.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!G:/APPS/钱库/pages/product/list.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[[350,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-baidu/pages/product/list.js.map
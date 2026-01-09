(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[4974],{

/***/ 4195
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9837);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("0a275f7d", content, shadowRoot)
};

/***/ },

/***/ 4974
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ProcessingParameters)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/internal/ProcessingParameters.vue?vue&type=template&id=49cce8dd
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _vm.show ? _c('section', {
    staticClass: "openeo-vue-component processing-parameters"
  }, [_c('h3', [_vm._v("Advanced Parameters")]), _vm._l(_vm.sortedParameters, function (param) {
    return _c('div', {
      key: param.name,
      staticClass: "row"
    }, [_c('div', {
      staticClass: "tabular"
    }, [_c('label', [_vm._v(_vm._s(param.name) + ":")]), _c('ObjectTree', {
      staticClass: "value",
      attrs: {
        "data": _vm.values[param.name]
      }
    })], 1), param.description ? _c('Description', {
      attrs: {
        "description": param.description,
        "compact": ""
      }
    }) : _vm._e()], 1);
  })], 2) : _vm._e();
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./utils.js + 4 modules
var utils = __webpack_require__(9061);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/internal/ProcessingParameters.vue?vue&type=script&lang=js

/* harmony default export */ const ProcessingParametersvue_type_script_lang_js = ({
  name: 'ProcessingParameters',
  components: {
    Collapse: () => __webpack_require__.e(/* import() */ 7195).then(__webpack_require__.bind(__webpack_require__, 7195)),
    Description: () => Promise.all(/* import() */[__webpack_require__.e(855), __webpack_require__.e(1500)]).then(__webpack_require__.bind(__webpack_require__, 1500)),
    ObjectTree: () => __webpack_require__.e(/* import() */ 9139).then(__webpack_require__.bind(__webpack_require__, 1520))
  },
  props: {
    parameters: {
      type: Array,
      default: () => []
    },
    data: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    values() {
      const keys = this.parameters.map(param => param.name).filter(key => key in this.data);
      return utils/* default */.A.pickFromObject(this.data, keys);
    },
    show() {
      return utils/* default */.A.size(this.values) > 0;
    },
    sortedParameters() {
      if (Array.isArray(this.parameters)) {
        const params = this.parameters.filter(param => param.name in this.values);
        params.sort((a, b) => utils/* default */.A.compareStringCaseInsensitive(a.name, b.name));
        return params;
      } else {
        return [];
      }
    }
  }
});
;// ./components/internal/ProcessingParameters.vue?vue&type=script&lang=js
 /* harmony default export */ const internal_ProcessingParametersvue_type_script_lang_js = (ProcessingParametersvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/internal/ProcessingParameters.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(6948)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  internal_ProcessingParametersvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const ProcessingParameters = (component.exports);

/***/ },

/***/ 6948
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ProcessingParameters_vue_vue_type_style_index_0_id_49cce8dd_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4195);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ProcessingParameters_vue_vue_type_style_index_0_id_49cce8dd_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ProcessingParameters_vue_vue_type_style_index_0_id_49cce8dd_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ProcessingParameters_vue_vue_type_style_index_0_id_49cce8dd_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ProcessingParameters_vue_vue_type_style_index_0_id_49cce8dd_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ 9837
(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.openeo-vue-component.processing-parameters .row{margin-bottom:.75em}.openeo-vue-component.processing-parameters .row .styled-description{font-size:.8em;color:#666}.openeo-vue-component.processing-parameters .row .value>ol,.openeo-vue-component.processing-parameters .row .value>ul{margin:0}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }

}]);
//# sourceMappingURL=openeo.4974.js.map
(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[7195],{

/***/ 2154
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9360);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("52b321e2", content, shadowRoot)
};

/***/ },

/***/ 6205
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Collapse_vue_vue_type_style_index_0_id_1205cb4a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2154);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Collapse_vue_vue_type_style_index_0_id_1205cb4a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Collapse_vue_vue_type_style_index_0_id_1205cb4a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Collapse_vue_vue_type_style_index_0_id_1205cb4a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Collapse_vue_vue_type_style_index_0_id_1205cb4a_prod_lang_scss_scoped_true__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ 7195
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Collapse)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/internal/Collapse.vue?vue&type=template&id=1205cb4a&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vue-component collapse",
    class: {
      expanded: _vm.show
    }
  }, [_c(_vm.headingTag, {
    tag: "component",
    staticClass: "heading",
    on: {
      "click": _vm.toggleHeading
    }
  }, [_vm._v(" " + _vm._s(_vm.title) + " ")]), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.show,
      expression: "show"
    }],
    staticClass: "body"
  }, [_vm._t("default")], 2)], 1);
};
var staticRenderFns = [];

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/internal/Collapse.vue?vue&type=script&lang=js
/* harmony default export */ const Collapsevue_type_script_lang_js = ({
  name: 'Collapse',
  props: {
    title: {
      type: String,
      default: null
    },
    headingTag: {
      type: String,
      default: 'h2'
    },
    collapsed: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      show: !this.collapsed
    };
  },
  watch: {
    collapsed(newState) {
      this.show = newState;
    }
  },
  methods: {
    toggleHeading() {
      this.show = !this.show;
      this.$emit('headingToggled', this.show);
    }
  }
});
;// ./components/internal/Collapse.vue?vue&type=script&lang=js
 /* harmony default export */ const internal_Collapsevue_type_script_lang_js = (Collapsevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/internal/Collapse.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(6205)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  internal_Collapsevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1205cb4a",
  null
  ,true
)

/* harmony default export */ const Collapse = (component.exports);

/***/ },

/***/ 9360
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
___CSS_LOADER_EXPORT___.push([module.id, `.collapse .heading[data-v-1205cb4a]{cursor:pointer;padding-left:1em}.collapse .heading[data-v-1205cb4a]:before{content:"▸";margin-left:-1em;float:left;font-size:1em}.collapse.expanded .heading[data-v-1205cb4a]:before{content:"▾"}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }

}]);
//# sourceMappingURL=openeo.7195.js.map
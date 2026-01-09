(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[4701,7082],{

/***/ 1731:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8553);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("0986ba63", content, shadowRoot)
};

/***/ }),

/***/ 6236:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ParameterViewer_vue_vue_type_style_index_0_id_0d774f1c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1731);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ParameterViewer_vue_vue_type_style_index_0_id_0d774f1c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ParameterViewer_vue_vue_type_style_index_0_id_0d774f1c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ParameterViewer_vue_vue_type_style_index_0_id_0d774f1c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ParameterViewer_vue_vue_type_style_index_0_id_0d774f1c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 7082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ParameterViewer)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/model-builder/ParameterViewer.vue?vue&type=template&id=0d774f1c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vue-component parameter-viewer"
  }, [_c('header', [_c('h2', [_vm._v(_vm._s(_vm.title))]), _c('button', {
    staticClass: "close",
    on: {
      "click": function ($event) {
        return _vm.$emit('close');
      }
    }
  }, [_vm._v("Close")])]), _vm.data.length === 0 ? _c('p', [_vm._v("No parameters available.")]) : _vm._l(_vm.data, function (param) {
    return _c('section', {
      key: param.name,
      class: param.classes
    }, [_c('h3', [_vm._v(_vm._s(param.name))]), param.isObject && param.value.from_node ? _c('div', {
      staticClass: "externalData fromNode"
    }, [_c('em', [_vm._v("Output of "), _c('tt', [_vm._v("#" + _vm._s(param.value.from_node))])], 1)]) : param.isObject && param.value.from_parameter ? _c('div', {
      staticClass: "externalData fromArgument"
    }, [_c('em', [_vm._v("Value of process parameter "), _c('tt', [_vm._v("#" + _vm._s(param.value.from_parameter))])], 1)]) : param.isObject && param.value.process_graph ? _c('ModelBuilder', {
      attrs: {
        "id": param.name,
        "value": param.value,
        "parent": _vm.parent,
        "explicitZoom": true
      }
    }) : _c('ObjectTree', {
      attrs: {
        "data": param.value
      }
    }), param.description ? _c('div', {
      staticClass: "description"
    }, [_c('i', {
      staticClass: "fas fa-info-circle"
    }), _c('Description', {
      attrs: {
        "description": param.description,
        "compact": true
      }
    })], 1) : _vm._e()], 1);
  })], 2);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./utils.js + 4 modules
var utils = __webpack_require__(9061);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/model-builder/ParameterViewer.vue?vue&type=script&lang=js

/* harmony default export */ const ParameterViewervue_type_script_lang_js = ({
  name: 'ParameterViewer',
  components: {
    Description: () => Promise.all(/* import() */[__webpack_require__.e(855), __webpack_require__.e(1500)]).then(__webpack_require__.bind(__webpack_require__, 1500)),
    ObjectTree: () => __webpack_require__.e(/* import() */ 9139).then(__webpack_require__.bind(__webpack_require__, 1520))
  },
  props: {
    title: {
      type: String,
      default: "Parameters"
    },
    parameters: {
      type: Array,
      default: () => []
    },
    values: {
      type: Object,
      default: () => ({})
    },
    selectParameterName: {
      type: String,
      default: null
    },
    parent: {
      type: Object,
      default: null
    }
  },
  computed: {
    data() {
      return this.parameters.map(param => {
        let value = this.values[param.name];
        return {
          name: param.name,
          classes: {
            highlight: param.name === this.selectParameterName
          },
          description: param.description,
          value,
          isObject: utils/* default */.A.isObject(value)
        };
      });
    }
  },
  beforeCreate() {
    // Circular dependency leads to errors when building with target wc(-async)
    // See https://vuejs.org/v2/guide/components-edge-cases.html#Circular-References-Between-Components
    this.$options.components.ModelBuilder = (__webpack_require__(9745)["default"]);
  },
  mounted() {
    if (this.selectParameterName) {
      let elem = this.$el.querySelector('section.highlight');
      if (elem) {
        let top = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        let left = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        elem.scrollIntoView();
        document.documentElement.scrollTop = document.body.scrollTop = top;
        document.documentElement.scrollLeft = document.body.scrollLeft = left;
      }
    }
  }
});
;// ./components/model-builder/ParameterViewer.vue?vue&type=script&lang=js
 /* harmony default export */ const model_builder_ParameterViewervue_type_script_lang_js = (ParameterViewervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/model-builder/ParameterViewer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(6236)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  model_builder_ParameterViewervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const ParameterViewer = (component.exports);

/***/ }),

/***/ 8553:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `.vue-component.parameter-viewer{position:absolute;width:100%;height:100%;z-index:10;overflow:auto;padding:1em;box-sizing:border-box;background-color:#fff;color:#000}.vue-component.parameter-viewer>section>.model-builder{height:400px}.vue-component.parameter-viewer>section{border-top:1px dotted gray;margin:1em 0}.vue-component.parameter-viewer>section>.description{display:flex;align-items:center;justify-content:center;margin-top:1em}.vue-component.parameter-viewer>section>.description>i.fas{margin-right:.5em;color:gray}.vue-component.parameter-viewer>section>.description>.styled-description{flex-grow:1;font-size:.9em;border-left:1px solid gray;padding-left:.5em;color:gray}.vue-component.parameter-viewer .close{position:absolute;top:1.1em;right:1em}.vue-component.parameter-viewer header h2{margin-top:0;font-size:1.2em}.vue-component.parameter-viewer h3{font-size:1.1em}.vue-component.parameter-viewer .highlight h3{color:red}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=openeo.4701.js.map
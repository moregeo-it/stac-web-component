(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[8373],{

/***/ 1439:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ ProcessExample)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/internal/ProcessExample.vue?vue&type=template&id=ed09847c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vue-component process-example"
  }, [_c('h4', [_vm._v(_vm._s(_vm.title))]), _c('div', {
    staticClass: "content"
  }, [_vm.example.description ? _c('Description', {
    attrs: {
      "description": _vm.example.description,
      "processUrl": _vm.processUrl,
      "compact": true
    }
  }) : _vm._e(), _vm.example.arguments ? _c('div', {
    staticClass: "arguments"
  }, [_c('code', {
    domProps: {
      "innerHTML": _vm._s(_vm.renderedArguments)
    }
  })]) : _vm._e()], 1)]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./utils.js + 4 modules
var utils = __webpack_require__(9061);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/internal/ProcessExample.vue?vue&type=script&lang=js

/* harmony default export */ const ProcessExamplevue_type_script_lang_js = ({
  name: 'ProcessExample',
  props: {
    id: Number,
    example: Object,
    processId: String,
    processParameters: Array,
    processUrl: String
  },
  components: {
    Description: () => Promise.all(/* import() */[__webpack_require__.e(855), __webpack_require__.e(1500)]).then(__webpack_require__.bind(__webpack_require__, 1500))
  },
  computed: {
    identifier() {
      return "#" + (this.id + 1);
    },
    title() {
      return this.example.title ? this.example.title + " (" + this.identifier + ")" : "Example " + this.identifier;
    },
    renderedArguments() {
      var params = [];
      for (var i in this.processParameters) {
        var param = this.processParameters[i];
        if (typeof this.example.arguments[param.name] !== 'undefined') {
          var arg = this.example.arguments[param.name];
          let displayValue;
          if (utils/* default */.A.isObject(arg) && arg.from_parameter) {
            displayValue = '<em title="Variable">$' + utils/* default */.A.htmlentities(arg.from_parameter) + '</em>';
          } else if (utils/* default */.A.isObject(arg) && arg.from_node) {
            displayValue = '<em title="Result from other process">$' + utils/* default */.A.htmlentities(arg.from_node) + '</em>';
            ;
          } else {
            displayValue = JSON.stringify(arg);
          }
          params.push('<span class="param-name">' + param.name + '</span> = <span class="argument">' + displayValue + '</span>');
        }
      }
      var returns = "";
      if (typeof this.example.returns !== 'undefined') {
        returns = ' => <span class="return-value">' + JSON.stringify(this.example.returns) + '</span>';
      }
      return '<span class="process-name">' + this.processId + '</span>' + "(" + params.join(", ") + ")" + returns;
    }
  }
});
;// ./components/internal/ProcessExample.vue?vue&type=script&lang=js
 /* harmony default export */ const internal_ProcessExamplevue_type_script_lang_js = (ProcessExamplevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/internal/ProcessExample.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(1582)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  internal_ProcessExamplevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const ProcessExample = (component.exports);

/***/ }),

/***/ 1582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ProcessExample_vue_vue_type_style_index_0_id_ed09847c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2573);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ProcessExample_vue_vue_type_style_index_0_id_ed09847c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ProcessExample_vue_vue_type_style_index_0_id_ed09847c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ProcessExample_vue_vue_type_style_index_0_id_ed09847c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ProcessExample_vue_vue_type_style_index_0_id_ed09847c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 2171:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9481);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("42f29882", content, shadowRoot)
};

/***/ }),

/***/ 2573:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5699);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("42458e55", content, shadowRoot)
};

/***/ }),

/***/ 2748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_0_id_e72cf93c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2171);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_0_id_e72cf93c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_0_id_e72cf93c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_0_id_e72cf93c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Process_vue_vue_type_style_index_0_id_e72cf93c_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 5699:
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
___CSS_LOADER_EXPORT___.push([module.id, `.vue-component.process-example .content{border-left:5px solid #ccc;border-bottom:1px solid #ccc;padding:.5em;margin-left:3em;box-sizing:border-box}.vue-component.process-example .content .styled-description{margin-bottom:1em}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8373:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Process)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Process.vue?vue&type=template&id=e72cf93c
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('article', {
    staticClass: "vue-component process"
  }, [_vm.process.id ? _vm._t("title", function () {
    return [_c('a', {
      staticClass: "anchor",
      attrs: {
        "name": _vm.process.id
      }
    }), _c('h2', [_vm._v(" " + _vm._s(_vm.process.id) + " "), _vm.displayableNamespace ? _c('span', {
      staticClass: "namespace"
    }, [_vm._v(" — " + _vm._s(_vm.displayableNamespace))]) : _vm._e()])];
  }, {
    "vBind": _vm.$props,
    "displayableNamespace": _vm.displayableNamespace
  }) : _vm._e(), _vm.process.summary || _vm.process.deprecated || _vm.process.experimental ? [_c('summary', [_vm._v(" " + _vm._s(_vm.process.summary) + " "), _vm.process.deprecated || _vm.process.experimental ? [_vm.process.summary ? [_vm._v(" — ")] : _vm._e(), _vm.process.deprecated ? _c('strong', {
    staticClass: "deprecated"
  }, [_vm._v("deprecated")]) : _vm._e(), _vm.process.experimental ? _c('strong', {
    staticClass: "experimental"
  }, [_vm._v("experimental")]) : _vm._e()] : _vm._e()], 2)] : _vm._e(), _vm.provideDownload || _vm.hasElements(_vm.process.categories) ? [_c('div', {
    staticClass: "process-bar"
  }, [_vm.hasElements(_vm.process.categories) ? _c('ul', {
    staticClass: "badges categories"
  }, _vm._l(_vm.process.categories, function (value) {
    return _c('li', {
      key: value,
      staticClass: "badge category",
      domProps: {
        "textContent": _vm._s(_vm.formatCategory(value))
      }
    });
  }), 0) : _vm._e(), _vm.provideDownload ? _c('ul', {
    staticClass: "badges actions"
  }, [_c('li', {
    staticClass: "badge action download"
  }, [_c('a', {
    staticClass: "badge-fill",
    on: {
      "click": _vm.download
    }
  }, [_vm._v("Download JSON")])])]) : _vm._e()])] : _vm._e(), _vm._t("before-description", null, {
    "vBind": _vm.$props
  }), _vm.process.description || _vm.process.deprecated || _vm.process.experimental || _vm.process['federation:backends'] ? _c('section', {
    staticClass: "description"
  }, [_c('h3', [_vm._v("Description")]), _c('code', {
    staticClass: "signature",
    domProps: {
      "innerHTML": _vm._s(_vm.signature)
    }
  }), _vm.process.description ? _c('Description', {
    attrs: {
      "description": _vm.process.description,
      "processUrl": _vm.processUrl
    }
  }) : _vm._e(), _vm.process.deprecated ? _c('DeprecationNotice', {
    attrs: {
      "entity": "process"
    }
  }) : _vm._e(), _vm.process.experimental ? _c('ExperimentalNotice', {
    attrs: {
      "entity": "process"
    }
  }) : _vm._e(), _vm.process['federation:backends'] ? _c('FederationNotice', {
    attrs: {
      "backends": _vm.process['federation:backends'],
      "federation": _vm.federation,
      "entity": "process"
    }
  }) : _vm._e()], 1) : _vm._e(), _c('section', {
    staticClass: "parameters"
  }, [_c('h3', [_vm._v("Parameters")]), _vm._l(_vm.parameters, function (param) {
    return _c('ProcessParameter', {
      key: param.name,
      attrs: {
        "parameter": param,
        "processUrl": _vm.processUrl,
        "federation": _vm.federation
      }
    });
  }), _vm.parameters.length === 0 ? _c('p', [_vm._v("This process has no parameters.")]) : _vm._e()], 2), _c('section', {
    staticClass: "returns"
  }, [_c('h3', [_vm._v("Return Value")]), _vm.returns.description || _vm.returns.schema ? [_vm.returns.description ? _c('Description', {
    attrs: {
      "description": _vm.returns.description,
      "processUrl": _vm.processUrl
    }
  }) : _vm._e(), _vm.returns.schema ? _c('div', {
    staticClass: "json-schema-container"
  }, [_c('JsonSchema', {
    attrs: {
      "schema": _vm.returns.schema
    }
  })], 1) : _vm._e()] : _c('p', [_vm._v("The return value has not been defined.")])], 2), _vm.hasElements(_vm.process.exceptions) ? _c('section', {
    staticClass: "exceptions"
  }, [_c('h3', [_vm._v("Errors/Exceptions")]), _c('ul', _vm._l(_vm.process.exceptions, function (exception, name) {
    return _c('li', {
      key: name,
      staticClass: "exception"
    }, [_c('code', [_vm._v(_vm._s(name))]), exception.http ? _c('span', {
      staticClass: "http-code"
    }, [_vm._v(" — HTTP " + _vm._s(exception.http))]) : _vm._e(), exception.code ? _c('span', {
      staticClass: "error-code"
    }, [_vm._v(" — " + _vm._s(exception.code))]) : _vm._e(), exception.description ? _c('Description', {
      attrs: {
        "description": exception.description,
        "processUrl": _vm.processUrl,
        "compact": true
      }
    }) : _vm._e(), exception.message ? _c('div', {
      staticClass: "message"
    }, [_vm._v("Message: "), _c('em', [_vm._v(_vm._s(exception.message))])]) : _vm._e()], 1);
  }), 0)]) : _vm._e(), _vm.hasElements(_vm.process.examples) ? _c('section', {
    staticClass: "examples"
  }, [_c('h3', [_vm._v("Examples")]), _vm._l(_vm.process.examples, function (example, key) {
    return _c('ProcessExample', {
      key: key,
      attrs: {
        "id": key,
        "example": example,
        "processId": _vm.id,
        "processParameters": _vm.parameters,
        "processUrl": _vm.processUrl
      }
    });
  }), _c('LinkList', {
    attrs: {
      "links": _vm.exampleLinks,
      "heading": "Processes",
      "headingTag": "h4"
    }
  })], 2) : _vm._e(), _c('section', {
    staticClass: "links"
  }, [_c('LinkList', {
    attrs: {
      "links": _vm.process.links,
      "heading": "See Also",
      "headingTag": "h3",
      "ignoreRel": ['self', 'example']
    }
  })], 1), _vm.showGraph && _vm.process.process_graph ? _c('section', {
    staticClass: "process-graph"
  }, [_c('h3', [_vm._v("Processing Instructions")]), _c('div', {
    staticClass: "graph"
  }, [_vm._t("process-graph", function () {
    return [_c('ModelBuilder', {
      attrs: {
        "id": _vm.id,
        "value": _vm.process,
        "explicitZoom": true
      }
    })];
  }, {
    "vBind": _vm.$props
  })], 2)]) : _vm._e(), _vm._t("end", null, {
    "vBind": _vm.$props
  })], 2);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./components/internal/ProcessExample.vue + 3 modules
var ProcessExample = __webpack_require__(1439);
// EXTERNAL MODULE: ./components/internal/FederationMixin.js
var FederationMixin = __webpack_require__(1507);
// EXTERNAL MODULE: ./utils.js + 4 modules
var utils = __webpack_require__(9061);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Process.vue?vue&type=script&lang=js



/* harmony default export */ const Processvue_type_script_lang_js = ({
  name: 'Process',
  components: {
    JsonSchema: () => __webpack_require__.e(/* import() */ 4864).then(__webpack_require__.bind(__webpack_require__, 4864)),
    DeprecationNotice: () => __webpack_require__.e(/* import() */ 815).then(__webpack_require__.bind(__webpack_require__, 815)),
    Description: () => Promise.all(/* import() */[__webpack_require__.e(855), __webpack_require__.e(1500)]).then(__webpack_require__.bind(__webpack_require__, 1500)),
    ExperimentalNotice: () => __webpack_require__.e(/* import() */ 6957).then(__webpack_require__.bind(__webpack_require__, 6957)),
    ModelBuilder: () => Promise.all(/* import() */[__webpack_require__.e(4435), __webpack_require__.e(9745), __webpack_require__.e(3539)]).then(__webpack_require__.bind(__webpack_require__, 9745)),
    ProcessExample: ProcessExample/* default */.A,
    ProcessParameter: () => __webpack_require__.e(/* import() */ 8479).then(__webpack_require__.bind(__webpack_require__, 8479)),
    LinkList: () => __webpack_require__.e(/* import() */ 9940).then(__webpack_require__.bind(__webpack_require__, 9940))
  },
  mixins: [FederationMixin/* default */.A],
  props: {
    process: {
      type: Object,
      default: () => ({})
    },
    namespace: {
      type: String,
      default: null
    },
    provideDownload: {
      type: Boolean,
      default: true
    },
    processUrl: String,
    showGraph: {
      type: Boolean,
      default: false
    },
    ...FederationMixin/* default */.A.props
  },
  computed: {
    displayableNamespace() {
      let namespace = this.process.namespace || this.namespace;
      if (namespace === 'backend') {
        return '';
      } else if (namespace === 'user') {
        return 'user-defined';
      } else {
        return namespace;
      }
    },
    id() {
      return this.process.id || 'unnamed';
    },
    parameters() {
      if (Array.isArray(this.process.parameters)) {
        return this.process.parameters;
      } else {
        return [];
      }
    },
    returns() {
      if (utils/* default */.A.isObject(this.process.returns)) {
        return this.process.returns;
      } else {
        return {};
      }
    },
    signature(html = true) {
      return utils/* default */.A.formatProcessSignature(this, html);
    },
    exampleLinks() {
      if (Array.isArray(this.process.links)) {
        return this.process.links.filter(l => l.rel === 'example');
      }
      return [];
    }
  },
  beforeCreate() {
    utils/* default */.A.enableHtmlProps(this);
  },
  methods: {
    hasElements(data) {
      return typeof data === 'object' && data !== null && Object.keys(data).length > 0;
    },
    formatCategory(name) {
      return name.replace('_', ' ');
    },
    download() {
      let dataStr = "data:application/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.process, null, 2));
      let downloadAnchorNode = document.createElement('a');
      downloadAnchorNode.setAttribute("href", dataStr);
      downloadAnchorNode.setAttribute("download", this.id + ".json");
      document.body.appendChild(downloadAnchorNode);
      downloadAnchorNode.click();
      downloadAnchorNode.remove();
    }
  }
});
;// ./components/Process.vue?vue&type=script&lang=js
 /* harmony default export */ const components_Processvue_type_script_lang_js = (Processvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/Process.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(2748)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_Processvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const Process = (component.exports);

/***/ }),

/***/ 9481:
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
___CSS_LOADER_EXPORT___.push([module.id, `.vue-component .highlight-box{box-shadow:0 0 0 .2em #c8e1ff}.vue-component code.id{color:maroon}.vue-component abbr{-webkit-text-decoration:underline dotted 1px;text-decoration:underline dotted 1px}.vue-component .unit{opacity:.6}.vue-component .status[data-value=submitted]{color:#000}.vue-component .status[data-value=running]{color:#ff8c00}.vue-component .status[data-value=queued]{color:#00008b}.vue-component .status[data-value=finished]{color:#006400}.vue-component .status[data-value=canceled]{color:#a9a9a9}.vue-component .status[data-value=error]{color:red}.vue-component.inline.process{margin-left:1em}.vue-component.inline h1{font-size:1.17em}.vue-component.inline h2{font-size:1.1em}.vue-component.inline h3{font-size:1.05em}.vue-component.inline h4,.vue-component.inline h5,.vue-component.inline h6{font-size:1em}.vue-component .comma-separated-list{display:inline;list-style:none;padding:0}.vue-component .comma-separated-list li{display:inline;padding:0}.vue-component .comma-separated-list li:after{content:", "}.vue-component .comma-separated-list li:last-child:after{content:""}.vue-component .required{color:red;font-weight:700}.vue-component.message-block{margin:1em 0;padding:.5em}.vue-component.message-block>strong{display:block;margin-bottom:.5em}.vue-component.message-block>p{margin:0}.vue-component .param-name,.vue-component .process-name{color:#369}.vue-component .param-argument,.vue-component .return-value{color:#936}.vue-component .data-type{color:#693}.vue-component .param-optional{font-weight:700}.vue-component .badges{margin:0;padding:0;list-style-type:none;display:inline-block}.vue-component .badges .badge{display:inline-block;font-size:.8em;margin:.25em;padding:.35em .5em .25em .5em;line-height:1em;text-align:center;white-space:nowrap;text-transform:uppercase;vertical-align:initial;border-radius:.5em;color:#fff;background-color:#6c757d}.vue-component .badges:not(.inline){margin-left:-.25em;margin-right:-.25em}.vue-component .badges.small .badge{padding:.25em .35em .2em .35em;font-size:.75em}.vue-component .badges.inline{margin-left:.5em;border-radius:.25em}.vue-component .badges.inline .badge{margin-top:0;margin-bottom:0}.vue-component .badges .badge a{color:#fff;border-bottom:1px dotted #fff;text-decoration:none}.vue-component .badges .badge a.badge-fill{margin:-.35em -.5em;padding:.35em .5em;display:block;border-bottom:0}.vue-component .badges.small .badge a.badge-fill{margin:-.2em -.3em;padding:.25em .35em}.vue-component .badges .badge a:hover{color:#fff;border-bottom-style:solid}.vue-component .badges .default{background-color:#555}.vue-component .badges .green{background-color:green}.vue-component .badges .red{background-color:maroon}.vue-component .badges .option1{background-color:#369}.vue-component .badges .option2{background-color:#693}.vue-component .badges .option3{background-color:#936}.vue-component .badges .option4{background-color:#963}.vue-component .badges .deprecated{background-color:red}.vue-component .badges .experimental{background-color:#8a2be2}.vue-component .badges .action{border:1px solid #000;background-color:#fff;color:#000;margin:.33em;cursor:pointer;text-transform:none}.vue-component .badges .action:hover{background-color:#000;color:#fff}.vue-component .badges .action:hover>a{color:#fff}.vue-component .badges .action>a{color:#000}.vue-component .badges .docker{background-color:#0db7ed}.vue-component .tabular{display:flex;margin:.2em 0;padding:1px}.vue-component .tabular label{flex:1;font-weight:700}.vue-component .tabular .value{flex:3}.vue-component .tabular .value td>div,.vue-component .tabular .value>.formatted>ul,.vue-component .tabular .value>ul,.vue-component .tabular ul.value{max-height:15em;overflow:auto}.vue-component .tabular .value pre{margin:0}.vue-component.stac .map{background:#0000;height:350px}.vue-component.stac .tabular{margin:.5em 0}.vue-component.stac .tabular.wrap{display:block}.vue-component.stac .tabular.wrap .value{margin-top:.5em;margin-left:1em;margin-bottom:.5em}.vue-component.stac .tabular .value ul{padding-left:20px}.assets.empty,.vue-component.stac .links:empty{display:none}.vue-component.stac .thumbnails{overflow-x:auto;overflow-y:hidden;width:100%;white-space:nowrap}.vue-component.stac .thumbnails a{margin:5px;display:inline-block}.vue-component.stac .thumbnails a img{padding:2px;max-height:200px;vertical-align:middle;border:2px solid #0000}.vue-component.stac .thumbnails a:hover img{border:2px solid #00000080}.vue-component .federation>ul>li{margin-bottom:.5em}.vue-component .federation>ul>li>small{display:block}.vue-component .federation>ul>li>h4{margin:0}.vue-component .federation .fed-header{margin:.2em 0}.vue-component .federation .fed-header>.fed-title{display:inline-block;vertical-align:bottom}.vue-component.process .namespace{font-weight:400;color:#aaa}.vue-component.process .process-bar{display:flex;align-items:baseline}.vue-component.process .process-bar .badges{margin-top:.75em}.vue-component.process .categories{flex:1}.vue-component.process .actions{text-align:right}.vue-component.process strong.deprecated{color:red}.vue-component.process strong.experimental{color:#8a2be2}.vue-component.process .exception{margin-top:.5em}.vue-component.process .exception code{font-weight:700}.vue-component.process .exception .styled-description{margin:.5em 0}.vue-component.process .exception .message{margin:.5em 0;font-size:.8em}.vue-component.process .signature{display:block;margin:1em 0}.vue-component.process .process-graph .graph{max-width:100%;height:300px;border:1px solid #ccc}.vue-component.process .process-graph .graph>.object-tree>ul{margin:0;padding:0}.vue-component.process .links:empty{display:none}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=openeo.8373.js.map
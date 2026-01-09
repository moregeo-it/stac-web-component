(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[1507,8426],{

/***/ 1507
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    FederationNotice: () => __webpack_require__.e(/* import() */ 7881).then(__webpack_require__.bind(__webpack_require__, 7881)),
    FederationMissingNotice: () => __webpack_require__.e(/* import() */ 119).then(__webpack_require__.bind(__webpack_require__, 119))
  },
  props: {
    federation: {
      type: Object,
      default: () => ({})
    }
  }
});

/***/ },

/***/ 3706
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Job_vue_vue_type_style_index_0_id_261c24d8_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9687);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Job_vue_vue_type_style_index_0_id_261c24d8_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Job_vue_vue_type_style_index_0_id_261c24d8_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Job_vue_vue_type_style_index_0_id_261c24d8_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Job_vue_vue_type_style_index_0_id_261c24d8_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ 5581
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9061);

const usageLabels = {
  cpu: "CPU usage",
  memory: "Memory usage",
  duration: "Wall time",
  network: "Network Transfer IO",
  disk: "Storage IO",
  storage: "Storage space"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  computed: {
    hasUsageMetrics() {
      return _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.size(this.usage) > 0;
    }
  },
  filters: {
    usageLabel(key) {
      if (usageLabels[key]) {
        return usageLabels[key];
      } else {
        return _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.prettifyString(key);
      }
    },
    usageValue(num) {
      if (typeof num === 'number') {
        return num.toLocaleString();
      }
      return num;
    }
  }
});

/***/ },

/***/ 7838
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
___CSS_LOADER_EXPORT___.push([module.id, `.vue-component .highlight-box{box-shadow:0 0 0 .2em #c8e1ff}.vue-component code.id{color:maroon}.vue-component abbr{-webkit-text-decoration:underline dotted 1px;text-decoration:underline dotted 1px}.vue-component .unit{opacity:.6}.vue-component .status[data-value=submitted]{color:#000}.vue-component .status[data-value=running]{color:#ff8c00}.vue-component .status[data-value=queued]{color:#00008b}.vue-component .status[data-value=finished]{color:#006400}.vue-component .status[data-value=canceled]{color:#a9a9a9}.vue-component .status[data-value=error]{color:red}.vue-component.inline.process{margin-left:1em}.vue-component.inline h1{font-size:1.17em}.vue-component.inline h2{font-size:1.1em}.vue-component.inline h3{font-size:1.05em}.vue-component.inline h4,.vue-component.inline h5,.vue-component.inline h6{font-size:1em}.vue-component .comma-separated-list{display:inline;list-style:none;padding:0}.vue-component .comma-separated-list li{display:inline;padding:0}.vue-component .comma-separated-list li:after{content:", "}.vue-component .comma-separated-list li:last-child:after{content:""}.vue-component .required{color:red;font-weight:700}.vue-component.message-block{margin:1em 0;padding:.5em}.vue-component.message-block>strong{display:block;margin-bottom:.5em}.vue-component.message-block>p{margin:0}.vue-component .param-name,.vue-component .process-name{color:#369}.vue-component .param-argument,.vue-component .return-value{color:#936}.vue-component .data-type{color:#693}.vue-component .param-optional{font-weight:700}.vue-component .badges{margin:0;padding:0;list-style-type:none;display:inline-block}.vue-component .badges .badge{display:inline-block;font-size:.8em;margin:.25em;padding:.35em .5em .25em .5em;line-height:1em;text-align:center;white-space:nowrap;text-transform:uppercase;vertical-align:initial;border-radius:.5em;color:#fff;background-color:#6c757d}.vue-component .badges:not(.inline){margin-left:-.25em;margin-right:-.25em}.vue-component .badges.small .badge{padding:.25em .35em .2em .35em;font-size:.75em}.vue-component .badges.inline{margin-left:.5em;border-radius:.25em}.vue-component .badges.inline .badge{margin-top:0;margin-bottom:0}.vue-component .badges .badge a{color:#fff;border-bottom:1px dotted #fff;text-decoration:none}.vue-component .badges .badge a.badge-fill{margin:-.35em -.5em;padding:.35em .5em;display:block;border-bottom:0}.vue-component .badges.small .badge a.badge-fill{margin:-.2em -.3em;padding:.25em .35em}.vue-component .badges .badge a:hover{color:#fff;border-bottom-style:solid}.vue-component .badges .default{background-color:#555}.vue-component .badges .green{background-color:green}.vue-component .badges .red{background-color:maroon}.vue-component .badges .option1{background-color:#369}.vue-component .badges .option2{background-color:#693}.vue-component .badges .option3{background-color:#936}.vue-component .badges .option4{background-color:#963}.vue-component .badges .deprecated{background-color:red}.vue-component .badges .experimental{background-color:#8a2be2}.vue-component .badges .action{border:1px solid #000;background-color:#fff;color:#000;margin:.33em;cursor:pointer;text-transform:none}.vue-component .badges .action:hover{background-color:#000;color:#fff}.vue-component .badges .action:hover>a{color:#fff}.vue-component .badges .action>a{color:#000}.vue-component .badges .docker{background-color:#0db7ed}.vue-component .tabular{display:flex;margin:.2em 0;padding:1px}.vue-component .tabular label{flex:1;font-weight:700}.vue-component .tabular .value{flex:3}.vue-component .tabular .value td>div,.vue-component .tabular .value>.formatted>ul,.vue-component .tabular .value>ul,.vue-component .tabular ul.value{max-height:15em;overflow:auto}.vue-component .tabular .value pre{margin:0}.vue-component.stac .map{background:#0000;height:350px}.vue-component.stac .tabular{margin:.5em 0}.vue-component.stac .tabular.wrap{display:block}.vue-component.stac .tabular.wrap .value{margin-top:.5em;margin-left:1em;margin-bottom:.5em}.vue-component.stac .tabular .value ul{padding-left:20px}.assets.empty,.vue-component.stac .links:empty{display:none}.vue-component.stac .thumbnails{overflow-x:auto;overflow-y:hidden;width:100%;white-space:nowrap}.vue-component.stac .thumbnails a{margin:5px;display:inline-block}.vue-component.stac .thumbnails a img{padding:2px;max-height:200px;vertical-align:middle;border:2px solid #0000}.vue-component.stac .thumbnails a:hover img{border:2px solid #00000080}.vue-component .federation>ul>li{margin-bottom:.5em}.vue-component .federation>ul>li>small{display:block}.vue-component .federation>ul>li>h4{margin:0}.vue-component .federation .fed-header{margin:.2em 0}.vue-component .federation .fed-header>.fed-title{display:inline-block;vertical-align:bottom}.vue-component.job .progressBar{background-color:#eee;border:1px solid #ccc;color:#000;height:1.2em;border-radius:.3em}.vue-component.job .progressBar .number{font-size:.8em;padding:.1em .3em;display:inline-block}.vue-component.job .progressBar .completed{background-color:green;width:1px;height:1.2em;color:#fff;display:inline-block;border-radius:.3em}.vue-component.job .progressBar.error .completed{background-color:maroon}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 8426
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Jobshadow)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Job.vue?vue&type=template&id=261c24d8&shadow
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('article', {
    staticClass: "vue-component job"
  }, [_vm._t("title", function () {
    return [_c('a', {
      staticClass: "anchor",
      attrs: {
        "name": _vm.job.id
      }
    }), _c('h2', [_vm._v(_vm._s(_vm.job.title || _vm.job.id))])];
  }, null, _vm.$props), _c('section', {
    staticClass: "progress"
  }, [_c('div', {
    staticClass: "tabular"
  }, [_c('label', [_vm._v("ID:")]), _c('code', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.job.id))])]), _vm.job.status ? _c('div', {
    staticClass: "tabular"
  }, [_c('label', [_vm._v("Status:")]), _c('span', {
    staticClass: "value status",
    attrs: {
      "data-value": _vm.job.status
    }
  }, [_vm._v(_vm._s(_vm.job.status))])]) : _vm._e(), typeof _vm.job.progress === 'number' ? _c('div', {
    staticClass: "tabular"
  }, [_c('label', [_vm._v("Progress:")]), _c('div', {
    staticClass: "value"
  }, [_c('div', {
    staticClass: "progressBar",
    class: {
      error: !!_vm.job.error
    }
  }, [_c('div', {
    staticClass: "completed",
    style: 'width: ' + _vm.progress
  }, [_vm.job.progress > 50 ? _c('span', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.progress))]) : _vm._e(), _vm._v("  ")]), _vm.job.progress <= 50 ? _c('span', {
    staticClass: "number"
  }, [_vm._v(_vm._s(_vm.progress))]) : _vm._e()])])]) : _vm._e(), _vm._l(_vm.times, function (time, key) {
    return _c('div', {
      key: key,
      staticClass: "tabular"
    }, [_c('label', [_vm._v(_vm._s(time.label) + ":")]), _c('span', {
      staticClass: "value",
      domProps: {
        "innerHTML": _vm._s(time.formatted)
      }
    })]);
  }), _vm.job.log_level ? _c('div', {
    staticClass: "tabular"
  }, [_c('label', [_vm._v("Minimum severity for logs:")]), _c('span', {
    staticClass: "value level",
    attrs: {
      "data-value": _vm.job.log_level
    }
  }, [_vm._v(_vm._s(_vm.job.log_level))])]) : _vm._e()], 2), _vm._t("before-description", null, null, _vm.$props), _vm.job.description || _vm.job['federation:missing'] ? _c('summary', {
    staticClass: "description"
  }, [_vm.job.description ? [_c('h3', [_vm._v("Description")]), _c('Description', {
    attrs: {
      "description": _vm.job.description
    }
  })] : _vm._e(), _vm.job['federation:missing'] ? _c('FederationMissingNotice', {
    attrs: {
      "missing": _vm.job['federation:missing'],
      "federation": _vm.federation
    }
  }) : _vm._e()], 2) : _vm._e(), _vm.hasLinks ? _c('section', {
    staticClass: "links"
  }, [_c('LinkList', {
    attrs: {
      "links": _vm.job.links,
      "heading": "Additional Resources",
      "headingTag": "h3"
    }
  })], 1) : _vm._e(), _vm.job.plan || _vm.costs || _vm.budget ? _c('section', {
    staticClass: "billing"
  }, [_c('h3', [_vm._v("Billing")]), _vm.job.plan ? _c('div', {
    staticClass: "tabular"
  }, [_c('label', [_vm._v("Billing plan:")]), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.job.plan))])]) : _vm._e(), _vm.costs ? _c('div', {
    staticClass: "tabular"
  }, [_c('label', [_vm._v("Incurred Costs:")]), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.costs))])]) : _vm._e(), _vm.budget ? _c('div', {
    staticClass: "tabular"
  }, [_c('label', {
    attrs: {
      "title": "The allowed maximum costs, specified by the user."
    }
  }, [_vm._v("Budget limit:")]), _c('span', {
    staticClass: "value"
  }, [_vm._v(_vm._s(_vm.budget))])]) : _vm._e()]) : _vm._e(), _vm.hasUsageMetrics ? _c('section', {
    staticClass: "usage"
  }, [_c('h3', [_vm._v("Usage Metrics")]), _vm._l(_vm.usage, function (metric, key) {
    return _c('div', {
      key: key,
      staticClass: "tabular"
    }, [_c('label', {
      staticClass: "metric"
    }, [_vm._v(_vm._s(_vm._f("usageLabel")(key)))]), _c('span', {
      staticClass: "value"
    }, [_vm._v(_vm._s(_vm._f("usageValue")(metric.value)) + " "), _c('span', {
      staticClass: "unit"
    }, [_vm._v(_vm._s(metric.unit))])])]);
  })], 2) : _vm._e(), _c('section', {
    staticClass: "process"
  }, [_c('h3', [_vm._v("Process")]), _c('Process', {
    staticClass: "inline",
    attrs: {
      "process": _vm.job.process,
      "provideDownload": false,
      "showGraph": true
    },
    scopedSlots: _vm._u([{
      key: "process-graph",
      fn: function (p) {
        return [_vm._t("process-graph", null, {
          "vBind": p
        })];
      }
    }], null, true)
  })], 1), _c('ProcessingParameters', {
    attrs: {
      "parameters": _vm.processingParameters,
      "data": _vm.job
    }
  }), _vm._t("end", null, null, _vm.$props)], 2);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./utils.js + 4 modules
var utils = __webpack_require__(9061);
// EXTERNAL MODULE: ./components/internal/FederationMixin.js
var FederationMixin = __webpack_require__(1507);
// EXTERNAL MODULE: ./components/internal/UsageMixin.js
var UsageMixin = __webpack_require__(5581);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Job.vue?vue&type=script&lang=js&shadow



/* harmony default export */ const Jobvue_type_script_lang_js_shadow = ({
  name: 'Job',
  mixins: [FederationMixin/* default */.A, UsageMixin/* default */.A],
  components: {
    Description: () => Promise.all(/* import() */[__webpack_require__.e(855), __webpack_require__.e(1500)]).then(__webpack_require__.bind(__webpack_require__, 1500)),
    LinkList: () => __webpack_require__.e(/* import() */ 6501).then(__webpack_require__.bind(__webpack_require__, 6501)),
    Process: () => __webpack_require__.e(/* import() */ 8373).then(__webpack_require__.bind(__webpack_require__, 8373)),
    ProcessingParameters: () => __webpack_require__.e(/* import() */ 4974).then(__webpack_require__.bind(__webpack_require__, 4974))
  },
  props: {
    job: {
      type: Object,
      default: () => ({})
    },
    currency: {
      type: String,
      default: null
    },
    processingParameters: {
      type: Array,
      default: () => []
    },
    ...FederationMixin/* default */.A.props
  },
  data() {
    return {
      timeMap: {
        created: 'Submitted',
        updated: 'Last Updated',
        queued: 'Queued for Processing',
        started: 'Processing Started',
        unpublished: 'Removal of Data'
      }
    };
  },
  computed: {
    budget() {
      return utils/* default */.A.formatBudget(this.job.budget, this.currency, "No limit specified");
    },
    costs() {
      return utils/* default */.A.formatCurrency(this.job.costs, this.currency);
    },
    times() {
      const times = {};
      for (const key in this.timeMap) {
        if (!this.job[key]) {
          continue;
        }
        const defaultValue = key === 'created' ? 'n/a' : '';
        const formatted = utils/* default */.A.formatTimestamp(this.job[key], defaultValue);
        if (!formatted) {
          continue;
        }
        times[key] = {
          label: this.timeMap[key],
          formatted
        };
      }
      return times;
    },
    progress() {
      if (typeof this.job.progress === 'number') {
        return Math.round(this.job.progress * 10) / 10 + "%";
      } else {
        return "0%";
      }
    },
    usage() {
      return this.job.usage;
    },
    hasLinks() {
      return utils/* default */.A.size(this.job.links) > 0;
    }
  },
  beforeCreate() {
    utils/* default */.A.enableHtmlProps(this);
  }
});
;// ./components/Job.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ const components_Jobvue_type_script_lang_js_shadow = (Jobvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/Job.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__(3706)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_Jobvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const Jobshadow = (component.exports);

/***/ },

/***/ 9687
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7838);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("4fd8b09e", content, shadowRoot)
};

/***/ }

}]);
//# sourceMappingURL=openeo.8426.js.map
(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[8352],{

/***/ 1620:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_SupportedFeatures_vue_vue_type_style_index_0_id_30021169_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8197);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_SupportedFeatures_vue_vue_type_style_index_0_id_30021169_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_SupportedFeatures_vue_vue_type_style_index_0_id_30021169_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_SupportedFeatures_vue_vue_type_style_index_0_id_30021169_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_SupportedFeatures_vue_vue_type_style_index_0_id_30021169_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 5268:
/***/ ((module) => {

var FeatureList = {
  // Manual assignment of the endpoints above to individual features.
  // A functionality is considered supported when ALL of the corresponding endpoints are supported.
  features: {
    'Basic functionality': {
      'get /collections': 'Data discovery',
      'get /collections/{collection_id}': 'Data discovery details',
      'get /processes': 'Process discovery',
      'get /file_formats': 'File format discovery',
      //		'get /conformance': 'OGC conformance',				// Only needed for OGC compliance
      //		'get /credentials/basic': 'Basic authentication',	// Should only be used for dev purposes
      'get /credentials/oidc': 'OpenID Connect authentication',
      'get /me': 'User profiles'
    },
    'Synchronous processing': {
      'post /result': 'Synchronous processing'
    },
    'Batch processing': {
      'get /jobs': 'Overview',
      'post /jobs': 'Creating',
      'get /jobs/{job_id}': 'Status',
      //		'patch /jobs/{job_id}': 'Updating',					// not necessarily needed (can be achieved by deleting and re-creating)
      'delete /jobs/{job_id}': 'Deleting',
      'get /jobs/{job_id}/logs': 'Logs',
      'get /jobs/{job_id}/results': 'Downloading results',
      'post /jobs/{job_id}/results': 'Queuing'
      // 		'delete /jobs/{job_id}/results': 'Deleting results'	// not necessarily needed (can be deleted by deleting the entire job)
    },
    'Estimate processing costs': {
      'get /jobs/{job_id}/estimate': 'Estimate processing costs'
    },
    'Additional web services': {
      'get /service_types': 'Discovery',
      'get /services': 'Overview',
      'post /services': 'Creating',
      'get /services/{service_id}': 'Status',
      //		'patch /services/{service_id}': 'Updating',			// not necessarily needed (can be achieved by deleting and re-creating)
      'delete /services/{service_id}': 'Deleting',
      'get /services/{service_id}/logs': 'Logs'
    },
    'File storage': {
      'get /files': 'Overview',
      'get /files/{path}': 'Downloading',
      'put /files/{path}': 'Uploading',
      'delete /files/{path}': 'Deleting'
    },
    'User-defined processes': {
      //			'post /validation': 'Validating',					// not necessarily needed (can be achieved by sending a process to one of the other endpoints)
      'get /process_graphs': 'Overview',
      'get /process_graphs/{process_graph_id}': 'Status',
      'put /process_graphs/{process_graph_id}': 'Creating',
      'delete /process_graphs/{process_graph_id}': 'Deleting'
    },
    'User-defined functions (UDF)': {
      'get /udf_runtimes': 'User-defined functions (UDF)'
    }
  }
};
module.exports = FeatureList;

/***/ }),

/***/ 7511:
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
___CSS_LOADER_EXPORT___.push([module.id, `.vue-component .highlight-box{box-shadow:0 0 0 .2em #c8e1ff}.vue-component code.id{color:maroon}.vue-component abbr{-webkit-text-decoration:underline dotted 1px;text-decoration:underline dotted 1px}.vue-component .unit{opacity:.6}.vue-component .status[data-value=submitted]{color:#000}.vue-component .status[data-value=running]{color:#ff8c00}.vue-component .status[data-value=queued]{color:#00008b}.vue-component .status[data-value=finished]{color:#006400}.vue-component .status[data-value=canceled]{color:#a9a9a9}.vue-component .status[data-value=error]{color:red}.vue-component.inline.process{margin-left:1em}.vue-component.inline h1{font-size:1.17em}.vue-component.inline h2{font-size:1.1em}.vue-component.inline h3{font-size:1.05em}.vue-component.inline h4,.vue-component.inline h5,.vue-component.inline h6{font-size:1em}.vue-component .comma-separated-list{display:inline;list-style:none;padding:0}.vue-component .comma-separated-list li{display:inline;padding:0}.vue-component .comma-separated-list li:after{content:", "}.vue-component .comma-separated-list li:last-child:after{content:""}.vue-component .required{color:red;font-weight:700}.vue-component.message-block{margin:1em 0;padding:.5em}.vue-component.message-block>strong{display:block;margin-bottom:.5em}.vue-component.message-block>p{margin:0}.vue-component .param-name,.vue-component .process-name{color:#369}.vue-component .param-argument,.vue-component .return-value{color:#936}.vue-component .data-type{color:#693}.vue-component .param-optional{font-weight:700}.vue-component .badges{margin:0;padding:0;list-style-type:none;display:inline-block}.vue-component .badges .badge{display:inline-block;font-size:.8em;margin:.25em;padding:.35em .5em .25em .5em;line-height:1em;text-align:center;white-space:nowrap;text-transform:uppercase;vertical-align:initial;border-radius:.5em;color:#fff;background-color:#6c757d}.vue-component .badges:not(.inline){margin-left:-.25em;margin-right:-.25em}.vue-component .badges.small .badge{padding:.25em .35em .2em .35em;font-size:.75em}.vue-component .badges.inline{margin-left:.5em;border-radius:.25em}.vue-component .badges.inline .badge{margin-top:0;margin-bottom:0}.vue-component .badges .badge a{color:#fff;border-bottom:1px dotted #fff;text-decoration:none}.vue-component .badges .badge a.badge-fill{margin:-.35em -.5em;padding:.35em .5em;display:block;border-bottom:0}.vue-component .badges.small .badge a.badge-fill{margin:-.2em -.3em;padding:.25em .35em}.vue-component .badges .badge a:hover{color:#fff;border-bottom-style:solid}.vue-component .badges .default{background-color:#555}.vue-component .badges .green{background-color:green}.vue-component .badges .red{background-color:maroon}.vue-component .badges .option1{background-color:#369}.vue-component .badges .option2{background-color:#693}.vue-component .badges .option3{background-color:#936}.vue-component .badges .option4{background-color:#963}.vue-component .badges .deprecated{background-color:red}.vue-component .badges .experimental{background-color:#8a2be2}.vue-component .badges .action{border:1px solid #000;background-color:#fff;color:#000;margin:.33em;cursor:pointer;text-transform:none}.vue-component .badges .action:hover{background-color:#000;color:#fff}.vue-component .badges .action:hover>a{color:#fff}.vue-component .badges .action>a{color:#000}.vue-component .badges .docker{background-color:#0db7ed}.vue-component .tabular{display:flex;margin:.2em 0;padding:1px}.vue-component .tabular label{flex:1;font-weight:700}.vue-component .tabular .value{flex:3}.vue-component .tabular .value td>div,.vue-component .tabular .value>.formatted>ul,.vue-component .tabular .value>ul,.vue-component .tabular ul.value{max-height:15em;overflow:auto}.vue-component .tabular .value pre{margin:0}.vue-component.stac .map{background:#0000;height:350px}.vue-component.stac .tabular{margin:.5em 0}.vue-component.stac .tabular.wrap{display:block}.vue-component.stac .tabular.wrap .value{margin-top:.5em;margin-left:1em;margin-bottom:.5em}.vue-component.stac .tabular .value ul{padding-left:20px}.assets.empty,.vue-component.stac .links:empty{display:none}.vue-component.stac .thumbnails{overflow-x:auto;overflow-y:hidden;width:100%;white-space:nowrap}.vue-component.stac .thumbnails a{margin:5px;display:inline-block}.vue-component.stac .thumbnails a img{padding:2px;max-height:200px;vertical-align:middle;border:2px solid #0000}.vue-component.stac .thumbnails a:hover img{border:2px solid #00000080}.vue-component .federation>ul>li{margin-bottom:.5em}.vue-component .federation>ul>li>small{display:block}.vue-component .federation>ul>li>h4{margin:0}.vue-component .federation .fed-header{margin:.2em 0}.vue-component .federation .fed-header>.fed-title{display:inline-block;vertical-align:bottom}.vue-component.features ul{padding:0}.vue-component.features ul li{list-style-type:none}.vue-component.features .supported{color:#006400}.vue-component.features .unsupported{color:maroon}.vue-component.features .partial{color:#b8860b}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8197:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(7511);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("4f400092", content, shadowRoot)
};

/***/ }),

/***/ 8352:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SupportedFeaturesshadow)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/SupportedFeatures.vue?vue&type=template&id=30021169&shadow
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vue-component features"
  }, [_vm.heading ? _c(_vm.headingTag, {
    tag: "component"
  }, [_vm._v(" " + _vm._s(_vm.heading) + " (" + _vm._s(_vm.supportedFeatureCount) + "/" + _vm._s(_vm.totalCount) + ") ")]) : _vm._e(), _c('ul', _vm._l(_vm.supportedFeatures, function (status, feature) {
    return _c('li', {
      key: feature
    }, [_c('span', {
      class: status.className,
      attrs: {
        "title": status.tooltip
      },
      domProps: {
        "textContent": _vm._s(status.icon)
      }
    }), _vm._v(" " + _vm._s(feature) + " ")]);
  }), 0)], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./featurelist.js
var featurelist = __webpack_require__(5268);
var featurelist_default = /*#__PURE__*/__webpack_require__.n(featurelist);
// EXTERNAL MODULE: ./utils.js + 4 modules
var utils = __webpack_require__(9061);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/SupportedFeatures.vue?vue&type=script&lang=js&shadow


/* harmony default export */ const SupportedFeaturesvue_type_script_lang_js_shadow = ({
  name: 'SupportedFeatures',
  props: {
    endpoints: {
      type: Array,
      default: () => []
    },
    heading: {
      type: String,
      default: 'Supported Functionalities'
    },
    headingTag: {
      type: String,
      default: 'h2'
    }
  },
  data() {
    return {
      supportedFeatures: {},
      supportedFeatureCount: 0
    };
  },
  computed: {
    totalCount() {
      return utils/* default */.A.size(this.supportedFeatures);
    }
  },
  watch: {
    endpoints: {
      immediate: true,
      handler(endpoints) {
        // Flatten list of supported endpoints
        let supportedEndpointList = [];
        for (let endpoint of endpoints) {
          for (let method of endpoint.methods) {
            let request = method + ' ' + endpoint.path;
            supportedEndpointList.push(request.toLowerCase());
          }
        }

        // Reset variables
        this.supportedFeatureCount = 0;
        this.supportedFeatures = {};

        // Create report
        for (let feature in (featurelist_default()).features) {
          let requiredEndpointsWithDescriptions = (featurelist_default()).features[feature];
          let requiredEndpoints = Object.keys(requiredEndpointsWithDescriptions);
          // Get a list of unsupported, but required endpoints
          let unsupported = requiredEndpoints.filter(requiredEndpoint => !supportedEndpointList.includes(requiredEndpoint));
          let icon;
          let className;
          let tooltip;
          switch (unsupported.length) {
            case 0:
              // No unsupported endpoints => fully supported
              this.supportedFeatureCount++;
              icon = '✔️';
              className = 'supported';
              tooltip = 'fully supported';
              break;
            case requiredEndpoints.length:
              // All endpoints are unsupported
              icon = '❌';
              className = 'unsupported';
              tooltip = 'not supported';
              break;
            default:
              // Some endpoints are supported => partially supported
              icon = '⚠️';
              className = 'partial';
              tooltip = 'partially supported, missing: ' + unsupported.map(ep => requiredEndpointsWithDescriptions[ep]).join(', ');
          }
          this.supportedFeatures[feature] = {
            icon: icon,
            className: className,
            tooltip: tooltip,
            missingEndpoints: unsupported
          };
        }
      }
    }
  },
  beforeCreate() {
    utils/* default */.A.enableHtmlProps(this);
  }
});
;// ./components/SupportedFeatures.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ const components_SupportedFeaturesvue_type_script_lang_js_shadow = (SupportedFeaturesvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/SupportedFeatures.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__(1620)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_SupportedFeaturesvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const SupportedFeaturesshadow = (component.exports);

/***/ })

}]);
//# sourceMappingURL=openeo.8352.js.map
(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[727,1507],{

/***/ 727
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ UdfRuntimeshadow)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/UdfRuntime.vue?vue&type=template&id=b87a4caa&shadow
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('article', {
    staticClass: "vue-component udf-runtime"
  }, [_vm._t("title", function () {
    return [_c('a', {
      staticClass: "anchor",
      attrs: {
        "name": _vm.id
      }
    }), _c('h2', [_vm.runtime.title ? [_vm._v(" " + _vm._s(_vm.runtime.title) + " ("), _c('code', {
      staticClass: "id"
    }, [_vm._v(_vm._s(_vm.id))]), _vm._v(") ")] : _c('code', {
      staticClass: "id"
    }, [_vm._v(_vm._s(_vm.id))])], 2)];
  }, null, _vm.$props), _vm._t("badges", function () {
    return [_c('ul', {
      staticClass: "badges"
    }, [_vm.isDocker ? _c('li', {
      staticClass: "badge docker"
    }, [_vm._v("Docker: " + _vm._s(_vm.runtime.docker))]) : _c('li', {
      staticClass: "badge"
    }, [_vm._v("Programming Language")])])];
  }, null, _vm.$props), _vm._t("before-description", null, null, _vm.$props), _vm.runtime.description || _vm.runtime.deprecated || _vm.runtime.experimental || _vm.runtime['federation:backends'] ? _c('section', {
    staticClass: "description"
  }, [_vm.runtime.description ? _c('Description', {
    attrs: {
      "description": _vm.runtime.description
    }
  }) : _vm._e(), _vm.runtime.deprecated ? _c('DeprecationNotice', {
    attrs: {
      "entity": "UDF runtime"
    }
  }) : _vm._e(), _vm.runtime.experimental ? _c('ExperimentalNotice', {
    attrs: {
      "entity": "UDF runtime"
    }
  }) : _vm._e(), _vm.runtime['federation:backends'] ? _c('FederationNotice', {
    attrs: {
      "backends": _vm.runtime['federation:backends'],
      "federation": _vm.federation,
      "entity": "UDF runtime"
    }
  }) : _vm._e()], 1) : _vm._e(), _c('section', {
    staticClass: "links"
  }, [_c('LinkList', {
    attrs: {
      "links": _vm.runtime.links,
      "heading": "See Also",
      "headingTag": "h3"
    }
  })], 1), _vm.isDocker ? [_c('h3', [_vm._v("Tags")]), _c('ul', _vm._l(_vm.runtime.tags, function (tag) {
    return _c('li', {
      key: tag
    }, [_vm._v(" " + _vm._s(tag) + " "), tag === _vm.runtime.default ? _c('ul', {
      staticClass: "badges small"
    }, [_c('li', {
      staticClass: "badge default"
    }, [_vm._v("default")])]) : _vm._e()]);
  }), 0)] : [_c('h3', [_vm._v("Versions")]), _c('Tabs', {
    ref: "tabs",
    attrs: {
      "id": "userContent"
    }
  }, _vm._l(_vm.runtime.versions, function (env, version) {
    return _c('Tab', {
      key: version,
      attrs: {
        "id": `${_vm.id}-${version}`,
        "name": version,
        "selected": version === _vm.selectVersion
      }
    }, [version === _vm.runtime.default ? _c('ul', {
      staticClass: "badges"
    }, [_c('li', {
      staticClass: "badge default"
    }, [_vm._v("default")])]) : _vm._e(), env.deprecated ? _c('DeprecationNotice', {
      attrs: {
        "entity": "UDF runtime version"
      }
    }) : _vm._e(), env.experimental ? _c('ExperimentalNotice', {
      attrs: {
        "entity": "UDF runtime version"
      }
    }) : _vm._e(), env['federation:backends'] ? _c('FederationNotice', {
      attrs: {
        "backends": env['federation:backends'],
        "federation": _vm.federation,
        "entity": "UDF runtime version"
      }
    }) : _vm._e(), _c('p', [_vm._v("This runtime includes support for:")]), _c('ul', _vm._l(env.libraries, function (library, name) {
      return _c('li', {
        key: name,
        staticClass: "library"
      }, [_vm._v(" " + _vm._s(name) + " "), _c('ul', {
        staticClass: "badges small"
      }, [_c('span', {
        staticClass: "badge"
      }, [_vm._v(_vm._s(library.version))]), library.experimental ? _c('span', {
        staticClass: "badge experimental"
      }, [_vm._v("experimental")]) : _vm._e(), library.deprecated ? _c('span', {
        staticClass: "badge deprecated"
      }, [_vm._v("deprecated")]) : _vm._e()]), _c('LinkList', {
        attrs: {
          "links": library.links
        }
      })], 1);
    }), 0)], 1);
  }), 1)]], 2);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./utils.js + 4 modules
var utils = __webpack_require__(9061);
// EXTERNAL MODULE: ./components/internal/FederationMixin.js
var FederationMixin = __webpack_require__(1507);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/UdfRuntime.vue?vue&type=script&lang=js&shadow


/* harmony default export */ const UdfRuntimevue_type_script_lang_js_shadow = ({
  name: 'UdfRuntime',
  components: {
    DeprecationNotice: () => __webpack_require__.e(/* import() */ 923).then(__webpack_require__.bind(__webpack_require__, 923)),
    Description: () => Promise.all(/* import() */[__webpack_require__.e(855), __webpack_require__.e(1500)]).then(__webpack_require__.bind(__webpack_require__, 1500)),
    ExperimentalNotice: () => __webpack_require__.e(/* import() */ 7431).then(__webpack_require__.bind(__webpack_require__, 7431)),
    LinkList: () => __webpack_require__.e(/* import() */ 6501).then(__webpack_require__.bind(__webpack_require__, 6501)),
    Tabs: () => __webpack_require__.e(/* import() */ 5746).then(__webpack_require__.bind(__webpack_require__, 5746)),
    Tab: () => __webpack_require__.e(/* import() */ 6376).then(__webpack_require__.bind(__webpack_require__, 6376))
  },
  mixins: [FederationMixin/* default */.A],
  props: {
    id: {
      type: String,
      default: ''
    },
    runtime: {
      type: Object,
      default: () => ({})
    },
    version: {
      type: String,
      default: null
    },
    ...FederationMixin/* default */.A.props
  },
  computed: {
    title() {
      return this.runtime.title || this.id;
    },
    isDocker() {
      return Boolean(this.runtime.type === 'docker' || this.runtime.docker && this.runtime.tags);
    },
    selectVersion() {
      if (utils/* default */.A.isObject(this.runtime.versions) && this.runtime.versions[this.version] || Array.isArray(this.runtime.tags) && this.runtime.tags[this.version]) {
        return this.version;
      } else {
        return this.runtime.default;
      }
    }
  },
  beforeCreate() {
    utils/* default */.A.enableHtmlProps(this);
  }
});
;// ./components/UdfRuntime.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ const components_UdfRuntimevue_type_script_lang_js_shadow = (UdfRuntimevue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/UdfRuntime.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__(1489)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_UdfRuntimevue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const UdfRuntimeshadow = (component.exports);

/***/ },

/***/ 1489
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_UdfRuntime_vue_vue_type_style_index_0_id_b87a4caa_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3725);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_UdfRuntime_vue_vue_type_style_index_0_id_b87a4caa_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_UdfRuntime_vue_vue_type_style_index_0_id_b87a4caa_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_UdfRuntime_vue_vue_type_style_index_0_id_b87a4caa_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_UdfRuntime_vue_vue_type_style_index_0_id_b87a4caa_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

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

/***/ 3725
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5420);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("1a6f8d00", content, shadowRoot)
};

/***/ },

/***/ 5420
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
___CSS_LOADER_EXPORT___.push([module.id, `.vue-component .highlight-box{box-shadow:0 0 0 .2em #c8e1ff}.vue-component code.id{color:maroon}.vue-component abbr{-webkit-text-decoration:underline dotted 1px;text-decoration:underline dotted 1px}.vue-component .unit{opacity:.6}.vue-component .status[data-value=submitted]{color:#000}.vue-component .status[data-value=running]{color:#ff8c00}.vue-component .status[data-value=queued]{color:#00008b}.vue-component .status[data-value=finished]{color:#006400}.vue-component .status[data-value=canceled]{color:#a9a9a9}.vue-component .status[data-value=error]{color:red}.vue-component.inline.process{margin-left:1em}.vue-component.inline h1{font-size:1.17em}.vue-component.inline h2{font-size:1.1em}.vue-component.inline h3{font-size:1.05em}.vue-component.inline h4,.vue-component.inline h5,.vue-component.inline h6{font-size:1em}.vue-component .comma-separated-list{display:inline;list-style:none;padding:0}.vue-component .comma-separated-list li{display:inline;padding:0}.vue-component .comma-separated-list li:after{content:", "}.vue-component .comma-separated-list li:last-child:after{content:""}.vue-component .required{color:red;font-weight:700}.vue-component.message-block{margin:1em 0;padding:.5em}.vue-component.message-block>strong{display:block;margin-bottom:.5em}.vue-component.message-block>p{margin:0}.vue-component .param-name,.vue-component .process-name{color:#369}.vue-component .param-argument,.vue-component .return-value{color:#936}.vue-component .data-type{color:#693}.vue-component .param-optional{font-weight:700}.vue-component .badges{margin:0;padding:0;list-style-type:none;display:inline-block}.vue-component .badges .badge{display:inline-block;font-size:.8em;margin:.25em;padding:.35em .5em .25em .5em;line-height:1em;text-align:center;white-space:nowrap;text-transform:uppercase;vertical-align:initial;border-radius:.5em;color:#fff;background-color:#6c757d}.vue-component .badges:not(.inline){margin-left:-.25em;margin-right:-.25em}.vue-component .badges.small .badge{padding:.25em .35em .2em .35em;font-size:.75em}.vue-component .badges.inline{margin-left:.5em;border-radius:.25em}.vue-component .badges.inline .badge{margin-top:0;margin-bottom:0}.vue-component .badges .badge a{color:#fff;border-bottom:1px dotted #fff;text-decoration:none}.vue-component .badges .badge a.badge-fill{margin:-.35em -.5em;padding:.35em .5em;display:block;border-bottom:0}.vue-component .badges.small .badge a.badge-fill{margin:-.2em -.3em;padding:.25em .35em}.vue-component .badges .badge a:hover{color:#fff;border-bottom-style:solid}.vue-component .badges .default{background-color:#555}.vue-component .badges .green{background-color:green}.vue-component .badges .red{background-color:maroon}.vue-component .badges .option1{background-color:#369}.vue-component .badges .option2{background-color:#693}.vue-component .badges .option3{background-color:#936}.vue-component .badges .option4{background-color:#963}.vue-component .badges .deprecated{background-color:red}.vue-component .badges .experimental{background-color:#8a2be2}.vue-component .badges .action{border:1px solid #000;background-color:#fff;color:#000;margin:.33em;cursor:pointer;text-transform:none}.vue-component .badges .action:hover{background-color:#000;color:#fff}.vue-component .badges .action:hover>a{color:#fff}.vue-component .badges .action>a{color:#000}.vue-component .badges .docker{background-color:#0db7ed}.vue-component .tabular{display:flex;margin:.2em 0;padding:1px}.vue-component .tabular label{flex:1;font-weight:700}.vue-component .tabular .value{flex:3}.vue-component .tabular .value td>div,.vue-component .tabular .value>.formatted>ul,.vue-component .tabular .value>ul,.vue-component .tabular ul.value{max-height:15em;overflow:auto}.vue-component .tabular .value pre{margin:0}.vue-component.stac .map{background:#0000;height:350px}.vue-component.stac .tabular{margin:.5em 0}.vue-component.stac .tabular.wrap{display:block}.vue-component.stac .tabular.wrap .value{margin-top:.5em;margin-left:1em;margin-bottom:.5em}.vue-component.stac .tabular .value ul{padding-left:20px}.assets.empty,.vue-component.stac .links:empty{display:none}.vue-component.stac .thumbnails{overflow-x:auto;overflow-y:hidden;width:100%;white-space:nowrap}.vue-component.stac .thumbnails a{margin:5px;display:inline-block}.vue-component.stac .thumbnails a img{padding:2px;max-height:200px;vertical-align:middle;border:2px solid #0000}.vue-component.stac .thumbnails a:hover img{border:2px solid #00000080}.vue-component .federation>ul>li{margin-bottom:.5em}.vue-component .federation>ul>li>small{display:block}.vue-component .federation>ul>li>h4{margin:0}.vue-component .federation .fed-header{margin:.2em 0}.vue-component .federation .fed-header>.fed-title{display:inline-block;vertical-align:bottom}.vue-component.udf-runtime h4{margin:.25em 0 .75em 0}.vue-component.udf-runtime .tabContent{padding:.5em}.vue-component.udf-runtime .library{margin-bottom:.5em}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }

}]);
//# sourceMappingURL=openeo.727.js.map
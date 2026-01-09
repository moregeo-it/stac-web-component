(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[8005,9139],{

/***/ 1520:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ObjectTree)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/ObjectTree.vue?vue&type=template&id=3f22b32a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vue-component object-tree",
    class: {
      inline: !_vm.isComplex
    }
  }, [_vm.type === 'array' && _vm.data.length === 1 ? _c('openeo-object-tree', {
    attrs: {
      "data": _vm.data[0]
    }
  }) : _vm.type === 'array' && _vm.isComplex ? [_c('ol', _vm._l(_vm.indicesShown, function (i) {
    return _c('li', {
      key: i
    }, [_c('openeo-object-tree', {
      attrs: {
        "data": _vm.data[i]
      }
    })], 1);
  }), 0), _vm.size !== _vm.indicesShown.length ? _c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.show
    }
  }, [_vm._v("Show all " + _vm._s(_vm.data.length) + " entries")]) : _vm._e()] : _vm.type === 'object' && _vm.isComplex ? _c('ul', _vm._l(_vm.data, function (value, key) {
    return _c('li', {
      key: key
    }, [_c('strong', [_vm._v(_vm._s(_vm.prettifyKey(key)))]), _vm._v(": "), _c('openeo-object-tree', {
      attrs: {
        "data": value
      }
    })], 1);
  }), 0) : _vm.type === 'url' ? _c('a', {
    attrs: {
      "href": _vm.data,
      "target": "_blank"
    }
  }, [_vm._v(_vm._s(_vm.data))]) : _vm.type === 'number' || _vm.type === 'string' ? [_vm._v(_vm._s(_vm.data))] : _vm.type === 'boolean' ? [_vm._v(_vm._s(_vm.format(_vm.data)))] : _c('em', [_vm._v(_vm._s(_vm.format(_vm.data)))])], 2);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./utils.js + 4 modules
var utils = __webpack_require__(9061);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/ObjectTree.vue?vue&type=script&lang=js

/* harmony default export */ const ObjectTreevue_type_script_lang_js = ({
  name: 'ObjectTree',
  components: {
    // Workaround for issue https://github.com/vuejs/vue-cli/issues/6225
    'openeo-object-tree': () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 1520))
  },
  props: {
    data: {
      default: null
    },
    // Set to null to disable collapsing
    collapseAfter: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      expand: false
    };
  },
  computed: {
    type() {
      if (Array.isArray(this.data)) {
        return 'array';
      } else if (this.data === null) {
        return 'null';
      } else if (utils/* default */.A.isUrl(this.data, false)) {
        return 'url';
      } else {
        return typeof this.data;
      }
    },
    isComplex() {
      if (this.type === 'array') {
        return this.data.length > 1;
      } else if (this.type === 'object') {
        return utils/* default */.A.size(this.data) > 0;
      } else {
        return false;
      }
    },
    size() {
      if (typeof this.data === 'object') {
        return utils/* default */.A.size(this.data);
      } else if (typeof this.data === 'string' || typeof this.data === 'number') {
        return 1; // A number or string
      } else {
        return 0; // A scalar value
      }
    },
    indicesShown() {
      if (!Array.isArray(this.data)) {
        return [];
      }
      let arr = this.data;
      if (!this.expand && this.collapseAfter !== null && utils/* default */.A.size(arr) > this.collapseAfter) {
        arr = Array(this.collapseAfter);
      }
      return [...arr.keys()];
    }
  },
  beforeCreate() {
    utils/* default */.A.enableHtmlProps(this);
  },
  methods: {
    prettifyKey(key) {
      return utils/* default */.A.prettifyString(key);
    },
    show() {
      this.expand = true;
    },
    format(value) {
      if (value === null) {
        return 'N/A';
      } else if (value === true) {
        return '✔️';
      } else if (value === false) {
        return '❌';
      } else if (typeof value === 'object' && utils/* default */.A.size(value) === 0) {
        return 'Empty';
      } else if (typeof value === 'function') {
        return 'JavaScript Function';
      } else if (typeof value === 'symbol') {
        return 'JavaScript Symbol';
      }
      return value;
    }
  }
});
;// ./components/ObjectTree.vue?vue&type=script&lang=js
 /* harmony default export */ const components_ObjectTreevue_type_script_lang_js = (ObjectTreevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/ObjectTree.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(5067)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_ObjectTreevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const ObjectTree = (component.exports);

/***/ }),

/***/ 2338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_StacFields_vue_vue_type_style_index_0_id_1165ffe5_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7233);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_StacFields_vue_vue_type_style_index_0_id_1165ffe5_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_StacFields_vue_vue_type_style_index_0_id_1165ffe5_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_StacFields_vue_vue_type_style_index_0_id_1165ffe5_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_StacFields_vue_vue_type_style_index_0_id_1165ffe5_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 3708:
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
___CSS_LOADER_EXPORT___.push([module.id, `.vue-component .highlight-box{box-shadow:0 0 0 .2em #c8e1ff}.vue-component code.id{color:maroon}.vue-component abbr{-webkit-text-decoration:underline dotted 1px;text-decoration:underline dotted 1px}.vue-component .unit{opacity:.6}.vue-component .status[data-value=submitted]{color:#000}.vue-component .status[data-value=running]{color:#ff8c00}.vue-component .status[data-value=queued]{color:#00008b}.vue-component .status[data-value=finished]{color:#006400}.vue-component .status[data-value=canceled]{color:#a9a9a9}.vue-component .status[data-value=error]{color:red}.vue-component.inline.process{margin-left:1em}.vue-component.inline h1{font-size:1.17em}.vue-component.inline h2{font-size:1.1em}.vue-component.inline h3{font-size:1.05em}.vue-component.inline h4,.vue-component.inline h5,.vue-component.inline h6{font-size:1em}.vue-component .comma-separated-list{display:inline;list-style:none;padding:0}.vue-component .comma-separated-list li{display:inline;padding:0}.vue-component .comma-separated-list li:after{content:", "}.vue-component .comma-separated-list li:last-child:after{content:""}.vue-component .required{color:red;font-weight:700}.vue-component.message-block{margin:1em 0;padding:.5em}.vue-component.message-block>strong{display:block;margin-bottom:.5em}.vue-component.message-block>p{margin:0}.vue-component .param-name,.vue-component .process-name{color:#369}.vue-component .param-argument,.vue-component .return-value{color:#936}.vue-component .data-type{color:#693}.vue-component .param-optional{font-weight:700}.vue-component .badges{margin:0;padding:0;list-style-type:none;display:inline-block}.vue-component .badges .badge{display:inline-block;font-size:.8em;margin:.25em;padding:.35em .5em .25em .5em;line-height:1em;text-align:center;white-space:nowrap;text-transform:uppercase;vertical-align:initial;border-radius:.5em;color:#fff;background-color:#6c757d}.vue-component .badges:not(.inline){margin-left:-.25em;margin-right:-.25em}.vue-component .badges.small .badge{padding:.25em .35em .2em .35em;font-size:.75em}.vue-component .badges.inline{margin-left:.5em;border-radius:.25em}.vue-component .badges.inline .badge{margin-top:0;margin-bottom:0}.vue-component .badges .badge a{color:#fff;border-bottom:1px dotted #fff;text-decoration:none}.vue-component .badges .badge a.badge-fill{margin:-.35em -.5em;padding:.35em .5em;display:block;border-bottom:0}.vue-component .badges.small .badge a.badge-fill{margin:-.2em -.3em;padding:.25em .35em}.vue-component .badges .badge a:hover{color:#fff;border-bottom-style:solid}.vue-component .badges .default{background-color:#555}.vue-component .badges .green{background-color:green}.vue-component .badges .red{background-color:maroon}.vue-component .badges .option1{background-color:#369}.vue-component .badges .option2{background-color:#693}.vue-component .badges .option3{background-color:#936}.vue-component .badges .option4{background-color:#963}.vue-component .badges .deprecated{background-color:red}.vue-component .badges .experimental{background-color:#8a2be2}.vue-component .badges .action{border:1px solid #000;background-color:#fff;color:#000;margin:.33em;cursor:pointer;text-transform:none}.vue-component .badges .action:hover{background-color:#000;color:#fff}.vue-component .badges .action:hover>a{color:#fff}.vue-component .badges .action>a{color:#000}.vue-component .badges .docker{background-color:#0db7ed}.vue-component .tabular{display:flex;margin:.2em 0;padding:1px}.vue-component .tabular label{flex:1;font-weight:700}.vue-component .tabular .value{flex:3}.vue-component .tabular .value td>div,.vue-component .tabular .value>.formatted>ul,.vue-component .tabular .value>ul,.vue-component .tabular ul.value{max-height:15em;overflow:auto}.vue-component .tabular .value pre{margin:0}.vue-component.stac .map{background:#0000;height:350px}.vue-component.stac .tabular{margin:.5em 0}.vue-component.stac .tabular.wrap{display:block}.vue-component.stac .tabular.wrap .value{margin-top:.5em;margin-left:1em;margin-bottom:.5em}.vue-component.stac .tabular .value ul{padding-left:20px}.assets.empty,.vue-component.stac .links:empty{display:none}.vue-component.stac .thumbnails{overflow-x:auto;overflow-y:hidden;width:100%;white-space:nowrap}.vue-component.stac .thumbnails a{margin:5px;display:inline-block}.vue-component.stac .thumbnails a img{padding:2px;max-height:200px;vertical-align:middle;border:2px solid #0000}.vue-component.stac .thumbnails a:hover img{border:2px solid #00000080}.vue-component .federation>ul>li{margin-bottom:.5em}.vue-component .federation>ul>li>small{display:block}.vue-component .federation>ul>li>h4{margin:0}.vue-component .federation .fed-header{margin:.2em 0}.vue-component .federation .fed-header>.fed-title{display:inline-block;vertical-align:bottom}.vue-component.object-tree .inline{display:inline-block}.vue-component.object-tree ol{padding-left:2em;margin-bottom:.5em}.vue-component.object-tree ol>li:only-child{list-style-type:none;margin-left:-2em}.vue-component.object-tree ol>li>div>ul{padding-left:0}.vue-component.object-tree ul{padding-left:1em}.vue-component.object-tree ul>li{list-style-type:none}.vue-component.object-tree li{margin-bottom:.25em}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 5067:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ObjectTree_vue_vue_type_style_index_0_id_3f22b32a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9038);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ObjectTree_vue_vue_type_style_index_0_id_3f22b32a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ObjectTree_vue_vue_type_style_index_0_id_3f22b32a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ObjectTree_vue_vue_type_style_index_0_id_3f22b32a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ObjectTree_vue_vue_type_style_index_0_id_3f22b32a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 7233:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9079);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("71b34a54", content, shadowRoot)
};

/***/ }),

/***/ 8005:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ StacFields)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/internal/StacFields.vue?vue&type=template&id=1165ffe5
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('section', {
    staticClass: "vue-component stac stac-fields metadata"
  }, [_vm._l(_vm.fields, function (group) {
    return [_c(_vm.headingTag, {
      key: group.extension,
      tag: "component",
      domProps: {
        "innerHTML": _vm._s(group.label || 'General')
      }
    }), _c('section', {
      key: `section_${group.extension}`,
      staticClass: "group"
    }, _vm._l(group.properties, function (prop, field) {
      return _c('div', {
        key: group.extension + field,
        staticClass: "tabular",
        class: {
          wrap: Boolean(prop.custom || prop.items)
        },
        attrs: {
          "id": 'field_' + field
        }
      }, [_c('label', {
        attrs: {
          "title": field
        },
        domProps: {
          "innerHTML": _vm._s(prop.label)
        }
      }), _c('div', {
        staticClass: "value"
      }, [_vm._t(field, function () {
        return [prop.items ? _c('table', {
          staticClass: "table"
        }, [_c('thead', [_c('tr', [!Array.isArray(prop.formatted) ? _c('th', [_vm._v(" ")]) : _vm._e(), _vm._l(prop.itemOrder, function (col) {
          return _c('th', {
            key: col,
            domProps: {
              "innerHTML": _vm._s(prop.items[col].label)
            }
          });
        })], 2)]), _c('tbody', _vm._l(prop.formatted, function (row, r) {
          return _c('tr', {
            key: r
          }, [!Array.isArray(prop.formatted) ? _c('th', [_vm._v(_vm._s(r))]) : _vm._e(), _vm._l(prop.itemOrder, function (col) {
            return _c('td', {
              key: `${col}_${r}`
            }, [Array.isArray(row[col]) ? _c('ol', {
              staticClass: "array"
            }, _vm._l(row[col], function (v, k) {
              return _c('li', {
                key: k
              }, [_c('span', {
                domProps: {
                  "innerHTML": _vm._s(v)
                }
              })]);
            }), 0) : row[col] && typeof row[col] === 'object' ? _c('ul', {
              staticClass: "object"
            }, _vm._l(row[col], function (v, k) {
              return _c('li', {
                key: k
              }, [_c('strong', [_vm._v(_vm._s(_vm._f("key")(k)))]), _vm._v(": "), _c('span', {
                domProps: {
                  "innerHTML": _vm._s(v)
                }
              })]);
            }), 0) : _c('div', {
              domProps: {
                "innerHTML": _vm._s(row[col])
              }
            })]);
          })], 2);
        }), 0)]) : field === 'card4l:processing_chain' ? _c('Process', {
          staticClass: "inline",
          attrs: {
            "process": prop.value,
            "provideDownload": false,
            "showGraph": true
          }
        }) : prop.formatted ? _c('div', {
          staticClass: "formatted",
          domProps: {
            "innerHTML": _vm._s(prop.formatted)
          }
        }) : [_vm._v(_vm._s(prop.value))]];
      }, {
        "prop": prop,
        "field": field
      })], 2)]);
    }), 0)];
  })], 2);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./node_modules/@radiantearth/stac-fields/index.js
var stac_fields = __webpack_require__(4870);
var stac_fields_default = /*#__PURE__*/__webpack_require__.n(stac_fields);
// EXTERNAL MODULE: ./utils.js + 4 modules
var utils = __webpack_require__(9061);
// EXTERNAL MODULE: ./components/ObjectTree.vue + 3 modules
var ObjectTree = __webpack_require__(1520);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/internal/StacFields.vue?vue&type=script&lang=js



const CORE_COLLECTION_FIELDS = [
// Catalog and Collection fields that are handled directly
'stac_version', 'stac_extensions', 'id', 'type', 'title', 'description', 'keywords', 'providers', 'license', 'extent', 'summaries', 'links', 'assets', 'item_assets', 'conformsTo', 'deprecated', 'cube:dimensions'];
(stac_fields_default()).Registry.externalRenderer = true;
//StacFields.Registry.addMetadataFields({});

/* harmony default export */ const StacFieldsvue_type_script_lang_js = ({
  name: 'StacFields',
  components: {
    Process: () => __webpack_require__.e(/* import() */ 8373).then(__webpack_require__.bind(__webpack_require__, 8373)),
    ObjectTree: ObjectTree["default"]
  },
  props: {
    metadata: {
      type: Object,
      default: () => ({})
    },
    headingTag: {
      type: String,
      default: 'h3'
    },
    ignore: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      required: true
    },
    context: {
      type: Object,
      default: () => ({})
    }
  },
  filters: {
    key: utils/* default */.A.prettifyString
  },
  computed: {
    ignoreFn() {
      if (this.ignore.length > 0) {
        return key => !this.ignore.includes(key);
      }
      return null;
    },
    fields() {
      if (this.type === 'Collection') {
        let data = utils/* default */.A.deepClone(this.metadata);
        if (!utils/* default */.A.isObject(data.summaries)) {
          data.summaries = {};
        }
        for (let key in data) {
          // Copy all custom top-level fields to summaries for easier visualization
          if (!CORE_COLLECTION_FIELDS.includes(key)) {
            data.summaries[key] = [data[key]];
          }
        }
        return stac_fields_default().formatSummaries(data, this.ignoreFn);
      } else if (this.type === 'Item') {
        return stac_fields_default().formatItemProperties(this.metadata, this.ignoreFn);
      } else if (this.type === 'Asset') {
        return stac_fields_default().formatAsset(this.metadata, this.context, this.ignoreFn);
      } else {
        throw new Error('Not implemented yet');
      }
    }
  },
  methods: {
    label(key, specs = {}) {
      return stac_fields_default().label(key, specs);
    }
  }
});
;// ./components/internal/StacFields.vue?vue&type=script&lang=js
 /* harmony default export */ const internal_StacFieldsvue_type_script_lang_js = (StacFieldsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/internal/StacFields.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(2338)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  internal_StacFieldsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const StacFields = (component.exports);

/***/ }),

/***/ 9038:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3708);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("4521367a", content, shadowRoot)
};

/***/ }),

/***/ 9079:
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
___CSS_LOADER_EXPORT___.push([module.id, `.vue-component .highlight-box{box-shadow:0 0 0 .2em #c8e1ff}.vue-component code.id{color:maroon}.vue-component abbr{-webkit-text-decoration:underline dotted 1px;text-decoration:underline dotted 1px}.vue-component .unit{opacity:.6}.vue-component .status[data-value=submitted]{color:#000}.vue-component .status[data-value=running]{color:#ff8c00}.vue-component .status[data-value=queued]{color:#00008b}.vue-component .status[data-value=finished]{color:#006400}.vue-component .status[data-value=canceled]{color:#a9a9a9}.vue-component .status[data-value=error]{color:red}.vue-component.inline.process{margin-left:1em}.vue-component.inline h1{font-size:1.17em}.vue-component.inline h2{font-size:1.1em}.vue-component.inline h3{font-size:1.05em}.vue-component.inline h4,.vue-component.inline h5,.vue-component.inline h6{font-size:1em}.vue-component .comma-separated-list{display:inline;list-style:none;padding:0}.vue-component .comma-separated-list li{display:inline;padding:0}.vue-component .comma-separated-list li:after{content:", "}.vue-component .comma-separated-list li:last-child:after{content:""}.vue-component .required{color:red;font-weight:700}.vue-component.message-block{margin:1em 0;padding:.5em}.vue-component.message-block>strong{display:block;margin-bottom:.5em}.vue-component.message-block>p{margin:0}.vue-component .param-name,.vue-component .process-name{color:#369}.vue-component .param-argument,.vue-component .return-value{color:#936}.vue-component .data-type{color:#693}.vue-component .param-optional{font-weight:700}.vue-component .badges{margin:0;padding:0;list-style-type:none;display:inline-block}.vue-component .badges .badge{display:inline-block;font-size:.8em;margin:.25em;padding:.35em .5em .25em .5em;line-height:1em;text-align:center;white-space:nowrap;text-transform:uppercase;vertical-align:initial;border-radius:.5em;color:#fff;background-color:#6c757d}.vue-component .badges:not(.inline){margin-left:-.25em;margin-right:-.25em}.vue-component .badges.small .badge{padding:.25em .35em .2em .35em;font-size:.75em}.vue-component .badges.inline{margin-left:.5em;border-radius:.25em}.vue-component .badges.inline .badge{margin-top:0;margin-bottom:0}.vue-component .badges .badge a{color:#fff;border-bottom:1px dotted #fff;text-decoration:none}.vue-component .badges .badge a.badge-fill{margin:-.35em -.5em;padding:.35em .5em;display:block;border-bottom:0}.vue-component .badges.small .badge a.badge-fill{margin:-.2em -.3em;padding:.25em .35em}.vue-component .badges .badge a:hover{color:#fff;border-bottom-style:solid}.vue-component .badges .default{background-color:#555}.vue-component .badges .green{background-color:green}.vue-component .badges .red{background-color:maroon}.vue-component .badges .option1{background-color:#369}.vue-component .badges .option2{background-color:#693}.vue-component .badges .option3{background-color:#936}.vue-component .badges .option4{background-color:#963}.vue-component .badges .deprecated{background-color:red}.vue-component .badges .experimental{background-color:#8a2be2}.vue-component .badges .action{border:1px solid #000;background-color:#fff;color:#000;margin:.33em;cursor:pointer;text-transform:none}.vue-component .badges .action:hover{background-color:#000;color:#fff}.vue-component .badges .action:hover>a{color:#fff}.vue-component .badges .action>a{color:#000}.vue-component .badges .docker{background-color:#0db7ed}.vue-component .tabular{display:flex;margin:.2em 0;padding:1px}.vue-component .tabular label{flex:1;font-weight:700}.vue-component .tabular .value{flex:3}.vue-component .tabular .value td>div,.vue-component .tabular .value>.formatted>ul,.vue-component .tabular .value>ul,.vue-component .tabular ul.value{max-height:15em;overflow:auto}.vue-component .tabular .value pre{margin:0}.vue-component.stac .map{background:#0000;height:350px}.vue-component.stac .tabular{margin:.5em 0}.vue-component.stac .tabular.wrap{display:block}.vue-component.stac .tabular.wrap .value{margin-top:.5em;margin-left:1em;margin-bottom:.5em}.vue-component.stac .tabular .value ul{padding-left:20px}.assets.empty,.vue-component.stac .links:empty{display:none}.vue-component.stac .thumbnails{overflow-x:auto;overflow-y:hidden;width:100%;white-space:nowrap}.vue-component.stac .thumbnails a{margin:5px;display:inline-block}.vue-component.stac .thumbnails a img{padding:2px;max-height:200px;vertical-align:middle;border:2px solid #0000}.vue-component.stac .thumbnails a:hover img{border:2px solid #00000080}.vue-component .federation>ul>li{margin-bottom:.5em}.vue-component .federation>ul>li>small{display:block}.vue-component .federation>ul>li>h4{margin:0}.vue-component .federation .fed-header{margin:.2em 0}.vue-component .federation .fed-header>.fed-title{display:inline-block;vertical-align:bottom}.vue-component.stac-fields>.group{margin-left:1em}.vue-component.stac-fields .table{width:100%;border-collapse:collapse;font-size:.9em}.vue-component.stac-fields .table th{text-align:left;background-color:#0000000d}.vue-component.stac-fields .table td,.vue-component.stac-fields .table th{border:1px solid #0003;padding:3px}.vue-component.stac-fields .table td>.object,.vue-component.stac-fields .table th>.object{list-style-type:none;padding-left:0}.vue-component.stac-fields .table td{vertical-align:top}.vue-component.stac-fields .table tbody tr:hover,.vue-component.stac-fields .table tbody tr:hover th{background-color:#0000001a}.vue-component.stac-fields .description p:first-of-type{margin-top:0}.vue-component.stac-fields .description p:last-of-type{margin-bottom:0}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=openeo.8005.js.map
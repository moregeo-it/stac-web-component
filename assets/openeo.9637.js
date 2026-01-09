(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[9637],{

/***/ 563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data() {
    return {
      canCopy: false
    };
  },
  mounted() {
    this.canCopy = navigator && navigator.clipboard && typeof navigator.clipboard.writeText === 'function';
  },
  methods: {
    copyText(text, onSuccess = null, onError = null) {
      if (this.canCopy) {
        const promise = navigator.clipboard.writeText(text);
        if (onSuccess) {
          promise.then(onSuccess);
        }
        if (onError) {
          promise.catch(onError);
        }
      }
    },
    toggleIcon(elem, newIcon) {
      if (elem) {
        let oldIcon = elem.innerText;
        elem.innerText = newIcon;
        setTimeout(() => elem.innerText = oldIcon, 2000);
      }
    }
  }
});

/***/ }),

/***/ 752:
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
___CSS_LOADER_EXPORT___.push([module.id, `.vue-component .highlight-box{box-shadow:0 0 0 .2em #c8e1ff}.vue-component code.id{color:maroon}.vue-component abbr{-webkit-text-decoration:underline dotted 1px;text-decoration:underline dotted 1px}.vue-component .unit{opacity:.6}.vue-component .status[data-value=submitted]{color:#000}.vue-component .status[data-value=running]{color:#ff8c00}.vue-component .status[data-value=queued]{color:#00008b}.vue-component .status[data-value=finished]{color:#006400}.vue-component .status[data-value=canceled]{color:#a9a9a9}.vue-component .status[data-value=error]{color:red}.vue-component.inline.process{margin-left:1em}.vue-component.inline h1{font-size:1.17em}.vue-component.inline h2{font-size:1.1em}.vue-component.inline h3{font-size:1.05em}.vue-component.inline h4,.vue-component.inline h5,.vue-component.inline h6{font-size:1em}.vue-component .comma-separated-list{display:inline;list-style:none;padding:0}.vue-component .comma-separated-list li{display:inline;padding:0}.vue-component .comma-separated-list li:after{content:", "}.vue-component .comma-separated-list li:last-child:after{content:""}.vue-component .required{color:red;font-weight:700}.vue-component.message-block{margin:1em 0;padding:.5em}.vue-component.message-block>strong{display:block;margin-bottom:.5em}.vue-component.message-block>p{margin:0}.vue-component .param-name,.vue-component .process-name{color:#369}.vue-component .param-argument,.vue-component .return-value{color:#936}.vue-component .data-type{color:#693}.vue-component .param-optional{font-weight:700}.vue-component .badges{margin:0;padding:0;list-style-type:none;display:inline-block}.vue-component .badges .badge{display:inline-block;font-size:.8em;margin:.25em;padding:.35em .5em .25em .5em;line-height:1em;text-align:center;white-space:nowrap;text-transform:uppercase;vertical-align:initial;border-radius:.5em;color:#fff;background-color:#6c757d}.vue-component .badges:not(.inline){margin-left:-.25em;margin-right:-.25em}.vue-component .badges.small .badge{padding:.25em .35em .2em .35em;font-size:.75em}.vue-component .badges.inline{margin-left:.5em;border-radius:.25em}.vue-component .badges.inline .badge{margin-top:0;margin-bottom:0}.vue-component .badges .badge a{color:#fff;border-bottom:1px dotted #fff;text-decoration:none}.vue-component .badges .badge a.badge-fill{margin:-.35em -.5em;padding:.35em .5em;display:block;border-bottom:0}.vue-component .badges.small .badge a.badge-fill{margin:-.2em -.3em;padding:.25em .35em}.vue-component .badges .badge a:hover{color:#fff;border-bottom-style:solid}.vue-component .badges .default{background-color:#555}.vue-component .badges .green{background-color:green}.vue-component .badges .red{background-color:maroon}.vue-component .badges .option1{background-color:#369}.vue-component .badges .option2{background-color:#693}.vue-component .badges .option3{background-color:#936}.vue-component .badges .option4{background-color:#963}.vue-component .badges .deprecated{background-color:red}.vue-component .badges .experimental{background-color:#8a2be2}.vue-component .badges .action{border:1px solid #000;background-color:#fff;color:#000;margin:.33em;cursor:pointer;text-transform:none}.vue-component .badges .action:hover{background-color:#000;color:#fff}.vue-component .badges .action:hover>a{color:#fff}.vue-component .badges .action>a{color:#000}.vue-component .badges .docker{background-color:#0db7ed}.vue-component .tabular{display:flex;margin:.2em 0;padding:1px}.vue-component .tabular label{flex:1;font-weight:700}.vue-component .tabular .value{flex:3}.vue-component .tabular .value td>div,.vue-component .tabular .value>.formatted>ul,.vue-component .tabular .value>ul,.vue-component .tabular ul.value{max-height:15em;overflow:auto}.vue-component .tabular .value pre{margin:0}.vue-component.stac .map{background:#0000;height:350px}.vue-component.stac .tabular{margin:.5em 0}.vue-component.stac .tabular.wrap{display:block}.vue-component.stac .tabular.wrap .value{margin-top:.5em;margin-left:1em;margin-bottom:.5em}.vue-component.stac .tabular .value ul{padding-left:20px}.assets.empty,.vue-component.stac .links:empty{display:none}.vue-component.stac .thumbnails{overflow-x:auto;overflow-y:hidden;width:100%;white-space:nowrap}.vue-component.stac .thumbnails a{margin:5px;display:inline-block}.vue-component.stac .thumbnails a img{padding:2px;max-height:200px;vertical-align:middle;border:2px solid #0000}.vue-component.stac .thumbnails a:hover img{border:2px solid #00000080}.vue-component .federation>ul>li{margin-bottom:.5em}.vue-component .federation>ul>li>small{display:block}.vue-component .federation>ul>li>h4{margin:0}.vue-component .federation .fed-header{margin:.2em 0}.vue-component .federation .fed-header>.fed-title{display:inline-block;vertical-align:bottom}.vue-component.searchable-list.expandable .heading{cursor:pointer;padding-left:1em}.vue-component.searchable-list.expandable .heading:before{content:"▸";margin-left:-1em;float:left;font-size:1em}.vue-component.searchable-list.expandable.expanded .heading:before{content:"▾"}.vue-component.searchable-list .action-bar{width:100%;display:flex;margin-bottom:1em;padding:1px;gap:.5em}.vue-component.searchable-list .action-bar:empty{display:none}.vue-component.searchable-list .action-bar>.search-box{min-width:150px;flex:1;margin:0}.vue-component.searchable-list .action-bar>.deprecated,.vue-component.searchable-list .action-bar>.experimental{white-space:nowrap;align-content:center}.vue-component.searchable-list .details{display:none}.vue-component.searchable-list .list .details h2,.vue-component.searchable-list .list .details h3,.vue-component.searchable-list .list .details h4,.vue-component.searchable-list .list .details h5,.vue-component.searchable-list .list .details h6{font-size:1em}.vue-component.searchable-list ul.list{margin-left:0;padding-left:0;list-style-type:none}.vue-component.searchable-list ul.list>li{margin-bottom:.5em}.vue-component.searchable-list ul.list>li>summary{margin-bottom:.5em;margin-left:1em;line-height:1.33em}.vue-component.searchable-list ul.list>li>summary strong{display:block;text-overflow:ellipsis;overflow:hidden}.vue-component.searchable-list ul.list>li>summary strong .copy{display:none}.vue-component.searchable-list ul.list>li>summary strong.inline{display:inline}.vue-component.searchable-list ul.list>li>summary.experimental strong{color:#8a2be2}.vue-component.searchable-list ul.list>li>summary.deprecated strong{text-decoration:line-through}.vue-component.searchable-list ul.list>li>summary:before{content:"▸";margin-left:-1em;float:left;font-size:1em}.vue-component.searchable-list ul.list>li>summary .badges.block{display:block}.vue-component.searchable-list ul.expandable>li>summary{cursor:pointer}.vue-component.searchable-list ul.expandable>li>summary:hover strong .copy{display:inline-block!important}.vue-component.searchable-list ul.expandable>li.expanded{margin-bottom:2em}.vue-component.searchable-list ul.expandable>li.expanded .details{display:block;margin-left:1em}.vue-component.searchable-list ul.expandable>li.expanded>summary:before{content:"▾"}.vue-component.searchable-list ul.expandable>li.expanded>summary .hideOnExpand{display:none}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2298:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(752);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("44dd3a29", content, shadowRoot)
};

/***/ }),

/***/ 4493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_SearchableList_vue_vue_type_style_index_0_id_2879dd3c_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2298);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_SearchableList_vue_vue_type_style_index_0_id_2879dd3c_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_SearchableList_vue_vue_type_style_index_0_id_2879dd3c_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_SearchableList_vue_vue_type_style_index_0_id_2879dd3c_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_SearchableList_vue_vue_type_style_index_0_id_2879dd3c_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 9637:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ SearchableListshadow)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/SearchableList.vue?vue&type=template&id=2879dd3c&shadow
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vue-component searchable-list",
    class: {
      expandable: _vm.collapsed !== null,
      expanded: _vm.showList,
      noResults: _vm.filteredCount === 0
    }
  }, [_vm._t("heading", function () {
    return [_vm.heading ? _c('h2', {
      staticClass: "heading",
      on: {
        "click": function ($event) {
          return _vm.toggleHeading(null);
        }
      }
    }, [_vm._v(" " + _vm._s(_vm.heading) + " "), _vm.filteredCount !== null && _vm.filteredCount !== _vm.totalCount ? [_vm._v("(" + _vm._s(_vm.filteredCount) + "/" + _vm._s(_vm.totalCount) + ")")] : [_vm._v("(" + _vm._s(_vm.totalCount) + ")")]], 2) : _vm._e()];
  }, {
    "filteredCount": _vm.filteredCount,
    "totalCount": _vm.totalCount
  }), _vm.showList !== null ? _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.showList === true,
      expression: "showList === true"
    }],
    staticClass: "body"
  }, [_vm._t("content-start"), _vm.totalCount === 0 ? [_c('p', [_vm._v("No data available.")])] : [_c('section', {
    staticClass: "action-bar"
  }, [_vm.externalSearchTerm === null ? _c('SearchBox', {
    attrs: {
      "placeholder": _vm.searchPlaceholder,
      "minLength": _vm.searchMinLength
    },
    model: {
      value: _vm.searchTerm,
      callback: function ($$v) {
        _vm.searchTerm = $$v;
      },
      expression: "searchTerm"
    }
  }) : _vm._e(), _vm.deprecatedFilter ? _c('label', {
    staticClass: "deprecated",
    attrs: {
      "title": "Show deprecated elements?"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.hideDeprecated,
      expression: "hideDeprecated"
    }],
    attrs: {
      "type": "checkbox",
      "true-value": false,
      "false-value": true
    },
    domProps: {
      "checked": Array.isArray(_vm.hideDeprecated) ? _vm._i(_vm.hideDeprecated, null) > -1 : _vm._q(_vm.hideDeprecated, false)
    },
    on: {
      "change": function ($event) {
        var $$a = _vm.hideDeprecated,
          $$el = $event.target,
          $$c = $$el.checked ? false : true;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.hideDeprecated = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.hideDeprecated = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.hideDeprecated = $$c;
        }
      }
    }
  }), _vm._v(" Show deprecated ")]) : _vm._e(), _vm.experimentalFilter ? _c('label', {
    staticClass: "experimental",
    attrs: {
      "title": "Show experimental elements?"
    }
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.hideExperimental,
      expression: "hideExperimental"
    }],
    attrs: {
      "type": "checkbox",
      "true-value": false,
      "false-value": true
    },
    domProps: {
      "checked": Array.isArray(_vm.hideExperimental) ? _vm._i(_vm.hideExperimental, null) > -1 : _vm._q(_vm.hideExperimental, false)
    },
    on: {
      "change": function ($event) {
        var $$a = _vm.hideExperimental,
          $$el = $event.target,
          $$c = $$el.checked ? false : true;
        if (Array.isArray($$a)) {
          var $$v = null,
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && (_vm.hideExperimental = $$a.concat([$$v]));
          } else {
            $$i > -1 && (_vm.hideExperimental = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.hideExperimental = $$c;
        }
      }
    }
  }), _vm._v(" Show experimental ")]) : _vm._e()], 1), _vm._t("after-search-box", null, {
    "filteredCount": _vm.filteredCount,
    "summaries": _vm.summaries
  }), _vm.filteredCount === 0 ? _c('p', [_vm._v("No search results found.")]) : _c('ul', {
    staticClass: "list",
    class: {
      expandable: _vm.offerDetails
    }
  }, _vm._l(_vm.summaries, function (summary, i) {
    return _c('li', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: summary.show,
        expression: "summary.show"
      }],
      key: summary.identifier,
      class: {
        expanded: _vm.showDetails[i]
      }
    }, [_c('summary', {
      staticClass: "summary",
      class: {
        experimental: summary.experimental,
        deprecated: summary.deprecated
      },
      on: {
        "click": function ($event) {
          return _vm.toggleDetails(i);
        }
      }
    }, [_vm._t("summary", function () {
      return [_c('strong', [_vm._v(" " + _vm._s(summary.identifier) + " "), _vm.allowCopy && _vm.canCopy ? _c('span', {
        staticClass: "copy",
        attrs: {
          "title": "Copy identifier"
        },
        on: {
          "click": function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            return _vm.copyIdentifier($event, summary);
          }
        }
      }, [_vm._v("📋")]) : _vm._e()]), summary.summary ? _c('small', {
        class: {
          hideOnExpand: !_vm.showSummaryOnExpand
        }
      }, [_vm._v(_vm._s(summary.summary))]) : _vm._e(), _vm.showKeywords && summary.keywords.length > 0 ? _c('ul', {
        staticClass: "badges small block hideOnExpand"
      }, _vm._l(summary.keywords, function (keyword) {
        return _c('li', {
          key: keyword,
          staticClass: "badge"
        }, [_vm._v(_vm._s(keyword))]);
      }), 0) : _vm._e()];
    }, {
      "summary": summary,
      "item": summary.data
    })], 2), typeof _vm.showDetails[i] === 'boolean' ? _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.showDetails[i] === true,
        expression: "showDetails[i] === true"
      }],
      staticClass: "details"
    }, [!summary.loaded ? _c('Loading') : _vm._t("details", function () {
      return [_vm._v(" No details available! ")];
    }, {
      "summary": summary,
      "item": summary.data
    })], 2) : _vm._e()]);
  }), 0)]], 2) : _vm._e()], 2);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./utils.js + 4 modules
var utils = __webpack_require__(9061);
// EXTERNAL MODULE: ./components/internal/Loading.vue + 3 modules
var Loading = __webpack_require__(6440);
// EXTERNAL MODULE: ./components/internal/CopyMixin.js
var CopyMixin = __webpack_require__(563);
// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__(5471);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/SearchableList.vue?vue&type=script&lang=js&shadow




/* harmony default export */ const SearchableListvue_type_script_lang_js_shadow = ({
  name: 'SearchableList',
  components: {
    Loading: Loading/* default */.A,
    SearchBox: () => __webpack_require__.e(/* import() */ 4498).then(__webpack_require__.bind(__webpack_require__, 4498))
  },
  mixins: [CopyMixin/* default */.A],
  props: {
    data: {
      type: [Array, Object],
      default: () => []
    },
    identifierKey: {
      type: String,
      default: 'id'
    },
    summaryKey: {
      type: String,
      default: 'summary'
    },
    keywordsKey: {
      type: String,
      default: null
    },
    showKeywords: {
      type: Boolean,
      default: false
    },
    externalSearchTerm: {
      type: String,
      default: null
    },
    searchPlaceholder: {
      type: String,
      default: 'Search'
    },
    sort: {
      type: Boolean,
      default: true
    },
    offerDetails: {
      type: Boolean,
      default: true
    },
    showSummaryOnExpand: {
      type: Boolean,
      default: true
    },
    heading: {
      type: String,
      default: null
    },
    collapsed: {
      type: Boolean,
      default: null
    },
    searchMinLength: {
      type: Number,
      default: 2
    },
    loadAdditionalData: {
      type: Function,
      default: null
    },
    allowCopy: {
      type: Boolean,
      default: false
    },
    externalHideDeprecated: {
      type: Boolean,
      default: false
    },
    deprecatedFilter: {
      type: Boolean,
      default: false
    },
    externalHideExperimental: {
      type: Boolean,
      default: false
    },
    experimentalFilter: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchTerm: '',
      // For showDetails / showList the following states are possible:
      // null = if allowed to collapse, null indicates it is collapsed and has not been expanded yet
      // false = collapsed, but has been expanded before
      // true = expanded
      // This allows with a combination of v-if and v-show to not render by default (=> null), but keep rendered versions in cache (=> false)
      showDetails: {},
      showList: this.collapsed ? null : true,
      hideDeprecated: this.externalHideDeprecated,
      hideExperimental: this.externalHideExperimental,
      summaries: []
    };
  },
  watch: {
    loadAdditionalData: {
      handler() {
        this.generateSummaries(this.summaries);
      }
    },
    data: {
      immediate: true,
      handler(data, oldData) {
        // Don't re-generate summaries if the same object (in memory) has been passed.
        // We don't need to re-generate if just a random child has been updated, e.g. in detailsToggled.
        // Thus the check with === instead of deepEquals or so.
        if (data === oldData) {
          return;
        }
        this.generateSummaries(data);
      }
    },
    externalSearchTerm: {
      immediate: true,
      handler(value) {
        this.searchTerm = typeof value === 'string' ? value : '';
      }
    },
    externalHideDeprecated: {
      immediate: true,
      handler(value) {
        this.hideDeprecated = value;
      }
    },
    externalHideExperimental: {
      immediate: true,
      handler(value) {
        this.hideExperimental = value;
      }
    },
    summaries: {
      immediate: true,
      handler() {
        this.$emit('summaries', this.summaries);
      }
    },
    searchTerm() {
      this.filter();
    },
    hideDeprecated() {
      if (this.hideDeprecatedByDefault !== null) {
        this.filter();
      }
    },
    hideExperimental() {
      if (this.hideExperimentalByDefault !== null) {
        this.filter();
      }
    },
    collapsed(newState) {
      if (newState === false) {
        this.showList = true;
      } else if (this.showList !== null) {
        this.showList = false;
      }
      // else: Leave state as it is: null => don't render anything yet until expanded for the first time {
    }
  },
  computed: {
    totalCount() {
      return utils/* default */.A.size(this.data);
    },
    filteredCount() {
      if (this.hasActiveFilter()) {
        return this.summaries.filter(item => item.show === true).length;
      }
      return null;
    }
  },
  created() {
    this.filter();
  },
  methods: {
    hasActiveFilter() {
      return this.searchTerm.length >= this.searchMinLength || this.hideDeprecatedByDefault !== null && this.hideDeprecated || this.hideExperimentalByDefault !== null && this.hideExperimental;
    },
    filter() {
      const doSearch = this.searchTerm.length >= this.searchMinLength;
      this.summaries.forEach(item => {
        let show = true;
        if (this.hideDeprecatedByDefault !== null && this.hideDeprecated && item.deprecated) {
          show = false;
        } else if (this.hideExperimentalByDefault !== null && this.hideExperimental && item.experimental) {
          show = false;
        } else if (doSearch) {
          show = utils/* default */.A.search(this.searchTerm, [item.identifier, item.summary].concat(item.keywords));
        }
        this.$set(item, 'show', show);
      });
      this.$emit('summaries', this.summaries);
    },
    copyIdentifier(event, summary) {
      if (this.allowCopy) {
        const elem = event.composedPath()[0]; // event.target doesn't work in web components
        this.copyText(summary.identifier, () => this.toggleIcon(elem, '✅'), () => this.toggleIcon(elem, '❌'));
      }
    },
    generateSummaries() {
      let hasLoader = typeof this.loadAdditionalData === 'function';
      let summaries = [];
      for (let index in this.data) {
        let entry = this.data[index];
        let summary = {
          identifier: index,
          summary: '',
          show: true,
          loaded: !hasLoader,
          index: index,
          experimental: entry.experimental,
          deprecated: entry.deprecated,
          data: null // Fill later, see below
        };
        if (typeof this.identifierKey === 'string' && typeof entry[this.identifierKey] === 'string') {
          summary.identifier = entry[this.identifierKey];
        }
        if (typeof this.summaryKey === 'string' && typeof entry[this.summaryKey] === 'string') {
          summary.summary = entry[this.summaryKey];
        }
        if (typeof this.keywordsKey === 'string' && Array.isArray(entry[this.keywordsKey])) {
          summary.keywords = entry[this.keywordsKey];
        } else {
          summary.keywords = [];
        }

        // Set the data property only after the call to Vue.observable for a performance increase.
        // Making the whole object in data observable is pretty slow as they can get pretty massive in size.
        let observable = vue_runtime_esm/* default */.Ay.observable(summary);
        observable.data = entry;
        summaries.push(observable);
      }
      if (this.sort) {
        summaries.sort((a, b) => utils/* default */.A.compareStringCaseInsensitive(a.identifier, b.identifier));
      }
      this.summaries = summaries;
    },
    toggleHeading(show = null) {
      if (this.collapsed === null) {
        return;
      }
      this.showList = show === null ? !this.showList : show;
      this.$emit('headingToggled', this.showList);
      if (this.$parent) {
        this.$parent.$emit('headingToggled', this.showList);
      }
    },
    async toggleDetails(i, newState) {
      if (!this.offerDetails) {
        return;
      }
      if (typeof newState === 'undefined') {
        newState = !this.showDetails[i];
      }
      if (typeof this.showDetails[i] === 'undefined' && newState === false) {
        return;
      }
      this.$set(this.showDetails, i, newState);
      let summary = this.summaries[i];
      if (newState && typeof this.loadAdditionalData === 'function' && !summary.loaded) {
        try {
          summary.data = await this.loadAdditionalData(summary.index, summary.identifier, summary.data);
          summary.loaded = true;
        } catch (error) {
          console.error(error);
        }
      }
      this.$emit('detailsToggled', newState, summary.index, summary.identifier, summary.data);
    }
  }
});
;// ./components/SearchableList.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ const components_SearchableListvue_type_script_lang_js_shadow = (SearchableListvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/SearchableList.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__(4493)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_SearchableListvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const SearchableListshadow = (component.exports);

/***/ })

}]);
//# sourceMappingURL=openeo.9637.js.map
(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[5746,6376],{

/***/ 2625:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(8279);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("2a37d7c2", content, shadowRoot)
};

/***/ }),

/***/ 5444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_id_722c2421_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2625);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_id_722c2421_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_id_722c2421_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_id_722c2421_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Tabs_vue_vue_type_style_index_0_id_722c2421_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 5746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Tabs)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Tabs.vue?vue&type=template&id=722c2421
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: _vm.classes,
    attrs: {
      "id": _vm.id
    }
  }, [!_vm.hasEnabledTabs ? _c('div', {
    staticClass: "tabsEmpty"
  }, [_vm._t("empty")], 2) : _vm._e(), _c('div', {
    ref: "tabsHeader",
    staticClass: "tabsHeader"
  }, _vm._l(_vm.tabs, function (tab) {
    return _c('button', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: tab.enabled,
        expression: "tab.enabled"
      }],
      key: tab.id,
      class: {
        tabItem: true,
        tabActive: tab.active,
        tabHasIcon: !!tab.icon,
        [tab.id]: true
      },
      attrs: {
        "type": "button",
        "title": tab.name
      },
      on: {
        "click": function ($event) {
          if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "left", 37, $event.key, ["Left", "ArrowLeft"])) return null;
          if ('button' in $event && $event.button !== 0) return null;
          return _vm.selectTab(tab);
        },
        "mouseup": function ($event) {
          if ('button' in $event && $event.button !== 1) return null;
          return _vm.closeTab(tab);
        }
      }
    }, [tab.icon ? _c('i', {
      class: ['tabIcon', 'fas', tab.icon]
    }) : _vm._e(), _c('span', {
      staticClass: "tabName",
      on: {
        "dblclick": function ($event) {
          return _vm.editTabName(tab);
        }
      }
    }, [_vm.tabEditId == tab.id ? [_c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.tabEditName,
        expression: "tabEditName"
      }],
      attrs: {
        "type": "text"
      },
      domProps: {
        "value": _vm.tabEditName
      },
      on: {
        "blur": _vm.saveTabName,
        "keyup": [function ($event) {
          if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")) return null;
          return _vm.saveTabName.apply(null, arguments);
        }, function ($event) {
          if (!$event.type.indexOf('key') && _vm._k($event.keyCode, "esc", 27, $event.key, ["Esc", "Escape"])) return null;
          return _vm.resetTabName.apply(null, arguments);
        }],
        "input": function ($event) {
          if ($event.target.composing) return;
          _vm.tabEditName = $event.target.value;
        }
      }
    })] : [_vm._t("tabName", function () {
      return [_vm._v(_vm._s(tab.name))];
    }, {
      "tab": tab
    })]], 2), tab.closable ? _c('svg', {
      staticClass: "tabClose",
      attrs: {
        "xmlns": "http://www.w3.org/2000/svg",
        "title": "Close",
        "viewBox": "0 0 24 24"
      },
      on: {
        "click": function ($event) {
          $event.preventDefault();
          $event.stopPropagation();
          return _vm.closeTab(tab);
        }
      }
    }, [_c('circle', {
      attrs: {
        "cx": "12",
        "cy": "12",
        "r": "11",
        "stroke": "black",
        "stroke-width": "2",
        "fill": "none"
      }
    }), _c('path', {
      attrs: {
        "stroke": "black",
        "stroke-width": "2",
        "fill": "none",
        "d": "M7,7,17,17"
      }
    }), _c('path', {
      attrs: {
        "stroke": "black",
        "stroke-width": "2",
        "fill": "none",
        "d": "M7,17,17,7"
      }
    })]) : _vm._e()]);
  }), 0), _c('div', {
    staticClass: "tabsBody"
  }, [_vm._t("default", null, {
    "tabs": this
  }), _vm._l(this.dynamicTabs, function (tab) {
    return _c('Tab', {
      key: tab.id,
      attrs: {
        "id": tab.id,
        "name": tab.name,
        "icon": tab.icon,
        "selected": tab.selected,
        "data": tab.data,
        "enabled": tab.enabled,
        "closable": tab.closable,
        "allowShow": () => _vm.onDynamicAllowShow(tab)
      },
      on: {
        "close": function ($event) {
          return _vm.onDynamic(tab, 'close');
        },
        "hide": function ($event) {
          return _vm.onDynamic(tab, 'hide');
        },
        "show": function ($event) {
          return _vm.onDynamic(tab, 'show');
        }
      }
    }, [_vm._t(tab.id, function () {
      return [_vm._t("dynamic", null, {
        "tab": tab
      })];
    }, {
      "tab": tab
    })], 2);
  })], 2)]);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./components/Tab.vue + 3 modules
var Tab = __webpack_require__(6376);
// EXTERNAL MODULE: ./utils.js + 4 modules
var utils = __webpack_require__(9061);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Tabs.vue?vue&type=script&lang=js


/* harmony default export */ const Tabsvue_type_script_lang_js = ({
  name: "Tabs",
  components: {
    Tab: Tab["default"]
  },
  props: {
    id: {
      type: String,
      required: true
    },
    pills: {
      type: Boolean,
      default: false
    },
    pillsMultiline: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: 'top'
    },
    allowTabRename: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      tabIdCounter: 0,
      tabs: [],
      activeTab: null,
      dynamicTabs: [],
      spaceLimited: false,
      tabEditName: '',
      tabEditId: null
    };
  },
  mounted() {
    if (Array.isArray(this.$children)) {
      this.tabs = this.$children;
      let activeTabs = this.tabs.filter(tab => tab.active === true);
      if (activeTabs.length === 1) {
        this.activeTab = activeTabs[0];
      } else {
        this.resetActiveTab();
      }
    }
    this.$root.$on('windowResized', this.adjustSizes);
    this.$nextTick(this.adjustSizes);
  },
  computed: {
    hasEnabledTabs() {
      return this.tabs.filter(t => t.enabled).length > 0;
    },
    classes() {
      var classes = ['vue-component', 'tabs', this.pills ? 'pills' : 'boxed', this.position];
      if (!this.hasEnabledTabs) {
        classes.push('hide');
      }
      if (this.spaceLimited) {
        classes.push('spaceLimited');
      }
      if (this.pills && this.pillsMultiline) {
        classes.push('multiline');
      }
      return classes;
    }
  },
  watch: {
    hasEnabledTabs(hasTabs) {
      this.$emit('empty', !hasTabs);
    },
    activeTab() {
      this.adjustSizes();
    }
  },
  beforeCreate() {
    utils/* default */.A.enableHtmlProps(this);
  },
  methods: {
    addTab(name, icon = null, data = null, id = null, selected = false, closable = false, show = null, hide = null, close = null, allowShow = null) {
      if (!id) {
        id = this.id + "_tab_" + this.tabIdCounter++;
      }
      this.dynamicTabs.push({
        id: id,
        name: name,
        icon: icon,
        data: data,
        selected: selected,
        enabled: true,
        closable: closable,
        show: show,
        hide: hide,
        close: close,
        allowShow: allowShow
      });
      if (selected) {
        this.$nextTick(() => {
          this.selectTab(id);
          this.adjustSizes();
        });
      }
    },
    editTabName(tab) {
      if (!this.allowTabRename || tab.id !== this.getActiveTabId()) {
        return;
      }
      const tabData = this.dynamicTabs.find(t => t.id === tab.id);
      if (tabData) {
        this.tabEditName = tabData.name;
        this.tabEditId = tab.id;
      }
    },
    saveTabName() {
      const tabData = this.dynamicTabs.find(t => t.id === this.tabEditId);
      if (tabData) {
        this.$set(tabData, 'name', this.tabEditName);
        this.tabEditId = null;
      }
    },
    resetTabName() {
      this.tabEditId = null;
    },
    onDynamic(tab, evt) {
      var index = this.tabs.findIndex(t => t.id === tab.id);
      if (typeof tab[evt] === 'function' && index !== -1) {
        tab[evt](this.tabs[index]);
      }
    },
    async onDynamicAllowShow(tab) {
      var index = this.tabs.findIndex(t => t.id === tab.id);
      if (typeof tab.allowShow === 'function' && index !== -1) {
        return await tab.allowShow(this.tabs[index]);
      }
      return true;
    },
    adjustSizes() {
      if (!this.$refs.tabsHeader) {
        return;
      }
      this.spaceLimited = this.$refs.tabsHeader.getBoundingClientRect().width < this.tabs.length * 96; // 96 = 6em = 6*16
      this.$nextTick(() => {
        if (!this.$refs.tabsHeader) {
          return;
        }
        var overflows = this.$refs.tabsHeader.scrollWidth > this.$refs.tabsHeader.parentNode.getBoundingClientRect().width;
        this.$refs.tabsHeader.style.overflowX = overflows ? "auto" : "visible";
        this.$refs.tabsHeader.style.overflowY = overflows ? "hidden" : "visible";
      });
    },
    getTab(id) {
      for (let i in this.tabs) {
        if (this.tabs[i].id == id) {
          return this.tabs[i];
        }
      }
      return null;
    },
    getActiveTab() {
      return this.activeTab;
    },
    getActiveTabId() {
      if (this.activeTab !== null) {
        return this.activeTab.id;
      } else {
        return null;
      }
    },
    async selectTab(selectedTab) {
      if (typeof selectedTab === "string") {
        selectedTab = this.getTab(selectedTab); // Get tab by id
      }
      if (this.activeTab === selectedTab || !selectedTab) {
        return;
      }
      if (await selectedTab.canShow()) {
        if (this.activeTab !== null) {
          this.activeTab.active = false;
          this.activeTab.$emit('hide', this.activeTab);
        }
        this.activeTab = selectedTab;
        this.activeTab.active = true;
        this.$emit('selected', selectedTab);
        // Make sure the component is really shown by using nextTick...
        this.$nextTick(() => this.activeTab.$emit('show', this.activeTab));
      }
    },
    closeTab(tab) {
      if (typeof tab === "string") {
        tab = this.getTab(tab); // Get tab by id
      }
      if (!tab.closable) {
        return;
      }
      var index = this.tabs.findIndex(t => t.id === tab.id);
      if (index !== -1) {
        tab.$emit('close', tab);
        this.tabs.splice(index, 1);
        var index2 = this.dynamicTabs.findIndex(t => t.id === tab.id);
        if (index2 !== -1) {
          this.dynamicTabs.splice(index2, 1);
        }
        if (tab === this.activeTab) {
          this.activeTab = null;
        }
        this.resetActiveTab();
        this.adjustSizes();
      }
    },
    resetActiveTab(force = false) {
      if (this.tabs.length === 0) {
        return;
      }
      if (force || this.getActiveTab() === null) {
        this.selectTab(this.tabs.find(tab => tab.enabled));
      }
    }
  }
});
;// ./components/Tabs.vue?vue&type=script&lang=js
 /* harmony default export */ const components_Tabsvue_type_script_lang_js = (Tabsvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/Tabs.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(5444)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_Tabsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const Tabs = (component.exports);

/***/ }),

/***/ 6376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Tab)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Tab.vue?vue&type=template&id=000afa5e
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.enabled && _vm.active,
      expression: "enabled && active"
    }],
    staticClass: "tabContent"
  }, [_vm._t("default", null, {
    "tab": this
  })], 2);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./utils.js + 4 modules
var utils = __webpack_require__(9061);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Tab.vue?vue&type=script&lang=js

/* harmony default export */ const Tabvue_type_script_lang_js = ({
  name: 'Tab',
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    selected: {
      type: Boolean,
      default: false
    },
    enabled: {
      type: Boolean,
      default: true
    },
    data: {},
    closable: {
      type: Boolean,
      default: false
    },
    allowShow: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      active: false
    };
  },
  beforeCreate() {
    utils/* default */.A.enableHtmlProps(this);
  },
  mounted() {
    this.updateState();
    this.$on('hide', () => this.active = false);
    this.$on('show', () => this.active = true);
    if (this.icon) {
      utils/* default */.A.loadFontAwesome(this);
    }
  },
  watch: {
    selected() {
      this.updateState();
    },
    enabled() {
      this.updateState();
    }
  },
  methods: {
    updateState() {
      this.active = this.selected;
      if (this.enabled && this.active) {
        this.getTabs().selectTab(this);
      } else {
        this.getTabs().resetActiveTab(true);
      }
    },
    getTabs() {
      let parent = this.$parent;
      while (parent && parent.$options.name !== 'Tabs') {
        parent = parent.$parent;
      }
      return parent;
    },
    async canShow() {
      if (this.active) {
        return true;
      } else if (typeof this.allowShow !== 'function' || (await this.allowShow(this))) {
        return true;
      } else {
        return false;
      }
    }
  }
});
;// ./components/Tab.vue?vue&type=script&lang=js
 /* harmony default export */ const components_Tabvue_type_script_lang_js = (Tabvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/Tab.vue





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  components_Tabvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ const Tab = (component.exports);

/***/ }),

/***/ 8279:
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
___CSS_LOADER_EXPORT___.push([module.id, `.vue-component .highlight-box{box-shadow:0 0 0 .2em #c8e1ff}.vue-component code.id{color:maroon}.vue-component abbr{-webkit-text-decoration:underline dotted 1px;text-decoration:underline dotted 1px}.vue-component .unit{opacity:.6}.vue-component .status[data-value=submitted]{color:#000}.vue-component .status[data-value=running]{color:#ff8c00}.vue-component .status[data-value=queued]{color:#00008b}.vue-component .status[data-value=finished]{color:#006400}.vue-component .status[data-value=canceled]{color:#a9a9a9}.vue-component .status[data-value=error]{color:red}.vue-component.inline.process{margin-left:1em}.vue-component.inline h1{font-size:1.17em}.vue-component.inline h2{font-size:1.1em}.vue-component.inline h3{font-size:1.05em}.vue-component.inline h4,.vue-component.inline h5,.vue-component.inline h6{font-size:1em}.vue-component .comma-separated-list{display:inline;list-style:none;padding:0}.vue-component .comma-separated-list li{display:inline;padding:0}.vue-component .comma-separated-list li:after{content:", "}.vue-component .comma-separated-list li:last-child:after{content:""}.vue-component .required{color:red;font-weight:700}.vue-component.message-block{margin:1em 0;padding:.5em}.vue-component.message-block>strong{display:block;margin-bottom:.5em}.vue-component.message-block>p{margin:0}.vue-component .param-name,.vue-component .process-name{color:#369}.vue-component .param-argument,.vue-component .return-value{color:#936}.vue-component .data-type{color:#693}.vue-component .param-optional{font-weight:700}.vue-component .badges{margin:0;padding:0;list-style-type:none;display:inline-block}.vue-component .badges .badge{display:inline-block;font-size:.8em;margin:.25em;padding:.35em .5em .25em .5em;line-height:1em;text-align:center;white-space:nowrap;text-transform:uppercase;vertical-align:initial;border-radius:.5em;color:#fff;background-color:#6c757d}.vue-component .badges:not(.inline){margin-left:-.25em;margin-right:-.25em}.vue-component .badges.small .badge{padding:.25em .35em .2em .35em;font-size:.75em}.vue-component .badges.inline{margin-left:.5em;border-radius:.25em}.vue-component .badges.inline .badge{margin-top:0;margin-bottom:0}.vue-component .badges .badge a{color:#fff;border-bottom:1px dotted #fff;text-decoration:none}.vue-component .badges .badge a.badge-fill{margin:-.35em -.5em;padding:.35em .5em;display:block;border-bottom:0}.vue-component .badges.small .badge a.badge-fill{margin:-.2em -.3em;padding:.25em .35em}.vue-component .badges .badge a:hover{color:#fff;border-bottom-style:solid}.vue-component .badges .default{background-color:#555}.vue-component .badges .green{background-color:green}.vue-component .badges .red{background-color:maroon}.vue-component .badges .option1{background-color:#369}.vue-component .badges .option2{background-color:#693}.vue-component .badges .option3{background-color:#936}.vue-component .badges .option4{background-color:#963}.vue-component .badges .deprecated{background-color:red}.vue-component .badges .experimental{background-color:#8a2be2}.vue-component .badges .action{border:1px solid #000;background-color:#fff;color:#000;margin:.33em;cursor:pointer;text-transform:none}.vue-component .badges .action:hover{background-color:#000;color:#fff}.vue-component .badges .action:hover>a{color:#fff}.vue-component .badges .action>a{color:#000}.vue-component .badges .docker{background-color:#0db7ed}.vue-component .tabular{display:flex;margin:.2em 0;padding:1px}.vue-component .tabular label{flex:1;font-weight:700}.vue-component .tabular .value{flex:3}.vue-component .tabular .value td>div,.vue-component .tabular .value>.formatted>ul,.vue-component .tabular .value>ul,.vue-component .tabular ul.value{max-height:15em;overflow:auto}.vue-component .tabular .value pre{margin:0}.vue-component.stac .map{background:#0000;height:350px}.vue-component.stac .tabular{margin:.5em 0}.vue-component.stac .tabular.wrap{display:block}.vue-component.stac .tabular.wrap .value{margin-top:.5em;margin-left:1em;margin-bottom:.5em}.vue-component.stac .tabular .value ul{padding-left:20px}.assets.empty,.vue-component.stac .links:empty{display:none}.vue-component.stac .thumbnails{overflow-x:auto;overflow-y:hidden;width:100%;white-space:nowrap}.vue-component.stac .thumbnails a{margin:5px;display:inline-block}.vue-component.stac .thumbnails a img{padding:2px;max-height:200px;vertical-align:middle;border:2px solid #0000}.vue-component.stac .thumbnails a:hover img{border:2px solid #00000080}.vue-component .federation>ul>li{margin-bottom:.5em}.vue-component .federation>ul>li>small{display:block}.vue-component .federation>ul>li>h4{margin:0}.vue-component .federation .fed-header{margin:.2em 0}.vue-component .federation .fed-header>.fed-title{display:inline-block;vertical-align:bottom}.vue-component.tabs{display:flex;flex-direction:column;height:100%}.vue-component.tabs .tabsHeader{display:flex}.vue-component.tabs .tabsHeader .tabClose,.vue-component.tabs .tabsHeader .tabName{display:inline-block;vertical-align:middle}.vue-component.tabs .tabsHeader .tabName{text-overflow:ellipsis;overflow:hidden;min-width:2em;flex-grow:1}.vue-component.tabs .tabsHeader .tabHasIcon .tabName{margin-left:5px}.vue-component.tabs .tabsBody{flex-grow:1;height:100%;overflow:hidden}.vue-component.tabs .tabContent.tabActive{display:block}.vue-component.tabs .tabItem{display:flex;background-color:#0000;border:0;padding:5px 10px;min-width:6em;white-space:nowrap;cursor:pointer}.vue-component.tabs .tabItem::-moz-focus-inner{border:0}.vue-component.tabs .tabItem:focus{outline:none}.vue-component.tabs .tabItem .tabClose{display:inline-block;margin-left:5px;height:1em;width:1em;min-width:1em}.vue-component.tabs .tabItem .tabClose *{stroke:#000}.vue-component.tabs .tabItem .tabClose:hover *{stroke:red}.vue-component.tabs.top .tabItem{margin:5px 5px 0 0}.vue-component.tabs.bottom{flex-direction:column-reverse}.vue-component.tabs.bottom .tabItem{margin:0 5px 5px 0}.vue-component.tabs.boxed{border-radius:3px;border:1px solid #aaa;box-sizing:border-box}.vue-component.tabs.boxed>.tabsHeader{padding-left:5px;background-color:#f9f9f9}.vue-component.tabs.boxed>.tabsHeader>.tabItem{border:1px solid #aaa;color:#666;background-color:#eee}.vue-component.tabs.boxed>.tabsHeader>.tabItem:hover .fas,.vue-component.tabs.boxed>.tabsHeader>.tabItem:hover .tabName{color:#000}.vue-component.tabs.boxed>.tabsHeader>.tabItem.tabActive{background-color:#fff;color:#000;z-index:1}.vue-component.tabs.boxed>.tabsBody>.tabContent{background-color:#fff;overflow:auto;height:100%}.vue-component.tabs.boxed.top>.tabsBody>.tabContent{border-top:1px solid #ddd;box-sizing:border-box}.vue-component.tabs.boxed.top>.tabsHeader>.tabItem{border-bottom:0;border-radius:5px 5px 0 0}.vue-component.tabs.boxed.top>.tabsHeader>.tabItem.tabActive{padding-bottom:6px;margin-bottom:-1px}.vue-component.tabs.boxed.bottom>.tabsBody>.tabContent{border-bottom:1px solid #ddd;padding-bottom:1px;box-sizing:border-box}.vue-component.tabs.boxed.bottom>.tabsHeader>.tabItem{border-top:0;border-radius:0 0 5px 5px}.vue-component.tabs.boxed.bottom>.tabsHeader>.tabItem.tabActive{padding-top:6px;margin-top:-1px}.vue-component.tabs.pills.multiline>.tabsHeader{display:block}.vue-component.tabs.pills.multiline>.tabsHeader>.tabItem{display:inline-block}.vue-component.tabs.pills>.tabsBody>.tabContent{height:100%}.vue-component.tabs.pills>.tabsHeader>.tabItem{border:1px solid #000;border-radius:5px;color:#000;opacity:.6}.vue-component.tabs.pills>.tabsHeader>.tabItem:hover{opacity:1}.vue-component.tabs.pills>.tabsHeader>.tabItem.tabActive{opacity:1;border-width:2px;padding:4px 9px}.vue-component.tabs.hide{border:0}.vue-component.tabs.hide>.tabsBody,.vue-component.tabs.hide>.tabsEmpty:empty,.vue-component.tabs.hide>.tabsHeader,.vue-component.tabs.spaceLimited .tabHasIcon:not(.tabActive) .tabName,.vue-component.tabs.spaceLimited .tabItem:not(.tabActive) .tabClose{display:none}.vue-component.tabs.spaceLimited .tabItem{min-width:auto}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=openeo.5746.js.map
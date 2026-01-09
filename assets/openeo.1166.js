"use strict";
(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[1166],{

/***/ 1166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Tabshadow)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Tab.vue?vue&type=template&id=000afa5e&shadow
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
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Tab.vue?vue&type=script&lang=js&shadow

/* harmony default export */ const Tabvue_type_script_lang_js_shadow = ({
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
;// ./components/Tab.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ const components_Tabvue_type_script_lang_js_shadow = (Tabvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/Tab.vue?shadow





/* normalize component */
;
var component = (0,componentNormalizer/* default */.A)(
  components_Tabvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  ,true
)

/* harmony default export */ const Tabshadow = (component.exports);

/***/ })

}]);
//# sourceMappingURL=openeo.1166.js.map
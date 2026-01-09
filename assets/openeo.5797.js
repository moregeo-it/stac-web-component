(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[2237,5797,9139],{

/***/ 334
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9061);
/* harmony import */ var _openeo_js_commons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1572);
/* harmony import */ var _openeo_js_commons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_openeo_js_commons__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    mapOptions: {
      // It's not possible to specify defaults for the individual properties, therefore this prop is only accessed through a computed property which adds them in.
      type: Object,
      // Default values will be set in computed.leafletOptions
      default: () => ({}),
      validator: function (value) {
        const allowedTypes = {
          // keep in sync with Readme
          height: "string",
          width: "string",
          basemap: "string",
          attribution: "string",
          wrapAroundAntimeridian: "boolean",
          scrollWheelZoom: "boolean"
        };
        const allowedKeys = Object.keys(allowedTypes);
        return typeof value == 'object' && Object.keys(value).every(key => allowedKeys.indexOf(key) != -1 && typeof value[key] == allowedTypes[key]);
      }
    }
  },
  data() {
    return {
      map: null
    };
  },
  computed: {
    leafletOptions() {
      return {
        // keep in sync with Readme
        height: this.mapOptions.height || '250px',
        width: this.mapOptions.width || 'auto',
        basemap: this.mapOptions.basemap || 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: this.mapOptions.attribution || 'Map data &copy; <a href="http://www.osm.org">OpenStreetMap</a>',
        noWrap: this.mapOptions.wrapAroundAntimeridian === undefined ? true : !this.mapOptions.wrapAroundAntimeridian,
        // negate!
        scrollWheelZoom: this.mapOptions.scrollWheelZoom === undefined ? false : this.mapOptions.scrollWheelZoom
      };
    }
  },
  watch: {
    showMap(val) {
      if (val) {
        this.initMap();
      }
    }
  },
  beforeCreate() {
    _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.enableHtmlProps(this);
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initLeafletPlugins() {
      // To be implemented in Collection/Item, if required.
    },
    async initMap() {
      if (!this.$refs.mapContainer) {
        await this.$nextTick();
      }
      if (!this.$refs.mapContainer || this.map !== null || !this.showMap) {
        return false;
      }
      // Only use the L for leaflet temporarily and release it later again
      let oldL = window.L;
      try {
        this.map = {
          leaflet: null,
          instance: null,
          geometries: null
        };
        // Leaflet no conflict fix: Try to re-use an already available instance of Leaflet to avoid
        // conflicts with other libraries such as ipyleaflet. Also, use L variable as long as initMap
        // is running. For all other cases store Leaflet in this.map.leaflet, which can be used in other places.
        let hasLeaflet = () => _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.isObject(window.L) && _openeo_js_commons__WEBPACK_IMPORTED_MODULE_1__.Versions.validate(window.L.version) && _openeo_js_commons__WEBPACK_IMPORTED_MODULE_1__.Versions.compare(window.L.version, "1.x.x", "=");
        if (!hasLeaflet()) {
          window.L = await __webpack_require__.e(/* import() */ 3481).then(__webpack_require__.t.bind(__webpack_require__, 3481, 23));
        }
        if (!hasLeaflet()) {
          console.warn("Leaflet is not available");
          return false;
        }
        this.map.leaflet = window.L;
        let css = await __webpack_require__.e(/* import() */ 2150).then(__webpack_require__.t.bind(__webpack_require__, 2150, 23));
        // In Web Component mode inject the CSS into the shadowroot
        if (this.$root && this.$root.$options.shadowRoot && css.__inject__) {
          css.__inject__(this.$root.$options.shadowRoot);
        }
        var map = this.map.leaflet.map(this.$refs.mapContainer, {
          scrollWheelZoom: this.leafletOptions.scrollWheelZoom
        });
        this.map.instance = map;
        var osm = this.map.leaflet.tileLayer(this.leafletOptions.basemap, {
          name: 'Basemap',
          attribution: this.leafletOptions.attribution,
          noWrap: this.leafletOptions.noWrap
        });
        osm.addTo(map);
        if (typeof this.addFeatures === 'function') {
          this.map.geometries = this.addFeatures();
          if (this.map.geometries) {
            this.map.geometries.addTo(map);
          }
        }

        // Update map container in DOM
        this.$refs.mapContainer.style.width = this.leafletOptions.width;
        this.$refs.mapContainer.style.height = this.leafletOptions.height;
        map.invalidateSize(false);
        this.updateMapView();
        if (typeof this.mapOptions.onAfterMapInit === 'function') {
          this.mapOptions.onAfterMapInit(map, this.map.geometries);
        }
        // Leaflet no conflict fix: Release L global variable again
        window.L = oldL;
        return true;
      } catch (e) {
        console.error(e);
        // Leaflet no conflict fix: Release L global variable again
        window.L = oldL;
        return false;
      }
    },
    updateMapView() {
      if (!this.map || !this.map.geometries) {
        return;
      }

      // Compute somewhat smart map extent and zoom level around bbox
      var bounds = this.map.geometries.getBounds();
      var zoom = this.map.instance.getBoundsZoom(bounds);
      var newZoom = Math.min(zoom, 11); // Never zoom closer than 8
      if (zoom > 8) {
        newZoom = newZoom - 3; // Zoom out three levels
      } else if (zoom > 5) {
        newZoom = newZoom - 2; // Zoom out two levels
      } else if (zoom > 2) {
        newZoom--; // Zoom out one level
      }
      this.map.instance.fitBounds(bounds);
      this.map.instance.setZoom(newZoom);
      this.map.instance.once('moveend zoomend', () => this.map.instance.invalidateSize(false));
    }
  }
});

/***/ },

/***/ 1245
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1639);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("c63cde04", content, shadowRoot)
};

/***/ },

/***/ 1520
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ },

/***/ 1639
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
___CSS_LOADER_EXPORT___.push([module.id, `.vue-component .highlight-box{box-shadow:0 0 0 .2em #c8e1ff}.vue-component code.id{color:maroon}.vue-component abbr{-webkit-text-decoration:underline dotted 1px;text-decoration:underline dotted 1px}.vue-component .unit{opacity:.6}.vue-component .status[data-value=submitted]{color:#000}.vue-component .status[data-value=running]{color:#ff8c00}.vue-component .status[data-value=queued]{color:#00008b}.vue-component .status[data-value=finished]{color:#006400}.vue-component .status[data-value=canceled]{color:#a9a9a9}.vue-component .status[data-value=error]{color:red}.vue-component.inline.process{margin-left:1em}.vue-component.inline h1{font-size:1.17em}.vue-component.inline h2{font-size:1.1em}.vue-component.inline h3{font-size:1.05em}.vue-component.inline h4,.vue-component.inline h5,.vue-component.inline h6{font-size:1em}.vue-component .comma-separated-list{display:inline;list-style:none;padding:0}.vue-component .comma-separated-list li{display:inline;padding:0}.vue-component .comma-separated-list li:after{content:", "}.vue-component .comma-separated-list li:last-child:after{content:""}.vue-component .required{color:red;font-weight:700}.vue-component.message-block{margin:1em 0;padding:.5em}.vue-component.message-block>strong{display:block;margin-bottom:.5em}.vue-component.message-block>p{margin:0}.vue-component .param-name,.vue-component .process-name{color:#369}.vue-component .param-argument,.vue-component .return-value{color:#936}.vue-component .data-type{color:#693}.vue-component .param-optional{font-weight:700}.vue-component .badges{margin:0;padding:0;list-style-type:none;display:inline-block}.vue-component .badges .badge{display:inline-block;font-size:.8em;margin:.25em;padding:.35em .5em .25em .5em;line-height:1em;text-align:center;white-space:nowrap;text-transform:uppercase;vertical-align:initial;border-radius:.5em;color:#fff;background-color:#6c757d}.vue-component .badges:not(.inline){margin-left:-.25em;margin-right:-.25em}.vue-component .badges.small .badge{padding:.25em .35em .2em .35em;font-size:.75em}.vue-component .badges.inline{margin-left:.5em;border-radius:.25em}.vue-component .badges.inline .badge{margin-top:0;margin-bottom:0}.vue-component .badges .badge a{color:#fff;border-bottom:1px dotted #fff;text-decoration:none}.vue-component .badges .badge a.badge-fill{margin:-.35em -.5em;padding:.35em .5em;display:block;border-bottom:0}.vue-component .badges.small .badge a.badge-fill{margin:-.2em -.3em;padding:.25em .35em}.vue-component .badges .badge a:hover{color:#fff;border-bottom-style:solid}.vue-component .badges .default{background-color:#555}.vue-component .badges .green{background-color:green}.vue-component .badges .red{background-color:maroon}.vue-component .badges .option1{background-color:#369}.vue-component .badges .option2{background-color:#693}.vue-component .badges .option3{background-color:#936}.vue-component .badges .option4{background-color:#963}.vue-component .badges .deprecated{background-color:red}.vue-component .badges .experimental{background-color:#8a2be2}.vue-component .badges .action{border:1px solid #000;background-color:#fff;color:#000;margin:.33em;cursor:pointer;text-transform:none}.vue-component .badges .action:hover{background-color:#000;color:#fff}.vue-component .badges .action:hover>a{color:#fff}.vue-component .badges .action>a{color:#000}.vue-component .badges .docker{background-color:#0db7ed}.vue-component .tabular{display:flex;margin:.2em 0;padding:1px}.vue-component .tabular label{flex:1;font-weight:700}.vue-component .tabular .value{flex:3}.vue-component .tabular .value td>div,.vue-component .tabular .value>.formatted>ul,.vue-component .tabular .value>ul,.vue-component .tabular ul.value{max-height:15em;overflow:auto}.vue-component .tabular .value pre{margin:0}.vue-component.stac .map{background:#0000;height:350px}.vue-component.stac .tabular{margin:.5em 0}.vue-component.stac .tabular.wrap{display:block}.vue-component.stac .tabular.wrap .value{margin-top:.5em;margin-left:1em;margin-bottom:.5em}.vue-component.stac .tabular .value ul{padding-left:20px}.assets.empty,.vue-component.stac .links:empty{display:none}.vue-component.stac .thumbnails{overflow-x:auto;overflow-y:hidden;width:100%;white-space:nowrap}.vue-component.stac .thumbnails a{margin:5px;display:inline-block}.vue-component.stac .thumbnails a img{padding:2px;max-height:200px;vertical-align:middle;border:2px solid #0000}.vue-component.stac .thumbnails a:hover img{border:2px solid #00000080}.vue-component .federation>ul>li{margin-bottom:.5em}.vue-component .federation>ul>li>small{display:block}.vue-component .federation>ul>li>h4{margin:0}.vue-component .federation .fed-header{margin:.2em 0}.vue-component .federation .fed-header>.fed-title{display:inline-block;vertical-align:bottom}.vue-component.error{background-color:#8000001a;border:1px solid maroon}.vue-component.error strong{color:maroon}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 2676
(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(4842);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("6e3e5acc", content, shadowRoot)
};

/***/ },

/***/ 3708
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
___CSS_LOADER_EXPORT___.push([module.id, `.vue-component .highlight-box{box-shadow:0 0 0 .2em #c8e1ff}.vue-component code.id{color:maroon}.vue-component abbr{-webkit-text-decoration:underline dotted 1px;text-decoration:underline dotted 1px}.vue-component .unit{opacity:.6}.vue-component .status[data-value=submitted]{color:#000}.vue-component .status[data-value=running]{color:#ff8c00}.vue-component .status[data-value=queued]{color:#00008b}.vue-component .status[data-value=finished]{color:#006400}.vue-component .status[data-value=canceled]{color:#a9a9a9}.vue-component .status[data-value=error]{color:red}.vue-component.inline.process{margin-left:1em}.vue-component.inline h1{font-size:1.17em}.vue-component.inline h2{font-size:1.1em}.vue-component.inline h3{font-size:1.05em}.vue-component.inline h4,.vue-component.inline h5,.vue-component.inline h6{font-size:1em}.vue-component .comma-separated-list{display:inline;list-style:none;padding:0}.vue-component .comma-separated-list li{display:inline;padding:0}.vue-component .comma-separated-list li:after{content:", "}.vue-component .comma-separated-list li:last-child:after{content:""}.vue-component .required{color:red;font-weight:700}.vue-component.message-block{margin:1em 0;padding:.5em}.vue-component.message-block>strong{display:block;margin-bottom:.5em}.vue-component.message-block>p{margin:0}.vue-component .param-name,.vue-component .process-name{color:#369}.vue-component .param-argument,.vue-component .return-value{color:#936}.vue-component .data-type{color:#693}.vue-component .param-optional{font-weight:700}.vue-component .badges{margin:0;padding:0;list-style-type:none;display:inline-block}.vue-component .badges .badge{display:inline-block;font-size:.8em;margin:.25em;padding:.35em .5em .25em .5em;line-height:1em;text-align:center;white-space:nowrap;text-transform:uppercase;vertical-align:initial;border-radius:.5em;color:#fff;background-color:#6c757d}.vue-component .badges:not(.inline){margin-left:-.25em;margin-right:-.25em}.vue-component .badges.small .badge{padding:.25em .35em .2em .35em;font-size:.75em}.vue-component .badges.inline{margin-left:.5em;border-radius:.25em}.vue-component .badges.inline .badge{margin-top:0;margin-bottom:0}.vue-component .badges .badge a{color:#fff;border-bottom:1px dotted #fff;text-decoration:none}.vue-component .badges .badge a.badge-fill{margin:-.35em -.5em;padding:.35em .5em;display:block;border-bottom:0}.vue-component .badges.small .badge a.badge-fill{margin:-.2em -.3em;padding:.25em .35em}.vue-component .badges .badge a:hover{color:#fff;border-bottom-style:solid}.vue-component .badges .default{background-color:#555}.vue-component .badges .green{background-color:green}.vue-component .badges .red{background-color:maroon}.vue-component .badges .option1{background-color:#369}.vue-component .badges .option2{background-color:#693}.vue-component .badges .option3{background-color:#936}.vue-component .badges .option4{background-color:#963}.vue-component .badges .deprecated{background-color:red}.vue-component .badges .experimental{background-color:#8a2be2}.vue-component .badges .action{border:1px solid #000;background-color:#fff;color:#000;margin:.33em;cursor:pointer;text-transform:none}.vue-component .badges .action:hover{background-color:#000;color:#fff}.vue-component .badges .action:hover>a{color:#fff}.vue-component .badges .action>a{color:#000}.vue-component .badges .docker{background-color:#0db7ed}.vue-component .tabular{display:flex;margin:.2em 0;padding:1px}.vue-component .tabular label{flex:1;font-weight:700}.vue-component .tabular .value{flex:3}.vue-component .tabular .value td>div,.vue-component .tabular .value>.formatted>ul,.vue-component .tabular .value>ul,.vue-component .tabular ul.value{max-height:15em;overflow:auto}.vue-component .tabular .value pre{margin:0}.vue-component.stac .map{background:#0000;height:350px}.vue-component.stac .tabular{margin:.5em 0}.vue-component.stac .tabular.wrap{display:block}.vue-component.stac .tabular.wrap .value{margin-top:.5em;margin-left:1em;margin-bottom:.5em}.vue-component.stac .tabular .value ul{padding-left:20px}.assets.empty,.vue-component.stac .links:empty{display:none}.vue-component.stac .thumbnails{overflow-x:auto;overflow-y:hidden;width:100%;white-space:nowrap}.vue-component.stac .thumbnails a{margin:5px;display:inline-block}.vue-component.stac .thumbnails a img{padding:2px;max-height:200px;vertical-align:middle;border:2px solid #0000}.vue-component.stac .thumbnails a:hover img{border:2px solid #00000080}.vue-component .federation>ul>li{margin-bottom:.5em}.vue-component .federation>ul>li>small{display:block}.vue-component .federation>ul>li>h4{margin:0}.vue-component .federation .fed-header{margin:.2em 0}.vue-component .federation .fed-header>.fed-title{display:inline-block;vertical-align:bottom}.vue-component.object-tree .inline{display:inline-block}.vue-component.object-tree ol{padding-left:2em;margin-bottom:.5em}.vue-component.object-tree ol>li:only-child{list-style-type:none;margin-left:-2em}.vue-component.object-tree ol>li>div>ul{padding-left:0}.vue-component.object-tree ul{padding-left:1em}.vue-component.object-tree ul>li{list-style-type:none}.vue-component.object-tree li{margin-bottom:.25em}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 4140
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const STAC_MEDIA_TYPES = ['application/geo+json', 'application/json'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  methods: {
    isStacLinkType(link, strict = false) {
      if (typeof link.type === 'undefined') {
        return !strict;
      }
      return typeof link.type === 'string' && STAC_MEDIA_TYPES.includes(link.type.toLowerCase());
    },
    getStacLinkByRel(links, rel, strict = false) {
      if (!Array.isArray(links)) {
        return undefined;
      }
      return links.find(link => this.isStacLinkType(link, strict) && typeof link.rel === 'string' && link.rel.toLowerCase() === rel.toLowerCase());
    },
    getStacLinksByRels(links, rels, strict = false) {
      if (!Array.isArray(links)) {
        return [];
      }
      return links.filter(link => this.isStacLinkType(link, strict) && typeof link.rel === 'string' && rels.includes(link.rel.toLowerCase()));
    }
  }
});

/***/ },

/***/ 4842
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
___CSS_LOADER_EXPORT___.push([module.id, `.vue-component .highlight-box{box-shadow:0 0 0 .2em #c8e1ff}.vue-component code.id{color:maroon}.vue-component abbr{-webkit-text-decoration:underline dotted 1px;text-decoration:underline dotted 1px}.vue-component .unit{opacity:.6}.vue-component .status[data-value=submitted]{color:#000}.vue-component .status[data-value=running]{color:#ff8c00}.vue-component .status[data-value=queued]{color:#00008b}.vue-component .status[data-value=finished]{color:#006400}.vue-component .status[data-value=canceled]{color:#a9a9a9}.vue-component .status[data-value=error]{color:red}.vue-component.inline.process{margin-left:1em}.vue-component.inline h1{font-size:1.17em}.vue-component.inline h2{font-size:1.1em}.vue-component.inline h3{font-size:1.05em}.vue-component.inline h4,.vue-component.inline h5,.vue-component.inline h6{font-size:1em}.vue-component .comma-separated-list{display:inline;list-style:none;padding:0}.vue-component .comma-separated-list li{display:inline;padding:0}.vue-component .comma-separated-list li:after{content:", "}.vue-component .comma-separated-list li:last-child:after{content:""}.vue-component .required{color:red;font-weight:700}.vue-component.message-block{margin:1em 0;padding:.5em}.vue-component.message-block>strong{display:block;margin-bottom:.5em}.vue-component.message-block>p{margin:0}.vue-component .param-name,.vue-component .process-name{color:#369}.vue-component .param-argument,.vue-component .return-value{color:#936}.vue-component .data-type{color:#693}.vue-component .param-optional{font-weight:700}.vue-component .badges{margin:0;padding:0;list-style-type:none;display:inline-block}.vue-component .badges .badge{display:inline-block;font-size:.8em;margin:.25em;padding:.35em .5em .25em .5em;line-height:1em;text-align:center;white-space:nowrap;text-transform:uppercase;vertical-align:initial;border-radius:.5em;color:#fff;background-color:#6c757d}.vue-component .badges:not(.inline){margin-left:-.25em;margin-right:-.25em}.vue-component .badges.small .badge{padding:.25em .35em .2em .35em;font-size:.75em}.vue-component .badges.inline{margin-left:.5em;border-radius:.25em}.vue-component .badges.inline .badge{margin-top:0;margin-bottom:0}.vue-component .badges .badge a{color:#fff;border-bottom:1px dotted #fff;text-decoration:none}.vue-component .badges .badge a.badge-fill{margin:-.35em -.5em;padding:.35em .5em;display:block;border-bottom:0}.vue-component .badges.small .badge a.badge-fill{margin:-.2em -.3em;padding:.25em .35em}.vue-component .badges .badge a:hover{color:#fff;border-bottom-style:solid}.vue-component .badges .default{background-color:#555}.vue-component .badges .green{background-color:green}.vue-component .badges .red{background-color:maroon}.vue-component .badges .option1{background-color:#369}.vue-component .badges .option2{background-color:#693}.vue-component .badges .option3{background-color:#936}.vue-component .badges .option4{background-color:#963}.vue-component .badges .deprecated{background-color:red}.vue-component .badges .experimental{background-color:#8a2be2}.vue-component .badges .action{border:1px solid #000;background-color:#fff;color:#000;margin:.33em;cursor:pointer;text-transform:none}.vue-component .badges .action:hover{background-color:#000;color:#fff}.vue-component .badges .action:hover>a{color:#fff}.vue-component .badges .action>a{color:#000}.vue-component .badges .docker{background-color:#0db7ed}.vue-component .tabular{display:flex;margin:.2em 0;padding:1px}.vue-component .tabular label{flex:1;font-weight:700}.vue-component .tabular .value{flex:3}.vue-component .tabular .value td>div,.vue-component .tabular .value>.formatted>ul,.vue-component .tabular .value>ul,.vue-component .tabular ul.value{max-height:15em;overflow:auto}.vue-component .tabular .value pre{margin:0}.vue-component.stac .map{background:#0000;height:350px}.vue-component.stac .tabular{margin:.5em 0}.vue-component.stac .tabular.wrap{display:block}.vue-component.stac .tabular.wrap .value{margin-top:.5em;margin-left:1em;margin-bottom:.5em}.vue-component.stac .tabular .value ul{padding-left:20px}.assets.empty,.vue-component.stac .links:empty{display:none}.vue-component.stac .thumbnails{overflow-x:auto;overflow-y:hidden;width:100%;white-space:nowrap}.vue-component.stac .thumbnails a{margin:5px;display:inline-block}.vue-component.stac .thumbnails a img{padding:2px;max-height:200px;vertical-align:middle;border:2px solid #0000}.vue-component.stac .thumbnails a:hover img{border:2px solid #00000080}.vue-component .federation>ul>li{margin-bottom:.5em}.vue-component .federation>ul>li>small{display:block}.vue-component .federation>ul>li>h4{margin:0}.vue-component .federation .fed-header{margin:.2em 0}.vue-component .federation .fed-header>.fed-title{display:inline-block;vertical-align:bottom}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ },

/***/ 5067
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ObjectTree_vue_vue_type_style_index_0_id_3f22b32a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9038);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ObjectTree_vue_vue_type_style_index_0_id_3f22b32a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ObjectTree_vue_vue_type_style_index_0_id_3f22b32a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ObjectTree_vue_vue_type_style_index_0_id_3f22b32a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_ObjectTree_vue_vue_type_style_index_0_id_3f22b32a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ 5412
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_41fe6d03_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1245);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_41fe6d03_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_41fe6d03_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_41fe6d03_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Error_vue_vue_type_style_index_0_id_41fe6d03_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ 5797
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Stacshadow)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Stac.vue?vue&type=template&id=5fb8b6b0&shadow
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "stac-component"
  }, [_vm.isLoading ? _c('Loading') : _vm.error ? _c('Error', {
    attrs: {
      "message": _vm.error
    }
  }) : _vm.isItem ? _c('Item', {
    attrs: {
      "data": _vm.stac,
      "url": _vm.url,
      "mapOptions": _vm.mapOptions,
      "onStacNavigation": _vm.onStacNavigation
    },
    scopedSlots: _vm._u([{
      key: "before-description",
      fn: function () {
        return [_c('p', [_vm.rootLink ? [_vm._v(" ["), _c('a', {
          attrs: {
            "href": _vm.rootLink.href
          },
          on: {
            "click": function ($event) {
              $event.preventDefault();
              return _vm.onStacNavigation(_vm.rootLink);
            }
          }
        }, [_vm._v("Go to Root")]), _vm._v("] ")] : _vm._e(), _vm.collectionLink ? [_vm._v(" ["), _c('a', {
          attrs: {
            "href": _vm.collectionLink.href
          },
          on: {
            "click": function ($event) {
              $event.preventDefault();
              return _vm.onStacNavigation(_vm.collectionLink);
            }
          }
        }, [_vm._v("Go to Collection")]), _vm._v("] ")] : _vm._e(), _vm.parentLink ? [_vm._v(" ["), _c('a', {
          attrs: {
            "href": _vm.parentLink.href
          },
          on: {
            "click": function ($event) {
              $event.preventDefault();
              return _vm.onStacNavigation(_vm.parentLink);
            }
          }
        }, [_vm._v("Go to Parent")]), _vm._v("] ")] : _vm._e()], 2)];
      },
      proxy: true
    }, {
      key: "end",
      fn: function () {
        return [_c('h3', [_vm._v("Source")]), _c('p', [_c('a', {
          attrs: {
            "href": _vm.stacUrl,
            "target": "_blank"
          }
        }, [_c('code', [_vm._v(_vm._s(_vm.stacUrl))])])])];
      },
      proxy: true
    }])
  }) : _vm.isCollectionLike ? _c('Collection', {
    attrs: {
      "data": _vm.stac,
      "url": _vm.url,
      "mapOptions": _vm.mapOptions,
      "onStacNavigation": _vm.onStacNavigation
    },
    scopedSlots: _vm._u([{
      key: "before-description",
      fn: function () {
        return [_c('p', [_vm.rootLink ? [_vm._v(" ["), _c('a', {
          attrs: {
            "href": _vm.rootLink.href
          },
          on: {
            "click": function ($event) {
              $event.preventDefault();
              return _vm.onStacNavigation(_vm.rootLink);
            }
          }
        }, [_vm._v("Go to Root")]), _vm._v("] ")] : _vm._e(), _vm.parentLink ? [_vm._v(" ["), _c('a', {
          attrs: {
            "href": _vm.parentLink.href
          },
          on: {
            "click": function ($event) {
              $event.preventDefault();
              return _vm.onStacNavigation(_vm.parentLink);
            }
          }
        }, [_vm._v("Go to Parent")]), _vm._v("] ")] : _vm._e()], 2)];
      },
      proxy: true
    }, {
      key: "end",
      fn: function () {
        return [_c('h3', [_vm._v("Source")]), _c('p', [_c('a', {
          attrs: {
            "href": _vm.stacUrl,
            "target": "_blank"
          }
        }, [_c('code', [_vm._v(_vm._s(_vm.stacUrl))])])])];
      },
      proxy: true
    }])
  }) : _c('ObjectTree', {
    attrs: {
      "data": _vm.stac
    }
  })], 1);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./components/internal/Loading.vue + 3 modules
var Loading = __webpack_require__(6440);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/internal/Error.vue?vue&type=template&id=41fe6d03
var Errorvue_type_template_id_41fe6d03_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "vue-component message-block error"
  }, [_c('strong', [_vm._v("Error")]), _c('p', [_vm._v(_vm._s(_vm.message))])]);
};
var Errorvue_type_template_id_41fe6d03_staticRenderFns = [];

// EXTERNAL MODULE: ./utils.js + 4 modules
var utils = __webpack_require__(9061);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/internal/Error.vue?vue&type=script&lang=js

/* harmony default export */ const Errorvue_type_script_lang_js = ({
  name: 'Error',
  props: {
    message: String
  },
  beforeCreate() {
    utils/* default */.A.enableHtmlProps(this);
  }
});
;// ./components/internal/Error.vue?vue&type=script&lang=js
 /* harmony default export */ const internal_Errorvue_type_script_lang_js = (Errorvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/internal/Error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(5412)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  internal_Errorvue_type_script_lang_js,
  Errorvue_type_template_id_41fe6d03_render,
  Errorvue_type_template_id_41fe6d03_staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const Error = (component.exports);
// EXTERNAL MODULE: ./components/internal/MapMixin.js
var MapMixin = __webpack_require__(334);
// EXTERNAL MODULE: ./components/ObjectTree.vue + 3 modules
var ObjectTree = __webpack_require__(1520);
// EXTERNAL MODULE: ./components/internal/StacLinksMixin.js
var StacLinksMixin = __webpack_require__(4140);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Stac.vue?vue&type=script&lang=js&shadow






/* harmony default export */ const Stacvue_type_script_lang_js_shadow = ({
  name: 'Stac',
  mixins: [MapMixin/* default */.A, StacLinksMixin/* default */.A],
  components: {
    Error: Error,
    Loading: Loading/* default */.A,
    Item: () => Promise.all(/* import() */[__webpack_require__.e(1321), __webpack_require__.e(6195)]).then(__webpack_require__.bind(__webpack_require__, 6195)),
    Collection: () => Promise.all(/* import() */[__webpack_require__.e(9710), __webpack_require__.e(4870), __webpack_require__.e(1321), __webpack_require__.e(8571), __webpack_require__.e(1507)]).then(__webpack_require__.bind(__webpack_require__, 8571)),
    ObjectTree: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 1520))
  },
  props: {
    data: {
      type: Object,
      default: null
    },
    url: {
      type: String,
      default: null
    },
    ...MapMixin/* default */.A.props
  },
  data() {
    return {
      isLoading: false,
      error: null,
      stac: null,
      stacUrl: null
    };
  },
  beforeCreate() {
    utils/* default */.A.enableHtmlProps(this);
  },
  watch: {
    url(newUrl) {
      this.stacUrl = newUrl;
      if (newUrl) {
        this.load(newUrl);
      }
    },
    data(newData) {
      this.stac = newData;
    }
  },
  created() {
    if (this.data) {
      this.stac = this.data;
      this.stacUrl = this.url;
    } else if (this.url) {
      this.load(this.url);
    }
  },
  computed: {
    isItem() {
      return this.stac && this.stac.type === 'Feature';
    },
    isCollectionLike() {
      return this.stac && (this.stac.type === 'Collection' || this.stac.type === 'Catalog');
    },
    rootLink() {
      const link = this.makeLinkAbsolute(this.getStacLinkByRel(this.stac.links, 'root'));
      return link && link.href === this.stacUrl ? null : link;
    },
    parentLink() {
      const link = this.makeLinkAbsolute(this.getStacLinkByRel(this.stac.links, 'parent'));
      return link && link.href === this.stacUrl ? null : link;
    },
    collectionLink() {
      const link = this.makeLinkAbsolute(this.getStacLinkByRel(this.stac.links, 'collection'));
      return link && link.href === this.stacUrl ? null : link;
    }
  },
  methods: {
    onStacNavigation(link) {
      if (link && link.href) {
        this.load(link.href);
      } else {
        this.error = 'The selected STAC link is invalid.';
      }
    },
    makeLinkAbsolute(link) {
      if (!(link !== null && link !== void 0 && link.href)) {
        return link;
      }
      try {
        return Object.assign({}, link, {
          href: new URL(link.href, this.stacUrl).href
        });
      } catch (error) {
        return link;
      }
    },
    async load(url) {
      if (this.stacUrl === url) {
        return;
      }
      this.error = null;
      this.isLoading = true;
      this.stacUrl = url;
      try {
        const response = await fetch(url);
        if (response.ok) {
          this.stac = await response.json();
        } else {
          const statusText = response.statusText || 'Unknown error';
          this.error = `Error ${response.status} - ${statusText}`;
        }
      } catch (error) {
        this.error = `Failed to load STAC from ${url}: ${error.message}`;
      } finally {
        this.isLoading = false;
      }
    }
  }
});
;// ./components/Stac.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ const components_Stacvue_type_script_lang_js_shadow = (Stacvue_type_script_lang_js_shadow); 
;// ./components/Stac.vue?shadow



function Stacshadow_injectStyles (context) {
  
  var style0 = __webpack_require__(8927)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Stacshadow_component = (0,componentNormalizer/* default */.A)(
  components_Stacvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  Stacshadow_injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const Stacshadow = (Stacshadow_component.exports);

/***/ },

/***/ 8927
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Stac_vue_vue_type_style_index_0_id_5fb8b6b0_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2676);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Stac_vue_vue_type_style_index_0_id_5fb8b6b0_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Stac_vue_vue_type_style_index_0_id_5fb8b6b0_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Stac_vue_vue_type_style_index_0_id_5fb8b6b0_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Stac_vue_vue_type_style_index_0_id_5fb8b6b0_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ },

/***/ 9038
(module, __unused_webpack_exports, __webpack_require__) {

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

/***/ }

}]);
//# sourceMappingURL=openeo.5797.js.map
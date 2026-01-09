(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[1507,2237,2985],{

/***/ 229:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9061);
/* harmony import */ var _radiantearth_stac_migrate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1321);
/* harmony import */ var _radiantearth_stac_migrate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_radiantearth_stac_migrate__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MapMixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(334);
/* harmony import */ var _StacLinksMixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4140);




const IMAGE_MEDIA_TYPES = ['image/apng', 'image/gif', 'image/png', 'image/jpeg', 'image/webp'];
const IMAGE_EXTENSIONS = ['gif', 'png', 'jpg', 'jpeg', 'webp'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  mixins: [_MapMixin__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, _StacLinksMixin__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A],
  components: {
    Description: () => Promise.all(/* import() */[__webpack_require__.e(855), __webpack_require__.e(1500)]).then(__webpack_require__.bind(__webpack_require__, 1500)),
    DeprecationNotice: () => __webpack_require__.e(/* import() */ 815).then(__webpack_require__.bind(__webpack_require__, 815)),
    LinkList: () => __webpack_require__.e(/* import() */ 9940).then(__webpack_require__.bind(__webpack_require__, 9940)),
    StacAsset: () => Promise.all(/* import() */[__webpack_require__.e(9710), __webpack_require__.e(4870), __webpack_require__.e(855), __webpack_require__.e(8988)]).then(__webpack_require__.bind(__webpack_require__, 8988)),
    StacFields: () => Promise.all(/* import() */[__webpack_require__.e(9710), __webpack_require__.e(4870), __webpack_require__.e(8005)]).then(__webpack_require__.bind(__webpack_require__, 8005))
  },
  props: {
    data: {
      type: Object,
      default: () => ({})
    },
    onStacNavigation: {
      type: Function,
      default: null
    }
  },
  computed: {
    stac() {
      let cloned = _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.deepClone(this.data);
      return _radiantearth_stac_migrate__WEBPACK_IMPORTED_MODULE_1___default().stac(cloned);
    },
    thumbnails() {
      if (!_utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.isObject(this.stac.assets)) {
        return [];
      }
      return Object.values(this.stac.assets).filter(this.assetIsImage);
    },
    hasAssets() {
      return _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.size(this.stac.assets) > 0;
    },
    selfUrl() {
      var _this$getStacLinkByRe;
      return ((_this$getStacLinkByRe = this.getStacLinkByRel(this.stac.links, 'self')) === null || _this$getStacLinkByRe === void 0 ? void 0 : _this$getStacLinkByRe.href) || null;
    },
    derivedFromLinks() {
      return this.getStacLinksByRels(this.stac.links, ['derived_from'], true);
    },
    relatedLinks() {
      return this.getStacLinksByRels(this.stac.links, ['related'], true);
    },
    isItem() {
      return _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.isObject(this.stac) && this.stac.type === 'Feature' && _utils__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.isObject(this.stac.properties);
    }
  },
  watch: {
    data() {
      this.initMap();
    }
  },
  methods: {
    assetIsImage(asset) {
      let ext = typeof asset.href === 'string' ? asset.href.split('.').pop() : '';
      return Array.isArray(asset.roles) && (asset.roles.includes('thumbnail') || asset.roles.includes('overview')) && (IMAGE_MEDIA_TYPES.includes(asset.type) || IMAGE_EXTENSIONS.includes(ext));
    }
  }
});

/***/ }),

/***/ 334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
          typeof this.mapOptions.onAfterMapInit(map, this.map.geometries);
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

/***/ }),

/***/ 1507:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ 1827:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6397);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("44e880cd", content, shadowRoot)
};

/***/ }),

/***/ 2985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Itemshadow)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Item.vue?vue&type=template&id=77d4ecc1&shadow
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('article', {
    staticClass: "vue-component stac item"
  }, [_vm._t("title", function () {
    return [_c('a', {
      staticClass: "anchor",
      attrs: {
        "name": _vm.stac.id
      }
    }), _c('h2', [_vm.properties.title ? [_vm._v(" " + _vm._s(_vm.properties.title) + " ("), _c('code', [_vm._v(_vm._s(_vm.stac.id))]), _vm._v(") ")] : [_vm._v(" " + _vm._s(_vm.stac.id) + " ")]], 2)];
  }, null, _vm.$props), _vm._t("before-description", null, null, _vm.$props), _vm.properties.description || _vm.properties.deprecated || _vm.stac['federation:missing'] ? _c('summary', {
    staticClass: "description"
  }, [_vm.properties.description ? _c('Description', {
    attrs: {
      "description": _vm.properties.description
    }
  }) : _vm._e(), _vm.properties.deprecated ? _c('DeprecationNotice', {
    attrs: {
      "entity": "item"
    }
  }) : _vm._e(), _vm.stac['federation:missing'] ? _c('FederationMissingNotice', {
    attrs: {
      "missing": _vm.stac['federation:missing'],
      "federation": _vm.federation
    }
  }) : _vm._e()], 1) : _vm._e(), _vm.thumbnails.length ? _c('section', {
    staticClass: "preview"
  }, [_c('h3', [_vm._v("Previews")]), _c('div', {
    staticClass: "thumbnails"
  }, _vm._l(_vm.thumbnails, function (img) {
    return _c('a', {
      key: img.href,
      attrs: {
        "href": img.href,
        "target": "_blank"
      }
    }, [_c('img', {
      attrs: {
        "src": img.href,
        "title": img.title,
        "alt": img.title || 'Preview'
      }
    })]);
  }), 0)]) : _vm._e(), _c('section', {
    staticClass: "metadata properties"
  }, [_vm.thumbnails.length ? _c('h3', [_vm._v("Metadata")]) : _vm._e(), _vm.stac.geometry || Array.isArray(_vm.stac.bbox) ? _vm._t("location", function () {
    return [_c('div', {
      staticClass: "tabular wrap"
    }, [_c('label', [_vm._v("Location")]), _c('div', {
      ref: "mapContainer",
      staticClass: "value map"
    }, [!_vm.map ? [_vm._v(" Latitudes: " + _vm._s(_vm.stac.bbox[1]) + " / " + _vm._s(_vm.stac.bbox[3]) + ", Longitudes: " + _vm._s(_vm.stac.bbox[0]) + " / " + _vm._s(_vm.stac.bbox[2]) + " ")] : _vm._e()], 2)])];
  }, {
    "geometry": _vm.stac.geometry,
    "bbox": _vm.stac.bbox,
    "mapOptions": _vm.mapOptions
  }) : _vm._e(), _c('StacFields', {
    attrs: {
      "type": "Item",
      "metadata": _vm.stac,
      "headingTag": "h4",
      "ignore": _vm.ignoredFields
    }
  })], 2), _vm.hasAssets ? _c('section', {
    staticClass: "assets"
  }, [_c('h3', [_vm._v("Assets")]), _c('ul', {
    staticClass: "list"
  }, _vm._l(_vm.stac.assets, function (asset, id) {
    return _c('StacAsset', {
      key: id,
      attrs: {
        "asset": asset,
        "id": id,
        "context": _vm.stac
      }
    });
  }), 1)]) : _vm._e(), _vm.relatedLinks ? _c('section', {
    staticClass: "related"
  }, [_c('LinkList', {
    attrs: {
      "links": _vm.relatedLinks,
      "baseUrl": _vm.selfUrl,
      "heading": "Related STAC entities",
      "headingTag": "h3",
      "action": _vm.onStacNavigation
    }
  })], 1) : _vm._e(), _vm.derivedFromLinks ? _c('section', {
    staticClass: "derived-from"
  }, [_c('LinkList', {
    attrs: {
      "links": _vm.derivedFromLinks,
      "baseUrl": _vm.selfUrl,
      "heading": "Derived From",
      "headingTag": "h3",
      "action": _vm.onStacNavigation
    }
  })], 1) : _vm._e(), _c('section', {
    staticClass: "links"
  }, [_c('LinkList', {
    attrs: {
      "links": _vm.stac.links,
      "baseUrl": _vm.selfUrl,
      "heading": "See Also",
      "headingTag": "h3",
      "ignoreRel": ['self', 'parent', 'root', 'license', 'cite-as', 'collection']
    }
  })], 1), _vm._t("end", null, null, _vm.$props)], 2);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./components/internal/FederationMixin.js
var FederationMixin = __webpack_require__(1507);
// EXTERNAL MODULE: ./components/internal/StacMixin.js
var StacMixin = __webpack_require__(229);
// EXTERNAL MODULE: ./utils.js + 4 modules
var utils = __webpack_require__(9061);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Item.vue?vue&type=script&lang=js&shadow



/* harmony default export */ const Itemvue_type_script_lang_js_shadow = ({
  name: 'Item',
  mixins: [FederationMixin/* default */.A, StacMixin/* default */.A],
  // Mixins don't work properly in web components,
  // see https://github.com/vuejs/vue-web-component-wrapper/issues/30
  props: {
    ...FederationMixin/* default */.A.props,
    ...StacMixin/* default */.A.props
  },
  data() {
    return {
      ignoredFields: ['title', 'description', 'deprecated', 'federation:missing']
    };
  },
  computed: {
    properties() {
      if (utils/* default */.A.isObject(this.stac.properties)) {
        return this.stac.properties;
      }
      return {};
    },
    title() {
      if (this.properties.title) {
        return `${this.properties.title} (${this.stac.id})`;
      } else {
        return this.stac.id;
      }
    },
    showMap() {
      return Boolean(this.stac.geometry);
    }
  },
  methods: {
    addFeatures() {
      let geom = this.map.leaflet.geoJSON(this.stac);
      geom.setStyle({
        color: '#3388ff',
        fillOpacity: 0.2
      });
      return geom;
    }
  }
});
;// ./components/Item.vue?vue&type=script&lang=js&shadow
 /* harmony default export */ const components_Itemvue_type_script_lang_js_shadow = (Itemvue_type_script_lang_js_shadow); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/Item.vue?shadow



function injectStyles (context) {
  
  var style0 = __webpack_require__(3840)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_Itemvue_type_script_lang_js_shadow,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const Itemshadow = (component.exports);

/***/ }),

/***/ 3840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Item_vue_vue_type_style_index_0_id_77d4ecc1_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1827);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Item_vue_vue_type_style_index_0_id_77d4ecc1_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Item_vue_vue_type_style_index_0_id_77d4ecc1_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Item_vue_vue_type_style_index_0_id_77d4ecc1_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Item_vue_vue_type_style_index_0_id_77d4ecc1_prod_lang_scss_shadow__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 4140:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ 6397:
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
___CSS_LOADER_EXPORT___.push([module.id, `.vue-component .highlight-box{box-shadow:0 0 0 .2em #c8e1ff}.vue-component code.id{color:maroon}.vue-component abbr{-webkit-text-decoration:underline dotted 1px;text-decoration:underline dotted 1px}.vue-component .unit{opacity:.6}.vue-component .status[data-value=submitted]{color:#000}.vue-component .status[data-value=running]{color:#ff8c00}.vue-component .status[data-value=queued]{color:#00008b}.vue-component .status[data-value=finished]{color:#006400}.vue-component .status[data-value=canceled]{color:#a9a9a9}.vue-component .status[data-value=error]{color:red}.vue-component.inline.process{margin-left:1em}.vue-component.inline h1{font-size:1.17em}.vue-component.inline h2{font-size:1.1em}.vue-component.inline h3{font-size:1.05em}.vue-component.inline h4,.vue-component.inline h5,.vue-component.inline h6{font-size:1em}.vue-component .comma-separated-list{display:inline;list-style:none;padding:0}.vue-component .comma-separated-list li{display:inline;padding:0}.vue-component .comma-separated-list li:after{content:", "}.vue-component .comma-separated-list li:last-child:after{content:""}.vue-component .required{color:red;font-weight:700}.vue-component.message-block{margin:1em 0;padding:.5em}.vue-component.message-block>strong{display:block;margin-bottom:.5em}.vue-component.message-block>p{margin:0}.vue-component .param-name,.vue-component .process-name{color:#369}.vue-component .param-argument,.vue-component .return-value{color:#936}.vue-component .data-type{color:#693}.vue-component .param-optional{font-weight:700}.vue-component .badges{margin:0;padding:0;list-style-type:none;display:inline-block}.vue-component .badges .badge{display:inline-block;font-size:.8em;margin:.25em;padding:.35em .5em .25em .5em;line-height:1em;text-align:center;white-space:nowrap;text-transform:uppercase;vertical-align:initial;border-radius:.5em;color:#fff;background-color:#6c757d}.vue-component .badges:not(.inline){margin-left:-.25em;margin-right:-.25em}.vue-component .badges.small .badge{padding:.25em .35em .2em .35em;font-size:.75em}.vue-component .badges.inline{margin-left:.5em;border-radius:.25em}.vue-component .badges.inline .badge{margin-top:0;margin-bottom:0}.vue-component .badges .badge a{color:#fff;border-bottom:1px dotted #fff;text-decoration:none}.vue-component .badges .badge a.badge-fill{margin:-.35em -.5em;padding:.35em .5em;display:block;border-bottom:0}.vue-component .badges.small .badge a.badge-fill{margin:-.2em -.3em;padding:.25em .35em}.vue-component .badges .badge a:hover{color:#fff;border-bottom-style:solid}.vue-component .badges .default{background-color:#555}.vue-component .badges .green{background-color:green}.vue-component .badges .red{background-color:maroon}.vue-component .badges .option1{background-color:#369}.vue-component .badges .option2{background-color:#693}.vue-component .badges .option3{background-color:#936}.vue-component .badges .option4{background-color:#963}.vue-component .badges .deprecated{background-color:red}.vue-component .badges .experimental{background-color:#8a2be2}.vue-component .badges .action{border:1px solid #000;background-color:#fff;color:#000;margin:.33em;cursor:pointer;text-transform:none}.vue-component .badges .action:hover{background-color:#000;color:#fff}.vue-component .badges .action:hover>a{color:#fff}.vue-component .badges .action>a{color:#000}.vue-component .badges .docker{background-color:#0db7ed}.vue-component .tabular{display:flex;margin:.2em 0;padding:1px}.vue-component .tabular label{flex:1;font-weight:700}.vue-component .tabular .value{flex:3}.vue-component .tabular .value td>div,.vue-component .tabular .value>.formatted>ul,.vue-component .tabular .value>ul,.vue-component .tabular ul.value{max-height:15em;overflow:auto}.vue-component .tabular .value pre{margin:0}.vue-component.stac .map{background:#0000;height:350px}.vue-component.stac .tabular{margin:.5em 0}.vue-component.stac .tabular.wrap{display:block}.vue-component.stac .tabular.wrap .value{margin-top:.5em;margin-left:1em;margin-bottom:.5em}.vue-component.stac .tabular .value ul{padding-left:20px}.assets.empty,.vue-component.stac .links:empty{display:none}.vue-component.stac .thumbnails{overflow-x:auto;overflow-y:hidden;width:100%;white-space:nowrap}.vue-component.stac .thumbnails a{margin:5px;display:inline-block}.vue-component.stac .thumbnails a img{padding:2px;max-height:200px;vertical-align:middle;border:2px solid #0000}.vue-component.stac .thumbnails a:hover img{border:2px solid #00000080}.vue-component .federation>ul>li{margin-bottom:.5em}.vue-component .federation>ul>li>small{display:block}.vue-component .federation>ul>li>h4{margin:0}.vue-component .federation .fed-header{margin:.2em 0}.vue-component .federation .fed-header>.fed-title{display:inline-block;vertical-align:bottom}.vue-component.stac .metadata .map.value{overflow:hidden}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=openeo.2985.js.map
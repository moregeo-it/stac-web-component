(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[2485],{

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

/***/ 643:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_2adf802a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9250);
/* harmony import */ var _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_2adf802a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_2adf802a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_2adf802a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_vue_style_loader_index_js_clonedRuleSet_22_use_0_node_modules_css_loader_dist_cjs_js_clonedRuleSet_22_use_1_node_modules_vue_vue_loader_v15_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_2_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_22_use_3_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_22_use_4_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_Collection_vue_vue_type_style_index_0_id_2adf802a_prod_lang_scss__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);


/***/ }),

/***/ 2485:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Collection)
});

;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Collection.vue?vue&type=template&id=2adf802a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('article', {
    staticClass: "vue-component stac collection"
  }, [_vm._t("title", function () {
    return [_c('a', {
      staticClass: "anchor",
      attrs: {
        "name": _vm.stac.id
      }
    }), _c('h2', [_vm.stac.title ? [_vm._v(" " + _vm._s(_vm.stac.title) + " ("), _c('code', [_vm._v(_vm._s(_vm.stac.id))]), _vm._v(") ")] : [_vm._v(" " + _vm._s(_vm.stac.id) + " ")]], 2)];
  }, null, _vm.$props), _vm.hasElements(_vm.stac.keywords) ? _c('section', {
    staticClass: "keywords"
  }, [_c('ul', {
    staticClass: "badges"
  }, _vm._l(_vm.stac.keywords, function (keyword) {
    return _c('li', {
      key: keyword,
      staticClass: "badge"
    }, [_vm._v(_vm._s(keyword))]);
  }), 0)]) : _vm._e(), _vm._t("before-description", null, null, _vm.$props), _vm.stac.description || _vm.stac.deprecated || _vm.supportedBy || _vm.affectedByMissing ? _c('section', {
    staticClass: "description"
  }, [_vm.stac.description ? [_c('h3', [_vm._v("Description")]), _c('Description', {
    attrs: {
      "description": _vm.stac.description
    }
  })] : _vm._e(), _vm.stac.deprecated ? _c('DeprecationNotice', {
    attrs: {
      "entity": "collection"
    }
  }) : _vm._e(), _vm.supportedBy ? _c('FederationNotice', {
    attrs: {
      "backends": _vm.supportedBy,
      "federation": _vm.federation,
      "entity": "collection"
    }
  }) : _vm._e(), _vm.affectedByMissing ? _c('FederationMissingNotice', {
    attrs: {
      "missing": _vm.missing,
      "federation": _vm.federation
    }
  }) : _vm._e()], 2) : _vm._e(), _vm.license ? _c('section', {
    staticClass: "license"
  }, [_c('h3', [_vm._v("License")]), _c('span', {
    domProps: {
      "innerHTML": _vm._s(_vm.license)
    }
  })]) : _vm._e(), _c('section', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.thumbnails.length,
      expression: "thumbnails.length"
    }],
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
  }), 0)]), _vm.temporalIntervals.length || _vm.boundingBoxes.length ? _c('section', {
    staticClass: "extent"
  }, [_vm.boundingBoxes.length ? _c('div', [_c('h3', [_vm._v("Spatial Extent")]), _vm._t("spatial-extents", function () {
    return [_vm.worldwide ? _c('span', {
      staticClass: "worldwide"
    }, [_c('i', {
      staticClass: "fas fa-globe"
    }), _vm._v(" Worldwide")]) : _c('div', {
      ref: "mapContainer",
      staticClass: "map"
    }, [!_vm.map ? _vm._l(_vm.boundingBoxes, function (bbox, i) {
      return _c('ul', {
        key: i
      }, [_c('li', [_vm._v("Latitudes: " + _vm._s(bbox[1]) + " / " + _vm._s(bbox[3]) + ", Longitudes: " + _vm._s(bbox[0]) + " / " + _vm._s(bbox[2]))])]);
    }) : _vm._e()], 2)];
  }, {
    "extents": _vm.boundingBoxes,
    "mapOptions": _vm.mapOptions,
    "worldwide": _vm.worldwide
  })], 2) : _vm._e(), _vm.temporalIntervals.length ? _c('div', [_c('h3', [_vm._v("Temporal Extent")]), _vm._t("temporal-extents", function () {
    return [_vm.temporalIntervals.length > 1 ? _vm._l(_vm.temporalIntervals, function (interval, i) {
      return _c('ul', {
        key: i
      }, [i !== 0 ? _c('li', {
        domProps: {
          "innerHTML": _vm._s(_vm.formatters.formatTemporalExtent(interval))
        }
      }) : _vm._e()]);
    }) : _c('span', {
      domProps: {
        "innerHTML": _vm._s(_vm.formatters.formatTemporalExtent(_vm.temporalIntervals[0]))
      }
    })];
  }, {
    "extents": _vm.temporalIntervals.length > 0
  })], 2) : _vm._e()]) : _vm._e(), _vm.hasProviders ? _c('section', {
    staticClass: "providers"
  }, [_c('h3', [_vm._v("Providers")]), _c('ol', _vm._l(_vm.stac.providers, function (provider) {
    return _c('li', {
      key: provider.name
    }, [provider.url ? _c('a', {
      attrs: {
        "href": provider.url,
        "target": "_blank"
      }
    }, [_vm._v(_vm._s(provider.name))]) : [_vm._v(_vm._s(provider.name))], _vm.hasElements(provider.roles) ? [_c('ul', {
      staticClass: "badges small inline"
    }, _vm._l(provider.roles, function (role) {
      return _c('li', {
        key: role,
        staticClass: "badge provider-role"
      }, [_vm._v(_vm._s(role))]);
    }), 0)] : _vm._e(), provider.description ? _c('Description', {
      attrs: {
        "description": provider.description,
        "compact": true
      }
    }) : _vm._e()], 2);
  }), 0)]) : _vm._e(), _vm.childLinks ? _c('section', {
    staticClass: "childs"
  }, [_c('LinkList', {
    attrs: {
      "links": _vm.childLinks,
      "baseUrl": _vm.selfUrl,
      "heading": "Catalogs / Collections",
      "headingTag": "h3",
      "action": _vm.onStacNavigation
    }
  })], 1) : _vm._e(), _vm.itemLinks ? _c('section', {
    staticClass: "items"
  }, [_c('LinkList', {
    attrs: {
      "links": _vm.itemLinks,
      "baseUrl": _vm.selfUrl,
      "heading": "Items",
      "headingTag": "h3",
      "action": _vm.onStacNavigation
    }
  })], 1) : _vm._e(), _vm.relatedLinks ? _c('section', {
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
  })], 1) : _vm._e(), _vm.hasDimensions ? _c('section', {
    staticClass: "dimensions"
  }, [_c('h3', [_vm._v("Data Cube Dimensions")]), _c('ul', _vm._l(_vm.stac['cube:dimensions'], function (dim, name) {
    return _c('li', {
      key: name,
      staticClass: "dimension"
    }, [_c('h4', [dim.type === 'bands' ? _c('a', {
      staticClass: "name",
      attrs: {
        "href": "#summary_bands"
      },
      on: {
        "click": _vm.scrollToBands
      }
    }, [_vm._v(_vm._s(name))]) : _c('span', {
      staticClass: "name"
    }, [_vm._v(_vm._s(name))]), _c('ul', {
      staticClass: "type badges small inline"
    }, [_c('li', {
      staticClass: "badge"
    }, [_vm._v(_vm._s(dim.type))])])]), dim.description ? _c('Description', {
      attrs: {
        "description": dim.description
      }
    }) : _vm._e(), dim.axis ? _c('div', {
      staticClass: "tabular"
    }, [_c('label', [_vm._v("Axis:")]), _c('div', {
      staticClass: "value"
    }, [_vm._v(_vm._s(dim.axis))])]) : _vm._e(), _c('div', {
      staticClass: "tabular"
    }, [_c('label', [_vm._v("Labels:")]), dim.extent ? _c('div', {
      staticClass: "value"
    }, [dim.type === 'temporal' ? _c('span', {
      domProps: {
        "innerHTML": _vm._s(_vm.formatters.formatTemporalExtent(dim.extent))
      }
    }) : _c('span', {
      domProps: {
        "innerHTML": _vm._s(_vm.formatters.formatExtent(dim.extent))
      }
    })]) : Array.isArray(dim.values) && dim.values.length > 0 ? _c('ul', {
      staticClass: "value comma-separated-list"
    }, _vm._l(dim.values, function (value) {
      return _c('li', {
        key: value
      }, [_vm._v(_vm._s(value))]);
    }), 0) : _c('div', {
      staticClass: "value"
    }, [_c('i', [_vm._v("n/a")])])]), typeof dim.step !== 'undefined' ? _c('div', {
      staticClass: "tabular"
    }, [_c('label', [_vm._v("Steps:")]), _c('div', {
      staticClass: "value"
    }, [dim.step === null ? [_vm._v("irregularly spaced")] : dim.type === 'temporal' ? [_vm._v(_vm._s(_vm.formatDuration(dim.step)))] : [_vm._v(_vm._s(dim.step))]], 2)]) : _vm._e(), typeof dim.reference_system !== 'undefined' ? _c('div', {
      staticClass: "tabular"
    }, [_c('label', [_vm._v("Reference System:")]), _c('div', {
      staticClass: "value"
    }, [typeof dim.reference_system === 'number' ? _c('div', {
      staticClass: "epsg",
      domProps: {
        "innerHTML": _vm._s(_vm.formatters.formatEPSG(dim.reference_system))
      }
    }) : typeof dim.reference_system === 'string' ? _c('div', {
      staticClass: "wkt2",
      domProps: {
        "innerHTML": _vm._s(_vm.formatters.formatWKT2(dim.reference_system))
      }
    }) : typeof dim.reference_system === 'object' ? _c('ObjectTree', {
      staticClass: "projjson",
      attrs: {
        "data": dim.reference_system
      }
    }) : [_vm._v(_vm._s(dim.reference_system))]], 2)]) : _vm._e()], 1);
  }), 0)]) : _vm._e(), _c('StacFields', {
    staticClass: "summaries",
    attrs: {
      "type": "Collection",
      "metadata": _vm.stac,
      "ignore": _vm.ignoredFields
    }
  }), _vm.hasAssets ? _c('section', {
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
  }), 1)]) : _vm._e(), _c('section', {
    staticClass: "links"
  }, [_c('LinkList', {
    attrs: {
      "links": _vm.stac.links,
      "baseUrl": _vm.selfUrl,
      "heading": "See Also",
      "headingTag": "h3",
      "ignoreRel": ['self', 'parent', 'root', 'license', 'cite-as', 'item', 'child']
    }
  })], 1), _vm._t("end", null, null, _vm.$props)], 2);
};
var staticRenderFns = [];

// EXTERNAL MODULE: ./utils.js + 4 modules
var utils = __webpack_require__(9061);
// EXTERNAL MODULE: ./node_modules/@radiantearth/stac-fields/index.js
var stac_fields = __webpack_require__(4870);
// EXTERNAL MODULE: ./components/internal/FederationMixin.js
var FederationMixin = __webpack_require__(1507);
// EXTERNAL MODULE: ./components/internal/StacMixin.js
var StacMixin = __webpack_require__(229);
// EXTERNAL MODULE: ./node_modules/@musement/iso-duration/dist/index.esm.js
var index_esm = __webpack_require__(9710);
;// ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./components/Collection.vue?vue&type=script&lang=js





/* harmony default export */ const Collectionvue_type_script_lang_js = ({
  name: 'Collection',
  components: {
    ObjectTree: () => __webpack_require__.e(/* import() */ 9139).then(__webpack_require__.bind(__webpack_require__, 1520))
  },
  mixins: [StacMixin/* default */.A, FederationMixin/* default */.A],
  // Mixins don't work properly in web components,
  // see https://github.com/vuejs/vue-web-component-wrapper/issues/30
  props: {
    ...StacMixin/* default */.A.props,
    ...FederationMixin/* default */.A.props
  },
  data() {
    return {
      ignoredFields: ['federation:backends'],
      formatters: stac_fields.Formatters
    };
  },
  computed: {
    supportedBy() {
      if (utils/* default */.A.isObject(this.stac.summaries) && Array.isArray(this.stac.summaries['federation:backends'])) {
        return this.stac.summaries['federation:backends'];
      } else if (Array.isArray(this.stac['federation:backends'])) {
        return this.stac['federation:backends'];
      } else {
        return undefined;
      }
    },
    missing() {
      if (utils/* default */.A.isObject(this.stac.summaries) && Array.isArray(this.stac.summaries['federation:missing'])) {
        return this.stac.summaries['federation:missing'];
      } else if (Array.isArray(this.stac['federation:missing'])) {
        return this.stac['federation:missing'];
      } else {
        return undefined;
      }
    },
    affectedByMissing() {
      if (this.missing && !Array.isArray(this.supportedBy)) {
        // in case missing is set but supportedBy is unexpectedly not an array...
        return true; // default to display the notice (don't hold back information when we can't be sure)
      } else {
        // otherwise: check if any of the missing backends is actually in the list of backends that are relevant here
        return Array.isArray(this.missing) && this.missing.some(backend => this.supportedBy.includes(backend));
      }
    },
    showMap() {
      return this.boundingBoxes.length > 0 && !this.worldwide;
    },
    temporalIntervals() {
      let e = this.stac.extent;
      if (utils/* default */.A.isObject(e) && utils/* default */.A.isObject(e.temporal) && utils/* default */.A.size(e.temporal.interval) > 0) {
        return e.temporal.interval.filter(interval => Array.isArray(interval) && interval.length >= 2 && interval.filter(i => typeof i === 'string').length > 0);
      }
      return [];
    },
    boundingBoxes() {
      let e = this.stac.extent;
      if (utils/* default */.A.isObject(e) && utils/* default */.A.isObject(e.spatial) && utils/* default */.A.size(e.spatial.bbox) > 0) {
        return e.spatial.bbox.filter(bbox => Array.isArray(bbox) && bbox.length >= 4);
      }
      return [];
    },
    worldwide() {
      if (this.boundingBoxes.length !== 1) {
        return false;
      }
      let bbox = this.boundingBoxes[0];
      return Math.round(bbox[0]) == -180 && Math.round(bbox[1]) == -90 && Math.round(bbox[2]) == 180 && Math.round(bbox[3]) == 90;
    },
    hasProviders() {
      return utils/* default */.A.size(this.stac.providers) > 0;
    },
    hasDimensions() {
      return utils/* default */.A.size(this.stac['cube:dimensions']) > 0;
    },
    license() {
      if (typeof this.stac.license !== 'string' || this.stac.license.length === 0) {
        return false;
      }
      return stac_fields.Formatters.formatLicense(this.stac.license, null, null, this.stac);
    },
    childLinks() {
      return this.getStacLinksByRels(this.stac.links, ['child']);
    },
    itemLinks() {
      return this.getStacLinksByRels(this.stac.links, ['item']);
    }
  },
  methods: {
    addFeatures() {
      try {
        L.Wrapped = __webpack_require__(8859);
      } catch (error) {
        console.warn(`Leaflet Antimeridian plugin is not available: ${error.message}`);
      }
      let features = L.featureGroup();
      let bboxes = this.boundingBoxes.length > 1 ? this.boundingBoxes.slice(1) : this.boundingBoxes;
      for (let bbox of bboxes) {
        let p = [[bbox[1], bbox[0]], [bbox[3], bbox[0]], [bbox[3], bbox[2]], [bbox[1], bbox[2]]];
        let geom;
        if (L.Wrapped && bbox[2] < bbox[0]) {
          geom = new L.Wrapped.Polygon(p);
        } else {
          geom = L.polygon(p);
        }
        geom.setStyle({
          color: '#3388ff',
          fillOpacity: 0.2
        });
        features.addLayer(geom);
      }
      return features;
    },
    scrollToBands(evt) {
      let elem = this.$el.querySelector('#field_bands');
      if (elem) {
        elem.scrollIntoView();
        elem.classList.add('highlight-box');
        setTimeout(() => {
          elem.classList.remove('highlight-box');
        }, 5000);
      }
      evt.preventDefault();
    },
    hasElements(data) {
      return typeof data === 'object' && data !== null && Object.keys(data).length > 0;
    },
    formatDuration(duration) {
      if (typeof duration === 'string') {
        try {
          index_esm.isoDuration.setLocales({
            en: index_esm.en
          });
          return (0,index_esm.isoDuration)(duration).humanize('en');
        } catch (error) {
          console.warn(error);
        }
      }
      return 'n/a';
    }
  }
});
;// ./components/Collection.vue?vue&type=script&lang=js
 /* harmony default export */ const components_Collectionvue_type_script_lang_js = (Collectionvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1656);
;// ./components/Collection.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(643)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = (0,componentNormalizer/* default */.A)(
  components_Collectionvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  null
  ,true
)

/* harmony default export */ const Collection = (component.exports);

/***/ }),

/***/ 6024:
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
___CSS_LOADER_EXPORT___.push([module.id, `.vue-component .highlight-box{box-shadow:0 0 0 .2em #c8e1ff}.vue-component code.id{color:maroon}.vue-component abbr{-webkit-text-decoration:underline dotted 1px;text-decoration:underline dotted 1px}.vue-component .unit{opacity:.6}.vue-component .status[data-value=submitted]{color:#000}.vue-component .status[data-value=running]{color:#ff8c00}.vue-component .status[data-value=queued]{color:#00008b}.vue-component .status[data-value=finished]{color:#006400}.vue-component .status[data-value=canceled]{color:#a9a9a9}.vue-component .status[data-value=error]{color:red}.vue-component.inline.process{margin-left:1em}.vue-component.inline h1{font-size:1.17em}.vue-component.inline h2{font-size:1.1em}.vue-component.inline h3{font-size:1.05em}.vue-component.inline h4,.vue-component.inline h5,.vue-component.inline h6{font-size:1em}.vue-component .comma-separated-list{display:inline;list-style:none;padding:0}.vue-component .comma-separated-list li{display:inline;padding:0}.vue-component .comma-separated-list li:after{content:", "}.vue-component .comma-separated-list li:last-child:after{content:""}.vue-component .required{color:red;font-weight:700}.vue-component.message-block{margin:1em 0;padding:.5em}.vue-component.message-block>strong{display:block;margin-bottom:.5em}.vue-component.message-block>p{margin:0}.vue-component .param-name,.vue-component .process-name{color:#369}.vue-component .param-argument,.vue-component .return-value{color:#936}.vue-component .data-type{color:#693}.vue-component .param-optional{font-weight:700}.vue-component .badges{margin:0;padding:0;list-style-type:none;display:inline-block}.vue-component .badges .badge{display:inline-block;font-size:.8em;margin:.25em;padding:.35em .5em .25em .5em;line-height:1em;text-align:center;white-space:nowrap;text-transform:uppercase;vertical-align:initial;border-radius:.5em;color:#fff;background-color:#6c757d}.vue-component .badges:not(.inline){margin-left:-.25em;margin-right:-.25em}.vue-component .badges.small .badge{padding:.25em .35em .2em .35em;font-size:.75em}.vue-component .badges.inline{margin-left:.5em;border-radius:.25em}.vue-component .badges.inline .badge{margin-top:0;margin-bottom:0}.vue-component .badges .badge a{color:#fff;border-bottom:1px dotted #fff;text-decoration:none}.vue-component .badges .badge a.badge-fill{margin:-.35em -.5em;padding:.35em .5em;display:block;border-bottom:0}.vue-component .badges.small .badge a.badge-fill{margin:-.2em -.3em;padding:.25em .35em}.vue-component .badges .badge a:hover{color:#fff;border-bottom-style:solid}.vue-component .badges .default{background-color:#555}.vue-component .badges .green{background-color:green}.vue-component .badges .red{background-color:maroon}.vue-component .badges .option1{background-color:#369}.vue-component .badges .option2{background-color:#693}.vue-component .badges .option3{background-color:#936}.vue-component .badges .option4{background-color:#963}.vue-component .badges .deprecated{background-color:red}.vue-component .badges .experimental{background-color:#8a2be2}.vue-component .badges .action{border:1px solid #000;background-color:#fff;color:#000;margin:.33em;cursor:pointer;text-transform:none}.vue-component .badges .action:hover{background-color:#000;color:#fff}.vue-component .badges .action:hover>a{color:#fff}.vue-component .badges .action>a{color:#000}.vue-component .badges .docker{background-color:#0db7ed}.vue-component .tabular{display:flex;margin:.2em 0;padding:1px}.vue-component .tabular label{flex:1;font-weight:700}.vue-component .tabular .value{flex:3}.vue-component .tabular .value td>div,.vue-component .tabular .value>.formatted>ul,.vue-component .tabular .value>ul,.vue-component .tabular ul.value{max-height:15em;overflow:auto}.vue-component .tabular .value pre{margin:0}.vue-component.stac .map{background:#0000;height:350px}.vue-component.stac .tabular{margin:.5em 0}.vue-component.stac .tabular.wrap{display:block}.vue-component.stac .tabular.wrap .value{margin-top:.5em;margin-left:1em;margin-bottom:.5em}.vue-component.stac .tabular .value ul{padding-left:20px}.assets.empty,.vue-component.stac .links:empty{display:none}.vue-component.stac .thumbnails{overflow-x:auto;overflow-y:hidden;width:100%;white-space:nowrap}.vue-component.stac .thumbnails a{margin:5px;display:inline-block}.vue-component.stac .thumbnails a img{padding:2px;max-height:200px;vertical-align:middle;border:2px solid #0000}.vue-component.stac .thumbnails a:hover img{border:2px solid #00000080}.vue-component .federation>ul>li{margin-bottom:.5em}.vue-component .federation>ul>li>small{display:block}.vue-component .federation>ul>li>h4{margin:0}.vue-component .federation .fed-header{margin:.2em 0}.vue-component .federation .fed-header>.fed-title{display:inline-block;vertical-align:bottom}.vue-component.collection .keywords{margin-top:1em}.vue-component.collection .dimensions>ul .dimension h4{margin:0;margin-bottom:.5em}.vue-component.collection .dimensions>ul .dimension .type{font-weight:400}@media screen and (min-width:1000px){.vue-component.collection .dimensions>ul{display:flex;margin:0;padding:0}.vue-component.collection .dimensions>ul .dimension{list-style-type:none;min-width:23%;margin-left:1%;border-left:1px dotted #ccc;padding-left:1%}.vue-component.collection .dimensions>ul .dimension:first-of-type{margin-left:0;border:0;padding-left:0}.vue-component.collection .dimensions>ul .dimension .tabular{display:flex;flex-direction:column}.vue-component.collection .dimensions>ul .dimension .tabular label{margin-top:.5em}.vue-component.collection .extent{display:flex}.vue-component.collection .extent>div{min-width:49%;flex-grow:1}.vue-component.collection .extent>div:nth-child(2){margin-left:1%;border-left:1px dotted #ccc;padding-left:1%}}.vue-component.collection .projjson,.vue-component.collection .wkt2,.vue-component.collection td>dl,.vue-component.collection td>ol,.vue-component.collection td>ul{margin:-3px;padding:3px;height:7em;overflow:auto;resize:vertical}.vue-component.collection .provider-role{text-transform:capitalize}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8859:
/***/ (function(__unused_webpack_module, exports) {

(function (global, factory) {
	 true ? factory(exports) :
	0;
}(this, (function (exports) { 'use strict';

var version = "1.0.0+master.7986dc5";

/*
 * @namespace L.Wrapped
 * Utility functions to perform calculations not always supported by the
 * standard Javascript Math namespace.
 */

// @function sign(Number)
// Returns NaN for non-numbers, 0 for 0, -1 for negative numbers,
// 1 for positive numbers
function sign(x) {
	return typeof x === 'number' ? x ? x < 0 ? -1 : 1 : 0 : NaN;
}

/*
 * @namespace L.Wrapped
 * Utility functions to calculate various shared aspects of mapping a line
 * accross the antimeridian.
 */

// @function calculateAntimeridianLat (latLngA: L.LatLng, latLngB: L.LatLng)
// Returns the calculated latitude where a line drawn between
// two Latitude/Longitude points will cross the antimeridian.
function calculateAntimeridianLat(latLngA, latLngB) {
	if (latLngA instanceof L.LatLng && latLngB instanceof L.LatLng) {
		// Ensure that the latitude A is less than latidue B. This will allow the
		// crossing point to be calculated based on the proportional similarity of
		// right triangles.

		// Locate which latitude is lower on the map. This will be the most
		// accute angle of the right triangle. If the lowest latitude is not latLngA
		// then swap the latlngs so it is.
		if (latLngA.lat > latLngB.lat) {
			var temp = latLngA;
			latLngA = latLngB;
			latLngB = temp;
		}

		// This gets the width of the distance between the two points
		// (The bottom of a large right triangle drawn between them)
		var A = 360 - Math.abs(latLngA.lng - latLngB.lng);
		// This gets the height of the of distance between the two points
		// (The vertical line of a large right triange drawn between them)
		var B = latLngB.lat - latLngA.lat;
		// This gets the bottom distance of a proportional triangle inside the large
		// trangle where the vertical line instead sits at the 180 mark.
		var a = Math.abs(180 - Math.abs(latLngA.lng));

		// Because triangle with identical angles must be proportional along the sides,
		// find the length of the vertical side of that inner triangle and then
		// add it to the lower point to predict the crossing point of the Antimeridian.
		return latLngA.lat + ((B * a) / A);
	} else {
		throw new Error('In order to calculate the Antimeridian latitude, two valid LatLngs are required.');
	}
}

// @function isCrossAntimeridian(latLngA: L.LatLng, latLngB: L.LatLng)
// Returns true if the line between the two points will cross either
// the prime meridian (Greenwich) or its antimeridian (International Date Line)
function isCrossMeridian(latLngA, latLngB) {
	if (latLngA instanceof L.LatLng && latLngB instanceof L.LatLng) {
		// Returns true if the signs are not the same.
		return sign(latLngA.lng) * sign(latLngB.lng) < 0;
	} else {
		throw new Error('In order to calculate whether two LatLngs cross a meridian, two valid LatLngs are required.');
	}
}


// @function pushLatLng(ring: L.Point[], projectedBounds: L.Bounds, latlng: L.LatLng, map: L.Map)
// Adds the latlng to the current ring as a layer point and expands the projected bounds.
function pushLatLng(ring, projectedBounds, latlng, map) {
	if (ring instanceof Array && projectedBounds instanceof L.Bounds && latlng instanceof L.LatLng && map instanceof L.Map) {
		ring.push(map.latLngToLayerPoint(latlng));
		projectedBounds.extend(ring[ring.length - 1]);
	} else {
		throw new Error('In order to push a LatLng into a ring, the ring point array, the LatLng, the projectedBounds, and the map must all be valid.');
	}
}

// @function isBreakRing(latLngA: L.LatLng, latLngB: L.LatLng)
// Determines when the ring should be broken and a new one started.
// This will return true if the distance is smaller when mapped across the Antimeridian.
function isBreakRing(latLngA, latLngB) {
	if (latLngA instanceof L.LatLng && latLngB instanceof L.LatLng) {
		return isCrossMeridian(latLngA, latLngB)  &&
		(360 - Math.abs(latLngA.lng) - Math.abs(latLngB.lng) < 180);

	} else {
		throw new Error('In order to calculate whether the ring created by two LatLngs should be broken, two valid LatLngs are required.');
	}
}

// @function breakRing(currentLat: L.LatLng, nextLat: L.LatLng, rings: L.Point[][],
//  projectedBounds: L.Bounds, map: L.Map)
// Breaks the existing ring along the anti-meridian.
// returns the starting latLng for the next ring.
function breakRing(currentLat, nextLat, rings, projectedBounds, map) {
	if (currentLat instanceof L.LatLng && nextLat instanceof L.LatLng && rings instanceof Array && projectedBounds instanceof L.Bounds && map instanceof L.Map) {
		var ring = rings[rings.length - 1];

		// Calculate two points for the anti-meridian crossing.
		var breakLat = calculateAntimeridianLat(currentLat, nextLat);
		var breakLatLngs = [new L.LatLng(breakLat, 180), new L.LatLng(breakLat, -180)];

		// Add in first anti-meridian latlng to this ring to finish it.
		// Positive if positive, negative if negative.
		if (sign(currentLat.lng) > 0) {
			pushLatLng(ring, projectedBounds, breakLatLngs.shift(), map);
		} else {
			pushLatLng(ring, projectedBounds, breakLatLngs.pop(), map);
		}

		// Return the second anti-meridian latlng
		return breakLatLngs.pop();
	} else {
		throw new Error('In order to break a ring, all the inputs must exist and be valid.');
	}
}

/*
 * @namespace L.Wrapped
 * A polyline that will automatically split and wrap around the Antimeridian (Internation Date Line).
 */
var Polyline = L.Polyline.extend({

	// recursively turns latlngs into a set of rings with projected coordinates
	// This is the entrypoint that is called from the overriden class to change
	// the rendering.
	_projectLatlngs: function (latlngs, result, projectedBounds) {
		var isMultiRing = latlngs[0] instanceof L.LatLng;

		if (isMultiRing) {
			this._createRings(latlngs, result, projectedBounds);
		} else {
			for (var i = 0; i < latlngs.length; i++) {
				this._projectLatlngs(latlngs[i], result, projectedBounds);
			}
		}
	},

	// Creates the rings used to render the latlngs.
	_createRings: function (latlngs, rings, projectedBounds) {
		var len = latlngs.length;
		rings.push([]);

		for (var i = 0; i < len; i++) {
			var compareLatLng = this._getCompareLatLng(i, len, latlngs);
			var currentLatLng = latlngs[i];

			pushLatLng(rings[rings.length - 1], projectedBounds, latlngs[i], this._map);

			// If the next point to check exists, then check to see if the
			// ring should be broken.
			if (compareLatLng && isBreakRing(compareLatLng, currentLatLng)) {
				var secondMeridianLatLng = breakRing(currentLatLng, compareLatLng,
					rings, projectedBounds, this._map);

				this._startNextRing(rings, projectedBounds, secondMeridianLatLng);
			}
		}
	},

	// returns the latlng to compare the current latlng to.
	_getCompareLatLng: function (i, len, latlngs) {
		return (i + 1 < len) ? latlngs[i + 1] : null;
	},

		// Starts a new ring and adds the second meridian point.
	_startNextRing: function (rings, projectedBounds, secondMeridianLatLng) {
		var ring = [];
		rings.push(ring);
		pushLatLng(ring, projectedBounds, secondMeridianLatLng, this._map);
	}
});

// @factory L.wrappedPolyline(latlngs: LatLng[], options?: Polyline options)
// Instantiates a polyline that will automatically split around the
// antimeridian (Internation Date Line) if that is a shorter path.
function wrappedPolyline(latlngs, options) {
	return new L.Wrapped.Polyline(latlngs, options);
}

/*
 * @namespace L.Wrapped
 * A polygon that will automatically split and wrap around the Antimeridian (Internation Date Line).
 */
var Polygon = L.Polygon.extend({

	// recursively turns latlngs into a set of rings with projected coordinates
	// This is the entrypoint that is called from the overriden class to change
	// the rendering.
	_projectLatlngs: function (latlngs, result, projectedBounds) {
		var isMultiRing = latlngs[0] instanceof L.LatLng;

		if (isMultiRing) {
			this._createRings(latlngs, result, projectedBounds);
		} else {
			for (var i = 0; i < latlngs.length; i++) {
				this._projectLatlngs(latlngs[i], result, projectedBounds);
			}
		}
	},

	// Creates the rings used to render the latlngs.
	_createRings: function (latlngs, rings, projectedBounds) {
		var len = latlngs.length;
		rings.push([]);

		for (var i = 0; i < len; i++) {
			// Because this is a polygon, there will always be a comparison latlng
			var compareLatLng = this._getCompareLatLng(i, len, latlngs);
			var currentLatLng = latlngs[i];

			pushLatLng(rings[rings.length - 1], projectedBounds, currentLatLng, this._map);

			// Check to see if the ring should be broken.
			if (isBreakRing(compareLatLng, currentLatLng)) {
				var secondMeridianLatLng = breakRing(currentLatLng, compareLatLng,
					rings, projectedBounds, this._map);

				this._startNextRing(rings, projectedBounds, secondMeridianLatLng, i === len - 1);
			}
		}

		// Join the last two rings if needed.
		this._checkConcaveRings(rings);
		this._joinLastRing(rings, latlngs);
	},

	// Starts a new ring if needed and adds the second meridian point to the
	// correct ring.
	_startNextRing: function (rings, projectedBounds, secondMeridianLatLng, isLastLatLng) {
		var ring;
		if (!isLastLatLng) {
			ring = [];
			rings.push(ring);
			pushLatLng(ring, projectedBounds, secondMeridianLatLng, this._map);
		} else {
			// If this is the last latlng, don't bother starting a new ring.
			// instead, join the last meridian point to the first point, to connect
			// the shape correctly.
			ring = rings[0];
			ring.unshift(this._map.latLngToLayerPoint(secondMeridianLatLng));
			projectedBounds.extend(ring[0]);
		}
	},

	// returns the latlng to compare the current latlng to.
	_getCompareLatLng: function (i, len, latlngs) {
		return (i + 1 < len) ? latlngs[i + 1] : latlngs[0];
	},

	// Joins the last ring to the first if they were accidentally disconnected by
	// crossing the anti-meridian
	_joinLastRing: function (rings, latlngs) {
		var firstRing = rings[0];
		var lastRing = rings[rings.length - 1];

		// If either the first or last latlng cross the meridian immediately, then
		// they will be drawn as a single line, not a polygon, since they will not be
		// connected to the last ring. Reconnect them.
		if (rings.length > 1 && (firstRing.length === 2 || lastRing.length === 2) &&
			 !isCrossMeridian(latlngs[0], latlngs[latlngs.length - 1])) {
			var len = lastRing.length;
			for (var i = 0; i < len; i++) {
				firstRing.unshift(lastRing.pop());
			}
			// Remove the empty ring.
			rings.pop();
		}
	},

	// Check for concave sections of the rings and join the rings if they are
	// concave
	_checkConcaveRings: function (rings) {
		var firstLatLng = this._map.layerPointToLatLng(rings[0][0]);

		for (var i = 0; i <= rings.length - 3; i++) {
			var middleLatLng = this._map.layerPointToLatLng(rings[i + 1][0]);
			var lastLatLng = this._map.layerPointToLatLng(rings[i + 2][0]);

			// If the meridian is crossed and then is crossed again
			// over the first polygon, the polygon is concave. Join the rings.
			if (isCrossMeridian(firstLatLng, middleLatLng) &&
			isCrossMeridian(middleLatLng, lastLatLng)) {
				var firstRing = rings[0];
				var lastRing = rings[i + 2];

				var newRing = firstRing.concat(lastRing);

				// Remove the joined polygon and then update the first polygon.
				rings.splice(i + 2, 1);
				rings.splice(0, 1, newRing);
			}
		}
	}
});

// @factory L.wrappedPolygon(latlngs: LatLng[], options?: Polygon options)
// Instantiates a polygon that will automatically split around the
// antimeridian (Internation Date Line) if that is a shorter path.
function wrappedPolygon(latlngs, options) {
	return new L.Wrapped.Polygon(latlngs, options);
}

exports.version = version;
exports.Polyline = Polyline;
exports.wrappedPolyline = wrappedPolyline;
exports.Polygon = Polygon;
exports.wrappedPolygon = wrappedPolygon;
exports.calculateAntimeridianLat = calculateAntimeridianLat;
exports.isCrossMeridian = isCrossMeridian;
exports.isBreakRing = isBreakRing;
exports.sign = sign;

})));
//# sourceMappingURL=leaflet.antimeridian-src.js.map


/***/ }),

/***/ 9250:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(6024);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to Shadow Root
var add = (__webpack_require__(9547)/* ["default"] */ .A)
module.exports.__inject__ = function (shadowRoot) {
  add("47bdd197", content, shadowRoot)
};

/***/ })

}]);
//# sourceMappingURL=openeo.2485.js.map
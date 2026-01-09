"use strict";
(self["webpackChunkvue_lib_openeo"] = self["webpackChunkvue_lib_openeo"] || []).push([[2237],{

/***/ 334
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ 4140
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

/***/ }

}]);
//# sourceMappingURL=openeo.2237.js.map
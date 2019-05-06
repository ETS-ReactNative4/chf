require("source-map-support").install();
exports.id = "index";
exports.modules = {

/***/ "../client/src/modules/locations/components/Map.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("recompose");
/* harmony import */ var recompose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(recompose__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("react-google-maps");
/* harmony import */ var react_google_maps__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_maps__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_UserLocation_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../client/src/modules/locations/assets/UserLocation.png");
/* harmony import */ var _assets_UserLocation_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_UserLocation_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_MapMarker_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../client/src/modules/locations/assets/MapMarker.png");
/* harmony import */ var _assets_MapMarker_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_MapMarker_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_map_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("../client/src/modules/locations/styles/map.scss");
/* harmony import */ var _styles_map_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_map_scss__WEBPACK_IMPORTED_MODULE_5__);



// import { FaLocationArrow, FaMapMarkerAlt } from 'react-icons/fa';




var Map = Object(recompose__WEBPACK_IMPORTED_MODULE_1__["compose"])(Object(recompose__WEBPACK_IMPORTED_MODULE_1__["withProps"])({
  googleMapURL: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCb-6kBhsPsodgVOuaG6AubbqcmFx3sJiA&v=3.exp&libraries=geometry,drawing,places',
  loadingElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: 'map-loading-ele', style: { height: '100%' } }),
  containerElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: 'map__container', style: { height: '100%' } }),
  mapElement: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('div', { className: 'map__map-element', style: { height: '100%' } })
}), Object(recompose__WEBPACK_IMPORTED_MODULE_1__["withStateHandlers"])(function () {
  return { isOpen: null };
}, {
  onToggleOpen: function onToggleOpen() {
    return function (marker) {
      return {
        isOpen: marker.street
      };
    };
  }
}), Object(recompose__WEBPACK_IMPORTED_MODULE_1__["lifecycle"])({
  componentWillMount: function componentWillMount() {
    var refs = {};
    this.setState({
      onMapMounted: function onMapMounted(ref) {
        refs.map = ref;
      },
      onBoundsChanged: function onBoundsChanged() {
        // probs need to bring this back long term
      },
      onPlacesChanged: function onPlacesChanged(bounds) {
        // console.log('BOUNDS:;', bounds);
        // if (bounds.j.j === bounds.j.l && bounds.l.j === bounds.l.l) {
        //   const center = this.props.center;
        //   const { dealers } = this.props;
        //   const dealer = this.props.closestDealer(dealers, center);
        //   refs.map.fitBounds(bounds.extend({ lat: dealer.lat, lng: dealer.lng }));
        // } else {
        refs.map.fitBounds(bounds);
        // }
      }
    });
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.center !== this.props.center) {
      this.state.onPlacesChanged(nextProps.bounds);
    }
  }
}), react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withScriptjs"], react_google_maps__WEBPACK_IMPORTED_MODULE_2__["withGoogleMap"])(function (props) {
  if (props.selectedLocation) props.onToggleOpen({ street: props.selectedLocation });

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
    react_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMap"],
    {
      options: {
        fullscreenControl: props.fullscreenControl
      },
      ref: props.onMapMounted,
      onBoundsChanged: props.onBoundsChanged,
      defaultZoom: props.zoom,
      defaultCenter: props.center
    },
    props.markers ? props.markers.map(function (_ref) {
      var marker = _ref.node;

      console.log('MARKER::', marker);
      return marker ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
        react_google_maps__WEBPACK_IMPORTED_MODULE_2__["Marker"],
        {
          key: marker.id
          // ref={c => (this[`marker_${marker.id}`] = c)}
          , icon: { url: _assets_MapMarker_png__WEBPACK_IMPORTED_MODULE_4___default.a },
          position: { lat: parseInt(marker.lat), lng: parseInt(marker.lng) },
          onClick: function onClick() {
            props.selectLocation(marker.street);
            props.onToggleOpen(marker);
          }
        },
        props.isOpen === marker.street && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          react_google_maps__WEBPACK_IMPORTED_MODULE_2__["InfoWindow"],
          {
            className: 'map__info-window',
            onCloseClick: function onCloseClick() {
              props.clearLocation();
              props.onToggleOpen({ street: null });
            }
          },
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            'div',
            { className: 'map__info-window-text-container', 'data-marker-id': marker.id },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              { className: 'map__info-window-text' },
              marker.name
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              { className: 'map__info-window-text' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'a',
                {
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  href: 'https://www.google.com/maps/dir/?api=1&destination=' + marker.street.replace(' ', '+') + '+' + marker.city.replace(' ', '+') + '+' + marker.country.replace(' ', '+')
                },
                marker.street,
                ' ',
                marker.address_2 ? ', ' + marker.address_2 : null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement('br', null),
                marker.city,
                ', ',
                marker.state,
                ' ',
                marker.zip
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              { className: 'map__info-window-text' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'a',
                { href: 'tel:' + marker.phone },
                marker.phone
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              { className: 'map__info-window-text' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'a',
                { href: 'mailto:' + marker.email },
                marker.email
              )
            ),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
              'p',
              { className: 'map__info-window-text' },
              react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                'a',
                {
                  className: 'map__info-window-text',
                  target: '_blank',
                  rel: 'noopener noreferrer',
                  href: 'https://' + marker.website
                },
                marker.website
              )
            )
          )
        )
      ) : null;
    }) : null,
    props.search && props.center ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_google_maps__WEBPACK_IMPORTED_MODULE_2__["Marker"], {
      position: props.center,
      icon: {
        url: _assets_UserLocation_png__WEBPACK_IMPORTED_MODULE_3___default.a
      }
    }) : null
  );
});

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

};
//# sourceMappingURL=index.07404d94d6a9a3911cb1.js.map
webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./styles/index.scss":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!./node_modules/next/dist/compiled/postcss-loader??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-7-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./styles/index.scss ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/*@import 'normalize';\n@import 'palette';*/\nhtml,\nbody {\n  height: 100%;\n  background-color: #273139;\n}\n\nli {\n  color: #fafafa;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  color: #fafafa;\n}\n\na {\n  color: #00ff80;\n}\n\n.layout {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  min-height: 100vh;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.layout__main {\n  border: 1px solid red;\n  max-width: 44rem;\n  width: 44rem;\n  height: 100%;\n  padding-bottom: 64px;\n}\n\nfooter {\n  background-color: #9dceb1;\n  margin-top: auto;\n  block-size: 50px;\n  margin-left: -6px;\n  margin-right: -6px;\n  inline-size: 100%;\n}\n\n.home__avoList {\n  background-color: green;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 32px;\n  gap: 32px;\n}\n\n/*@import 'tools';\n@import 'typography';\n@import 'atoms';\n@import 'layout';\n@import 'desktop_layout';\n@import 'patlib';*/\n.navbar {\n  display: -webkit-flex;\n  display: flex;\n  border: solid red;\n  background-color: #273139;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  max-width: 44rem;\n  width: 44rem;\n  height: 4rem;\n  -webkit-align-items: center;\n          align-items: center;\n}\n\n.card {\n  border: solid blue;\n  width: 21rem;\n  min-width: 21rem;\n  height: 25.7rem;\n  min-height: 25.7rem;\n}\n.card img {\n  aspect-ratio: 1/1;\n}\n\n/*@import 'components/modal';\n@import 'components/login';\n@import 'components/toast';\n@import 'components/page_feedback';*/", "",{"version":3,"sources":["webpack://styles/index.scss","webpack://styles/global.scss","webpack://styles/variables.scss","webpack://styles/layout.scss","webpack://styles/home.scss","webpack://styles/components/navbar.scss","webpack://styles/components/card.scss"],"names":[],"mappings":"AAEA;mBAAA;ACFA;;EAEE,YAAA;EACA,yBCFiB;AFKnB;;ACAA;EACE,cCLc;AFQhB;;ACAA;;;;;EAKE,cCZmB;AFerB;;ACAA;EACE,cCfgB;AFkBlB;;AGtBA;EACE,qBAAA;EAAA,aAAA;EACA,8BAAA;UAAA,sBAAA;EACA,iBAAA;EACA,2BAAA;UAAA,mBAAA;AHyBF;AGxBE;EACE,qBAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;AH0BJ;;AGtBA;EACE,yBDfa;ECgBb,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;AHyBF;;AI7CA;EACE,uBAAA;EACA,aAAA;EACA,8BAAA;EACA,cAAA;EAAA,SAAA;AJgDF;;AA3CA;;;;;kBAAA;AKTA;EACE,qBAAA;EAAA,aAAA;EACA,iBAAA;EACA,yBHFiB;EGGjB,sCAAA;UAAA,8BAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,2BAAA;UAAA,mBAAA;AL6DF;;AMrEA;EACE,kBAAA;EACA,YAAA;EACA,gBAAA;EACA,eAAA;EACA,mBAAA;ANwEF;AMtEE;EACE,iBAAA;ANwEJ;;AA7DA;;;oCAAA","sourcesContent":["// Boot Imports\r\n@import 'variables';\r\n/*@import 'normalize';\r\n@import 'palette';*/\r\n\r\n// Style Imports\r\n@import 'global';\r\n@import 'layout';\r\n@import 'home';\r\n/*@import 'tools';\r\n@import 'typography';\r\n@import 'atoms';\r\n@import 'layout';\r\n@import 'desktop_layout';\r\n@import 'patlib';*/\r\n\r\n// Style components\r\n@import 'components/navbar';\r\n@import 'components/card';\r\n/*@import 'components/modal';\r\n@import 'components/login';\r\n@import 'components/toast';\r\n@import 'components/page_feedback';*/\r\n\r\n// Desktop components\r\n","html,\r\nbody {\r\n  height: 100%;\r\n  background-color: $background-color;\r\n}\r\n\r\nli {\r\n  color: $dark-li-color;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  color: $dark-heading-color;\r\n}\r\n\r\na {\r\n  color: $dark-link-color;\r\n}\r\n","$footer-color: #9dceb1;\r\n$background-color: #273139;\r\n$dark-li-color: #fafafa;\r\n$dark-heading-color: #fafafa;\r\n$dark-link-color: #00ff80;\r\n",".layout {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  align-items: center;\r\n  &__main {\r\n    border: 1px solid red;\r\n    max-width: 44rem;\r\n    width: 44rem;\r\n    height: 100%;\r\n    padding-bottom: 64px;\r\n  }\r\n}\r\n\r\nfooter {\r\n  background-color: $footer-color;\r\n  margin-top: auto;\r\n  block-size: 50px;\r\n  margin-left: -6px;\r\n  margin-right: -6px;\r\n  inline-size: 100%;\r\n}\r\n",".home__avoList {\r\n  background-color: green;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 32px;\r\n}\r\n",".navbar {\r\n  display: flex;\r\n  border: solid red;\r\n  background-color: $background-color;\r\n  justify-content: space-between;\r\n  max-width: 44rem;\r\n  width: 44rem;\r\n  height: 4rem;\r\n  align-items: center;\r\n}\r\n",".card {\r\n  border: solid blue;\r\n  width: 21rem;\r\n  min-width: 21rem;\r\n  height: 25.7rem;\r\n  min-height: 25.7rem;\r\n\r\n  img {\r\n    aspect-ratio: 1 / 1;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ3pGLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyx5QkFBeUIsb0JBQW9CLGlCQUFpQixpQkFBaUIsOEJBQThCLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyw0QkFBNEIsbUJBQW1CLEdBQUcsT0FBTyxtQkFBbUIsR0FBRyxhQUFhLDBCQUEwQixrQkFBa0IsbUNBQW1DLG1DQUFtQyxzQkFBc0IsZ0NBQWdDLGdDQUFnQyxHQUFHLGlCQUFpQiwwQkFBMEIscUJBQXFCLGlCQUFpQixpQkFBaUIseUJBQXlCLEdBQUcsWUFBWSw4QkFBOEIscUJBQXFCLHFCQUFxQixzQkFBc0IsdUJBQXVCLHNCQUFzQixHQUFHLG9CQUFvQiw0QkFBNEIsa0JBQWtCLG1DQUFtQyxtQkFBbUIsY0FBYyxHQUFHLHNCQUFzQix1QkFBdUIsa0JBQWtCLG1CQUFtQiwyQkFBMkIsbUJBQW1CLGFBQWEsMEJBQTBCLGtCQUFrQixzQkFBc0IsOEJBQThCLDJDQUEyQywyQ0FBMkMscUJBQXFCLGlCQUFpQixpQkFBaUIsZ0NBQWdDLGdDQUFnQyxHQUFHLFdBQVcsdUJBQXVCLGlCQUFpQixxQkFBcUIsb0JBQW9CLHdCQUF3QixHQUFHLGFBQWEsc0JBQXNCLEdBQUcsaUNBQWlDLDZCQUE2Qiw2QkFBNkIscUNBQXFDLFNBQVMsaVNBQWlTLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxTQUFTLFdBQVcsT0FBTyxLQUFLLFdBQVcsUUFBUSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sUUFBUSxpRUFBaUUsMEJBQTBCLHNCQUFzQiwrQ0FBK0MscUJBQXFCLG1CQUFtQixzQkFBc0IseUJBQXlCLG9CQUFvQixxQkFBcUIsNkJBQTZCLHFCQUFxQiw2REFBNkQsOEJBQThCLGlDQUFpQywrQkFBK0IsK0JBQStCLHVDQUF1QyxxREFBcUQsbUJBQW1CLDBDQUEwQyxLQUFLLFlBQVksNEJBQTRCLEtBQUssd0NBQXdDLGlDQUFpQyxLQUFLLFdBQVcsOEJBQThCLEtBQUssOEJBQThCLCtCQUErQiw0QkFBNEIsaUNBQWlDLDhCQUE4QixnQkFBZ0Isb0JBQW9CLDZCQUE2Qix3QkFBd0IsMEJBQTBCLGVBQWUsOEJBQThCLHlCQUF5QixxQkFBcUIscUJBQXFCLDZCQUE2QixPQUFPLEtBQUssZ0JBQWdCLHNDQUFzQyx1QkFBdUIsdUJBQXVCLHdCQUF3Qix5QkFBeUIsd0JBQXdCLEtBQUssdUJBQXVCLDhCQUE4QixvQkFBb0IscUNBQXFDLGdCQUFnQixLQUFLLGdCQUFnQixvQkFBb0Isd0JBQXdCLDBDQUEwQyxxQ0FBcUMsdUJBQXVCLG1CQUFtQixtQkFBbUIsMEJBQTBCLEtBQUssY0FBYyx5QkFBeUIsbUJBQW1CLHVCQUF1QixzQkFBc0IsMEJBQTBCLGVBQWUsNEJBQTRCLE9BQU8sS0FBSyx1QkFBdUI7QUFDci9JO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jMzVhOTgxY2ViZDE3OWQ5ZDFhMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypAaW1wb3J0ICdub3JtYWxpemUnO1xcbkBpbXBvcnQgJ3BhbGV0dGUnOyovXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzMxMzk7XFxufVxcblxcbmxpIHtcXG4gIGNvbG9yOiAjZmFmYWZhO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSB7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogIzAwZmY4MDtcXG59XFxuXFxuLmxheW91dCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5sYXlvdXRfX21haW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgbWF4LXdpZHRoOiA0NHJlbTtcXG4gIHdpZHRoOiA0NHJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA2NHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlkY2ViMTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBibG9jay1zaXplOiA1MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XFxuICBtYXJnaW4tcmlnaHQ6IC02cHg7XFxuICBpbmxpbmUtc2l6ZTogMTAwJTtcXG59XFxuXFxuLmhvbWVfX2F2b0xpc3Qge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC1nYXA6IDMycHg7XFxuICBnYXA6IDMycHg7XFxufVxcblxcbi8qQGltcG9ydCAndG9vbHMnO1xcbkBpbXBvcnQgJ3R5cG9ncmFwaHknO1xcbkBpbXBvcnQgJ2F0b21zJztcXG5AaW1wb3J0ICdsYXlvdXQnO1xcbkBpbXBvcnQgJ2Rlc2t0b3BfbGF5b3V0JztcXG5AaW1wb3J0ICdwYXRsaWInOyovXFxuLm5hdmJhciB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyOiBzb2xpZCByZWQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjczMTM5O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1heC13aWR0aDogNDRyZW07XFxuICB3aWR0aDogNDRyZW07XFxuICBoZWlnaHQ6IDRyZW07XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jYXJkIHtcXG4gIGJvcmRlcjogc29saWQgYmx1ZTtcXG4gIHdpZHRoOiAyMXJlbTtcXG4gIG1pbi13aWR0aDogMjFyZW07XFxuICBoZWlnaHQ6IDI1LjdyZW07XFxuICBtaW4taGVpZ2h0OiAyNS43cmVtO1xcbn1cXG4uY2FyZCBpbWcge1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxufVxcblxcbi8qQGltcG9ydCAnY29tcG9uZW50cy9tb2RhbCc7XFxuQGltcG9ydCAnY29tcG9uZW50cy9sb2dpbic7XFxuQGltcG9ydCAnY29tcG9uZW50cy90b2FzdCc7XFxuQGltcG9ydCAnY29tcG9uZW50cy9wYWdlX2ZlZWRiYWNrJzsqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9nbG9iYWwuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9sYXlvdXQuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9ob21lLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvY29tcG9uZW50cy9uYXZiYXIuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9jb21wb25lbnRzL2NhcmQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTttQkFBQTtBQ0ZBOztFQUVFLFlBQUE7RUFDQSx5QkNGaUI7QUZLbkI7O0FDQUE7RUFDRSxjQ0xjO0FGUWhCOztBQ0FBOzs7OztFQUtFLGNDWm1CO0FGZXJCOztBQ0FBO0VBQ0UsY0NmZ0I7QUZrQmxCOztBR3RCQTtFQUNFLHFCQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUh5QkY7QUd4QkU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBSDBCSjs7QUd0QkE7RUFDRSx5QkRmYTtFQ2dCYixnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FIeUJGOztBSTdDQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7QUpnREY7O0FBM0NBOzs7OztrQkFBQTtBS1RBO0VBQ0UscUJBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkhGaUI7RUdHakIsc0NBQUE7VUFBQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0FMNkRGOztBTXJFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FOd0VGO0FNdEVFO0VBQ0UsaUJBQUE7QU53RUo7O0FBN0RBOzs7b0NBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLy8gQm9vdCBJbXBvcnRzXFxyXFxuQGltcG9ydCAndmFyaWFibGVzJztcXHJcXG4vKkBpbXBvcnQgJ25vcm1hbGl6ZSc7XFxyXFxuQGltcG9ydCAncGFsZXR0ZSc7Ki9cXHJcXG5cXHJcXG4vLyBTdHlsZSBJbXBvcnRzXFxyXFxuQGltcG9ydCAnZ2xvYmFsJztcXHJcXG5AaW1wb3J0ICdsYXlvdXQnO1xcclxcbkBpbXBvcnQgJ2hvbWUnO1xcclxcbi8qQGltcG9ydCAndG9vbHMnO1xcclxcbkBpbXBvcnQgJ3R5cG9ncmFwaHknO1xcclxcbkBpbXBvcnQgJ2F0b21zJztcXHJcXG5AaW1wb3J0ICdsYXlvdXQnO1xcclxcbkBpbXBvcnQgJ2Rlc2t0b3BfbGF5b3V0JztcXHJcXG5AaW1wb3J0ICdwYXRsaWInOyovXFxyXFxuXFxyXFxuLy8gU3R5bGUgY29tcG9uZW50c1xcclxcbkBpbXBvcnQgJ2NvbXBvbmVudHMvbmF2YmFyJztcXHJcXG5AaW1wb3J0ICdjb21wb25lbnRzL2NhcmQnO1xcclxcbi8qQGltcG9ydCAnY29tcG9uZW50cy9tb2RhbCc7XFxyXFxuQGltcG9ydCAnY29tcG9uZW50cy9sb2dpbic7XFxyXFxuQGltcG9ydCAnY29tcG9uZW50cy90b2FzdCc7XFxyXFxuQGltcG9ydCAnY29tcG9uZW50cy9wYWdlX2ZlZWRiYWNrJzsqL1xcclxcblxcclxcbi8vIERlc2t0b3AgY29tcG9uZW50c1xcclxcblwiLFwiaHRtbCxcXHJcXG5ib2R5IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICBjb2xvcjogJGRhcmstbGktY29sb3I7XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1IHtcXHJcXG4gIGNvbG9yOiAkZGFyay1oZWFkaW5nLWNvbG9yO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiAkZGFyay1saW5rLWNvbG9yO1xcclxcbn1cXHJcXG5cIixcIiRmb290ZXItY29sb3I6ICM5ZGNlYjE7XFxyXFxuJGJhY2tncm91bmQtY29sb3I6ICMyNzMxMzk7XFxyXFxuJGRhcmstbGktY29sb3I6ICNmYWZhZmE7XFxyXFxuJGRhcmstaGVhZGluZy1jb2xvcjogI2ZhZmFmYTtcXHJcXG4kZGFyay1saW5rLWNvbG9yOiAjMDBmZjgwO1xcclxcblwiLFwiLmxheW91dCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICZfX21haW4ge1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XFxyXFxuICAgIG1heC13aWR0aDogNDRyZW07XFxyXFxuICAgIHdpZHRoOiA0NHJlbTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNjRweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICRmb290ZXItY29sb3I7XFxyXFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcclxcbiAgYmxvY2stc2l6ZTogNTBweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAtNnB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAtNnB4O1xcclxcbiAgaW5saW5lLXNpemU6IDEwMCU7XFxyXFxufVxcclxcblwiLFwiLmhvbWVfX2F2b0xpc3Qge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbn1cXHJcXG5cIixcIi5uYXZiYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJvcmRlcjogc29saWQgcmVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXgtd2lkdGg6IDQ0cmVtO1xcclxcbiAgd2lkdGg6IDQ0cmVtO1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXCIsXCIuY2FyZCB7XFxyXFxuICBib3JkZXI6IHNvbGlkIGJsdWU7XFxyXFxuICB3aWR0aDogMjFyZW07XFxyXFxuICBtaW4td2lkdGg6IDIxcmVtO1xcclxcbiAgaGVpZ2h0OiAyNS43cmVtO1xcclxcbiAgbWluLWhlaWdodDogMjUuN3JlbTtcXHJcXG5cXHJcXG4gIGltZyB7XFxyXFxuICAgIGFzcGVjdC1yYXRpbzogMSAvIDE7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9
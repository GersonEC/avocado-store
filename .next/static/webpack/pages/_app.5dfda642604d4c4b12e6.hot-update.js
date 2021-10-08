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
___CSS_LOADER_EXPORT___.push([module.i, "/*@import 'normalize';\n@import 'palette';*/\nhtml,\nbody {\n  height: 100%;\n  background-color: #273139;\n}\n\nli {\n  color: #fafafa;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5 {\n  color: #fafafa;\n}\n\na {\n  color: #00ff80;\n}\n\n.layout {\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  min-height: 100vh;\n  -webkit-align-items: center;\n          align-items: center;\n}\n.layout__main {\n  border: 1px solid red;\n  max-width: 44rem;\n  width: 44rem;\n  height: 100%;\n  padding-bottom: 64px;\n}\n\nfooter {\n  background-color: #9dceb1;\n  margin-top: auto;\n  block-size: 50px;\n  margin-left: -6px;\n  margin-right: -6px;\n  inline-size: 100%;\n}\n\n.home__avoList {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 32px;\n  gap: 32px;\n}\n\n/*@import 'tools';\n@import 'typography';\n@import 'atoms';\n@import 'layout';\n@import 'desktop_layout';\n@import 'patlib';*/\n.navbar {\n  display: -webkit-flex;\n  display: flex;\n  border: solid red;\n  background-color: #273139;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  max-width: 44rem;\n  width: 44rem;\n  height: 4rem;\n  -webkit-align-items: center;\n          align-items: center;\n}\n\n.card {\n  border: solid #b4b4b4;\n  inline-size: 21rem;\n  min-inline-size: 21rem;\n  max-block-size: 25.7rem;\n  min-block-size: 25.7rem;\n}\n.card img {\n  inline-size: 20.81rem;\n  object-fit: cover;\n}\n.card__description {\n  display: -webkit-flex;\n  display: flex;\n  border: solid red;\n  block-size: 4.9rem;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n\n/*@import 'components/modal';\n@import 'components/login';\n@import 'components/toast';\n@import 'components/page_feedback';*/", "",{"version":3,"sources":["webpack://styles/index.scss","webpack://styles/global.scss","webpack://styles/variables.scss","webpack://styles/layout.scss","webpack://styles/home.scss","webpack://styles/components/navbar.scss","webpack://styles/components/card.scss"],"names":[],"mappings":"AAEA;mBAAA;ACFA;;EAEE,YAAA;EACA,yBCFiB;AFKnB;;ACAA;EACE,cCLc;AFQhB;;ACAA;;;;;EAKE,cCZmB;AFerB;;ACAA;EACE,cCfgB;AFkBlB;;AGtBA;EACE,qBAAA;EAAA,aAAA;EACA,8BAAA;UAAA,sBAAA;EACA,iBAAA;EACA,2BAAA;UAAA,mBAAA;AHyBF;AGxBE;EACE,qBAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,oBAAA;AH0BJ;;AGtBA;EACE,yBDfa;ECgBb,gBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;EACA,iBAAA;AHyBF;;AI7CA;EACE,aAAA;EACA,8BAAA;EACA,cAAA;EAAA,SAAA;AJgDF;;AA1CA;;;;;kBAAA;AKTA;EACE,qBAAA;EAAA,aAAA;EACA,iBAAA;EACA,yBHFiB;EGGjB,sCAAA;UAAA,8BAAA;EACA,gBAAA;EACA,YAAA;EACA,YAAA;EACA,2BAAA;UAAA,mBAAA;AL4DF;;AMpEA;EACE,qBAAA;EACA,kBAAA;EACA,sBAAA;EACA,uBAAA;EACA,uBAAA;ANuEF;AMrEE;EACE,qBAAA;EACA,iBAAA;ANuEJ;AMpEE;EACE,qBAAA;EAAA,aAAA;EACA,iBAAA;EACA,kBAAA;EACA,8BAAA;UAAA,sBAAA;EACA,+BAAA;UAAA,uBAAA;ANsEJ;;AApEA;;;oCAAA","sourcesContent":["// Boot Imports\r\n@import 'variables';\r\n/*@import 'normalize';\r\n@import 'palette';*/\r\n\r\n// Style Imports\r\n@import 'global';\r\n@import 'layout';\r\n@import 'home';\r\n/*@import 'tools';\r\n@import 'typography';\r\n@import 'atoms';\r\n@import 'layout';\r\n@import 'desktop_layout';\r\n@import 'patlib';*/\r\n\r\n// Style components\r\n@import 'components/navbar';\r\n@import 'components/card';\r\n/*@import 'components/modal';\r\n@import 'components/login';\r\n@import 'components/toast';\r\n@import 'components/page_feedback';*/\r\n\r\n// Desktop components\r\n","html,\r\nbody {\r\n  height: 100%;\r\n  background-color: $background-color;\r\n}\r\n\r\nli {\r\n  color: $dark-li-color;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5 {\r\n  color: $dark-heading-color;\r\n}\r\n\r\na {\r\n  color: $dark-link-color;\r\n}\r\n","$footer-color: #9dceb1;\r\n$background-color: #273139;\r\n$dark-li-color: #fafafa;\r\n$dark-heading-color: #fafafa;\r\n$dark-link-color: #00ff80;\r\n",".layout {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-height: 100vh;\r\n  align-items: center;\r\n  &__main {\r\n    border: 1px solid red;\r\n    max-width: 44rem;\r\n    width: 44rem;\r\n    height: 100%;\r\n    padding-bottom: 64px;\r\n  }\r\n}\r\n\r\nfooter {\r\n  background-color: $footer-color;\r\n  margin-top: auto;\r\n  block-size: 50px;\r\n  margin-left: -6px;\r\n  margin-right: -6px;\r\n  inline-size: 100%;\r\n}\r\n",".home__avoList {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  gap: 32px;\r\n}\r\n",".navbar {\r\n  display: flex;\r\n  border: solid red;\r\n  background-color: $background-color;\r\n  justify-content: space-between;\r\n  max-width: 44rem;\r\n  width: 44rem;\r\n  height: 4rem;\r\n  align-items: center;\r\n}\r\n",".card {\r\n  border: solid rgb(180, 180, 180);\r\n  inline-size: 21rem;\r\n  min-inline-size: 21rem;\r\n  max-block-size: 25.7rem;\r\n  min-block-size: 25.7rem;\r\n\r\n  img {\r\n    inline-size: 20.81rem;\r\n    object-fit: cover;\r\n  }\r\n\r\n  &__description {\r\n    display: flex;\r\n    border: solid red;\r\n    block-size: 4.9rem;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3lGO0FBQ3pGLDhCQUE4QixtRkFBMkI7QUFDekQ7QUFDQSw4QkFBOEIsUUFBUyx5QkFBeUIsb0JBQW9CLGlCQUFpQixpQkFBaUIsOEJBQThCLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyw0QkFBNEIsbUJBQW1CLEdBQUcsT0FBTyxtQkFBbUIsR0FBRyxhQUFhLDBCQUEwQixrQkFBa0IsbUNBQW1DLG1DQUFtQyxzQkFBc0IsZ0NBQWdDLGdDQUFnQyxHQUFHLGlCQUFpQiwwQkFBMEIscUJBQXFCLGlCQUFpQixpQkFBaUIseUJBQXlCLEdBQUcsWUFBWSw4QkFBOEIscUJBQXFCLHFCQUFxQixzQkFBc0IsdUJBQXVCLHNCQUFzQixHQUFHLG9CQUFvQixrQkFBa0IsbUNBQW1DLG1CQUFtQixjQUFjLEdBQUcsc0JBQXNCLHVCQUF1QixrQkFBa0IsbUJBQW1CLDJCQUEyQixtQkFBbUIsYUFBYSwwQkFBMEIsa0JBQWtCLHNCQUFzQiw4QkFBOEIsMkNBQTJDLDJDQUEyQyxxQkFBcUIsaUJBQWlCLGlCQUFpQixnQ0FBZ0MsZ0NBQWdDLEdBQUcsV0FBVywwQkFBMEIsdUJBQXVCLDJCQUEyQiw0QkFBNEIsNEJBQTRCLEdBQUcsYUFBYSwwQkFBMEIsc0JBQXNCLEdBQUcsc0JBQXNCLDBCQUEwQixrQkFBa0Isc0JBQXNCLHVCQUF1QixtQ0FBbUMsbUNBQW1DLG9DQUFvQyxvQ0FBb0MsR0FBRyxpQ0FBaUMsNkJBQTZCLDZCQUE2QixxQ0FBcUMsU0FBUyxpU0FBaVMsTUFBTSxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLFNBQVMsV0FBVyxPQUFPLEtBQUssV0FBVyxRQUFRLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxPQUFPLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLFFBQVEsaUVBQWlFLDBCQUEwQixzQkFBc0IsK0NBQStDLHFCQUFxQixtQkFBbUIsc0JBQXNCLHlCQUF5QixvQkFBb0IscUJBQXFCLDZCQUE2QixxQkFBcUIsNkRBQTZELDhCQUE4QixpQ0FBaUMsK0JBQStCLCtCQUErQix1Q0FBdUMscURBQXFELG1CQUFtQiwwQ0FBMEMsS0FBSyxZQUFZLDRCQUE0QixLQUFLLHdDQUF3QyxpQ0FBaUMsS0FBSyxXQUFXLDhCQUE4QixLQUFLLDhCQUE4QiwrQkFBK0IsNEJBQTRCLGlDQUFpQyw4QkFBOEIsZ0JBQWdCLG9CQUFvQiw2QkFBNkIsd0JBQXdCLDBCQUEwQixlQUFlLDhCQUE4Qix5QkFBeUIscUJBQXFCLHFCQUFxQiw2QkFBNkIsT0FBTyxLQUFLLGdCQUFnQixzQ0FBc0MsdUJBQXVCLHVCQUF1Qix3QkFBd0IseUJBQXlCLHdCQUF3QixLQUFLLHVCQUF1QixvQkFBb0IscUNBQXFDLGdCQUFnQixLQUFLLGdCQUFnQixvQkFBb0Isd0JBQXdCLDBDQUEwQyxxQ0FBcUMsdUJBQXVCLG1CQUFtQixtQkFBbUIsMEJBQTBCLEtBQUssY0FBYyx1Q0FBdUMseUJBQXlCLDZCQUE2Qiw4QkFBOEIsOEJBQThCLGVBQWUsOEJBQThCLDBCQUEwQixPQUFPLDBCQUEwQixzQkFBc0IsMEJBQTBCLDJCQUEyQiwrQkFBK0IsZ0NBQWdDLE9BQU8sS0FBSyx1QkFBdUI7QUFDbGtLO0FBQ2Usc0ZBQXVCLEVBQUMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC41ZGZkYTY0MjYwNGQ0YzRiMTJlNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypAaW1wb3J0ICdub3JtYWxpemUnO1xcbkBpbXBvcnQgJ3BhbGV0dGUnOyovXFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzMxMzk7XFxufVxcblxcbmxpIHtcXG4gIGNvbG9yOiAjZmFmYWZhO1xcbn1cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSB7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG59XFxuXFxuYSB7XFxuICBjb2xvcjogIzAwZmY4MDtcXG59XFxuXFxuLmxheW91dCB7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5sYXlvdXRfX21haW4ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xcbiAgbWF4LXdpZHRoOiA0NHJlbTtcXG4gIHdpZHRoOiA0NHJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiA2NHB4O1xcbn1cXG5cXG5mb290ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlkY2ViMTtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxuICBibG9jay1zaXplOiA1MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XFxuICBtYXJnaW4tcmlnaHQ6IC02cHg7XFxuICBpbmxpbmUtc2l6ZTogMTAwJTtcXG59XFxuXFxuLmhvbWVfX2F2b0xpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtZ2FwOiAzMnB4O1xcbiAgZ2FwOiAzMnB4O1xcbn1cXG5cXG4vKkBpbXBvcnQgJ3Rvb2xzJztcXG5AaW1wb3J0ICd0eXBvZ3JhcGh5JztcXG5AaW1wb3J0ICdhdG9tcyc7XFxuQGltcG9ydCAnbGF5b3V0JztcXG5AaW1wb3J0ICdkZXNrdG9wX2xheW91dCc7XFxuQGltcG9ydCAncGF0bGliJzsqL1xcbi5uYXZiYXIge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogc29saWQgcmVkO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3MzEzOTtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXgtd2lkdGg6IDQ0cmVtO1xcbiAgd2lkdGg6IDQ0cmVtO1xcbiAgaGVpZ2h0OiA0cmVtO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBib3JkZXI6IHNvbGlkICNiNGI0YjQ7XFxuICBpbmxpbmUtc2l6ZTogMjFyZW07XFxuICBtaW4taW5saW5lLXNpemU6IDIxcmVtO1xcbiAgbWF4LWJsb2NrLXNpemU6IDI1LjdyZW07XFxuICBtaW4tYmxvY2stc2l6ZTogMjUuN3JlbTtcXG59XFxuLmNhcmQgaW1nIHtcXG4gIGlubGluZS1zaXplOiAyMC44MXJlbTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4uY2FyZF9fZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlcjogc29saWQgcmVkO1xcbiAgYmxvY2stc2l6ZTogNC45cmVtO1xcbiAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi8qQGltcG9ydCAnY29tcG9uZW50cy9tb2RhbCc7XFxuQGltcG9ydCAnY29tcG9uZW50cy9sb2dpbic7XFxuQGltcG9ydCAnY29tcG9uZW50cy90b2FzdCc7XFxuQGltcG9ydCAnY29tcG9uZW50cy9wYWdlX2ZlZWRiYWNrJzsqL1wiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZXMvaW5kZXguc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9nbG9iYWwuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy92YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9sYXlvdXQuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9ob21lLnNjc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvY29tcG9uZW50cy9uYXZiYXIuc2Nzc1wiLFwid2VicGFjazovL3N0eWxlcy9jb21wb25lbnRzL2NhcmQuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTttQkFBQTtBQ0ZBOztFQUVFLFlBQUE7RUFDQSx5QkNGaUI7QUZLbkI7O0FDQUE7RUFDRSxjQ0xjO0FGUWhCOztBQ0FBOzs7OztFQUtFLGNDWm1CO0FGZXJCOztBQ0FBO0VBQ0UsY0NmZ0I7QUZrQmxCOztBR3RCQTtFQUNFLHFCQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7QUh5QkY7QUd4QkU7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBSDBCSjs7QUd0QkE7RUFDRSx5QkRmYTtFQ2dCYixnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FIeUJGOztBSTdDQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FKZ0RGOztBQTFDQTs7Ozs7a0JBQUE7QUtUQTtFQUNFLHFCQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0EseUJIRmlCO0VHR2pCLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtBTDRERjs7QU1wRUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0FOdUVGO0FNckVFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBTnVFSjtBTXBFRTtFQUNFLHFCQUFBO0VBQUEsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtBTnNFSjs7QUFwRUE7OztvQ0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvLyBCb290IEltcG9ydHNcXHJcXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xcclxcbi8qQGltcG9ydCAnbm9ybWFsaXplJztcXHJcXG5AaW1wb3J0ICdwYWxldHRlJzsqL1xcclxcblxcclxcbi8vIFN0eWxlIEltcG9ydHNcXHJcXG5AaW1wb3J0ICdnbG9iYWwnO1xcclxcbkBpbXBvcnQgJ2xheW91dCc7XFxyXFxuQGltcG9ydCAnaG9tZSc7XFxyXFxuLypAaW1wb3J0ICd0b29scyc7XFxyXFxuQGltcG9ydCAndHlwb2dyYXBoeSc7XFxyXFxuQGltcG9ydCAnYXRvbXMnO1xcclxcbkBpbXBvcnQgJ2xheW91dCc7XFxyXFxuQGltcG9ydCAnZGVza3RvcF9sYXlvdXQnO1xcclxcbkBpbXBvcnQgJ3BhdGxpYic7Ki9cXHJcXG5cXHJcXG4vLyBTdHlsZSBjb21wb25lbnRzXFxyXFxuQGltcG9ydCAnY29tcG9uZW50cy9uYXZiYXInO1xcclxcbkBpbXBvcnQgJ2NvbXBvbmVudHMvY2FyZCc7XFxyXFxuLypAaW1wb3J0ICdjb21wb25lbnRzL21vZGFsJztcXHJcXG5AaW1wb3J0ICdjb21wb25lbnRzL2xvZ2luJztcXHJcXG5AaW1wb3J0ICdjb21wb25lbnRzL3RvYXN0JztcXHJcXG5AaW1wb3J0ICdjb21wb25lbnRzL3BhZ2VfZmVlZGJhY2snOyovXFxyXFxuXFxyXFxuLy8gRGVza3RvcCBjb21wb25lbnRzXFxyXFxuXCIsXCJodG1sLFxcclxcbmJvZHkge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gIGNvbG9yOiAkZGFyay1saS1jb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxuaDUge1xcclxcbiAgY29sb3I6ICRkYXJrLWhlYWRpbmctY29sb3I7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgY29sb3I6ICRkYXJrLWxpbmstY29sb3I7XFxyXFxufVxcclxcblwiLFwiJGZvb3Rlci1jb2xvcjogIzlkY2ViMTtcXHJcXG4kYmFja2dyb3VuZC1jb2xvcjogIzI3MzEzOTtcXHJcXG4kZGFyay1saS1jb2xvcjogI2ZhZmFmYTtcXHJcXG4kZGFyay1oZWFkaW5nLWNvbG9yOiAjZmFmYWZhO1xcclxcbiRkYXJrLWxpbmstY29sb3I6ICMwMGZmODA7XFxyXFxuXCIsXCIubGF5b3V0IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgJl9fbWFpbiB7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NHJlbTtcXHJcXG4gICAgd2lkdGg6IDQ0cmVtO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA2NHB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGZvb3Rlci1jb2xvcjtcXHJcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICBibG9jay1zaXplOiA1MHB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IC02cHg7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IC02cHg7XFxyXFxuICBpbmxpbmUtc2l6ZTogMTAwJTtcXHJcXG59XFxyXFxuXCIsXCIuaG9tZV9fYXZvTGlzdCB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgZ2FwOiAzMnB4O1xcclxcbn1cXHJcXG5cIixcIi5uYXZiYXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGJvcmRlcjogc29saWQgcmVkO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBtYXgtd2lkdGg6IDQ0cmVtO1xcclxcbiAgd2lkdGg6IDQ0cmVtO1xcclxcbiAgaGVpZ2h0OiA0cmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG59XFxyXFxuXCIsXCIuY2FyZCB7XFxyXFxuICBib3JkZXI6IHNvbGlkIHJnYigxODAsIDE4MCwgMTgwKTtcXHJcXG4gIGlubGluZS1zaXplOiAyMXJlbTtcXHJcXG4gIG1pbi1pbmxpbmUtc2l6ZTogMjFyZW07XFxyXFxuICBtYXgtYmxvY2stc2l6ZTogMjUuN3JlbTtcXHJcXG4gIG1pbi1ibG9jay1zaXplOiAyNS43cmVtO1xcclxcblxcclxcbiAgaW1nIHtcXHJcXG4gICAgaW5saW5lLXNpemU6IDIwLjgxcmVtO1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYm9yZGVyOiBzb2xpZCByZWQ7XFxyXFxuICAgIGJsb2NrLXNpemU6IDQuOXJlbTtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9
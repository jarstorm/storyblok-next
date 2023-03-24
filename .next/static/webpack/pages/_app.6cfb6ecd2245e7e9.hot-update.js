"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Post.js":
/*!****************************!*\
  !*** ./components/Post.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Post = function(param) {\n    var title = param.title, img = param.img, body = param.body, id = param.id;\n    var postLink = \"/post/\".concat(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border p-10 m-5 w-72 rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"block mb-2 text-sm text-red-900\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/jarstorm/workspace/storyblok-next/components/Post.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: img,\n                width: 500,\n                height: 500\n            }, void 0, false, {\n                fileName: \"/home/jarstorm/workspace/storyblok-next/components/Post.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"block text-sm text-green-900\",\n                children: body\n            }, void 0, false, {\n                fileName: \"/home/jarstorm/workspace/storyblok-next/components/Post.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/post/\".concat(id),\n                children: \"Open\"\n            }, void 0, false, {\n                fileName: \"/home/jarstorm/workspace/storyblok-next/components/Post.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jarstorm/workspace/storyblok-next/components/Post.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, _this);\n};\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUE2QjtBQUNDO0FBRTlCLElBQU1FLElBQUksR0FBRyxnQkFBNEI7UUFBMUJDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxHQUFHLFNBQUhBLEdBQUcsRUFBRUMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLEVBQUUsU0FBRkEsRUFBRTtJQUNuQyxJQUFNQyxRQUFRLEdBQUcsUUFBTyxDQUFLLE9BQUhELEVBQUUsQ0FBRTtJQUM1QixxQkFDTSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUMsa0NBQWtDOzswQkFDN0MsOERBQUNDLE1BQUk7Z0JBQUNELFNBQVMsRUFBQyxpQ0FBaUM7MEJBQUVOLEtBQUs7Ozs7O3FCQUFROzBCQUNoRSw4REFBQ0YsbURBQUs7Z0JBQ0pVLEdBQUcsRUFBRVAsR0FBRztnQkFDUlEsS0FBSyxFQUFFLEdBQUc7Z0JBQ1ZDLE1BQU0sRUFBRSxHQUFHOzs7OztxQkFDWDswQkFDRiw4REFBQ0gsTUFBSTtnQkFBQ0QsU0FBUyxFQUFDLDhCQUE4QjswQkFBRUosSUFBSTs7Ozs7cUJBQVE7MEJBQzVELDhEQUFDTCxrREFBSTtnQkFBQ2MsSUFBSSxFQUFFLFFBQU8sQ0FBSyxPQUFIUixFQUFFLENBQUU7MEJBQUUsTUFBSTs7Ozs7cUJBQU87Ozs7OzthQUNwQyxDQUNWO0FBQ0osQ0FBQztBQWRLSixLQUFBQSxJQUFJO0FBaUJWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0LmpzPzM0NTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5cbmNvbnN0IFBvc3QgPSAoe3RpdGxlLCBpbWcsIGJvZHksIGlkfSkgPT4geyAgICAgICAgICBcbmNvbnN0IHBvc3RMaW5rID0gYC9wb3N0LyR7aWR9YDtcbiAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXIgcC0xMCBtLTUgdy03MiByb3VuZGVkLTJ4bFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmxvY2sgbWItMiB0ZXh0LXNtIHRleHQtcmVkLTkwMFwiPnt0aXRsZX08L3NwYW4+ICAgIFxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17aW1nfVxuICAgICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH0gICAgICAgICAgICAgIFxuICAgICAgICAgICAgLz4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIHRleHQtc20gdGV4dC1ncmVlbi05MDBcIj57Ym9keX08L3NwYW4+XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Bvc3QvJHtpZH1gfT5PcGVuPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgUG9zdDtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiSW1hZ2UiLCJQb3N0IiwidGl0bGUiLCJpbWciLCJib2R5IiwiaWQiLCJwb3N0TGluayIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJzcmMiLCJ3aWR0aCIsImhlaWdodCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Post.js\n"));

/***/ })

});
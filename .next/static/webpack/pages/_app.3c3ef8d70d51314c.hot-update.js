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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\n\n\nvar Post = function(param) {\n    var title = param.title, img = param.img, body = param.body, id = param.id;\n    var postLink = \"/post/\".concat(id);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"border p-10 m-5 w-72 rounded-2xl\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"block mb-2 text-sm text-red-900\",\n                children: title\n            }, void 0, false, {\n                fileName: \"/home/jarstorm/workspace/storyblok-next/components/Post.js\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: img,\n                width: 500,\n                height: 500\n            }, void 0, false, {\n                fileName: \"/home/jarstorm/workspace/storyblok-next/components/Post.js\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: img,\n                className: \"w-58 h-auto mb-2\"\n            }, void 0, false, {\n                fileName: \"/home/jarstorm/workspace/storyblok-next/components/Post.js\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"block text-sm text-green-900\",\n                children: body\n            }, void 0, false, {\n                fileName: \"/home/jarstorm/workspace/storyblok-next/components/Post.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/post/\".concat(id),\n                children: \"Open\"\n            }, void 0, false, {\n                fileName: \"/home/jarstorm/workspace/storyblok-next/components/Post.js\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jarstorm/workspace/storyblok-next/components/Post.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, _this);\n};\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Bvc3QuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUE2QjtBQUNDO0FBRTlCLElBQU1FLElBQUksR0FBRyxnQkFBNEI7UUFBMUJDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxHQUFHLFNBQUhBLEdBQUcsRUFBRUMsSUFBSSxTQUFKQSxJQUFJLEVBQUVDLEVBQUUsU0FBRkEsRUFBRTtJQUNuQyxJQUFNQyxRQUFRLEdBQUcsUUFBTyxDQUFLLE9BQUhELEVBQUUsQ0FBRTtJQUM1QixxQkFDTSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUMsa0NBQWtDOzswQkFDN0MsOERBQUNDLE1BQUk7Z0JBQUNELFNBQVMsRUFBQyxpQ0FBaUM7MEJBQUVOLEtBQUs7Ozs7O3FCQUFROzBCQUNoRSw4REFBQ0YsbURBQUs7Z0JBQ0pVLEdBQUcsRUFBRVAsR0FBRztnQkFDUlEsS0FBSyxFQUFFLEdBQUc7Z0JBQ1ZDLE1BQU0sRUFBRSxHQUFHOzs7OztxQkFDWDswQkFDRiw4REFBQ1QsS0FBRztnQkFBQ08sR0FBRyxFQUFFUCxHQUFHO2dCQUFFSyxTQUFTLEVBQUUsa0JBQWtCOzs7OztxQkFBRzswQkFDL0MsOERBQUNDLE1BQUk7Z0JBQUNELFNBQVMsRUFBQyw4QkFBOEI7MEJBQUVKLElBQUk7Ozs7O3FCQUFROzBCQUM1RCw4REFBQ0wsa0RBQUk7Z0JBQUNjLElBQUksRUFBRSxRQUFPLENBQUssT0FBSFIsRUFBRSxDQUFFOzBCQUFFLE1BQUk7Ozs7O3FCQUFPOzs7Ozs7YUFDcEMsQ0FDVjtBQUNKLENBQUM7QUFmS0osS0FBQUEsSUFBSTtBQWtCViwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUG9zdC5qcz8zNDU1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuXG5jb25zdCBQb3N0ID0gKHt0aXRsZSwgaW1nLCBib2R5LCBpZH0pID0+IHsgICAgICAgICAgXG5jb25zdCBwb3N0TGluayA9IGAvcG9zdC8ke2lkfWA7XG4gIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyIHAtMTAgbS01IHctNzIgcm91bmRlZC0yeGxcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJsb2NrIG1iLTIgdGV4dC1zbSB0ZXh0LXJlZC05MDBcIj57dGl0bGV9PC9zcGFuPiAgICBcbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2ltZ31cbiAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9ICAgICAgICAgICAgICBcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW1nIHNyYz17aW1nfSBjbGFzc05hbWU9e1widy01OCBoLWF1dG8gbWItMlwifS8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIHRleHQtZ3JlZW4tOTAwXCI+e2JvZHl9PC9zcGFuPlxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wb3N0LyR7aWR9YH0+T3BlbjwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICk7XG59O1xuXG5cbmV4cG9ydCBkZWZhdWx0IFBvc3Q7XG4iXSwibmFtZXMiOlsiTGluayIsIkltYWdlIiwiUG9zdCIsInRpdGxlIiwiaW1nIiwiYm9keSIsImlkIiwicG9zdExpbmsiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Post.js\n"));

/***/ })

});
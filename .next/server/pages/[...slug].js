/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[...slug]";
exports.ids = ["pages/[...slug]"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtanMtdWxpbXRhdGUtdHV0b3JpYWwvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzcxMjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX2JDT2hZXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fX19UN0tcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfX1QwOWhEXCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX180MU93a1wiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX3N1UEVSXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fR3hRODVcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX19fTHBMMVwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzI3X3RiXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/[...slug].js":
/*!****************************!*\
  !*** ./pages/[...slug].js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Page),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _storyblok_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storyblok/react */ \"@storyblok/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_storyblok_react__WEBPACK_IMPORTED_MODULE_2__]);\n_storyblok_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nfunction Page({ story  }) {\n    story = (0,_storyblok_react__WEBPACK_IMPORTED_MODULE_2__.useStoryblokState)(story);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: story ? story.name : \"My Site\"\n                    }, void 0, false, {\n                        fileName: \"/home/jarstorm/workspace/storyblok-next/pages/[...slug].js\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/home/jarstorm/workspace/storyblok-next/pages/[...slug].js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/jarstorm/workspace/storyblok-next/pages/[...slug].js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_storyblok_react__WEBPACK_IMPORTED_MODULE_2__.StoryblokComponent, {\n                blok: story.content\n            }, void 0, false, {\n                fileName: \"/home/jarstorm/workspace/storyblok-next/pages/[...slug].js\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/jarstorm/workspace/storyblok-next/pages/[...slug].js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticProps({ params  }) {\n    let slug = params.slug ? params.slug.join(\"/\") : \"home\";\n    let sbParams = {\n        version: \"draft\"\n    };\n    const storyblokApi = (0,_storyblok_react__WEBPACK_IMPORTED_MODULE_2__.getStoryblokApi)();\n    let { data  } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);\n    return {\n        props: {\n            story: data ? data.story : false,\n            key: data ? data.story.id : false\n        },\n        revalidate: 3600\n    };\n}\nasync function getStaticPaths() {\n    const storyblokApi = (0,_storyblok_react__WEBPACK_IMPORTED_MODULE_2__.getStoryblokApi)();\n    let { data  } = await storyblokApi.get(\"cdn/links/\");\n    let paths = [];\n    Object.keys(data.links).forEach((linkKey)=>{\n        if (data.links[linkKey].is_folder || data.links[linkKey].slug === \"home\") {\n            return;\n        }\n        const slug = data.links[linkKey].slug;\n        let splittedSlug = slug.split(\"/\");\n        paths.push({\n            params: {\n                slug: splittedSlug\n            }\n        });\n    });\n    return {\n        paths: paths,\n        fallback: false\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bLi4uc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQTZCO0FBQ2tCO0FBTXJCO0FBRVgsU0FBU0ssSUFBSSxDQUFDLEVBQUVDLEtBQUssR0FBRSxFQUFFO0lBQ3RDQSxLQUFLLEdBQUdKLG1FQUFpQixDQUFDSSxLQUFLLENBQUMsQ0FBQztJQUVqQyxxQkFDRSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUVQLDBFQUFnQjs7MEJBQzlCLDhEQUFDRCxrREFBSTs7a0NBQ0gsOERBQUNVLE9BQUs7a0NBQUVKLEtBQUssR0FBR0EsS0FBSyxDQUFDSyxJQUFJLEdBQUcsU0FBUzs7Ozs7NEJBQVM7a0NBQy9DLDhEQUFDQyxNQUFJO3dCQUFDQyxHQUFHLEVBQUMsTUFBTTt3QkFBQ0MsSUFBSSxFQUFDLGNBQWM7Ozs7OzRCQUFHOzs7Ozs7b0JBQ2xDOzBCQUVQLDhEQUFDVixnRUFBa0I7Z0JBQUNXLElBQUksRUFBRVQsS0FBSyxDQUFDVSxPQUFPOzs7OztvQkFBSTs7Ozs7O1lBQ3ZDLENBQ047QUFDSixDQUFDO0FBRU0sZUFBZUMsY0FBYyxDQUFDLEVBQUVDLE1BQU0sR0FBRSxFQUFFO0lBQy9DLElBQUlDLElBQUksR0FBR0QsTUFBTSxDQUFDQyxJQUFJLEdBQUdELE1BQU0sQ0FBQ0MsSUFBSSxDQUFDQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTTtJQUV2RCxJQUFJQyxRQUFRLEdBQUc7UUFDYkMsT0FBTyxFQUFFLE9BQU87S0FDakI7SUFFRCxNQUFNQyxZQUFZLEdBQUdwQixpRUFBZSxFQUFFO0lBQ3RDLElBQUksRUFBRXFCLElBQUksR0FBRSxHQUFHLE1BQU1ELFlBQVksQ0FBQ0UsR0FBRyxDQUFDLENBQUMsWUFBWSxFQUFFTixJQUFJLENBQUMsQ0FBQyxFQUFFRSxRQUFRLENBQUM7SUFFdEUsT0FBTztRQUNMSyxLQUFLLEVBQUU7WUFDTHBCLEtBQUssRUFBRWtCLElBQUksR0FBR0EsSUFBSSxDQUFDbEIsS0FBSyxHQUFHLEtBQUs7WUFDaENxQixHQUFHLEVBQUVILElBQUksR0FBR0EsSUFBSSxDQUFDbEIsS0FBSyxDQUFDc0IsRUFBRSxHQUFHLEtBQUs7U0FDbEM7UUFDREMsVUFBVSxFQUFFLElBQUk7S0FDakIsQ0FBQztBQUNKLENBQUM7QUFFTSxlQUFlQyxjQUFjLEdBQUc7SUFDckMsTUFBTVAsWUFBWSxHQUFHcEIsaUVBQWUsRUFBRTtJQUN0QyxJQUFJLEVBQUVxQixJQUFJLEdBQUUsR0FBRyxNQUFNRCxZQUFZLENBQUNFLEdBQUcsQ0FBQyxZQUFZLENBQUM7SUFFbkQsSUFBSU0sS0FBSyxHQUFHLEVBQUU7SUFDZEMsTUFBTSxDQUFDQyxJQUFJLENBQUNULElBQUksQ0FBQ1UsS0FBSyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxDQUFDQyxPQUFPLEdBQUs7UUFDM0MsSUFBSVosSUFBSSxDQUFDVSxLQUFLLENBQUNFLE9BQU8sQ0FBQyxDQUFDQyxTQUFTLElBQUliLElBQUksQ0FBQ1UsS0FBSyxDQUFDRSxPQUFPLENBQUMsQ0FBQ2pCLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDeEUsT0FBTztRQUNULENBQUM7UUFFRCxNQUFNQSxJQUFJLEdBQUdLLElBQUksQ0FBQ1UsS0FBSyxDQUFDRSxPQUFPLENBQUMsQ0FBQ2pCLElBQUk7UUFDckMsSUFBSW1CLFlBQVksR0FBR25CLElBQUksQ0FBQ29CLEtBQUssQ0FBQyxHQUFHLENBQUM7UUFFbENSLEtBQUssQ0FBQ1MsSUFBSSxDQUFDO1lBQUV0QixNQUFNLEVBQUU7Z0JBQUVDLElBQUksRUFBRW1CLFlBQVk7YUFBRTtTQUFFLENBQUMsQ0FBQztJQUNqRCxDQUFDLENBQUMsQ0FBQztJQUVILE9BQU87UUFDTFAsS0FBSyxFQUFFQSxLQUFLO1FBQ1pVLFFBQVEsRUFBRSxLQUFLO0tBQ2hCLENBQUM7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1qcy11bGltdGF0ZS10dXRvcmlhbC8uL3BhZ2VzL1suLi5zbHVnXS5qcz9hNjFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IHtcbiAgdXNlU3RvcnlibG9rU3RhdGUsXG4gIGdldFN0b3J5Ymxva0FwaSxcbiAgU3RvcnlibG9rQ29tcG9uZW50LFxufSBmcm9tIFwiQHN0b3J5Ymxvay9yZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlKHsgc3RvcnkgfSkge1xuICBzdG9yeSA9IHVzZVN0b3J5Ymxva1N0YXRlKHN0b3J5KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3N0b3J5ID8gc3RvcnkubmFtZSA6IFwiTXkgU2l0ZVwifTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFN0b3J5Ymxva0NvbXBvbmVudCBibG9rPXtzdG9yeS5jb250ZW50fSAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoeyBwYXJhbXMgfSkge1xuICBsZXQgc2x1ZyA9IHBhcmFtcy5zbHVnID8gcGFyYW1zLnNsdWcuam9pbihcIi9cIikgOiBcImhvbWVcIjtcblxuICBsZXQgc2JQYXJhbXMgPSB7XG4gICAgdmVyc2lvbjogXCJkcmFmdFwiLCAvLyBvciAncHVibGlzaGVkJ1xuICB9O1xuXG4gIGNvbnN0IHN0b3J5Ymxva0FwaSA9IGdldFN0b3J5Ymxva0FwaSgpO1xuICBsZXQgeyBkYXRhIH0gPSBhd2FpdCBzdG9yeWJsb2tBcGkuZ2V0KGBjZG4vc3Rvcmllcy8ke3NsdWd9YCwgc2JQYXJhbXMpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHN0b3J5OiBkYXRhID8gZGF0YS5zdG9yeSA6IGZhbHNlLFxuICAgICAga2V5OiBkYXRhID8gZGF0YS5zdG9yeS5pZCA6IGZhbHNlLFxuICAgIH0sXG4gICAgcmV2YWxpZGF0ZTogMzYwMCxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBzdG9yeWJsb2tBcGkgPSBnZXRTdG9yeWJsb2tBcGkoKTtcbiAgbGV0IHsgZGF0YSB9ID0gYXdhaXQgc3RvcnlibG9rQXBpLmdldChcImNkbi9saW5rcy9cIik7XG5cbiAgbGV0IHBhdGhzID0gW107XG4gIE9iamVjdC5rZXlzKGRhdGEubGlua3MpLmZvckVhY2goKGxpbmtLZXkpID0+IHtcbiAgICBpZiAoZGF0YS5saW5rc1tsaW5rS2V5XS5pc19mb2xkZXIgfHwgZGF0YS5saW5rc1tsaW5rS2V5XS5zbHVnID09PSBcImhvbWVcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNsdWcgPSBkYXRhLmxpbmtzW2xpbmtLZXldLnNsdWc7XG4gICAgbGV0IHNwbGl0dGVkU2x1ZyA9IHNsdWcuc3BsaXQoXCIvXCIpO1xuXG4gICAgcGF0aHMucHVzaCh7IHBhcmFtczogeyBzbHVnOiBzcGxpdHRlZFNsdWcgfSB9KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogcGF0aHMsXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJzdHlsZXMiLCJ1c2VTdG9yeWJsb2tTdGF0ZSIsImdldFN0b3J5Ymxva0FwaSIsIlN0b3J5Ymxva0NvbXBvbmVudCIsIlBhZ2UiLCJzdG9yeSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInRpdGxlIiwibmFtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiYmxvayIsImNvbnRlbnQiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInNsdWciLCJqb2luIiwic2JQYXJhbXMiLCJ2ZXJzaW9uIiwic3RvcnlibG9rQXBpIiwiZGF0YSIsImdldCIsInByb3BzIiwia2V5IiwiaWQiLCJyZXZhbGlkYXRlIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsIk9iamVjdCIsImtleXMiLCJsaW5rcyIsImZvckVhY2giLCJsaW5rS2V5IiwiaXNfZm9sZGVyIiwic3BsaXR0ZWRTbHVnIiwic3BsaXQiLCJwdXNoIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[...slug].js\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@storyblok/react":
/*!***********************************!*\
  !*** external "@storyblok/react" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = import("@storyblok/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[...slug].js"));
module.exports = __webpack_exports__;

})();
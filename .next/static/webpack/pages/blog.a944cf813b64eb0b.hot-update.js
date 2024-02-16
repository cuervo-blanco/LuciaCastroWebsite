"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./src/pages/blog.js":
/*!***************************!*\
  !*** ./src/pages/blog.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_useSwipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/useSwipe */ \"./src/components/useSwipe.js\");\n/* harmony import */ var _styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Blog.module.scss */ \"./src/styles/Blog.module.scss\");\n/* harmony import */ var _styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_BlogPostPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlogPostPreview */ \"./src/components/BlogPostPreview.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Blog = function(param) {\n    var posts = param.posts;\n    _s();\n    var rows = 4;\n    var columns = 4;\n    var grid = [];\n    for(var r = 0; r < rows; r++){\n        var row = [];\n        for(var c = 0; c < columns; c++){\n            var index = r * columns + c;\n            var post = posts[index];\n            if (post) {\n                row.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPostPreview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    img: post.draft_version.featured_image,\n                    title: post.draft_version.title,\n                    description: post.draft_version.text,\n                    slug: post.draft_version.slug,\n                    date: post.published_date,\n                    author: post.author\n                }, \"post-\".concat(c, \"-\").concat(r), false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                    lineNumber: 22,\n                    columnNumber: 17\n                }, _this));\n            }\n        }\n        if (row.length > 0) {\n            grid.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_4___default().blogPostRow),\n                children: row\n            }, \"grid-\".concat(r), false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                lineNumber: 28,\n                columnNumber: 4\n            }, _this));\n        }\n    }\n    var _useSwipe = (0,_components_useSwipe__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        onLeftSwipe: \"/shop\",\n        onRightSwipe: \"contact/\"\n    }), handleTouchStart = _useSwipe.handleTouchStart, handleTouchEnd = _useSwipe.handleTouchEnd;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_4___default().blogContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onTouchStart: handleTouchStart,\n            onTouchEnd: handleTouchEnd,\n            style: {\n                width: \"100%\",\n                height: \"100%\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                flexDirection: \"column\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"blog\"\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                lineNumber: 38,\n                columnNumber: 3\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n            lineNumber: 37,\n            columnNumber: 3\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n        lineNumber: 36,\n        columnNumber: 3\n    }, _this);\n};\n_s(Blog, \"3mLwjldhEiX3cnh66Y+ArMirNgA=\", false, function() {\n    return [\n        _components_useSwipe__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Blog;\nvar __N_SSG = true;\n// Use getStaticPaths to pre-render pages for each set of posts. Or handle pagination client-side, fetching new sets of posts as the user navigates between pages.\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFDRTtBQUNZO0FBRzVELElBQU1JLE9BQU87UUFBSUMsY0FBQUE7O0lBR2IsSUFBSUMsT0FBTztJQUNYLElBQUlDLFVBQVU7SUFDakIsSUFBTUMsT0FBTyxFQUFFO0lBQ2YsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlILE1BQU1HLElBQUk7UUFDOUIsSUFBSUMsTUFBTSxFQUFFO1FBRVgsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlKLFNBQVNJLElBQUk7WUFDaEMsSUFBTUMsUUFBUUgsSUFBSUYsVUFBVUk7WUFDNUIsSUFBTUUsT0FBT1IsS0FBSyxDQUFDTyxNQUFNO1lBRXpCLElBQUlDLE1BQU07Z0JBQ1RILElBQUlJLElBQUksZUFDSSw4REFBQ1gsbUVBQWVBO29CQUF3QlksS0FBS0YsS0FBS0csYUFBYSxDQUFDQyxjQUFjO29CQUFFQyxPQUFPTCxLQUFLRyxhQUFhLENBQUNFLEtBQUs7b0JBQUVDLGFBQWFOLEtBQUtHLGFBQWEsQ0FBQ0ksSUFBSTtvQkFBRUMsTUFBTVIsS0FBS0csYUFBYSxDQUFDSyxJQUFJO29CQUFFQyxNQUFNVCxLQUFLVSxjQUFjO29CQUFFQyxRQUFRWCxLQUFLVyxNQUFNO21CQUE5TSxRQUFhZixPQUFMRSxHQUFFLEtBQUssT0FBRkY7Ozs7O1lBRWhEO1FBQ0Q7UUFDQSxJQUFJQyxJQUFJZSxNQUFNLEdBQUcsR0FBRztZQUNwQmpCLEtBQUtNLElBQUksZUFDUiw4REFBQ1k7Z0JBQXNCQyxXQUFXekIsNkVBQWtCOzBCQUFHUTtlQUE3QyxRQUFVLE9BQUZEOzs7OztRQUVuQjtJQUNEO0lBRUEsSUFBNkNSLFlBQUFBLGdFQUFRQSxDQUFDO1FBQUM0QixhQUFhO1FBQVNDLGNBQWM7SUFBVSxJQUE3RkMsbUJBQXFDOUIsVUFBckM4QixrQkFBa0JDLGlCQUFtQi9CLFVBQW5CK0I7SUFFMUIscUJBQ0MsOERBQUNOO1FBQUlPLElBQUkvQiwrRUFBb0I7a0JBQzdCLDRFQUFDd0I7WUFBSVMsY0FBY0o7WUFBa0JLLFlBQVlKO1lBQWdCSyxPQUFPO2dCQUFFQyxPQUFPO2dCQUFRQyxRQUFRO2dCQUFRQyxTQUFTO2dCQUFRQyxnQkFBZ0I7Z0JBQVVDLFlBQVk7Z0JBQVVDLGVBQWU7WUFBUztzQkFDbE0sNEVBQUNDOzBCQUFHOzs7Ozs7Ozs7Ozs7Ozs7O0FBSU47R0FuQ014Qzs7UUEwQndDSCw0REFBUUE7OztLQTFCaERHOztBQW1ETixrS0FBa0s7QUFDbEssK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cuanM/YzhmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVN3aXBlIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlU3dpcGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQmxvZy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgQmxvZ1Bvc3RQcmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvQmxvZ1Bvc3RQcmV2aWV3JztcblxuXG5jb25zdCBCbG9nID0gKCB7IHBvc3RzIH0gKSA9PiB7XG5cblxuICAgIGxldCByb3dzID0gNDtcbiAgICBsZXQgY29sdW1ucyA9IDQ7XG5cdGNvbnN0IGdyaWQgPSBbXTtcblx0Zm9yIChsZXQgciA9IDA7IHIgPCByb3dzOyByKyspe1xuXHRsZXQgcm93ID0gW107XG5cblx0XHRmb3IgKGxldCBjID0gMDsgYyA8IGNvbHVtbnM7IGMrKyl7XG5cdFx0XHRjb25zdCBpbmRleCA9IHIgKiBjb2x1bW5zICsgYyA7XG5cdFx0XHRjb25zdCBwb3N0ID0gcG9zdHNbaW5kZXhdO1xuXG5cdFx0XHRpZiAocG9zdCkge1xuXHRcdFx0XHRyb3cucHVzaChcbiAgICAgICAgICAgICAgICA8QmxvZ1Bvc3RQcmV2aWV3IGtleT17YHBvc3QtJHtjfS0ke3J9YH0gaW1nPXtwb3N0LmRyYWZ0X3ZlcnNpb24uZmVhdHVyZWRfaW1hZ2V9IHRpdGxlPXtwb3N0LmRyYWZ0X3ZlcnNpb24udGl0bGV9IGRlc2NyaXB0aW9uPXtwb3N0LmRyYWZ0X3ZlcnNpb24udGV4dH0gc2x1Zz17cG9zdC5kcmFmdF92ZXJzaW9uLnNsdWd9IGRhdGU9e3Bvc3QucHVibGlzaGVkX2RhdGV9IGF1dGhvcj17cG9zdC5hdXRob3J9Lz5cblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHJvdy5sZW5ndGggPiAwKSB7XG5cdFx0Z3JpZC5wdXNoKFxuXHRcdFx0PGRpdiBrZXk9e2BncmlkLSR7cn1gfSBjbGFzc05hbWU9e3N0eWxlcy5ibG9nUG9zdFJvd30+e3Jvd308L2Rpdj5cblx0XHRcdCk7XG5cdFx0fVxuXHR9XG5cblx0Y29uc3QgeyBoYW5kbGVUb3VjaFN0YXJ0LCBoYW5kbGVUb3VjaEVuZCB9ID0gdXNlU3dpcGUoe29uTGVmdFN3aXBlOiAnL3Nob3AnLCBvblJpZ2h0U3dpcGU6ICdjb250YWN0Lyd9KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgaWQ9e3N0eWxlcy5ibG9nQ29udGFpbmVyfT5cblx0XHQ8ZGl2IG9uVG91Y2hTdGFydD17aGFuZGxlVG91Y2hTdGFydH0gb25Ub3VjaEVuZD17aGFuZGxlVG91Y2hFbmR9IHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19ID5cblx0XHQ8aDE+YmxvZzwvaDE+XG5cdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdClcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIC8vIEZldGNoIGJsb2cgcG9zdHMgYXQgYnVpbGQgdGltZVxuICBjb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwczovL2x1Y2lhLWNhc3Ryby5jb20nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMic7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2dldC1wb3N0LWNvbnRlbnRgKTtcbiAgY29uc3QgcG9zdHMgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKCdQb3N0cyBhcyB0aGV5IGFycml2ZTogJywgcG9zdHMpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgcG9zdHMgfSwgLy8gV2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgcmV2YWxpZGF0ZTogMTAgLy8gSVNSOiBSZWdlbmVyYXRlIHRoZSBwYWdlIGV2ZXJ5IDEwIHNlY29uZHMgaWYgbmVlZGVkXG4gIH07XG59XG5cbi8vIFVzZSBnZXRTdGF0aWNQYXRocyB0byBwcmUtcmVuZGVyIHBhZ2VzIGZvciBlYWNoIHNldCBvZiBwb3N0cy4gT3IgaGFuZGxlIHBhZ2luYXRpb24gY2xpZW50LXNpZGUsIGZldGNoaW5nIG5ldyBzZXRzIG9mIHBvc3RzIGFzIHRoZSB1c2VyIG5hdmlnYXRlcyBiZXR3ZWVuIHBhZ2VzLlxuZXhwb3J0IGRlZmF1bHQgQmxvZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN3aXBlIiwic3R5bGVzIiwiQmxvZ1Bvc3RQcmV2aWV3IiwiQmxvZyIsInBvc3RzIiwicm93cyIsImNvbHVtbnMiLCJncmlkIiwiciIsInJvdyIsImMiLCJpbmRleCIsInBvc3QiLCJwdXNoIiwiaW1nIiwiZHJhZnRfdmVyc2lvbiIsImZlYXR1cmVkX2ltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRleHQiLCJzbHVnIiwiZGF0ZSIsInB1Ymxpc2hlZF9kYXRlIiwiYXV0aG9yIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmxvZ1Bvc3RSb3ciLCJvbkxlZnRTd2lwZSIsIm9uUmlnaHRTd2lwZSIsImhhbmRsZVRvdWNoU3RhcnQiLCJoYW5kbGVUb3VjaEVuZCIsImlkIiwiYmxvZ0NvbnRhaW5lciIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/blog.js\n"));

/***/ })

});
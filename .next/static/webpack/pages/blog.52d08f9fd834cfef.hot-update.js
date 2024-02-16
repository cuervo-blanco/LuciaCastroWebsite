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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_useSwipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/useSwipe */ \"./src/components/useSwipe.js\");\n/* harmony import */ var _styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Blog.module.scss */ \"./src/styles/Blog.module.scss\");\n/* harmony import */ var _styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_BlogPostPreview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/BlogPostPreview */ \"./src/components/BlogPostPreview.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar Blog = function(param) {\n    var posts = param.posts;\n    _s();\n    var rows = 4;\n    var columns = 4;\n    var grid = [];\n    for(var r = 0; r < rows; r++){\n        var row = [];\n        for(var c = 0; c < columns; c++){\n            var index = r * columns + c;\n            var post = posts[index];\n            if (post) {\n                row.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPostPreview__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    img: post.published_version.featured_image,\n                    title: post.published_version.title,\n                    description: post.published_version.text,\n                    slug: post.published_version.slug,\n                    date: post.published_date,\n                    author: post.author\n                }, \"post-\".concat(c, \"-\").concat(r), false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, _this));\n            }\n        }\n        if (row.length > 0) {\n            grid.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_4___default().blogPostRow),\n                children: row\n            }, \"grid-\".concat(r), false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                lineNumber: 30,\n                columnNumber: 4\n            }, _this));\n        }\n    }\n    var _useSwipe = (0,_components_useSwipe__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        onLeftSwipe: \"/shop\",\n        onRightSwipe: \"contact/\"\n    }), handleTouchStart = _useSwipe.handleTouchStart, handleTouchEnd = _useSwipe.handleTouchEnd;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_4___default().blogContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onTouchStart: handleTouchStart,\n            onTouchEnd: handleTouchEnd,\n            style: {\n                width: \"100%\",\n                height: \"100%\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                flexDirection: \"column\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"blog\"\n                }, void 0, false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                    lineNumber: 40,\n                    columnNumber: 3\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: grid\n                }, void 0, false)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n            lineNumber: 39,\n            columnNumber: 3\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n        lineNumber: 38,\n        columnNumber: 3\n    }, _this);\n};\n_s(Blog, \"3mLwjldhEiX3cnh66Y+ArMirNgA=\", false, function() {\n    return [\n        _components_useSwipe__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Blog;\nvar __N_SSG = true;\n// Use getStaticPaths to pre-render pages for each set of posts. Or handle pagination client-side, fetching new sets of posts as the user navigates between pages.\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDb0I7QUFDRTtBQUNZO0FBRzVELElBQU1JLE9BQU87UUFBSUMsY0FBQUE7O0lBR2IsSUFBSUMsT0FBTztJQUNYLElBQUlDLFVBQVU7SUFFakIsSUFBTUMsT0FBTyxFQUFFO0lBRWYsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlILE1BQU1HLElBQUk7UUFDOUIsSUFBSUMsTUFBTSxFQUFFO1FBRVgsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlKLFNBQVNJLElBQUk7WUFDaEMsSUFBTUMsUUFBUUgsSUFBSUYsVUFBVUk7WUFDNUIsSUFBTUUsT0FBT1IsS0FBSyxDQUFDTyxNQUFNO1lBRXpCLElBQUlDLE1BQU07Z0JBQ1RILElBQUlJLElBQUksZUFDSSw4REFBQ1gsbUVBQWVBO29CQUF3QlksS0FBS0YsS0FBS0csaUJBQWlCLENBQUNDLGNBQWM7b0JBQUVDLE9BQU9MLEtBQUtHLGlCQUFpQixDQUFDRSxLQUFLO29CQUFFQyxhQUFhTixLQUFLRyxpQkFBaUIsQ0FBQ0ksSUFBSTtvQkFBRUMsTUFBTVIsS0FBS0csaUJBQWlCLENBQUNLLElBQUk7b0JBQUVDLE1BQU1ULEtBQUtVLGNBQWM7b0JBQUVDLFFBQVFYLEtBQUtXLE1BQU07bUJBQTlOLFFBQWFmLE9BQUxFLEdBQUUsS0FBSyxPQUFGRjs7Ozs7WUFFaEQ7UUFDRDtRQUNBLElBQUlDLElBQUllLE1BQU0sR0FBRyxHQUFHO1lBQ3BCakIsS0FBS00sSUFBSSxlQUNSLDhEQUFDWTtnQkFBc0JDLFdBQVd6Qiw2RUFBa0I7MEJBQUdRO2VBQTdDLFFBQVUsT0FBRkQ7Ozs7O1FBRW5CO0lBQ0Q7SUFFQSxJQUE2Q1IsWUFBQUEsZ0VBQVFBLENBQUM7UUFBQzRCLGFBQWE7UUFBU0MsY0FBYztJQUFVLElBQTdGQyxtQkFBcUM5QixVQUFyQzhCLGtCQUFrQkMsaUJBQW1CL0IsVUFBbkIrQjtJQUUxQixxQkFDQyw4REFBQ047UUFBSU8sSUFBSS9CLCtFQUFvQjtrQkFDN0IsNEVBQUN3QjtZQUFJUyxjQUFjSjtZQUFrQkssWUFBWUo7WUFBZ0JLLE9BQU87Z0JBQUVDLE9BQU87Z0JBQVFDLFFBQVE7Z0JBQVFDLFNBQVM7Z0JBQVFDLGdCQUFnQjtnQkFBVUMsWUFBWTtnQkFBVUMsZUFBZTtZQUFTOzs4QkFDbE0sOERBQUNDOzhCQUFHOzs7Ozs7OEJBQ0U7OEJBQ0twQzs7Ozs7Ozs7Ozs7OztBQUtiO0dBeENNSjs7UUE0QndDSCw0REFBUUE7OztLQTVCaERHOztBQXdETixrS0FBa0s7QUFDbEssK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cuanM/YzhmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHVzZVN3aXBlIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlU3dpcGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQmxvZy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgQmxvZ1Bvc3RQcmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvQmxvZ1Bvc3RQcmV2aWV3JztcblxuXG5jb25zdCBCbG9nID0gKCB7IHBvc3RzIH0gKSA9PiB7XG5cblxuICAgIGxldCByb3dzID0gNDtcbiAgICBsZXQgY29sdW1ucyA9IDQ7XG5cblx0Y29uc3QgZ3JpZCA9IFtdO1xuXG5cdGZvciAobGV0IHIgPSAwOyByIDwgcm93czsgcisrKXtcblx0bGV0IHJvdyA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgYyA9IDA7IGMgPCBjb2x1bW5zOyBjKyspe1xuXHRcdFx0Y29uc3QgaW5kZXggPSByICogY29sdW1ucyArIGMgO1xuXHRcdFx0Y29uc3QgcG9zdCA9IHBvc3RzW2luZGV4XTtcblxuXHRcdFx0aWYgKHBvc3QpIHtcblx0XHRcdFx0cm93LnB1c2goXG4gICAgICAgICAgICAgICAgPEJsb2dQb3N0UHJldmlldyBrZXk9e2Bwb3N0LSR7Y30tJHtyfWB9IGltZz17cG9zdC5wdWJsaXNoZWRfdmVyc2lvbi5mZWF0dXJlZF9pbWFnZX0gdGl0bGU9e3Bvc3QucHVibGlzaGVkX3ZlcnNpb24udGl0bGV9IGRlc2NyaXB0aW9uPXtwb3N0LnB1Ymxpc2hlZF92ZXJzaW9uLnRleHR9IHNsdWc9e3Bvc3QucHVibGlzaGVkX3ZlcnNpb24uc2x1Z30gZGF0ZT17cG9zdC5wdWJsaXNoZWRfZGF0ZX0gYXV0aG9yPXtwb3N0LmF1dGhvcn0vPlxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAocm93Lmxlbmd0aCA+IDApIHtcblx0XHRncmlkLnB1c2goXG5cdFx0XHQ8ZGl2IGtleT17YGdyaWQtJHtyfWB9IGNsYXNzTmFtZT17c3R5bGVzLmJsb2dQb3N0Um93fT57cm93fTwvZGl2PlxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblxuXHRjb25zdCB7IGhhbmRsZVRvdWNoU3RhcnQsIGhhbmRsZVRvdWNoRW5kIH0gPSB1c2VTd2lwZSh7b25MZWZ0U3dpcGU6ICcvc2hvcCcsIG9uUmlnaHRTd2lwZTogJ2NvbnRhY3QvJ30pO1xuXG5cdHJldHVybiAoXG5cdFx0PGRpdiBpZD17c3R5bGVzLmJsb2dDb250YWluZXJ9PlxuXHRcdDxkaXYgb25Ub3VjaFN0YXJ0PXtoYW5kbGVUb3VjaFN0YXJ0fSBvblRvdWNoRW5kPXtoYW5kbGVUb3VjaEVuZH0gc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0gPlxuXHRcdDxoMT5ibG9nPC9oMT5cbiAgICAgICAgPD5cbiAgICAgICAgICAgIHtncmlkfVxuICAgICAgICA8Lz5cblx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgLy8gRmV0Y2ggYmxvZyBwb3N0cyBhdCBidWlsZCB0aW1lXG4gIGNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2h0dHBzOi8vbHVjaWEtY2FzdHJvLmNvbScgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAyJztcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vZ2V0LXBvc3QtY29udGVudGApO1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgY29uc29sZS5sb2coJ1Bvc3RzIGFzIHRoZXkgYXJyaXZlOiAnLCBwb3N0cyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBwb3N0cyB9LCAvLyBXaWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgICByZXZhbGlkYXRlOiAxMCAvLyBJU1I6IFJlZ2VuZXJhdGUgdGhlIHBhZ2UgZXZlcnkgMTAgc2Vjb25kcyBpZiBuZWVkZWRcbiAgfTtcbn1cblxuLy8gVXNlIGdldFN0YXRpY1BhdGhzIHRvIHByZS1yZW5kZXIgcGFnZXMgZm9yIGVhY2ggc2V0IG9mIHBvc3RzLiBPciBoYW5kbGUgcGFnaW5hdGlvbiBjbGllbnQtc2lkZSwgZmV0Y2hpbmcgbmV3IHNldHMgb2YgcG9zdHMgYXMgdGhlIHVzZXIgbmF2aWdhdGVzIGJldHdlZW4gcGFnZXMuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3dpcGUiLCJzdHlsZXMiLCJCbG9nUG9zdFByZXZpZXciLCJCbG9nIiwicG9zdHMiLCJyb3dzIiwiY29sdW1ucyIsImdyaWQiLCJyIiwicm93IiwiYyIsImluZGV4IiwicG9zdCIsInB1c2giLCJpbWciLCJwdWJsaXNoZWRfdmVyc2lvbiIsImZlYXR1cmVkX2ltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRleHQiLCJzbHVnIiwiZGF0ZSIsInB1Ymxpc2hlZF9kYXRlIiwiYXV0aG9yIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmxvZ1Bvc3RSb3ciLCJvbkxlZnRTd2lwZSIsIm9uUmlnaHRTd2lwZSIsImhhbmRsZVRvdWNoU3RhcnQiLCJoYW5kbGVUb3VjaEVuZCIsImlkIiwiYmxvZ0NvbnRhaW5lciIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJoMSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/blog.js\n"));

/***/ })

});
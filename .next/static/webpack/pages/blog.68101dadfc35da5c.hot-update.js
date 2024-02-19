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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_useSwipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/useSwipe */ \"./src/components/useSwipe.js\");\n/* harmony import */ var _styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Blog.module.scss */ \"./src/styles/Blog.module.scss\");\n/* harmony import */ var _styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_BlogPostPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogPostPreview */ \"./src/components/BlogPostPreview.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Blog = function(param) {\n    var posts = param.posts, totalPosts = param.totalPosts, totalPages = param.totalPages;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var headerPost = posts[0];\n    var rows = 2;\n    var columns = 3;\n    var grid = [];\n    for(var _$r = 0; _$r < rows; _$r++){\n        var row = [];\n        for(var _$c = 0; _$c < columns; _$c++){\n            var index = _$r * columns + _$c;\n            var post = posts[index];\n            if (post) {\n                row.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPostPreview__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    img: post.published_version.featured_image,\n                    post_id: post.post_id,\n                    title: post.published_version.title,\n                    description: post.published_version.description,\n                    slug: post.published_version.slug,\n                    date: post.published_date,\n                    author: post.author\n                }, \"post-\".concat(_$c, \"-\").concat(_$r), false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                    lineNumber: 28,\n                    columnNumber: 21\n                }, _this));\n            }\n        }\n        if (row.length > 0) {\n            grid.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().blogPostRow),\n                children: row\n            }, \"grid-\".concat(_$r), false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                lineNumber: 41,\n                columnNumber: 17\n            }, _this));\n        }\n    }\n    var handleNext = function() {\n        router.push(\"/blog/page/2\");\n    };\n    var _useSwipe = (0,_components_useSwipe__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        onLeftSwipe: \"/shop\",\n        onRightSwipe: \"contact/\"\n    }), handleTouchStart = _useSwipe.handleTouchStart, handleTouchEnd = _useSwipe.handleTouchEnd;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().blogContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onTouchStart: handleTouchStart,\n            onTouchEnd: handleTouchEnd,\n            style: {\n                width: \"100%\",\n                height: \"100%\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                flexDirection: \"column\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"blog\"\n                }, void 0, false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: (_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().gridContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPostPreview__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            img: headerPost.published_version.featured_image,\n                            post_id: headerPost.post_id,\n                            title: headerPost.published_version.title,\n                            description: headerPost.published_version.description,\n                            slug: headerPost.published_version.slug,\n                            date: headerPost.published_date,\n                            author: headerPost.author\n                        }, \"post-\".concat(c, \"-\").concat(r), false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                            lineNumber: 59,\n                            columnNumber: 21\n                        }, _this),\n                        grid\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, _this),\n                totalPages > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleNext,\n                    children: \" Next\"\n                }, void 0, false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                    lineNumber: 71,\n                    columnNumber: 36\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n            lineNumber: 54,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, _this);\n};\n_s(Blog, \"eEZ4CrUXUa0/7Lj9sY4XvrLJvPs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _components_useSwipe__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Blog;\nvar __N_SSG = true;\n// Use getStaticPaths to pre-render pages for each set of posts. Or handle pagination client-side, fetching new sets of posts as the user navigates between pages.\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IHVzZVN3aXBlIGZyb20gJy4uL2NvbXBvbmVudHMvdXNlU3dpcGUnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQmxvZy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgQmxvZ1Bvc3RQcmV2aWV3IGZyb20gJy4uL2NvbXBvbmVudHMvQmxvZ1Bvc3RQcmV2aWV3JztcblxuXG5jb25zdCBCbG9nID0gKHsgcG9zdHMsIHRvdGFsUG9zdHMsIHRvdGFsUGFnZXMgfSkgPT4ge1xuXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBoZWFkZXJQb3N0ID0gcG9zdHNbMF07XG5cbiAgICBsZXQgcm93cyA9IDI7XG4gICAgbGV0IGNvbHVtbnMgPSAzO1xuXG4gICAgY29uc3QgZ3JpZCA9IFtdO1xuXG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCByb3dzOyByKyspIHtcbiAgICAgICAgbGV0IHJvdyA9IFtdO1xuXG4gICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgY29sdW1uczsgYysrKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHIgKiBjb2x1bW5zICsgYztcbiAgICAgICAgICAgIGNvbnN0IHBvc3QgPSBwb3N0c1tpbmRleF07XG5cbiAgICAgICAgICAgIGlmIChwb3N0KSB7XG4gICAgICAgICAgICAgICAgcm93LnB1c2goXG4gICAgICAgICAgICAgICAgICAgIDxCbG9nUG9zdFByZXZpZXcga2V5PXtgcG9zdC0ke2N9LSR7cn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nPXtwb3N0LnB1Ymxpc2hlZF92ZXJzaW9uLmZlYXR1cmVkX2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdF9pZD17cG9zdC5wb3N0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QucHVibGlzaGVkX3ZlcnNpb24udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5wdWJsaXNoZWRfdmVyc2lvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc9e3Bvc3QucHVibGlzaGVkX3ZlcnNpb24uc2x1Z31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e3Bvc3QucHVibGlzaGVkX2RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e3Bvc3QuYXV0aG9yfSAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJvdy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBncmlkLnB1c2goXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2BncmlkLSR7cn1gfSBjbGFzc05hbWU9e3N0eWxlcy5ibG9nUG9zdFJvd30+e3Jvd308L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xuICAgICAgICByb3V0ZXIucHVzaCgnL2Jsb2cvcGFnZS8yJylcbiAgICB9XG5cbiAgICBjb25zdCB7IGhhbmRsZVRvdWNoU3RhcnQsIGhhbmRsZVRvdWNoRW5kIH0gPSB1c2VTd2lwZSh7IG9uTGVmdFN3aXBlOiAnL3Nob3AnLCBvblJpZ2h0U3dpcGU6ICdjb250YWN0LycgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuYmxvZ0NvbnRhaW5lcn0+XG4gICAgICAgICAgICA8ZGl2IG9uVG91Y2hTdGFydD17aGFuZGxlVG91Y2hTdGFydH1cbiAgICAgICAgICAgICAgICBvblRvdWNoRW5kPXtoYW5kbGVUb3VjaEVuZH1cbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBoZWlnaHQ6ICcxMDAlJywgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fSA+XG4gICAgICAgICAgICAgICAgPGgxPmJsb2c8L2gxPlxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5ncmlkQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPEJsb2dQb3N0UHJldmlldyBrZXk9e2Bwb3N0LSR7Y30tJHtyfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWc9e2hlYWRlclBvc3QucHVibGlzaGVkX3ZlcnNpb24uZmVhdHVyZWRfaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3N0X2lkPXtoZWFkZXJQb3N0LnBvc3RfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17aGVhZGVyUG9zdC5wdWJsaXNoZWRfdmVyc2lvbi50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtoZWFkZXJQb3N0LnB1Ymxpc2hlZF92ZXJzaW9uLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1Zz17aGVhZGVyUG9zdC5wdWJsaXNoZWRfdmVyc2lvbi5zbHVnfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZT17aGVhZGVyUG9zdC5wdWJsaXNoZWRfZGF0ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dGhvcj17aGVhZGVyUG9zdC5hdXRob3J9IC8+XG5cbiAgICAgICAgICAgICAgICAgICAge2dyaWR9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dG90YWxQYWdlcyA+IDEgJiYgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVOZXh0fT4gTmV4dDwvYnV0dG9uPn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICAgIC8vIEZldGNoIGJsb2cgcG9zdHMgYXQgYnVpbGQgdGltZVxuICAgIGNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2h0dHBzOi8vbHVjaWEtY2FzdHJvLmNvbScgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAyJztcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgJHtiYXNlVXJsfS9hcGkvYmxvZy9wYWdlLzFgKTtcbiAgICBjb25zdCBwb3N0SW5mbyA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgICBjb25zdCBwb3N0cyA9IHBvc3RJbmZvLnBvc3RzO1xuICAgIGNvbnN0IHRvdGFsUG9zdHMgPSBwb3N0SW5mby50b3RhbFBvc3RzO1xuICAgIGNvbnN0IHRvdGFsUGFnZXMgPSBwb3N0SW5mby50b3RhbFBhZ2VzO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHsgcG9zdHMsIHRvdGFsUG9zdHMsIHRvdGFsUGFnZXMgfSwgLy8gV2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gICAgICAgIHJldmFsaWRhdGU6IDEwIC8vIElTUjogUmVnZW5lcmF0ZSB0aGUgcGFnZSBldmVyeSAxMCBzZWNvbmRzIGlmIG5lZWRlZFxuICAgIH07XG59XG5cbi8vIFVzZSBnZXRTdGF0aWNQYXRocyB0byBwcmUtcmVuZGVyIHBhZ2VzIGZvciBlYWNoIHNldCBvZiBwb3N0cy4gT3IgaGFuZGxlIHBhZ2luYXRpb24gY2xpZW50LXNpZGUsIGZldGNoaW5nIG5ldyBzZXRzIG9mIHBvc3RzIGFzIHRoZSB1c2VyIG5hdmlnYXRlcyBiZXR3ZWVuIHBhZ2VzLlxuZXhwb3J0IGRlZmF1bHQgQmxvZztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUm91dGVyIiwidXNlU3dpcGUiLCJzdHlsZXMiLCJCbG9nUG9zdFByZXZpZXciLCJCbG9nIiwicG9zdHMiLCJ0b3RhbFBvc3RzIiwidG90YWxQYWdlcyIsInJvdXRlciIsImhlYWRlclBvc3QiLCJyb3dzIiwiY29sdW1ucyIsImdyaWQiLCJyIiwicm93IiwiYyIsImluZGV4IiwicG9zdCIsInB1c2giLCJpbWciLCJwdWJsaXNoZWRfdmVyc2lvbiIsImZlYXR1cmVkX2ltYWdlIiwicG9zdF9pZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzbHVnIiwiZGF0ZSIsInB1Ymxpc2hlZF9kYXRlIiwiYXV0aG9yIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYmxvZ1Bvc3RSb3ciLCJoYW5kbGVOZXh0Iiwib25MZWZ0U3dpcGUiLCJvblJpZ2h0U3dpcGUiLCJoYW5kbGVUb3VjaFN0YXJ0IiwiaGFuZGxlVG91Y2hFbmQiLCJpZCIsImJsb2dDb250YWluZXIiLCJvblRvdWNoU3RhcnQiLCJvblRvdWNoRW5kIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJmbGV4RGlyZWN0aW9uIiwiaDEiLCJncmlkQ29udGFpbmVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/blog.js\n"));

/***/ })

});
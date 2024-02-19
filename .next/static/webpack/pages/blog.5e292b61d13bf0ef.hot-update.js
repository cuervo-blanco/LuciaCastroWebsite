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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_useSwipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/useSwipe */ \"./src/components/useSwipe.js\");\n/* harmony import */ var _styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Blog.module.scss */ \"./src/styles/Blog.module.scss\");\n/* harmony import */ var _styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_BlogPostPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogPostPreview */ \"./src/components/BlogPostPreview.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Blog = function(param) {\n    var posts = param.posts, totalPosts = param.totalPosts, totalPages = param.totalPages;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var headerPost = posts[0];\n    var rows = 2;\n    var columns = 3;\n    var grid = [];\n    for(var r = 0; r < rows; r++){\n        var row = [];\n        for(var c = 0; c < columns; c++){\n            var index = r * columns + c;\n            var post = posts[index];\n            if (post) {\n                if (index === 0) {\n                    continue;\n                } else {\n                    row.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPostPreview__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        img: post.published_version.featured_image,\n                        post_id: post.post_id,\n                        title: post.published_version.title,\n                        description: post.published_version.description,\n                        slug: post.published_version.slug,\n                        date: post.published_date,\n                        author: post.author\n                    }, \"post-\".concat(c, \"-\").concat(r), false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, _this));\n                }\n            }\n        }\n        if (row.length > 0) {\n            grid.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().blogPostRow),\n                children: row\n            }, \"grid-\".concat(r), false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                lineNumber: 45,\n                columnNumber: 17\n            }, _this));\n        }\n    }\n    var handleNext = function() {\n        router.push(\"/blog/page/2\");\n    };\n    var _useSwipe = (0,_components_useSwipe__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        onLeftSwipe: \"/shop\",\n        onRightSwipe: \"contact/\"\n    }), handleTouchStart = _useSwipe.handleTouchStart, handleTouchEnd = _useSwipe.handleTouchEnd;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().blogContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onTouchStart: handleTouchStart,\n            onTouchEnd: handleTouchEnd,\n            style: {\n                width: \"100%\",\n                height: \"100%\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                flexDirection: \"column\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"blog\"\n                }, void 0, false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                    lineNumber: 61,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: (_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().gridContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPostPreview__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            id: (_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().headerPost),\n                            img: headerPost.published_version.featured_image,\n                            post_id: headerPost.post_id,\n                            title: headerPost.published_version.title,\n                            description: headerPost.published_version.description,\n                            slug: headerPost.published_version.slug,\n                            date: headerPost.published_date,\n                            author: headerPost.author\n                        }, void 0, false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                            lineNumber: 63,\n                            columnNumber: 21\n                        }, _this),\n                        grid\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, _this),\n                totalPages > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleNext,\n                    children: \" Next\"\n                }, void 0, false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                    lineNumber: 76,\n                    columnNumber: 36\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n            lineNumber: 58,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n        lineNumber: 57,\n        columnNumber: 9\n    }, _this);\n};\n_s(Blog, \"eEZ4CrUXUa0/7Lj9sY4XvrLJvPs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _components_useSwipe__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Blog;\nvar __N_SSG = true;\n// Use getStaticPaths to pre-render pages for each set of posts. Or handle pagination client-side, fetching new sets of posts as the user navigates between pages.\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Li9zcmMvcGFnZXMvYmxvZy5qcz9jOGYwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB1c2VTd2lwZSBmcm9tICcuLi9jb21wb25lbnRzL3VzZVN3aXBlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0Jsb2cubW9kdWxlLnNjc3MnO1xuaW1wb3J0IEJsb2dQb3N0UHJldmlldyBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2dQb3N0UHJldmlldyc7XG5cblxuY29uc3QgQmxvZyA9ICh7IHBvc3RzLCB0b3RhbFBvc3RzLCB0b3RhbFBhZ2VzIH0pID0+IHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgaGVhZGVyUG9zdCA9IHBvc3RzWzBdO1xuXG4gICAgbGV0IHJvd3MgPSAyO1xuICAgIGxldCBjb2x1bW5zID0gMztcblxuICAgIGNvbnN0IGdyaWQgPSBbXTtcblxuICAgIGZvciAobGV0IHIgPSAwOyByIDwgcm93czsgcisrKSB7XG4gICAgICAgIGxldCByb3cgPSBbXTtcblxuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IGNvbHVtbnM7IGMrKykge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSByICogY29sdW1ucyArIGM7XG4gICAgICAgICAgICBjb25zdCBwb3N0ID0gcG9zdHNbaW5kZXhdO1xuXG4gICAgICAgICAgICBpZiAocG9zdCkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcm93LnB1c2goXG4gICAgICAgICAgICAgICAgICAgIDxCbG9nUG9zdFByZXZpZXcga2V5PXtgcG9zdC0ke2N9LSR7cn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nPXtwb3N0LnB1Ymxpc2hlZF92ZXJzaW9uLmZlYXR1cmVkX2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdF9pZD17cG9zdC5wb3N0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QucHVibGlzaGVkX3ZlcnNpb24udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5wdWJsaXNoZWRfdmVyc2lvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc9e3Bvc3QucHVibGlzaGVkX3ZlcnNpb24uc2x1Z31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e3Bvc3QucHVibGlzaGVkX2RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e3Bvc3QuYXV0aG9yfSAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyb3cubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZ3JpZC5wdXNoKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgZ3JpZC0ke3J9YH0gY2xhc3NOYW1lPXtzdHlsZXMuYmxvZ1Bvc3RSb3d9Pntyb3d9PC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9ibG9nL3BhZ2UvMicpXG4gICAgfVxuXG4gICAgY29uc3QgeyBoYW5kbGVUb3VjaFN0YXJ0LCBoYW5kbGVUb3VjaEVuZCB9ID0gdXNlU3dpcGUoeyBvbkxlZnRTd2lwZTogJy9zaG9wJywgb25SaWdodFN3aXBlOiAnY29udGFjdC8nIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLmJsb2dDb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBvblRvdWNoU3RhcnQ9e2hhbmRsZVRvdWNoU3RhcnR9XG4gICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17aGFuZGxlVG91Y2hFbmR9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0gPlxuICAgICAgICAgICAgICAgIDxoMT5ibG9nPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuZ3JpZENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxCbG9nUG9zdFByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtzdHlsZXMuaGVhZGVyUG9zdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZz17aGVhZGVyUG9zdC5wdWJsaXNoZWRfdmVyc2lvbi5mZWF0dXJlZF9pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RfaWQ9e2hlYWRlclBvc3QucG9zdF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtoZWFkZXJQb3N0LnB1Ymxpc2hlZF92ZXJzaW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2hlYWRlclBvc3QucHVibGlzaGVkX3ZlcnNpb24uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnPXtoZWFkZXJQb3N0LnB1Ymxpc2hlZF92ZXJzaW9uLnNsdWd9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlPXtoZWFkZXJQb3N0LnB1Ymxpc2hlZF9kYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0aG9yPXtoZWFkZXJQb3N0LmF1dGhvcn0gLz5cblxuICAgICAgICAgICAgICAgICAgICB7Z3JpZH1cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0b3RhbFBhZ2VzID4gMSAmJiA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZU5leHR9PiBOZXh0PC9idXR0b24+fVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gICAgLy8gRmV0Y2ggYmxvZyBwb3N0cyBhdCBidWlsZCB0aW1lXG4gICAgY29uc3QgYmFzZVVybCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAnaHR0cHM6Ly9sdWNpYS1jYXN0cm8uY29tJyA6ICdodHRwOi8vbG9jYWxob3N0OjMwMDInO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke2Jhc2VVcmx9L2FwaS9ibG9nL3BhZ2UvMWApO1xuICAgIGNvbnN0IHBvc3RJbmZvID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIGNvbnN0IHBvc3RzID0gcG9zdEluZm8ucG9zdHM7XG4gICAgY29uc3QgdG90YWxQb3N0cyA9IHBvc3RJbmZvLnRvdGFsUG9zdHM7XG4gICAgY29uc3QgdG90YWxQYWdlcyA9IHBvc3RJbmZvLnRvdGFsUGFnZXM7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczogeyBwb3N0cywgdG90YWxQb3N0cywgdG90YWxQYWdlcyB9LCAvLyBXaWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgICAgICAgcmV2YWxpZGF0ZTogMTAgLy8gSVNSOiBSZWdlbmVyYXRlIHRoZSBwYWdlIGV2ZXJ5IDEwIHNlY29uZHMgaWYgbmVlZGVkXG4gICAgfTtcbn1cblxuLy8gVXNlIGdldFN0YXRpY1BhdGhzIHRvIHByZS1yZW5kZXIgcGFnZXMgZm9yIGVhY2ggc2V0IG9mIHBvc3RzLiBPciBoYW5kbGUgcGFnaW5hdGlvbiBjbGllbnQtc2lkZSwgZmV0Y2hpbmcgbmV3IHNldHMgb2YgcG9zdHMgYXMgdGhlIHVzZXIgbmF2aWdhdGVzIGJldHdlZW4gcGFnZXMuXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJ1c2VTd2lwZSIsInN0eWxlcyIsIkJsb2dQb3N0UHJldmlldyIsIkJsb2ciLCJwb3N0cyIsInRvdGFsUG9zdHMiLCJ0b3RhbFBhZ2VzIiwicm91dGVyIiwiaGVhZGVyUG9zdCIsInJvd3MiLCJjb2x1bW5zIiwiZ3JpZCIsInIiLCJyb3ciLCJjIiwiaW5kZXgiLCJwb3N0IiwicHVzaCIsImltZyIsInB1Ymxpc2hlZF92ZXJzaW9uIiwiZmVhdHVyZWRfaW1hZ2UiLCJwb3N0X2lkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNsdWciLCJkYXRlIiwicHVibGlzaGVkX2RhdGUiLCJhdXRob3IiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJibG9nUG9zdFJvdyIsImhhbmRsZU5leHQiLCJvbkxlZnRTd2lwZSIsIm9uUmlnaHRTd2lwZSIsImhhbmRsZVRvdWNoU3RhcnQiLCJoYW5kbGVUb3VjaEVuZCIsImlkIiwiYmxvZ0NvbnRhaW5lciIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJoMSIsImdyaWRDb250YWluZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/blog.js\n"));

/***/ })

});
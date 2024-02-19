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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_useSwipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/useSwipe */ \"./src/components/useSwipe.js\");\n/* harmony import */ var _styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Blog.module.scss */ \"./src/styles/Blog.module.scss\");\n/* harmony import */ var _styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_BlogPostPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/BlogPostPreview */ \"./src/components/BlogPostPreview.js\");\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar Blog = function(param) {\n    var posts = param.posts, totalPosts = param.totalPosts, totalPages = param.totalPages;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var headerPost = posts[0];\n    var rows = 2;\n    var columns = 3;\n    var grid = [];\n    for(var r = 0; r < rows; r++){\n        var row = [];\n        for(var c = 0; c < columns; c++){\n            var index = r * columns + c;\n            var post = posts[index];\n            if (post) {\n                if (index === 0) {\n                    continue;\n                } else {\n                    row.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPostPreview__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        isFeatured: false,\n                        img: post.published_version.featured_image,\n                        post_id: post.post_id,\n                        title: post.published_version.title,\n                        description: post.published_version.description,\n                        slug: post.published_version.slug,\n                        date: post.published_date,\n                        author: post.author\n                    }, \"post-\".concat(c, \"-\").concat(r), false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                        lineNumber: 31,\n                        columnNumber: 21\n                    }, _this));\n                }\n            }\n        }\n        if (row.length > 0) {\n            grid.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().blogPostRow),\n                children: row\n            }, \"grid-\".concat(r), false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, _this));\n        }\n    }\n    var handleNext = function() {\n        router.push(\"/blog/page/2\");\n    };\n    var _useSwipe = (0,_components_useSwipe__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n        onLeftSwipe: \"/shop\",\n        onRightSwipe: \"contact/\"\n    }), handleTouchStart = _useSwipe.handleTouchStart, handleTouchEnd = _useSwipe.handleTouchEnd;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().blogContainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            onTouchStart: handleTouchStart,\n            onTouchEnd: handleTouchEnd,\n            style: {\n                width: \"100%\",\n                height: \"100%\",\n                display: \"flex\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                flexDirection: \"column\"\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"blog\"\n                }, void 0, false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                    lineNumber: 62,\n                    columnNumber: 17\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: (_styles_Blog_module_scss__WEBPACK_IMPORTED_MODULE_5___default().gridContainer),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BlogPostPreview__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            isFeatued: true,\n                            img: headerPost.published_version.featured_image,\n                            post_id: headerPost.post_id,\n                            title: headerPost.published_version.title,\n                            description: headerPost.published_version.description,\n                            slug: headerPost.published_version.slug\n                        }, void 0, false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                            lineNumber: 64,\n                            columnNumber: 21\n                        }, _this),\n                        grid\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                    lineNumber: 63,\n                    columnNumber: 17\n                }, _this),\n                totalPages > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleNext,\n                    children: \" Next\"\n                }, void 0, false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n                    lineNumber: 76,\n                    columnNumber: 36\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n            lineNumber: 59,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/blog.js\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, _this);\n};\n_s(Blog, \"eEZ4CrUXUa0/7Lj9sY4XvrLJvPs=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        _components_useSwipe__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = Blog;\nvar __N_SSG = true;\n// Use getStaticPaths to pre-render pages for each set of posts. Or handle pagination client-side, fetching new sets of posts as the user navigates between pages.\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNBO0FBQ007QUFDRTtBQUNZO0FBRzVELElBQU1NLE9BQU87UUFBR0MsY0FBQUEsT0FBT0MsbUJBQUFBLFlBQVlDLG1CQUFBQTs7SUFFL0IsSUFBTUMsU0FBU1Isc0RBQVNBO0lBRXhCLElBQU1TLGFBQWFKLEtBQUssQ0FBQyxFQUFFO0lBRTNCLElBQUlLLE9BQU87SUFDWCxJQUFJQyxVQUFVO0lBRWQsSUFBTUMsT0FBTyxFQUFFO0lBRWYsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlILE1BQU1HLElBQUs7UUFDM0IsSUFBSUMsTUFBTSxFQUFFO1FBRVosSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlKLFNBQVNJLElBQUs7WUFDOUIsSUFBTUMsUUFBUUgsSUFBSUYsVUFBVUk7WUFDNUIsSUFBTUUsT0FBT1osS0FBSyxDQUFDVyxNQUFNO1lBRXpCLElBQUlDLE1BQU07Z0JBQ04sSUFBSUQsVUFBVSxHQUFHO29CQUNqQjtnQkFDQSxPQUFPO29CQUNQRixJQUFJSSxJQUFJLGVBQ0osOERBQUNmLG1FQUFlQTt3QkFDWmdCLFlBQVk7d0JBQ1pDLEtBQUtILEtBQUtJLGlCQUFpQixDQUFDQyxjQUFjO3dCQUMxQ0MsU0FBU04sS0FBS00sT0FBTzt3QkFDckJDLE9BQU9QLEtBQUtJLGlCQUFpQixDQUFDRyxLQUFLO3dCQUNuQ0MsYUFBYVIsS0FBS0ksaUJBQWlCLENBQUNJLFdBQVc7d0JBQy9DQyxNQUFNVCxLQUFLSSxpQkFBaUIsQ0FBQ0ssSUFBSTt3QkFDakNDLE1BQU1WLEtBQUtXLGNBQWM7d0JBQ3pCQyxRQUFRWixLQUFLWSxNQUFNO3VCQVJELFFBQWFoQixPQUFMRSxHQUFFLEtBQUssT0FBRkY7Ozs7O2dCQVV2QztZQUNKO1FBQ0o7UUFDQSxJQUFJQyxJQUFJZ0IsTUFBTSxHQUFHLEdBQUc7WUFDaEJsQixLQUFLTSxJQUFJLGVBQ0wsOERBQUNhO2dCQUFzQkMsV0FBVzlCLDZFQUFrQjswQkFBR1k7ZUFBN0MsUUFBVSxPQUFGRDs7Ozs7UUFFMUI7SUFDSjtJQUVBLElBQU1xQixhQUFhO1FBQ2YxQixPQUFPVSxJQUFJLENBQUM7SUFDaEI7SUFFQSxJQUE2Q2pCLFlBQUFBLGdFQUFRQSxDQUFDO1FBQUVrQyxhQUFhO1FBQVNDLGNBQWM7SUFBVyxJQUEvRkMsbUJBQXFDcEMsVUFBckNvQyxrQkFBa0JDLGlCQUFtQnJDLFVBQW5CcUM7SUFFMUIscUJBQ0ksOERBQUNQO1FBQUlRLElBQUlyQywrRUFBb0I7a0JBQ3pCLDRFQUFDNkI7WUFBSVUsY0FBY0o7WUFDZkssWUFBWUo7WUFDWkssT0FBTztnQkFBRUMsT0FBTztnQkFBUUMsUUFBUTtnQkFBUUMsU0FBUztnQkFBUUMsZ0JBQWdCO2dCQUFVQyxZQUFZO2dCQUFVQyxlQUFlO1lBQVM7OzhCQUNqSSw4REFBQ0M7OEJBQUc7Ozs7Ozs4QkFDSiw4REFBQ25CO29CQUFJUSxJQUFJckMsK0VBQW9COztzQ0FDekIsOERBQUNDLG1FQUFlQTs0QkFDWmlELFdBQVc7NEJBQ1hoQyxLQUFLWCxXQUFXWSxpQkFBaUIsQ0FBQ0MsY0FBYzs0QkFDaERDLFNBQVNkLFdBQVdjLE9BQU87NEJBQzNCQyxPQUFPZixXQUFXWSxpQkFBaUIsQ0FBQ0csS0FBSzs0QkFDekNDLGFBQWFoQixXQUFXWSxpQkFBaUIsQ0FBQ0ksV0FBVzs0QkFDckRDLE1BQU1qQixXQUFXWSxpQkFBaUIsQ0FBQ0ssSUFBSTs7Ozs7O3dCQUcxQ2Q7Ozs7Ozs7Z0JBR0pMLGFBQWEsbUJBQUssOERBQUM4QztvQkFBT0MsU0FBU3BCOzhCQUFZOzs7Ozs7Ozs7Ozs7Ozs7OztBQUloRTtHQXhFTTlCOztRQUVhSixrREFBU0E7UUE2Q3FCQyw0REFBUUE7OztLQS9DbkRHOztBQTJGTixrS0FBa0s7QUFDbEssK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2Jsb2cuanM/YzhmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgdXNlU3dpcGUgZnJvbSAnLi4vY29tcG9uZW50cy91c2VTd2lwZSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9CbG9nLm1vZHVsZS5zY3NzJztcbmltcG9ydCBCbG9nUG9zdFByZXZpZXcgZnJvbSAnLi4vY29tcG9uZW50cy9CbG9nUG9zdFByZXZpZXcnO1xuXG5cbmNvbnN0IEJsb2cgPSAoeyBwb3N0cywgdG90YWxQb3N0cywgdG90YWxQYWdlcyB9KSA9PiB7XG5cbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIGNvbnN0IGhlYWRlclBvc3QgPSBwb3N0c1swXTtcblxuICAgIGxldCByb3dzID0gMjtcbiAgICBsZXQgY29sdW1ucyA9IDM7XG5cbiAgICBjb25zdCBncmlkID0gW107XG5cbiAgICBmb3IgKGxldCByID0gMDsgciA8IHJvd3M7IHIrKykge1xuICAgICAgICBsZXQgcm93ID0gW107XG5cbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCBjb2x1bW5zOyBjKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gciAqIGNvbHVtbnMgKyBjO1xuICAgICAgICAgICAgY29uc3QgcG9zdCA9IHBvc3RzW2luZGV4XTtcblxuICAgICAgICAgICAgaWYgKHBvc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdy5wdXNoKFxuICAgICAgICAgICAgICAgICAgICA8QmxvZ1Bvc3RQcmV2aWV3IGtleT17YHBvc3QtJHtjfS0ke3J9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRmVhdHVyZWQ9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nPXtwb3N0LnB1Ymxpc2hlZF92ZXJzaW9uLmZlYXR1cmVkX2ltYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zdF9pZD17cG9zdC5wb3N0X2lkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Bvc3QucHVibGlzaGVkX3ZlcnNpb24udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9zdC5wdWJsaXNoZWRfdmVyc2lvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNsdWc9e3Bvc3QucHVibGlzaGVkX3ZlcnNpb24uc2x1Z31cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU9e3Bvc3QucHVibGlzaGVkX2RhdGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRob3I9e3Bvc3QuYXV0aG9yfSAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyb3cubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZ3JpZC5wdXNoKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtgZ3JpZC0ke3J9YH0gY2xhc3NOYW1lPXtzdHlsZXMuYmxvZ1Bvc3RSb3d9Pntyb3d9PC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goJy9ibG9nL3BhZ2UvMicpXG4gICAgfVxuXG4gICAgY29uc3QgeyBoYW5kbGVUb3VjaFN0YXJ0LCBoYW5kbGVUb3VjaEVuZCB9ID0gdXNlU3dpcGUoeyBvbkxlZnRTd2lwZTogJy9zaG9wJywgb25SaWdodFN3aXBlOiAnY29udGFjdC8nIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBpZD17c3R5bGVzLmJsb2dDb250YWluZXJ9PlxuICAgICAgICAgICAgPGRpdiBvblRvdWNoU3RhcnQ9e2hhbmRsZVRvdWNoU3RhcnR9XG4gICAgICAgICAgICAgICAgb25Ub3VjaEVuZD17aGFuZGxlVG91Y2hFbmR9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScsIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBhbGlnbkl0ZW1zOiAnY2VudGVyJywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0gPlxuICAgICAgICAgICAgICAgIDxoMT5ibG9nPC9oMT5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuZ3JpZENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxCbG9nUG9zdFByZXZpZXdcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRmVhdHVlZD17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltZz17aGVhZGVyUG9zdC5wdWJsaXNoZWRfdmVyc2lvbi5mZWF0dXJlZF9pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc3RfaWQ9e2hlYWRlclBvc3QucG9zdF9pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtoZWFkZXJQb3N0LnB1Ymxpc2hlZF92ZXJzaW9uLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2hlYWRlclBvc3QucHVibGlzaGVkX3ZlcnNpb24uZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBzbHVnPXtoZWFkZXJQb3N0LnB1Ymxpc2hlZF92ZXJzaW9uLnNsdWd9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHtncmlkfVxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RvdGFsUGFnZXMgPiAxICYmIDxidXR0b24gb25DbGljaz17aGFuZGxlTmV4dH0+IE5leHQ8L2J1dHRvbj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICAvLyBGZXRjaCBibG9nIHBvc3RzIGF0IGJ1aWxkIHRpbWVcbiAgICBjb25zdCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/ICdodHRwczovL2x1Y2lhLWNhc3Ryby5jb20nIDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMic7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpL2Jsb2cvcGFnZS8xYCk7XG4gICAgY29uc3QgcG9zdEluZm8gPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgY29uc3QgcG9zdHMgPSBwb3N0SW5mby5wb3N0cztcbiAgICBjb25zdCB0b3RhbFBvc3RzID0gcG9zdEluZm8udG90YWxQb3N0cztcbiAgICBjb25zdCB0b3RhbFBhZ2VzID0gcG9zdEluZm8udG90YWxQYWdlcztcblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IHBvc3RzLCB0b3RhbFBvc3RzLCB0b3RhbFBhZ2VzIH0sIC8vIFdpbGwgYmUgcGFzc2VkIHRvIHRoZSBwYWdlIGNvbXBvbmVudCBhcyBwcm9wc1xuICAgICAgICByZXZhbGlkYXRlOiAxMCAvLyBJU1I6IFJlZ2VuZXJhdGUgdGhlIHBhZ2UgZXZlcnkgMTAgc2Vjb25kcyBpZiBuZWVkZWRcbiAgICB9O1xufVxuXG4vLyBVc2UgZ2V0U3RhdGljUGF0aHMgdG8gcHJlLXJlbmRlciBwYWdlcyBmb3IgZWFjaCBzZXQgb2YgcG9zdHMuIE9yIGhhbmRsZSBwYWdpbmF0aW9uIGNsaWVudC1zaWRlLCBmZXRjaGluZyBuZXcgc2V0cyBvZiBwb3N0cyBhcyB0aGUgdXNlciBuYXZpZ2F0ZXMgYmV0d2VlbiBwYWdlcy5cbmV4cG9ydCBkZWZhdWx0IEJsb2c7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInVzZVN3aXBlIiwic3R5bGVzIiwiQmxvZ1Bvc3RQcmV2aWV3IiwiQmxvZyIsInBvc3RzIiwidG90YWxQb3N0cyIsInRvdGFsUGFnZXMiLCJyb3V0ZXIiLCJoZWFkZXJQb3N0Iiwicm93cyIsImNvbHVtbnMiLCJncmlkIiwiciIsInJvdyIsImMiLCJpbmRleCIsInBvc3QiLCJwdXNoIiwiaXNGZWF0dXJlZCIsImltZyIsInB1Ymxpc2hlZF92ZXJzaW9uIiwiZmVhdHVyZWRfaW1hZ2UiLCJwb3N0X2lkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInNsdWciLCJkYXRlIiwicHVibGlzaGVkX2RhdGUiLCJhdXRob3IiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJibG9nUG9zdFJvdyIsImhhbmRsZU5leHQiLCJvbkxlZnRTd2lwZSIsIm9uUmlnaHRTd2lwZSIsImhhbmRsZVRvdWNoU3RhcnQiLCJoYW5kbGVUb3VjaEVuZCIsImlkIiwiYmxvZ0NvbnRhaW5lciIsIm9uVG91Y2hTdGFydCIsIm9uVG91Y2hFbmQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJoMSIsImdyaWRDb250YWluZXIiLCJpc0ZlYXR1ZWQiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/blog.js\n"));

/***/ })

});
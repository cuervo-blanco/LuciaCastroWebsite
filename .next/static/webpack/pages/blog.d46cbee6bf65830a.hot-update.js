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

/***/ "./src/components/BlogPostPreview.js":
/*!*******************************************!*\
  !*** ./src/components/BlogPostPreview.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BlogPostPreview; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/BlogPostPreview.module.scss */ \"./src/styles/BlogPostPreview.module.scss\");\n/* harmony import */ var _styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _s = $RefreshSig$();\n\n\nfunction BlogPostPreview(param) {\n    var isFeatured = param.isFeatured, img = param.img, post_id = param.post_id, title = param.title, description = param.description, slug = param.slug, date = param.date, author = param.author;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), 2), published_date = _useState[0], setPublishedDate = _useState[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var stripDate = function stripDate() {\n            var new_date = [];\n            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n            try {\n                for(var _iterator = date[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){\n                    var _char = _step.value;\n                    if (_char === \"T\") {\n                        break;\n                    } else {\n                        new_date.push(_char);\n                    }\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally{\n                try {\n                    if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n                        _iterator[\"return\"]();\n                    }\n                } finally{\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n            ;\n            setPublishedDate(new_date.join(\"\"));\n        };\n        stripDate();\n    }, []);\n    var className = \"\".concat(isFeatured ? \"styles.featured\" : \"styles.regular\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default().blogPostPreviewContainer),\n        className: className,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: (_styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default().imgFrame),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/blog/\".concat(post_id),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            alt: \"\".concat(title, \"'s post front image\"),\n                            src: img\n                        }, void 0, false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                            lineNumber: 41,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                        lineNumber: 40,\n                        columnNumber: 25\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                    lineNumber: 39,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                lineNumber: 38,\n                columnNumber: 18\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    id: (_styles_BlogPostPreview_module_scss__WEBPACK_IMPORTED_MODULE_3___default().textFrame),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"/blog/\".concat(post_id),\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                            lineNumber: 48,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                            lineNumber: 49,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: published_date\n                        }, void 0, false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                            lineNumber: 50,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: author\n                        }, void 0, false, {\n                            fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                            lineNumber: 51,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                    lineNumber: 47,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n                lineNumber: 46,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/components/BlogPostPreview.js\",\n        lineNumber: 36,\n        columnNumber: 14\n    }, this);\n}\n_s(BlogPostPreview, \"ceKpsCvYt3/oxyrW2SVPc/80edQ=\");\n_c = BlogPostPreview;\nvar _c;\n$RefreshReg$(_c, \"BlogPostPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9CbG9nUG9zdFByZXZpZXcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDTztBQUkzQyxTQUFTSSxnQkFDcEIsS0FBbUU7UUFBbEVDLGFBQUQsTUFBQ0EsWUFBWUMsTUFBYixNQUFhQSxLQUFLQyxVQUFsQixNQUFrQkEsU0FBU0MsUUFBM0IsTUFBMkJBLE9BQU9DLGNBQWxDLE1BQWtDQSxhQUFhQyxPQUEvQyxNQUErQ0EsTUFBTUMsT0FBckQsTUFBcURBLE1BQU1DLFNBQTNELE1BQTJEQTs7SUFFM0QsSUFBMkNWLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxTQUE3Q1csaUJBQW9DWCxjQUFwQlksbUJBQW9CWjtJQUczQ0QsZ0RBQVNBLENBQUU7WUFDRWMsWUFBVCxTQUFTQTtZQUNMLElBQUlDLFdBQVcsRUFBRTtnQkFFWjs7Z0JBQUwsUUFBSyxZQUFZTCx5QkFBWix3R0FBa0I7b0JBQWxCLElBQUlNLFFBQUo7b0JBQ0QsSUFBSUEsVUFBUyxLQUFJO3dCQUNiO29CQUNKLE9BQU87d0JBQ0hELFNBQVNFLElBQUksQ0FBQ0Q7b0JBQ2xCO2dCQUNKOztnQkFOSztnQkFBQTs7O3lCQUFBO3dCQUFBOzs7d0JBQUE7OEJBQUE7Ozs7O1lBUUxILGlCQUFpQkUsU0FBU0csSUFBSSxDQUFDO1FBQ25DO1FBRUFKO0lBRUosR0FBRyxFQUFFO0lBRUwsSUFBTUssWUFBWSxHQUFxRCxPQUFsRGYsYUFBYSxvQkFBb0I7SUFHdEQscUJBRVMsOERBQUNnQjtRQUFJQyxJQUFJbkIscUdBQStCO1FBQUVpQixXQUFXQTs7MEJBRWpELDhEQUFDSTswQkFDRSw0RUFBQ0g7b0JBQUlDLElBQUluQixxRkFBZTs4QkFDcEIsNEVBQUN1Qjt3QkFBRUMsTUFBTSxTQUFpQixPQUFScEI7a0NBQ2xCLDRFQUFDRDs0QkFBSXNCLEtBQUssR0FBUyxPQUFOcEIsT0FBTTs0QkFBc0JxQixLQUFLdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLdEQsOERBQUNrQjswQkFDRyw0RUFBQ0g7b0JBQUlDLElBQUluQixzRkFBZ0I7O3NDQUNyQiw4REFBQ3VCOzRCQUFFQyxNQUFNLFNBQWlCLE9BQVJwQjtzQ0FBWUM7Ozs7OztzQ0FDOUIsOERBQUN1QjtzQ0FBR3RCOzs7Ozs7c0NBQ0osOERBQUNzQjtzQ0FBR2xCOzs7Ozs7c0NBQ0osOERBQUNrQjtzQ0FBR25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU01QjtHQW5Ed0JSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0Jsb2dQb3N0UHJldmlldy5qcz81NjU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvQmxvZ1Bvc3RQcmV2aWV3Lm1vZHVsZS5zY3NzJ1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ1Bvc3RQcmV2aWV3IChcbiAgICB7aXNGZWF0dXJlZCwgaW1nLCBwb3N0X2lkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHNsdWcsIGRhdGUsIGF1dGhvciB9KXtcblxuICAgIGNvbnN0IFtwdWJsaXNoZWRfZGF0ZSwgc2V0UHVibGlzaGVkRGF0ZV0gPSB1c2VTdGF0ZSgnJyk7XG5cblxuICAgIHVzZUVmZmVjdCAoKCkgPT4ge1xuICAgICAgICBmdW5jdGlvbiBzdHJpcERhdGUoKSB7XG4gICAgICAgICAgICBsZXQgbmV3X2RhdGUgPSBbXTtcblxuICAgICAgICAgICAgZm9yIChsZXQgY2hhciBvZiBkYXRlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoYXIgPT09ICdUJyl7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld19kYXRlLnB1c2goY2hhcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgc2V0UHVibGlzaGVkRGF0ZShuZXdfZGF0ZS5qb2luKCcnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdHJpcERhdGUoKTtcblxuICAgIH0sIFtdKVxuXG4gICAgY29uc3QgY2xhc3NOYW1lID0gYCR7aXNGZWF0dXJlZCA/ICdzdHlsZXMuZmVhdHVyZWQnIDogJ3N0eWxlcy5yZWd1bGFyJ31gO1xuXG5cbiAgICByZXR1cm4oXG5cbiAgICAgICAgICAgICA8ZGl2IGlkPXtzdHlsZXMuYmxvZ1Bvc3RQcmV2aWV3Q29udGFpbmVyfSBjbGFzc05hbWU9e2NsYXNzTmFtZX0+XG5cbiAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy5pbWdGcmFtZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgL2Jsb2cvJHtwb3N0X2lkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9e2Ake3RpdGxlfSdzIHBvc3QgZnJvbnQgaW1hZ2VgfSBzcmM9e2ltZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9e3N0eWxlcy50ZXh0RnJhbWV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YC9ibG9nLyR7cG9zdF9pZH1gfT57dGl0bGV9PC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntwdWJsaXNoZWRfZGF0ZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57YXV0aG9yfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiQmxvZ1Bvc3RQcmV2aWV3IiwiaXNGZWF0dXJlZCIsImltZyIsInBvc3RfaWQiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwic2x1ZyIsImRhdGUiLCJhdXRob3IiLCJwdWJsaXNoZWRfZGF0ZSIsInNldFB1Ymxpc2hlZERhdGUiLCJzdHJpcERhdGUiLCJuZXdfZGF0ZSIsImNoYXIiLCJwdXNoIiwiam9pbiIsImNsYXNzTmFtZSIsImRpdiIsImlkIiwiYmxvZ1Bvc3RQcmV2aWV3Q29udGFpbmVyIiwic2VjdGlvbiIsImltZ0ZyYW1lIiwiYSIsImhyZWYiLCJhbHQiLCJzcmMiLCJ0ZXh0RnJhbWUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/BlogPostPreview.js\n"));

/***/ })

});
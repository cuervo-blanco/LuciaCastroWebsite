"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gallery",{

/***/ "./src/components/useSwipe.js":
/*!************************************!*\
  !*** ./src/components/useSwipe.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nvar useSwipe = function(param) {\n    var onLeftSwipe = param.onLeftSwipe, onRightSwipe = param.onRightSwipe, _param_threshold = param.threshold, threshold = _param_threshold === void 0 ? 50 : _param_threshold;\n    _s();\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_2__._)((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null), 2), touchStartX = _useState[0], setTouchStartX = _useState[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function() {\n        var handleTouchMove = function(e) {\n            e.preventDefault();\n        };\n        document.addEventListener(\"touchmove\", handleTouchMove, {\n            passive: false\n        });\n        return function() {\n            document.removeEventListener(\"touchmove\", handleTouchMove);\n        };\n    }, []);\n    var handleTouchStart = function(e) {\n        setTouchStartX(e.targetTouches[0].clientX);\n    };\n    var handleTouchEnd = function(e) {\n        var touchEndX = e.changedTouches[0].clientX;\n        if (touchStartX - touchEndX > threshold) {\n            // Left Swipe\n            if (onLeftSwipe) router.push(onLeftSwipe);\n        } else if (touchEndX - touchStartX > threshold) {\n            // Right Swipe\n            if (onRightSwipe) router.push(onRightSwipe);\n        }\n    };\n    return {\n        handleTouchStart: handleTouchStart,\n        handleTouchEnd: handleTouchEnd\n    };\n};\n_s(useSwipe, \"oAL+HF+IOBvYYMF4rDnFBwVhZrU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (useSwipe);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy91c2VTd2lwZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0QztBQUNKO0FBRXhDLElBQU1HLFdBQVc7UUFBR0Msb0JBQUFBLGFBQWFDLHFCQUFBQSx1Q0FBY0MsV0FBQUEsMENBQVk7O0lBQ3ZELElBQXNDTixZQUFBQSwrREFBQUEsQ0FBQUEsK0NBQVFBLENBQUMsV0FBeENPLGNBQStCUCxjQUFsQlEsaUJBQWtCUjtJQUN0QyxJQUFNUyxTQUFTUCxzREFBU0E7SUFFeEJELGdEQUFTQSxDQUFDO1FBQ04sSUFBTVMsa0JBQWtCLFNBQUNDO1lBQ3JCQSxFQUFFQyxjQUFjO1FBQ3BCO1FBQ0FDLFNBQVNDLGdCQUFnQixDQUFDLGFBQWFKLGlCQUFpQjtZQUFFSyxTQUFTO1FBQU07UUFDekUsT0FBTztZQUNIRixTQUFTRyxtQkFBbUIsQ0FBQyxhQUFhTjtRQUM5QztJQUNKLEdBQUcsRUFBRTtJQUVMLElBQU1PLG1CQUFtQixTQUFDTjtRQUN0QkgsZUFBZUcsRUFBRU8sYUFBYSxDQUFDLEVBQUUsQ0FBQ0MsT0FBTztJQUM3QztJQUVBLElBQU1DLGlCQUFpQixTQUFDVDtRQUNwQixJQUFNVSxZQUFZVixFQUFFVyxjQUFjLENBQUMsRUFBRSxDQUFDSCxPQUFPO1FBQzdDLElBQUlaLGNBQWNjLFlBQVlmLFdBQVc7WUFDckMsYUFBYTtZQUNiLElBQUlGLGFBQWFLLE9BQU9jLElBQUksQ0FBQ25CO1FBQ2pDLE9BQU8sSUFBSWlCLFlBQVlkLGNBQWNELFdBQVc7WUFDNUMsY0FBYztZQUNkLElBQUlELGNBQWNJLE9BQU9jLElBQUksQ0FBQ2xCO1FBQ2xDO0lBQ0o7SUFFQSxPQUFPO1FBQUVZLGtCQUFBQTtRQUFrQkcsZ0JBQUFBO0lBQWU7QUFDOUM7R0E5Qk1qQjs7UUFFYUQsa0RBQVNBOzs7QUE4QjVCLCtEQUFlQyxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3VzZVN3aXBlLmpzPzhlNjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgdXNlU3dpcGUgPSAoeyBvbkxlZnRTd2lwZSwgb25SaWdodFN3aXBlLCB0aHJlc2hvbGQgPSA1MCB9KSA9PiB7XG4gICAgY29uc3QgW3RvdWNoU3RhcnRYLCBzZXRUb3VjaFN0YXJ0WF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGhhbmRsZVRvdWNoTW92ZSA9IChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSk7XG4gICAgICAgIH07XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgaGFuZGxlVG91Y2hTdGFydCA9IChlKSA9PiB7XG4gICAgICAgIHNldFRvdWNoU3RhcnRYKGUudGFyZ2V0VG91Y2hlc1swXS5jbGllbnRYKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlVG91Y2hFbmQgPSAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0b3VjaEVuZFggPSBlLmNoYW5nZWRUb3VjaGVzWzBdLmNsaWVudFg7XG4gICAgICAgIGlmICh0b3VjaFN0YXJ0WCAtIHRvdWNoRW5kWCA+IHRocmVzaG9sZCkge1xuICAgICAgICAgICAgLy8gTGVmdCBTd2lwZVxuICAgICAgICAgICAgaWYgKG9uTGVmdFN3aXBlKSByb3V0ZXIucHVzaChvbkxlZnRTd2lwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodG91Y2hFbmRYIC0gdG91Y2hTdGFydFggPiB0aHJlc2hvbGQpIHtcbiAgICAgICAgICAgIC8vIFJpZ2h0IFN3aXBlXG4gICAgICAgICAgICBpZiAob25SaWdodFN3aXBlKSByb3V0ZXIucHVzaChvblJpZ2h0U3dpcGUpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiB7IGhhbmRsZVRvdWNoU3RhcnQsIGhhbmRsZVRvdWNoRW5kIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VTd2lwZTtcblxuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VSb3V0ZXIiLCJ1c2VTd2lwZSIsIm9uTGVmdFN3aXBlIiwib25SaWdodFN3aXBlIiwidGhyZXNob2xkIiwidG91Y2hTdGFydFgiLCJzZXRUb3VjaFN0YXJ0WCIsInJvdXRlciIsImhhbmRsZVRvdWNoTW92ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlVG91Y2hTdGFydCIsInRhcmdldFRvdWNoZXMiLCJjbGllbnRYIiwiaGFuZGxlVG91Y2hFbmQiLCJ0b3VjaEVuZFgiLCJjaGFuZ2VkVG91Y2hlcyIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/useSwipe.js\n"));

/***/ }),

/***/ "./src/pages/gallery.js":
/*!******************************!*\
  !*** ./src/pages/gallery.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSG: function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/_/_sliced_to_array */ \"./node_modules/@swc/helpers/esm/_sliced_to_array.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Gallery.module.scss */ \"./src/styles/Gallery.module.scss\");\n/* harmony import */ var _styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_SubMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SubMenu */ \"./src/components/SubMenu.js\");\n/* harmony import */ var _components_ContentLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ContentLoader */ \"./src/components/ContentLoader.js\");\n/* harmony import */ var _components_useSwipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/useSwipe */ \"./src/components/useSwipe.js\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar firstMenuOptions = [\n    \"ILLUSTRATIONS\",\n    \"PRODUCTS & SERVICES\",\n    \"CLIENTS\",\n    \"PRESS\"\n];\nvar secondMenuOptions = [\n    \"illustrations\",\n    \"posters\",\n    \"2d animation & motion graphics\",\n    \"character design\"\n];\nvar Gallery = function(props) {\n    _s();\n    var _useSwipe = (0,_components_useSwipe__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n        onLeftSwipe: \"/bio\",\n        onRightSwipe: \"/\"\n    }), handleTouchStart = _useSwipe.handleTouchStart, handleTouchEnd = _useSwipe.handleTouchEnd;\n    var _useState = (0,_swc_helpers_sliced_to_array__WEBPACK_IMPORTED_MODULE_5__._)((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"ILLUSTRATIONS\"), 2), currentOption = _useState[0], setCurrentOption = _useState[1];\n    var handleOptionChange = function(option) {\n        setCurrentOption(option);\n    };\n    console.log(currentOption);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: (_styles_Gallery_module_scss__WEBPACK_IMPORTED_MODULE_6___default().galleryContainer),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"gallery\"\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/gallery.js\",\n                lineNumber: 25,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_SubMenu__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                options: firstMenuOptions,\n                onChangeOption: handleOptionChange,\n                direction: \"horizontal\",\n                selected: currentOption,\n                id: \"GSM\"\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/gallery.js\",\n                lineNumber: 26,\n                columnNumber: 3\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ContentLoader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                toLoad: currentOption,\n                options: secondMenuOptions\n            }, void 0, false, {\n                fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/gallery.js\",\n                lineNumber: 27,\n                columnNumber: 3\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/soyingeniero/Documents/Applications/lucia-castro/src/pages/gallery.js\",\n        lineNumber: 24,\n        columnNumber: 3\n    }, _this);\n};\n_s(Gallery, \"T0afmDaFUWVSARhY6gvsretbEgU=\", false, function() {\n    return [\n        _components_useSwipe__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n    ];\n});\n_c = Gallery;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\nvar _c;\n$RefreshReg$(_c, \"Gallery\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZ2FsbGVyeS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDVTtBQUNQO0FBQ1k7QUFDVjtBQUU5QyxJQUFNTSxtQkFBbUI7SUFBQztJQUFpQjtJQUF1QjtJQUFXO0NBQVE7QUFDckYsSUFBTUMsb0JBQW9CO0lBQUM7SUFBaUI7SUFBVztJQUFrQztDQUFtQjtBQUU1RyxJQUFNQyxVQUFVLFNBQUNDOztJQUVoQixJQUE2Q0osWUFBQUEsZ0VBQVFBLENBQUM7UUFBQ0ssYUFBYTtRQUFRQyxjQUFjO0lBQUcsSUFBckZDLG1CQUFxQ1AsVUFBckNPLGtCQUFrQkMsaUJBQW1CUixVQUFuQlE7SUFHMUIsSUFBMENaLFlBQUFBLCtEQUFBQSxDQUFBQSwrQ0FBUUEsQ0FBQyxzQkFBNUNhLGdCQUFtQ2IsY0FBcEJjLG1CQUFvQmQ7SUFFMUMsSUFBTWUscUJBQXFCLFNBQUNDO1FBQzNCRixpQkFBaUJFO0lBQ2xCO0lBRUFDLFFBQVFDLEdBQUcsQ0FBQ0w7SUFFWixxQkFDQyw4REFBQ007UUFBSUMsSUFBSW5CLHFGQUF1Qjs7MEJBQ2hDLDhEQUFDcUI7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ3BCLDJEQUFPQTtnQkFBQ3FCLFNBQVNsQjtnQkFBa0JtQixnQkFBZ0JUO2dCQUFvQlUsV0FBVTtnQkFBYUMsVUFBVWI7Z0JBQWVPLElBQUc7Ozs7OzswQkFDM0gsOERBQUNqQixpRUFBYUE7Z0JBQUN3QixRQUFRZDtnQkFBZVUsU0FBU2pCOzs7Ozs7Ozs7Ozs7QUFHakQ7R0FwQk1DOztRQUV3Q0gsNERBQVFBOzs7S0FGaERHOztBQStCTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZ2FsbGVyeS5qcz8yNzRkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9ICBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9HYWxsZXJ5Lm1vZHVsZS5zY3NzJzsgXG5pbXBvcnQgU3ViTWVudSBmcm9tICcuLi9jb21wb25lbnRzL1N1Yk1lbnUnO1xuaW1wb3J0IENvbnRlbnRMb2FkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Db250ZW50TG9hZGVyJztcbmltcG9ydCB1c2VTd2lwZSBmcm9tICcuLi9jb21wb25lbnRzL3VzZVN3aXBlJztcblxuY29uc3QgZmlyc3RNZW51T3B0aW9ucyA9IFsnSUxMVVNUUkFUSU9OUycsICdQUk9EVUNUUyAmIFNFUlZJQ0VTJywgJ0NMSUVOVFMnLCAnUFJFU1MnXTtcbmNvbnN0IHNlY29uZE1lbnVPcHRpb25zID0gWydpbGx1c3RyYXRpb25zJywgJ3Bvc3RlcnMnLCAnMmQgYW5pbWF0aW9uICYgbW90aW9uIGdyYXBoaWNzJywgJ2NoYXJhY3RlciBkZXNpZ24nXTtcblxuY29uc3QgR2FsbGVyeSA9IChwcm9wcykgPT4ge1xuXG5cdGNvbnN0IHsgaGFuZGxlVG91Y2hTdGFydCwgaGFuZGxlVG91Y2hFbmQgfSA9IHVzZVN3aXBlKHtvbkxlZnRTd2lwZTogJy9iaW8nLCBvblJpZ2h0U3dpcGU6ICcvJ30pO1xuXG5cblx0Y29uc3QgW2N1cnJlbnRPcHRpb24sIHNldEN1cnJlbnRPcHRpb25dID0gdXNlU3RhdGUoJ0lMTFVTVFJBVElPTlMnKTtcblxuXHRjb25zdCBoYW5kbGVPcHRpb25DaGFuZ2UgPSAob3B0aW9uKSA9PiB7XG5cdFx0c2V0Q3VycmVudE9wdGlvbihvcHRpb24pO1xuXHR9XG5cblx0Y29uc29sZS5sb2coY3VycmVudE9wdGlvbik7XG5cblx0cmV0dXJuKFxuXHRcdDxkaXYgaWQ9e3N0eWxlcy5nYWxsZXJ5Q29udGFpbmVyfT5cblx0XHQ8aDE+Z2FsbGVyeTwvaDE+XG5cdFx0PFN1Yk1lbnUgb3B0aW9ucz17Zmlyc3RNZW51T3B0aW9uc30gb25DaGFuZ2VPcHRpb249e2hhbmRsZU9wdGlvbkNoYW5nZX0gZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiIHNlbGVjdGVkPXtjdXJyZW50T3B0aW9ufSBpZD1cIkdTTVwiLz5cblx0XHQ8Q29udGVudExvYWRlciB0b0xvYWQ9e2N1cnJlbnRPcHRpb259IG9wdGlvbnM9e3NlY29uZE1lbnVPcHRpb25zfSAvPlxuXHRcdDwvZGl2PlxuXHQpXG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nID8gJ2h0dHBzOi8vbHVjaWEtY2FzdHJvLmNvbScgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwJztcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7YmFzZVVybH0vYXBpL2dhbGxlcnlgKTtcbiAgY29uc3QgZ2FsbGVyeUltYWdlcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZ2FsbGVyeUltYWdlcyB9LCAvLyBXaWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FsbGVyeTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiU3ViTWVudSIsIkNvbnRlbnRMb2FkZXIiLCJ1c2VTd2lwZSIsImZpcnN0TWVudU9wdGlvbnMiLCJzZWNvbmRNZW51T3B0aW9ucyIsIkdhbGxlcnkiLCJwcm9wcyIsIm9uTGVmdFN3aXBlIiwib25SaWdodFN3aXBlIiwiaGFuZGxlVG91Y2hTdGFydCIsImhhbmRsZVRvdWNoRW5kIiwiY3VycmVudE9wdGlvbiIsInNldEN1cnJlbnRPcHRpb24iLCJoYW5kbGVPcHRpb25DaGFuZ2UiLCJvcHRpb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiaWQiLCJnYWxsZXJ5Q29udGFpbmVyIiwiaDEiLCJvcHRpb25zIiwib25DaGFuZ2VPcHRpb24iLCJkaXJlY3Rpb24iLCJzZWxlY3RlZCIsInRvTG9hZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/gallery.js\n"));

/***/ })

});
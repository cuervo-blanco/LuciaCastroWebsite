/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/gallery",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[9].use[4]!./src/styles/MediaInfoCard.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[9].use[4]!./src/styles/MediaInfoCard.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#MediaInfoCard_mediaInfoCardContainer__D8NHB {\\n  width: 320px;\\n  height: 256px;\\n  border: 1px solid #224E5B;\\n  background-color: #FFFFFF;\\n  margin: 8px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  font-family: sans-serif;\\n  transition: transform 300ms ease, box-shadow 300ms ease;\\n}\\n#MediaInfoCard_mediaInfoCardContainer__D8NHB:hover {\\n  cursor: pointer;\\n  transform: scale(1.15) translateX(4px) translateY(-8px);\\n  box-shadow: -10px 10px rgba(34, 78, 91, 0.7);\\n  z-index: 1000;\\n}\\n#MediaInfoCard_mediaInfoCardContainer__D8NHB img {\\n  height: 70%;\\n  width: 0;\\n}\\n#MediaInfoCard_mediaInfoCardContainer__D8NHB a {\\n  width: 100%;\\n  height: 30%;\\n  text-decoration: none;\\n  color: #224E5B;\\n  text-align: center;\\n  margin: 8px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/MediaInfoCard.module.scss\",\"webpack://src/styles/_variables.scss\"],\"names\":[],\"mappings\":\"AAGA;EACE,YAAA;EACA,aCyBQ;EDxBR,yBAAA;EACA,yBCNsB;EDOtB,WCiBS;EDhBT,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBCDuB;EDEvB,uDAAA;AAFF;AAIE;EACA,eAAA;EACA,uDAAA;EACA,4CAAA;EACA,aAAA;AAFF;AAWE;EACC,WAAA;EACA,QAAA;AATH;AAYE;EACC,WAAA;EACA,WAAA;EACA,qBAAA;EACA,cClCuB;EDmCvB,kBAAA;EACA,WCdQ;ADIX\",\"sourcesContent\":[\"@import 'variables';\\n\\n\\n#mediaInfoCardContainer{\\n\\t\\twidth: 320px;\\n\\t\\theight: $size-xl;\\n\\t\\tborder: 1px solid $secondary-color-default;\\n\\t\\tbackground-color: $primary-color-default;\\n\\t\\tmargin: $size-2xs;\\n\\t\\tdisplay: flex;\\n\\t\\tflex-direction: column;\\n\\t\\talign-items: center;\\n\\t\\tfont-family: $font-secondary-default;\\n\\t\\ttransition: transform 300ms ease, box-shadow 300ms ease;\\n\\n\\t\\t&:hover{\\n\\t\\tcursor: pointer;\\n\\t\\ttransform: scale(1.15) translateX(4px) translateY(-8px);\\n\\t\\tbox-shadow: -10px 10px rgba($secondary-color-default, 0.7);\\n\\t\\tz-index: 1000;\\n\\n\\t\\t}\\n\\n\\n\\n\\n\\n\\t\\n\\t\\timg{\\n\\t\\t\\theight: 70%;\\n\\t\\t\\twidth: 0;\\n\\t\\t}\\n\\n\\t\\ta {\\n\\t\\t\\twidth: 100%;\\n\\t\\t\\theight: 30%;\\n\\t\\t\\ttext-decoration: none;\\n\\t\\t\\tcolor: $secondary-color-default;\\n\\t\\t\\ttext-align: center;\\n\\t\\t\\tmargin: $size-2xs;\\n\\t\\t\\t\\n\\n\\t\\t}\\n}\\n\",\"// Color Palette:\\n$primary-color-default: #FFFFFF;\\n\\n$secondary-color-default: #224E5B;\\n$secondary-color-light: #bbd6db;\\n\\n$tertiary-color-default: #800000;\\n$tertiary-color-light:#ff9999;\\n\\n// Font Families:\\n$font-primary-default: serif;\\n$font-secondary-default: sans-serif;\\n\\n\\n// Resolution Sizes (using a common denominator of 8)\\n$display-2xs: 320px;\\n$display-xs: 376px;\\n$display-s: 424px;\\n$display-m: 768px;\\n$display-l: 1024px;\\n$display-xl: 1440px;\\n$display-2xl: 2560px;\\n$display-3xl: 4096px;\\n\\n//Space Sizes (starting at 8 and doubling up)\\n$size-2xs: 8px;\\n$size-xs: 16px;\\n$size-s: 32px;\\n$size-m: 64px;\\n$size-l: 128px;\\n$size-xl: 256px;\\n$size-2xl: 512px;\\n$size-3xl: 1024px;\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"mediaInfoCardContainer\": \"MediaInfoCard_mediaInfoCardContainer__D8NHB\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzldLnVzZVs0XSEuL3NyYy9zdHlsZXMvTWVkaWFJbmZvQ2FyZC5tb2R1bGUuc2NzcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHNLQUFrRjtBQUM1SDtBQUNBO0FBQ0Esd0ZBQXdGLGlCQUFpQixrQkFBa0IsOEJBQThCLDhCQUE4QixnQkFBZ0Isa0JBQWtCLDJCQUEyQix3QkFBd0IsNEJBQTRCLDREQUE0RCxHQUFHLHNEQUFzRCxvQkFBb0IsNERBQTRELGlEQUFpRCxrQkFBa0IsR0FBRyxvREFBb0QsZ0JBQWdCLGFBQWEsR0FBRyxrREFBa0QsZ0JBQWdCLGdCQUFnQiwwQkFBMEIsbUJBQW1CLHVCQUF1QixnQkFBZ0IsR0FBRyxPQUFPLDRJQUE0SSxVQUFVLFdBQVcsWUFBWSxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFlBQVksYUFBYSxVQUFVLDZDQUE2Qyw4QkFBOEIsbUJBQW1CLHVCQUF1QixpREFBaUQsK0NBQStDLHdCQUF3QixvQkFBb0IsNkJBQTZCLDBCQUEwQiwyQ0FBMkMsOERBQThELGdCQUFnQixzQkFBc0IsOERBQThELGlFQUFpRSxvQkFBb0IsU0FBUyx3QkFBd0Isb0JBQW9CLGlCQUFpQixPQUFPLFdBQVcsb0JBQW9CLG9CQUFvQiw4QkFBOEIsd0NBQXdDLDJCQUEyQiwwQkFBMEIsaUJBQWlCLEdBQUcsd0RBQXdELHNDQUFzQyxrQ0FBa0MscUNBQXFDLGdDQUFnQyxvREFBb0Qsc0NBQXNDLGlGQUFpRixxQkFBcUIsb0JBQW9CLG9CQUFvQixxQkFBcUIsc0JBQXNCLHVCQUF1Qix1QkFBdUIsa0VBQWtFLGlCQUFpQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQixrQkFBa0IsbUJBQW1CLG9CQUFvQix1QkFBdUI7QUFDdHhGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9NZWRpYUluZm9DYXJkLm1vZHVsZS5zY3NzP2E4ZTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiNNZWRpYUluZm9DYXJkX21lZGlhSW5mb0NhcmRDb250YWluZXJfX0Q4TkhCIHtcXG4gIHdpZHRoOiAzMjBweDtcXG4gIGhlaWdodDogMjU2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjI0RTVCO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcXG4gIG1hcmdpbjogOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZSwgYm94LXNoYWRvdyAzMDBtcyBlYXNlO1xcbn1cXG4jTWVkaWFJbmZvQ2FyZF9tZWRpYUluZm9DYXJkQ29udGFpbmVyX19EOE5IQjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpIHRyYW5zbGF0ZVgoNHB4KSB0cmFuc2xhdGVZKC04cHgpO1xcbiAgYm94LXNoYWRvdzogLTEwcHggMTBweCByZ2JhKDM0LCA3OCwgOTEsIDAuNyk7XFxuICB6LWluZGV4OiAxMDAwO1xcbn1cXG4jTWVkaWFJbmZvQ2FyZF9tZWRpYUluZm9DYXJkQ29udGFpbmVyX19EOE5IQiBpbWcge1xcbiAgaGVpZ2h0OiA3MCU7XFxuICB3aWR0aDogMDtcXG59XFxuI01lZGlhSW5mb0NhcmRfbWVkaWFJbmZvQ2FyZENvbnRhaW5lcl9fRDhOSEIgYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMzAlO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6ICMyMjRFNUI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDhweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvTWVkaWFJbmZvQ2FyZC5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0VBQ0UsWUFBQTtFQUNBLGFDeUJRO0VEeEJSLHlCQUFBO0VBQ0EseUJDTnNCO0VET3RCLFdDaUJTO0VEaEJULGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJDRHVCO0VERXZCLHVEQUFBO0FBRkY7QUFJRTtFQUNBLGVBQUE7RUFDQSx1REFBQTtFQUNBLDRDQUFBO0VBQ0EsYUFBQTtBQUZGO0FBV0U7RUFDQyxXQUFBO0VBQ0EsUUFBQTtBQVRIO0FBWUU7RUFDQyxXQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0NsQ3VCO0VEbUN2QixrQkFBQTtFQUNBLFdDZFE7QURJWFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xcblxcblxcbiNtZWRpYUluZm9DYXJkQ29udGFpbmVye1xcblxcdFxcdHdpZHRoOiAzMjBweDtcXG5cXHRcXHRoZWlnaHQ6ICRzaXplLXhsO1xcblxcdFxcdGJvcmRlcjogMXB4IHNvbGlkICRzZWNvbmRhcnktY29sb3ItZGVmYXVsdDtcXG5cXHRcXHRiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeS1jb2xvci1kZWZhdWx0O1xcblxcdFxcdG1hcmdpbjogJHNpemUtMnhzO1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdFxcdGZvbnQtZmFtaWx5OiAkZm9udC1zZWNvbmRhcnktZGVmYXVsdDtcXG5cXHRcXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZSwgYm94LXNoYWRvdyAzMDBtcyBlYXNlO1xcblxcblxcdFxcdCY6aG92ZXJ7XFxuXFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdHRyYW5zZm9ybTogc2NhbGUoMS4xNSkgdHJhbnNsYXRlWCg0cHgpIHRyYW5zbGF0ZVkoLThweCk7XFxuXFx0XFx0Ym94LXNoYWRvdzogLTEwcHggMTBweCByZ2JhKCRzZWNvbmRhcnktY29sb3ItZGVmYXVsdCwgMC43KTtcXG5cXHRcXHR6LWluZGV4OiAxMDAwO1xcblxcblxcdFxcdH1cXG5cXG5cXG5cXG5cXG5cXG5cXHRcXG5cXHRcXHRpbWd7XFxuXFx0XFx0XFx0aGVpZ2h0OiA3MCU7XFxuXFx0XFx0XFx0d2lkdGg6IDA7XFxuXFx0XFx0fVxcblxcblxcdFxcdGEge1xcblxcdFxcdFxcdHdpZHRoOiAxMDAlO1xcblxcdFxcdFxcdGhlaWdodDogMzAlO1xcblxcdFxcdFxcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5cXHRcXHRcXHRjb2xvcjogJHNlY29uZGFyeS1jb2xvci1kZWZhdWx0O1xcblxcdFxcdFxcdHRleHQtYWxpZ246IGNlbnRlcjtcXG5cXHRcXHRcXHRtYXJnaW46ICRzaXplLTJ4cztcXG5cXHRcXHRcXHRcXG5cXG5cXHRcXHR9XFxufVxcblwiLFwiLy8gQ29sb3IgUGFsZXR0ZTpcXG4kcHJpbWFyeS1jb2xvci1kZWZhdWx0OiAjRkZGRkZGO1xcblxcbiRzZWNvbmRhcnktY29sb3ItZGVmYXVsdDogIzIyNEU1QjtcXG4kc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0OiAjYmJkNmRiO1xcblxcbiR0ZXJ0aWFyeS1jb2xvci1kZWZhdWx0OiAjODAwMDAwO1xcbiR0ZXJ0aWFyeS1jb2xvci1saWdodDojZmY5OTk5O1xcblxcbi8vIEZvbnQgRmFtaWxpZXM6XFxuJGZvbnQtcHJpbWFyeS1kZWZhdWx0OiBzZXJpZjtcXG4kZm9udC1zZWNvbmRhcnktZGVmYXVsdDogc2Fucy1zZXJpZjtcXG5cXG5cXG4vLyBSZXNvbHV0aW9uIFNpemVzICh1c2luZyBhIGNvbW1vbiBkZW5vbWluYXRvciBvZiA4KVxcbiRkaXNwbGF5LTJ4czogMzIwcHg7XFxuJGRpc3BsYXkteHM6IDM3NnB4O1xcbiRkaXNwbGF5LXM6IDQyNHB4O1xcbiRkaXNwbGF5LW06IDc2OHB4O1xcbiRkaXNwbGF5LWw6IDEwMjRweDtcXG4kZGlzcGxheS14bDogMTQ0MHB4O1xcbiRkaXNwbGF5LTJ4bDogMjU2MHB4O1xcbiRkaXNwbGF5LTN4bDogNDA5NnB4O1xcblxcbi8vU3BhY2UgU2l6ZXMgKHN0YXJ0aW5nIGF0IDggYW5kIGRvdWJsaW5nIHVwKVxcbiRzaXplLTJ4czogOHB4O1xcbiRzaXplLXhzOiAxNnB4O1xcbiRzaXplLXM6IDMycHg7XFxuJHNpemUtbTogNjRweDtcXG4kc2l6ZS1sOiAxMjhweDtcXG4kc2l6ZS14bDogMjU2cHg7XFxuJHNpemUtMnhsOiA1MTJweDtcXG4kc2l6ZS0zeGw6IDEwMjRweDtcXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtZWRpYUluZm9DYXJkQ29udGFpbmVyXCI6IFwiTWVkaWFJbmZvQ2FyZF9tZWRpYUluZm9DYXJkQ29udGFpbmVyX19EOE5IQlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[9].use[4]!./src/styles/MediaInfoCard.module.scss\n"));

/***/ })

});
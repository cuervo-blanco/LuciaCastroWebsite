/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[9].use[4]!./src/styles/SocialMedia.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[9].use[4]!./src/styles/SocialMedia.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#SocialMedia_socialMediaContainer__D_1Iy {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 20px;\\n  width: 128px;\\n  height: 100%;\\n}\\n#SocialMedia_socialMediaContainer__D_1Iy .SocialMedia_brandIcon__YcizY {\\n  width: 32px;\\n  padding: 16px 2px;\\n}\\n#SocialMedia_socialMediaContainer__D_1Iy .SocialMedia_brandIcon__YcizY:active {\\n  color: #A40E05;\\n}\\n#SocialMedia_socialMediaContainer__D_1Iy .SocialMedia_brandIcon__YcizY:hover {\\n  cursor: pointer;\\n  padding: 12px 2px;\\n  border-bottom: 2px solid #A40E05;\\n  color: #FFFFFF;\\n  transition: color 500ms ease;\\n}\\n#SocialMedia_socialMediaContainer__D_1Iy .SocialMedia_menuDark__7l9XM {\\n  color: #224E5B;\\n}\\n#SocialMedia_socialMediaContainer__D_1Iy .SocialMedia_menuDark__7l9XM:hover {\\n  color: #A40E05;\\n}\\n#SocialMedia_socialMediaContainer__D_1Iy .SocialMedia_menuLight__Ipt5S {\\n  color: #bbd6db;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/SocialMedia.module.scss\",\"webpack://src/styles/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,YCqBO;EDpBP,YAAA;AADF;AAIC;EACC,WCcO;EDbP,iBAAA;AAFF;AAGE;EACA,cCTuB;ADQzB;AAGE;EACC,eAAA;EACA,iBAAA;EACA,gCAAA;EACA,cCpBqB;EDqBrB,4BAAA;AADH;AAIC;EACC,cCvBwB;ADqB1B;AAIE;EACA,cCvBuB;ADqBzB;AAKC;EACC,cC7BsB;AD0BxB\",\"sourcesContent\":[\"@import 'variables';\\n\\n#socialMediaContainer{\\n\\t\\tdisplay: flex;\\n\\t\\tjustify-content: center;\\n\\t\\talign-items: center;\\n\\t\\tfont-size: calc($size-xs + 4px);\\n\\t\\twidth: $size-l;\\n\\t\\theight: 100%;\\n\\n\\n\\t.brandIcon{\\n\\t\\twidth: $size-s;\\n\\t\\tpadding: $size-xs 2px;\\n\\t\\t&:active{\\n\\t\\tcolor: $tertiary-color-default;\\n\\t\\t}\\n\\t\\t&:hover{\\n\\t\\t\\tcursor: pointer;\\n\\t\\t\\tpadding: 12px 2px;\\t\\n\\t\\t\\tborder-bottom: 2px solid $tertiary-color-default;\\n\\t\\t\\tcolor: $primary-color-default;\\n\\t\\t\\ttransition: color 500ms ease;\\n\\t\\t}\\n\\t}\\n\\t.menuDark{\\n\\t\\tcolor: $secondary-color-default;\\n\\n\\t\\t&:hover{\\n\\t\\tcolor: $tertiary-color-default;\\n\\t\\t}\\n\\t}\\n\\t.menuLight{\\n\\t\\tcolor: $secondary-color-light;\\n\\t}\\n\\n}\\n\",\"// Color Palette:\\n$primary-color-default: #FFFFFF;\\n\\n$secondary-color-default: #224E5B;\\n$secondary-color-light: #bbd6db;\\n\\n$tertiary-color-default: #A40E05;\\n\\n// Font Families:\\n$font-primary-default: serif;\\n$font-secondary-default: sans-serif;\\n\\n\\n// Resolution Sizes (using a common denominator of 8)\\n$display-2xs: 320px;\\n$display-xs: 376px;\\n$display-s: 424px;\\n$display-m: 768px;\\n$display-l: 1024px;\\n$display-xl: 1440px;\\n$display-2xl: 2560px;\\n$display-3xl: 4096px;\\n\\n//Space Sizes (starting at 8 and doubling up)\\n$size-2xs: 8px;\\n$size-xs: 16px;\\n$size-s: 32px;\\n$size-m: 64px;\\n$size-l: 128px;\\n$size-xl: 256px;\\n$size-2xl: 512px;\\n$size-3xl: 1024px;\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"socialMediaContainer\": \"SocialMedia_socialMediaContainer__D_1Iy\",\n\t\"brandIcon\": \"SocialMedia_brandIcon__YcizY\",\n\t\"menuDark\": \"SocialMedia_menuDark__7l9XM\",\n\t\"menuLight\": \"SocialMedia_menuLight__Ipt5S\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzldLnVzZVs0XSEuL3NyYy9zdHlsZXMvU29jaWFsTWVkaWEubW9kdWxlLnNjc3MiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzS0FBa0Y7QUFDNUg7QUFDQTtBQUNBLG9GQUFvRixrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0IsaUJBQWlCLGlCQUFpQixHQUFHLDBFQUEwRSxnQkFBZ0Isc0JBQXNCLEdBQUcsaUZBQWlGLG1CQUFtQixHQUFHLGdGQUFnRixvQkFBb0Isc0JBQXNCLHFDQUFxQyxtQkFBbUIsaUNBQWlDLEdBQUcseUVBQXlFLG1CQUFtQixHQUFHLCtFQUErRSxtQkFBbUIsR0FBRywwRUFBMEUsbUJBQW1CLEdBQUcsT0FBTywwSUFBMEksVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsWUFBWSxhQUFhLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLCtDQUErQywwQkFBMEIsb0JBQW9CLDhCQUE4QiwwQkFBMEIsc0NBQXNDLHFCQUFxQixtQkFBbUIsbUJBQW1CLHFCQUFxQiw0QkFBNEIsZUFBZSxxQ0FBcUMsT0FBTyxjQUFjLHdCQUF3QiwwQkFBMEIsMkRBQTJELHNDQUFzQyxxQ0FBcUMsT0FBTyxLQUFLLGNBQWMsc0NBQXNDLGdCQUFnQixxQ0FBcUMsT0FBTyxLQUFLLGVBQWUsb0NBQW9DLEtBQUssS0FBSyx3REFBd0Qsc0NBQXNDLGtDQUFrQyxxQ0FBcUMsb0RBQW9ELHNDQUFzQyxpRkFBaUYscUJBQXFCLG9CQUFvQixvQkFBb0IscUJBQXFCLHNCQUFzQix1QkFBdUIsdUJBQXVCLGtFQUFrRSxpQkFBaUIsZ0JBQWdCLGdCQUFnQixpQkFBaUIsa0JBQWtCLG1CQUFtQixvQkFBb0IsdUJBQXVCO0FBQ3R0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvU29jaWFsTWVkaWEubW9kdWxlLnNjc3M/ZjdmYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiI1NvY2lhbE1lZGlhX3NvY2lhbE1lZGlhQ29udGFpbmVyX19EXzFJeSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgd2lkdGg6IDEyOHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4jU29jaWFsTWVkaWFfc29jaWFsTWVkaWFDb250YWluZXJfX0RfMUl5IC5Tb2NpYWxNZWRpYV9icmFuZEljb25fX1ljaXpZIHtcXG4gIHdpZHRoOiAzMnB4O1xcbiAgcGFkZGluZzogMTZweCAycHg7XFxufVxcbiNTb2NpYWxNZWRpYV9zb2NpYWxNZWRpYUNvbnRhaW5lcl9fRF8xSXkgLlNvY2lhbE1lZGlhX2JyYW5kSWNvbl9fWWNpelk6YWN0aXZlIHtcXG4gIGNvbG9yOiAjQTQwRTA1O1xcbn1cXG4jU29jaWFsTWVkaWFfc29jaWFsTWVkaWFDb250YWluZXJfX0RfMUl5IC5Tb2NpYWxNZWRpYV9icmFuZEljb25fX1ljaXpZOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBhZGRpbmc6IDEycHggMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNBNDBFMDU7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDUwMG1zIGVhc2U7XFxufVxcbiNTb2NpYWxNZWRpYV9zb2NpYWxNZWRpYUNvbnRhaW5lcl9fRF8xSXkgLlNvY2lhbE1lZGlhX21lbnVEYXJrX183bDlYTSB7XFxuICBjb2xvcjogIzIyNEU1QjtcXG59XFxuI1NvY2lhbE1lZGlhX3NvY2lhbE1lZGlhQ29udGFpbmVyX19EXzFJeSAuU29jaWFsTWVkaWFfbWVudURhcmtfXzdsOVhNOmhvdmVyIHtcXG4gIGNvbG9yOiAjQTQwRTA1O1xcbn1cXG4jU29jaWFsTWVkaWFfc29jaWFsTWVkaWFDb250YWluZXJfX0RfMUl5IC5Tb2NpYWxNZWRpYV9tZW51TGlnaHRfX0lwdDVTIHtcXG4gIGNvbG9yOiAjYmJkNmRiO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9Tb2NpYWxNZWRpYS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUNxQk87RURwQlAsWUFBQTtBQURGO0FBSUM7RUFDQyxXQ2NPO0VEYlAsaUJBQUE7QUFGRjtBQUdFO0VBQ0EsY0NUdUI7QURRekI7QUFHRTtFQUNDLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0VBQ0EsY0NwQnFCO0VEcUJyQiw0QkFBQTtBQURIO0FBSUM7RUFDQyxjQ3ZCd0I7QURxQjFCO0FBSUU7RUFDQSxjQ3ZCdUI7QURxQnpCO0FBS0M7RUFDQyxjQzdCc0I7QUQwQnhCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XFxuXFxuI3NvY2lhbE1lZGlhQ29udGFpbmVye1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0XFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXHRcXHRmb250LXNpemU6IGNhbGMoJHNpemUteHMgKyA0cHgpO1xcblxcdFxcdHdpZHRoOiAkc2l6ZS1sO1xcblxcdFxcdGhlaWdodDogMTAwJTtcXG5cXG5cXG5cXHQuYnJhbmRJY29ue1xcblxcdFxcdHdpZHRoOiAkc2l6ZS1zO1xcblxcdFxcdHBhZGRpbmc6ICRzaXplLXhzIDJweDtcXG5cXHRcXHQmOmFjdGl2ZXtcXG5cXHRcXHRjb2xvcjogJHRlcnRpYXJ5LWNvbG9yLWRlZmF1bHQ7XFxuXFx0XFx0fVxcblxcdFxcdCY6aG92ZXJ7XFxuXFx0XFx0XFx0Y3Vyc29yOiBwb2ludGVyO1xcblxcdFxcdFxcdHBhZGRpbmc6IDEycHggMnB4O1xcdFxcblxcdFxcdFxcdGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAkdGVydGlhcnktY29sb3ItZGVmYXVsdDtcXG5cXHRcXHRcXHRjb2xvcjogJHByaW1hcnktY29sb3ItZGVmYXVsdDtcXG5cXHRcXHRcXHR0cmFuc2l0aW9uOiBjb2xvciA1MDBtcyBlYXNlO1xcblxcdFxcdH1cXG5cXHR9XFxuXFx0Lm1lbnVEYXJre1xcblxcdFxcdGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yLWRlZmF1bHQ7XFxuXFxuXFx0XFx0Jjpob3ZlcntcXG5cXHRcXHRjb2xvcjogJHRlcnRpYXJ5LWNvbG9yLWRlZmF1bHQ7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHQubWVudUxpZ2h0e1xcblxcdFxcdGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yLWxpZ2h0O1xcblxcdH1cXG5cXG59XFxuXCIsXCIvLyBDb2xvciBQYWxldHRlOlxcbiRwcmltYXJ5LWNvbG9yLWRlZmF1bHQ6ICNGRkZGRkY7XFxuXFxuJHNlY29uZGFyeS1jb2xvci1kZWZhdWx0OiAjMjI0RTVCO1xcbiRzZWNvbmRhcnktY29sb3ItbGlnaHQ6ICNiYmQ2ZGI7XFxuXFxuJHRlcnRpYXJ5LWNvbG9yLWRlZmF1bHQ6ICNBNDBFMDU7XFxuXFxuLy8gRm9udCBGYW1pbGllczpcXG4kZm9udC1wcmltYXJ5LWRlZmF1bHQ6IHNlcmlmO1xcbiRmb250LXNlY29uZGFyeS1kZWZhdWx0OiBzYW5zLXNlcmlmO1xcblxcblxcbi8vIFJlc29sdXRpb24gU2l6ZXMgKHVzaW5nIGEgY29tbW9uIGRlbm9taW5hdG9yIG9mIDgpXFxuJGRpc3BsYXktMnhzOiAzMjBweDtcXG4kZGlzcGxheS14czogMzc2cHg7XFxuJGRpc3BsYXktczogNDI0cHg7XFxuJGRpc3BsYXktbTogNzY4cHg7XFxuJGRpc3BsYXktbDogMTAyNHB4O1xcbiRkaXNwbGF5LXhsOiAxNDQwcHg7XFxuJGRpc3BsYXktMnhsOiAyNTYwcHg7XFxuJGRpc3BsYXktM3hsOiA0MDk2cHg7XFxuXFxuLy9TcGFjZSBTaXplcyAoc3RhcnRpbmcgYXQgOCBhbmQgZG91YmxpbmcgdXApXFxuJHNpemUtMnhzOiA4cHg7XFxuJHNpemUteHM6IDE2cHg7XFxuJHNpemUtczogMzJweDtcXG4kc2l6ZS1tOiA2NHB4O1xcbiRzaXplLWw6IDEyOHB4O1xcbiRzaXplLXhsOiAyNTZweDtcXG4kc2l6ZS0yeGw6IDUxMnB4O1xcbiRzaXplLTN4bDogMTAyNHB4O1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInNvY2lhbE1lZGlhQ29udGFpbmVyXCI6IFwiU29jaWFsTWVkaWFfc29jaWFsTWVkaWFDb250YWluZXJfX0RfMUl5XCIsXG5cdFwiYnJhbmRJY29uXCI6IFwiU29jaWFsTWVkaWFfYnJhbmRJY29uX19ZY2l6WVwiLFxuXHRcIm1lbnVEYXJrXCI6IFwiU29jaWFsTWVkaWFfbWVudURhcmtfXzdsOVhNXCIsXG5cdFwibWVudUxpZ2h0XCI6IFwiU29jaWFsTWVkaWFfbWVudUxpZ2h0X19JcHQ1U1wiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[9].use[4]!./src/styles/SocialMedia.module.scss\n"));

/***/ })

});
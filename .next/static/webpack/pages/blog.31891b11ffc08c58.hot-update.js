/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blog",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[9].use[4]!./src/styles/BlogPostPreview.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[9].use[4]!./src/styles/BlogPostPreview.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".BlogPostPreview_featured__9dgT_ {\\n  width: 50%;\\n  height: 100%;\\n}\\n.BlogPostPreview_featured__9dgT_ #BlogPostPreview_imgFrame__c1biI {\\n  width: 100%;\\n  aspect-ratio: 1/1;\\n  overflow: hidden;\\n}\\n.BlogPostPreview_featured__9dgT_ #BlogPostPreview_imgFrame__c1biI img {\\n  width: 100%;\\n  height: 100%;\\n}\\n.BlogPostPreview_featured__9dgT_ #BlogPostPreview_textFrame__nzCW5 {\\n  position: absolute;\\n  width: 400px;\\n  height: 400px;\\n}\\n\\n.BlogPostPreview_regular__IvgOX {\\n  width: 200px;\\n  height: 50%;\\n}\\n.BlogPostPreview_regular__IvgOX #BlogPostPreview_imgFrame__c1biI {\\n  width: 100%;\\n  aspect-ratio: 1/1;\\n  overflow: hidden;\\n}\\n.BlogPostPreview_regular__IvgOX #BlogPostPreview_imgFrame__c1biI img {\\n  position: absolute;\\n  top: 0;\\n  botton: 0;\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n}\\n.BlogPostPreview_regular__IvgOX #BlogPostPreview_textFrame__nzCW5 {\\n  width: 400px;\\n  height: 400px;\\n}\\n\\n#BlogPostPreview_blogPostPreviewContainer__nytHy {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  border: 2px solid red;\\n}\\n#BlogPostPreview_blogPostPreviewContainer__nytHy h2 {\\n  margin: 0;\\n  color: #224E5B;\\n  font-size: 128px;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/BlogPostPreview.module.scss\",\"webpack://src/styles/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,UAAA;EACA,YAAA;AADJ;AAGI;EACI,WAAA;EACA,iBAAA;EACA,gBAAA;AADR;AAGQ;EACI,WAAA;EACA,YAAA;AADZ;AAII;EACI,kBAAA;EACA,YAAA;EACA,aAAA;AAFR;;AAKA;EACI,YAAA;EACA,WAAA;AAFJ;AAII;EACI,WAAA;EACA,iBAAA;EACA,gBAAA;AAFR;AAIQ;EACI,kBAAA;EACA,MAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAFZ;AAKI;EACI,YAAA;EACA,aAAA;AAHR;;AAOA;EACC,aAAA;EACG,sBAAA;EACH,uBAAA;EACA,mBAAA;EACG,qBAAA;AAJJ;AAMI;EACI,SAAA;EACA,cCpDkB;EDqDlB,gBC3BC;ADuBT\",\"sourcesContent\":[\"@import 'variables';\\n\\n.featured {\\n    width: 50%;\\n    height: 100%;\\n\\n    #imgFrame {\\n        width: 100%;\\n        aspect-ratio: 1/1;\\n        overflow: hidden;\\n\\n        img {\\n            width: 100%;\\n            height: 100%;\\n        }\\n    }\\n    #textFrame{\\n        position: absolute;\\n        width: 400px;\\n        height: 400px;\\n    }\\n}\\n.regular{\\n    width: 200px;\\n    height: 50%;\\n\\n    #imgFrame {\\n        width: 100%;\\n        aspect-ratio: 1/1;\\n        overflow: hidden;\\n\\n        img {\\n            position: absolute;\\n            top: 0;\\n            botton: 0;\\n            width: 100%;\\n            height: 100%;\\n            object-fit: cover;\\n        }\\n    }\\n    #textFrame{\\n        width: 400px;\\n        height: 400px;\\n    }\\n}\\n\\n#blogPostPreviewContainer{\\n\\tdisplay: flex;\\n    flex-direction: column;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n    border: 2px solid red;\\n\\n    h2{\\n        margin: 0;\\n        color: $secondary-color-default;\\n        font-size: $size-l;\\n    }\\n\\n}\\n\",\"// Color Palette:\\n$primary-color-default: #FFFFFF;\\n\\n$secondary-color-default: #224E5B;\\n$secondary-color-light: #bbd6db;\\n\\n$tertiary-color-default: #800000;\\n$tertiary-color-light:#ff9999;\\n\\n// Font Families:\\n$font-primary-default: serif;\\n$font-secondary-default: sans-serif;\\n\\n\\n// Resolution Sizes (using a common denominator of 8)\\n$display-2xs: 320px;\\n$display-xs: 376px;\\n$display-s: 424px;\\n$display-m: 768px;\\n$display-l: 1024px;\\n$display-xl: 1440px;\\n$display-2xl: 2560px;\\n$display-3xl: 4096px;\\n\\n//Space Sizes (starting at 8 and doubling up)\\n$size-2xs: 8px;\\n$size-xs: 16px;\\n$size-s: 32px;\\n$size-m: 64px;\\n$size-l: 128px;\\n$size-xl: 256px;\\n$size-2xl: 512px;\\n$size-3xl: 1024px;\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"featured\": \"BlogPostPreview_featured__9dgT_\",\n\t\"imgFrame\": \"BlogPostPreview_imgFrame__c1biI\",\n\t\"textFrame\": \"BlogPostPreview_textFrame__nzCW5\",\n\t\"regular\": \"BlogPostPreview_regular__IvgOX\",\n\t\"blogPostPreviewContainer\": \"BlogPostPreview_blogPostPreviewContainer__nytHy\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzldLnVzZVs0XSEuL3NyYy9zdHlsZXMvQmxvZ1Bvc3RQcmV2aWV3Lm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsc0tBQWtGO0FBQzVIO0FBQ0E7QUFDQSw0RUFBNEUsZUFBZSxpQkFBaUIsR0FBRyxxRUFBcUUsZ0JBQWdCLHNCQUFzQixxQkFBcUIsR0FBRyx5RUFBeUUsZ0JBQWdCLGlCQUFpQixHQUFHLHNFQUFzRSx1QkFBdUIsaUJBQWlCLGtCQUFrQixHQUFHLHFDQUFxQyxpQkFBaUIsZ0JBQWdCLEdBQUcsb0VBQW9FLGdCQUFnQixzQkFBc0IscUJBQXFCLEdBQUcsd0VBQXdFLHVCQUF1QixXQUFXLGNBQWMsZ0JBQWdCLGlCQUFpQixzQkFBc0IsR0FBRyxxRUFBcUUsaUJBQWlCLGtCQUFrQixHQUFHLHNEQUFzRCxrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsMEJBQTBCLEdBQUcsdURBQXVELGNBQWMsbUJBQW1CLHFCQUFxQixHQUFHLE9BQU8sOElBQThJLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLEtBQUssS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLGNBQWMsOENBQThDLGVBQWUsaUJBQWlCLG1CQUFtQixtQkFBbUIsc0JBQXNCLDRCQUE0QiwyQkFBMkIsaUJBQWlCLDBCQUEwQiwyQkFBMkIsV0FBVyxPQUFPLGlCQUFpQiw2QkFBNkIsdUJBQXVCLHdCQUF3QixPQUFPLEdBQUcsV0FBVyxtQkFBbUIsa0JBQWtCLG1CQUFtQixzQkFBc0IsNEJBQTRCLDJCQUEyQixpQkFBaUIsaUNBQWlDLHFCQUFxQix3QkFBd0IsMEJBQTBCLDJCQUEyQixnQ0FBZ0MsV0FBVyxPQUFPLGlCQUFpQix1QkFBdUIsd0JBQXdCLE9BQU8sR0FBRyw4QkFBOEIsa0JBQWtCLDZCQUE2Qiw0QkFBNEIsd0JBQXdCLDRCQUE0QixXQUFXLG9CQUFvQiwwQ0FBMEMsNkJBQTZCLE9BQU8sS0FBSyx3REFBd0Qsc0NBQXNDLGtDQUFrQyxxQ0FBcUMsZ0NBQWdDLG9EQUFvRCxzQ0FBc0MsaUZBQWlGLHFCQUFxQixvQkFBb0Isb0JBQW9CLHFCQUFxQixzQkFBc0IsdUJBQXVCLHVCQUF1QixrRUFBa0UsaUJBQWlCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGtCQUFrQixtQkFBbUIsb0JBQW9CLHVCQUF1QjtBQUMvaUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvQmxvZ1Bvc3RQcmV2aWV3Lm1vZHVsZS5zY3NzPzM3NjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5CbG9nUG9zdFByZXZpZXdfZmVhdHVyZWRfXzlkZ1RfIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5CbG9nUG9zdFByZXZpZXdfZmVhdHVyZWRfXzlkZ1RfICNCbG9nUG9zdFByZXZpZXdfaW1nRnJhbWVfX2MxYmlJIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uQmxvZ1Bvc3RQcmV2aWV3X2ZlYXR1cmVkX185ZGdUXyAjQmxvZ1Bvc3RQcmV2aWV3X2ltZ0ZyYW1lX19jMWJpSSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5CbG9nUG9zdFByZXZpZXdfZmVhdHVyZWRfXzlkZ1RfICNCbG9nUG9zdFByZXZpZXdfdGV4dEZyYW1lX19uekNXNSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4uQmxvZ1Bvc3RQcmV2aWV3X3JlZ3VsYXJfX0l2Z09YIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG4uQmxvZ1Bvc3RQcmV2aWV3X3JlZ3VsYXJfX0l2Z09YICNCbG9nUG9zdFByZXZpZXdfaW1nRnJhbWVfX2MxYmlJIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYXNwZWN0LXJhdGlvOiAxLzE7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uQmxvZ1Bvc3RQcmV2aWV3X3JlZ3VsYXJfX0l2Z09YICNCbG9nUG9zdFByZXZpZXdfaW1nRnJhbWVfX2MxYmlJIGltZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBib3R0b246IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbn1cXG4uQmxvZ1Bvc3RQcmV2aWV3X3JlZ3VsYXJfX0l2Z09YICNCbG9nUG9zdFByZXZpZXdfdGV4dEZyYW1lX19uekNXNSB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG5cXG4jQmxvZ1Bvc3RQcmV2aWV3X2Jsb2dQb3N0UHJldmlld0NvbnRhaW5lcl9fbnl0SHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XFxufVxcbiNCbG9nUG9zdFByZXZpZXdfYmxvZ1Bvc3RQcmV2aWV3Q29udGFpbmVyX19ueXRIeSBoMiB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogIzIyNEU1QjtcXG4gIGZvbnQtc2l6ZTogMTI4cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zcmMvc3R5bGVzL0Jsb2dQb3N0UHJldmlldy5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovL3NyYy9zdHlsZXMvX3ZhcmlhYmxlcy5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFESjtBQUdJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUdRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFEWjtBQUlJO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUZSOztBQUtBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFGSjtBQUlJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFGUjtBQUlRO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFGWjtBQUtJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7QUFIUjs7QUFPQTtFQUNDLGFBQUE7RUFDRyxzQkFBQTtFQUNILHVCQUFBO0VBQ0EsbUJBQUE7RUFDRyxxQkFBQTtBQUpKO0FBTUk7RUFDSSxTQUFBO0VBQ0EsY0NwRGtCO0VEcURsQixnQkMzQkM7QUR1QlRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAndmFyaWFibGVzJztcXG5cXG4uZmVhdHVyZWQge1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgICNpbWdGcmFtZSB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgfVxcbiAgICB9XFxuICAgICN0ZXh0RnJhbWV7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB3aWR0aDogNDAwcHg7XFxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgICB9XFxufVxcbi5yZWd1bGFye1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNTAlO1xcblxcbiAgICAjaW1nRnJhbWUge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBhc3BlY3QtcmF0aW86IDEvMTtcXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgICAgICBpbWcge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgYm90dG9uOiAwO1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIH1cXG4gICAgfVxcbiAgICAjdGV4dEZyYW1le1xcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcXG4gICAgfVxcbn1cXG5cXG4jYmxvZ1Bvc3RQcmV2aWV3Q29udGFpbmVye1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xcblxcbiAgICBoMntcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yLWRlZmF1bHQ7XFxuICAgICAgICBmb250LXNpemU6ICRzaXplLWw7XFxuICAgIH1cXG5cXG59XFxuXCIsXCIvLyBDb2xvciBQYWxldHRlOlxcbiRwcmltYXJ5LWNvbG9yLWRlZmF1bHQ6ICNGRkZGRkY7XFxuXFxuJHNlY29uZGFyeS1jb2xvci1kZWZhdWx0OiAjMjI0RTVCO1xcbiRzZWNvbmRhcnktY29sb3ItbGlnaHQ6ICNiYmQ2ZGI7XFxuXFxuJHRlcnRpYXJ5LWNvbG9yLWRlZmF1bHQ6ICM4MDAwMDA7XFxuJHRlcnRpYXJ5LWNvbG9yLWxpZ2h0OiNmZjk5OTk7XFxuXFxuLy8gRm9udCBGYW1pbGllczpcXG4kZm9udC1wcmltYXJ5LWRlZmF1bHQ6IHNlcmlmO1xcbiRmb250LXNlY29uZGFyeS1kZWZhdWx0OiBzYW5zLXNlcmlmO1xcblxcblxcbi8vIFJlc29sdXRpb24gU2l6ZXMgKHVzaW5nIGEgY29tbW9uIGRlbm9taW5hdG9yIG9mIDgpXFxuJGRpc3BsYXktMnhzOiAzMjBweDtcXG4kZGlzcGxheS14czogMzc2cHg7XFxuJGRpc3BsYXktczogNDI0cHg7XFxuJGRpc3BsYXktbTogNzY4cHg7XFxuJGRpc3BsYXktbDogMTAyNHB4O1xcbiRkaXNwbGF5LXhsOiAxNDQwcHg7XFxuJGRpc3BsYXktMnhsOiAyNTYwcHg7XFxuJGRpc3BsYXktM3hsOiA0MDk2cHg7XFxuXFxuLy9TcGFjZSBTaXplcyAoc3RhcnRpbmcgYXQgOCBhbmQgZG91YmxpbmcgdXApXFxuJHNpemUtMnhzOiA4cHg7XFxuJHNpemUteHM6IDE2cHg7XFxuJHNpemUtczogMzJweDtcXG4kc2l6ZS1tOiA2NHB4O1xcbiRzaXplLWw6IDEyOHB4O1xcbiRzaXplLXhsOiAyNTZweDtcXG4kc2l6ZS0yeGw6IDUxMnB4O1xcbiRzaXplLTN4bDogMTAyNHB4O1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcImZlYXR1cmVkXCI6IFwiQmxvZ1Bvc3RQcmV2aWV3X2ZlYXR1cmVkX185ZGdUX1wiLFxuXHRcImltZ0ZyYW1lXCI6IFwiQmxvZ1Bvc3RQcmV2aWV3X2ltZ0ZyYW1lX19jMWJpSVwiLFxuXHRcInRleHRGcmFtZVwiOiBcIkJsb2dQb3N0UHJldmlld190ZXh0RnJhbWVfX256Q1c1XCIsXG5cdFwicmVndWxhclwiOiBcIkJsb2dQb3N0UHJldmlld19yZWd1bGFyX19JdmdPWFwiLFxuXHRcImJsb2dQb3N0UHJldmlld0NvbnRhaW5lclwiOiBcIkJsb2dQb3N0UHJldmlld19ibG9nUG9zdFByZXZpZXdDb250YWluZXJfX255dEh5XCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[9].use[4]!./src/styles/BlogPostPreview.module.scss\n"));

/***/ })

});
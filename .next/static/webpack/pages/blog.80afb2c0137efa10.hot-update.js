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

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".BlogPostPreview_regular__IvgOX {\\n  width: 300px;\\n  height: 50%;\\n  display: flex;\\n  flex-direction: column;\\n  margin: 0 5px;\\n  margin-bottom: 2px;\\n  position: relative;\\n}\\n\\n.BlogPostPreview_featured__9dgT_ {\\n  display: flex;\\n  position: relative;\\n  width: 50%;\\n  height: 100%;\\n  flex-direction: column;\\n  justify-content: center;\\n  overflow: hidden;\\n  margin-right: 5px;\\n}\\n\\n#BlogPostPreview_imgFrame__c1biI {\\n  display: flex;\\n  align-items: center;\\n  width: 100%;\\n  height: 100%;\\n  aspect-ratio: 1/1;\\n  position: relative;\\n  overflow: hidden;\\n}\\n#BlogPostPreview_imgFrame__c1biI img {\\n  width: auto;\\n  height: 100%;\\n  object-fit: cover;\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n}\\n\\n#BlogPostPreview_textFrame__nzCW5 {\\n  position: absolute;\\n  width: 100%;\\n  height: auto;\\n  bottom: 0;\\n  left: 50;\\n  background: linear-gradient(transparent 0%, #224E5B 70%);\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n#BlogPostPreview_textFrame__nzCW5 h2 {\\n  font-size: 40px;\\n  margin-top: 50px;\\n  margin-bottom: 0px;\\n}\\n#BlogPostPreview_textFrame__nzCW5 h2 a {\\n  color: #FFFFFF;\\n  text-decoration: none;\\n}\\n#BlogPostPreview_textFrame__nzCW5 hr {\\n  width: 100%;\\n  height: 0px;\\n  border: none;\\n  background-color: #800000;\\n}\\n#BlogPostPreview_textFrame__nzCW5 p {\\n  margin: 0;\\n  color: white;\\n  font-family: sans-serif;\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/BlogPostPreview.module.scss\",\"webpack://src/styles/_variables.scss\"],\"names\":[],\"mappings\":\"AAEA;EACI,YAAA;EACA,WAAA;EACA,aAAA;EACA,sBAAA;EACA,aAAA;EACA,kBAAA;EACA,kBAAA;AADJ;;AAGA;EACI,aAAA;EACA,kBAAA;EACA,UAAA;EACA,YAAA;EACA,sBAAA;EACA,uBAAA;EACA,gBAAA;EACA,iBAAA;AAAJ;;AAGA;EACI,aAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,gBAAA;AAAJ;AAEI;EACI,WAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,MAAA;EACA,OAAA;AAAR;;AAGA;EACI,kBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,QAAA;EACA,wDAAA;EACA,aAAA;EACA,sBAAA;EACA,uBAAA;EACA,mBAAA;AAAJ;AAEI;EACI,eAAA;EACA,gBAAA;EACA,kBAAA;AAAR;AAEQ;EACI,cCzDY;ED0DZ,qBAAA;AAAZ;AAII;EACI,WAAA;EACA,WAAA;EACA,YAAA;EACA,yBC7DiB;AD2DzB;AAKK;EACG,SAAA;EACA,YAAA;EACA,uBAAA;AAHR\",\"sourcesContent\":[\"@import 'variables';\\n\\n.regular{\\n    width: 300px;\\n    height: 50%;\\n    display: flex;\\n    flex-direction: column;\\n    margin: 0 5px;\\n    margin-bottom: 2px;\\n    position: relative;\\n}\\n.featured {\\n    display: flex;\\n    position: relative;\\n    width: 50%;\\n    height: 100%;\\n    flex-direction: column;\\n    justify-content: center;\\n    overflow: hidden;\\n    margin-right: 5px;\\n\\n}\\n#imgFrame {\\n    display: flex;\\n    align-items: center;\\n    width: 100%;\\n    height: 100%;\\n    aspect-ratio: 1/1;\\n    position: relative;\\n    overflow: hidden;\\n\\n    img {\\n        width: auto;\\n        height: 100%;\\n        object-fit: cover;\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n    }\\n}\\n#textFrame{\\n    position: absolute;\\n    width: 100%;\\n    height: auto;\\n    bottom: 0;\\n    left: 50;\\n    background: linear-gradient( transparent 0%, $secondary-color-default 70% );\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n\\n    h2{\\n        font-size: 40px;\\n        margin-top: 50px;\\n        margin-bottom: 0px;\\n\\n        a{\\n            color: $primary-color-default;\\n            text-decoration: none;\\n        }\\n    }\\n\\n    hr{\\n        width: 100%;\\n        height: 0px;\\n        border: none;\\n        background-color: $tertiary-color-default;\\n    }\\n\\n     p{\\n        margin: 0;\\n        color: white;\\n        font-family: sans-serif;\\n    }\\n}\\n\\n\\n\",\"// Color Palette:\\n$primary-color-default: #FFFFFF;\\n\\n$secondary-color-default: #224E5B;\\n$secondary-color-light: #bbd6db;\\n\\n$tertiary-color-default: #800000;\\n$tertiary-color-light:#ff9999;\\n\\n// Font Families:\\n$font-primary-default: serif;\\n$font-secondary-default: sans-serif;\\n\\n\\n// Resolution Sizes (using a common denominator of 8)\\n$display-2xs: 320px;\\n$display-xs: 376px;\\n$display-s: 424px;\\n$display-m: 768px;\\n$display-l: 1024px;\\n$display-xl: 1440px;\\n$display-2xl: 2560px;\\n$display-3xl: 4096px;\\n\\n//Space Sizes (starting at 8 and doubling up)\\n$size-2xs: 8px;\\n$size-xs: 16px;\\n$size-s: 32px;\\n$size-m: 64px;\\n$size-l: 128px;\\n$size-xl: 256px;\\n$size-2xl: 512px;\\n$size-3xl: 1024px;\\n\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"regular\": \"BlogPostPreview_regular__IvgOX\",\n\t\"featured\": \"BlogPostPreview_featured__9dgT_\",\n\t\"imgFrame\": \"BlogPostPreview_imgFrame__c1biI\",\n\t\"textFrame\": \"BlogPostPreview_textFrame__nzCW5\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS5vbmVPZls5XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0ub25lT2ZbOV0udXNlWzJdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzldLnVzZVszXSEuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvc2Fzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLm9uZU9mWzldLnVzZVs0XSEuL3NyYy9zdHlsZXMvQmxvZ1Bvc3RQcmV2aWV3Lm1vZHVsZS5zY3NzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsc0tBQWtGO0FBQzVIO0FBQ0E7QUFDQSwyRUFBMkUsaUJBQWlCLGdCQUFnQixrQkFBa0IsMkJBQTJCLGtCQUFrQix1QkFBdUIsdUJBQXVCLEdBQUcsc0NBQXNDLGtCQUFrQix1QkFBdUIsZUFBZSxpQkFBaUIsMkJBQTJCLDRCQUE0QixxQkFBcUIsc0JBQXNCLEdBQUcsc0NBQXNDLGtCQUFrQix3QkFBd0IsZ0JBQWdCLGlCQUFpQixzQkFBc0IsdUJBQXVCLHFCQUFxQixHQUFHLHdDQUF3QyxnQkFBZ0IsaUJBQWlCLHNCQUFzQix1QkFBdUIsV0FBVyxZQUFZLEdBQUcsdUNBQXVDLHVCQUF1QixnQkFBZ0IsaUJBQWlCLGNBQWMsYUFBYSw2REFBNkQsa0JBQWtCLDJCQUEyQiw0QkFBNEIsd0JBQXdCLEdBQUcsd0NBQXdDLG9CQUFvQixxQkFBcUIsdUJBQXVCLEdBQUcsMENBQTBDLG1CQUFtQiwwQkFBMEIsR0FBRyx3Q0FBd0MsZ0JBQWdCLGdCQUFnQixpQkFBaUIsOEJBQThCLEdBQUcsdUNBQXVDLGNBQWMsaUJBQWlCLDRCQUE0QixHQUFHLE9BQU8sOElBQThJLFVBQVUsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFlBQVksS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxXQUFXLDZDQUE2QyxhQUFhLG1CQUFtQixrQkFBa0Isb0JBQW9CLDZCQUE2QixvQkFBb0IseUJBQXlCLHlCQUF5QixHQUFHLGFBQWEsb0JBQW9CLHlCQUF5QixpQkFBaUIsbUJBQW1CLDZCQUE2Qiw4QkFBOEIsdUJBQXVCLHdCQUF3QixLQUFLLGFBQWEsb0JBQW9CLDBCQUEwQixrQkFBa0IsbUJBQW1CLHdCQUF3Qix5QkFBeUIsdUJBQXVCLGFBQWEsc0JBQXNCLHVCQUF1Qiw0QkFBNEIsNkJBQTZCLGlCQUFpQixrQkFBa0IsT0FBTyxHQUFHLGFBQWEseUJBQXlCLGtCQUFrQixtQkFBbUIsZ0JBQWdCLGVBQWUsa0ZBQWtGLG9CQUFvQiw2QkFBNkIsOEJBQThCLDBCQUEwQixXQUFXLDBCQUEwQiwyQkFBMkIsNkJBQTZCLGNBQWMsNENBQTRDLG9DQUFvQyxXQUFXLE9BQU8sV0FBVyxzQkFBc0Isc0JBQXNCLHVCQUF1QixvREFBb0QsT0FBTyxXQUFXLG9CQUFvQix1QkFBdUIsa0NBQWtDLE9BQU8sR0FBRyw0REFBNEQsc0NBQXNDLGtDQUFrQyxxQ0FBcUMsZ0NBQWdDLG9EQUFvRCxzQ0FBc0MsaUZBQWlGLHFCQUFxQixvQkFBb0Isb0JBQW9CLHFCQUFxQixzQkFBc0IsdUJBQXVCLHVCQUF1QixrRUFBa0UsaUJBQWlCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLGtCQUFrQixtQkFBbUIsb0JBQW9CLHVCQUF1QjtBQUN4MUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc3R5bGVzL0Jsb2dQb3N0UHJldmlldy5tb2R1bGUuc2Nzcz8zNzYwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18odHJ1ZSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuQmxvZ1Bvc3RQcmV2aWV3X3JlZ3VsYXJfX0l2Z09YIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uQmxvZ1Bvc3RQcmV2aWV3X2ZlYXR1cmVkX185ZGdUXyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuI0Jsb2dQb3N0UHJldmlld19pbWdGcmFtZV9fYzFiaUkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuI0Jsb2dQb3N0UHJldmlld19pbWdGcmFtZV9fYzFiaUkgaW1nIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5cXG4jQmxvZ1Bvc3RQcmV2aWV3X3RleHRGcmFtZV9fbnpDVzUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCAwJSwgIzIyNEU1QiA3MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNCbG9nUG9zdFByZXZpZXdfdGV4dEZyYW1lX19uekNXNSBoMiB7XFxuICBmb250LXNpemU6IDQwcHg7XFxuICBtYXJnaW4tdG9wOiA1MHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xcbn1cXG4jQmxvZ1Bvc3RQcmV2aWV3X3RleHRGcmFtZV9fbnpDVzUgaDIgYSB7XFxuICBjb2xvcjogI0ZGRkZGRjtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuI0Jsb2dQb3N0UHJldmlld190ZXh0RnJhbWVfX256Q1c1IGhyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODAwMDAwO1xcbn1cXG4jQmxvZ1Bvc3RQcmV2aWV3X3RleHRGcmFtZV9fbnpDVzUgcCB7XFxuICBtYXJnaW46IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3NyYy9zdHlsZXMvQmxvZ1Bvc3RQcmV2aWV3Lm1vZHVsZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9fdmFyaWFibGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBR0E7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKO0FBRUk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtBQUFSOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0Esd0RBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQUo7QUFFSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFFUTtFQUNJLGNDekRZO0VEMERaLHFCQUFBO0FBQVo7QUFJSTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQzdEaUI7QUQyRHpCO0FBS0s7RUFDRyxTQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBSFJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCAndmFyaWFibGVzJztcXG5cXG4ucmVndWxhcntcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDUwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5mZWF0dXJlZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuXFxufVxcbiNpbWdGcmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGFzcGVjdC1yYXRpbzogMS8xO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAgIGltZyB7XFxuICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgfVxcbn1cXG4jdGV4dEZyYW1le1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogNTA7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCggdHJhbnNwYXJlbnQgMCUsICRzZWNvbmRhcnktY29sb3ItZGVmYXVsdCA3MCUgKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGgye1xcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcXG5cXG4gICAgICAgIGF7XFxuICAgICAgICAgICAgY29sb3I6ICRwcmltYXJ5LWNvbG9yLWRlZmF1bHQ7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIGhye1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBoZWlnaHQ6IDBweDtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXJ0aWFyeS1jb2xvci1kZWZhdWx0O1xcbiAgICB9XFxuXFxuICAgICBwe1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuICAgIH1cXG59XFxuXFxuXFxuXCIsXCIvLyBDb2xvciBQYWxldHRlOlxcbiRwcmltYXJ5LWNvbG9yLWRlZmF1bHQ6ICNGRkZGRkY7XFxuXFxuJHNlY29uZGFyeS1jb2xvci1kZWZhdWx0OiAjMjI0RTVCO1xcbiRzZWNvbmRhcnktY29sb3ItbGlnaHQ6ICNiYmQ2ZGI7XFxuXFxuJHRlcnRpYXJ5LWNvbG9yLWRlZmF1bHQ6ICM4MDAwMDA7XFxuJHRlcnRpYXJ5LWNvbG9yLWxpZ2h0OiNmZjk5OTk7XFxuXFxuLy8gRm9udCBGYW1pbGllczpcXG4kZm9udC1wcmltYXJ5LWRlZmF1bHQ6IHNlcmlmO1xcbiRmb250LXNlY29uZGFyeS1kZWZhdWx0OiBzYW5zLXNlcmlmO1xcblxcblxcbi8vIFJlc29sdXRpb24gU2l6ZXMgKHVzaW5nIGEgY29tbW9uIGRlbm9taW5hdG9yIG9mIDgpXFxuJGRpc3BsYXktMnhzOiAzMjBweDtcXG4kZGlzcGxheS14czogMzc2cHg7XFxuJGRpc3BsYXktczogNDI0cHg7XFxuJGRpc3BsYXktbTogNzY4cHg7XFxuJGRpc3BsYXktbDogMTAyNHB4O1xcbiRkaXNwbGF5LXhsOiAxNDQwcHg7XFxuJGRpc3BsYXktMnhsOiAyNTYwcHg7XFxuJGRpc3BsYXktM3hsOiA0MDk2cHg7XFxuXFxuLy9TcGFjZSBTaXplcyAoc3RhcnRpbmcgYXQgOCBhbmQgZG91YmxpbmcgdXApXFxuJHNpemUtMnhzOiA4cHg7XFxuJHNpemUteHM6IDE2cHg7XFxuJHNpemUtczogMzJweDtcXG4kc2l6ZS1tOiA2NHB4O1xcbiRzaXplLWw6IDEyOHB4O1xcbiRzaXplLXhsOiAyNTZweDtcXG4kc2l6ZS0yeGw6IDUxMnB4O1xcbiRzaXplLTN4bDogMTAyNHB4O1xcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ubG9jYWxzID0ge1xuXHRcInJlZ3VsYXJcIjogXCJCbG9nUG9zdFByZXZpZXdfcmVndWxhcl9fSXZnT1hcIixcblx0XCJmZWF0dXJlZFwiOiBcIkJsb2dQb3N0UHJldmlld19mZWF0dXJlZF9fOWRnVF9cIixcblx0XCJpbWdGcmFtZVwiOiBcIkJsb2dQb3N0UHJldmlld19pbWdGcmFtZV9fYzFiaUlcIixcblx0XCJ0ZXh0RnJhbWVcIjogXCJCbG9nUG9zdFByZXZpZXdfdGV4dEZyYW1lX19uekNXNVwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[6].oneOf[9].use[2]!./node_modules/next/dist/build/webpack/loaders/resolve-url-loader/index.js??ruleSet[1].rules[6].oneOf[9].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[6].oneOf[9].use[4]!./src/styles/BlogPostPreview.module.scss\n"));

/***/ })

});
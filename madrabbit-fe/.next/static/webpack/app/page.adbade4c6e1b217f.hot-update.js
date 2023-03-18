"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/madrabbit.tsx":
/*!**********************************!*\
  !*** ./components/madrabbit.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ \"(app-client)/./components/input.tsx\");\n/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./results */ \"(app-client)/./components/results.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _public_madrabbitlogo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../public/madrabbitlogo.svg */ \"(app-client)/./public/madrabbitlogo.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MadRabbit = ()=>{\n    _s();\n    const CHARACTER_LIMIT = 20;\n    const ENDPOINT = \"API_GATEWAY_ENDPOINT\";\n    const [prompt, setPrompt] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [snippet, setSnippet] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [keywords, setKeywords] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [hasResult, setHasResult] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const onSubmit = ()=>{\n        console.log(\"Submitting: \" + prompt);\n        setIsLoading(true);\n        fetch(\"\".concat(ENDPOINT, \"?prompt=\").concat(prompt)).then((res)=>res.json()).then(onResult);\n    };\n    const onResult = (data)=>{\n        setSnippet(data.snippet);\n        setKeywords(data.keywords);\n        setHasResult(true);\n        setIsLoading(false);\n    };\n    const onReset = ()=>{\n        setPrompt(\"\");\n        setHasResult(false);\n        setIsLoading(false);\n    };\n    let displayedElement = null;\n    if (hasResult) {\n        displayedElement = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_results__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            snippet: snippet,\n            keywords: keywords,\n            onReturn: onReset,\n            prompt: prompt\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\leona\\\\Desktop\\\\IT\\\\SaaS_AI\\\\mad_rabbit\\\\madrabbit-fe\\\\components\\\\madrabbit.tsx\",\n            lineNumber: 42,\n            columnNumber: 24\n        }, undefined);\n    } else {\n        displayedElement = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            prompt: prompt,\n            setPrompt: setPrompt,\n            onSubmit: onSubmit,\n            isLoading: isLoading,\n            characterLimit: CHARACTER_LIMIT\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\leona\\\\Desktop\\\\IT\\\\SaaS_AI\\\\mad_rabbit\\\\madrabbit-fe\\\\components\\\\madrabbit.tsx\",\n            lineNumber: 45,\n            columnNumber: 5\n        }, undefined);\n    }\n    const containerStyle = {\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        height: \"100vh\",\n        backgroundColor: \"darkred\"\n    };\n    const headerStyle = {\n        marginBottom: \"50px\",\n        color: \"red\",\n        fontSize: \"2em\",\n        fontWeight: \"bold\",\n        textAlign: \"center\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: containerStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                src: _public_madrabbitlogo_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                width: 60,\n                height: 80\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leona\\\\Desktop\\\\IT\\\\SaaS_AI\\\\mad_rabbit\\\\madrabbit-fe\\\\components\\\\madrabbit.tsx\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: headerStyle,\n                children: \"MadRabbit on berserker mode.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leona\\\\Desktop\\\\IT\\\\SaaS_AI\\\\mad_rabbit\\\\madrabbit-fe\\\\components\\\\madrabbit.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            displayedElement\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leona\\\\Desktop\\\\IT\\\\SaaS_AI\\\\mad_rabbit\\\\madrabbit-fe\\\\components\\\\madrabbit.tsx\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MadRabbit, \"QH7I+GekXsY0gDxjUAMHNpThP48=\");\n_c = MadRabbit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MadRabbit);\nvar _c;\n$RefreshReg$(_c, \"MadRabbit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9tYWRyYWJiaXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzBCO0FBQ0U7QUFDSTtBQUNEO0FBQ2U7QUFFOUMsTUFBTUssWUFBc0IsSUFBTTs7SUFFaEMsTUFBTUMsa0JBQTBCO0lBQ2hDLE1BQU1DLFdBQW1CO0lBQ3pCLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHVCxxREFBYyxDQUFDO0lBQzNDLE1BQU0sQ0FBQ1csU0FBU0MsV0FBVyxHQUFHWixxREFBYyxDQUFDO0lBQzdDLE1BQU0sQ0FBQ2EsVUFBVUMsWUFBWSxHQUFHZCxxREFBYyxDQUFDLEVBQUU7SUFDakQsTUFBTSxDQUFDZSxXQUFXQyxhQUFhLEdBQUdoQixxREFBYyxDQUFDLEtBQUs7SUFDdEQsTUFBTSxDQUFDaUIsV0FBV0MsYUFBYSxHQUFHbEIscURBQWMsQ0FBQyxLQUFLO0lBRXRELE1BQU1tQixXQUFXLElBQU07UUFDckJDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJiO1FBQzdCVSxhQUFhLElBQUk7UUFDakJJLE1BQU0sR0FBc0JkLE9BQW5CRCxVQUFTLFlBQWlCLE9BQVBDLFNBQzNCZSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDRztJQUNSO0lBRUEsTUFBTUEsV0FBVyxDQUFDQyxPQUFjO1FBQzlCZixXQUFXZSxLQUFLaEIsT0FBTztRQUN2QkcsWUFBWWEsS0FBS2QsUUFBUTtRQUN6QkcsYUFBYSxJQUFJO1FBQ2pCRSxhQUFhLEtBQUs7SUFDcEI7SUFFQSxNQUFNVSxVQUFVLElBQU07UUFDcEJuQixVQUFVO1FBQ1ZPLGFBQWEsS0FBSztRQUNsQkUsYUFBYSxLQUFLO0lBQ3BCO0lBRUEsSUFBSVcsbUJBQW1CLElBQUk7SUFFM0IsSUFBSWQsV0FBVztRQUNiYyxpQ0FBbUIsOERBQUMzQixnREFBT0E7WUFBQ1MsU0FBU0E7WUFBU0UsVUFBVUE7WUFBVWlCLFVBQVVGO1lBQVNwQixRQUFRQTs7Ozs7O0lBQy9GLE9BQU87UUFDTHFCLGlDQUNBLDhEQUFDNUIsOENBQUtBO1lBQ0xPLFFBQVFBO1lBQ1JDLFdBQVdBO1lBQ1hVLFVBQVVBO1lBQ1ZGLFdBQVdBO1lBQ1hjLGdCQUFnQnpCOzs7Ozs7SUFFbkIsQ0FBQztJQUVELE1BQU0wQixpQkFBaUI7UUFDckJDLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxpQkFBaUI7SUFDbkI7SUFFQSxNQUFNQyxjQUFjO1FBQ2xCQyxjQUFjO1FBQ2RDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxZQUFZO1FBQ1pDLFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPZDs7MEJBQ1YsOERBQUM3QixtREFBS0E7Z0JBQUM0QyxLQUFLM0MsaUVBQUlBO2dCQUFHNEMsT0FBTztnQkFBSVgsUUFBUTs7Ozs7OzBCQUN0Qyw4REFBQ1E7Z0JBQUlDLE9BQU9QOzBCQUFhOzs7Ozs7WUFDeEJWOzs7Ozs7O0FBR1A7R0F0RU14QjtLQUFBQTtBQXdFTiwrREFBZUEsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL21hZHJhYmJpdC50c3g/NDRjNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IElucHV0IGZyb20gXCIuL2lucHV0XCI7XG5pbXBvcnQgUmVzdWx0cyBmcm9tIFwiLi9yZXN1bHRzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBsb2dvIGZyb20gXCIuLi9wdWJsaWMvbWFkcmFiYml0bG9nby5zdmdcIlxuXG5jb25zdCBNYWRSYWJiaXQ6IFJlYWN0LkZDID0gKCkgPT4ge1xuXG4gIGNvbnN0IENIQVJBQ1RFUl9MSU1JVDogbnVtYmVyID0gMjA7XG4gIGNvbnN0IEVORFBPSU5UOiBzdHJpbmcgPSBcIkFQSV9HQVRFV0FZX0VORFBPSU5UXCJcbiAgY29uc3QgW3Byb21wdCwgc2V0UHJvbXB0XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbc25pcHBldCwgc2V0U25pcHBldF0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2tleXdvcmRzLCBzZXRLZXl3b3Jkc10gPSBSZWFjdC51c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtoYXNSZXN1bHQsIHNldEhhc1Jlc3VsdF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJTdWJtaXR0aW5nOiBcIiArIHByb21wdCk7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIGZldGNoKGAke0VORFBPSU5UfT9wcm9tcHQ9JHtwcm9tcHR9YClcbiAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKG9uUmVzdWx0KTtcbiAgfTtcblxuICBjb25zdCBvblJlc3VsdCA9IChkYXRhOiBhbnkpID0+IHtcbiAgICBzZXRTbmlwcGV0KGRhdGEuc25pcHBldCk7XG4gICAgc2V0S2V5d29yZHMoZGF0YS5rZXl3b3Jkcyk7XG4gICAgc2V0SGFzUmVzdWx0KHRydWUpO1xuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgY29uc3Qgb25SZXNldCA9ICgpID0+IHtcbiAgICBzZXRQcm9tcHQoXCJcIik7XG4gICAgc2V0SGFzUmVzdWx0KGZhbHNlKTtcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICB9O1xuXG4gIGxldCBkaXNwbGF5ZWRFbGVtZW50ID0gbnVsbDtcblxuICBpZiAoaGFzUmVzdWx0KSB7XG4gICAgZGlzcGxheWVkRWxlbWVudCA9IDxSZXN1bHRzIHNuaXBwZXQ9e3NuaXBwZXR9IGtleXdvcmRzPXtrZXl3b3Jkc30gb25SZXR1cm49e29uUmVzZXR9IHByb21wdD17cHJvbXB0fSAvPiBcbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5ZWRFbGVtZW50ID0gKFxuICAgIDxJbnB1dFxuICAgICBwcm9tcHQ9e3Byb21wdH0gXG4gICAgIHNldFByb21wdD17c2V0UHJvbXB0fSBcbiAgICAgb25TdWJtaXQ9e29uU3VibWl0fSBcbiAgICAgaXNMb2FkaW5nPXtpc0xvYWRpbmd9IFxuICAgICBjaGFyYWN0ZXJMaW1pdD17Q0hBUkFDVEVSX0xJTUlUfSAvPlxuICAgICk7XG4gIH1cblxuICBjb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcImRhcmtyZWRcIlxuICB9O1xuXG4gIGNvbnN0IGhlYWRlclN0eWxlID0ge1xuICAgIG1hcmdpbkJvdHRvbTogXCI1MHB4XCIsXG4gICAgY29sb3I6IFwicmVkXCIsXG4gICAgZm9udFNpemU6IFwiMmVtXCIsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG4gICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSAgd2lkdGg9ezYwfSBoZWlnaHQ9ezgwfS8+XG4gICAgICA8ZGl2IHN0eWxlPXtoZWFkZXJTdHlsZX0+TWFkUmFiYml0IG9uIGJlcnNlcmtlciBtb2RlLjwvZGl2PlxuICAgICAge2Rpc3BsYXllZEVsZW1lbnR9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNYWRSYWJiaXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJJbnB1dCIsIlJlc3VsdHMiLCJJbWFnZSIsImxvZ28iLCJNYWRSYWJiaXQiLCJDSEFSQUNURVJfTElNSVQiLCJFTkRQT0lOVCIsInByb21wdCIsInNldFByb21wdCIsInVzZVN0YXRlIiwic25pcHBldCIsInNldFNuaXBwZXQiLCJrZXl3b3JkcyIsInNldEtleXdvcmRzIiwiaGFzUmVzdWx0Iiwic2V0SGFzUmVzdWx0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwib25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsIm9uUmVzdWx0IiwiZGF0YSIsIm9uUmVzZXQiLCJkaXNwbGF5ZWRFbGVtZW50Iiwib25SZXR1cm4iLCJjaGFyYWN0ZXJMaW1pdCIsImNvbnRhaW5lclN0eWxlIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJoZWFkZXJTdHlsZSIsIm1hcmdpbkJvdHRvbSIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwidGV4dEFsaWduIiwiZGl2Iiwic3R5bGUiLCJzcmMiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/madrabbit.tsx\n"));

/***/ })

});
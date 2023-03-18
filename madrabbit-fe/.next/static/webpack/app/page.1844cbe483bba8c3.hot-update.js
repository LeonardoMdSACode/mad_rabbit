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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input */ \"(app-client)/./components/input.tsx\");\n/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./results */ \"(app-client)/./components/results.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst MadRabbit = ()=>{\n    _s();\n    const CHARACTER_LIMIT = 20;\n    const ENDPOINT = \"API_GATEWAY_ENDPOINT\";\n    const [prompt, setPrompt] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [snippet, setSnippet] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const [keywords, setKeywords] = react__WEBPACK_IMPORTED_MODULE_1___default().useState([]);\n    const [hasResult, setHasResult] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const [isLoading, setIsLoading] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const onSubmit = ()=>{\n        console.log(\"Submitting: \" + prompt);\n        setIsLoading(true);\n        fetch(\"\".concat(ENDPOINT, \"?prompt=\").concat(prompt)).then((res)=>res.json()).then(onResult);\n    };\n    const onResult = (data)=>{\n        setSnippet(data.snippet);\n        setKeywords(data.keywords);\n        setHasResult(true);\n        setIsLoading(false);\n    };\n    const onReset = ()=>{\n        setPrompt(\"\");\n        setHasResult(false);\n        setIsLoading(false);\n    };\n    let displayedElement = null;\n    if (hasResult) {\n        displayedElement = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_results__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            snippet: snippet,\n            keywords: keywords,\n            onReturn: onReset,\n            prompt: prompt\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\leona\\\\Desktop\\\\IT\\\\SaaS_AI\\\\mad_rabbit\\\\madrabbit-fe\\\\components\\\\madrabbit.tsx\",\n            lineNumber: 41,\n            columnNumber: 24\n        }, undefined);\n    } else {\n        displayedElement = /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_input__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            prompt: prompt,\n            setPrompt: setPrompt,\n            onSubmit: onSubmit,\n            isLoading: isLoading,\n            characterLimit: CHARACTER_LIMIT\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\leona\\\\Desktop\\\\IT\\\\SaaS_AI\\\\mad_rabbit\\\\madrabbit-fe\\\\components\\\\madrabbit.tsx\",\n            lineNumber: 44,\n            columnNumber: 5\n        }, undefined);\n    }\n    const containerStyle = {\n        display: \"flex\",\n        flexDirection: \"column\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        height: \"100vh\",\n        backgroundColor: \"darkred\"\n    };\n    const headerStyle = {\n        marginBottom: \"50px\",\n        color: \"red\",\n        fontSize: \"2em\",\n        fontWeight: \"bold\",\n        textAlign: \"center\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: containerStyle,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: headerStyle,\n                children: \"MadRabbit on berserker mode.\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leona\\\\Desktop\\\\IT\\\\SaaS_AI\\\\mad_rabbit\\\\madrabbit-fe\\\\components\\\\madrabbit.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            displayedElement\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leona\\\\Desktop\\\\IT\\\\SaaS_AI\\\\mad_rabbit\\\\madrabbit-fe\\\\components\\\\madrabbit.tsx\",\n        lineNumber: 71,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MadRabbit, \"QH7I+GekXsY0gDxjUAMHNpThP48=\");\n_c = MadRabbit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MadRabbit);\nvar _c;\n$RefreshReg$(_c, \"MadRabbit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9tYWRyYWJiaXQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzBCO0FBQ0U7QUFDSTtBQUdoQyxNQUFNRyxZQUFzQixJQUFNOztJQUVoQyxNQUFNQyxrQkFBMEI7SUFDaEMsTUFBTUMsV0FBbUI7SUFDekIsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdQLHFEQUFjLENBQUM7SUFDM0MsTUFBTSxDQUFDUyxTQUFTQyxXQUFXLEdBQUdWLHFEQUFjLENBQUM7SUFDN0MsTUFBTSxDQUFDVyxVQUFVQyxZQUFZLEdBQUdaLHFEQUFjLENBQUMsRUFBRTtJQUNqRCxNQUFNLENBQUNhLFdBQVdDLGFBQWEsR0FBR2QscURBQWMsQ0FBQyxLQUFLO0lBQ3RELE1BQU0sQ0FBQ2UsV0FBV0MsYUFBYSxHQUFHaEIscURBQWMsQ0FBQyxLQUFLO0lBRXRELE1BQU1pQixXQUFXLElBQU07UUFDckJDLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJiO1FBQzdCVSxhQUFhLElBQUk7UUFDakJJLE1BQU0sR0FBc0JkLE9BQW5CRCxVQUFTLFlBQWlCLE9BQVBDLFNBQzNCZSxJQUFJLENBQUMsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSSxJQUN0QkYsSUFBSSxDQUFDRztJQUNSO0lBRUEsTUFBTUEsV0FBVyxDQUFDQyxPQUFjO1FBQzlCZixXQUFXZSxLQUFLaEIsT0FBTztRQUN2QkcsWUFBWWEsS0FBS2QsUUFBUTtRQUN6QkcsYUFBYSxJQUFJO1FBQ2pCRSxhQUFhLEtBQUs7SUFDcEI7SUFFQSxNQUFNVSxVQUFVLElBQU07UUFDcEJuQixVQUFVO1FBQ1ZPLGFBQWEsS0FBSztRQUNsQkUsYUFBYSxLQUFLO0lBQ3BCO0lBRUEsSUFBSVcsbUJBQW1CLElBQUk7SUFFM0IsSUFBSWQsV0FBVztRQUNiYyxpQ0FBbUIsOERBQUN6QixnREFBT0E7WUFBQ08sU0FBU0E7WUFBU0UsVUFBVUE7WUFBVWlCLFVBQVVGO1lBQVNwQixRQUFRQTs7Ozs7O0lBQy9GLE9BQU87UUFDTHFCLGlDQUNBLDhEQUFDMUIsOENBQUtBO1lBQ0xLLFFBQVFBO1lBQ1JDLFdBQVdBO1lBQ1hVLFVBQVVBO1lBQ1ZGLFdBQVdBO1lBQ1hjLGdCQUFnQnpCOzs7Ozs7SUFFbkIsQ0FBQztJQUVELE1BQU0wQixpQkFBaUI7UUFDckJDLFNBQVM7UUFDVEMsZUFBZTtRQUNmQyxnQkFBZ0I7UUFDaEJDLFlBQVk7UUFDWkMsUUFBUTtRQUNSQyxpQkFBaUI7SUFDbkI7SUFFQSxNQUFNQyxjQUFjO1FBQ2xCQyxjQUFjO1FBQ2RDLE9BQU87UUFDUEMsVUFBVTtRQUNWQyxZQUFZO1FBQ1pDLFdBQVc7SUFDYjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPZDs7MEJBQ1YsOERBQUNhO2dCQUFJQyxPQUFPUDswQkFBYTs7Ozs7O1lBQ3hCVjs7Ozs7OztBQUdQO0dBckVNeEI7S0FBQUE7QUF1RU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWRyYWJiaXQudHN4PzQ0YzYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9pbnB1dFwiO1xuaW1wb3J0IFJlc3VsdHMgZnJvbSBcIi4vcmVzdWx0c1wiO1xuXG5cbmNvbnN0IE1hZFJhYmJpdDogUmVhY3QuRkMgPSAoKSA9PiB7XG5cbiAgY29uc3QgQ0hBUkFDVEVSX0xJTUlUOiBudW1iZXIgPSAyMDtcbiAgY29uc3QgRU5EUE9JTlQ6IHN0cmluZyA9IFwiQVBJX0dBVEVXQVlfRU5EUE9JTlRcIlxuICBjb25zdCBbcHJvbXB0LCBzZXRQcm9tcHRdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtzbmlwcGV0LCBzZXRTbmlwcGV0XSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBba2V5d29yZHMsIHNldEtleXdvcmRzXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2hhc1Jlc3VsdCwgc2V0SGFzUmVzdWx0XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvblN1Ym1pdCA9ICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIlN1Ym1pdHRpbmc6IFwiICsgcHJvbXB0KTtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgZmV0Y2goYCR7RU5EUE9JTlR9P3Byb21wdD0ke3Byb21wdH1gKVxuICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4ob25SZXN1bHQpO1xuICB9O1xuXG4gIGNvbnN0IG9uUmVzdWx0ID0gKGRhdGE6IGFueSkgPT4ge1xuICAgIHNldFNuaXBwZXQoZGF0YS5zbmlwcGV0KTtcbiAgICBzZXRLZXl3b3JkcyhkYXRhLmtleXdvcmRzKTtcbiAgICBzZXRIYXNSZXN1bHQodHJ1ZSk7XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgfTtcblxuICBjb25zdCBvblJlc2V0ID0gKCkgPT4ge1xuICAgIHNldFByb21wdChcIlwiKTtcbiAgICBzZXRIYXNSZXN1bHQoZmFsc2UpO1xuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIH07XG5cbiAgbGV0IGRpc3BsYXllZEVsZW1lbnQgPSBudWxsO1xuXG4gIGlmIChoYXNSZXN1bHQpIHtcbiAgICBkaXNwbGF5ZWRFbGVtZW50ID0gPFJlc3VsdHMgc25pcHBldD17c25pcHBldH0ga2V5d29yZHM9e2tleXdvcmRzfSBvblJldHVybj17b25SZXNldH0gcHJvbXB0PXtwcm9tcHR9IC8+IFxuICB9IGVsc2Uge1xuICAgIGRpc3BsYXllZEVsZW1lbnQgPSAoXG4gICAgPElucHV0XG4gICAgIHByb21wdD17cHJvbXB0fSBcbiAgICAgc2V0UHJvbXB0PXtzZXRQcm9tcHR9IFxuICAgICBvblN1Ym1pdD17b25TdWJtaXR9IFxuICAgICBpc0xvYWRpbmc9e2lzTG9hZGluZ30gXG4gICAgIGNoYXJhY3RlckxpbWl0PXtDSEFSQUNURVJfTElNSVR9IC8+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiZGFya3JlZFwiXG4gIH07XG5cbiAgY29uc3QgaGVhZGVyU3R5bGUgPSB7XG4gICAgbWFyZ2luQm90dG9tOiBcIjUwcHhcIixcbiAgICBjb2xvcjogXCJyZWRcIixcbiAgICBmb250U2l6ZTogXCIyZW1cIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCJcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cbiAgICAgIDxkaXYgc3R5bGU9e2hlYWRlclN0eWxlfT5NYWRSYWJiaXQgb24gYmVyc2Vya2VyIG1vZGUuPC9kaXY+XG4gICAgICB7ZGlzcGxheWVkRWxlbWVudH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1hZFJhYmJpdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIklucHV0IiwiUmVzdWx0cyIsIk1hZFJhYmJpdCIsIkNIQVJBQ1RFUl9MSU1JVCIsIkVORFBPSU5UIiwicHJvbXB0Iiwic2V0UHJvbXB0IiwidXNlU3RhdGUiLCJzbmlwcGV0Iiwic2V0U25pcHBldCIsImtleXdvcmRzIiwic2V0S2V5d29yZHMiLCJoYXNSZXN1bHQiLCJzZXRIYXNSZXN1bHQiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJvblN1Ym1pdCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwib25SZXN1bHQiLCJkYXRhIiwib25SZXNldCIsImRpc3BsYXllZEVsZW1lbnQiLCJvblJldHVybiIsImNoYXJhY3RlckxpbWl0IiwiY29udGFpbmVyU3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsImhlYWRlclN0eWxlIiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXYiLCJzdHlsZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/madrabbit.tsx\n"));

/***/ })

});
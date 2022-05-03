/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.App = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar styled_components_1 = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar AppLayout_1 = __webpack_require__(/*! ./components/AppLayout */ \"./src/components/AppLayout/index.tsx\");\nvar navigation_1 = __webpack_require__(/*! ./navigation */ \"./src/navigation/index.tsx\");\nvar styles_1 = __webpack_require__(/*! ./styles */ \"./src/styles.tsx\");\nvar theme_1 = __webpack_require__(/*! ./theme */ \"./src/theme/index.ts\");\nvar utils_1 = __webpack_require__(/*! ./utils */ \"./src/utils/index.ts\");\nvar App = function () {\n    var _a = (0, react_1.useState)((0, utils_1.getDarkModeValue)()), isDark = _a[0], setIsDark = _a[1];\n    var toggleDarkMode = function () {\n        setIsDark(!isDark);\n        localStorage.setItem('darkMode', String(!isDark));\n    };\n    var theme = (0, react_1.useMemo)(function () { return (0, theme_1.makeTheme)(isDark); }, [isDark]);\n    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsxs)(styled_components_1.ThemeProvider, __assign({ theme: theme }, { children: [(0, jsx_runtime_1.jsx)(styles_1.GlobalStyles, {}), (0, jsx_runtime_1.jsx)(AppLayout_1.AppLayout, __assign({ toggleTheme: toggleDarkMode, isDark: isDark }, { children: (0, jsx_runtime_1.jsx)(navigation_1.Navigation, {}) }))] })) }));\n};\nexports.App = App;\n\n\n//# sourceURL=webpack://xs-and-os/./src/App.tsx?");

/***/ }),

/***/ "./src/components/AppLayout/index.tsx":
/*!********************************************!*\
  !*** ./src/components/AppLayout/index.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AppLayout = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar DarkModeToggle_1 = __webpack_require__(/*! ../DarkModeToggle */ \"./src/components/DarkModeToggle/index.tsx\");\nvar styled_1 = __webpack_require__(/*! ./styled */ \"./src/components/AppLayout/styled.tsx\");\nvar AppLayout = function (_a) {\n    var isDark = _a.isDark, toggleTheme = _a.toggleTheme, children = _a.children;\n    return ((0, jsx_runtime_1.jsx)(styled_1.Wrapper, { children: (0, jsx_runtime_1.jsxs)(styled_1.Container, { children: [(0, jsx_runtime_1.jsx)(styled_1.ToggleWrapper, { children: (0, jsx_runtime_1.jsx)(DarkModeToggle_1.DarkModeToggle, { isDark: isDark, onClick: toggleTheme }) }), children] }) }));\n};\nexports.AppLayout = AppLayout;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/AppLayout/index.tsx?");

/***/ }),

/***/ "./src/components/AppLayout/styled.tsx":
/*!*********************************************!*\
  !*** ./src/components/AppLayout/styled.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.ToggleWrapper = exports.Container = exports.Wrapper = void 0;\nvar styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\"));\nexports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n\\tposition: fixed;\\n\\tleft: 0;\\n\\tright: 0;\\n\\ttop: 0;\\n\\tbottom: 0;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\tbox-sizing: border-box;\\n\\tpadding: 4vh 7vw 0 7vw;\\n\\tbackground-color: \", \";\\n\\tcolor: \", \";\\n\"], [\"\\n\\tposition: fixed;\\n\\tleft: 0;\\n\\tright: 0;\\n\\ttop: 0;\\n\\tbottom: 0;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\tbox-sizing: border-box;\\n\\tpadding: 4vh 7vw 0 7vw;\\n\\tbackground-color: \", \";\\n\\tcolor: \", \";\\n\"])), function (props) { return props.theme.palette.primary; }, function (props) { return props.theme.palette.secondary; });\nexports.Container = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n\\tposition: relative;\\n\\twidth: 100%;\\n\\tmax-width: 600px;\\n\"], [\"\\n\\tposition: relative;\\n\\twidth: 100%;\\n\\tmax-width: 600px;\\n\"])));\nexports.ToggleWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject([\"\\n\\tposition: absolute;\\n\\tright: 0;\\n\\ttop: 0;\\n\"], [\"\\n\\tposition: absolute;\\n\\tright: 0;\\n\\ttop: 0;\\n\"])));\nvar templateObject_1, templateObject_2, templateObject_3;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/AppLayout/styled.tsx?");

/***/ }),

/***/ "./src/components/DarkModeToggle/index.tsx":
/*!*************************************************!*\
  !*** ./src/components/DarkModeToggle/index.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.DarkModeToggle = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar colors_1 = __webpack_require__(/*! ../../theme/colors */ \"./src/theme/colors.ts\");\nvar styled_1 = __webpack_require__(/*! ./styled */ \"./src/components/DarkModeToggle/styled.tsx\");\nvar DarkModeToggle = function (_a) {\n    var isDark = _a.isDark, onClick = _a.onClick;\n    return ((0, jsx_runtime_1.jsxs)(styled_1.Wrapper, __assign({ onMouseDown: onClick }, { children: [!isDark && ((0, jsx_runtime_1.jsxs)(\"svg\", __assign({ xmlns: 'http://www.w3.org/2000/svg', width: '100%', height: '100%', fill: colors_1.colors.black, viewBox: '0 0 16 16' }, { children: [(0, jsx_runtime_1.jsx)(\"path\", { d: 'M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z' }), (0, jsx_runtime_1.jsx)(\"path\", { d: 'M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z' })] }))), isDark && ((0, jsx_runtime_1.jsx)(\"svg\", __assign({ xmlns: 'http://www.w3.org/2000/svg', width: '100%', height: '100%', fill: colors_1.colors.black, viewBox: '0 0 16 16' }, { children: (0, jsx_runtime_1.jsx)(\"path\", { d: 'M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z' }) })))] })));\n};\nexports.DarkModeToggle = DarkModeToggle;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/DarkModeToggle/index.tsx?");

/***/ }),

/***/ "./src/components/DarkModeToggle/styled.tsx":
/*!**************************************************!*\
  !*** ./src/components/DarkModeToggle/styled.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Wrapper = void 0;\nvar styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\"));\nexports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\twidth: 25px;\\n\\theight: 25px;\\n\\tright: 30px;\\n\\ttop: 30px;\\n\\tborder-radius: 50px;\\n\\tbackground-color: \", \";\\n\\tpadding: 7px;\\n\\ttransition: transform 0.3s;\\n\\n\\t@media (hover: hover) and (pointer: fine) {\\n\\t\\t&:hover:not(:active) {\\n\\t\\t\\tfilter: brightness(0.8);\\n\\t\\t}\\n\\t}\\n\\t&:active {\\n\\t\\ttransform: scale(0.7);\\n\\t}\\n\\n\\t@media only screen and (min-device-width: \", \"px) {\\n\\t\\twidth: 30px;\\n\\t\\theight: 30px;\\n\\t}\\n\\t@media only screen and (min-device-width: \", \"px) {\\n\\t\\twidth: 25px;\\n\\t\\theight: 25px;\\n\\t}\\n\"], [\"\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\twidth: 25px;\\n\\theight: 25px;\\n\\tright: 30px;\\n\\ttop: 30px;\\n\\tborder-radius: 50px;\\n\\tbackground-color: \", \";\\n\\tpadding: 7px;\\n\\ttransition: transform 0.3s;\\n\\n\\t@media (hover: hover) and (pointer: fine) {\\n\\t\\t&:hover:not(:active) {\\n\\t\\t\\tfilter: brightness(0.8);\\n\\t\\t}\\n\\t}\\n\\t&:active {\\n\\t\\ttransform: scale(0.7);\\n\\t}\\n\\n\\t@media only screen and (min-device-width: \", \"px) {\\n\\t\\twidth: 30px;\\n\\t\\theight: 30px;\\n\\t}\\n\\t@media only screen and (min-device-width: \", \"px) {\\n\\t\\twidth: 25px;\\n\\t\\theight: 25px;\\n\\t}\\n\"])), function (props) { return props.theme.palette.hightlight; }, function (props) { return props.theme.breakpoints.sm; }, function (props) { return props.theme.breakpoints.md; });\nvar templateObject_1;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/DarkModeToggle/styled.tsx?");

/***/ }),

/***/ "./src/components/Field/Cell/Mark.tsx":
/*!********************************************!*\
  !*** ./src/components/Field/Cell/Mark.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Mark = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar OIcon_1 = __webpack_require__(/*! ./OIcon */ \"./src/components/Field/Cell/OIcon.tsx\");\nvar styled_1 = __webpack_require__(/*! ./styled */ \"./src/components/Field/Cell/styled.tsx\");\nvar XIcon_1 = __webpack_require__(/*! ./XIcon */ \"./src/components/Field/Cell/XIcon.tsx\");\nvar Mark = function (_a) {\n    var value = _a.value;\n    if (value === 0) {\n        return null;\n    }\n    var icon = (0, jsx_runtime_1.jsx)(XIcon_1.XIcon, {});\n    if (value === 2) {\n        icon = (0, jsx_runtime_1.jsx)(OIcon_1.OIcon, {});\n    }\n    return (0, jsx_runtime_1.jsx)(styled_1.MarkWrapper, { children: icon });\n};\nexports.Mark = Mark;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/Field/Cell/Mark.tsx?");

/***/ }),

/***/ "./src/components/Field/Cell/OIcon.tsx":
/*!*********************************************!*\
  !*** ./src/components/Field/Cell/OIcon.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.OIcon = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar OIcon = function () {\n    return ((0, jsx_runtime_1.jsx)(\"svg\", __assign({ xmlns: 'http://www.w3.org/2000/svg', width: '100%', height: '100%', fill: 'currentColor', viewBox: '0 0 16 16' }, { children: (0, jsx_runtime_1.jsx)(\"circle\", { cx: '8', cy: '8', r: '6', stroke: 'currentColor', strokeWidth: '2', fill: 'transparent' }) })));\n};\nexports.OIcon = OIcon;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/Field/Cell/OIcon.tsx?");

/***/ }),

/***/ "./src/components/Field/Cell/XIcon.tsx":
/*!*********************************************!*\
  !*** ./src/components/Field/Cell/XIcon.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.XIcon = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar XIcon = function () {\n    return ((0, jsx_runtime_1.jsx)(\"svg\", __assign({ xmlns: 'http://www.w3.org/2000/svg', width: '100%', height: '100%', fill: 'currentColor', viewBox: '4 4 8 8' }, { children: (0, jsx_runtime_1.jsx)(\"path\", { d: 'M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' }) })));\n};\nexports.XIcon = XIcon;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/Field/Cell/XIcon.tsx?");

/***/ }),

/***/ "./src/components/Field/Cell/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/Field/Cell/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Cell = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar styled_1 = __webpack_require__(/*! ./styled */ \"./src/components/Field/Cell/styled.tsx\");\nvar Mark_1 = __webpack_require__(/*! ./Mark */ \"./src/components/Field/Cell/Mark.tsx\");\nvar Cell = function (_a) {\n    var value = _a.value, isHighlighted = _a.isHighlighted, index = _a.index;\n    return ((0, jsx_runtime_1.jsx)(styled_1.Wrapper, __assign({ isHighlighted: isHighlighted, \"data-index\": index }, { children: (0, jsx_runtime_1.jsx)(Mark_1.Mark, { value: value }) })));\n};\nexports.Cell = Cell;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/Field/Cell/index.tsx?");

/***/ }),

/***/ "./src/components/Field/Cell/styled.tsx":
/*!**********************************************!*\
  !*** ./src/components/Field/Cell/styled.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MarkWrapper = exports.Wrapper = void 0;\nvar styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\"));\nvar colors_1 = __webpack_require__(/*! ../../../theme/colors */ \"./src/theme/colors.ts\");\nexports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n\\tposition: relative;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tbackground-color: \", \";\\n\\tcolor: \", \";\\n\\ttransition: background-color \", \";\\n\"], [\"\\n\\tposition: relative;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tbackground-color: \", \";\\n\\tcolor: \", \";\\n\\ttransition: background-color \", \";\\n\"])), function (props) {\n    return props.isHighlighted ? props.theme.palette.hightlight : props.theme.palette.primary;\n}, function (props) { return (props.isHighlighted ? colors_1.colors.black : props.theme.palette.secondary); }, function (props) { return (props.isHighlighted ? '0.8s' : '0'); });\nvar markAnimation = (0, styled_components_1.keyframes)(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n\\t 0% { transform: scale(0); }\\n 100% { transform: scale(1);}\\n\"], [\"\\n\\t 0% { transform: scale(0); }\\n 100% { transform: scale(1);}\\n\"])));\nexports.MarkWrapper = styled_components_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject([\"\\n\\twidth: 50%;\\n\\theight: 50%;\\n\\tanimation-name: \", \";\\n\\tanimation-duration: 0.3s;\\n\\tanimation-iteration-count: 1;\\n\"], [\"\\n\\twidth: 50%;\\n\\theight: 50%;\\n\\tanimation-name: \", \";\\n\\tanimation-duration: 0.3s;\\n\\tanimation-iteration-count: 1;\\n\"])), markAnimation);\nvar templateObject_1, templateObject_2, templateObject_3;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/Field/Cell/styled.tsx?");

/***/ }),

/***/ "./src/components/Field/RestartCover/RestartIcon.tsx":
/*!***********************************************************!*\
  !*** ./src/components/Field/RestartCover/RestartIcon.tsx ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RestartIcon = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar RestartIcon = function () {\n    return ((0, jsx_runtime_1.jsxs)(\"svg\", __assign({ xmlns: 'http://www.w3.org/2000/svg', width: '60%', height: '60%', fill: 'currentColor', viewBox: '0 0 16 16' }, { children: [(0, jsx_runtime_1.jsx)(\"path\", { d: 'M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z' }), (0, jsx_runtime_1.jsx)(\"path\", { d: 'M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z' })] })));\n};\nexports.RestartIcon = RestartIcon;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/Field/RestartCover/RestartIcon.tsx?");

/***/ }),

/***/ "./src/components/Field/RestartCover/index.tsx":
/*!*****************************************************!*\
  !*** ./src/components/Field/RestartCover/index.tsx ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.RestartCover = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar styled_1 = __webpack_require__(/*! ./styled */ \"./src/components/Field/RestartCover/styled.tsx\");\nvar RestartIcon_1 = __webpack_require__(/*! ./RestartIcon */ \"./src/components/Field/RestartCover/RestartIcon.tsx\");\nvar RestartCover = function (_a) {\n    var isOpen = _a.isOpen, onClick = _a.onClick;\n    if (isOpen == false) {\n        return null;\n    }\n    return ((0, jsx_runtime_1.jsx)(styled_1.Wrapper, __assign({ onClick: onClick }, { children: (0, jsx_runtime_1.jsx)(RestartIcon_1.RestartIcon, {}) })));\n};\nexports.RestartCover = RestartCover;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/Field/RestartCover/index.tsx?");

/***/ }),

/***/ "./src/components/Field/RestartCover/styled.tsx":
/*!******************************************************!*\
  !*** ./src/components/Field/RestartCover/styled.tsx ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Wrapper = void 0;\nvar styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\"));\nvar fadeIn = (0, styled_components_1.keyframes)(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n0% { opacity: 0; transform: rotate(0)}\\n100% { opacity: 1;transform: rotate(360deg)}\\n\"], [\"\\n0% { opacity: 0; transform: rotate(0)}\\n100% { opacity: 1;transform: rotate(360deg)}\\n\"])));\nexports.Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\tbottom: 0;\\n\\tleft: 0;\\n\\tright: 0;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tcolor: \", \";\\n\\tanimation-name: \", \";\\n\\tanimation-duration: 1s;\\n\\tanimation-iteration-count: 1;\\n\\tanimation-timing-function: ease-out;\\n\"], [\"\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\tbottom: 0;\\n\\tleft: 0;\\n\\tright: 0;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tcolor: \", \";\\n\\tanimation-name: \", \";\\n\\tanimation-duration: 1s;\\n\\tanimation-iteration-count: 1;\\n\\tanimation-timing-function: ease-out;\\n\"])), function (props) { return props.theme.palette.secondary; }, fadeIn);\nvar templateObject_1, templateObject_2;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/Field/RestartCover/styled.tsx?");

/***/ }),

/***/ "./src/components/Field/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Field/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Field = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar utils_1 = __webpack_require__(/*! ../../utils */ \"./src/utils/index.ts\");\nvar Cell_1 = __webpack_require__(/*! ./Cell */ \"./src/components/Field/Cell/index.tsx\");\nvar RestartCover_1 = __webpack_require__(/*! ./RestartCover */ \"./src/components/Field/RestartCover/index.tsx\");\nvar styled_1 = __webpack_require__(/*! ./styled */ \"./src/components/Field/styled.tsx\");\nvar Field = function (_a) {\n    var cells = _a.cells, onCellClick = _a.onCellClick, onRestart = _a.onRestart, onEnd = _a.onEnd;\n    var _b = (0, react_1.useState)(null), highlighted = _b[0], setHighlighted = _b[1];\n    var _c = (0, react_1.useState)(false), isRestartCoverOpened = _c[0], setIsRestartCoverOpened = _c[1];\n    var _d = (0, react_1.useState)(false), isEnd = _d[0], setIsEnd = _d[1];\n    (0, react_1.useEffect)(function () {\n        var highlightedCells = (0, utils_1.getCellsIndexesForHighlight)(cells);\n        if (highlightedCells) {\n            setIsEnd(true);\n            setTimeout(function () {\n                setHighlighted(highlightedCells);\n                onEnd(cells[highlightedCells[0]]);\n                setTimeout(function () {\n                    setIsRestartCoverOpened(true);\n                }, 1200);\n            }, 500);\n        }\n        else if (cells.every(function (cell) { return cell !== 0; })) {\n            setIsEnd(true);\n            setIsRestartCoverOpened(true);\n            onEnd(0);\n        }\n    }, [cells]);\n    var handleClick = function (e) {\n        if (isEnd) {\n            return;\n        }\n        var dataIndex = e.target.getAttribute('data-index');\n        if (!dataIndex) {\n            return;\n        }\n        var index = Number(dataIndex);\n        if (cells[index] === 0 && !highlighted) {\n            onCellClick(index);\n        }\n    };\n    var handleRestart = function () {\n        setIsEnd(false);\n        setHighlighted(null);\n        setIsRestartCoverOpened(false);\n        onRestart();\n    };\n    return ((0, jsx_runtime_1.jsxs)(styled_1.Wrapper, __assign({ onClick: handleClick }, { children: [(0, jsx_runtime_1.jsx)(styled_1.CellsWrapper, __assign({ blur: isRestartCoverOpened, isEnd: isEnd }, { children: cells.map(function (cell, i) { return ((0, jsx_runtime_1.jsx)(Cell_1.Cell, { value: cell, isHighlighted: Boolean(highlighted && highlighted.includes(i)), index: i }, i)); }) })), (0, jsx_runtime_1.jsx)(RestartCover_1.RestartCover, { isOpen: isRestartCoverOpened, onClick: handleRestart })] })));\n};\nexports.Field = Field;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/Field/index.tsx?");

/***/ }),

/***/ "./src/components/Field/styled.tsx":
/*!*****************************************!*\
  !*** ./src/components/Field/styled.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.CellsWrapper = exports.Wrapper = void 0;\nvar styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\"));\nexports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n\\tbox-sizing: border-box;\\n\\tposition: relative;\\n\\twidth: 60vw;\\n\\theight: 60vw;\\n\\tfont-size: 30px;\\n\\n\\t@media only screen and (min-device-width: \", \"px) {\\n\\t\\twidth: 50vw;\\n\\t\\theight: 50vw;\\n\\t}\\n\\t@media only screen and (min-device-width: \", \"px) {\\n\\t\\twidth: 25vw;\\n\\t\\theight: 25vw;\\n\\t}\\n\"], [\"\\n\\tbox-sizing: border-box;\\n\\tposition: relative;\\n\\twidth: 60vw;\\n\\theight: 60vw;\\n\\tfont-size: 30px;\\n\\n\\t@media only screen and (min-device-width: \", \"px) {\\n\\t\\twidth: 50vw;\\n\\t\\theight: 50vw;\\n\\t}\\n\\t@media only screen and (min-device-width: \", \"px) {\\n\\t\\twidth: 25vw;\\n\\t\\theight: 25vw;\\n\\t}\\n\"])), function (props) { return props.theme.breakpoints.sm; }, function (props) { return props.theme.breakpoints.md; });\nexports.CellsWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n\\tdisplay: grid;\\n\\tgrid-template-columns: repeat(3, 1fr);\\n\\tgrid-template-rows: repeat(3, 1fr);\\n\\tgap: 1vmin;\\n\\tposition: absolute;\\n\\tbackground-color: \", \";\\n\\ttop: 0;\\n\\tbottom: 0;\\n\\tleft: 0;\\n\\tright: 0;\\n\\tfilter: opacity(\", \");\\n\\ttransition: all \", \";\\n\"], [\"\\n\\tdisplay: grid;\\n\\tgrid-template-columns: repeat(3, 1fr);\\n\\tgrid-template-rows: repeat(3, 1fr);\\n\\tgap: 1vmin;\\n\\tposition: absolute;\\n\\tbackground-color: \", \";\\n\\ttop: 0;\\n\\tbottom: 0;\\n\\tleft: 0;\\n\\tright: 0;\\n\\tfilter: opacity(\", \");\\n\\ttransition: all \", \";\\n\"])), function (props) { return props.theme.palette.secondary; }, function (props) { return (props.blur ? '0.3' : '1'); }, function (props) { return (props.blur ? '.6s' : 0); });\nvar templateObject_1, templateObject_2;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/Field/styled.tsx?");

/***/ }),

/***/ "./src/components/GameLayout/index.tsx":
/*!*********************************************!*\
  !*** ./src/components/GameLayout/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GameLayout = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar routes_1 = __webpack_require__(/*! ../../navigation/routes */ \"./src/navigation/routes.ts\");\nvar styled_1 = __webpack_require__(/*! ./styled */ \"./src/components/GameLayout/styled.tsx\");\nvar GameLayout = function (_a) {\n    var children = _a.children;\n    return ((0, jsx_runtime_1.jsxs)(styled_1.Wrapper, { children: [(0, jsx_runtime_1.jsx)(styled_1.Exit, __assign({ to: routes_1.routes.main }, { children: (0, jsx_runtime_1.jsxs)(\"svg\", __assign({ xmlns: 'http://www.w3.org/2000/svg', width: '100%', height: '100%', fill: 'currentColor', viewBox: '0 0 16 16' }, { children: [(0, jsx_runtime_1.jsx)(\"path\", { d: 'M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z' }), (0, jsx_runtime_1.jsx)(\"path\", { d: 'M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z' })] })) })), children] }));\n};\nexports.GameLayout = GameLayout;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/GameLayout/index.tsx?");

/***/ }),

/***/ "./src/components/GameLayout/styled.tsx":
/*!**********************************************!*\
  !*** ./src/components/GameLayout/styled.tsx ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Exit = exports.Wrapper = void 0;\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\nvar styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\"));\nexports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tdisplay: flex;\\n\\tjustify-content: space-around;\\n\\talign-items: center;\\n\\tflex-direction: column;\\n\"], [\"\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tdisplay: flex;\\n\\tjustify-content: space-around;\\n\\talign-items: center;\\n\\tflex-direction: column;\\n\"])));\nexports.Exit = (0, styled_components_1.default)(react_router_dom_1.Link)(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n\\t@media (hover: hover) and (pointer: fine) {\\n\\t\\t&:hover:not(:active) {\\n\\t\\t\\tfilter: brightness(0.8);\\n\\t\\t}\\n\\t}\\n\\tcolor: \", \";\\n\\twidth: 35px;\\n\\theight: 35px;\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\tuser-select: none;\\n\"], [\"\\n\\t@media (hover: hover) and (pointer: fine) {\\n\\t\\t&:hover:not(:active) {\\n\\t\\t\\tfilter: brightness(0.8);\\n\\t\\t}\\n\\t}\\n\\tcolor: \", \";\\n\\twidth: 35px;\\n\\theight: 35px;\\n\\tposition: absolute;\\n\\ttop: 0;\\n\\tleft: 0;\\n\\tuser-select: none;\\n\"])), function (props) { return props.theme.palette.secondary; });\nvar templateObject_1, templateObject_2;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/GameLayout/styled.tsx?");

/***/ }),

/***/ "./src/components/Logo/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Logo/index.tsx ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Logo = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar styled_components_1 = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar styled_1 = __webpack_require__(/*! ./styled */ \"./src/components/Logo/styled.tsx\");\nvar Logo = function () {\n    var theme = (0, styled_components_1.useTheme)();\n    var xColor = theme.palette.secondary;\n    var oColor = theme.palette.hightlight;\n    return ((0, jsx_runtime_1.jsx)(styled_1.Wrapper, { children: (0, jsx_runtime_1.jsxs)(\"svg\", __assign({ xmlns: 'http://www.w3.org/2000/svg', width: '100%', height: '100%', viewBox: '0 0 343 205', fill: 'none' }, { children: [(0, jsx_runtime_1.jsx)(\"circle\", { cx: '240.5', cy: '102.5', r: '75', stroke: oColor, strokeWidth: '55' }), (0, jsx_runtime_1.jsx)(\"path\", { d: 'M28 171L165 34', stroke: xColor, strokeWidth: '55', strokeLinecap: 'round' }), (0, jsx_runtime_1.jsx)(\"path\", { d: 'M167.5 168.779L35.5001 36.7794', stroke: xColor, strokeWidth: '55', strokeLinecap: 'round' })] })) }));\n};\nexports.Logo = Logo;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/Logo/index.tsx?");

/***/ }),

/***/ "./src/components/Logo/styled.tsx":
/*!****************************************!*\
  !*** ./src/components/Logo/styled.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Wrapper = void 0;\nvar styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\"));\nexports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n\\twidth: 150px;\\n\\theight: 150px;\\n\"], [\"\\n\\twidth: 150px;\\n\\theight: 150px;\\n\"])));\nvar templateObject_1;\n\n\n//# sourceURL=webpack://xs-and-os/./src/components/Logo/styled.tsx?");

/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar client_1 = __webpack_require__(/*! react-dom/client */ \"./node_modules/react-dom/client.js\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\nvar App_1 = __webpack_require__(/*! ./App */ \"./src/App.tsx\");\nvar container = document.querySelector('#app');\nif (container) {\n    var root = (0, client_1.createRoot)(container);\n    root.render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_router_dom_1.BrowserRouter, { children: (0, jsx_runtime_1.jsx)(App_1.App, {}) }) }));\n}\n\n\n//# sourceURL=webpack://xs-and-os/./src/index.tsx?");

/***/ }),

/***/ "./src/navigation/index.tsx":
/*!**********************************!*\
  !*** ./src/navigation/index.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Navigation = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\nvar AIScreen_1 = __webpack_require__(/*! ../screens/AIScreen */ \"./src/screens/AIScreen/index.tsx\");\nvar HotSeatScreen_1 = __webpack_require__(/*! ../screens/HotSeatScreen */ \"./src/screens/HotSeatScreen/index.tsx\");\nvar MenuScreen_1 = __webpack_require__(/*! ../screens/MenuScreen */ \"./src/screens/MenuScreen/index.tsx\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/navigation/routes.ts\");\nvar Navigation = function () { return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: routes_1.routes.main, element: (0, jsx_runtime_1.jsx)(MenuScreen_1.MenuScreen, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: routes_1.routes.ai, element: (0, jsx_runtime_1.jsx)(AIScreen_1.AIScreen, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: routes_1.routes.hotseat, element: (0, jsx_runtime_1.jsx)(HotSeatScreen_1.HotSeatScreen, {}) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: routes_1.routes.network, element: (0, jsx_runtime_1.jsx)(AIScreen_1.AIScreen, {}) })] })); };\nexports.Navigation = Navigation;\n\n\n//# sourceURL=webpack://xs-and-os/./src/navigation/index.tsx?");

/***/ }),

/***/ "./src/navigation/routes.ts":
/*!**********************************!*\
  !*** ./src/navigation/routes.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.routes = void 0;\nvar prefix = '/xs-and-os';\nexports.routes = {\n    main: prefix + '/',\n    ai: prefix + '/ai',\n    hotseat: prefix + '/hotseat',\n    network: prefix + '/network',\n};\n\n\n//# sourceURL=webpack://xs-and-os/./src/navigation/routes.ts?");

/***/ }),

/***/ "./src/screens/AIScreen/index.tsx":
/*!****************************************!*\
  !*** ./src/screens/AIScreen/index.tsx ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.AIScreen = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\nvar AIScreen = function () {\n    return ((0, jsx_runtime_1.jsxs)(\"div\", __assign({ style: {\n            display: 'flex',\n            justifyContent: 'center',\n            alignItems: 'center',\n            flexDirection: 'column',\n        } }, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Link, __assign({ to: '/' }, { children: \"TO MENU\" })), \"Game\"] })));\n};\nexports.AIScreen = AIScreen;\n\n\n//# sourceURL=webpack://xs-and-os/./src/screens/AIScreen/index.tsx?");

/***/ }),

/***/ "./src/screens/HotSeatScreen/Stats/Stat.tsx":
/*!**************************************************!*\
  !*** ./src/screens/HotSeatScreen/Stats/Stat.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Stat = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar styled_1 = __webpack_require__(/*! ./styled */ \"./src/screens/HotSeatScreen/Stats/styled.tsx\");\nvar Stat = function (_a) {\n    var count = _a.count, title = _a.title;\n    return ((0, jsx_runtime_1.jsxs)(styled_1.StatWrapper, { children: [(0, jsx_runtime_1.jsx)(\"div\", { children: title }), (0, jsx_runtime_1.jsx)(styled_1.Count, { children: count })] }));\n};\nexports.Stat = Stat;\n\n\n//# sourceURL=webpack://xs-and-os/./src/screens/HotSeatScreen/Stats/Stat.tsx?");

/***/ }),

/***/ "./src/screens/HotSeatScreen/Stats/index.tsx":
/*!***************************************************!*\
  !*** ./src/screens/HotSeatScreen/Stats/index.tsx ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Stats = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar Stat_1 = __webpack_require__(/*! ./Stat */ \"./src/screens/HotSeatScreen/Stats/Stat.tsx\");\nvar styled_1 = __webpack_require__(/*! ./styled */ \"./src/screens/HotSeatScreen/Stats/styled.tsx\");\nvar text = ['Player(X)', 'Draw', 'Player(O)'];\nvar Stats = function (_a) {\n    var statistics = _a.statistics, highlightInfo = _a.highlightInfo;\n    return ((0, jsx_runtime_1.jsx)(styled_1.Wrapper, { children: text.map(function (text, i) {\n            return ((0, jsx_runtime_1.jsx)(\"div\", __assign({ style: { opacity: highlightInfo[i] ? 1 : '.3' } }, { children: (0, jsx_runtime_1.jsx)(Stat_1.Stat, { title: text, count: statistics[i] }, i) })));\n        }) }));\n};\nexports.Stats = Stats;\n\n\n//# sourceURL=webpack://xs-and-os/./src/screens/HotSeatScreen/Stats/index.tsx?");

/***/ }),

/***/ "./src/screens/HotSeatScreen/Stats/styled.tsx":
/*!****************************************************!*\
  !*** ./src/screens/HotSeatScreen/Stats/styled.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Count = exports.StatWrapper = exports.Wrapper = void 0;\nvar styled_components_1 = __importStar(__webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\"));\nexports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n\\tdisplay: flex;\\n\\twidth: 80%;\\n\\tjustify-content: space-around;\\n\\talign-items: center;\\n\\tpadding: 10px;\\n\\tmargin-top: 30px;\\n\\tmargin-bottom: 50px;\\n\\ttext-transform: uppercase;\\n\"], [\"\\n\\tdisplay: flex;\\n\\twidth: 80%;\\n\\tjustify-content: space-around;\\n\\talign-items: center;\\n\\tpadding: 10px;\\n\\tmargin-top: 30px;\\n\\tmargin-bottom: 50px;\\n\\ttext-transform: uppercase;\\n\"])));\nexports.StatWrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n\\tfont-size: 15px;\\n\\tfont-weight: bold;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\tgap: 10px;\\n\"], [\"\\n\\tfont-size: 15px;\\n\\tfont-weight: bold;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\tgap: 10px;\\n\"])));\nvar countAnimation = (0, styled_components_1.keyframes)(templateObject_3 || (templateObject_3 = __makeTemplateObject([\"\\n\\t 0% { transform: scale(0); }\\n 100% { transform: scale(1);}\\n\"], [\"\\n\\t 0% { transform: scale(0); }\\n 100% { transform: scale(1);}\\n\"])));\nexports.Count = styled_components_1.default.div(templateObject_4 || (templateObject_4 = __makeTemplateObject([\"\\n\\tfont-size: 35px;\\n\\tanimation-name: \", \";\\n\"], [\"\\n\\tfont-size: 35px;\\n\\tanimation-name: \", \";\\n\"])), countAnimation);\nvar templateObject_1, templateObject_2, templateObject_3, templateObject_4;\n\n\n//# sourceURL=webpack://xs-and-os/./src/screens/HotSeatScreen/Stats/styled.tsx?");

/***/ }),

/***/ "./src/screens/HotSeatScreen/index.tsx":
/*!*********************************************!*\
  !*** ./src/screens/HotSeatScreen/index.tsx ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nvar __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {\n    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {\n        if (ar || !(i in from)) {\n            if (!ar) ar = Array.prototype.slice.call(from, 0, i);\n            ar[i] = from[i];\n        }\n    }\n    return to.concat(ar || Array.prototype.slice.call(from));\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.HotSeatScreen = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar react_1 = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar Field_1 = __webpack_require__(/*! ../../components/Field */ \"./src/components/Field/index.tsx\");\nvar GameLayout_1 = __webpack_require__(/*! ../../components/GameLayout */ \"./src/components/GameLayout/index.tsx\");\nvar Stats_1 = __webpack_require__(/*! ./Stats */ \"./src/screens/HotSeatScreen/Stats/index.tsx\");\nvar HotSeatScreen = function () {\n    var _a = (0, react_1.useState)(new Array(9).fill(0)), cells = _a[0], setCells = _a[1];\n    var _b = (0, react_1.useState)(1), startMark = _b[0], setStartMark = _b[1];\n    var _c = (0, react_1.useState)(startMark), mark = _c[0], setMark = _c[1];\n    var _d = (0, react_1.useState)([0, 0, 0]), stats = _d[0], setStats = _d[1];\n    var _e = (0, react_1.useState)([\n        true,\n        false,\n        false,\n    ]), highlightedStats = _e[0], setHighlightedStats = _e[1];\n    var onCellClick = function (i) {\n        var newCells = __spreadArray([], cells, true);\n        newCells[i] = mark;\n        setCells(newCells);\n        setMark(function (prevSigh) { return (prevSigh === 1 ? 2 : 1); });\n        setHighlightedStats(mark === 1 ? [false, false, true] : [true, false, false]);\n    };\n    var restart = function () {\n        var newMark = startMark === 1 ? 2 : 1;\n        setCells(new Array(9).fill(0));\n        setStartMark(newMark);\n        setMark(newMark);\n        setHighlightedStats(newMark !== 1 ? [false, false, true] : [true, false, false]);\n    };\n    var onEnd = function (winner) {\n        var newStats = __spreadArray([], stats, true);\n        if (winner === 0) {\n            newStats[1] += 1;\n        }\n        if (winner === 1) {\n            newStats[0] += 1;\n        }\n        if (winner === 2) {\n            newStats[2] += 1;\n        }\n        setHighlightedStats([true, true, true]);\n        setStats(newStats);\n    };\n    return ((0, jsx_runtime_1.jsx)(GameLayout_1.GameLayout, { children: (0, jsx_runtime_1.jsxs)(\"div\", __assign({ style: {\n                width: '100%',\n                height: '100%',\n                display: 'flex',\n                flexDirection: 'column',\n                justifyContent: 'center',\n                alignItems: 'center',\n                boxSizing: 'border-box',\n                paddingTop: '130px',\n            } }, { children: [(0, jsx_runtime_1.jsx)(Field_1.Field, { cells: cells, onCellClick: onCellClick, onRestart: restart, onEnd: onEnd }), (0, jsx_runtime_1.jsx)(Stats_1.Stats, { statistics: stats, highlightInfo: highlightedStats })] })) }));\n};\nexports.HotSeatScreen = HotSeatScreen;\n\n\n//# sourceURL=webpack://xs-and-os/./src/screens/HotSeatScreen/index.tsx?");

/***/ }),

/***/ "./src/screens/MenuScreen/index.tsx":
/*!******************************************!*\
  !*** ./src/screens/MenuScreen/index.tsx ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MenuScreen = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar Logo_1 = __webpack_require__(/*! ../../components/Logo */ \"./src/components/Logo/index.tsx\");\nvar routes_1 = __webpack_require__(/*! ../../navigation/routes */ \"./src/navigation/routes.ts\");\nvar styled_1 = __webpack_require__(/*! ./styled */ \"./src/screens/MenuScreen/styled.tsx\");\nvar MenuScreen = function () {\n    console.log('remder MENU');\n    return ((0, jsx_runtime_1.jsxs)(styled_1.Wrapper, { children: [(0, jsx_runtime_1.jsx)(Logo_1.Logo, {}), (0, jsx_runtime_1.jsxs)(styled_1.ItemsBlock, { children: [(0, jsx_runtime_1.jsx)(styled_1.MenuItem, __assign({ disabled: true, to: routes_1.routes.ai }, { children: \"VERSUS AI\" })), (0, jsx_runtime_1.jsx)(styled_1.MenuItem, __assign({ to: routes_1.routes.hotseat }, { children: \"Hot Seat\" })), (0, jsx_runtime_1.jsx)(styled_1.MenuItem, __assign({ disabled: true, to: routes_1.routes.ai }, { children: \"Network\" }))] }), (0, jsx_runtime_1.jsx)(\"a\", __assign({ style: { width: '35px' }, href: 'https://github.com/Alexey1380', target: '_blank' }, { children: (0, jsx_runtime_1.jsx)(\"svg\", __assign({ xmlns: 'http://www.w3.org/2000/svg', width: '100%', height: '100%', fill: 'currentColor', viewBox: '0 0 16 16' }, { children: (0, jsx_runtime_1.jsx)(\"path\", { d: 'M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' }) })) }))] }));\n};\nexports.MenuScreen = MenuScreen;\n\n\n//# sourceURL=webpack://xs-and-os/./src/screens/MenuScreen/index.tsx?");

/***/ }),

/***/ "./src/screens/MenuScreen/styled.tsx":
/*!*******************************************!*\
  !*** ./src/screens/MenuScreen/styled.tsx ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MenuItem = exports.ItemsBlock = exports.Wrapper = void 0;\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/index.js\");\nvar styled_components_1 = __importDefault(__webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\"));\nexports.Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n\\tbox-sizing: border-box;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\tjustify-content: space-around;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tpadding-top: 50px;\\n\\tpadding-bottom: 35px;\\n\"], [\"\\n\\tbox-sizing: border-box;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\talign-items: center;\\n\\tjustify-content: space-around;\\n\\twidth: 100%;\\n\\theight: 100%;\\n\\tpadding-top: 50px;\\n\\tpadding-bottom: 35px;\\n\"])));\nexports.ItemsBlock = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([\"\\n\\tmargin-top: 90px;\\n\\tmargin-bottom: 40px;\\n\\talign-self: center;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\twidth: 80%;\\n\\tgap: 10px;\\n\"], [\"\\n\\tmargin-top: 90px;\\n\\tmargin-bottom: 40px;\\n\\talign-self: center;\\n\\tdisplay: flex;\\n\\tflex-direction: column;\\n\\twidth: 80%;\\n\\tgap: 10px;\\n\"])));\nexports.MenuItem = (0, styled_components_1.default)(react_router_dom_1.Link)(templateObject_3 || (templateObject_3 = __makeTemplateObject([\"\\n\\t@media (hover: hover) and (pointer: fine) {\\n\\t\\t&:hover:not(:active) {\\n\\t\\t\\tfilter: brightness(0.8);\\n\\t\\t}\\n\\t}\\n\\tpointer-events: \", \";\\n\\topacity: \", \";\\n\\tcolor: inherit;\\n\\tfont-weight: bold;\\n\\tfont-size: 17px;\\n\\tborder: none;\\n\\tbox-sizing: border-box;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tbackground-color: \", \";\\n\\tcolor: \", \";\\n\\twidth: 100%;\\n\\tborder-radius: 8px;\\n\\tmin-height: 40px;\\n\\ttext-decoration: none;\\n\\ttext-transform: uppercase;\\n\"], [\"\\n\\t@media (hover: hover) and (pointer: fine) {\\n\\t\\t&:hover:not(:active) {\\n\\t\\t\\tfilter: brightness(0.8);\\n\\t\\t}\\n\\t}\\n\\tpointer-events: \", \";\\n\\topacity: \", \";\\n\\tcolor: inherit;\\n\\tfont-weight: bold;\\n\\tfont-size: 17px;\\n\\tborder: none;\\n\\tbox-sizing: border-box;\\n\\tdisplay: flex;\\n\\tjustify-content: center;\\n\\talign-items: center;\\n\\tbackground-color: \", \";\\n\\tcolor: \", \";\\n\\twidth: 100%;\\n\\tborder-radius: 8px;\\n\\tmin-height: 40px;\\n\\ttext-decoration: none;\\n\\ttext-transform: uppercase;\\n\"])), function (props) { return (props.disabled ? 'none' : 'all'); }, function (props) { return (props.disabled ? '0.1' : 1); }, function (props) { return props.theme.palette.secondary; }, function (props) { return props.theme.palette.primary; });\nvar templateObject_1, templateObject_2, templateObject_3;\n\n\n//# sourceURL=webpack://xs-and-os/./src/screens/MenuScreen/styled.tsx?");

/***/ }),

/***/ "./src/styles.tsx":
/*!************************!*\
  !*** ./src/styles.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {\n    if (Object.defineProperty) { Object.defineProperty(cooked, \"raw\", { value: raw }); } else { cooked.raw = raw; }\n    return cooked;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.GlobalStyles = void 0;\nvar jsx_runtime_1 = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\nvar styled_components_1 = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar styled_normalize_1 = __webpack_require__(/*! styled-normalize */ \"./node_modules/styled-normalize/dist/index.js\");\nvar Styles = (0, styled_components_1.createGlobalStyle)(templateObject_1 || (templateObject_1 = __makeTemplateObject([\"\\n\\t* { user-select: none; }\\n\\t*::selection { background: none; }\\n\\t*::-moz-selection { background: none; }\\n\\tbody {\\n\\t\\tfont-family: 'PT Sans', sans-serif;\\n\\t\\tbackground-color: \", \";\\n\\t}\\n\\ta {\\n\\t\\tcolor: \", \"\\n\\t}\\n\"], [\"\\n\\t* { user-select: none; }\\n\\t*::selection { background: none; }\\n\\t*::-moz-selection { background: none; }\\n\\tbody {\\n\\t\\tfont-family: 'PT Sans', sans-serif;\\n\\t\\tbackground-color: \", \";\\n\\t}\\n\\ta {\\n\\t\\tcolor: \", \"\\n\\t}\\n\"])), function (props) { return props.theme.palette.primary; }, function (props) { return props.theme.palette.secondary; });\nvar GlobalStyles = function () {\n    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(styled_normalize_1.Normalize, {}), (0, jsx_runtime_1.jsx)(Styles, {})] }));\n};\nexports.GlobalStyles = GlobalStyles;\nvar templateObject_1;\n\n\n//# sourceURL=webpack://xs-and-os/./src/styles.tsx?");

/***/ }),

/***/ "./src/theme/colors.ts":
/*!*****************************!*\
  !*** ./src/theme/colors.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.colors = void 0;\nexports.colors = {\n    white: '#eaeaea',\n    black: '#262525',\n    yellow: '#FFCF25',\n};\n\n\n//# sourceURL=webpack://xs-and-os/./src/theme/colors.ts?");

/***/ }),

/***/ "./src/theme/index.ts":
/*!****************************!*\
  !*** ./src/theme/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.makeTheme = void 0;\nvar colors_1 = __webpack_require__(/*! ./colors */ \"./src/theme/colors.ts\");\nvar dark = {\n    primary: colors_1.colors.black,\n    secondary: colors_1.colors.white,\n};\nvar light = {\n    primary: colors_1.colors.white,\n    secondary: colors_1.colors.black,\n};\nvar makeTheme = function (isDark) {\n    var additionColors = isDark ? dark : light;\n    return {\n        breakpoints: {\n            sm: 600,\n            md: 900,\n            lg: 1200,\n            xl: 1536,\n        },\n        palette: __assign({ hightlight: colors_1.colors.yellow }, additionColors),\n    };\n};\nexports.makeTheme = makeTheme;\n\n\n//# sourceURL=webpack://xs-and-os/./src/theme/index.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getCellsIndexesForHighlight = exports.getDarkModeValue = void 0;\nfunction getDarkModeValue() {\n    var localDarkMode = localStorage.getItem('darkMode');\n    if (localDarkMode !== null) {\n        return localDarkMode === 'true';\n    }\n    return window.matchMedia('(prefers-color-scheme: dark)').matches === true;\n}\nexports.getDarkModeValue = getDarkModeValue;\nfunction getCellsIndexesForHighlight(cells) {\n    var lines = [\n        [0, 1, 2],\n        [3, 4, 5],\n        [6, 7, 8],\n        [0, 3, 6],\n        [1, 4, 7],\n        [2, 5, 8],\n        [0, 4, 8],\n        [2, 4, 6],\n    ];\n    var result = lines.find(function (line) {\n        return line.every(function (index) {\n            return cells[line[0]] !== 0 && cells[index] === cells[line[0]];\n        });\n    });\n    if (result) {\n        return result;\n    }\n    return null;\n}\nexports.getCellsIndexesForHighlight = getCellsIndexesForHighlight;\n\n\n//# sourceURL=webpack://xs-and-os/./src/utils/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkxs_and_os"] = self["webpackChunkxs_and_os"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors"], () => (__webpack_require__("./src/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
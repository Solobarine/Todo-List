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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#container {\\n  background: linear-gradient(gray, #fff);\\n}\\n\\n#display-tasks {\\n  align-content: center;\\n  padding: 8%;\\n  margin-bottom: 30px;\\n}\\n\\n.heading {\\n  font-size: 40px;\\n  text-align: center;\\n  padding-top: 20px;\\n}\\n\\n#headdy {\\n  text-align: center;\\n  margin-bottom: 30px;\\n}\\n\\n.task-name {\\n  height: 40px;\\n  width: 320px;\\n}\\n\\n#addBtn {\\n  height: 40px;\\n  background: lime;\\n  padding: 0 20px;\\n}\\n\\n.clear-button {\\n  height: 40px;\\n  background: linear-gradient(180deg, yellow, red);\\n}\\n\\n.shell {\\n  display: grid;\\n  grid-template-columns: 5% 73% 22%;\\n  width: 50%;\\n  background-color: #ffe;\\n  margin-left: 25%;\\n  margin-bottom: 20px;\\n}\\n\\n.checkbox {\\n  grid-area: 1/1/span1/span 1;\\n  padding-top: 30%;\\n}\\n\\n.task-item {\\n  grid-area: 1/2/span 1/span 1;\\n  text-align: center;\\n}\\n\\n.remBtn {\\n  grid-area: 1/3/span 1/span 1;\\n  height: 70%;\\n  margin-top: 6.5%;\\n  margin-right: 8px;\\n  background-color: red;\\n  color: #fff;\\n  border-radius: 10px;\\n  border: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/taskarray.js */ \"./src/modules/taskarray.js\");\n/* harmony import */ var _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/elements.js */ \"./src/modules/elements.js\");\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/modules/functions.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n// ----------------- Import Required Elements\n\n\n\n\n\n// ----------------- Collect data from Local Storage\nconst store = localStorage.getItem('listOfTasks');\n\nif (store) {\n  _modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(...JSON.parse(store));\n} else {\n  _modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; // eslint-disable-line\n}\n\n// ------------------ Load Avaliable Tasks\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_2__.reloadTask();\n\n// ------------------ Event Listener for Add Button\n_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.addBtn.addEventListener('click', () => {\n  const input = _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.userInput.value;\n  const comp = 'false';\n  const index = _modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length;\n  _modules_functions_js__WEBPACK_IMPORTED_MODULE_2__.addTask(input, comp, index);\n  _modules_functions_js__WEBPACK_IMPORTED_MODULE_2__.loadTask(index);\n  localStorage.setItem('listOfTasks', JSON.stringify(_modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n});\n\n// ------------------ Check the Box if b is set to true\nfor (let i = 0; i < _modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n  if (_modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].b === true) {\n    _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.taskContainer.children[i].children[0].checked = true;\n    _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.taskContainer.children[i].classList.add('change-color');\n    _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.taskContainer.children[i].children[1].style.textDecoration = 'line-through';\n  } else {\n    _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.taskContainer.children[i].classList.remove('change-color');\n  }\n}\n\n// -----------------  Event Listener for CheckBox\n_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.taskContainer.addEventListener('click', (e) => {\n  if (e.target.classList.contains('checkbox')) {\n    const checkItem = e.target.parentElement;\n    const item = e.target.parentElement.children[0];\n    const checkIndex = _modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findIndex((c) => c.a === checkItem.querySelector('.task-item').innerText);\n    _modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][checkIndex].b = item.checked;\n    if (item.checked === true) {\n      _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.taskContainer.children[checkIndex].children[1].style.textDecoration = 'line-through';\n      checkItem.classList.add('change-color');\n    } else {\n      _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.taskContainer.children[checkIndex].children[1].style.textDecoration = 'none';\n      checkItem.classList.remove('change-color');\n    }\n    localStorage.setItem('listOfTasks', JSON.stringify(_modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n  }\n});\n\n// --------------------- Event Listener to Remove Button\n_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.taskContainer.addEventListener('click', (e) => {\n  if (e.target.classList.contains('remBtn')) {\n    const taskCon = e.target.parentElement;\n    const taskIndex = _modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findIndex((t) => t.a === taskCon.querySelector('.task-item').innerText);\n    _modules_functions_js__WEBPACK_IMPORTED_MODULE_2__.deleteTask(taskIndex);\n    _modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.taskContainer.removeChild(taskCon);\n    _modules_functions_js__WEBPACK_IMPORTED_MODULE_2__.refreshIndex();\n    localStorage.setItem('listOfTasks', JSON.stringify(_modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n  }\n});\n\n// ---------------------- Edit To Do\n_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.taskContainer.addEventListener('click', (e) => {\n  if (e.target.classList.contains('task-item')) {\n    const repParent = e.target.parentElement;\n    const repTask = e.target.parentElement.children[1];\n    const repInput = document.createElement('input');\n    const taskIndex = _modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findIndex((t) => t.a === repParent.querySelector('.task-item').innerText);\n    repInput.className = 'repInput';\n    repInput.setAttribute('type', 'text');\n    repParent.replaceChild(repInput, repTask);\n    // -------------------- Collect User Input\n    repInput.addEventListener('keypress', (e) => {\n      if (e.key === 'Enter') {\n        const val = repInput.value;\n        // ------------------------ Replace The Old Task\n        _modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][taskIndex].a = val;\n        repParent.replaceChild(repTask, repInput);\n        repTask.textContent = val;\n        localStorage.setItem('listOfTasks', JSON.stringify(_modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n      }\n      localStorage.setItem('listOfTasks', JSON.stringify(_modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n    });\n  }\n});\n\n// ------------------- Function to clear all completed Tasks\nconst clearAll = () => {\n  for (let i = 0; i < _modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n    if (_modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].b === true) {\n      _modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(i, 1);\n      localStorage.setItem('listOfTasks', JSON.stringify(_modules_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]));\n    }\n  }\n};\n\n// ------------------- Delete All Completed Tasks\n_modules_elements_js__WEBPACK_IMPORTED_MODULE_1__.clearCompleted.addEventListener('click', () => {\n  clearAll();\n  _modules_functions_js__WEBPACK_IMPORTED_MODULE_2__.reloadTask();\n  _modules_functions_js__WEBPACK_IMPORTED_MODULE_2__.refreshIndex();\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/elements.js":
/*!*********************************!*\
  !*** ./src/modules/elements.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addBtn\": () => (/* binding */ addBtn),\n/* harmony export */   \"clearCompleted\": () => (/* binding */ clearCompleted),\n/* harmony export */   \"taskContainer\": () => (/* binding */ taskContainer),\n/* harmony export */   \"userInput\": () => (/* binding */ userInput)\n/* harmony export */ });\n// Import Elements\nconst userInput = document.querySelector('.task-name');\nconst addBtn = document.querySelector('#addBtn');\nconst clearCompleted = document.querySelector('.clear-button');\nconst taskContainer = document.querySelector('.show-tasks');\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/elements.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask),\n/* harmony export */   \"deleteTask\": () => (/* binding */ deleteTask),\n/* harmony export */   \"loadTask\": () => (/* binding */ loadTask),\n/* harmony export */   \"refreshIndex\": () => (/* binding */ refreshIndex),\n/* harmony export */   \"reloadTask\": () => (/* binding */ reloadTask)\n/* harmony export */ });\n/* harmony import */ var _taskarray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskarray.js */ \"./src/modules/taskarray.js\");\n/* harmony import */ var _elements_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./elements.js */ \"./src/modules/elements.js\");\n\n\n\n// Add Tasks to Array\nconst addTask = (x, y, z) => {\n  const obj = { description: x, completed: y, id: z };\n  _taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].push(obj);\n};\n\n// Load Tasks\nconst loadTask = (i) => {\n  _elements_js__WEBPACK_IMPORTED_MODULE_1__.taskContainer.innerHTML += `<div class=\"shell\">\n                                     <input type=\"checkbox\" class=\"checkbox\"/>\n                                     <p class=\"task-item\">${_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].description}</p>\n                                     <button class=\"remBtn\" type=\"button\">Remove</button>\n                                     </div>`;\n};\n\n// Reload Tasks\nconst reloadTask = () => {\n  _elements_js__WEBPACK_IMPORTED_MODULE_1__.taskContainer.innerHTML = '';\n  for (let i = 0; i < _taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n    _elements_js__WEBPACK_IMPORTED_MODULE_1__.taskContainer.innerHTML += `<div class=\"shell\">\n                                     <input type=\"checkbox\" class=\"checkbox\"/>\n                                     <p class=\"task-item\">${_taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].description}</p>\n                                     <button class=\"remBtn\" type=\"button\">Remove</button>\n                                     </div>`;\n  }\n};\n\n// Delete Task\nconst deleteTask = (i) => {\n  _taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splice(i, 1);\n};\n\n// Reload Task\nconst refreshIndex = () => {\n  for (let i = 0; i < _taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].length; i += 1) {\n    _taskarray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][i].id = i;\n  }\n};\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/functions.js?");

/***/ }),

/***/ "./src/modules/taskarray.js":
/*!**********************************!*\
  !*** ./src/modules/taskarray.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst taskList = [];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskList);\n\n\n//# sourceURL=webpack://to-do-list/./src/modules/taskarray.js?");

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
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

/***/ "./src/aboutus.js":
/*!************************!*\
  !*** ./src/aboutus.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAboutus: () => (/* binding */ renderAboutus)\n/* harmony export */ });\nconst renderAboutus = () =>{\r\n    const content = document.querySelector(\"#content\");\r\n    content.innerHTML = \"\";\r\n\r\n    const p = document.createElement(\"p\");\r\n    p.textContent = \"This is About Us\";\r\n\r\n    content.appendChild(p);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://Restaurant-Page/./src/aboutus.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHomepage: () => (/* binding */ renderHomepage)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _aboutus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutus */ \"./src/aboutus.js\");\n\r\n\r\n\r\nconst renderHomepage = () =>{\r\n    // console.log(\"this is renderHomepage\");\r\n    const content = document.querySelector(\"#content\");\r\n    content.innerHTML = \"\";\r\n    \r\n    //content creation\r\n    const blankDiv = document.createElement(\"div\");\r\n    blankDiv.className = \"blank\";\r\n    const textDiv = document.createElement(\"div\");\r\n    textDiv.className = \"text\";\r\n\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"Spice Shuttle\";\r\n    const subheading = document.createElement(\"h2\");\r\n    const commaSpan = document.createElement(\"span\");\r\n    commaSpan.textContent = \"❝ \";\r\n    commaSpan.id = \"comma\";\r\n    subheading.appendChild(commaSpan);\r\n    const subheadingSpan = document.createElement(\"span\");\r\n    // subheading.textContent = \"Where Indian flavours come to life\";\r\n    subheadingSpan.textContent = \"Where Indian flavours come to life\";\r\n    subheading.appendChild(commaSpan);\r\n    subheading.appendChild(subheadingSpan);\r\n    const para1 = document.createElement(\"p\");\r\n    para1.textContent = \"Experience the most excuisite blends of flavour. Craving for some indian cuisine? We got you. Wanna try something new ? We got you!\";\r\n    const para2 = document.createElement(\"p\");\r\n    para2.textContent = \"Visite us or, order online, we do both ;)\";\r\n\r\n    const bttnsDiv = document.createElement(\"div\");\r\n    bttnsDiv.className = \"bttns\";\r\n    const exploreBttn = document.createElement(\"button\");\r\n    exploreBttn.className = \"bttn\";\r\n    exploreBttn.id = \"menu\";\r\n    exploreBttn.textContent = \"Explore Menu\";\r\n    const visitusBttn = document.createElement(\"button\");\r\n    visitusBttn.className = \"bttn\";\r\n    visitusBttn.id = \"visit\";\r\n    visitusBttn.textContent = \"Visit Us\";\r\n\r\n    exploreBttn.addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_0__.renderMenu);\r\n    visitusBttn.addEventListener(\"click\", _aboutus__WEBPACK_IMPORTED_MODULE_1__.renderAboutus);\r\n    \r\n    bttnsDiv.appendChild(exploreBttn);\r\n    bttnsDiv.appendChild(visitusBttn);\r\n\r\n    const socialDiv = document.createElement(\"div\");\r\n    socialDiv.className = \"social-links\";\r\n    const socialIconClasses = [\"fa-facebook-f\", \"fa-instagram\", \"fa-x-twitter\"];\r\n    for(const iconClass of socialIconClasses){\r\n        const socialLink = document.createElement(\"a\");\r\n        const icon = document.createElement(\"i\");\r\n        icon.classList.add(\"fa-brands\");\r\n        icon.classList.add(iconClass);\r\n\r\n        socialLink.appendChild(icon);\r\n        socialDiv.appendChild(socialLink);\r\n    }\r\n\r\n    textDiv.appendChild(heading);\r\n    textDiv.appendChild(subheading);\r\n    textDiv.appendChild(para1);\r\n    textDiv.appendChild(para2);\r\n    textDiv.appendChild(bttnsDiv);\r\n    textDiv.appendChild(socialDiv);\r\n\r\n\r\n    content.appendChild(blankDiv);\r\n    content.appendChild(textDiv);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://Restaurant-Page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _aboutus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutus */ \"./src/aboutus.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_nav__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\r\n(0,_homepage__WEBPACK_IMPORTED_MODULE_1__.renderHomepage)();\r\n\r\nconst home = document.querySelector(\"nav li:nth-child(1) a\");\r\nconst menu = document.querySelector(\"nav li:nth-child(2) a\");\r\nconst aboutus = document.querySelector(\"nav li:nth-child(3) a\");\r\n\r\nconsole.log(home);\r\n\r\nhome.addEventListener(\"click\", _homepage__WEBPACK_IMPORTED_MODULE_1__.renderHomepage);\r\nmenu.addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_2__.renderMenu);\r\naboutus.addEventListener(\"click\", _aboutus__WEBPACK_IMPORTED_MODULE_3__.renderAboutus);\r\n// renderHomepage();\n\n//# sourceURL=webpack://Restaurant-Page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenu: () => (/* binding */ renderMenu)\n/* harmony export */ });\nconst renderMenu = () =>{\r\n    const content = document.querySelector(\"#content\");\r\n    content.innerHTML = \"\";\r\n\r\n    const p = document.createElement(\"p\");\r\n    p.textContent = \"This is menu\";\r\n\r\n    content.appendChild(p);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://Restaurant-Page/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderNav: () => (/* binding */ renderNav)\n/* harmony export */ });\nconst renderNav = () =>{\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    //nav creation\r\n    const header = document.createElement(\"header\");\r\n    const h1 = document.createElement(\"h1\");\r\n    h1.textContent = \"Logo\";\r\n    const label = document.createElement(\"label\");\r\n    label.htmlFor = \"mobile-nav\";\r\n    label.id = \"mobile-nav-label\";\r\n    const hamburgericon = document.createElement(\"span\");\r\n    label.appendChild(hamburgericon);\r\n    const input = document.createElement(\"input\");\r\n    input.type = \"checkbox\";\r\n    input.setAttribute(\"id\", \"mobile-nav\")\r\n    const nav = document.createElement(\"nav\");\r\n    const ul = document.createElement(\"ul\");\r\n    const arrayLinks = [\"Home\", \"Menu\", \"About Us\"];\r\n\r\n    for(const link of arrayLinks){\r\n        const li = document.createElement(\"li\");\r\n        const a = document.createElement(\"a\");\r\n        //set href\r\n        a.href = \"#\";\r\n        a.textContent = link;\r\n        li.appendChild(a);\r\n        ul.appendChild(li);\r\n    }\r\n    header.appendChild(h1);\r\n    header.appendChild(label);\r\n    header.appendChild(input);\r\n    header.appendChild(nav);\r\n    nav.appendChild(ul);\r\n\r\n    content.parentNode.insertBefore(header,content);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://Restaurant-Page/./src/nav.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
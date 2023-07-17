/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const javascriptHeader = document.querySelector('.javascript-header');\nconst reactHeader = document.querySelector('.react-header');\nconst otherHeader = document.querySelector('.other-header');\nconst aboutHeader = document.querySelector('.about-header');\nconst contactHeader = document.querySelector('.contact-header');\nconst body = document.querySelector('.flex-container');\n\ncontactHeader.addEventListener('click', () => {\n    body.style.width = '200px';\n    body.style.height = '200px';\n    body.style.backgroundColor = 'red';\n})\n\n//# sourceURL=webpack://portfolio-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;
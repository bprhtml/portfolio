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

/***/ "./src/about-page.js":
/*!***************************!*\
  !*** ./src/about-page.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAboutPage: () => (/* binding */ loadAboutPage)\n/* harmony export */ });\nfunction loadAboutPage(container) {\n\n    const aboutMeContainer = document.createElement('div');\n    aboutMeContainer.style.display = 'flex';\n    aboutMeContainer.style.flexDirection = 'column';\n    aboutMeContainer.style.alignItems = 'center';\n    container.appendChild(aboutMeContainer);\n\n    const aboutMeTitle = document.createElement('h1');\n    aboutMeTitle.textContent = 'About Me';\n    aboutMeTitle.style.marginTop = '4vh';\n    aboutMeTitle.style.fontSize = '3.5vw';\n    aboutMeContainer.appendChild(aboutMeTitle);\n\n    const aboutMeTopHalfContainer = document.createElement('div')\n    aboutMeTopHalfContainer.classList.add('about-me-top');\n    aboutMeTopHalfContainer.style.display = 'flex';\n    aboutMeTopHalfContainer.style.marginTop = '5vh';\n    aboutMeTopHalfContainer.style.justifyContent = 'space-between';\n    aboutMeTopHalfContainer.style.transition = '1s';\n    aboutMeTopHalfContainer.style.alignItems = 'center';\n\n    const aboutMeFirstPara = document.createElement('div');\n    aboutMeFirstPara.textContent = 'An aspiring web designer, I have created a plethora of projects - predominantly in JavaScript - however I have programmed in languages such as Python to create more diverse projects - including side-scrolling games.';\n    aboutMeFirstPara.style.width = '55vw';\n\n    const photoOfMe = document.createElement('img');\n    photoOfMe.src = '../images and fonts/me and gary.jpeg'\n    photoOfMe.style.width = '15vw';\n    photoOfMe.style.height = '15vw';\n    photoOfMe.style.marginLeft = '4vw';\n    photoOfMe.alt = 'Portrait photo of myself, originating from my LinkedIn page.'\n\n\n    const divisionOne = document.createElement('div');\n    divisionOne.style.width = '75vw';\n    divisionOne.style.height = '1vh';\n    divisionOne.style.backgroundColor = '#A239CA';\n    divisionOne.style.marginTop = '5vh';\n\n    setTimeout(() => {\n        aboutMeContainer.appendChild(aboutMeTopHalfContainer);\n        aboutMeTopHalfContainer.appendChild(aboutMeFirstPara); \n        aboutMeTopHalfContainer.appendChild(photoOfMe);  \n        aboutMeContainer.appendChild(divisionOne);\n    }, 300);\n\n    const aboutMeSecondHalfContainer = document.createElement('div');\n    aboutMeSecondHalfContainer.classList.add('about-me-middle');\n    aboutMeSecondHalfContainer.style.display = 'flex';\n    aboutMeSecondHalfContainer.style.marginTop = '5vh';\n    aboutMeSecondHalfContainer.style.justifyContent = 'space-between';\n    aboutMeSecondHalfContainer.style.alignItems = 'center';\n\n    const photoOfSomething = document.createElement('img');\n    photoOfSomething.style.width = '15vw';\n    photoOfSomething.style.height = '15vw';\n    photoOfSomething.src = '../images and fonts/react-screenshot.png';\n    photoOfSomething.style.marginRight = '4vw';\n\n    const aboutMeSecondPara = document.createElement('div');\n    aboutMeSecondPara.textContent = 'Starting in 2022, I have produced over 30 projects in JavaScript and HTML/CSS, ranging from games to to-do lists, and creating websites produced from my own ideas.'\n    aboutMeSecondPara.style.width = '55vw';\n\n    const divisionTwo = document.createElement('div');\n    divisionTwo.style.width = '75vw';\n    divisionTwo.style.height = '1vh';\n    divisionTwo.style.backgroundColor = '#4717f6';\n    divisionTwo.style.marginTop = '5vh';\n\n    setTimeout(() => {\n        aboutMeContainer.appendChild(aboutMeSecondHalfContainer);\n        aboutMeSecondHalfContainer.appendChild(photoOfSomething);\n        aboutMeSecondHalfContainer.appendChild(aboutMeSecondPara);\n        aboutMeContainer.appendChild(divisionTwo);\n    }, 2000);\n\n    const aboutMeThirdHalfContainer = document.createElement('div')\n    aboutMeThirdHalfContainer.classList.add('about-me-bottom');\n    aboutMeThirdHalfContainer.style.display = 'flex';\n    aboutMeThirdHalfContainer.style.marginTop = '5vh';\n    aboutMeThirdHalfContainer.style.justifyContent = 'space-between';\n    aboutMeThirdHalfContainer.style.alignItems = 'center';\n\n    const aboutMeThirdPara = document.createElement('div');\n    aboutMeThirdPara.textContent = \"In addition to programming, I have many other skills and hobbies: one of which being drumming, which I've been studying for over 20 years.\"\n    aboutMeThirdPara.style.width = '55vw';\n\n    const drummingPhotoDiv = document.createElement('a');\n    drummingPhotoDiv.href = 'https://youtu.be/jzgb8XfIKjI';\n\n    const drummingPhoto = document.createElement('img');\n    drummingPhoto.src =  '../images and fonts/me-drumming.png'\n    drummingPhoto.style.width = '15vw';\n    drummingPhoto.style.height = '15vw';\n    drummingPhoto.style.marginLeft = '4vw';\n    drummingPhoto.alt = 'Myself drumming in a YouTube video from my channel.';\n\n\n    const finalDivision = document.createElement('div');\n    finalDivision.style.width = '75vw';\n    finalDivision.style.height = '1vh';\n    finalDivision.style.backgroundColor = '#E7DFDD';\n    finalDivision.style.marginTop = '5vh';\n    finalDivision.style.marginBottom = '3vh';\n\n    setTimeout(() => {\n        aboutMeContainer.appendChild(aboutMeThirdHalfContainer);\n        aboutMeThirdHalfContainer.appendChild(aboutMeThirdPara);  \n        aboutMeThirdHalfContainer.appendChild(drummingPhotoDiv)  \n        drummingPhotoDiv.appendChild(drummingPhoto);   \n        aboutMeContainer.appendChild(finalDivision); \n    }, 3600);\n}\n\n//# sourceURL=webpack://portfolio-page/./src/about-page.js?");

/***/ }),

/***/ "./src/contact-form.js":
/*!*****************************!*\
  !*** ./src/contact-form.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContactForm: () => (/* binding */ loadContactForm)\n/* harmony export */ });\nfunction loadContactForm(container) {\n\n\n    const formTitle = document.createElement('h1');\n    formTitle.classList.add('form-title');\n    formTitle.innerHTML = 'Contact Us';\n    formTitle.style.marginTop = '4vh';\n    formTitle.style.fontSize = '3.5vw';\n    container.appendChild(formTitle);\n\n    const formDescription = document.createElement('h4');\n    formDescription.classList.add('form-desc');\n    formDescription.innerHTML = 'Please feel free to get in contact with us if you have any questions at all! My links to social media are displayed at the bottom of this page.';\n    container.appendChild(formDescription);\n\n    const formInputs = [\n      { label: 'First Name *', type: 'text', name: 'firstName', class: 'form-first-name'},\n      { label: 'Last Name *', type: 'text', name: 'lastName', class: 'form-last-name' },\n      { label: 'Company', type: 'text', name: 'compName', class: 'form-company' },\n      { label: 'Email Address *', type: 'email', name: 'email', class: 'form-email' },\n      { label: 'Phone Number', type: 'tel', name: 'phoneNum', class: 'form-phone' },\n      { label: 'Message...', type: 'text', name: 'message', class: 'form-message'}\n    ];\n  \n    const contactForm = document.createElement('form');\n    contactForm.action = 'send_email.php';\n    contactForm.method = 'POST';\n\n    const inputsContainer = document.createElement('div');\n    const submitBtn = document.createElement('button');\n    submitBtn.innerHTML = 'Submit';\n    submitBtn.classList.add('submit-form');\n\n    // let firstName, lastName, companyName, emailAddress, phoneNumber;\n  \n    formInputs.forEach((inputAttr) => {\n        const input = document.createElement('input');\n        input.placeholder = inputAttr.label;\n        input.type = inputAttr.type;\n        input.name = inputAttr.name;\n        input.classList = inputAttr.class;\n        inputsContainer.appendChild(input);\n    });\n  \n    const thanks = document.createElement('div')\n    thanks.style.fontSize = '6vh';\n    thanks.style.marginTop = '6vh';\n\n    contactForm.appendChild(inputsContainer);\n    contactForm.appendChild(submitBtn);\n    container.appendChild(contactForm);\n\n    submitBtn.addEventListener('click', (e) => \n        sendForm(e, thanks, container, formDescription));\n    inputsContainer.classList.add('all-form-inputs')\n  }\n\n  const formWarning = document.createElement('div');\n  formWarning.classList.add('form-warning');\n\n  function sendForm(e, thx, div, warnLocation) {\n    e.preventDefault();\n\n    const firstName = document.querySelector('input[name=\"firstName\"]').value;\n    const lastName = document.querySelector('input[name=\"lastName\"]').value;\n    const companyName = document.querySelector('input[name=\"compName\"]').value;\n    const emailAddress = document.querySelector('input[name=\"email\"]').value;\n    const phoneNumber = document.querySelector('input[name=\"phoneNum\"]').value;\n    const message = document.querySelector('input[name=\"message\"]').value;\n\n\n    formWarning.innerHTML = ''\n    if (firstName == '' || lastName == '' || emailAddress == '' || message == '') {\n        formWarning.style.color = 'red';\n        formWarning.innerHTML = 'Please fill out all necessary inputs!';\n        warnLocation.appendChild(formWarning);\n    } else if (!emailAddress.includes('@')){\n        formWarning.style.color = 'red';\n        formWarning.innerHTML = 'Please ensure you have the correct email format.';\n        warnLocation.appendChild(formWarning); \n    } else {\n        div.innerHTML = '';\n        thx.innerHTML = 'Thank you for contacting us! We will be in touch.';\n        div.appendChild(thx);\n        console.log(firstName, lastName, companyName, emailAddress, phoneNumber, message);\n    }\n        e.preventDefault();\n\n    // AJAX request to send the form data to the PHP script\n    const xhr = new XMLHttpRequest();\n    xhr.open(\"POST\", \"send_email.php\", true);\n    xhr.setRequestHeader(\"Content-type\", \"application/x-www-form-urlencoded\");\n    xhr.onreadystatechange = function () {\n        if (xhr.readyState === XMLHttpRequest.DONE) {\n            if (xhr.status === 200) {\n                if (xhr.responseText === \"success\") {\n                    // Handle success\n                    div.innerHTML = '';\n                    thx.innerHTML = 'Thank you for contacting us! We will be in touch.';\n                    div.appendChild(thx);\n                } else {\n                    // Handle error\n                    formWarning.style.color = 'red';\n                    formWarning.innerHTML = 'Oops! Something went wrong. Please try again later.';\n                    warnLocation.appendChild(formWarning);\n                }\n            } else {\n                // Handle error\n                formWarning.style.color = 'red';\n                formWarning.innerHTML = 'Oops! Something went wrong. Please try again later.';\n                warnLocation.appendChild(formWarning);\n            }\n        }\n    };\n\n    // Convert form data to a query string and send it\n    const formData = new FormData(contactForm);\n    xhr.send(formData);\n    \n}\n\n//# sourceURL=webpack://portfolio-page/./src/contact-form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _contact_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-form */ \"./src/contact-form.js\");\n/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-page */ \"./src/about-page.js\");\n/* harmony import */ var _welcome_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome-page */ \"./src/welcome-page.js\");\n/* harmony import */ var _javascript_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./javascript-page */ \"./src/javascript-page.js\");\n\n\n\n\n\nconst javascriptHeader = document.querySelector('.javascript-header');\nconst reactHeader = document.querySelector('.react-header');\nconst otherHeader = document.querySelector('.other-header');\nconst aboutHeader = document.querySelector('.about-header');\nconst contactHeader = document.querySelector('.contact-header');\nconst body = document.querySelector('.flex-container');\nconst homePageHeader = document.querySelector('.logo-header');\n\n\ncontactHeader.addEventListener('click', () => {\n    body.innerHTML = '';\n    (0,_contact_form__WEBPACK_IMPORTED_MODULE_0__.loadContactForm)(body);\n})\n\naboutHeader.addEventListener('click', () => {\n    body.innerHTML = '';\n    (0,_about_page__WEBPACK_IMPORTED_MODULE_1__.loadAboutPage)(body);\n})\n\nhomePageHeader.addEventListener('click', () => {\n    body.innerHTML = '';\n    (0,_welcome_page__WEBPACK_IMPORTED_MODULE_2__.welcomePage)(body);\n\n})\n\njavascriptHeader.addEventListener('click', () => {\n    body.innerHTML = '';\n    (0,_javascript_page__WEBPACK_IMPORTED_MODULE_3__.javaScriptPort)(body);\n})\n\nwindow.onload((0,_welcome_page__WEBPACK_IMPORTED_MODULE_2__.welcomePage)(body));\n\n\n\n//# sourceURL=webpack://portfolio-page/./src/index.js?");

/***/ }),

/***/ "./src/javascript-page.js":
/*!********************************!*\
  !*** ./src/javascript-page.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   javaScriptPort: () => (/* binding */ javaScriptPort)\n/* harmony export */ });\nfunction javaScriptPort(container) {\n\n    container.style.display = 'flex';\n    container.style.justiftyContent = 'center';\n\n    const javaContainer = document.createElement('div');\n    javaContainer.style.display = 'flex';\n    javaContainer.style.textAlign = 'center';\n    javaContainer.style.justifyContent = 'center';\n    javaContainer.style.alignItems = 'center';\n    javaContainer.style.flexDirection = 'column';\n    container.appendChild(javaContainer)\n\n\n    const title = document.createElement('h1');\n    title.textContent = 'JavaScript Projects';\n    title.style.marginTop = '4vh';\n    title.style.marginBottom ='4vh';\n    title.style.fontSize = '3.5vw';\n    javaContainer.appendChild(title);\n\n    const desc = document.createElement('div');\n    desc.textContent = 'Below is a collage of my vanilla JavaScript projects. Please feel free to take a look!';\n    desc.style.width = '40vw';\n    javaContainer.appendChild(desc);\n\n    const collageContainer = document.createElement('div');\n    collageContainer.style.width = '80vw';\n    collageContainer.style.height = 'auto';\n    collageContainer.style.display = 'grid';\n    collageContainer.style.margin = '2vh';\n    javaContainer.appendChild(collageContainer);\n\n    projects.forEach((project) => {\n        const gridSquare = document.createElement('div');\n        gridSquare.classList.add('grid-square');\n        const gridName = document.createElement('div');\n        gridName.textContent = `${project.name}`\n        const gridDesc = document.createElement('div');\n        gridDesc.textContent = `${project.desc}`;\n        const gridPhoto = document.createElement('img');\n        gridPhoto.style.width = '10vw';\n        gridPhoto.style.height = '10vw';\n        gridPhoto.src = `${project.imgSrc}`;\n\n        collageContainer.appendChild(gridSquare);\n        gridSquare.appendChild(gridPhoto);\n        gridSquare.appendChild(gridName);\n        gridSquare.appendChild(gridDesc);\n    })\n    \n}\n\nlet projects = [\n    {name: 'Etch-a-Sketch', desc: \"A sketchpad using grid squares to emulate the classic kids' toy.\", imgSrc: '../images and fonts/eas-ss.png'},\n    {name: 'Snake', desc: \"Using the canvas to create a game of snake as found on older mobile devices.\", imgSrc: '../images and fonts/s-ss.png'},\n    {name: 'Calculator', desc: \"Using classes to create a functioning calculator.\", imgSrc: '../images and fonts/ccl-ss.png'}\n]\n\n//# sourceURL=webpack://portfolio-page/./src/javascript-page.js?");

/***/ }),

/***/ "./src/welcome-page.js":
/*!*****************************!*\
  !*** ./src/welcome-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   welcomePage: () => (/* binding */ welcomePage)\n/* harmony export */ });\nfunction welcomePage(container) {\n\n    const welcomePageContainer = document.createElement('div');\n    welcomePageContainer.style.display = 'flex';\n    welcomePageContainer.style.justifyContent = 'space-around';\n    welcomePageContainer.style.alignItems = 'center';\n    welcomePageContainer.style.width = '100vw';\n    welcomePageContainer.style.height = '93vh';\n    container.appendChild(welcomePageContainer)\n\n    const introDiv = document.createElement('div');\n    introDiv.style.display = 'flex';\n    introDiv.style.flexDirection = 'column';\n    // introDiv.style.justifyContent = 'space-between';\n    introDiv.style.alignItems = 'center';\n    introDiv.style.height = '70vh';\n    introDiv.style.marginLeft = '10vw';\n    welcomePageContainer.appendChild(introDiv)\n\n    const brandLogo = document.createElement('img');\n    brandLogo.src = '../images and fonts/brwd-square.gif';\n    brandLogo.style.height = 'auto';\n    brandLogo.style.clipPath = 'inset(35vh 40vh)';\n    brandLogo.style.width = '40vh';\n    introDiv.appendChild(brandLogo);\n\n    const hello = document.createElement('div');\n    hello.innerHTML = \"Hello, I'm Ben.\";\n    hello.style.fontSize = '3vw';\n    hello.style.marginBottom = '4vh';\n    hello.style.width = '20vw';\n    hello.classList.add('intro-lines')\n    introDiv.appendChild(hello);\n\n    const whatIDo = document.createElement('div');\n    whatIDo.textContent = \"A front-end, software, and application developer.\";\n    whatIDo.classList.add('intro-lines-what');\n    whatIDo.style.fontSize = '1.6vw';\n\n\n    const photoOfMe = document.createElement('img');\n    photoOfMe.src = 'https://media.licdn.com/dms/image/D4E03AQET5GEWP7EPOA/profile-displayphoto-shrink_800_800/0/1689058766782?e=1695254400&v=beta&t=tvCFFv_14jzJGup7_MJuqcromNJ-QhdA__sgxOLl90g';\n    photoOfMe.style.width = '25vw';\n    photoOfMe.style.height = '25vw';\n    photoOfMe.style.marginRight = '10vw';\n    welcomePageContainer.appendChild(photoOfMe);\n\n    setTimeout(() => {\n        introDiv.appendChild(whatIDo);\n    }, 3500);\n}\n     \n\n//# sourceURL=webpack://portfolio-page/./src/welcome-page.js?");

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
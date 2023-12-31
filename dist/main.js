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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderAboutus: () => (/* binding */ renderAboutus)\n/* harmony export */ });\nconst renderAboutus = () =>{\r\n    //reset content to empty\r\n    const content = document.querySelector(\"#content\");\r\n    content.innerHTML = \"\";\r\n\r\n    //menu page content\r\n    const innerContainer = document.createElement(\"div\");\r\n    innerContainer.classList.add(\"aboutuspage\");\r\n    const aboutusContainer = document.createElement(\"div\");\r\n    aboutusContainer.classList.add(\"inner-aboutus-container\");\r\n\r\n\r\n    const ourStory = document.createElement(\"div\");\r\n    ourStory.classList.add(\"our-story\");\r\n    const h2 = document.createElement(\"h2\");\r\n    h2.textContent = \"Our Story\";\r\n    const ourstorypara1 = document.createElement(\"p\");\r\n    ourstorypara1.textContent = \"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.\";\r\n    const ourstorypara2 = document.createElement(\"p\");\r\n    ourstorypara2.textContent = \"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).\";\r\n    ourStory.appendChild(h2);\r\n    ourStory.appendChild(ourstorypara1);\r\n    ourStory.appendChild(ourstorypara2)\r\n\r\n\r\n    const contactusDiv = document.createElement(\"div\");\r\n    contactusDiv.classList.add(\"contact-us-container\");\r\n\r\n    const location = document.createElement(\"div\");\r\n    location.classList.add(\"location\");\r\n    const h3_location = document.createElement(\"h3\");\r\n    h3_location.textContent = \"Location\";\r\n    const p_location = document.createElement(\"div\");\r\n    p_location.classList.add(\"location-content\");\r\n    const p_addline1 = document.createElement(\"p\");\r\n    p_addline1.textContent = \"Wz 48,\";\r\n    const p_addline2 = document.createElement(\"p\");\r\n    p_addline2.textContent = \"Spice Shuttle,\";\r\n    const p_addline3 = document.createElement(\"p\");\r\n    p_addline3.textContent = \"Paschim Vihar, Delhi, India\";\r\n    p_location.appendChild(p_addline1);\r\n    p_location.appendChild(p_addline2);\r\n    p_location.appendChild(p_addline3);\r\n    location.appendChild(h3_location);\r\n    location.appendChild(p_location);\r\n\r\n    const hours = document.createElement(\"div\");\r\n    hours.classList.add(\"hours\");\r\n    const h3_hours = document.createElement(\"h3\");\r\n    h3_hours.textContent = \"Hours\";\r\n    const p_hours = document.createElement(\"div\");\r\n    p_hours.classList.add(\"hours-content\");\r\n    const p_timings = document.createElement(\"p\");\r\n    p_timings.textContent = \"Open Timing: 10:00am to 10:00pm\"\r\n    const p_closed = document.createElement(\"p\");\r\n    p_closed.textContent = \"Closed on Tuesdays\"\r\n    p_hours.appendChild(p_timings);\r\n    p_hours.appendChild(p_closed);\r\n    hours.appendChild(h3_hours);\r\n    hours.appendChild(p_hours);\r\n\r\n    const contact = document.createElement(\"div\");\r\n    contact.classList.add(\"contact\");\r\n    const h3_contact = document.createElement(\"h3\");\r\n    h3_contact.textContent = \"Contact\";\r\n    const p_contact = document.createElement(\"div\");\r\n    p_contact.classList.add(\"contact-content\");\r\n    const p_mobile = document.createElement(\"p\");\r\n    p_mobile.textContent = \"+91-6937XXXXXX\";\r\n    const p_mail = document.createElement(\"p\");\r\n    p_mail.textContent = \"spiceShuttle@gmail.com\";\r\n    p_contact.appendChild(p_mobile);\r\n    p_contact.appendChild(p_mail);\r\n    contact.appendChild(h3_contact);\r\n    contact.appendChild(p_contact);\r\n\r\n    contactusDiv.appendChild(location);\r\n    contactusDiv.appendChild(hours);\r\n    contactusDiv.appendChild(contact);\r\n\r\n\r\n    const feedbackDiv = document.createElement(\"div\");\r\n    feedbackDiv.classList.add(\"feedback-container\");\r\n    const para1 = document.createElement(\"p\");\r\n    para1.textContent = \"For any inquires, send us a message and we’ll get back to you as soon as possible.\";\r\n    const para2 = document.createElement(\"p\");\r\n    para2.textContent = \"We look forward to hearing from you!\";\r\n\r\n    const form = document.createElement(\"form\");\r\n\r\n    const name_label = document.createElement(\"label\");\r\n    name_label.for = \"name\";\r\n    name_label.textContent = \"Name\";\r\n    const name = document.createElement(\"input\");\r\n    name.id = \"name\";\r\n    name.classList.add(\"name\");\r\n    name.placeholder = \"Your Name\";\r\n    const email_label = document.createElement(\"label\");\r\n    email_label.for = \"email\";\r\n    email_label.textContent = \"Email\"\r\n    const email = document.createElement(\"input\");\r\n    email.type = \"email\";\r\n    email.id = \"email\";\r\n    email.classList.add(\"email\");\r\n    email.placeholder = \"Your Email Address\";\r\n    const message_label = document.createElement(\"label\");\r\n    message_label.for=\"message\";\r\n    message_label.textContent = \"Leave Your Message Here\";\r\n    const message = document.createElement(\"textarea\");\r\n    message.id = \"message\";\r\n    message.classList.add(\"message\");\r\n    message.placeholder = \"Write Your Message\";\r\n    const submit = document.createElement(\"button\");\r\n    submit.classList.add(\"send\");\r\n    submit.type = \"submit\";\r\n    submit.innerHTML = \"<i class='fa-solid fa-paper-plane'></i> <span>Send</span>\";\r\n\r\n\r\n    form.appendChild(name_label);\r\n    form.appendChild(name);\r\n    form.appendChild(email_label);\r\n    form.appendChild(email);\r\n    form.appendChild(message_label);\r\n    form.appendChild(message);\r\n    form.appendChild(submit);\r\n\r\n    feedbackDiv.appendChild(para1);\r\n    feedbackDiv.appendChild(para2);\r\n    feedbackDiv.appendChild(form);\r\n\r\n\r\n\r\n    aboutusContainer.appendChild(ourStory);\r\n    aboutusContainer.appendChild(contactusDiv);\r\n    aboutusContainer.appendChild(feedbackDiv);\r\n    innerContainer.appendChild(aboutusContainer);\r\n    content.appendChild(innerContainer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://Restaurant-Page/./src/aboutus.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderHomepage: () => (/* binding */ renderHomepage)\n/* harmony export */ });\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _aboutus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutus */ \"./src/aboutus.js\");\n\r\n\r\n\r\nconst renderHomepage = () =>{\r\n    //empty content\r\n    const content = document.querySelector(\"#content\");\r\n    content.innerHTML = \"\";\r\n\r\n    //content creation\r\n    const innerContainer = document.createElement(\"div\");\r\n    innerContainer.classList.add(\"homepage\");\r\n\r\n    const blankDiv = document.createElement(\"div\");\r\n    blankDiv.className = \"blank\";\r\n    const textDiv = document.createElement(\"div\");\r\n    textDiv.className = \"text\";\r\n\r\n    const heading = document.createElement(\"h1\");\r\n    heading.textContent = \"Spice Shuttle\";\r\n    const subheading = document.createElement(\"h2\");\r\n    const commaSpan = document.createElement(\"span\");\r\n    commaSpan.textContent = \"❝ \";\r\n    commaSpan.id = \"comma\";\r\n    subheading.appendChild(commaSpan);\r\n    const subheadingSpan = document.createElement(\"span\");\r\n    subheadingSpan.textContent = \"Where Indian flavours come to life\";\r\n    subheading.appendChild(commaSpan);\r\n    subheading.appendChild(subheadingSpan);\r\n    const para1 = document.createElement(\"p\");\r\n    para1.textContent = \"Experience the most excuisite blends of flavour. Craving for some indian cuisine? We got you. Wanna try something new ? We got you!\";\r\n    const para2 = document.createElement(\"p\");\r\n    para2.textContent = \"Visite us or, book an online reservation.\";\r\n\r\n    const bttnsDiv = document.createElement(\"div\");\r\n    bttnsDiv.className = \"bttns\";\r\n    const exploreBttn = document.createElement(\"button\");\r\n    exploreBttn.className = \"bttn\";\r\n    exploreBttn.id = \"menu\";\r\n    exploreBttn.textContent = \"Explore Menu\";\r\n    const visitusBttn = document.createElement(\"button\");\r\n    visitusBttn.className = \"bttn\";\r\n    visitusBttn.id = \"visit\";\r\n    visitusBttn.textContent = \"Visit Us\";\r\n\r\n    exploreBttn.addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_0__.renderMenu);\r\n    visitusBttn.addEventListener(\"click\", _aboutus__WEBPACK_IMPORTED_MODULE_1__.renderAboutus);\r\n    \r\n    bttnsDiv.appendChild(exploreBttn);\r\n    bttnsDiv.appendChild(visitusBttn);\r\n\r\n    const socialDiv = document.createElement(\"div\");\r\n    socialDiv.className = \"social-links\";\r\n    const socialIconClasses = [\"fa-facebook-f\", \"fa-instagram\", \"fa-x-twitter\"];\r\n    for(const iconClass of socialIconClasses){\r\n        const socialLink = document.createElement(\"a\");\r\n        const icon = document.createElement(\"i\");\r\n        icon.classList.add(\"fa-brands\");\r\n        icon.classList.add(iconClass);\r\n\r\n        socialLink.appendChild(icon);\r\n        socialDiv.appendChild(socialLink);\r\n    }\r\n\r\n    textDiv.appendChild(heading);\r\n    textDiv.appendChild(subheading);\r\n    textDiv.appendChild(para1);\r\n    textDiv.appendChild(para2);\r\n    textDiv.appendChild(bttnsDiv);\r\n    textDiv.appendChild(socialDiv);\r\n\r\n\r\n    innerContainer.appendChild(blankDiv);\r\n    innerContainer.appendChild(textDiv);\r\n    content.appendChild(innerContainer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://Restaurant-Page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _aboutus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./aboutus */ \"./src/aboutus.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_nav__WEBPACK_IMPORTED_MODULE_0__.renderNav)();\r\n(0,_homepage__WEBPACK_IMPORTED_MODULE_1__.renderHomepage)();\r\n\r\nconst home = document.querySelector(\"nav li:nth-child(1) a\");\r\nconst menu = document.querySelector(\"nav li:nth-child(2) a\");\r\nconst aboutus = document.querySelector(\"nav li:nth-child(3) a\");\r\n\r\nhome.addEventListener(\"click\", _homepage__WEBPACK_IMPORTED_MODULE_1__.renderHomepage);\r\nmenu.addEventListener(\"click\", _menu__WEBPACK_IMPORTED_MODULE_2__.renderMenu);\r\naboutus.addEventListener(\"click\", _aboutus__WEBPACK_IMPORTED_MODULE_3__.renderAboutus);\r\n\n\n//# sourceURL=webpack://Restaurant-Page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderMenu: () => (/* binding */ renderMenu)\n/* harmony export */ });\n/* harmony import */ var _menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.json */ \"./src/menu.json\");\n\r\n\r\nconst renderMenu = () =>{\r\n    //reset content to empty\r\n    const content = document.querySelector(\"#content\");\r\n    content.innerHTML = \"\";\r\n\r\n    //menu page content\r\n    const innerContainer = document.createElement(\"div\");\r\n    innerContainer.classList.add(\"menupage\");\r\n    const menuContainer = document.createElement(\"div\");\r\n    menuContainer.classList.add(\"inner-menu-container\");\r\n    const h1menu = document.createElement(\"h1\");\r\n    h1menu.textContent = \"Menu\";\r\n    h1menu.classList.add(\"heading-menu\");\r\n    const listOfMenu = document.createElement(\"div\");\r\n    for(const section in _menu_json__WEBPACK_IMPORTED_MODULE_0__){\r\n        const sectionCard = document.createElement(\"div\");\r\n        sectionCard.classList.add(\"section-card\");\r\n\r\n        const h2 = document.createElement(\"h2\");\r\n        h2.textContent = section;\r\n        sectionCard.appendChild(h2);\r\n        const dishContainer = document.createElement(\"div\");\r\n        dishContainer.classList.add(\"dish-container\");\r\n        for(const item of _menu_json__WEBPACK_IMPORTED_MODULE_0__[section]){\r\n            const dishCard = document.createElement(\"div\");\r\n            dishCard.classList.add(\"dish-card\");\r\n            const image = document.createElement(\"img\");\r\n            image.src = item[\"url\"];\r\n            image.alt = item[\"alt\"];\r\n            \r\n            const dishContent = document.createElement(\"div\");\r\n            dishContent.classList.add(\"dish-content\");\r\n\r\n            const dishName = document.createElement(\"h3\");\r\n            dishName.textContent = item[\"name\"];\r\n            const description = document.createElement(\"p\");\r\n            description.textContent = item[\"description\"];\r\n            const ingredientList = document.createElement(\"p\");\r\n            ingredientList.textContent = \"Main Ingredients : \"+ item[\"main ingredient\"].join(\", \");\r\n\r\n            const priceAndVeg = document.createElement(\"div\");\r\n            priceAndVeg.classList.add(\"price-veg-container\");\r\n            const vegStatus = document.createElement(\"p\");\r\n            vegStatus.textContent = item[\"isVeg\"]? \"Veg\": \"Non-veg\";\r\n            vegStatus.classList.add('dish-veg-status');\r\n            item[\"isVeg\"]? vegStatus.classList.add(\"veg\"):vegStatus.classList.add(\"nonveg\");\r\n            const price = document.createElement(\"p\");\r\n            price.classList.add(\"dish-price\");\r\n            price.innerHTML =  \"&#8377; \"+parseFloat(item[\"price\"]) ;\r\n\r\n            priceAndVeg.appendChild(vegStatus);\r\n            priceAndVeg.appendChild(price);\r\n\r\n            dishContent.appendChild(dishName);\r\n            dishContent.appendChild(description);\r\n            dishContent.appendChild(ingredientList);\r\n            dishContent.appendChild(priceAndVeg);\r\n\r\n            dishCard.appendChild(image);\r\n            dishCard.appendChild(dishContent);\r\n\r\n\r\n            dishContainer.appendChild(dishCard);\r\n        }\r\n        sectionCard.appendChild(dishContainer);\r\n        \r\n        listOfMenu.appendChild(sectionCard);\r\n    }\r\n\r\n\r\n\r\n\r\n    menuContainer.appendChild(h1menu);\r\n    menuContainer.appendChild(listOfMenu);\r\n    innerContainer.appendChild(menuContainer);\r\n    content.appendChild(innerContainer);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://Restaurant-Page/./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderNav: () => (/* binding */ renderNav)\n/* harmony export */ });\nconst renderNav = () =>{\r\n    const content = document.querySelector(\"#content\");\r\n\r\n    //nav creation\r\n    const header = document.createElement(\"header\");\r\n    const h1 = document.createElement(\"h1\");\r\n    h1.textContent = \"Logo\";\r\n    const label = document.createElement(\"label\");\r\n    label.htmlFor = \"mobile-nav\";\r\n    label.id = \"mobile-nav-label\";\r\n    const hamburgericon = document.createElement(\"span\");\r\n    label.appendChild(hamburgericon);\r\n    const input = document.createElement(\"input\");\r\n    input.type = \"checkbox\";\r\n    input.setAttribute(\"id\", \"mobile-nav\")\r\n    const nav = document.createElement(\"nav\");\r\n    const ul = document.createElement(\"ul\");\r\n    const arrayLinks = [\"Home\", \"Menu\", \"About Us\"];\r\n\r\n    for(const link of arrayLinks){\r\n        const li = document.createElement(\"li\");\r\n        const a = document.createElement(\"a\");\r\n        //set href\r\n        a.href = \"#\";\r\n        a.textContent = link;\r\n        li.appendChild(a);\r\n        ul.appendChild(li);\r\n    }\r\n    header.appendChild(h1);\r\n    header.appendChild(label);\r\n    header.appendChild(input);\r\n    header.appendChild(nav);\r\n    nav.appendChild(ul);\r\n\r\n    content.parentNode.insertBefore(header,content);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://Restaurant-Page/./src/nav.js?");

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = JSON.parse('{\"Main Dishes\":[{\"name\":\"Paneer Butter Masala\",\"description\":\"Paneer Butter Masala is a rich and creamy dish of paneer (Indian cottage cheese) in a tomato, butter and cashew sauce that is known here as “makhani gravy”. It is usually Paired with roti, naan or rice.\",\"main ingredient\":[\"Paneer\",\"tomatoes\",\"Raw Cashews\",\"Cream\",\"Butter\"],\"isVeg\":true,\"price\":70,\"url\":\"../dist/images/paneer-butter-masala.jpg\",\"alt\":\"image of paneer butter masala\"},{\"name\":\"Kadhai Paneer\",\"description\":\"Kadai Paneer is a dish made with Indian style cottage cheese a.k.a Paneer which is a soft cheese that does not melt. This entire dish is made in the kadai, a Indian cookware similar to chinese wok, and thus the dish is named “Kadai Paneer” or “Karahi Paneer”. It is usually Paired with roti, naan or rice.\",\"main ingredient\":[\"Paneer\",\"Onions\",\"Capsicum (green bell peppers)\",\"tomatoes\"],\"isVeg\":true,\"price\":60,\"url\":\"../dist/images/kadhai-paneer.jpg\",\"alt\":\"image of kadhai paneer\"},{\"name\":\"Dal Makhani\",\"description\":\"Dal Makhani is one of the most popular lentil recipes from the North Indian Punjabi cuisine made with Whole Black Lentils and Kidney Beans. It is usually Paired with roti, naan or rice.\",\"main ingredient\":[\"Lentils (urad dal in hindi)\",\"Kidney Beans (Rajma in hindi)\",\"tomatoes\"],\"isVeg\":true,\"price\":60,\"url\":\"../dist/images/dal-makhni.jpg\",\"alt\":\"image of dal makhni\"},{\"name\":\"Rajma Masala\",\"description\":\"Rajma is the Hindi word for kidney beans. However, this delicious vegetarian curry is so popular that the recipe has become synonymous with the bean. Both the beans themselves and this dish that features them are known as Rajma. This dish is usually paired with roti, naan or rice\",\"main ingredient\":[\"Kidney Beans (Rajma in hindi)\",\"tomatoes\"],\"isVeg\":true,\"price\":60,\"url\":\"../dist/images/rajma-masala.jpg\",\"alt\":\"image of rajma masala\"},{\"name\":\"Kadhi Pakora\",\"description\":\"The Hindi word “Kadhi” denotes a yogurt sauce that has been slow-cooked for quite some time. The word “pakora” means fritters made from gram flour (besan). The curd that is used to make kadhi is sour curd. As a result, this dish has a sour, spiced and creamy taste. This dish is usually paired with roti, naan or rice\",\"main ingredient\":[\"Curd\",\"Gram Flour (Besan in hindi)\"],\"isVeg\":true,\"price\":50,\"url\":\"../dist/images/kadhi-pakora.jpg\",\"alt\":\"image of kadhi pakora\"}],\"Snacks\":[{\"name\":\"Pav Bhaji\",\"description\":\"Pav Bhaji is a famous street food from the ‘city of dreams,’ Mumbai. In Marathi, ‘pav’ means bread rolls and ‘bhaji’ refers to vegetables or a dry/gravy style mixed veggie dish. Since this particular combination has both these being served together, the dish is well-known as Pav Bhaji.\",\"main ingredient\":[\"Bread (Pav in hindi)\",\"Potatoes\",\"Capsicum (greenbell peppers)\",\"Carrot\",\"Cauliflower\",\"Green Peas\",\"Butter\"],\"isVeg\":true,\"price\":40,\"url\":\"../dist/images/pav-bhaji.jpg\",\"alt\":\"image of pav bhaji\"},{\"name\":\"Samosa\",\"description\":\"Samosa is a deep fried pastry with spiced filling usually made with potatoes, spices and herbs. Samosa is one of the most commonly eated snack across India. They are hugely popular and are loved by everyone.\",\"main ingredient\":[\"Purpose flour (Maida in hindi)\",\"Potatoes\",\"Green Peas\"],\"isVeg\":true,\"price\":20,\"url\":\"../dist/images/samosa.jpg\",\"alt\":\"image of samosa\"}]}');\n\n//# sourceURL=webpack://Restaurant-Page/./src/menu.json?");

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
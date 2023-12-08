/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/changeHero.js":
/*!***************************!*\
  !*** ./src/changeHero.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ changeHero)
/* harmony export */ });
function changeHero(text, imageURL) {
    const hero = document.querySelector('.hero');
    hero.style.backgroundImage = `url(${imageURL})`;
    const heroText = document.querySelector('.hero-text');
    heroText.textContent = text;
}

/***/ }),

/***/ "./src/genAbout.js":
/*!*************************!*\
  !*** ./src/genAbout.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateAbout: () => (/* binding */ generateAbout)
/* harmony export */ });
/* harmony import */ var _genHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genHeader */ "./src/genHeader.js");

function generateAbout(aboutItems) {
    const about = document.createElement('div');
    // Sections
    for (let section of aboutItems) {
        // Create section header 
        const sectionHeader = (0,_genHeader__WEBPACK_IMPORTED_MODULE_0__["default"])(section.sectionName)
        // Create section content
        const sectionContent = document.createElement('p');
        sectionContent.classList.add('section-content');
        sectionContent.innerText = section.sectionContent;
        // Attach parts
        about.append(sectionHeader, sectionContent);
    }
    return about;
}


/***/ }),

/***/ "./src/genHeader.js":
/*!**************************!*\
  !*** ./src/genHeader.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ genHeader)
/* harmony export */ });
function genHeader(title) {
    const sectionHeader = document.createElement('div');
    const sectionName = document.createElement('h1');
    const sectionLine1 = document.createElement('div');
    const sectionLine2 = document.createElement('div');
    sectionHeader.classList.add('section-header');
    sectionName.classList.add('section-name');
    sectionLine1.classList.add('section-line');
    sectionLine2.classList.add('section-line');
    sectionName.textContent = title;
    sectionHeader.append(sectionLine1, sectionName, sectionLine2);
    return sectionHeader; 
}

/***/ }),

/***/ "./src/genMenu.js":
/*!************************!*\
  !*** ./src/genMenu.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateMenu: () => (/* binding */ generateMenu)
/* harmony export */ });
/* harmony import */ var _genHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genHeader */ "./src/genHeader.js");


function createItem(item) {
    // Create the necessary elements
    let itemContainer = document.createElement('div');
    let itemName = document.createElement('h2');
    let itemImage = document.createElement('img');
    let itemDesc = document.createElement('p');
    let itemPrice = document.createElement('h3');
    // Assign classes
    itemContainer.classList.add('item-container');
    itemName.classList.add('item-name');
    itemImage.classList.add('item-image');
    itemDesc.classList.add('item-description');
    itemPrice.classList.add('item-price');
    // Fill data
    itemImage.src = item.image;
    itemName.textContent = item.name;
    itemDesc.textContent = item.desc;
    itemPrice.textContent = item.price;
    // Attach items 
    itemContainer.append(itemImage, itemName, itemDesc, itemPrice);
    return itemContainer;
}

function generateMenu(menuItems) {
    // Menu items
    const menu = document.createElement('div');
    for (let section of menuItems) {
        // Create section header
        const sectionHeader = (0,_genHeader__WEBPACK_IMPORTED_MODULE_0__["default"])(section.sectionName);
        console.log(sectionHeader);
        // Create section content
        const sectionContainer = document.createElement('div');
        sectionContainer.classList.add('section-container');
        for (let item of section.sectionItems) {
            const newItem = createItem(item);        
            sectionContainer.append(newItem);
        }
        menu.append(sectionHeader, sectionContainer);
    }
    return menu;
}



/***/ }),

/***/ "./src/restaurantData.json":
/*!*********************************!*\
  !*** ./src/restaurantData.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"aboutItems":[{"sectionName":"Our Story","sectionContent":"\\tWelcome to our elegant bakery, where we create the most delectable and visually stunning desserts that are sure to leave you spellbound. Our team of expert bakers and pastry chefs use only the finest ingredients to craft our signature cakes, pastries, and confections. From classic French macarons to artisanal bread, we have something to satisfy every palate. Our bakery is the perfect place to indulge in a sweet treat, catch up with friends over coffee, or celebrate a special occasion. Come visit us today and experience the magic of our elegant bakery!"},{"sectionName":"Hours","sectionContent":"Monday-Friday: 8AM-6PM \\n Saturday-Sunday: 8AM-3PM"},{"sectionName":"Address and Contact","sectionContent":"1234 Main St, Rialto, CA 92376\\n(909)-555-5555\\nthecornerbakery@cornerbakery.com"}],"menuItems":[{"sectionName":"Sweet","sectionItems":[{"name":"Cookies","desc":"Chocolate Chip - White Chocolate Macadamia Nut - PeanutButter - Sugar Cookies","image":"https://i0.wp.com/www.brownedbutterblondie.com/wp-content/uploads/2023/05/CCC-Cuisinart-IG-BEST-1-scaled.jpg?fit=1834%2C2560&ssl=1","price":5},{"name":"Pies","desc":"Pumpkin - Apple - Cherry","image":"https://www.completelydelicious.com/wp-content/uploads/2017/06/sweet-cherry-pie-6-660x880.jpg","price":15},{"name":"Macroons","desc":"Vanilla - Strawberry - Red Velvet - Blueberry","image":"https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/19_33463_30GL_01ex.jpg","price":8},{"name":"Strudel","desc":"Deliciously flaky, guava and cream cheese filling.","image":"https://www.portosbakery.com/wp-content/uploads/2021/11/202111-Guava-Strudel-1-Dskt.jpg","price":2}]},{"sectionName":"Savory","sectionItems":[{"name":"Meat Pie","desc":"Stuffed with potatoes, carrots, and free-range ground beef. Served hot!","image":"https://www.allrecipes.com/thmb/_3jPHufaETCeFPvP3EuaDtgH6uM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1672302-meat-pie-LouLou-4x3-1-5be60f37ea444abd8b4f11f85b74324f.jpg","price":17},{"name":"Baked Ham and Cheese Croissant","desc":"Carefully layered pastry material filled with all American ham and Pepperjack cheese.","image":"https://alexandracooks.com/wp-content/uploads/2013/03/8589716731_e26fe57d9c_b21.jpg","price":12}]},{"sectionName":"Breads","sectionItems":[{"name":"Sourdough - French Baguettes - Raisin Shepards Rye - Brioche buns","desc":"Baked daily in our early 1900s brick oven.","image":"https://marketbasketbeulah.com/wp-content/uploads/iStock_000013389966Small.jpg","price":11}]}]}');

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _changeHero__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changeHero */ "./src/changeHero.js");
/* harmony import */ var _genMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genMenu */ "./src/genMenu.js");
/* harmony import */ var _genAbout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genAbout */ "./src/genAbout.js");
/* harmony import */ var _restaurantData_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurantData.json */ "./src/restaurantData.json");




const menuItems = _restaurantData_json__WEBPACK_IMPORTED_MODULE_3__.menuItems;
const aboutItems = _restaurantData_json__WEBPACK_IMPORTED_MODULE_3__.aboutItems;
const aboutTab = document.querySelector('#about-tab');
const menuTab = document.querySelector('#menu-tab');

function clearContent() {
    const content = document.querySelector('.content');
    const body = document.querySelector('body');
    body.removeChild(content);
    
    const newContent = document.createElement('div');
    newContent.classList.add('content');
    body.append(newContent);

}

function handleAboutClick() {
    clearContent();
    const content = document.querySelector('.content');
    content.appendChild((0,_genAbout__WEBPACK_IMPORTED_MODULE_2__.generateAbout)(aboutItems));
    (0,_changeHero__WEBPACK_IMPORTED_MODULE_0__["default"])('About', './images/about-hero.jpeg');
}

function handleMenuClick() {
    clearContent();
    const content = document.querySelector('.content');
    content.appendChild((0,_genMenu__WEBPACK_IMPORTED_MODULE_1__.generateMenu)(menuItems));
    (0,_changeHero__WEBPACK_IMPORTED_MODULE_0__["default"])('Menu', './images/menu-hero.jpeg');
}

aboutTab.addEventListener('click', handleAboutClick)
menuTab.addEventListener('click', handleMenuClick)

handleMenuClick();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0xvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNEQUFTO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZmU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ1pvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzREFBUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7O0FDTnNDO0FBQ0c7QUFDRTtBQUNPO0FBQ2xELGtCQUFrQiwyREFBd0I7QUFDMUMsbUJBQW1CLDREQUF5QjtBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdEQUFhO0FBQ3JDLElBQUksdURBQVU7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isc0RBQVk7QUFDcEMsSUFBSSx1REFBVTtBQUNkOztBQUVBO0FBQ0E7O0FBRUEsa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5Ly4vc3JjL2NoYW5nZUhlcm8uanMiLCJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS8uL3NyYy9nZW5BYm91dC5qcyIsIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5Ly4vc3JjL2dlbkhlYWRlci5qcyIsIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5Ly4vc3JjL2dlbk1lbnUuanMiLCJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nvcm5lci1iYWtlcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2hhbmdlSGVybyh0ZXh0LCBpbWFnZVVSTCkge1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpO1xuICAgIGhlcm8uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2ltYWdlVVJMfSlgO1xuICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tdGV4dCcpO1xuICAgIGhlcm9UZXh0LnRleHRDb250ZW50ID0gdGV4dDtcbn0iLCJpbXBvcnQgZ2VuSGVhZGVyIGZyb20gXCIuL2dlbkhlYWRlclwiO1xuZnVuY3Rpb24gZ2VuZXJhdGVBYm91dChhYm91dEl0ZW1zKSB7XG4gICAgY29uc3QgYWJvdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAvLyBTZWN0aW9uc1xuICAgIGZvciAobGV0IHNlY3Rpb24gb2YgYWJvdXRJdGVtcykge1xuICAgICAgICAvLyBDcmVhdGUgc2VjdGlvbiBoZWFkZXIgXG4gICAgICAgIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBnZW5IZWFkZXIoc2VjdGlvbi5zZWN0aW9uTmFtZSlcbiAgICAgICAgLy8gQ3JlYXRlIHNlY3Rpb24gY29udGVudFxuICAgICAgICBjb25zdCBzZWN0aW9uQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgc2VjdGlvbkNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1jb250ZW50Jyk7XG4gICAgICAgIHNlY3Rpb25Db250ZW50LmlubmVyVGV4dCA9IHNlY3Rpb24uc2VjdGlvbkNvbnRlbnQ7XG4gICAgICAgIC8vIEF0dGFjaCBwYXJ0c1xuICAgICAgICBhYm91dC5hcHBlbmQoc2VjdGlvbkhlYWRlciwgc2VjdGlvbkNvbnRlbnQpO1xuICAgIH1cbiAgICByZXR1cm4gYWJvdXQ7XG59XG5leHBvcnQge2dlbmVyYXRlQWJvdXR9IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuSGVhZGVyKHRpdGxlKSB7XG4gICAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNlY3Rpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBzZWN0aW9uTGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWN0aW9uTGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzZWN0aW9uSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taGVhZGVyJyk7XG4gICAgc2VjdGlvbk5hbWUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1uYW1lJyk7XG4gICAgc2VjdGlvbkxpbmUxLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tbGluZScpO1xuICAgIHNlY3Rpb25MaW5lMi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWxpbmUnKTtcbiAgICBzZWN0aW9uTmFtZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgIHNlY3Rpb25IZWFkZXIuYXBwZW5kKHNlY3Rpb25MaW5lMSwgc2VjdGlvbk5hbWUsIHNlY3Rpb25MaW5lMik7XG4gICAgcmV0dXJuIHNlY3Rpb25IZWFkZXI7IFxufSIsImltcG9ydCBnZW5IZWFkZXIgZnJvbSBcIi4vZ2VuSGVhZGVyXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUl0ZW0oaXRlbSkge1xuICAgIC8vIENyZWF0ZSB0aGUgbmVjZXNzYXJ5IGVsZW1lbnRzXG4gICAgbGV0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGxldCBpdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsZXQgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgbGV0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgLy8gQXNzaWduIGNsYXNzZXNcbiAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGFpbmVyJyk7XG4gICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG4gICAgaXRlbUltYWdlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW1hZ2UnKTtcbiAgICBpdGVtRGVzYy5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcHJpY2UnKTtcbiAgICAvLyBGaWxsIGRhdGFcbiAgICBpdGVtSW1hZ2Uuc3JjID0gaXRlbS5pbWFnZTtcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICBpdGVtRGVzYy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzYztcbiAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuICAgIC8vIEF0dGFjaCBpdGVtcyBcbiAgICBpdGVtQ29udGFpbmVyLmFwcGVuZChpdGVtSW1hZ2UsIGl0ZW1OYW1lLCBpdGVtRGVzYywgaXRlbVByaWNlKTtcbiAgICByZXR1cm4gaXRlbUNvbnRhaW5lcjtcbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVNZW51KG1lbnVJdGVtcykge1xuICAgIC8vIE1lbnUgaXRlbXNcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yIChsZXQgc2VjdGlvbiBvZiBtZW51SXRlbXMpIHtcbiAgICAgICAgLy8gQ3JlYXRlIHNlY3Rpb24gaGVhZGVyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBnZW5IZWFkZXIoc2VjdGlvbi5zZWN0aW9uTmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHNlY3Rpb25IZWFkZXIpO1xuICAgICAgICAvLyBDcmVhdGUgc2VjdGlvbiBjb250ZW50XG4gICAgICAgIGNvbnN0IHNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2VjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWNvbnRhaW5lcicpO1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHNlY3Rpb24uc2VjdGlvbkl0ZW1zKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdJdGVtID0gY3JlYXRlSXRlbShpdGVtKTsgICAgICAgIFxuICAgICAgICAgICAgc2VjdGlvbkNvbnRhaW5lci5hcHBlbmQobmV3SXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgbWVudS5hcHBlbmQoc2VjdGlvbkhlYWRlciwgc2VjdGlvbkNvbnRhaW5lcik7XG4gICAgfVxuICAgIHJldHVybiBtZW51O1xufVxuXG5leHBvcnQge2dlbmVyYXRlTWVudX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgY2hhbmdlSGVybyBmcm9tIFwiLi9jaGFuZ2VIZXJvXCI7XG5pbXBvcnQgeyBnZW5lcmF0ZU1lbnUgfSBmcm9tIFwiLi9nZW5NZW51XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUFib3V0IH0gZnJvbSBcIi4vZ2VuQWJvdXRcIjtcbmltcG9ydCByZXN0YXVyYW50RGF0YSBmcm9tIFwiLi9yZXN0YXVyYW50RGF0YS5qc29uXCJcbmNvbnN0IG1lbnVJdGVtcyA9IHJlc3RhdXJhbnREYXRhLm1lbnVJdGVtcztcbmNvbnN0IGFib3V0SXRlbXMgPSByZXN0YXVyYW50RGF0YS5hYm91dEl0ZW1zO1xuY29uc3QgYWJvdXRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQtdGFiJyk7XG5jb25zdCBtZW51VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtdGFiJyk7XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGJvZHkucmVtb3ZlQ2hpbGQoY29udGVudCk7XG4gICAgXG4gICAgY29uc3QgbmV3Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIGJvZHkuYXBwZW5kKG5ld0NvbnRlbnQpO1xuXG59XG5cbmZ1bmN0aW9uIGhhbmRsZUFib3V0Q2xpY2soKSB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChnZW5lcmF0ZUFib3V0KGFib3V0SXRlbXMpKTtcbiAgICBjaGFuZ2VIZXJvKCdBYm91dCcsICcuL2ltYWdlcy9hYm91dC1oZXJvLmpwZWcnKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTWVudUNsaWNrKCkge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2VuZXJhdGVNZW51KG1lbnVJdGVtcykpO1xuICAgIGNoYW5nZUhlcm8oJ01lbnUnLCAnLi9pbWFnZXMvbWVudS1oZXJvLmpwZWcnKTtcbn1cblxuYWJvdXRUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBYm91dENsaWNrKVxubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZU1lbnVDbGljaylcblxuaGFuZGxlTWVudUNsaWNrKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
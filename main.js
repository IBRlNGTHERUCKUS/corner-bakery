/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/genAbout.js":
/*!*************************!*\
  !*** ./src/genAbout.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateAbout: () => (/* binding */ generateAbout)
/* harmony export */ });
function generateAbout(aboutItems) {
    const content = document.querySelector(".content");
    // Hero image and text
    const hero = document.querySelector('.hero');
    hero.style.backgroundImage = 'url(./images/about-hero.jpeg)';
    const heroText = document.querySelector('.hero-text');
    heroText.textContent = 'About';
    // Sections
    console.log(aboutItems);
    for (let section of aboutItems) {
        // Create header and content element
        const sectionHeader = document.createElement('div');
        const sectionLine1 = document.createElement('div');
        const sectionName = document.createElement('h2');
        const sectionLine2 = document.createElement('div');
        const sectionContent = document.createElement('p');
        // Add appropriate classes
        sectionHeader.classList.add('section-header');
        sectionLine1.classList.add('section-line');
        sectionLine2.classList.add('section-line');
        sectionContent.classList.add('section-content');
        // Add data
        sectionName.textContent = section.sectionName;
        sectionContent.innerText = section.sectionContent;
        // Attach parts
        sectionHeader.append(sectionLine1, sectionName, sectionLine2);
        content.append(sectionHeader, sectionContent);
    }
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
function generateMenu(menuItems) {
    const content = document.querySelector(".content");
    // Hero image and text
    const hero = document.querySelector('.hero');
    hero.style.backgroundImage = 'url(./images/menu-hero.jpeg)';
    const heroText = document.querySelector('.hero-text');
    heroText.textContent = 'Menu';

    // Menu items
    const menu = document.createElement('div');
    for (let section of menuItems) {
        // Create section header
        const sectionHeader = document.createElement('div');
        const sectionName = document.createElement('h1');
        const sectionLine1 = document.createElement('div');
        const sectionLine2 = document.createElement('div');
        sectionHeader.classList.add('section-header');
        sectionName.classList.add('section-name');
        sectionLine1.classList.add('section-line');
        sectionLine2.classList.add('section-line');
        sectionName.textContent = section.sectionName;
        sectionHeader.append(sectionLine1, sectionName, sectionLine2)
        menu.append(sectionHeader)
        // Create section content
        const sectionContainer = document.createElement('div');
        sectionContainer.classList.add('section-container');
        for (let item of section.sectionItems) {
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
            sectionContainer.append(itemContainer);
        }
        menu.append(sectionContainer)
    }
    content.append(menu);
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
/* harmony import */ var _genMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genMenu */ "./src/genMenu.js");
/* harmony import */ var _genAbout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genAbout */ "./src/genAbout.js");
/* harmony import */ var _restaurantData_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurantData.json */ "./src/restaurantData.json");



const menuItems = _restaurantData_json__WEBPACK_IMPORTED_MODULE_2__.menuItems;
const aboutItems = _restaurantData_json__WEBPACK_IMPORTED_MODULE_2__.aboutItems;
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

aboutTab.addEventListener('click', ()=> {
    clearContent();
    (0,_genAbout__WEBPACK_IMPORTED_MODULE_1__.generateAbout)(aboutItems);
} )

menuTab.addEventListener('click', ()=> {
    clearContent();
    (0,_genMenu__WEBPACK_IMPORTED_MODULE_0__.generateMenu)(menuItems);
} )

;(0,_genMenu__WEBPACK_IMPORTED_MODULE_0__.generateMenu)(menuItems);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ055QztBQUNFO0FBQ087QUFDbEQsa0JBQWtCLDJEQUF3QjtBQUMxQyxtQkFBbUIsNERBQXlCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3REFBYTtBQUNqQixFQUFFOztBQUVGO0FBQ0E7QUFDQSxJQUFJLHNEQUFZO0FBQ2hCLEVBQUU7O0FBRUYsdURBQVksWSIsInNvdXJjZXMiOlsid2VicGFjazovL2Nvcm5lci1iYWtlcnkvLi9zcmMvZ2VuQWJvdXQuanMiLCJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS8uL3NyYy9nZW5NZW51LmpzIiwid2VicGFjazovL2Nvcm5lci1iYWtlcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nvcm5lci1iYWtlcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdlbmVyYXRlQWJvdXQoYWJvdXRJdGVtcykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgLy8gSGVybyBpbWFnZSBhbmQgdGV4dFxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpO1xuICAgIGhlcm8uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguL2ltYWdlcy9hYm91dC1oZXJvLmpwZWcpJztcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXRleHQnKTtcbiAgICBoZXJvVGV4dC50ZXh0Q29udGVudCA9ICdBYm91dCc7XG4gICAgLy8gU2VjdGlvbnNcbiAgICBjb25zb2xlLmxvZyhhYm91dEl0ZW1zKTtcbiAgICBmb3IgKGxldCBzZWN0aW9uIG9mIGFib3V0SXRlbXMpIHtcbiAgICAgICAgLy8gQ3JlYXRlIGhlYWRlciBhbmQgY29udGVudCBlbGVtZW50XG4gICAgICAgIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkxpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAvLyBBZGQgYXBwcm9wcmlhdGUgY2xhc3Nlc1xuICAgICAgICBzZWN0aW9uSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taGVhZGVyJyk7XG4gICAgICAgIHNlY3Rpb25MaW5lMS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWxpbmUnKTtcbiAgICAgICAgc2VjdGlvbkxpbmUyLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tbGluZScpO1xuICAgICAgICBzZWN0aW9uQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWNvbnRlbnQnKTtcbiAgICAgICAgLy8gQWRkIGRhdGFcbiAgICAgICAgc2VjdGlvbk5hbWUudGV4dENvbnRlbnQgPSBzZWN0aW9uLnNlY3Rpb25OYW1lO1xuICAgICAgICBzZWN0aW9uQ29udGVudC5pbm5lclRleHQgPSBzZWN0aW9uLnNlY3Rpb25Db250ZW50O1xuICAgICAgICAvLyBBdHRhY2ggcGFydHNcbiAgICAgICAgc2VjdGlvbkhlYWRlci5hcHBlbmQoc2VjdGlvbkxpbmUxLCBzZWN0aW9uTmFtZSwgc2VjdGlvbkxpbmUyKTtcbiAgICAgICAgY29udGVudC5hcHBlbmQoc2VjdGlvbkhlYWRlciwgc2VjdGlvbkNvbnRlbnQpO1xuICAgIH1cbn1cblxuZXhwb3J0IHtnZW5lcmF0ZUFib3V0fSIsImZ1bmN0aW9uIGdlbmVyYXRlTWVudShtZW51SXRlbXMpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICAgIC8vIEhlcm8gaW1hZ2UgYW5kIHRleHRcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8nKTtcbiAgICBoZXJvLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoLi9pbWFnZXMvbWVudS1oZXJvLmpwZWcpJztcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvLXRleHQnKTtcbiAgICBoZXJvVGV4dC50ZXh0Q29udGVudCA9ICdNZW51JztcblxuICAgIC8vIE1lbnUgaXRlbXNcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yIChsZXQgc2VjdGlvbiBvZiBtZW51SXRlbXMpIHtcbiAgICAgICAgLy8gQ3JlYXRlIHNlY3Rpb24gaGVhZGVyXG4gICAgICAgIGNvbnN0IHNlY3Rpb25IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgICAgICBjb25zdCBzZWN0aW9uTGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkxpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNlY3Rpb25IZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1oZWFkZXInKTtcbiAgICAgICAgc2VjdGlvbk5hbWUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1uYW1lJyk7XG4gICAgICAgIHNlY3Rpb25MaW5lMS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWxpbmUnKTtcbiAgICAgICAgc2VjdGlvbkxpbmUyLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tbGluZScpO1xuICAgICAgICBzZWN0aW9uTmFtZS50ZXh0Q29udGVudCA9IHNlY3Rpb24uc2VjdGlvbk5hbWU7XG4gICAgICAgIHNlY3Rpb25IZWFkZXIuYXBwZW5kKHNlY3Rpb25MaW5lMSwgc2VjdGlvbk5hbWUsIHNlY3Rpb25MaW5lMilcbiAgICAgICAgbWVudS5hcHBlbmQoc2VjdGlvbkhlYWRlcilcbiAgICAgICAgLy8gQ3JlYXRlIHNlY3Rpb24gY29udGVudFxuICAgICAgICBjb25zdCBzZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNlY3Rpb25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1jb250YWluZXInKTtcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBzZWN0aW9uLnNlY3Rpb25JdGVtcykge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIHRoZSBuZWNlc3NhcnkgZWxlbWVudHNcbiAgICAgICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgbGV0IGl0ZW1JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgbGV0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbGV0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICAvLyBBc3NpZ24gY2xhc3Nlc1xuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgnaXRlbS1uYW1lJyk7XG4gICAgICAgICAgICBpdGVtSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaXRlbS1pbWFnZScpO1xuICAgICAgICAgICAgaXRlbURlc2MuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgaXRlbVByaWNlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tcHJpY2UnKTtcbiAgICAgICAgICAgIC8vIEZpbGwgZGF0YVxuICAgICAgICAgICAgaXRlbUltYWdlLnNyYyA9IGl0ZW0uaW1hZ2U7XG4gICAgICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgICAgIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjO1xuICAgICAgICAgICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcbiAgICAgICAgICAgIC8vIEF0dGFjaCBpdGVtcyBcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kKGl0ZW1JbWFnZSwgaXRlbU5hbWUsIGl0ZW1EZXNjLCBpdGVtUHJpY2UpO1xuICAgICAgICAgICAgc2VjdGlvbkNvbnRhaW5lci5hcHBlbmQoaXRlbUNvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgbWVudS5hcHBlbmQoc2VjdGlvbkNvbnRhaW5lcilcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmQobWVudSk7XG59XG5cbmV4cG9ydCB7Z2VuZXJhdGVNZW51fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdlbmVyYXRlTWVudSB9IGZyb20gXCIuL2dlbk1lbnVcIjtcbmltcG9ydCB7IGdlbmVyYXRlQWJvdXQgfSBmcm9tIFwiLi9nZW5BYm91dFwiO1xuaW1wb3J0IHJlc3RhdXJhbnREYXRhIGZyb20gXCIuL3Jlc3RhdXJhbnREYXRhLmpzb25cIlxuY29uc3QgbWVudUl0ZW1zID0gcmVzdGF1cmFudERhdGEubWVudUl0ZW1zO1xuY29uc3QgYWJvdXRJdGVtcyA9IHJlc3RhdXJhbnREYXRhLmFib3V0SXRlbXM7XG5jb25zdCBhYm91dFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhYm91dC10YWInKTtcbmNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudS10YWInKTtcblxuZnVuY3Rpb24gY2xlYXJDb250ZW50KCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgYm9keS5yZW1vdmVDaGlsZChjb250ZW50KTtcbiAgICBcbiAgICBjb25zdCBuZXdDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3Q29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50Jyk7XG4gICAgYm9keS5hcHBlbmQobmV3Q29udGVudCk7XG5cbn1cblxuYWJvdXRUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBnZW5lcmF0ZUFib3V0KGFib3V0SXRlbXMpO1xufSApXG5cbm1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+IHtcbiAgICBjbGVhckNvbnRlbnQoKTtcbiAgICBnZW5lcmF0ZU1lbnUobWVudUl0ZW1zKTtcbn0gKVxuXG5nZW5lcmF0ZU1lbnUobWVudUl0ZW1zKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
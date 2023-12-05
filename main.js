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
        sectionContent.textContent = section.sectionContent;
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

module.exports = JSON.parse('{"aboutItems":[{"sectionName":"Our Story","sectionContent":"Welcome to our elegant bakery, where we create the most delectable and visually stunning desserts that are sure to leave you spellbound. Our team of expert bakers and pastry chefs use only the finest ingredients to craft our signature cakes, pastries, and confections. From classic French macarons to artisanal bread, we have something to satisfy every palate. Our bakery is the perfect place to indulge in a sweet treat, catch up with friends over coffee, or celebrate a special occasion. Come visit us today and experience the magic of our elegant bakery!"},{"sectionName":"Hours","sectionContent":"Monday-Friday: 8AM-6PM"}],"menuItems":[{"sectionName":"Sweet","sectionItems":[{"name":"Cookies","desc":"Chocolate Chip - White Chocolate Macadamia Nut - PeanutButter - Sugar Cookies","image":"https://i0.wp.com/www.brownedbutterblondie.com/wp-content/uploads/2023/05/CCC-Cuisinart-IG-BEST-1-scaled.jpg?fit=1834%2C2560&ssl=1","price":5},{"name":"Pies","desc":"Pumpkin - Apple - Cherry","image":"https://www.completelydelicious.com/wp-content/uploads/2017/06/sweet-cherry-pie-6-660x880.jpg","price":15},{"name":"Macroons","desc":"Vanilla - Strawberry - Red Velvet - Blueberry","image":"https://cdn1.harryanddavid.com/wcsstore/HarryAndDavid/images/catalog/19_33463_30GL_01ex.jpg","price":8},{"name":"Strudel","desc":"Deliciously flaky, guava and cream cheese filling.","image":"https://www.portosbakery.com/wp-content/uploads/2021/11/202111-Guava-Strudel-1-Dskt.jpg","price":2}]},{"sectionName":"Savory","sectionItems":[{"name":"Meat Pie","desc":"Stuffed with potatoes, carrots, and free-range ground beef. Served hot!","image":"https://www.allrecipes.com/thmb/_3jPHufaETCeFPvP3EuaDtgH6uM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/1672302-meat-pie-LouLou-4x3-1-5be60f37ea444abd8b4f11f85b74324f.jpg","price":17},{"name":"Baked Ham and Cheese Croissant","desc":"Carefully layered pastry material filled with all American ham and Pepperjack cheese.","image":"https://alexandracooks.com/wp-content/uploads/2013/03/8589716731_e26fe57d9c_b21.jpg","price":12}]},{"sectionName":"Breads","sectionItems":[{"name":"Sourdough - French Baguettes - Raisin Shepards Rye - Brioche buns","desc":"Baked daily in our early 1900s brick oven.","image":"https://marketbasketbeulah.com/wp-content/uploads/iStock_000013389966Small.jpg","price":11}]}]}');

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

//generateMenu(menuItems);
;(0,_genAbout__WEBPACK_IMPORTED_MODULE_1__.generateAbout)(aboutItems);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ055QztBQUNFO0FBQ087QUFDbEQsa0JBQWtCLDJEQUF3QjtBQUMxQyxtQkFBbUIsNERBQXlCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3REFBYTtBQUNqQixFQUFFOztBQUVGO0FBQ0E7QUFDQSxJQUFJLHNEQUFZO0FBQ2hCLEVBQUU7O0FBRUY7QUFDQSx5REFBYSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS8uL3NyYy9nZW5BYm91dC5qcyIsIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5Ly4vc3JjL2dlbk1lbnUuanMiLCJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nvcm5lci1iYWtlcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2VuZXJhdGVBYm91dChhYm91dEl0ZW1zKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAvLyBIZXJvIGltYWdlIGFuZCB0ZXh0XG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJyk7XG4gICAgaGVyby5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4vaW1hZ2VzL2Fib3V0LWhlcm8uanBlZyknO1xuICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tdGV4dCcpO1xuICAgIGhlcm9UZXh0LnRleHRDb250ZW50ID0gJ0Fib3V0JztcbiAgICAvLyBTZWN0aW9uc1xuICAgIGNvbnNvbGUubG9nKGFib3V0SXRlbXMpO1xuICAgIGZvciAobGV0IHNlY3Rpb24gb2YgYWJvdXRJdGVtcykge1xuICAgICAgICAvLyBDcmVhdGUgaGVhZGVyIGFuZCBjb250ZW50IGVsZW1lbnRcbiAgICAgICAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBzZWN0aW9uTGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjb25zdCBzZWN0aW9uTGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIC8vIEFkZCBhcHByb3ByaWF0ZSBjbGFzc2VzXG4gICAgICAgIHNlY3Rpb25IZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1oZWFkZXInKTtcbiAgICAgICAgc2VjdGlvbkxpbmUxLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tbGluZScpO1xuICAgICAgICBzZWN0aW9uTGluZTIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1saW5lJyk7XG4gICAgICAgIHNlY3Rpb25Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tY29udGVudCcpO1xuICAgICAgICAvLyBBZGQgZGF0YVxuICAgICAgICBzZWN0aW9uTmFtZS50ZXh0Q29udGVudCA9IHNlY3Rpb24uc2VjdGlvbk5hbWU7XG4gICAgICAgIHNlY3Rpb25Db250ZW50LnRleHRDb250ZW50ID0gc2VjdGlvbi5zZWN0aW9uQ29udGVudDtcbiAgICAgICAgLy8gQXR0YWNoIHBhcnRzXG4gICAgICAgIHNlY3Rpb25IZWFkZXIuYXBwZW5kKHNlY3Rpb25MaW5lMSwgc2VjdGlvbk5hbWUsIHNlY3Rpb25MaW5lMik7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kKHNlY3Rpb25IZWFkZXIsIHNlY3Rpb25Db250ZW50KTtcbiAgICB9XG59XG5cbmV4cG9ydCB7Z2VuZXJhdGVBYm91dH0iLCJmdW5jdGlvbiBnZW5lcmF0ZU1lbnUobWVudUl0ZW1zKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAvLyBIZXJvIGltYWdlIGFuZCB0ZXh0XG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJyk7XG4gICAgaGVyby5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4vaW1hZ2VzL21lbnUtaGVyby5qcGVnKSc7XG4gICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby10ZXh0Jyk7XG4gICAgaGVyb1RleHQudGV4dENvbnRlbnQgPSAnTWVudSc7XG5cbiAgICAvLyBNZW51IGl0ZW1zXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IHNlY3Rpb24gb2YgbWVudUl0ZW1zKSB7XG4gICAgICAgIC8vIENyZWF0ZSBzZWN0aW9uIGhlYWRlclxuICAgICAgICBjb25zdCBzZWN0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25MaW5lMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZWN0aW9uSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24taGVhZGVyJyk7XG4gICAgICAgIHNlY3Rpb25OYW1lLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tbmFtZScpO1xuICAgICAgICBzZWN0aW9uTGluZTEuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1saW5lJyk7XG4gICAgICAgIHNlY3Rpb25MaW5lMi5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWxpbmUnKTtcbiAgICAgICAgc2VjdGlvbk5hbWUudGV4dENvbnRlbnQgPSBzZWN0aW9uLnNlY3Rpb25OYW1lO1xuICAgICAgICBzZWN0aW9uSGVhZGVyLmFwcGVuZChzZWN0aW9uTGluZTEsIHNlY3Rpb25OYW1lLCBzZWN0aW9uTGluZTIpXG4gICAgICAgIG1lbnUuYXBwZW5kKHNlY3Rpb25IZWFkZXIpXG4gICAgICAgIC8vIENyZWF0ZSBzZWN0aW9uIGNvbnRlbnRcbiAgICAgICAgY29uc3Qgc2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzZWN0aW9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tY29udGFpbmVyJyk7XG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2Ygc2VjdGlvbi5zZWN0aW9uSXRlbXMpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgbmVjZXNzYXJ5IGVsZW1lbnRzXG4gICAgICAgICAgICBsZXQgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGV0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgICAgIGxldCBpdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGxldCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGxldCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgICAgICAgICAgLy8gQXNzaWduIGNsYXNzZXNcbiAgICAgICAgICAgIGl0ZW1Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnaXRlbS1jb250YWluZXInKTtcbiAgICAgICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuICAgICAgICAgICAgaXRlbUltYWdlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW1hZ2UnKTtcbiAgICAgICAgICAgIGl0ZW1EZXNjLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaWNlJyk7XG4gICAgICAgICAgICAvLyBGaWxsIGRhdGFcbiAgICAgICAgICAgIGl0ZW1JbWFnZS5zcmMgPSBpdGVtLmltYWdlO1xuICAgICAgICAgICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgICAgICBpdGVtRGVzYy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzYztcbiAgICAgICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG4gICAgICAgICAgICAvLyBBdHRhY2ggaXRlbXMgXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmFwcGVuZChpdGVtSW1hZ2UsIGl0ZW1OYW1lLCBpdGVtRGVzYywgaXRlbVByaWNlKTtcbiAgICAgICAgICAgIHNlY3Rpb25Db250YWluZXIuYXBwZW5kKGl0ZW1Db250YWluZXIpO1xuICAgICAgICB9XG4gICAgICAgIG1lbnUuYXBwZW5kKHNlY3Rpb25Db250YWluZXIpXG4gICAgfVxuICAgIGNvbnRlbnQuYXBwZW5kKG1lbnUpO1xufVxuXG5leHBvcnQge2dlbmVyYXRlTWVudX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBnZW5lcmF0ZU1lbnUgfSBmcm9tIFwiLi9nZW5NZW51XCI7XG5pbXBvcnQgeyBnZW5lcmF0ZUFib3V0IH0gZnJvbSBcIi4vZ2VuQWJvdXRcIjtcbmltcG9ydCByZXN0YXVyYW50RGF0YSBmcm9tIFwiLi9yZXN0YXVyYW50RGF0YS5qc29uXCJcbmNvbnN0IG1lbnVJdGVtcyA9IHJlc3RhdXJhbnREYXRhLm1lbnVJdGVtcztcbmNvbnN0IGFib3V0SXRlbXMgPSByZXN0YXVyYW50RGF0YS5hYm91dEl0ZW1zO1xuY29uc3QgYWJvdXRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWJvdXQtdGFiJyk7XG5jb25zdCBtZW51VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUtdGFiJyk7XG5cbmZ1bmN0aW9uIGNsZWFyQ29udGVudCgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgIGJvZHkucmVtb3ZlQ2hpbGQoY29udGVudCk7XG4gICAgXG4gICAgY29uc3QgbmV3Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnY29udGVudCcpO1xuICAgIGJvZHkuYXBwZW5kKG5ld0NvbnRlbnQpO1xuXG59XG5cbmFib3V0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgZ2VuZXJhdGVBYm91dChhYm91dEl0ZW1zKTtcbn0gKVxuXG5tZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgY2xlYXJDb250ZW50KCk7XG4gICAgZ2VuZXJhdGVNZW51KG1lbnVJdGVtcyk7XG59IClcblxuLy9nZW5lcmF0ZU1lbnUobWVudUl0ZW1zKTtcbmdlbmVyYXRlQWJvdXQoYWJvdXRJdGVtcyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
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

//generateMenu(menuItems);
;(0,_genAbout__WEBPACK_IMPORTED_MODULE_1__.generateAbout)(aboutItems);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ055QztBQUNFO0FBQ087QUFDbEQsa0JBQWtCLDJEQUF3QjtBQUMxQyxtQkFBbUIsNERBQXlCO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSx3REFBYTtBQUNqQixFQUFFOztBQUVGO0FBQ0E7QUFDQSxJQUFJLHNEQUFZO0FBQ2hCLEVBQUU7O0FBRUY7QUFDQSx5REFBYSxhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS8uL3NyYy9nZW5BYm91dC5qcyIsIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5Ly4vc3JjL2dlbk1lbnUuanMiLCJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nvcm5lci1iYWtlcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2VuZXJhdGVBYm91dChhYm91dEl0ZW1zKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAvLyBIZXJvIGltYWdlIGFuZCB0ZXh0XG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJyk7XG4gICAgaGVyby5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKC4vaW1hZ2VzL2Fib3V0LWhlcm8uanBlZyknO1xuICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tdGV4dCcpO1xuICAgIGhlcm9UZXh0LnRleHRDb250ZW50ID0gJ0Fib3V0JztcbiAgICAvLyBTZWN0aW9uc1xuICAgIGNvbnNvbGUubG9nKGFib3V0SXRlbXMpO1xuICAgIGZvciAobGV0IHNlY3Rpb24gb2YgYWJvdXRJdGVtcykge1xuICAgICAgICAvLyBDcmVhdGUgaGVhZGVyIGFuZCBjb250ZW50IGVsZW1lbnRcbiAgICAgICAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBzZWN0aW9uTGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBjb25zdCBzZWN0aW9uTGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3Qgc2VjdGlvbkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIC8vIEFkZCBhcHByb3ByaWF0ZSBjbGFzc2VzXG4gICAgICAgIHNlY3Rpb25IZWFkZXIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1oZWFkZXInKTtcbiAgICAgICAgc2VjdGlvbkxpbmUxLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tbGluZScpO1xuICAgICAgICBzZWN0aW9uTGluZTIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1saW5lJyk7XG4gICAgICAgIHNlY3Rpb25Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tY29udGVudCcpO1xuICAgICAgICAvLyBBZGQgZGF0YVxuICAgICAgICBzZWN0aW9uTmFtZS50ZXh0Q29udGVudCA9IHNlY3Rpb24uc2VjdGlvbk5hbWU7XG4gICAgICAgIHNlY3Rpb25Db250ZW50LmlubmVyVGV4dCA9IHNlY3Rpb24uc2VjdGlvbkNvbnRlbnQ7XG4gICAgICAgIC8vIEF0dGFjaCBwYXJ0c1xuICAgICAgICBzZWN0aW9uSGVhZGVyLmFwcGVuZChzZWN0aW9uTGluZTEsIHNlY3Rpb25OYW1lLCBzZWN0aW9uTGluZTIpO1xuICAgICAgICBjb250ZW50LmFwcGVuZChzZWN0aW9uSGVhZGVyLCBzZWN0aW9uQ29udGVudCk7XG4gICAgfVxufVxuXG5leHBvcnQge2dlbmVyYXRlQWJvdXR9IiwiZnVuY3Rpb24gZ2VuZXJhdGVNZW51KG1lbnVJdGVtcykge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgLy8gSGVybyBpbWFnZSBhbmQgdGV4dFxuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVybycpO1xuICAgIGhlcm8uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybCguL2ltYWdlcy9tZW51LWhlcm8uanBlZyknO1xuICAgIGNvbnN0IGhlcm9UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tdGV4dCcpO1xuICAgIGhlcm9UZXh0LnRleHRDb250ZW50ID0gJ01lbnUnO1xuXG4gICAgLy8gTWVudSBpdGVtc1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3IgKGxldCBzZWN0aW9uIG9mIG1lbnVJdGVtcykge1xuICAgICAgICAvLyBDcmVhdGUgc2VjdGlvbiBoZWFkZXJcbiAgICAgICAgY29uc3Qgc2VjdGlvbkhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBzZWN0aW9uTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgICAgIGNvbnN0IHNlY3Rpb25MaW5lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBzZWN0aW9uTGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2VjdGlvbkhlYWRlci5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWhlYWRlcicpO1xuICAgICAgICBzZWN0aW9uTmFtZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLW5hbWUnKTtcbiAgICAgICAgc2VjdGlvbkxpbmUxLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb24tbGluZScpO1xuICAgICAgICBzZWN0aW9uTGluZTIuY2xhc3NMaXN0LmFkZCgnc2VjdGlvbi1saW5lJyk7XG4gICAgICAgIHNlY3Rpb25OYW1lLnRleHRDb250ZW50ID0gc2VjdGlvbi5zZWN0aW9uTmFtZTtcbiAgICAgICAgc2VjdGlvbkhlYWRlci5hcHBlbmQoc2VjdGlvbkxpbmUxLCBzZWN0aW9uTmFtZSwgc2VjdGlvbkxpbmUyKVxuICAgICAgICBtZW51LmFwcGVuZChzZWN0aW9uSGVhZGVyKVxuICAgICAgICAvLyBDcmVhdGUgc2VjdGlvbiBjb250ZW50XG4gICAgICAgIGNvbnN0IHNlY3Rpb25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2VjdGlvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uLWNvbnRhaW5lcicpO1xuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIHNlY3Rpb24uc2VjdGlvbkl0ZW1zKSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgdGhlIG5lY2Vzc2FyeSBlbGVtZW50c1xuICAgICAgICAgICAgbGV0IGl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICBsZXQgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBsZXQgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsZXQgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICAgICAgICAgIC8vIEFzc2lnbiBjbGFzc2VzXG4gICAgICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGFpbmVyJyk7XG4gICAgICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKTtcbiAgICAgICAgICAgIGl0ZW1JbWFnZS5jbGFzc0xpc3QuYWRkKCdpdGVtLWltYWdlJyk7XG4gICAgICAgICAgICBpdGVtRGVzYy5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZCgnaXRlbS1wcmljZScpO1xuICAgICAgICAgICAgLy8gRmlsbCBkYXRhXG4gICAgICAgICAgICBpdGVtSW1hZ2Uuc3JjID0gaXRlbS5pbWFnZTtcbiAgICAgICAgICAgIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgICAgICAgICAgaXRlbURlc2MudGV4dENvbnRlbnQgPSBpdGVtLmRlc2M7XG4gICAgICAgICAgICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuICAgICAgICAgICAgLy8gQXR0YWNoIGl0ZW1zIFxuICAgICAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmQoaXRlbUltYWdlLCBpdGVtTmFtZSwgaXRlbURlc2MsIGl0ZW1QcmljZSk7XG4gICAgICAgICAgICBzZWN0aW9uQ29udGFpbmVyLmFwcGVuZChpdGVtQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBtZW51LmFwcGVuZChzZWN0aW9uQ29udGFpbmVyKVxuICAgIH1cbiAgICBjb250ZW50LmFwcGVuZChtZW51KTtcbn1cblxuZXhwb3J0IHtnZW5lcmF0ZU1lbnV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2VuZXJhdGVNZW51IH0gZnJvbSBcIi4vZ2VuTWVudVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVBYm91dCB9IGZyb20gXCIuL2dlbkFib3V0XCI7XG5pbXBvcnQgcmVzdGF1cmFudERhdGEgZnJvbSBcIi4vcmVzdGF1cmFudERhdGEuanNvblwiXG5jb25zdCBtZW51SXRlbXMgPSByZXN0YXVyYW50RGF0YS5tZW51SXRlbXM7XG5jb25zdCBhYm91dEl0ZW1zID0gcmVzdGF1cmFudERhdGEuYWJvdXRJdGVtcztcbmNvbnN0IGFib3V0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0LXRhYicpO1xuY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51LXRhYicpO1xuXG5mdW5jdGlvbiBjbGVhckNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICBib2R5LnJlbW92ZUNoaWxkKGNvbnRlbnQpO1xuICAgIFxuICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKTtcbiAgICBib2R5LmFwcGVuZChuZXdDb250ZW50KTtcblxufVxuXG5hYm91dFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGdlbmVyYXRlQWJvdXQoYWJvdXRJdGVtcyk7XG59IClcblxubWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xuICAgIGNsZWFyQ29udGVudCgpO1xuICAgIGdlbmVyYXRlTWVudShtZW51SXRlbXMpO1xufSApXG5cbi8vZ2VuZXJhdGVNZW51KG1lbnVJdGVtcyk7XG5nZW5lcmF0ZUFib3V0KGFib3V0SXRlbXMpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    console.log(menuItems);
    const content = document.querySelector(".content");
    // Hero image and section name
    const hero = document.createElement('div');
    hero.textContent = 'Menu';
    hero.classList.add('hero');
    content.append(hero);
    // Menu items
    const menu = document.createElement('div');
    for (let item of menuItems) {
        // Create the necessary elements
        let itemContainer = document.createElement('div');
        let itemName = document.createElement('h2');
        let itemImage = document.createElement('img');
        let itemDesc = document.createElement('p');
        let itemPrice = document.createElement('p');
        // Assign classes
        itemContainer.classList.add('item-container');
        itemName.classList.add('item-name');
        itemImage.classList.add('item-image');
        itemDesc.classList.add('item-description');
        itemPrice.classList.add('item-price');
        // Fill data
        itemName.textContent = item.name;
        itemDesc.textContent = item.desc;
        itemPrice.textContent = item.price;
        // Attach items 
        itemContainer.append(itemImage, itemName, itemDesc, itemPrice);
        menu.append(itemContainer);
    }
    content.append(hero);
    content.append(menu);
}



/***/ }),

/***/ "./src/restaurantData.json":
/*!*********************************!*\
  !*** ./src/restaurantData.json ***!
  \*********************************/
/***/ ((module) => {

module.exports = JSON.parse('{"about":"dsd","menuItems":[{"name":"Cookies","desc":"Chocolate Chip = White Chocolate Macadamia Nut - PeanutButter - Sugar Cookies","image":"dddddd","price":5},{"name":"Pies","desc":"","image":"dddddd","price":2},{"name":"Macroons","desc":"","image":"dddddd","price":2},{"name":"Strudel","desc":"","image":"dddddd","price":2}]}');

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
/* harmony import */ var _restaurantData_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurantData.json */ "./src/restaurantData.json");


const menuItems = [];
for (let menuItem of _restaurantData_json__WEBPACK_IMPORTED_MODULE_1__.menuItems) {
    menuItems.push(menuItem);
}
console.log(menuItems);

(0,_genMenu__WEBPACK_IMPORTED_MODULE_0__.generateMenu)(menuItems);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNqQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDUztBQUNsRDtBQUNBLHFCQUFxQiwyREFBd0I7QUFDN0M7QUFDQTtBQUNBOztBQUVBLHNEQUFZLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5Ly4vc3JjL2dlbk1lbnUuanMiLCJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Nvcm5lci1iYWtlcnkvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2VuZXJhdGVNZW51KG1lbnVJdGVtcykge1xuICAgIGNvbnNvbGUubG9nKG1lbnVJdGVtcyk7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAvLyBIZXJvIGltYWdlIGFuZCBzZWN0aW9uIG5hbWVcbiAgICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVyby50ZXh0Q29udGVudCA9ICdNZW51JztcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICBjb250ZW50LmFwcGVuZChoZXJvKTtcbiAgICAvLyBNZW51IGl0ZW1zXG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvciAobGV0IGl0ZW0gb2YgbWVudUl0ZW1zKSB7XG4gICAgICAgIC8vIENyZWF0ZSB0aGUgbmVjZXNzYXJ5IGVsZW1lbnRzXG4gICAgICAgIGxldCBpdGVtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGxldCBpdGVtSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgbGV0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAvLyBBc3NpZ24gY2xhc3Nlc1xuICAgICAgICBpdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tY29udGFpbmVyJyk7XG4gICAgICAgIGl0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpO1xuICAgICAgICBpdGVtSW1hZ2UuY2xhc3NMaXN0LmFkZCgnaXRlbS1pbWFnZScpO1xuICAgICAgICBpdGVtRGVzYy5jbGFzc0xpc3QuYWRkKCdpdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgIGl0ZW1QcmljZS5jbGFzc0xpc3QuYWRkKCdpdGVtLXByaWNlJyk7XG4gICAgICAgIC8vIEZpbGwgZGF0YVxuICAgICAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgaXRlbURlc2MudGV4dENvbnRlbnQgPSBpdGVtLmRlc2M7XG4gICAgICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG4gICAgICAgIC8vIEF0dGFjaCBpdGVtcyBcbiAgICAgICAgaXRlbUNvbnRhaW5lci5hcHBlbmQoaXRlbUltYWdlLCBpdGVtTmFtZSwgaXRlbURlc2MsIGl0ZW1QcmljZSk7XG4gICAgICAgIG1lbnUuYXBwZW5kKGl0ZW1Db250YWluZXIpO1xuICAgIH1cbiAgICBjb250ZW50LmFwcGVuZChoZXJvKTtcbiAgICBjb250ZW50LmFwcGVuZChtZW51KTtcbn1cblxuZXhwb3J0IHtnZW5lcmF0ZU1lbnV9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZ2VuZXJhdGVNZW51IH0gZnJvbSBcIi4vZ2VuTWVudVwiO1xuaW1wb3J0IHJlc3RhdXJhbnREYXRhIGZyb20gXCIuL3Jlc3RhdXJhbnREYXRhLmpzb25cIlxuY29uc3QgbWVudUl0ZW1zID0gW107XG5mb3IgKGxldCBtZW51SXRlbSBvZiByZXN0YXVyYW50RGF0YS5tZW51SXRlbXMpIHtcbiAgICBtZW51SXRlbXMucHVzaChtZW51SXRlbSk7XG59XG5jb25zb2xlLmxvZyhtZW51SXRlbXMpO1xuXG5nZW5lcmF0ZU1lbnUobWVudUl0ZW1zKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
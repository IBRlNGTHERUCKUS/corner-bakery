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

module.exports = JSON.parse('{"about":"dsd","menuItems":[{"name":"","desc":"","image":"dddddd","price":2},{"name":"","desc":"","image":"dddddd","price":2},{"name":"","desc":"","image":"dddddd","price":2},{"name":"","desc":"","image":"dddddd","price":2}]}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDN0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnlDO0FBQ1M7QUFDbEQ7QUFDQSxxQkFBcUIsMkRBQXdCO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQSxzREFBWSxZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS8uL3NyYy9nZW5NZW51LmpzIiwid2VicGFjazovL2Nvcm5lci1iYWtlcnkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vY29ybmVyLWJha2VyeS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2Nvcm5lci1iYWtlcnkvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jb3JuZXItYmFrZXJ5Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIGdlbmVyYXRlTWVudShtZW51SXRlbXMpIHtcbiAgICBjb25zb2xlLmxvZyhtZW51SXRlbXMpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgLy8gSGVybyBpbWFnZSBhbmQgc2VjdGlvbiBuYW1lXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm8udGV4dENvbnRlbnQgPSAnTWVudSc7XG4gICAgaGVyby5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG4gICAgY29udGVudC5hcHBlbmQoaGVybyk7XG4gICAgLy8gTWVudSBpdGVtc1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3IgKGxldCBpdGVtIG9mIG1lbnVJdGVtcykge1xuICAgICAgICAvLyBDcmVhdGUgdGhlIG5lY2Vzc2FyeSBlbGVtZW50c1xuICAgICAgICBsZXQgaXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBsZXQgaXRlbUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGxldCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgLy8gQXNzaWduIGNsYXNzZXNcbiAgICAgICAgaXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpdGVtLWNvbnRhaW5lcicpO1xuICAgICAgICBpdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKTtcbiAgICAgICAgaXRlbUltYWdlLmNsYXNzTGlzdC5hZGQoJ2l0ZW0taW1hZ2UnKTtcbiAgICAgICAgaXRlbURlc2MuY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjcmlwdGlvbicpO1xuICAgICAgICBpdGVtUHJpY2UuY2xhc3NMaXN0LmFkZCgnaXRlbS1wcmljZScpO1xuICAgICAgICAvLyBBdHRhY2ggaXRlbXMgXG4gICAgICAgIGl0ZW1Db250YWluZXIuYXBwZW5kKGl0ZW1JbWFnZSwgaXRlbU5hbWUsIGl0ZW1EZXNjLCBpdGVtUHJpY2UpO1xuICAgICAgICBtZW51LmFwcGVuZChpdGVtQ29udGFpbmVyKTtcbiAgICB9XG4gICAgY29udGVudC5hcHBlbmQoaGVybyk7XG4gICAgY29udGVudC5hcHBlbmQobWVudSk7XG59XG5cbmV4cG9ydCB7Z2VuZXJhdGVNZW51fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGdlbmVyYXRlTWVudSB9IGZyb20gXCIuL2dlbk1lbnVcIjtcbmltcG9ydCByZXN0YXVyYW50RGF0YSBmcm9tIFwiLi9yZXN0YXVyYW50RGF0YS5qc29uXCJcbmNvbnN0IG1lbnVJdGVtcyA9IFtdO1xuZm9yIChsZXQgbWVudUl0ZW0gb2YgcmVzdGF1cmFudERhdGEubWVudUl0ZW1zKSB7XG4gICAgbWVudUl0ZW1zLnB1c2gobWVudUl0ZW0pO1xufVxuY29uc29sZS5sb2cobWVudUl0ZW1zKTtcblxuZ2VuZXJhdGVNZW51KG1lbnVJdGVtcyk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
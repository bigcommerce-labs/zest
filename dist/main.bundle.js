/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": () => (/* binding */ actions)
/* harmony export */ });
const actions = {
    getCart: 'get-primary-cart',
    createCart: 'create-primary-cart',
};


/***/ }),

/***/ "./src/create-cart.js":
/*!****************************!*\
  !*** ./src/create-cart.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createPrimaryCart": () => (/* binding */ createPrimaryCart)
/* harmony export */ });
/* harmony import */ var _get_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-cookie */ "./src/get-cookie.js");


function getLineItems(productId) {
    return JSON.stringify({
        line_items: [
            {
                quantity: 1,
                product_id: productId,
            },
        ],
    });
}
async function createPrimaryCart(productId) {
    console.log('create primary cart');

    const response = await fetch('/api/storefront/cart', {
        headers: {
            'Content-Type': 'application/json',
            'x-xsrf-token': (0,_get_cookie__WEBPACK_IMPORTED_MODULE_0__.getCookie)('XSRF-TOKEN'),
        },
        method: 'POST',
        body: getLineItems(productId),
    });

    return await response.json();
}


/***/ }),

/***/ "./src/get-cart.js":
/*!*************************!*\
  !*** ./src/get-cart.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPrimaryCart": () => (/* binding */ getPrimaryCart)
/* harmony export */ });
function getPrimaryCart() {
    console.log('get primary cart');

    return fetch('/api/storefront/carts/', {
        method: 'GET',
    });
}


/***/ }),

/***/ "./src/get-cookie.js":
/*!***************************!*\
  !*** ./src/get-cookie.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCookie": () => (/* binding */ getCookie)
/* harmony export */ });
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ "./constants.js");
/* harmony import */ var _create_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-cart */ "./src/create-cart.js");
/* harmony import */ var _get_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./get-cart */ "./src/get-cart.js");
/*global chrome*/
console.log('Hello from your zest extension!');






chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    (async () => {
        if (request.action === _constants__WEBPACK_IMPORTED_MODULE_0__.actions.getCart) {
            let response = await (0,_get_cart__WEBPACK_IMPORTED_MODULE_2__.getPrimaryCart)();
            let json = await response.json();

            sendResponse(json);
        }

        if (request.action === _constants__WEBPACK_IMPORTED_MODULE_0__.actions.createCart) {
            console.log('request to create cart', request.productId);
            let response = await (0,_create_cart__WEBPACK_IMPORTED_MODULE_1__.createPrimaryCart)(request.productId);

            window.location.reload();
            sendResponse(response);
        }
    })();

    return true;
});

console.log('listener added');


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
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts */ "./src/scripts.js");


})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map
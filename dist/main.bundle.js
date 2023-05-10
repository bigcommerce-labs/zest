/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/getCart.js":
/*!************************!*\
  !*** ./src/getCart.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPrimaryCart": () => (/* binding */ getPrimaryCart)
/* harmony export */ });
function getPrimaryCart() {
    console.log('get primary cart');

    return fetch("/api/storefront/carts/", {
        "method": "GET"
    })
}


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getCart */ "./src/getCart.js");
console.log("Hello from your Chrome extension!");



function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function getCheckout(checkoutId) {
    console.log('get primary checkout');

    fetch(`/api/storefront/checkout/${checkoutId}?include=consignments.availableShippingOptions,cart.lineItems.physicalItems.options,cart.lineItems.digitalItems.options,customer,promotions.banners`, {
        "method": "GET"
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

function addItemsToCart(cartId, items) {
    console.log(`add items <${items}> to cart <${cartId}>`);

    fetch(`/api/storefront/carts/${cartId}/items`, {
        "headers": {
            'Content-Type': 'application/json',
            'x-xsrf-token': getCookie('XSRF-TOKEN'),
        },
        "method": "POST",
        "body": `${items}`
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

function updateCheckoutMessage(cartId, message) {
    console.log(`update checkout <${cartId}> message to <${message}>`);

    fetch(`/api/storefront/checkouts/${cartId}`, {
        "headers": {
            'Content-Type': 'application/json',
            'x-xsrf-token': getCookie('XSRF-TOKEN'),
        },
        "method": "PUT",
        "body": `${message}`
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    (async () => {
        if (request.action === "get-primary-cart") {
            let response = await (0,_getCart__WEBPACK_IMPORTED_MODULE_0__.getPrimaryCart)();
            let json = await response.json();
            
            console.log(json);
            sendResponse({json: JSON.stringify(json)});
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
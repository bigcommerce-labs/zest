/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./constants.js":
/*!**********************!*\
  !*** ./constants.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actions": () => (/* binding */ actions)
/* harmony export */ });
const actions = {
    getCart: 'get-primary-cart',
    createCart: 'create-primary-cart',
};


/***/ }),

/***/ "./node_modules/@pgrabovets/json-view/dist/jsonview.js":
/*!*************************************************************!*\
  !*** ./node_modules/@pgrabovets/json-view/dist/jsonview.js ***!
  \*************************************************************/
/***/ ((module) => {

!function(e,n){ true?module.exports=n():0}(self,(function(){return(()=>{"use strict";var e={767:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),o=t.n(r),i=t(645),a=t.n(i)()(o());a.push([e.id,'.json-container{font-family:"Open Sans";font-size:16px;background-color:#fff;color:gray;box-sizing:border-box}.json-container .line{margin:4px 0;display:flex;justify-content:flex-start}.json-container .caret-icon{width:18px;text-align:center;cursor:pointer}.json-container .empty-icon{width:18px}.json-container .json-type{margin-right:4px;margin-left:4px}.json-container .json-key{color:#444;margin-right:4px;margin-left:4px}.json-container .json-index{margin-right:4px;margin-left:4px}.json-container .json-value{margin-left:8px}.json-container .json-number{color:#f9ae58}.json-container .json-boolean{color:#ec5f66}.json-container .json-string{color:#86b25c}.json-container .json-size{margin-right:4px;margin-left:4px}.json-container .hidden{display:none}.json-container .fas{display:inline-block;border-style:solid;width:0;height:0}.json-container .fa-caret-down{border-width:6px 5px 0 5px;border-color:gray transparent}.json-container .fa-caret-right{border-width:5px 0 5px 6px;border-color:transparent transparent transparent gray}',""]);const s=a},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],d=i[l]||0,p="".concat(l," ").concat(d);i[l]=d+1;var u=t(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(f);else{var v=o(f,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:v,references:1})}a.push(p)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var d=t(i[l]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}i=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return(()=>{t.r(r),t.d(r,{collapse:()=>$,create:()=>O,default:()=>I,destroy:()=>z,expand:()=>P,render:()=>A,renderJSON:()=>N});var e=t(379),n=t.n(e),o=t(795),i=t.n(o),a=t(569),s=t.n(a),c=t(565),l=t.n(c),d=t(216),p=t.n(d),u=t(589),f=t.n(u),v=t(767),y={};function h(e){return Array.isArray(e)?"array":null===e?"null":typeof e}function m(e){return document.createElement(e)}y.styleTagTransform=f(),y.setAttributes=l(),y.insert=s().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=p(),n()(v.Z,y),v.Z&&v.Z.locals&&v.Z.locals;const x="hidden",g="fa-caret-right",j="fa-caret-down";function b(e){e.children.forEach((e=>{e.el.classList.add(x),e.isExpanded&&b(e)}))}function E(e){e.children.forEach((e=>{e.el.classList.remove(x),e.isExpanded&&E(e)}))}function S(e){if(e.children.length>0){const n=e.el.querySelector(".fas");n&&n.classList.replace(g,j)}}function k(e){if(e.children.length>0){const n=e.el.querySelector(".fas");n&&n.classList.replace(j,g)}}function w(e){e.isExpanded?(e.isExpanded=!1,k(e),b(e)):(e.isExpanded=!0,S(e),E(e))}function L(e,n){n(e),e.children.length>0&&e.children.forEach((e=>{L(e,n)}))}function T(e={}){return{key:e.key||null,parent:e.parent||null,value:e.hasOwnProperty("value")?e.value:null,isExpanded:e.isExpanded||!1,type:e.type||null,children:e.children||[],el:e.el||null,depth:e.depth||0,dispose:null}}function M(e,n){if("object"==typeof e)for(let t in e){const r=T({value:e[t],key:t,depth:n.depth+1,type:h(e[t]),parent:n});n.children.push(r),M(e[t],r)}}function C(e){return"string"==typeof e?JSON.parse(e):e}function O(e){const n=C(e),t=T({value:n,key:h(n),type:h(n)});return M(n,t),t}function N(e,n){const t=C(e),r=createTree(t);return A(r,n),r}function A(e,n){const t=function(){const e=m("div");return e.className="json-container",e}();L(e,(function(e){e.el=function(e){let n=m("div");const t=e=>{const n=e.children.length;return"array"===e.type?`[${n}]`:"object"===e.type?`{${n}}`:null};if(e.children.length>0){n.innerHTML=function(e={}){const{key:n,size:t}=e;return`\n    <div class="line">\n      <div class="caret-icon"><i class="fas fa-caret-right"></i></div>\n      <div class="json-key">${n}</div>\n      <div class="json-size">${t}</div>\n    </div>\n  `}({key:e.key,size:t(e)});const r=n.querySelector(".caret-icon");e.dispose=function(e,n,t){return e.addEventListener(n,t),()=>e.removeEventListener(n,t)}(r,"click",(()=>w(e)))}else n.innerHTML=function(e={}){const{key:n,value:t,type:r}=e;return`\n    <div class="line">\n      <div class="empty-icon"></div>\n      <div class="json-key">${n}</div>\n      <div class="json-separator">:</div>\n      <div class="json-value json-${r}">${t}</div>\n    </div>\n  `}({key:e.key,value:e.value,type:typeof e.value});const r=n.children[0];return null!==e.parent&&r.classList.add(x),r.style="margin-left: "+18*e.depth+"px;",r}(e),t.appendChild(e.el)})),n.appendChild(t)}function P(e){L(e,(function(e){e.el.classList.remove(x),e.isExpanded=!0,S(e)}))}function $(e){L(e,(function(n){n.isExpanded=!1,n.depth>e.depth&&n.el.classList.add(x),k(n)}))}function z(e){var n;L(e,(e=>{e.dispose&&e.dispose()})),(n=e.el.parentNode).parentNode.removeChild(n)}const I={render:A,create:O,renderJSON:N,expand:P,collapse:$,traverse:L,destroy:z}})(),r})()}));

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./popup/popup.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pgrabovets_json_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pgrabovets/json-view */ "./node_modules/@pgrabovets/json-view/dist/jsonview.js");
/* harmony import */ var _pgrabovets_json_view__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pgrabovets_json_view__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./constants.js");
/*global chrome*/
console.log('This is a popup!');



const elementIds = {
    getCartButton: 'action-get-primary-cart',
    createCartForm: 'create-cart-form',
    additionalActionsPanel: 'additional-actions',
};

const chromeTabsParams = { active: true, currentWindow: true };

function renderJsonTree(data) {
    const additionalActionsPanel = document.getElementById(elementIds.additionalActionsPanel);
    document.querySelector('.json-container').innerHTML = '';
    const tree = _pgrabovets_json_view__WEBPACK_IMPORTED_MODULE_0___default().create(data);
    _pgrabovets_json_view__WEBPACK_IMPORTED_MODULE_0___default().render(tree, document.querySelector('.json-container'));
    additionalActionsPanel.style.display = 'block';
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];

    chrome.runtime.sendMessage({ action: 'inject-content-script', tabId: currentTab.id }).then((response) => {
        console.log(response.msg);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const createCartForm = document.getElementById(elementIds.createCartForm);

    createCartForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const { productId } = Object.fromEntries(formData);
        console.log('productId is: ', productId);

        if (!productId && productId.length === 0) {
            alert(`Please enter a product id, example '103'`);
            return;
        }

        chrome.tabs.query(chromeTabsParams, (tabs) => {
            console.log('tabs are', tabs);

            const { id } = tabs[0];

            chrome.tabs.sendMessage(id, { action: _constants__WEBPACK_IMPORTED_MODULE_1__.actions.createCart, productId }).then((response) => {
                renderJsonTree(JSON.stringify(response));

                createCartForm.style.display = 'none';
            });
        });
    });

    // fetch cart on extension load
    console.log('fetching cart');
    chrome.tabs.query(chromeTabsParams, function (tabs) {
        const currentTab = tabs[0];

        chrome.tabs.sendMessage(currentTab.id, { action: _constants__WEBPACK_IMPORTED_MODULE_1__.actions.getCart }).then((response) => {
            if (response.length === 0) {
                createCartForm.style.display = 'block';

                return;
            }

            renderJsonTree(JSON.stringify(response[0]));
        });
    });
});

})();

/******/ })()
;
//# sourceMappingURL=popup.bundle.js.map
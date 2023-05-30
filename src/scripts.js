/*global chrome*/
console.log('Hello from your zest extension!');

import { actions } from '../constants';

import { createPrimaryCart } from './create-cart';
import { getPrimaryCart } from './get-cart';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    (async () => {
        if (request.action === actions.getCart) {
            let response = await getPrimaryCart();
            let json = await response.json();

            sendResponse(json);
        }

        if (request.action === actions.createCart) {
            console.log('request to create cart', request.productId);
            let response = await createPrimaryCart(request.productId);

            window.location.reload();
            sendResponse(response);
        }
    })();

    return true;
});

console.log('listener added');

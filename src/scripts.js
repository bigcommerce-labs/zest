/*global chrome*/
console.log('Hello from your zest extension!');

import { actions } from '../constants';

import { createPrimaryCart } from './create-cart';
import { deletePrimaryCart } from './delete-cart';
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

            sendResponse(response);
        }

        if (request.action === actions.deleteCart) {
            console.log('request to delete cart', request.cartId);
            let response = await deletePrimaryCart(request.cartId);

            sendResponse(response);
        }
    })();

    return true;
});

console.log('listener added');

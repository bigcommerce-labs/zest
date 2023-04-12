// console.log(window);
// console.log(document.cookie);

// window.postMessage({ from: 'inject.js', key: 'BCData', data: window.BCData });
// window.postMessage({ from: 'inject.js', key: 'cookie', data: document.cookie});
// window.postMessage({ from: 'inject.js', key: 'initialized', data: 'done'});

function getPrimaryCart() {
    console.log('get primary cart');

    fetch("/api/storefront/carts/", {
        "method": "GET"
    })
    .then(response => response.json())
    .then(json => console.log(json))
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
        "method": "POST",
        "body": `${items}`
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

function updateCheckoutMessage(cartId, message) {
    console.log(`update checkout <${cartId}> message to <${message}>`);

    fetch(`/api/storefront/checkouts/${cartId}`, {
        "method": "PUT",
        "body": `${message}`
    })
    .then(response => response.json())
    .then(json => console.log(json))
}

window.addEventListener('message', async (event) => {
    console.log(event);
});
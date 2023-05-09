console.log("Hello from your Chrome extension!");

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

async function getPrimaryCart() {
    console.log('get primary cart');

    return fetch("/api/storefront/carts/", {
        "method": "GET"
    })
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
            let response = await getPrimaryCart();
            let json = await response.json();
            
            console.log(json);
            sendResponse({json: JSON.stringify(json)});
        }
    })();
    return true;
  });

  console.log('listener added');

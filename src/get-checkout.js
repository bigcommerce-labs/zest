async function getCheckout(checkoutId) {
    console.log('get primary checkout');

    const response = await fetch(`/api/storefront/checkout/${checkoutId}?include=consignments.availableShippingOptions,cart.lineItems.physicalItems.options,cart.lineItems.digitalItems.options,customer,promotions.banners`, {
        "method": "GET"
    });
    const json = await response.json();

    return json;
}

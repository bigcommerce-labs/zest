export function getPrimaryCart() {
    console.log('get primary cart');

    return fetch('/api/storefront/carts/', {
        method: 'GET',
    });
}

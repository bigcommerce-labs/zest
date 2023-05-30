import { getCookie } from './get-cookie';

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
export async function createPrimaryCart(productId) {
    console.log('create primary cart');

    const response = await fetch('/api/storefront/cart', {
        headers: {
            'Content-Type': 'application/json',
            'x-xsrf-token': getCookie('XSRF-TOKEN'),
        },
        method: 'POST',
        body: getLineItems(productId),
    });

    return await response.json();
}

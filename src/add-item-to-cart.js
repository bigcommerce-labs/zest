//TODO: Refactor to use async await.
import { getCookie } from './get-cookie';

export function addItemsToCart(cartId, items) {
    console.log(`add items <${items}> to cart <${cartId}>`);

    fetch(`/api/storefront/carts/${cartId}/items`, {
        headers: {
            'Content-Type': 'application/json',
            'x-xsrf-token': getCookie('XSRF-TOKEN'),
        },
        method: 'POST',
        body: `${items}`,
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

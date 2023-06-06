import { getCookie } from './get-cookie';

const options = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'x-xsrf-token': getCookie('XSRF-TOKEN'),
    },
};

export async function deletePrimaryCart(id) {
    console.log('delete primary cart');

    const response = await fetch(`/api/storefront/carts/${id}`, options);

    return response;
}

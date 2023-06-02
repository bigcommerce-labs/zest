/*global chrome*/
console.log('This is a popup!');
import jsonview from '@pgrabovets/json-view';
import { actions } from '../constants';
import './popup.css';

const elementIds = {
    getCartButton: 'action-get-primary-cart',
    createCartForm: 'create-cart-form',
    additionalActionsPanel: 'additional-actions',
};

const chromeTabsParams = { active: true, currentWindow: true };

function renderJsonTree(data) {
    const additionalActionsPanel = document.getElementById(elementIds.additionalActionsPanel);
    document.querySelector('.json-container').innerHTML = '';
    const tree = jsonview.create(data);
    jsonview.render(tree, document.querySelector('.json-container'));
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

            chrome.tabs.sendMessage(id, { action: actions.createCart, productId }).then((response) => {
                renderJsonTree(JSON.stringify(response));

                createCartForm.style.display = 'none';
            });
        });
    });

    // fetch cart on extension load
    console.log('fetching cart');
    chrome.tabs.query(chromeTabsParams, function (tabs) {
        const currentTab = tabs[0];

        chrome.tabs.sendMessage(currentTab.id, { action: actions.getCart }).then((response) => {
            if (response.length === 0) {
                createCartForm.style.display = 'block';

                return;
            }

            renderJsonTree(JSON.stringify(response[0]));
        });
    });
});

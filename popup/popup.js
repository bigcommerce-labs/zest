/*global chrome*/
console.log('This is a popup!');
import jsonview from '@pgrabovets/json-view';
import { actions } from '../constants';
import './popup.css';

const elementIds = {
    additionalActionsPanel: 'additional-actions',
    createCartForm: 'create-cart-form',
    createCartButton: 'action-create-primary-cart',
    deleteCartButton: 'action-delete-primary-cart',
    getCartButton: 'action-get-primary-cart',
    loading: 'loading',
};

const classes = {
    buttonSpinner: 'button-spinner',
    hidden: 'hidden',
};

// TODO: Implement a way to build a cart singleton
let inMemoryCart = {};

const chromeTabsParams = { active: true, currentWindow: true };

function renderJsonTree(data) {
    const additionalActionsPanel = document.getElementById(elementIds.additionalActionsPanel);

    document.querySelector('.json-container').innerHTML = '';
    const tree = jsonview.create(data);
    // set in memory cart
    inMemoryCart.cartId = JSON.parse(data).id;
    jsonview.render(tree, document.querySelector('.json-container'));
    jsonview.expand(tree);

    additionalActionsPanel.classList.remove(classes.hidden);
}

function removeLoadingContainer() {
    const loadingContainer = document.getElementById(elementIds.loading);
    loadingContainer.classList.add(classes.hidden);
}

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const currentTab = tabs[0];

    chrome.runtime.sendMessage({ action: 'inject-content-script', tabId: currentTab.id }).then((response) => {
        console.log(response.msg);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const createCartForm = document.getElementById(elementIds.createCartForm);
    const deleteCartButton = document.getElementById(elementIds.deleteCartButton);

    console.log('aaaa');
    console.log('aaaa', deleteCartButton);

    createCartForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const createCartButton = document.getElementById(elementIds.createCartButton);
        const buttonSpinner = createCartButton.getElementsByClassName(classes.buttonSpinner)[0];
        const buttonSpan = createCartButton.getElementsByTagName('span')[0];

        const formData = new FormData(e.target);
        const { productId } = Object.fromEntries(formData);
        console.log('productId is: ', productId);

        if (!productId && productId.length === 0) {
            alert(`Please enter a product id, example '103'`);
            return;
        }

        buttonSpan.innerText = 'Creating cart...';
        buttonSpinner.classList.remove(classes.hidden);

        chrome.tabs.query(chromeTabsParams, (tabs) => {
            console.log('tabs are', tabs);

            const { id } = tabs[0];

            chrome.tabs.sendMessage(id, { action: actions.createCart, productId }).then((response) => {
                createCartForm.classList.add(classes.hidden);
                buttonSpan.innerText = 'Create cart';
                buttonSpinner.classList.add(classes.hidden);

                renderJsonTree(JSON.stringify(response));
            });
        });
    });

    deleteCartButton.addEventListener('click', (e) => {
        console.log(e);

        const buttonSpinner = deleteCartButton.getElementsByClassName(classes.buttonSpinner)[0];
        const buttonSpan = deleteCartButton.getElementsByTagName('span')[0];
        buttonSpan.innerText = 'Deleting cart...';
        buttonSpinner.classList.remove(classes.hidden);

        chrome.tabs.query(chromeTabsParams, (tabs) => {
            const { id } = tabs[0];

            chrome.tabs
                .sendMessage(id, { action: actions.deleteCart, cartId: inMemoryCart.cartId })
                .then((response) => {
                    createCartForm.classList.remove(classes.hidden);
                    createCartForm.reset();
                    buttonSpan.innerText = 'Delete cart';
                    buttonSpinner.classList.add(classes.hidden);

                    console.log('delete cart response', response);

                    // renderJsonTree(JSON.stringify(response));
                    const additionalActionsPanel = document.getElementById(elementIds.additionalActionsPanel);

                    document.querySelector('.json-container').innerHTML = '';
                    // reset in memory cart
                    inMemoryCart = {};
                    additionalActionsPanel.classList.add(classes.hidden);
                });
        });
    });

    // fetch cart on extension load
    console.log('fetching cart');
    chrome.tabs.query(chromeTabsParams, function (tabs) {
        const currentTab = tabs[0];

        chrome.tabs.sendMessage(currentTab.id, { action: actions.getCart }).then((response) => {
            if (response.length === 0) {
                createCartForm.classList.remove(classes.hidden);
                removeLoadingContainer();

                return;
            }

            removeLoadingContainer();
            renderJsonTree(JSON.stringify(response[0]));
        });
    });
});

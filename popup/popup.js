console.log('This is a popup!');
import jsonview from '@pgrabovets/json-view';

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    console.log(tabs);
    const currentTab = tabs[0];

    console.log('current tab');

    chrome.runtime.sendMessage({ action: "inject-content-script", tabId: currentTab.id })
        .then((response) => {
            console.log(response.msg);
        })
});

document.addEventListener('DOMContentLoaded', function () {
    console.log('what is going on');
    const element = document.getElementById("action-get-primary-cart");
    element.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            console.log('clicked');
            const currentTab = tabs[0];

            console.log(currentTab, element);

            chrome.tabs.sendMessage(
                currentTab.id,
                { action: "get-primary-cart" }
            ).then((response) => {
                console.log(response);

                // clear
                document.querySelector('.json-container').innerHTML = "";

                const tree = jsonview.create(response.json);
                jsonview.render(tree, document.querySelector('.json-container'));
            })
        });
    });
});


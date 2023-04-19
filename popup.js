console.log('This is a popup!');

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    currentTab = tabs[0];

    chrome.runtime.sendMessage({ action: "inject-content-script", tabId: currentTab.id })
        .then((response) => {
            // alert(response.msg);
        })
});

document.addEventListener('DOMContentLoaded', function () {
    const element = document.getElementById("action-get-primary-cart");
    element.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            currentTab = tabs[0];

            chrome.tabs.sendMessage(
                currentTab.id,
                { action: "get-primary-cart" }
            ).then((response) => {
                console.log(response);

                const tree = jsonview.create(response.json);
                jsonview.render(tree, document.querySelector('.json-container'));
            })
        });
    });
});


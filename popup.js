console.log('This is a popup!');

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {from:"popup.js", key: "inject-script", data: null}, function(response){
        alert(response.message);
    });
});

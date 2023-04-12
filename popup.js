console.log('This is a popup!');

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    current_tab = tabs[0];
    chrome.scripting.executeScript({
        target: { tabId: current_tab.id },
        files: ["content-script.js"]
      });
});

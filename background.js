// tabId (int) and <if content script loaded> (bool) kv pairs,to indicate if a tab injected content script
/*global chrome*/
let executedContentScriptByTabId = {};

chrome.webNavigation.onCommitted.addListener(async ({ tabId, url }) => {
    console.log(`web switching. tabId: ${tabId}, url: ${url}`);
    executedContentScriptByTabId[tabId] = false;
});

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action == 'inject-content-script') {
        let targetTabId = request.tabId;

        if (executedContentScriptByTabId[targetTabId]) {
            sendResponse({ msg: 'DONE (no need to inject again)' });
            return;
        }

        chrome.scripting
            .executeScript({
                target: { tabId: targetTabId },
                files: ['./dist/main.bundle.js'],
                // files: ["content-script.js"]
            })
            .then(() => {
                console.log(`executed content script to tab ${targetTabId}`);
                executedContentScriptByTabId[targetTabId] = true;
            });

        sendResponse({ msg: 'DONE' });
    }
});

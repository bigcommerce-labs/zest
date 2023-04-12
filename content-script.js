console.log("Hello from your Chrome extension!");
console.log("wait ...");

let script_injected = false;

function injectScript(file_path, tag) {
    console.log(file_path);
    var node = document.getElementsByTagName(tag)[0];
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', file_path);
    node.appendChild(script);
    console.log("injected, ready to send requests");
}

const handleFromWeb = async (event) => {
    // log window event
};

window.addEventListener('message', handleFromWeb);

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.key == 'inject-script') {
        if (!script_injected) {
            injectScript(chrome.runtime.getURL('inject.js'), 'body');
            script_injected = true;
            sendResponse({message: 'injected'});
        } else {
            sendResponse({message: 'already injected before, no need to inject again'});
        }
    }

    window.postMessage({ from: 'content-script.js', key: 'test', data: null });
});
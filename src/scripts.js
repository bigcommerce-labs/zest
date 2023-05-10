console.log("Hello from your Chrome extension!");

import { getPrimaryCart } from './get-cart';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    (async () => {
        if (request.action === "get-primary-cart") {
            let response = await getPrimaryCart();
            let json = await response.json();
            
            console.log(json);
            sendResponse({json: JSON.stringify(json)});
        }
    })();
    return true;
  });

  console.log('listener added');

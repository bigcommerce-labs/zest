(()=>{"use strict";console.log("Hello from your zest extension!"),chrome.runtime.onMessage.addListener(((e,o,t)=>((async()=>{if("get-primary-cart"===e.action){let e=await(console.log("get primary cart"),fetch("/api/storefront/carts/",{method:"GET"})),o=await e.json();console.log(o),t({json:JSON.stringify(o)})}})(),!0))),console.log("listener added")})();


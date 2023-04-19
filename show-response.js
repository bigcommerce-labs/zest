// document.addEventListener("DOMContentLoaded", () => {
//     console.log("begin to show data");

//     // get json data
//     const data =   `
//     {"id":"382cecf1-0cbe-44e7-81f8-fd39854b3c2e","cart":{"id":"382cecf1-0cbe-44e7-81f8-fd39854b3c2e","customerId":0,"email":"","currency":{"name":"US Dollar","code":"USD","symbol":"$","decimalPlaces":2},"isTaxIncluded":false,"baseAmount":23.31,"discountAmount":2.33,"cartAmount":19.07,"coupons":[],"discounts":[{"id":"5cc6c2e5-d83a-4614-95ca-3d49522c9156","discountedAmount":2.33}],"lineItems":{"physicalItems":[{"id":"5cc6c2e5-d83a-4614-95ca-3d49522c9156","parentId":null,"variantId":73,"productId":107,"sku":"DPB","name":"[Sample] Dustpan & Brush","url":"https:\/\/kingshark-test.mybigcommerce.com\/dustpan-brush\/","quantity":1,"brand":"OFS","isTaxable":true,"imageUrl":"https:\/\/cdn11.bigcommerce.com\/s-khw6b1avm3\/products\/107\/images\/351\/dustpan1.1637269876.330.500.jpg?c=1","discounts":[{"id":2,"discountedAmount":2.33}],"discountAmount":0,"couponAmount":0,"originalPrice":23.31,"listPrice":23.31,"salePrice":21.19,"extendedListPrice":23.31,"extendedSalePrice":21.19,"comparisonPrice":21.19,"extendedComparisonPrice":21.19,"isShippingRequired":true,"giftWrapping":null,"addedByPromotion":false,"isMutable":true,"options":[],"categoryNames":["Shop All","Utility"]}],"digitalItems":[],"giftCertificates":[],"customItems":[]},"createdTime":"2023-04-19T11:42:01+00:00","updatedTime":"2023-04-19T11:42:01+00:00","locale":"en"},"billingAddress":{},"consignments":[],"orderId":null,"shippingCostTotal":0,"shippingCostBeforeDiscount":0,"handlingCostTotal":0,"taxTotal":1.91,"giftWrappingCostTotal":0,"coupons":[],"taxes":[{"name":"GST","amount":1.91}],"subtotal":21.19,"grandTotal":20.98,"outstandingBalance":20.98,"isStoreCreditApplied":false,"shouldExecuteSpamCheck":false,"giftCertificates":[],"createdTime":"2023-04-19T11:42:01+00:00","updatedTime":"2023-04-19T11:42:01+00:00","customerMessage":"","channelId":1,"customer":{"id":0,"isGuest":true,"email":"","firstName":"","lastName":"","fullName":"","addresses":[],"storeCredit":0,"shouldEncourageSignIn":false},"promotions":[],"payments":[{}]}
//     `;

//     // create json tree object
//     const tree = jsonview.create(data);

//     // render tree into dom element
//     jsonview.render(tree, document.querySelector('.json-container'));
// });

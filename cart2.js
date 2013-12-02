(function() {
    "use strict";
 
    /*
     * instantiate the shopping cart
     **/
      
    window.cart = new window.AcidJs.ShoppingCart({
        currency: "PHP",
        debug: true,
        paymentProvider: "PayPal",
        cartDataFile: "AcidJs.ShoppingCart/data/cart-01.json",
        lang: "en-us",
        mode: "shop",
        daysToStoreCartDataInCookie: 7,
        colors: ["#56c5ff"],
        thumbs: {
            width: 232,
            height: 232
        }
    });
})()

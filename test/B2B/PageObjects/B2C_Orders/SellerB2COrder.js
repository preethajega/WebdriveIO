const Page = require("../../PageObjects/page");

class sellerB2C extends Page {
    open() {
      super.new(""); //this will append `login` to the baseUrl to form complete URL
    }
  wait(){
    browser.pause(8000);
  }
get searchCustomer() {
    return super.pathByXpath('//*[@placeholder="Search customers"]');
}

get mobileNumber() {
    return super.pathByXpath('//*[@name="name"]/following::input[1]');
}


get countryCode() {
    return  super.pathByCss('[class="MuiButtonBase-root MuiButton-root MuiButton-text MuiPhoneNumber-flagButton"]');
   }

get customerName() {
     return super.pathByName('name');

}

get email() {
    return super.pathByName('email');
}

get removeCustomer() {
    return super.pathByXpath('//span[text()="Remove Customer "]');
}

get addAddress() {
    return super.pathByXpath('//span[text()="Add Address"]');
}

get changeBuyerAddress() {
    return super.pathById('openAddress');

}

get changeSellerAddress() {
    return super.pathById('sellerchange');
    
}

get placeOrder() {
    return super.pathByXpath('//span[text()="Place Order"]');
}

get productSearch() {
    return super.pathByXpath('//*[@placeholder="Search for products"]');
}

get checkAll() {
    return super.pathByXpath('//span[@title="Checkall"]');
}

get removeProduct() {
    return super.pathById('remove');
}

get prodDiscount() {
    return  super.pathByName('products[0].discount');
 }

 get prodQty() {
    return  super.pathByName('products[0].askedQuantity');
 }

 get alertCusName() {
    return super.pathByXpath('//p[text()="Name is required"]');
 }
 get alertMobile(){
    return super.pathByXpath('//p[text()="Number is required"]');
 }
get alertCusName() {
    return super.pathByXpath('//p[text()="paymentData.amountReceived must be a `number` type, but the final value was: `NaN` (cast from the value `NaN"]');
 }
  
}

module.exports = new sellerB2C();
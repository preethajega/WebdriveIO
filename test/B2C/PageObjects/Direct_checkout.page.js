const Page = require("../../B2B/PageObjects/page");


class directCheckoutPage extends Page {
  open() {
    super.b2cPath(""); //this will append `login` to the baseUrl to form complete URL
  }
wait(){
  browser.pause(8000);
}

 get change(){
     return super.pathByXpath('//Span[text()="Change"]');
 }

 get continueBtn(){
    return super.pathByXpath('//Span[text()="Continue"]');
}

get placeOrder(){
    return super.pathByXpath('//Span[contains(text(),"Place Order")]');
}

get addAddress() {
    return super.pathById('addAddressBtn');
}

get logout_Login() {
    return super.pathByXpath('//*[contains(text(),"Logout & ")]');
}

get address_RadioBtn() {
    return super.pathByXpath('//input[@name="address-select"]');

}

get payment_RadioBtn() {
    return super.pathByXpath('//input[@name="payment-select"]');

}

get pickupAddress() {
    return super.pathByXpath('//input[@placeholder="Search Store by Branch Name"]');
}

get orderDetails(){
    return super.pathByXpath('//Span[text()="View order details"]');
}

get continueShopping(){
    return super.pathByXpath('//Span[text()="Continue Shopping"]');
}


selectLocation(index) {
    return super.pathByXpath(`(//*[@role="radiogroup"]//*[@name="address-select"])[${index}]`);

}

selectPaymentterm(index) {
    return super.pathByXpath(`(//input[@name="payment-select"])[${index}]`);}


    
}










module.exports = new directCheckoutPage();
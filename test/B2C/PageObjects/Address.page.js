const Page = require("../../B2B/PageObjects/page");


class addressPage extends Page {
  open() {
    super.b2cPath(""); //this will append `login` to the baseUrl to form complete URL
  }
wait(){
  browser.pause(8000);
}

get fullName() {
    return super.pathByXpath('//*[@name="addressLine"]/preceding::input[2]');
}

get mobileNo() {
    return super.pathByXpath('//*[@name="addressLine"]/preceding::input[1]');
}

get addressLine() {
     return super.pathByName('addressLine');

}

get locality() {
    return super.pathByName('locality');
}

get city() {
    return super.pathByName('city');
}

get state() {
    return super.pathByName('state');
}

get homeAddress() {
    return super.pathByName('homeAdresss');

}

get workAddress() {
    return super.pathByName('workAddress');
    
}

get defaultAddress() {
    return super.pathByName('regAddress');
}

get save() {
    return super.pathByXpath('(//button[text()="Save"])[last()]');
}

get cancel() {
    return super.pathByXpath('//button[text()="Cancel"]');
}

get addAddressCheckoutPage() {
    return super.pathByXpath('//*[text()="Add address"]');
}

get cartIcon() {
    return  super.pathByXpath('//header/div/div/div[3]/div[2]/button');
 }

 get placeOrderCart() {
    return  super.pathByXpath('.MuiButton-containedPrimary');
 }

 get alertName(){
    return super.pathByXpath('//p[text()="Name required"]');
}
get alertmobileNo(){
    return super.pathByXpath('//p[text()="Mobile Numer required"]');
}
get alertAddress(){
    return super.pathByXpath('//p[text()="Address required"]');
}
get alertCity(){
    return super.pathByXpath('//p[text()="City / District required"]');
}

}
module.exports = new addressPage();

// const Page = require("../../PageObjects/page");
const Page = require("../../B2B/PageObjects/page");
var dbConnectionB2C = require("../../CommonActions/DatabaseConnection");
var actionwrappers = require("./../../CommonActions/ActionsWrappers");

const assert = require("assert");
class Checkout extends Page {
  
  async wait() {
    await browser.pause(8000);
  }

  async open() {
   super.b2cPath('/'); //this will append `login` to the baseUrl to form complete URL
 }

 get searchProduct() {
   return  super.pathById('productInput');
}

get results() {
   return  super.pathByXpath('//*[contains(@class,"MuiGrid-root MuiGrid-item MuiGrid-grid")][1]');
}

get addTocartBtn() {
   return  super.pathByXpath('(//button[text()="add to cart"])[1]');
}

get buyNowBtn() {
   return  super.pathById('buyNowBtn');
}

get qntyAfterAddToCart() {
   return  super.pathByCss('div.MuiInputBase-formControl input');
}

get cartIcon() {
   return  super.pathById('cartIcon');
}

get saveforLater() {
   return  super.pathById('saveLaterBtn');
}

get MoveTocart() {
   return  super.pathById('moveCartBtn');
}

get removeProduct() {
   return  super.pathById('removeBtn');
}

get emptyCart() {
   return super.pathByXpath('//img[@alt="asd"]');
}
get emptyCartText() {
   return super.pathByXpath('//h5[text()="Cart is empty"]');
}


get logo() {
   return  super.pathByXpath('//img[@alt="logo"]');
}

get placeOrderCart() {
   return  super.pathById('loadingBtn');
}

get deliveryAddressSecondIndex(){
   return super.pathByXpath('(//*[@name="address-select"])[2]');
}

get deliveryAddresses(){
   return super.pathByCss('[name="address-select"]')
}

get loginORsignup(){
   return super.pathByXpath('//*[text()="Sign up / Login"]');
}

get loginStepInStepper(){
return super.pathByXpath('(//div/div[1]/button)[1]')
}
get changeUser(){
   return super.pathById('changeUser');
}

get switchUser(){
   return super.pathByXpath('//li[text()="Logout & Switch to another account"]');
}


get continueBtn(){
   return super.pathById('loadingBtn')
}



get changePickupAddress() {
   return super.pathById('changeLocation')
}
get searchAddress(){
   return super.pathById('search');
}
get otherSellerAddress(){
   return super.pathByName('//div[3]//label[2]');
}


selectLocation(index) {
   return super.pathByXpath(`(//*[@role="radiogroup"]//*[@name="address-select"])[${index}]`);

}

selectPaymentterm(index) {
   return super.pathByXpath(`(//input[@name="payment-select"])[${index}]`);}


get payOnDelivery(){
   return super.pathByXpath('(//*[@name="payment-select"])[1]');
   
}

get onlinePayment(){
   return super.pathByXpath('(//*[@name="payment-select"])[2]');
}



get placeOrder(){
   return super.pathByXpath('//button[@id="loadingBtn"]');
}
get MTNMoMoPay(){
   return super.pathById('payments-tab-0');
}

get otherNetwork(){
   return super.pathById('payments-tab-1');
}

get bankTransfer(){
   return super.pathById('payments-tab-2');
}
get referenceNumber(){
   return super.pathByXpath('//*[@name="referenceNumber"]')
}


get cancelPaymentDialog(){
   return super.pathById('editCancelBtn')
}

get proceedPaymentDialog(){
   return super.pathById('editSaveBtn')
   }
 get continueShopping(){
      return super.pathById('continueBtn');
  }
  get orderDetails(){
   return super.pathById('orderDetailsBtn')
}

}

module.exports = new Checkout();




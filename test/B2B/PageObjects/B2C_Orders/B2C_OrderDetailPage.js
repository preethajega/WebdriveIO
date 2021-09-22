const Page = require("../../PageObjects/page");

class sellerB2C extends Page {
    open() {
      super.new(""); //this will append `login` to the baseUrl to form complete URL
}
  wait(){
    browser.pause(8000);
}
get orderBtn() {
    return super.pathByCss('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]');
}
get erpId(){
    return super.pathById('erpId');
}
get moreOptions() {
    return super.pathByXpath('//button[@title="More options"]');
}
get addPayment() {
    return super.pathByXpath('//li[text()="Add Payment"]');
}
get cancelOrder() {
    return super.pathByXpath('//li[text()="Cancel Order"]');
}
get downloadPDF() {
    return super.pathByXpath('//li[text()="Download PDF"]');
}
get refresh(){
    return super.pathByXpath('//button[@title="Click to Refresh"]');
}
get close(){
    return super.pathByXpath('//button[@title="Close"]');
}
get orderNo(){
    return super.pathByXpath('//h3[contains(@class,"h3 MuiTypography-noWrap")]');
}
get orderStatus(){
    return super.pathByXpath('//*[contains(@class,"h3 MuiTypography-noWrap")]/following::p[1]');
}
get paymentStatus(){
    return super.pathByXpath('//*[contains(@class,"h3 MuiTypography-noWrap")]/following::p[2]');
}
get paymentBtn(){
    return super.pathByCss('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary MuiButton-containedSizeSmall MuiButton-sizeSmall"]');
}
get submit(){
    return super.pathById('loadingButton');
}
get yes(){
    return super.pathByXpath('yes');
}
get markasDelivered(){
    return super.pathByXpath('/span[text()="Mark As Delivered"]');
}
get deliveryType() {
    return super.pathByName('deliveryType');
}

get deliveryDate() {
    return super.pathByName('deliveryDate');
}

get deliveryNote() {
    return super.pathByName('deliveryNote');
}
get createShippment(){
    return super.pathByXpath('/span[text()="Create Shipment"]');
}
get alertTax(){
    return super.pathByXpath('//p[text()="Tax is required"]');
}
get alertmobileNo(){
    return super.pathByXpath('//p[text()="Mobile Numer required"]');
}
get alertAddress(){
    return super.pathByXpath('//p[text()="Address required"]');
}
get alertDeliveryDate(){
    return super.pathByXpath('//p[text()="Delivered date is required"]');
}
get alertCity(){
    return super.pathByXpath('//p[text()="City / District required"]');
}


}
const Page = require("../../PageObjects/page");
const assert = require("assert");
var actionwrappers = require("../../../CommonActions/ActionsWrappers");
const common_path = require("../Common/commonObjects");
var B2C_OrdersIp = require("../../Inputs/Orders/B2C_Orders");
const B2C_Landing = require("../../PageObjects/B2C_Orders/B2C_LandingPage");
var downloadFile = require("../../../CommonActions/pdfDownload");


class B2C_Detail extends Page {
    async open() {
    await   super.new(B2C_OrdersIp.url); //this will append `login` to the baseUrl to form complete URL
    await actionwrappers.urlValidation(B2C_OrdersIp.url);
}
async  wait(){
    browser.pause(8000);
}
get orderBtn() {
    return super.pathByCss('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]');
}
get orderDeliveryDate(){
    return super.pathById('datePicker_MTFL2HN/A');
}
get warehouse(){
    return super.pathById('warehouse');   
}
get tax(){
    return super.pathByName('dbProductDetails[0].tax');
}
get erpId(){
    return super.pathById('erpId');
}

get addPayment() {
    return super.pathByXpath('//li[text()="Add Payment"]');
}
get orderCancel() {
    return super.pathByXpath('//li[text()="Cancel Order"]');
}
get cancelMsg() {
    return super.pathById('name');
}
get cancelBtn(){
    return super.pathById('cancelorder');
}

get downloadPDF() {
    return super.pathByXpath('//li[text()="Download PDF"]');
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
get markasDelivered(){
    return super.pathByXpath('//span[text()="Mark As Delivered"]');
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
    return super.pathByXpath('//span[text()="Create Shipment"]');
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



cancelOrder = async(cancelMsg) =>{
    await actionwrappers.checkVisibleClickableAndClick(await common_path.moreOptions);
    await actionwrappers.checkVisibleClickableAndClick(await this.orderCancel);
    await actionwrappers.checkEnabledAndSetValue(await this.cancelMsg,cancelMsg);
    await actionwrappers.checkClickableAndClick(await this.cancelBtn);
    await browser.pause(5000);
    assert.strictEqual(await common_path.snackbar.getText(),B2C_OrdersIp.cancelOrder);
    await browser.refresh();
    await actionwrappers.checkClickableAndClick(common_path.close);



  }

acceptOrder = async(warehouse,tax)  =>{
    await actionwrappers.checkVisibleClickableAndClick(await this.orderBtn);
    await actionwrappers.clearValue_selectDropdownvalue(await this.warehouse,warehouse);
    await actionwrappers.clearAndsetValue(await this.tax,tax);
    await actionwrappers.checkClickableAndClick(await common_path.acceptDailog);
    assert.strictEqual(await common_path.snackbar.getText(),B2C_OrdersIp.orderaccepted);

}

bookOrder = async(erpIp) =>{
    await actionwrappers.checkVisibleClickableAndClick(await this.orderBtn);
    await actionwrappers.checkEnabledAndSetValue(await this.erpId,erpIp);
    await actionwrappers.checkClickableAndClick(await common_path.acceptDailog);
    await browser.pause(5000);
    assert.strictEqual(await common_path.snackbar.getText(),B2C_OrdersIp.orderBooked);
}

fullfill_Invoice=async() =>{
if (await this.paymentStatus.getText()=="Paid"){
    await actionwrappers.checkVisibleClickableAndClick(await this.orderBtn);
    await browser.pause(2000);
    await actionwrappers.checkVisibleClickableAndClick(await common_path.submit);
    await actionwrappers.checkClickableAndClick(await common_path.yes);
    await browser.pause(4000);
    assert.strictEqual(await common_path.snackbar.getText(),B2C_OrdersIp.invoice);
} 
else if(await this.paymentStatus.getText()=="Pending"){
  await  this.CheckPaymentAlert();
}
}
CheckPaymentAlert= async() =>{
    await actionwrappers.checkVisibleClickableAndClick(await this.orderBtn);
    await browser.pause(5000);
    assert.strictEqual(await common_path.snackbar.getText(),B2C_OrdersIp.pendingPayment);
    await browser.refresh();
    await actionwrappers.checkClickableAndClick(common_path.close);

}

moreOptionScenarios = async(ele,input) =>{
    await actionwrappers.checkVisibleClickableAndClick(await common_path.moreOptions);
    await actionwrappers.checkVisibleClickableAndClick(ele);
    await browser.pause(5000);
    assert.strictEqual(await common_path.snackbar.getText(),input);
    await browser.refresh();
    await actionwrappers.checkClickableAndClick(common_path.close);

}


pdfDownload =async(ele)=>{
    await B2C_Landing.viewOrder(ele);
    await downloadFile.download_switchWindow(await common_path.moreOptions,
        await this.downloadPDF)

}




markAsdeliveredFn = async()=>{
    await actionwrappers.checkClickableAndClick(await this.markasDelivered);
    await actionwrappers.checkEnabledAndSetValue(
        await this.deliveryType,B2C_OrdersIp.deliveryType);
    await actionwrappers.checkEnabledAndSetValue(
        await this.deliveryNote,B2C_OrdersIp.deliveryNote);
    await actionwrappers.checkClickableAndClick(await this.deliveryDate);  
    await actionwrappers.checkClickableAndClick(await common_path.CurrentDate);
    await actionwrappers.checkClickableAndClick(await common_path.acceptDailog);
    await browser.pause(5000);
    assert.strictEqual(await common_path.snackbar.getText(),
    B2C_OrdersIp.deliveryMsg);
    await browser.refresh();
    await actionwrappers.checkClickableAndClick(common_path.close);


}

}

module.exports = new B2C_Detail();
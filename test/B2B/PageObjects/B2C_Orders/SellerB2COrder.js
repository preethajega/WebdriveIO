const Page = require("../../PageObjects/page");
var actionwrappers = require("../../../CommonActions/ActionsWrappers");
const commonObjects = require("../Common/commonObjects");
var B2C_OrdersIp = require("../../Inputs/Orders/B2C_Orders");
const payment = require("../../PageObjects/Invoice/Payment");



class sellerB2C extends Page {
  async  open() {
    await  super.open(B2C_OrdersIp.url); //this will append `login` to the baseUrl to form complete URL
    await  actionwrappers.urlValidation(B2C_OrdersIp.url);
}
  async wait(){
     await browser.pause(5000);
  }
get createOrderBtn() {
    return super.pathByCss('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]')
}

get createOrderTxt(){
    return super.pathByXpath('//h4[text()="Create Order"]');
}

get changeAddressTxt(){
    return super.pathByXpath('//h4[text()="Change Address"]');
}

get customerSearch() {
    return super.pathByXpath('//*[@placeholder="Search customers"]');
}

get firstResult() {
    return super.pathByXpath('//*[contains(@class,"root MuiListItem-gutters MuiListItem-button")][1]');
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
get chnageAddressIndex(){
    return super.pathByXpath('(//*[@role="radiogroup"]//*[@name="address-select"])[3]');
 }
get placeOrderBtn() {
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
get ok() {
    return super.pathById('apply');
}
get cancel() {
    return super.pathById('cancel');
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


 
async frstcreateB2cOrder(){
    await actionwrappers.checkClickableAnddoubleClick(await this.createOrderBtn);
    await browser.pause(2000); 
    await actionwrappers.checkClickableAnddoubleClick(await this.createOrderBtn);
    await actionwrappers.eleDisplayed(await this.createOrderTxt);
    await browser.pause(2000);  
} 
async createB2Corder(){
    await actionwrappers.checkClickableAnddoubleClick(await this.createOrderBtn);
    await actionwrappers.eleDisplayed(await this.createOrderTxt);
    await browser.pause(2000);
}

async searchCustomer(){
    await actionwrappers.selectfirstDropdownValue(await this.customerSearch,B2C_OrdersIp.customer,await this.firstResult);
}
async searchProduct(){
    await actionwrappers.selectfirstDropdownValue(await this.productSearch,B2C_OrdersIp.product,await this.firstResult);

}
async placeOrder(){
    await actionwrappers.checkClickableAndClick(await this.placeOrderBtn);
    await browser.pause(5000);
}  
async changeAddress(ele){
    await actionwrappers.eleDisplayed(ele);
    await actionwrappers.checkClickableAndClick(ele);
    await this.changeAddressFn();
    await actionwrappers.checkClickableAndClick(await this.ok);
}
async setCustName_MobNo(custName,mobNo){
    await actionwrappers.checkEnabledAndSetValue(await this.customerName,custName);
    await actionwrappers.checkEnabledAndSetValue(await this.mobileNumber,mobNo);
}
changeAddressFn = async () => {
    let AddressCardExists =
      await this.chnageAddressIndex.isExisting();
    if (AddressCardExists) {
      await this.chnageAddressIndex.click();
    }

}
}
module.exports = new sellerB2C();
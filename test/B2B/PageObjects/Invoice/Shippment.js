const Page = require("../../../B2B/PageObjects/page");
const commonObjects =require('../Common/commonObjects');
var shippmentInput = require("../../Inputs/shippmentInput");
var actionwrappers = require("../../../CommonActions/ActionsWrappers");
const assert = require("assert");



class shippment extends Page {
    open() {
      super.new(""); //this will append `login` to the baseUrl to form complete URL
}
  wait(){
    browser.pause(8000);
}

get shipmentCompany(){
    return super.pathByName('shipmentCompany');
}
get shipReference(){
    return super.pathByName('referenceNum');
}
get shipNo(){
    return super.pathByName('shipmentNum');
}
get trackingUrl(){
    return super.pathByName('trackingUrl');
}
get deliveryType(){
    return super.pathByName('deliveryType');
}
get shipmentDate(){
    return super.pathById('date-picker-paymentDueDate');
}
get alertShippmentNo(){
    return super.pathByXpath('//p[text()="AWB / Shipment number is required"]');
}
get alertShippmentDate(){
    return super.pathByXpath('//p[text()="Shipment date is required"]');
}

async ShippmentFn(ele){
    await actionwrappers.checkClickableAndClick(ele);
    await actionwrappers.checkEnabledAndSetValue(await this.shipmentCompany,
        shippmentInput.shippmentName);
    await actionwrappers.checkEnabledAndSetValue(await this.shipReference,
        shippmentInput.shipReference);   
    await actionwrappers.checkEnabledAndSetValue(await this.shipNo,
        shippmentInput.shippmentNo);   
    await actionwrappers.checkEnabledAndSetValue(await this.trackingUrl,
        shippmentInput.trackingUrl);       
    await actionwrappers.checkEnabledAndSetValue(await this.deliveryType,
        shippmentInput.deliveryType);
    await actionwrappers.checkClickableAndClick(await this.shipmentDate);
    await actionwrappers.checkClickableAndClick(await commonObjects.CurrentDate);
    await actionwrappers.checkClickableAndClick(await commonObjects.acceptDailog);
    await browser.pause(5000);
    assert.strictEqual(await commonObjects.snackbar.getText(),
    shippmentInput.shippmentMsg);
                 
}

}
module.exports = new shippment();
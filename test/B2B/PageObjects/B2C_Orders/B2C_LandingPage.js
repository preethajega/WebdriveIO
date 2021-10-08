const Page = require("../../PageObjects/page");
var actionwrappers = require("../../../CommonActions/ActionsWrappers");
const commonObjects = require("../Common/commonObjects");
var B2C_OrdersIp = require("../../Inputs/Orders/B2C_Orders");

class B2C_Landing extends Page {
  async  open() {
      super.new(B2C_OrdersIp.url); //this will append `login` to the baseUrl to form complete URL
      await actionwrappers.urlValidation(B2C_OrdersIp.url);
}
async wait(){
    browser.pause(8000);
}

async firstRowEle(index){
 await super.pathByXpath(`//tbody//tr[1]/td[${index}]`);
}

get orderAccepted(){
  return super.pathByXpath('//p[text()="ORDER ACCEPTED"]');
}

get orderBooked(){
  return super.pathByXpath('//p[text()="ORDER BOOKED"]');
}
get orderPlaced(){
  return super.pathByXpath('//p[text()="ORDER PLACED"]');
}

get shipped(){
  return super.pathByXpath('//p[text()="SHIPPED"]');
}

get delivered(){
  return super.pathByXpath('//p[text()="DELIVERED"]');
}
get invoiced(){
  return super.pathByXpath('//p[text()="INVOICED"]');
}
get canceled(){
  return super.pathByXpath('//p[text()="ORDER CANCELLED"]');

}
get pending(){
  return super.pathByXpath('//p[text()="Pending"]');

}


viewOrder = async(ele) =>{
  await actionwrappers.isNotDisplayed_scrollAndClick(ele);
  await actionwrappers.urlValidation('orderDetails');
}





clickAllEle = async() =>{
  for (let i = 1; i > 9; i++) 
   { 
    index= i;
    await actionwrappers.checkClickableAndClick(await this.firstRowEle(index));
    await urlValidation('orderDetails');
    await actionwrappers.checkClickableAndClick(await commonObjects.close);
    await urlValidation('b2cOrders');
}

}
}

module.exports = new B2C_Landing();
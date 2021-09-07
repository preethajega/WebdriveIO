const assert = require("assert");
const path = require("../../../PageObjects/Products/Products.page");
var Products = function () {
  this.publishProduct = () => {
    //to click the create Quote button in Cart page
    path.productPublishBtn.waitForDisplayed(5000);
    path.productPublishBtn.waitForClickable({ timeout: 5000 });
    path.productPublishBtn.click();
  };

  this.checkIfRequestApprovalBtnIsShown = () => {
    //this checks if request approval button is shown else will click create quote button
    let reqApproval = path.summaryRequestApprovalBtn.isDisplayed();
    if (reqApproval) {
      path.summaryRequestApprovalBtn.click();
    } else {
      path.summaryCreateQuoteBtn();
    }
  };

  this.createEnquiryInEmptyCart = (buyerIO, phoneNumber, message) => {
    path.selectBuyerEmptyCart.waitForDisplayed(5000);
    path.selectBuyerEmptyCart.waitForClickable({ timeout: 5000 });
    path.selectBuyerEmptyCart.click();
    browser.pause(1000);
    path.selectBuyerEmptyCart.keys(buyerIO);
    browser.pause(500);
    path.selectBuyerEmptyCart.keys("\uE007");
    path.selectSourceEmptyCart.click();
    browser.pause(1000);
    path.selectSourceEmptyCart.keys(buyerIO);
    browser.pause(500);
    path.selectSourceEmptyCart.keys("\uE007");
    path.contactNumberEmptyCart.setValue(phoneNumber);
    path.messageEmptyCart.setValue(message);
    path.createEnquiryEmptyCart.click();
  };

  // need to check the path after excel is updated
  this.createEnquiryWithProductCart = (buyerIO, phoneNumber, message) => {
    path.selectBuyerEmptyCart.waitForDisplayed(5000);
    path.selectBuyerEmptyCart.waitForClickable({ timeout: 5000 });
    path.selectBuyerEmptyCart.click();
    browser.pause(1000);
    path.selectBuyerEmptyCart.keys(buyerIO);
    browser.pause(500);
    path.selectBuyerEmptyCart.keys("\uE007");
    path.selectSourceEmptyCart.click();
    browser.pause(1000);
    path.selectSourceEmptyCart.keys(buyerIO);
    browser.pause(500);
    path.selectSourceEmptyCart.keys("\uE007");
    path.contactNumberEmptyCart.setValue(phoneNumber);
    path.messageEmptyCart.setValue(message);
    path.createEnquiryEmptyCart.click();
  };

// applying new subtotal and verifying
this.addNewSubTotal = (buyerIO, phoneNumber, message) => {
  let cart = $("//*[@id='root']/header/div/div/div[3]/button[1]");
 let selectbuyer=$('#asynchronous-demo');
 let createQuote=$('//*[@id="root"]/div[2]/div/div[2]/div/div/div[5]/button');
 browser.pause(4000);
 cart.click();
 browser.pause(4000);
 selectbuyer.waitForDisplayed();
  selectbuyer.click();
  browser.pause(7000);
  selectbuyer.keys("\uE015");
  browser.pause(500);
  selectbuyer.keys("\uE007");
  createQuote.click();
  browser.pause(7000);
  // browser.url("https://new.bcommerce.in/checkout/quote-summary");
  // path.newSubTotalBtn.waitForDisplayed(5000);
  // browser.pause(8000);
//   $$("#mp-topbanner > ul > li").map(function(element){
//     return element.getAttribute('innerText')
// })

let val = $('//div/div[2]/div[2]/h6');
val.waitForDisplayed();
console.log();
let currency = path.currencyValue.getText();
console.log(currency);

  let subTotalAmount=  val.getText().split(currency);
let amount = subTotalAmount[1];
if(amount > 1000 && amount >100){
  path.newSubTotalBtn.setValue(amount-100);
} else if( amount >= 10000 && amount >1000){
  path.newSubTotalBtn.setValue(amount-1000);
} else if( amount <=100 && amount >10){
  path.newSubTotalBtn.setValue(amount-10);
}  else if( amount <=10 && amount >5){
  path.newSubTotalBtn.setValue(amount-3);
}
path.applyBtnSubTotal.click();
let testTotal =0;
let test = [];
let finalVal = [];
test = $$("//div[2]/div[2]/div/div/table/tbody/tr/td[7]/p").map(function(element){
 return element.getAttribute('innerText')
})

test.map((i) => {
    let j = i.split(currency);
  finalVal.push(parseFloat(j[1].split(',').join('')));
  return finalVal;
  })
finalVal.map(function(k){
  return testTotal = testTotal+ k
 })
 
console.log(finalVal);
console.log(testTotal);
assert.strictEqual(parseFloat(amount.split(',').join('')),testTotal);

};



};
module.exports = new TestActionWrapper();

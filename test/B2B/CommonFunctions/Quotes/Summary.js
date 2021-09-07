const assert = require("assert");
const path = require("../../PageObjects/Quotes/Summary.page");
const ActionWrappers = require("../../CommonActions/ActionsWrappers")
const { removeProduct } = require("../../PageObjects/Quotes/Summary.page");
var TestActionWrapper = function () {
  this.cartCreateQuote = () => {
    //to click the create Quote button in Cart page
    path.cartCreateQuoteBtn.waitForDisplayed(5000);
    path.cartCreateQuoteBtn.waitForClickable({ timeout: 5000 });
    path.cartCreateQuoteBtn.click();
  };

  this.cartCreateOrder = () => {
    //to click the create Order button in summary page
    path.cartCreateOrderBtn.waitForDisplayed(5000);
    path.cartCreateOrderBtn.waitForClickable({ timeout: 5000 });
    path.cartCreateOrderBtn.click();
  };

  this.summarySellerCreateQuote = () => {
    //to click the create Quote button in summary page
    path.summarySellerCreateQuoteBtn.waitForDisplayed(5000);
    path.summarySellerCreateQuoteBtn.waitForClickable({ timeout: 5000 });
    path.summarySellerCreateQuoteBtn.click();
  };

  this.summaryBuyerCreateQuote = () => {
    //to click the create Quote button in summary page
    path.summaryBuyerCreateQuoteBtn.waitForDisplayed(5000);
    path.summaryBuyerCreateQuoteBtn.waitForClickable({ timeout: 5000 });
    path.summaryBuyerCreateQuoteBtn.click();
  };

  this.summaryCreateOrder = () => {
    //to click the create Order button in summary page
    path.summaryCreateOrderBtn.waitForDisplayed(5000);
    path.summaryCreateOrderBtn.waitForClickable({ timeout: 5000 });
    path.summaryCreateOrderBtn.click();
  };

  this.summaryRequestApproval = () => {
    //to click the create Order button in summary page
    path.summaryRequestApprovalBtn.waitForDisplayed(5000);
    path.summaryRequestApprovalBtn.waitForClickable({ timeout: 5000 });
    path.summaryRequestApprovalBtn.click();
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

  // search product in cart
  this.searchProduct = (inputValue, keyValue) => {
    path.cartSearchProduct.click();
    path.cartSearchProduct.setValue(inputValue);
    browser.pause(1000);
    path.cartSearchProduct.keys(keyValue);
    browser.pause(500);
    path.cartSearchProduct.keys("\uE007");
  };

  this.addCustomProductCart = (productDescription, productID, ULP) => {
    path.cartCustomProduct.waitForDisplayed(5000);
    path.cartCustomProduct.click();
    path.cartProductDescriptionCP.waitForDisplayed(5000);
    path.cartProductDescriptionCP.setValue(productDescription);
    path.cartProductIdCP.waitForDisplayed(5000);
    path.cartProductIdCP.setValue(productID);
    path.cartUnitPriceCP.waitForDisplayed(5000);
    path.cartUnitPriceCP.setValue(ULP);
  };

  // clear cart
  this.clearCart = () => {
    path.moreOptionClearCart.click();
    path.clearCart.waitForDisplayed(4000);
    path.clearCart.click();
  };

  // remove product from cart
  this.removeCart = () => {
    path.removeProduct.click();
  };

  // edit quantity
  this.editQuantityCart = (quantity) => {
    path.editQuantity.setValue(quantity);
  };

  // applying new subtotal and verifying
  this.addNewSubTotal = (buyerIO, phoneNumber, message) => {
    let cart = $("//*[@id='root']/header/div/div/div[3]/button[1]");
    let selectbuyer = $("#asynchronous-demo");
    let createQuote = $(
      '//*[@id="root"]/div[2]/div/div[2]/div/div/div[5]/button'
    );
    // browser.pause(4000);
    // cart.click();
    // browser.pause(4000);
    // selectbuyer.waitForDisplayed();
    // selectbuyer.click();
    // browser.pause(7000);
    // selectbuyer.keys("\uE015");
    // browser.pause(500);
    // selectbuyer.keys("\uE007");
    // createQuote.click();
    // browser.pause(7000);
    // browser.url("https://new.bcommerce.in/checkout/quote-summary");
    // path.newSubTotalBtn.waitForDisplayed(5000);
    // browser.pause(8000);
    //   $$("#mp-topbanner > ul > li").map(function(element){
    //     return element.getAttribute('innerText')
    // })

    let val = $("//div/div[2]/div[2]/h6");
    val.waitForDisplayed();
    
    let currency = path.currencyValue.getText();
    console.log(currency);
let subtotalGet = val.getText();
console.log(subtotalGet + "TRTRT00000000000");
    let subTotalAmount = subtotalGet.split(currency);
    let amount = subTotalAmount[1];
    console.log(amount + ' Ammounnnnttttt');
    if (amount > 1000 && amount > 100) {
      path.newSubTotalBtn.setValue(amount - 100);
    } else if (amount >= 10000 && amount > 1000) {
      path.newSubTotalBtn.setValue(amount - 1000);
    } else if (amount <= 100 && amount > 10) {
      path.newSubTotalBtn.setValue(amount - 10);
    } else if (amount <= 10 && amount > 5) {
      path.newSubTotalBtn.setValue(amount - 3);
    }
    browser.pause(7000);
    path.applyBtnSubTotal.click();
    let testTotal = 0;
    let test = [];
    let finalVal = [];
    test = $$("//div[2]/div[2]/div/div/table/tbody/tr/td[7]/p").map(function (
      element
    ) {
      return element.getAttribute("innerText");
    });

    test.map((i) => {
      let j = i.split(currency);
      finalVal.push(parseFloat(j[1].split(",").join("")));
      return finalVal;
    });
    finalVal.map(function (k) {
      return (testTotal = testTotal + k);
    });

    console.log(finalVal);
    console.log(testTotal);
    assert.strictEqual(parseFloat(amount.split(",").join("")), testTotal);
  };

  // Quote Summary
  // editCost
  this.editCostQuoteSummary =(cost) =>{
    path.costEdit.setValue(cost)
  }
this.editDMC =(DMCPercent) =>{
  path.DMCEdit.setValue(DMCPercent)
}
this.editQntySummary =(DMCPercent) =>{
  path.Qnty.setValue(DMCPercent)
}

this.editLeadTime =(LeadTime) =>{
  path.leadTime.setValue(LeadTime)
}
this.editTax =(taxValue) =>{
  path.tax.setValue(taxValue)
}

this.changeSellerInfo = () =>{
path.sellerInfoChange.click();
path.radioBtnSellerAddress.waitForDisplayed(4000);
path.radioBtnSellerAddress.click();
path.saveBtn.click();
}

this.changeBuyerShippingInfo = () =>{
  path.buyerInfoShippingAddress.click();
  path.radioBtnSellerAddress.waitForDisplayed(4000);
  path.radioBtnSellerAddress.click();
  path.saveBtn.click();
  }

  this.changeBuyerBillingInfo = () =>{
    path.buyerInfoBillingAddress.click();
    path.radioBtnSellerAddress.waitForDisplayed(4000);
    path.radioBtnSellerAddress.click();
    path.saveBtn.click();
    }
    // select whatever the term maybe with term attribute
 this.changeTerms =(term, termVal) => {
  ActionWrappers.SetValueElementAndkeyboardVal(term, termVal, "\uE015")
 }

//  change customer Info
this.changeCustomerInfoDate = () =>{
path.dateCustInfo.click();
path.selectDate.click();
}

this.customerReferenceNo = (CRN) =>{
  path.customerRefInfo.setValue(CRN)
}
this.companyName = (Val) => {
path.companyNameInfo.setValue(Val);
}
this.projectName = (value) => {
  path.projectNameInfo(value)
}
this.priceInfo = (price) => {
  path.priceJustificationInfo(price)
}
 
this.competitorsInfo =(termVal) => {
  ActionWrappers.SetValueElementAndkeyboardVal(path.competitorsInfo, termVal, "\uE015")
  
}
};
module.exports = new TestActionWrapper();

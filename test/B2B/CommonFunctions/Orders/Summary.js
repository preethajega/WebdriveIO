// import { strictEqual } from "assert";
const path = require("../../PageObjects/Orders/Summary.page");
const assert = require("assert");
// import { ClickElementAndkeyboardVal } from "../ActionsWrappers";


    var orderSummary = function () {
  
    this.clearCart = () => {
      path.cartIcon.waitForExist();
        path.cartIcon.waitForClickable();
        path.cartIcon.click();
        browser.pause(6000);
        if(path.moreOptions.isExisting()){
          path.moreOptions.waitForExist();
          path.moreOptions.waitForClickable();
          path.moreOptions.click();
          path.clearCart.waitForClickable();
          path.clearCart.waitForEnabled();
          path.clearCart.click();
          path.yesBtn.click();
        
        }
        };

      this.selectBuyer = () => {
path.selectBuyer.click();
browser.pause(1000);
        path.selectBuyer.keys("\uE015");
        browser.pause(500);
        path.selectBuyer.keys("\uE007");
      }
      this.cartCreateOrder = () => {
        //to click the create Order button in Cart page
        path.cartCreateOrderBtn.waitForDisplayed(5000);
        path.cartCreateOrderBtn.waitForClickable({ timeout: 5000 });
        path.cartCreateOrderBtn.click();
      };
  
      this.summaryPlaceOrder = () => {
        //to click the create Order button in summary page
        path.placeOrder.waitForDisplayed(5000);
        path.placeOrder.waitForClickable({ timeout: 5000 });
        path.placeOrder.click();
      };
  
      this.enterRequiredDate = () => {
        path.datePicker.waitForDisplayed(5000);
        path.datePicker.waitForClickable({ timeout: 5000 });
        path.datePicker.click();
        browser.pause(1000);
        path.datePicker.keys("\uE015");
        browser.pause(500);
        path.datePicker.keys("\uE007");
      };
  
      //   search product in cart
      this.searchProduct = (inputValue) => {
        path.searchBox.click();
        path.searchBox.setValue(inputValue);
        browser.pause(1000);
        path.searchBox.keys("\uE015");
        browser.pause(500);
        path.searchBox.keys("\uE007");
      };
  
      this.addCustomProductCart = (productDescription, productID, ULP) => {
        path.addCustomProduct.waitForDisplayed(5000);
        path.addCustomProduct.click();
        path.productDescriptionCP.waitForDisplayed(5000);
        path.productDescriptionCP.setValue(productDescription);
        path.productIdCP.waitForDisplayed(5000);
        path.productIdCP.setValue(productID);
        path.unitPriceCP.waitForDisplayed(5000);
        path.unitPriceCP.setValue(ULP);
      };
  
      // applying new subtotal and verifying
      // this.addNewSubTotal = (buyerIO, phoneNumber, message) => {
      //     let cart = $("//*[@id='root']/header/div/div/div[3]/button[1]");
      //     let selectbuyer = $("#asynchronous-demo");
      //     let createQuote = $(
      //         '//*[@id="root"]/div[2]/div/div[2]/div/div/div[5]/button'
      //     );
      //     // browser.pause(4000);
      //     // cart.click();
      //     // browser.pause(4000);
      //     // selectbuyer.waitForDisplayed();
      //     // selectbuyer.click();
      //     // browser.pause(7000);
      //     // selectbuyer.keys("\uE015");
      //     // browser.pause(500);
      //     // selectbuyer.keys("\uE007");
      //     // createQuote.click();
      //     // browser.pause(7000);
      //     // browser.url("https://new.bcommerce.in/checkout/quote-summary");
      //     // path.newSubTotalBtn.waitForDisplayed(5000);
      //     // browser.pause(8000);
      //     //   $$("#mp-topbanner > ul > li").map(function(element){
      //     //     return element.getAttribute('innerText')
      //     // })
      //     let val = $("//div/div[2]/div[2]/h6");
      //     val.waitForDisplayed();
  
      //     let currency = path.currencyValue.getText();
      //     console.log(currency);
      //     let subtotalGet = val.getText();
      //     console.log(subtotalGet + "TRTRT00000000000");
      //     let subTotalAmount = subtotalGet.split(currency);
      //     let amount = subTotalAmount[1];
      //     console.log(amount + ' Ammounnnnttttt');
      //     if (amount > 1000 && amount > 100) {
      //         path.newSubTotalBtn.setValue(amount - 100);
      //     } else if (amount >= 10000 && amount > 1000) {
      //         path.newSubTotalBtn.setValue(amount - 1000);
      //     } else if (amount <= 100 && amount > 10) {
      //         path.newSubTotalBtn.setValue(amount - 10);
      //     } else if (amount <= 10 && amount > 5) {
      //         path.newSubTotalBtn.setValue(amount - 3);
      //     }
      //     browser.pause(7000);
      //     path.applyBtnSubTotal.click();
      //     let testTotal = 0;
      //     let test = [];
      //     let finalVal = [];
      //     test = $$("//div[2]/div[2]/div/div/table/tbody/tr/td[7]/p").map(function (
      //         element
      //     ) {
      //         return element.getAttribute("innerText");
      //     });
  
      //     test.map((i) => {
      //         let j = i.split(currency);
      //         finalVal.push(parseFloat(j[1].split(",").join("")));
      //         return finalVal;
      //     });
      //     finalVal.map(function (k) {
      //         return (testTotal = testTotal + k);
      //     });
  
      //     console.log(finalVal);
      //     console.log(testTotal);
      //     strictEqual(parseFloat(amount.split(",").join("")), testTotal);
      // };
  
      //         // editCost
      this.editCostOrderSummary = (cost) => {
        path.costEdit.clear();
        path.costEdit.setValue(cost);
      };
      this.editDMC = (DMCPercent) => {
        path.DMCEdit.clear();
        path.DMCEdit.setValue(DMCPercent);
      };
      this.editQntySummary = (DMCPercent) => {
        path.Qnty.clear();
        path.Qnty.setValue(DMCPercent);
      };
  
      this.editLeadTime = (LeadTime) => {
        path.leadTime.clear();
        path.leadTime.setValue(LeadTime);
      };
      this.editTax = (taxValue) => {
        path.tax.clear();
        path.tax.setValue(taxValue);
      };
  
      this.changeSellerInfo = () => {
        path.changeSellerAddress.click();
        path.changeSellerAddress.waitForDisplayed(4000);
        browser.pause(1000);
        path.changeSellerAddress.keys("\ue004");
        browser.pause(1000);
        path.changeSellerAddress.keys("\uE015");
        browser.pause(500);
        path.changeSellerAddress.keys("\uE007");
        path.okBtnAddressChange.click();
      };
  
      this.changeBuyerShippingInfo = () => {
        path.shippingAddressChange.click();
        browser.pause(1000);
        path.shippingAddressChange.keys("\ue004");
        browser.pause(1000);
        path.shippingAddressChange.keys("\uE015");
        browser.pause(500);
        path.shippingAddressChange.keys("\uE007");
        path.okBtnAddressChange.click();
      };
  
      this.changeBuyerBillingInfo = () => {
        path.billingAddressChange.click();
        browser.pause(1000);
        path.billingAddressChange.keys("\ue004");
        browser.pause(1000);
        path.billingAddressChange.keys("\uE015");
        browser.pause(500);
        path.billingAddressChange.keys("\uE007");
        path.okBtnAddressChange.click();
      };
  
      this.endCustomerReferenceNo = (CRN) => {
        path.endCustNo.setValue(CRN);
      };
      this.changeTerms = (termsName) => {
        if (termsName === "delivery") {
          path.deliveryTerms.click();
        } else if (termsName === "payment") {
          path.paymentTerms.click();
        } else if (termsName === "warranty") {
          path.warrantyTerms.click();
        } else if (termsName === "package") {
          path.packageTerms.click();
        } else if (termsName === "dispatch") {
          path.dispatchTerms.click();
        } else if (termsName === "freight") {
          path.freightTerms.click();
        } else if (termsName === "insurance") {
          path.insuranceTerms.click();
        }
        browser.pause(500);
        path.billingAddressChange.keys("\uE015");
        browser.pause(1000);
        path.billingAddressChange.keys("\uE007");
      };
      this.additionalTerms = (addtionalText) => {
        path.additionalterms.click();
        path.additionalterms.setValue(addtionalText);
      };
    
}
module.exports = new orderSummary();

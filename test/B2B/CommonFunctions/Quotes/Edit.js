const assert = require("assert");
const path = require("../../PageObjects/Quotes/Edit.page");
var TestActionWrapper = function () {


this.EditBuyerBillingAddress = () => {
    // to click the Edit button of buyer billing address in edit quote page
    path.BBAddress.waitForDisplayed(5000);
    path.BBAddress.waitForClickable({ timeout: 5000 });
    path.BBAddress.click();
    browser.pause(1000);
    path.BillingAddress.click();
    browser.pause(500);
    path.ok.click();   
}

this.EditBuyerShippingAddress = () => {
    // to click the Edit button of buyer Selling address in edit quote page
    path.BSAddress.waitForDisplayed(5000);
    path.BSAddress.waitForClickable({ timeout: 5000 });
    path.BSAddress.click();
    browser.pause(1000);
    path.ShippingAddress.click();
    browser.pause(500);
    path.ok.click();   
}

this.EditEndCustomerInformation = (referenceNumber, customerName, projectName) => {
    // Enter values of End Customer Information in edit quote page
    // path.ReferenceNo.scrollIntoView();
    path.ReferenceNo.waitForDisplayed(5000);
    path.ReferenceNo.waitForClickable({ timeout: 5000 });
    path.ReferenceNo.setValue(referenceNumber);
    path.CustomerName.setValue(customerName);
    path.ProjectName.setValue(projectName);
    path.Competitor.click();
    browser.pause(500);
    path.Competitor.keys("\uE015");
    path.Competitor.keys("\uE007");
    
};

this.EditQuantity = (quantity) => {
    // Edit quantity in edit quote page

    path.Quantity.waitForDisplayed(5000);
    path.Quantity.waitForClickable({ timeout: 5000 });
    path.Quantity.keys("\uE017");
    browser.pause(1000);
    path.Quantity.setValue(quantity);
};

this.Addproduct = (product) => {
    // Add new product in edit quote page

    path.ProductSearch.waitForDisplayed(5000);
    path.ProductSearch.waitForClickable({ timeout: 5000 });
    path.ProductSearch.setValue(product);
    browser.pause(500);
    path.Selectproduct.click();
    
};

this.Addmoreproduct = (product) => {
    // Add new product in edit quote page

    path.ProductSearch.waitForDisplayed(5000);
    path.ProductSearch.waitForClickable({ timeout: 5000 });
    path.ProductSearch.setValue(product);
    browser.pause(1000);
    path.Selectproduct1.click();
    browser.pause(3000);
    path.ProductSearch.setValue(product);
    browser.pause(100);
    path.Selectproduct2.click();
    browser.pause(3000);
    path.ProductSearch.setValue(product);
    browser.pause(100);
    path.Selectproduct3.click();
    browser.pause(3000);
    path.ProductSearch.setValue(product);
    browser.pause(100);
    path.Selectproduct4.scrollIntoView();
    path.Selectproduct4.click();
    browser.pause(3000);
    path.ProductSearch.setValue(product);
    browser.pause(100);
    path.Selectproduct5.scrollIntoView();
    path.Selectproduct5.click();
    browser.pause(3000);
    path.ProductSearch.setValue(product);
    browser.pause(1000);
    path.Selectproduct6.scrollIntoView();
    path.Selectproduct6.click();
    browser.pause(3000);
            
};

this.Removeproduct = () => {
    // Remove product from  edit quote page
    path.RemoveProduct.scrollIntoView();
    path.RemoveProduct.waitForDisplayed(5000);
    path.RemoveProduct.waitForClickable({ timeout: 5000 });
    path.RemoveProduct.click();
    browser.pause(500);
    path.RemoveButton.click();
    path.Yes.click();
}

this.RemoveAllproductinSummary = () => {
    // Remove All the product 
    path.RemoveAllProduct.scrollIntoView();
    path.RemoveAllProduct.waitForDisplayed(5000);
    path.RemoveAllProduct.waitForClickable({ timeout: 5000 });
    // path.RemoveAllProduct.isSelected();
    path.RemoveProduct.click();
    browser.pause(500);
    path.RemoveButton.click();
    path.Yes.click();
}


this.AddtargetPrice = (price) => {
    // Add target price in edit quote page
    path.Targetprice.waitForDisplayed(5000);
    path.Targetprice.waitForClickable({ timeout: 5000 });
    path.Targetprice.setValue(price);
};

this.SellersubmitQuote = () => {
    // Submit Quote from edit quote page
    path.SellerSubmit.waitForDisplayed(5000);
    path.SellerSubmit.waitForClickable({ timeout: 5000 });
    path.SellerSubmit.click();
    browser.pause(2000);
    path.Yes.click();
};


this.BuyersubmitQuote = () => {
    // Submit Quote from edit quote page
    path.BuyerSubmit.waitForDisplayed(5000);
    path.BuyerSubmit.waitForClickable({ timeout: 5000 });
    path.BuyerSubmit.click();
    path.Yes.waitForDisplayed(5000);
    path.Yes.waitForClickable({ timeout: 5000 });
    path.Yes.click();
    };

this.AddtargetDiscount = (price) => {
    // Add target price in edit quote page
    path.TargetDiscount.waitForDisplayed(5000);
    path.TargetDiscount.waitForClickable({ timeout: 5000 });
    path.TargetDiscount.setValue(price);
};

  };
module.exports = new TestActionWrapper();

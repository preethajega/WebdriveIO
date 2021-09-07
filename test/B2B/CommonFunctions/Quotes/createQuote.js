const assert = require("assert");
const path = require("../../PageObjects/Quotes/createQuote.page");
const Summary = require("../Quotes/Summary");
const ActionWrapper = require("../../CommonActions/ActionsWrappers");
const Edit = require("../../CommonFunctions/Quotes/Edit");
const Respond = require("../../CommonFunctions/Quotes/Respond");
var CreateQuote = function () {
//click cart button
  this.Clickcartbutton = () => {
    path.CartButton.waitForDisplayed(5000);
    path.CartButton.waitForClickable({ timeout: 5000 });
    path.CartButton.click();
  }


//Buyer Prespective Add product to cart and click cart RFQ  
    this.BuyerCreatingQuote = (product) => {
                       
        if(emptycart = path.Cartempty.isExisting())
        {
          browser.pause(2000);
          path.emptyCartSearch.setValue(product);
          browser.pause(1000);
          path.emptyCartsearchedproduct.click();   
                                      
        } else
        {   
          browser.pause(5000); 
          path.Cartsearch.setValue(product);
            browser.pause(1000);
            path.productSearched.click();
        }
        browser.pause(5000);
        Summary.cartCreateQuote();
      }
      





//Seller Prespective Add product to cart , Select Buyer and Click Cart Create Quote 
this.SellerCreatingQuote = (product) => {
    
   if (emptycart = path.customproductBtn.isExisting())
     {
      path.emptyCartSearch.setValue(product);
      browser.pause(1000);
      path.emptyCartsearchedproduct.click();
    } else 
    {            
      path.Cartsearch.setValue(product);
      browser.pause(1000);
      path.productSearched.click();
    }
    browser.pause(5000);
    ActionWrapper.SetValueElementMoveAndkeyboardVal(path.selectbuyer,"AraSan Enterprises", "\uE015" );
    browser.pause(2000);
   path.selectbuyer.keys("\uE007");
   Summary.cartCreateQuote();
   browser.pause(5000);
  }






//Seller Prespective creating Quote and save as draft with Product
this.SellerCreatingQuoteAndSaveDraftwithProduct = (product) => {
    
  if (emptycart = path.customproductBtn.isExisting())
   {
    path.emptyCartSearch.setValue(product);
    browser.pause(1000);
    path.emptyCartsearchedproduct.click();
  } else 
  {            
    path.Cartsearch.setValue(product);
    browser.pause(1000);
    path.productSearched.click();
  }
  browser.pause(5000);
  ActionWrapper.SetValueElementMoveAndkeyboardVal(path.selectbuyer,"AraSan Enterprises", "\uE015" );
  browser.pause(2000);
 path.selectbuyer.keys("\uE007");
 Summary.cartCreateQuote();
 browser.pause(5000);
 Respond.Saveasdraft();
 browser.pause(1000);
 ActionWrapper.checkEnabledAndSetValue(path.QuoteName, "AutoSaveDraft");
 browser.pause(2000);
 ActionWrapper.checkVisibleClickableAndClick(path.SaveDraftok);
 browser.pause(5000);
  };
   
   


  // Seller Prespective creating Quote and save as draft without Product
this.SellerCreatingQuoteAndSaveDraftwithoutProduct = (product) => {
    
  if (emptycart = path.customproductBtn.isExisting())
   {
    path.emptyCartSearch.setValue(product);
    browser.pause(1000);
    path.emptyCartsearchedproduct.click();
  } else 
  {            
    path.Cartsearch.setValue(product);
    browser.pause(1000);
    path.productSearched.click();
  }
  browser.pause(5000);
  ActionWrapper.SetValueElementMoveAndkeyboardVal(path.selectbuyer,"AraSan Enterprises", "\uE015" );
  browser.pause(2000);
 path.selectbuyer.keys("\uE007");
 Summary.cartCreateQuote();
 browser.pause(2000);
 Edit.RemoveAllproductinSummary();
 browser.pause(1000);
 Respond.Saveasdraft();
 browser.pause(1000);
 ActionWrapper.checkEnabledAndSetValue(path.QuoteName, "AutoSavewithoutPtd");
 browser.pause(2000);
 ActionWrapper.checkVisibleClickableAndClick(path.SaveDraftok);
 browser.pause(5000);
  };
   
    };




module.exports = new CreateQuote();
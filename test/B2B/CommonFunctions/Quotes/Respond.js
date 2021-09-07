const assert = require("assert");
const path = require("../../PageObjects/Quotes/Edit.page");
const ActionWrapper = require("../../CommonActions/ActionsWrappers")
const Edit = require("../../CommonFunctions/Quotes/Edit");
var TestActionWrapper = function () {

    //Draft Respond to Discard quote
    this.DiscardQuote = () => {
        // ActionWrapper.checkVisibleClickableAndClick(path.moreoption);
        path.moreoption.waitForDisplayed(5000);
        path.moreoption.waitForClickable({ timeout: 5000 });
        path.moreoption.click();
        browser.pause(1000)
        ActionWrapper.checkVisibleClickableAndClick(path.DiscardBtn);
        browser.pause(1000);
        ActionWrapper.checkVisibleClickableAndClick(path.Yes);
    };

    //  save as darft in respond page
    this.Saveasdraft = () => {
        path.Saveasdraft.waitForDisplayed(5000);
        path.Saveasdraft.waitForClickable({ timeout: 5000 });
        path.Saveasdraft.click();
    };

    //Add Additional Term in respond page
    this.AddAdditionalTerm = (Term) => {
        path.AdditionalTerm.waitForEnabled(5000);
        path.AdditionalTerm.waitForClickable({ timeout: 5000 });
        path.AdditionalTerm.setValue(Term);
    };

//Add Custom product in respond page
this.AddNewCustomProduct = (productID, description, cost, unitprice, tax, leaddays) => {
    path.CustomProduct.waitForDisplayed(5000);
    path.CustomProduct.waitForClickable({ timeout: 5000 });
    path.CustomProduct.click();
    path.ProductId.setValue(productID);
    path.Description.setValue(description);
    path.Cost.setValue(cost);
    path.UnitPrice.setValue(unitprice);
    path.Tax.setValue(tax);
    path.LeadDays.setValue(leaddays);
};

//  save the quote in respond page
this.Savequote =() => {
    path.SaveQuote.waitForDisplayed(5000);
    path.SaveQuote.waitForClickable({ timeout: 5000 });
    path.SaveQuote.click();
    browser.pause(1000);
    path.Yes.waitForDisplayed(5000);
    path.Yes.waitForClickable({ timeout: 5000 });
    path.Yes.click();
    
};


//Edit Dispatch term and trigger approval process
     
 this.changeDispatchTerms =() => {
    ActionWrapper.ClickElementAndkeyboardVal(path.Dispatchterm, "\uE015");
    browser.pause(1000);
   path.DispatchTerm.keys("\uE007");
   }


  //  Change Approval qroup in Reaspond page
this.ChangeApprovalgroup = () => {
    path.ChangeApprovalGroup.waitForDisplayed(5000);
    path.ChangeApprovalGroup.waitForClickable({ timeout: 5000 });
    path.ChangeApprovalGroup.click();
    browser.pause(1000);
    ActionWrapper.checkVisibleClickableAndClick(path.Selectgroup);
    
};

//   Check status If in progress or Approval in process 
this.CheckandChangeDMNTriggerApprovalProcess = () => {
    let status = path.RespondBtn.isExisting();
    if(status){
        path.ApprovalinProcess.isDisplayed();
        assert.strictEqual(path.ApprovalinProcess.getText(),"APPROVAL IN PROGRESS");
             
    } else 
    {            
      path.InProgress.isDisplayed();
      assert.strictEqual(path.InProgress.getText(),"IN PROGRESS");
}  
};


// Respond to RFQ quote and submit
this.SubmitRFQ = () => {
    path.RFQ.isDisplayed();
    assert.strictEqual(path.RFQ.getText(),"RFQ");
    ActionWrapper.checkVisibleClickableAndClick(path.RespondBtn);
   ActionWrapper.checkVisibleClickableAndClick(path.Submit);
};

// Respond to RFQ quote submit and place order
this.RFQSubmitAndPlaceOrder = () => {
    path.RFQ.isDisplayed();
    assert.strictEqual(path.RFQ.getText(),"RFQ");
    ActionWrapper.checkVisibleClickableAndClick(path.RespondBtn);
   ActionWrapper.checkVisibleClickableAndClick(path.Submit);
   ActionWrapper.checkVisibleClickableAndClick(path.Placeorder);
};

//Reset the new subtotal in respond page
this.Resetsubtotal = () => {
    path.ResetSubTotal.waitForDisplayed(5000);
    path.ResetSubTotal.waitForClickable({ timeout: 5000 });
    path.ResetSubTotal.click();
}

    // Check Quantity, Pack of value & MOQ Validation
    this.QuantityandMOQValidation = () => {
        path.Quantity.waitForDisplayed(5000);
        path.Quantity.waitForClickable({ timeout: 5000 });
        path.Quantity.doubleClick();
        browser.pause(1000);
        path.Quantity.keys("\uE017");
        browser.pause(1000); 
        ActionWrapper.checkVisibleClickableAndClick(path.search);
        path.search.click(); 
        console.log(click);
        browser.pause(1000);        
        assert.strictEqual(path.Quantityrequire.getText(), "Quantity is required");
        path.Quantity.setValue("0");
        browser.pause(1000);
        let MOQValue = path.MOQ.getText().split(" ");
        let MValue = MOQValue[2];
         MValue = parseFloat(MOQValue[2]);
       let POV =   path.Packofvalue.getText().split(" ");
       let Pvalue = POV[2];
       Pvalue = parseFloat(POV[2]);
        if (MOQValue = path.MOQ.isDisplayed()) {
            Quantity.doubleClick();
            browser.pause(1000);
            path.Quantity.keys("\uE017");
            browser.pause(1000);   
            path.Quantity.setValue(MValue - 1) ;
            browser.pause(1000);
            path.Quantity.doubleClick();
            browser.pause(1000);
            path.Quantity.keys("\uE017");
            browser.pause(1000);   
            path.Quantity.setValue(Pvalue - 1) ;
            browser.pause(1000);
            path.Quantity.doubleClick();
            browser.pause(1000);
            path.Quantity.keys("\uE017");
            browser.pause(1000);   
            path.Quantity.setValue(MValue + (Pvalue * 2));
            browser.pause(1000);
      } else
    {
        Quantity.doubleClick();
                browser.pause(1000);
                path.Quantity.keys("\uE017");
                browser.pause(1000);   
                path.Quantity.setValue(Pvalue - 1) ;
                browser.pause(1000);
                path.Quantity.doubleClick();
                browser.pause(1000);
                 path.Quantity.keys("\uE017");
                browser.pause(1000);   
                path.Quantity.setValue(Pvalue * 2);
                browser.pause(1000);
          } 
             
   browser.pause(5000);
   
        
}









};
module.exports = new TestActionWrapper();





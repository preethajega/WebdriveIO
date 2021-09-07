const assert = require("assert");
const path = require("../../PageObjects/Quotes/Detail.page");
var TestActionWrapper = function () {
    this.cancelQuote = () => {
        // to click the cancel quote in detail page
        path.CancelQuote.waitForDisplayed(5000);
        path.CancelQuote.waitForClickable({ timeout: 5000 });
        path.CancelQuote.click();
        browser.pause(1000);
        path.CancelReason.setValue("Cancelled");
        path.CancelReasonOk.click();
    }

    this.CloneQuote = () => {
        // Click Clone
        path.Clone.waitForDisplayed(5000);
        path.Clone.waitForClickable({ timeout: 5000 });
        path.Clone.click();
                
    }

   this.DownloadPDF = () => {
        // Download quote as PDF
        path.Download.waitForDisplayed(5000);
        path.Download.waitForClickable({ timeout: 5000 });
        path.Download.click();
    }

    this.PlaceorderButton = () => {
        // quote convert to order click of place order button from detail page
         path.PlaceOrderBtn.waitForDisplayed(5000);
        path.PlaceOrderBtn.waitForClickable({ timeout: 5000 });
        path.PlaceOrderBtn.click();
        path.ConfirmPlaceOrder.click();
        browser.pause(1000);
        path.Yes.click();
    }



    this.editQuoteOrRespond = () => {
        // to click the Edit quote/Respond button in detail page
        path.EditQuote.waitForDisplayed(5000);
        path.EditQuote.waitForClickable({ timeout: 5000 });
        path.EditQuote.click();
    }

    this.SaveAsDraft = () => {
        // to click the save as darft 
        path.SaveAsDraft.waitForDisplayed(5000);
        path.SaveAsDraft.waitForClickable({ timeout: 5000 });
        path.SaveAsDraft.click();
        path.Yes.click();
    }


    this.ExporttheProduct = () => {
        // Add target price in edit quote page
        path.Export.waitForDisplayed(5000);
        path.Export.waitForClickable({ timeout: 5000 });
        path.Export.click();
    };
    






};
module.exports = new TestActionWrapper();








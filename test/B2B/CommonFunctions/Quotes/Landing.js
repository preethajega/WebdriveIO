const assert = require("assert");
const path = require("../../PageObjects/Quotes/createQuote.page");
const Summary = require("../Quotes/Summary");
const ActionWrapper = require("../../CommonActions/ActionsWrappers")
var Landingpage = function () {
    //click Filter button in landing page
  this.ClickFilterbutton = () => {
    
    ActionWrapper.checkVisibleClickableAndClick(path.Filterbutton);
  }

  // Enter Quote Name
  this.EnterQuoteName = (name) => {
    path.QuoteName.waitForDisplayed(5000);
    path.QuoteName.waitForClickable({ timeout: 5000 });
    path.QuoteName.setValue(name);
  }

  // Enter Quote Id
  this.EnterQuoteID = (id) => {
    path.QuoteID.waitForDisplayed(5000);
    path.QuoteID.waitForClickable({ timeout: 5000 });
    path.QuoteID.setValue(id);
  }

// Click Apply Button
this.ApplyButton = () => {
    path.ApplyButton.waitForDisplayed(5000);
    path.ApplyButton.waitForClickable({ timeout: 5000 });
    path.ApplyButton.click();
  }

};




module.exports = new Landingpage ();
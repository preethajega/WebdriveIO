const actionWrapper = require("../../CommonActions/ActionsWrappers");
const path = require("./path");
var AddProduct = function () {
  let cartIcon = $("#MHEAD_CQC");
  // Wait for an element, move and then check clickable before clicking
  this.searchProduct = (productId) => {
      actionWrapper.checkVisibleClickableAndClick(path.cartIcon);
    browser.pause(5000);
    let emptyCart = path.selectbuyer.isExisting();
        if (emptyCart) {
          path.search.setValue(productId);
      browser.pause(3000);
      path.productSearched.click();
    } else {
      path.emptyCartSearch.setValue(productId);
      browser.pause(3000);
      path.emptyCartsearchedproduct.click();
    }
  };

  this.selectBuyer = function () {
   
    actionWrapper.SetValueElementAndkeyboardVal(path.selectbuyer, "\uE015");
  };

  this.cartCreateQuote = function() {
  actionWrapper.checkVisibleClickableMoveAndClick(path.createQuote);
  }
};
module.exports = new AddProduct();

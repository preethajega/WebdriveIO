const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const path = require("../../PageObjects/BrowsePages/Cart");
const common = require("../../PageObjects/Common/commonObjects");
var uploadAttchment = require("../../../CommonActions/attchmentUpload");
const CartPageInput = require("../../Inputs/Browse/Cart");

class AddProduct {
  //
  clickCartIcon = async () => {
    await actionWrapper.checkVisibleClickableAndClick(await path.cartIcon);
  };

  // To search for a product in cart
  searchProductInCart = async (productId) => {
    await actionWrapper.checkVisibleClickableAndClick(await path.cartIcon);
    await browser.pause(5000);
    let emptyCart = await path.selectbuyerEmptyCart.isExisting();
    if (emptyCart) {
      await path.search.setValue(productId);
      await browser.pause(3000);
      await path.productSearched.click();
    } else {
      await path.emptyCartSearch.setValue(productId);
      await browser.pause(3000);
      await path.emptyCartsearchedproduct.click();
    }
  };

  // to select buyer in cart page with search value
  selectBuyer = async () => {
    await actionWrapper.searchAndselectDrpdownusingKeyboard(
      "Ara",
      await path.selectbuyer
    );
  };

  // to click create quote cart page
  cartCreateQuote = async () => {
    await actionWrapper.checkVisibleClickableMoveAndClick(
      await path.createQuote
    );
  };

  // to click create order btn in cart page
  cartCreateOrder = async () => {
    await actionWrapper.checkVisibleClickableMoveAndClick(
      await path.createOrder
    );
  };

  // to click create enquiry btn in cart page
  cartCreateEnquiry = async () => {

    await actionWrapper.checkVisibleClickableMoveAndClick(
      await path.createEnquiry
    );
  };




  // product search and add to cart from header search
  addToCartFromHeaderSearch = async (searchValue) => {
    await path.searchBox.click();
    await path.searchBox.setValue(searchValue);
    // will click the first result available
    await path.searchResultsImage.moveTo();
    await path.addToCartBtnInSearchResults.click();
  };

  // to add custom product
  addCustomProductInCart = async (productDesc, productId, unitPrice) => {
    await actionWrapper.checkVisibleClickableAndClick(
      await path.addCustomProduct
    );
    await actionWrapper.checkEnabledClearAndSetValue(
      await path.customProductDescription,
      productDesc
    );
    await actionWrapper.checkEnabledClearAndSetValue(
      await path.customProductID,
      productId
    );
    await actionWrapper.checkEnabledClearAndSetValue(
      await path.customUnitPrice,
      unitPrice
    );
  };
 
  // Clear cart 
  clearCart = async () => {
    if (await path.remove.isExisting()) {
      await actionWrapper.checkVisibleClickableAndClick(await path.MoreOptions);
      await browser.pause(2000);
      await actionWrapper.checkVisibleClickableAndClick(await path.clearCart);
      await actionWrapper.checkVisibleClickableAndClick(await common.yes);
    }

  }

  // to create a lead
  createEnquiry = async (leadName,BuyerName,ContactNo,Source) => {
    await path.cartIcon.waitForDisplayed(2000);
    this.clickCartIcon();
    await browser.pause(2000);
    this.clearCartclearCart();
    await actionWrapper.checkEnabledClearAndSetValue(
      await path.leadName,leadName
     
    );
    await path.BuyerName.waitForClickable(1000);
    await actionWrapper.searchAndselectDrpdownusingKeyboard(
      BuyerName,await path.BuyerName
    );

    if ((await path.companyName.getValue()) === "") {
      await actionWrapper.checkEnabledClearAndSetValue(
        await path.companyName,
        CartPageInput.CompanyName
      );
    }
    if ((await path.contactPerson.getValue()) === "") {
      await actionWrapper.checkEnabledClearAndSetValue(
        await path.contactPerson,
        CartPageInput.ContactPerson
      );
    }
    if ((await path.CustEmail.getValue()) === "") {
      await actionWrapper.checkEnabledClearAndSetValue(
        await path.CustEmail,
        CartPageInput.CustomerEmail
      );
    }
  
      await actionWrapper.checkEnabledClearAndSetValue(
        await path.CustContactNo,ContactNo
      );
    

    await actionWrapper.searchAndselectDrpdownusingKeyboard(
      Source,await path.Source
    );

    await path.message.waitForDisplayed(1000);
    await actionWrapper.checkEnabledClearAndSetValue(
      await path.message,
      CartPageInput.Message
    );
    await uploadAttchment.upload(
      await path.attachmentEnquiry,
      CartPageInput.Attachment
    );
    this.cartCreateEnquiry();
    if(await path.snackbar.getText() !== CartPageInput.suceessAlert ){
      this.cartCreateEnquiry();
    }
    assert.strictEqual(
      await path.snackbar.getText(),CartPageInput.suceessAlert
    );
  };
}



module.exports = new AddProduct();

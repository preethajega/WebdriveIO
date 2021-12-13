const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const path = require("../../PageObjects/BrowsePages/Cart");
const inputEnquiry = require("../../Inputs/Browse/Cart");
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
  cartCreateQuote = async () => {
    await actionWrapper.checkVisibleClickableMoveAndClick(
      await path.createOrder
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

  // to create a lead
  createEnquiry = async () => {
    await path.cartIcon.waitForDisplayed(2000);
    await actionWrapper.checkVisibleClickableAndClick(await path.cartIcon);
    await browser.pause(2000);
    if (await path.remove.isExisting()) {
      await actionWrapper.checkVisibleClickableAndClick(await path.MoreOptions);
      await browser.pause(2000);
      await actionWrapper.checkVisibleClickableAndClick(await path.clearCart);
      await actionWrapper.checkVisibleClickableAndClick(await path.yes);
    }

    await actionWrapper.checkEnabledClearAndSetValue(
      await path.leadName,
      inputEnquiry.leadName
    );
    await path.BuyerName.waitForClickable(1000);
    await actionWrapper.searchAndselectDrpdownusingKeyboard(
      inputEnquiry.BuyerName,
      await path.BuyerName
    );

    if ((await path.companyName.getValue()) === "") {
      await actionWrapper.checkEnabledClearAndSetValue(
        await path.companyName,
        inputEnquiry.CompanyName
      );
    }
    if ((await path.contactPerson.getValue()) === "") {
      await actionWrapper.checkEnabledClearAndSetValue(
        await path.contactPerson,
        inputEnquiry.ContactPerson
      );
    }
    if ((await path.CustEmail.getValue()) === "") {
      await actionWrapper.checkEnabledClearAndSetValue(
        await path.CustEmail,
        inputEnquiry.CustomerEmail
      );
    }
    if ((await path.CustContactNo.getValue()) === "") {
      await actionWrapper.checkEnabledClearAndSetValue(
        await path.CustContactNo,
        inputEnquiry.ContactNo
      );
    }

    await actionWrapper.searchAndselectDrpdownusingKeyboard(
      inputEnquiry.Source,
      await path.Source
    );

    await path.message.waitForDisplayed(1000);
    await actionWrapper.checkEnabledClearAndSetValue(
      await path.message,
      inputEnquiry.Message
    );
    browser.execute(
      (el) => (el.style.display = "block"),
      await path.attachmentEnquiry
    );
    await path.attachmentEnquiry.waitForDisplayed();
    await actionWrapper.checkEnabledClearAndSetValue(
      await path.attachmentEnquiry,
      inputEnquiry.Attachment
    );
    await browser.pause(5000);
    await actionWrapper.checkVisibleClickableAndClick(await path.createLead);
    await browser.pause(2000);
    assert.strictEqual(
      await path.snackbar.getText(),
      "Lead created successfully"
    );
  };

  updateQuantityInCart = async () =>{
let existingQuantity = await path.quantity.getText();
console.log(existingQuantity);
await actionWrapper.checkEnabledClearAndSetValue(
  await path.attachmentEnquiry,
  existingQuantity + existingQuantity
);
  }
}
module.exports = new AddProduct();

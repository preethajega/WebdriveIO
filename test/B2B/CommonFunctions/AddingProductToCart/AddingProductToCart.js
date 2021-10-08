const actionWrapper = require("../../CommonActions/ActionsWrappers");
const path = require("../../PageObjects/BrowsePages/Cart");
class AddProduct {
  // Wait for an element, move and then check clickable before clicking
  searchProductInCart = async (productId) => {
    await actionWrapper.checkVisibleClickableAndClick(await path.cartIcon);
    await browser.pause(5000);
    let emptyCart = await path.selectbuyer.isExisting();
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

  selectBuyer = async () => {
    await actionWrapper.SetValueElementAndkeyboardVal(
      await path.selectbuyer,
      "\uE015"
    );
  };

  cartCreateQuote = async () => {
    await actionWrapper.checkVisibleClickableMoveAndClick(
      await path.createQuote
    );
  };

  addToCartFromHeaderSearch = async (searchValue) => {
    await path.searchBox.click();
    await path.searchBox.setValue(searchValue);
    // will click the first result available
    await path.addToCartBtnInSearchResults.click();
  };
}
module.exports = new AddProduct();

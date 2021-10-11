const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const path = require("../../PageObjects/BrowsePages/Cart");
class AddProduct {
// 
clickCartIcon =async() =>{
  
  await actionWrapper.checkVisibleClickableAndClick(await path.cartIcon);
}

  // To search for a product in cart
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

  // to select buyer in cart page with search value
  selectBuyer = async () => {
    await actionWrapper.searchAndselectDrpdownusingKeyboard(
     Ara, 
      await path.selectbuyer
         );
  };

  // to click create quote cart page
  cartCreateQuote = async () => {
    await actionWrapper.checkVisibleClickableMoveAndClick(
      await path.createQuote
    );
  };

  // product search and add to cart from header search
  addToCartFromHeaderSearch = async (searchValue) => {
    await path.searchBox.click();
    await path.searchBox.setValue(searchValue);
    // will click the first result available
    await path.addToCartBtnInSearchResults.click();
  };

  // to add custom product
  addCustomProductInCart = async (productDesc, productId, unitPrice) => {
    await actionWrapper.checkVisibleClickableAndClick(await path.addCustomProduct);
    await actionWrapper.checkEnabledClearAndSetValue(await path.customProductDescription, productDesc);
    await actionWrapper.checkEnabledClearAndSetValue(await path.customProductID, productId);
    await actionWrapper.checkEnabledClearAndSetValue(await path.customUnitPrice, unitPrice);
   
  };
}
module.exports = new AddProduct();

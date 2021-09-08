const ProdInput = require("../Input/Product.io");
var actionwrappers = require("./../../CommonActions/ActionsWrappers");
const path = require("../../B2C/PageObjects/Checkout.page");

var  searchProdTocart= require("../CommonFunctions/AddProductCart");


describe("Checkout  page", () => {

it("Search prod & Add to cart", async () => {
   await searchProdTocart.searchProd(ProdInput.productName,ProdInput.qty,path.cartIcon);
   await actionwrappers.urlValidation("checkout/cart");
});

it("save for later", async () => {
    await  searchProdTocart.cartChanges(path.saveforLater);
    await  actionwrappers.urlValidation("checkout/cart");

});

it("Move to cart", async () => {
    await   actionwrappers.scroll(path.MoveTocart);
    await   searchProdTocart.cartChanges(path.MoveTocart);
    await   actionwrappers.urlValidation("checkout/cart");
   
});

it("remove the prod from the cart",async () => {
    await  searchProdTocart.cartChanges(path.removeProduct);
    await  actionwrappers.urlValidation("checkout/cart");
});

it("remove the prod from the cart", async () => {
    await  searchProdTocart.searchProd(ProdInput.productName,ProdInput.qty,path.cartIcon);
    await  searchProdTocart.cartChanges(path.placeOrderCart);
    await  actionwrappers.urlValidation("checkout/cart");
    await  actionwrappers.checkClickableAndClick(path.logo);
});

it("Search prod & BuyNow", async () => {
    await  searchProdTocart.searchProd(ProdInput.productName,ProdInput.qty,path.BuyNowInDetailPage);
    await  actionwrappers.urlValidation("direct_checkout/address");
    
});


});


const ProdInput = require("../Input/Product.io");
var actionwrappers = require("./../../CommonActions/ActionsWrappers");
const path = require("../../B2C/PageObjects/Checkout.page");
var LoginPage = require("../PageObjects/Login.page");
const loginInput = require("../Input/Login.io");
var dbConnectionB2C = require("../../CommonActions/DatabaseConnection");
var  searchProdTocart= require("../CommonFunctions/AddProductCart");
const assert = require("assert");

describe("Checkout  page", () => {
  let otp;
  let test;

  it("Opening and clicking login button", async () => {
    await LoginPage.open();
    await LoginPage.wait();
  });

  it("Valid Login Scenario", async () => {
    await LoginPage.signInIconClick();
    await actionwrappers.checkEnableddoubleClickDeleteAndSetValue(
      LoginPage.mobileNumber,
      ""
    );
    await LoginPage.login(loginInput.validMobile);
  });

  it("DB Connection", async () => {
    await browser.pause(3000);
    var sql = "SELECT otp FROM Users where ID=90;";
        test = await LoginPage.dbConnection(sql).then((res) => {
      otp = res ? res[0].otp : null;
      return otp;
    });
    dbConnectionB2C.end();
  });

  it("one time passcode", async () => {
    await browser.pause(1000);
    await LoginPage.inputOTP(otp);
    await browser.pause(1000);
    
  });

/*it("remove all the products in cart" , async () => {
  await actionwrappers.checkClickableAndClick(path.cartIcon);
  await actionwrappers.urlValidation("checkout/cart");
  await searchProdTocart.prodChanges(path.removeProduct);
  assert.strictEqual(await path.emptyCart.getText(),"Your Cart is Empty");
});*/

it("Search prod & Add to cart", async () => {
   await searchProdTocart.searchProd(ProdInput.product2,ProdInput.qty,path.cartIcon);
   await actionwrappers.urlValidation("checkout/cart");
});

it("save for later", async () => {
    await  searchProdTocart.cartChanges(path.saveforLater);
    await  actionwrappers.urlValidation("checkout/cart");

});

it("Move to cart", async () => {
    await   actionwrappers.scrollEle(path.MoveTocart);
    await   searchProdTocart.cartChanges(path.MoveTocart);
    await   actionwrappers.urlValidation("checkout/cart");
   
});

it("remove the prod from the cart",async () => {
    await  searchProdTocart.cartChanges(path.removeProduct);
    await  actionwrappers.urlValidation("checkout/cart");
});

it("remove the prod from the cart", async () => {
    await  searchProdTocart.searchProd(ProdInput.ItemName,ProdInput.qty,path.cartIcon);
    await  actionwrappers.urlValidation("checkout/cart");
    await  searchProdTocart.cartChanges(path.placeOrderCart);
    await  actionwrappers.urlValidation("iscart/address");
    await  actionwrappers.checkClickableAndClick(path.logo);
});

it("Search prod & moved to check out page", async () => {
    await  searchProdTocart.searchProd(ProdInput.product3,ProdInput.qty,path.BuyNowInDetailPage);
    await  actionwrappers.urlValidation("direct_checkout/address");
    await  actionwrappers.checkClickableAndClick(path.logo);
    
});


});


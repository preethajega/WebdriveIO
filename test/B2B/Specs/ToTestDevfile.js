const assert = require("assert");
// const Quote = require("../../PageObjects/Quotes/BuyerQuote.page");
const LoginPage = require("../PageObjects/Login.page");
const cartPage = require("../CommonFunctions/AddingProductToCart/AddingProductToCart");
// const createQuote = require("../../CommonFunctions/Quotes/createQuote");
// const Summary = require("../../CommonFunctions/Quotes/Summary")
// const Edit = require("../../CommonFunctions/Quotes/Edit");
// const Detail = require("../../CommonFunctions/Quotes/Detail");
// const ActionWrapper = require("../../CommonActions/ActionsWrappers");
// const Respond = require("../../CommonFunctions/Quotes/Respond");
// const Approvals = require("../../CommonFunctions/Quotes/Approval");
describe("Create Draft quote ", () => {
  it("Should allow to access login ", async () => {
    await LoginPage.open();
    await LoginPage.login("admin@apptino.com", "Admin@123");
    await LoginPage.signinButton;
    await browser.pause(5000);
  });

  it("Should allow to Create draft Quote with product and Discard", async () => {
    //  createQuote.Clickcartbutton();
    // await  cartPage.addToCartFromHeaderSearch("Apple");

    await cartPage.clickCartIcon();
    // await cartPage.addCustomProductInCart("TEST DESC", "TEST ID",9000);
    await cartPage.searchProductInCart("appple");
    await cartPage.selectBuyer();
    await cartPage.cartCreateQuote();
  });
});

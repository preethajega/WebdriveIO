const assert = require("assert");
const path = require("path");
const cart_path = require("../../../PageObjects/BrowsePages/Cart");
const common = require("../../../PageObjects/Common/commonObjects");
const LoginPage = require("../../../PageObjects/Login.page");
const B2B_loginIp = require("../../../Inputs/B2B_login");
const actionsWrappers = require("../../../../CommonActions/ActionsWrappers");
const prodTable_path = require("../../../PageObjects/SalesModule/summarypage/ProductTable.page");
const prodTable_fn = require("../../../CommonFunctions/salesModule/SalesCards/Calculation/ProductTableCalc");
const cart_fn= require("../../../CommonFunctions/AddingProductToCart/AddingProductToCart");
var CartIp= require("../../../Inputs/Browse/CartIp");
const Calc =require("../../../CommonFunctions/salesModule/SalesCards/Calculation/ProductTableCalc");


describe("cart Page", () => {
    it("Should allow to access login ", async () => {
      await LoginPage.open();
      await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
      await actionsWrappers.urlValidation("/dashboard");
    });
    
    it("Upload excel in  cart & Navigate to Quote summary page ",async () => {
        await  cart_fn.ClickAndclearCart();
        await  cart_fn.uploadProducts(); 
        await actionsWrappers.clearValues(await cart_path.selectbuyer);
        await  cart_fn.carttoSummary(CartIp.BuyerName,await cart_path.createQuote);
        await  actionsWrappers.urlValidation("/quote-summary"); 
    });

    it("Change the Unit list Price & Discount Check the UnitPrice ",async () => {
      await actionsWrappers.scrollEle(prodTable_path.unitListPrice(0));
      await prodTable_fn.eleValue(prodTable_path.unitListPrice(0))


    });
});
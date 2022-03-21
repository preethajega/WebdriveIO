const assert = require("assert");
const path = require("path");
const LoginPage = require("../../../PageObjects/Login.page");
const B2B_loginIp = require("../../../Inputs/B2B_login");
const actionsWrappers = require("../../../../CommonActions/ActionsWrappers");
// const approval_path = require("../../PageObjects/Settings/Approvals.page");
const approval_fn = require("../../../CommonFunctions/salesModule/Sales Cards/ApprovalCard")
// const attach_fn = require("../../../CommonFunctions/salesModule/Sales Cards/Attach")
// const endCusCard_fn = require("../../../CommonFunctions/salesModule/Sales Cards/EndCustomerCard")
// const currency_fn = require("../../../CommonFunctions/salesModule/Sales Cards/currency")
// const sellerInfo_fn = require("../../../CommonFunctions/salesModule/Sales Cards/sellerInfoCard")
// const tag_fn = require("../../../CommonFunctions/salesModule/Sales Cards/tag")
// const termsCard_fn = require("../../../CommonFunctions/salesModule/Sales Cards/termsCard")
// const common = require("../../../PageObjects/Common/commonObjects");
const assert = require("assert");
const path = require("path");
const cart_path = require("../../PageObjects/BrowsePages/Cart");
const common = require("../../PageObjects/Common/commonObjects");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const cart_fn= require("../../CommonFunctions/AddingProductToCart/AddingProductToCart");
var CartIp= require("../../Inputs/Browse/CartIp");


describe('Approval Page', () => {

  it("cart to summary page ",async () => {
    await  cart_fn.ClickAndclearCart();
    await  cart_fn.selectProducts(CartIp.itemName);
    await assert.strictEqual(
        await common.snackbar.getText(),CartIp.cartAlert);
    await actionsWrappers.isNotEmpty_clearValue(await cart_path.selectbuyer);
    await  cart_fn.carttoSummary(CartIp.BuyerName,await cart_path.createQuote);
    await  actionsWrappers.urlValidation("/quote-summary");    
    await  cart_path.open(CartIp.cartUrl);   
    await  actionsWrappers.checkVisibleClickableAndClick(await cart_path.createOrder);
    await  actionsWrappers.urlValidation("/order-summary");    

    })
  // it("Should allow to access login into Approval page ", async () => {
  //   await LoginPage.open();
  //   await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
  //   await actionsWrappers.urlValidation("/dashboard");
  //   await approval_fn.open();
  //   await actionsWrappers.urlValidation("/checkout/quote-summary");
  // });
});
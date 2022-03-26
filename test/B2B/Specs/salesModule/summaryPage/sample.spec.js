const assert = require("assert");
const path = require("path");
const cart_path = require("../../../PageObjects/BrowsePages/Cart");
const common = require("../../../PageObjects/Common/commonObjects");
const LoginPage = require("../../../PageObjects/Login.page");
const B2B_loginIp = require("../../../Inputs/B2B_login");
const actionsWrappers = require("../../../../CommonActions/ActionsWrappers");
const cart_fn = require("../../../CommonFunctions/AddingProductToCart/AddingProductToCart");
var CartIp = require("../../../Inputs/Browse/CartIp");

const approval_path = require("../../../PageObjects/SalesModule/summarypage/Attach_Tag_Comment.page");
const approval_fn = require("../../../CommonFunctions/salesModule/SalesCards/ApprovalCard")
const approvalip = require("../../../Inputs/salesModule/summarypage/ApprovalsIp.js")




describe("cart Page", () => {
  it("Should allow to access login ", async () => {
    await LoginPage.open();
    await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
    await actionsWrappers.urlValidation("/dashboard");
  })

  it("cart to summary page ", async () => {
    await cart_fn.ClickAndclearCart();
    await cart_fn.selectProducts(CartIp.itemName);
    await assert.strictEqual(
      await common.snackbar.getText(), CartIp.cartAlert);
    await actionsWrappers.clearValues(await cart_path.selectbuyer);
    await cart_fn.carttoSummary(CartIp.BuyerName, await cart_path.createQuote);
    await actionsWrappers.urlValidation("/quote-summary");
    // await  cart_path.open(CartIp.cartUrl);   
    // await  actionsWrappers.checkVisibleClickableAndClick(await cart_path.createOrder);
    // await  actionsWrappers.urlValidation("/order-summary");    
  })
  it('should validate a ApprovalGrp',async () => {
    await approval_fn.AddApproval(approval_path.ApprovalGrp,approvalip.approvalName1)
  });

});
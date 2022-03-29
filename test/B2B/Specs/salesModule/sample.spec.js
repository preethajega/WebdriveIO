const assert = require("assert");
const path = require("path");
const cart_path = require("../../PageObjects/BrowsePages/Cart");
const common = require("../../PageObjects/Common/commonObjects");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const cart_fn = require("../../CommonFunctions/AddingProductToCart/AddingProductToCart");
var CartIp = require("../../Inputs/Browse/CartIp");
const approval_path = require("../../PageObjects/SalesModule/summarypage/Attach_Tag_Comment.page");
const approval_fn = require("../../CommonFunctions/salesModule/SalesCards/ApprovalCard")
const approvalIp = require("../../Inputs/salesModule/summarypage/ApprovalsIp")
const sellerInfo_path = require("../../PageObjects/SalesModule/summarypage/SellerInformation.page");
const sellerInfo_fn = require("../../CommonFunctions/salesModule/SalesCards/sellerInfoCard")
const sellerInfoIp = require("../../Inputs/salesModule/summarypage/SellerInfoCardIP")
const currency_path = require("../../PageObjects/SalesModule/summarypage/Attach_Tag_Comment.page");
const currency_fn = require("../../CommonFunctions/salesModule/SalesCards/currency")
const currencyIp = require("../../Inputs/salesModule/summarypage/currencyIp")
const attach_fn = require("../../CommonFunctions/salesModule/SalesCards/Attach")
const attachIp = require("../../Inputs/salesModule/summarypage/AttachIp")



describe("cart Page", () => {
  it("Should allow to access login ", async () => {
    await LoginPage.open();
    await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
    await actionsWrappers.urlValidation("/dashboard");
  })

  it("cart to summary page ", async () => {
    await cart_fn.ClickAndclearCart();
    await cart_fn.selectProducts(CartIp.itemName);
    await browser.pause(3000)
    await assert.strictEqual(
      await common.snackbar.getText(), CartIp.cartAlert);
    await actionsWrappers.clearValues(await cart_path.selectbuyer);
    await cart_fn.carttoSummary(CartIp.BuyerName1, await cart_path.createQuote);
    await actionsWrappers.urlValidation("/quote-summary");
  })
  // it('should change a Approval Group',async () => {
  //   await browser.pause(4000)
  //   await approval_fn.AddApproval(approval_path.ApprovalGrp,approvalIp.approvalName1)
  // });
  // it('should add a Currency',async () => {
  //   await browser.pause(2000)
  //   await currency_fn.Addcurrency(currency_path.currency,currencyIp.currencyValue)
  // });
  // it('should clear a currency in quote page',async () => {
  //   await browser.pause(2000)
  //   await currency_fn.DeleCurrency()
  // });
  it('should chnage the sellerInformation salesBranch with conform select button',async () => {
    await browser.pause(2000)
    await sellerInfo_fn.EditSellerInfo(sellerInfo_path.SalesTxt,sellerInfo_path.EditBtn,
      sellerInfo_path.SalesBranchInput,sellerInfoIp.salesBranch2,sellerInfo_path.SalesBranchSelect) 
  });
  it('should chnage the sellerInformation salesBranch with conform close button',async () => {
    await browser.pause(2000)
    await sellerInfo_fn.EditSellerInfo(sellerInfo_path.SalesTxt,sellerInfo_path.EditBtn,
      sellerInfo_path.SalesBranchInput,sellerInfoIp.salesBranch2,sellerInfo_path.SalesBranchClose) 
  });
  it('should chnage the sellerInformation Account Owner with conform select button',async () => {
    await browser.pause(2000)
    await sellerInfo_fn.EditSellerInfo(sellerInfo_path.AccountOwnerTxt,sellerInfo_path.EditBtn,
      sellerInfo_path.AccountOwnerInput,sellerInfoIp.AccountOwnner,sellerInfo_path.AccountOwnerSelect) 
  });
  it('should chnage the sellerInformation Account Owner with conform close button',async () => {
    await browser.pause(2000)
    await sellerInfo_fn.EditSellerInfo(sellerInfo_path.AccountOwnerTxt,sellerInfo_path.EditBtn,
      sellerInfo_path.AccountOwnerInput,sellerInfoIp.AccountOwnner,sellerInfo_path.AccountOwnerClose) 
  });
  it('should chnage the sellerInformation BusinessUnit with conform select button',async () => {
    await browser.pause(2000)
    await sellerInfo_fn.EditSellerInfo(sellerInfo_path.BUTxt,sellerInfo_path.EditBtn,
      sellerInfo_path.BUInput,sellerInfoIp.BU,sellerInfo_path.BUSelect) 
  });
  it('should chnage the sellerInformation BusinessUnit with conform close button',async () => {
    await browser.pause(2000)
    await sellerInfo_fn.EditSellerInfo(sellerInfo_path.BUTxt,sellerInfo_path.EditBtn,
      sellerInfo_path.BUInput,sellerInfoIp.BU,sellerInfo_path.BUClose) 
  });

  it('should chnage the sellerInformation Divison with conform select button',async () => {
    await browser.pause(2000)
    await sellerInfo_fn.EditSellerInfo(sellerInfo_path.DivisionTxt,sellerInfo_path.EditBtn,
      sellerInfo_path.DivisionInput,sellerInfoIp.Division,sellerInfo_path.DivisionSelect) 
  });
  it('should chnage the sellerInformation Divison with conform close button',async () => {
    await browser.pause(2000)
    await sellerInfo_fn.EditSellerInfo(sellerInfo_path.DivisionTxt,sellerInfo_path.EditBtn,
      sellerInfo_path.DivisionInput,sellerInfoIp.Division,sellerInfo_path.DivisionClose) 
  });

  it('should chnage the sellerInformation Channel with conform select button',async () => {
    await browser.pause(2000)
    await sellerInfo_fn.EditSellerInfo(sellerInfo_path.ChannelTxt,sellerInfo_path.EditBtn,
      sellerInfo_path.ChannelInput,sellerInfoIp.channel,sellerInfo_path.ChannelSelect) 
  });
  it('should chnage the sellerInformation Channel with conform close button',async () => {
    await browser.pause(2000)
    await sellerInfo_fn.EditSellerInfo(sellerInfo_path.ChannelTxt,sellerInfo_path.EditBtn,
      sellerInfo_path.ChannelInput,sellerInfoIp.channel,sellerInfo_path.ChannelClose) 
  });

  it('should chnage the sellerInformation warehouse with conform select button',async () => {
    await browser.pause(2000)
    await sellerInfo_fn.EditSellerInfo(sellerInfo_path.WarehouseTxt,sellerInfo_path.EditWareHouseBtn,
      sellerInfo_path.WarehouseInput,sellerInfoIp.warehouse,sellerInfo_path.WarehouseSelect) 
  });  
  it('should chnage the sellerInformation warehouse with conform close button',async () => {
    await browser.pause(2000)
    await sellerInfo_fn.EditSellerInfo(sellerInfo_path.WarehouseTxt,sellerInfo_path.EditWareHouseBtn,
      sellerInfo_path.WarehouseInput,sellerInfoIp.warehouse,sellerInfo_path.WarehouseClose) 
  });  
  // it('should change the Billing Address in Quote page',async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.changeBillToShipTo(sellerInfo_path.BillToQuoteSidNavBtn,sellerInfo_path.selectData2,
  //     sellerInfo_path.ConfOkBillShip)
  // });
  // it('should change the shipping Address in Quote page',async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.changeBillToShipTo(sellerInfo_path.ShipToBtn,sellerInfo_path.selectData2,
  //     sellerInfo_path.ConfOkBillShip)
  // });
  // it('should Add a Attcahment in the Quote page',async () => {
  //   await attach_fn.AttachmentUplaod(approval_path.QuoteOrderAttach,approval_path.QuoteOrderAttach,attachIp.uploadfile)
  // });

});
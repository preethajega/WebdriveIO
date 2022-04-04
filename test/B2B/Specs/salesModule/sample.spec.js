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
const Tag_fn = require("../../CommonFunctions/salesModule/SalesCards/tag")
const TagIp = require("../../Inputs/salesModule/summarypage/TagCard")
const QuoteBtnPath = require("../../PageObjects/SalesModule/summarypage/quoteBtn.pag");
const Quote_fn = require("../../CommonFunctions/salesModule/SalesCards/QuoteBtn")
const QuoteIp = require("../../Inputs/salesModule/summarypage/QuoteBTnsIp")
const Term_path = require("../../PageObjects/SalesModule/summarypage/termsCard.page");
const Term_fn = require("../../CommonFunctions/salesModule/SalesCards/termsCard")
const TermIp = require("../../Inputs/salesModule/summarypage/TermsCard")
const ApplyDiscount_path = require("../../PageObjects/SalesModule/summarypage/ApplyDiscountCard.page");
const ApplyDiscount_fn = require("../../CommonFunctions/salesModule/SalesCards/ApplyDiscountCard")
const ApplyDiscountIp = require("../../Inputs/salesModule/summarypage/ApplyDiscountIP")
const EndCustomer_path = require("../../PageObjects/SalesModule/summarypage/EndCustomerCard.page");
const EndCustomer_fn = require("../../CommonFunctions/salesModule/SalesCards/EndCustomerCard")
const EndCustomerIp = require("../../Inputs/salesModule/summarypage/EndCustomerIp")



describe("cart Page", () => {
  it("Should allow to access login ", async () => {
    await LoginPage.open();
    await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
    await actionsWrappers.urlValidation("/dashboard");
  })
  // it("Should allow to access login Buyer Side", async () => {
  //   await LoginPage.open();
  //   await LoginPage.login(B2B_loginIp.Buyer3Email, B2B_loginIp.Buyer3Password);
  //   await actionsWrappers.urlValidation("//dev3.myapptino.com/");
  // })
  // it("cart to summary page Buyer Side", async () => {
  //   await browser.refresh()
  //   await cart_fn.ClickAndclearCart(cart_path.BuyerHomePageCartIcon);
  //   await cart_fn.selectProducts(CartIp.itemName);
  //   await browser.pause(3000)
  //   await assert.strictEqual(
  //     await common.snackbar.getText(), CartIp.cartAlert);
  //   await actionsWrappers.checkVisibleClickableAndClick(cart_path.createQuote);
  //   await actionsWrappers.urlValidation("/quote-summary");
  // })
  /* It will directly take us Quotes Landing Page */
  // it('should navigate to the Quotes landing page',async () => {
  // await LoginPage.open();
  // await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
  // await actionsWrappers.urlValidation("/dashboard");
  //   await Quote_fn.open();
  //   await actionsWrappers.urlValidation("/Quotes/Quote-landing");
  // });
  it("cart to summary page ", async () => {
    await browser.refresh()
    await cart_fn.ClickAndclearCart(cart_path.cartIcon);
    await cart_fn.selectProducts(CartIp.itemName);
    await browser.pause(3000)
    await assert.strictEqual(
      await common.snackbar.getText(), CartIp.cartAlert);
    await actionsWrappers.clearValues(await cart_path.selectbuyer);
    await cart_fn.carttoSummary(CartIp.BuyerName1, await cart_path.createQuote);
    await actionsWrappers.urlValidation("/quote-summary");
  })
  /* ************************ It should change the Approval Group ************************* */
  // it('should change a Approval Group', async () => {
  //   await browser.pause(4000)
  //   await approval_fn.AddApproval(approval_path.ApprovalGrp, approvalIp.approvalName1)
  // });
  // it('should change a Approval Group', async () => {
  //   await browser.pause(4000)
  //   await approval_fn.AddApproval(approval_path.ApprovalGrp, approvalIp.approvalName3)
  // });
  /* ************************ It should work on Currency Fields ************************ */
  // it('should add a Currency', async () => {
  //   await browser.pause(2000)
  //   await currency_fn.Addcurrency(currency_path.currency, currencyIp.currencyValue)
  // });
  // it('should clear a currency in quote page', async () => {
  //   await browser.pause(2000)
  //   await currency_fn.DeleCurrency()
  // });
  /* ************************ SellerInformation Card validations ************************ */
  // it('should change the sellerInformation salesBranch with confirm select button', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.EditSellerInfo(sellerInfo_path.SalesTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.SalesBranchInput, sellerInfoIp.salesBranch2, sellerInfo_path.SalesBranchSelect)
  // });
  // it('should change the sellerInformation salesBranch with confirm close button', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.EditSellerInfo(sellerInfo_path.SalesTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.SalesBranchInput, sellerInfoIp.salesBranch3, sellerInfo_path.SalesBranchClose)
  // });
  // it('should change the sellerInformation Account Owner with confirm select button', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.EditSellerInfo(sellerInfo_path.AccountOwnerTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.AccountOwnerInput, sellerInfoIp.AccountOwnner, sellerInfo_path.AccountOwnerSelect)
  // });
  // it('should change the sellerInformation Account Owner with confirm close button', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.EditSellerInfo(sellerInfo_path.AccountOwnerTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.AccountOwnerInput, sellerInfoIp.AccountOwnner2, sellerInfo_path.AccountOwnerClose)
  // });
  // it('should change the sellerInformation BusinessUnit with confirm select button', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.EditSellerInfo(sellerInfo_path.BUTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.BUInput, sellerInfoIp.BU, sellerInfo_path.BUSelect)
  // });
  // it('should change the sellerInformation BusinessUnit with confirm close button', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.EditSellerInfo(sellerInfo_path.BUTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.BUInput, sellerInfoIp.BU1, sellerInfo_path.BUClose)
  // });

  // it('should change the sellerInformation Divison with confirm select button', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.EditSellerInfo(sellerInfo_path.DivisionTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.DivisionInput, sellerInfoIp.Division, sellerInfo_path.DivisionSelect)
  // });
  // it('should change the sellerInformation Divison with confirm close button', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.EditSellerInfo(sellerInfo_path.DivisionTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.DivisionInput, sellerInfoIp.Division2, sellerInfo_path.DivisionClose)
  // });

  // it('should change the sellerInformation Channel with confirm select button', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.EditSellerInfo(sellerInfo_path.ChannelTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.ChannelInput, sellerInfoIp.channel, sellerInfo_path.ChannelSelect)
  // });
  it('should chnage the sellerInformation Channel with confirm close button', async () => {
    await browser.pause(2000)
    await sellerInfo_fn.EditSellerInfo(sellerInfo_path.ChannelTxt, sellerInfo_path.EditBtn,
      sellerInfo_path.ChannelInput, sellerInfoIp.channel1, sellerInfo_path.ChannelClose)
  });

  // it('should change the sellerInformation warehouse with confirm select button', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.EditSellerInfo(sellerInfo_path.WarehouseTxt, sellerInfo_path.EditWareHouseBtn,
  //     sellerInfo_path.WarehouseInput, sellerInfoIp.warehouse, sellerInfo_path.WarehouseSelect)
  // });
  // it('should change the sellerInformation warehouse with confirm close button', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.EditSellerInfo(sellerInfo_path.WarehouseTxt, sellerInfo_path.EditWareHouseBtn,
  //     sellerInfo_path.WarehouseInput, sellerInfoIp.warehouse, sellerInfo_path.WarehouseClose)
  // });
  // /* ****************** Removing the sellerInformation data and saving  ****************** */
  // it('should clear the sellerInformation AccountOwner data fully add click the confirm select', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.RemoveSellerInfo(sellerInfo_path.AccountOwnerTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.AccountOwnerInput, sellerInfo_path.AccountOwnerClearAll, sellerInfo_path.AccountOwnerSelect)
  //   await actionsWrappers.snackBarValidate(common.snackbar, sellerInfoIp.errAlertAccountOwner)
  //   await browser.pause(2000)   
  // });

  // it('should clear the sellerInformation BusinessUnit data fully add click the confirm select', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.RemoveSellerInfo(sellerInfo_path.BUTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.BUInput, sellerInfo_path.BUClearAll, sellerInfo_path.BUSelect)
  // });
  // it('should clear the sellerInformation Division data fully add click the confirm select', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.RemoveSellerInfo(sellerInfo_path.DivisionTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.DivisionInput, sellerInfo_path.DivisionClearAll, sellerInfo_path.DivisionSelect)
  // });

  // it('should clear the sellerInformation Channel data fully add click the confirm select', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.RemoveSellerInfo(sellerInfo_path.ChannelTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.ChannelInput, sellerInfo_path.ChanelClearAll, sellerInfo_path.ChannelSelect)
  // });

  // it('should clear the sellerInformation Warehouse data fully add click the confirm select', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.RemoveSellerInfo(sellerInfo_path.WarehouseTxt, sellerInfo_path.EditWareHouseBtn,
  //     sellerInfo_path.WarehouseInput, sellerInfo_path.WarehouseClearAll, sellerInfo_path.WarehouseSelect)
  // });
  // it('should check the sellerInformation BusinessUnit if there  is no values it should Add the value to the BusinessUnit', async () => {
  //   await browser.pause(3000)
  //   await sellerInfo_fn.checkingValue(sellerInfo_path.BUTxt,sellerInfo_path.BUTxt, sellerInfoIp.EmptyBUAlert, sellerInfo_path.BUTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.BUInput, sellerInfoIp.BU, sellerInfo_path.BUSelect,
  //     sellerInfo_path.BUTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.BUInput, sellerInfoIp.BU1, sellerInfo_path.BUSelect)
  // });
  // it('should check the sellerInformation Division if there  is no values it should Add the value to the Division', async () => {
  //   await browser.pause(3000)
  //   await sellerInfo_fn.checkingValue(sellerInfo_path.DivisionTxt,sellerInfo_path.DivisionTxt, sellerInfoIp.EmptyDivisionAlert, sellerInfo_path.DivisionTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.DivisionInput, sellerInfoIp.Division1, sellerInfo_path.DivisionSelect,
  //     sellerInfo_path.DivisionTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.DivisionInput, sellerInfoIp.Division2, sellerInfo_path.DivisionSelect)
  // });
  // it('should check the sellerInformation channel if there  is no values it should Add the value to the channel', async () => {
  //   await browser.pause(3000)
  //   await sellerInfo_fn.checkingValue(sellerInfo_path.ChannelTxt,sellerInfo_path.ChannelTxt, sellerInfoIp.EmptyChannelAlert, sellerInfo_path.ChannelTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.ChannelInput, sellerInfoIp.channel2, sellerInfo_path.ChannelSelect,
  //     sellerInfo_path.ChannelTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.ChannelInput, sellerInfoIp.channel2, sellerInfo_path.ChannelSelect)
  // });
  // it('should check the sellerInformation warehouse if there  is no values it should Add the value to the warehouse', async () => {
  //   await browser.pause(3000)
  //   await sellerInfo_fn.checkingValue(sellerInfo_path.WarehouseTxt,sellerInfo_path.WarehouseTxt, sellerInfoIp.EmptyWarehouseAlert, sellerInfo_path.WarehouseTxt, sellerInfo_path.EditWareHouseBtn,
  //     sellerInfo_path.WarehouseInput, sellerInfoIp.warehouse1, sellerInfo_path.WarehouseSelect,
  //     sellerInfo_path.WarehouseTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.WarehouseInput, sellerInfoIp.warehouse2, sellerInfo_path.WarehouseSelect)
  // });
  /* ************************ BillTo ShipTo validations ************************ */
  // // it('should change the Billing Address in Quote page',async () => {
  // //   await browser.pause(2000)
  // //   await sellerInfo_fn.changeBillToShipTo(sellerInfo_path.BillToQuoteSidNavBtn,sellerInfo_path.selectData2,
  // //     sellerInfo_path.ConfOkBillShip)
  // // });
  // // it('should change the shipping Address in Quote page',async () => {
  // //   await browser.pause(2000)
  // //   await sellerInfo_fn.changeBillToShipTo(sellerInfo_path.ShipToBtn,sellerInfo_path.selectData2,
  // //     sellerInfo_path.ConfOkBillShip)
  // // });
  /* ************************ Attachment Validations ************************ */
  // it('should Add a Attcahment in the Quote summary page', async () => {
  //   await browser.pause(2000)
  //   await attach_fn.AttachmentUplaod(approval_path.QuoteOrderAttach, attachIp.uploadfile)
  // });


  //  it('should change the sellerInformation salesBranch with confirm select button', async () => {
  //   await browser.pause(2000)
  //   await sellerInfo_fn.EditSellerInfo(sellerInfo_path.SalesTxt, sellerInfo_path.EditBtn,
  //     sellerInfo_path.SalesBranchInput, sellerInfoIp.salesBranch1, sellerInfo_path.SalesBranchSelect)
  //   await sellerInfo_fn.UpadateBuAlert(sellerInfo_path.updateBUAlert,sellerInfoIp.UpdateBUAlertText)
  //   await browser.pause(4000)
  // });
  /* ************************ Validate the Tag Fields ************************ */
  //  it('should validate a Tag field',async () => {
  //    await browser.pause(2000)
  //    await Quote_fn.QuoteBtnIdentify(QuoteBtnPath.CreateOrREqApproveBtn,QuoteIp.CreateQuoteBtnTxt,QuoteBtnPath.CreateQuoteBtn,QuoteBtnPath.RequestApproval)
  //    await actionsWrappers.snackBarValidate(approval_path.ErrMsgTag,TagIp.ErrtagAlert)
  //  });
  //  it('should Add a Tag in the Quote Summary Page', async () => {
  //   await browser.pause(2000)
  //   await actionsWrappers.MoveTo(approval_path.Tag)
  //   await Tag_fn.Tag(approval_path.Tag, TagIp.tag, approval_path.Tag)
  // });
  /* ************************ validate the Terms Cards ************************ */
  // it('should Change the Delivery Terms',async () => {
  //   await browser.pause(2000)
  //   await Term_fn.TermsActions(Term_path.DeleiverTerm,TermIp.deliverTerm)
  // });
  // it('should Change the Payment Terms',async () => {
  //   await browser.pause(2000)
  //   await Term_fn.TermsActions(Term_path.PaymentTerm,TermIp.paymentTerm)
  // });
  // it('should Change the warrenty Terms',async () => {
  //   await browser.pause(2000)
  //   await Term_fn.TermsActions(Term_path.WarrentyTerm,TermIp.warrantyTerm1)
  // });
  // it('should Change the PF Terms',async () => {
  //   await browser.pause(2000)
  //   await Term_fn.TermsActions(Term_path.PFTerm,TermIp.PFTerm1)
  // });
  // it('should Change the Mode of Dispatch Terms',async () => {
  //   await browser.pause(2000)
  //   await Term_fn.TermsActions(Term_path.ModeOfDispatchTerm,TermIp.ModeOFDispatchTerm1)
  // });
  // it('should Change the Freight Terms',async () => {
  //   await browser.pause(2000)
  //   await Term_fn.TermsActions(Term_path.FreightTerm,TermIp.FreightTerm)
  // });
  // it('should Change the Insurance Terms',async () => {
  //   await browser.pause(2000)
  //   await Term_fn.TermsActions(Term_path.InsuranceTerm,TermIp.insuranceTerm)
  // });
  // it('should Change the Addtional Term Terms',async () => {
  //   await browser.pause(2000)
  //   await Term_fn.AddtionalTerm(Term_path.AddtionalTerm,TermIp.AddtionalTerm)
  // });
  /*Validation a Apply Discount Card */
  // it('should ApplyDiscount By Amount',async () => {
  //   await browser.pause(2000)
  //   await ApplyDiscount_fn.ApplyDiscBYAmount(ApplyDiscount_path.ByAmountBtn,ApplyDiscount_path.ByAmountInput,ApplyDiscountIp.ByAmount,ApplyDiscount_path.ApplyDisApply)
  // });
  // it('should Reset a AppliyedDiscount By Amount',async () => {
  //   await browser.pause(2000)
  //   await ApplyDiscount_fn.ResetDiscount(ApplyDiscount_path.ByAmountBtn,ApplyDiscount_path.ApplyDisReset)
  // });
  // it('should ApplyDiscount By Discount',async () => {
  //   await browser.pause(2000)
  //   await ApplyDiscount_fn.ApplyDiscBYDiscount(ApplyDiscount_path.ByDiscountBtn,ApplyDiscount_path.ByDiscountInput,ApplyDiscountIp.ByDiscount,ApplyDiscount_path.ApplyDisApply)
  // });
  // it('should Reset a AppliyedDiscount By Discount',async () => {
  //   await browser.pause(2000)
  //   await ApplyDiscount_fn.ResetDiscount(ApplyDiscount_path.ByDiscountBtn,ApplyDiscount_path.ApplyDisReset)
  // });
  // it('should RoundUp the value By -2',async () => {
  //   await ApplyDiscount_fn.RoundUp(ApplyDiscount_path.RoundUpMinusTwo,ApplyDiscount_path.RoundUpApply)
  // });
  // it('should RReset the RoundUp value By -2',async () => {
  //   await ApplyDiscount_fn.RoundUp(ApplyDiscount_path.RoundUpMinusTwo,ApplyDiscount_path.RoundUpReset)
  // });
  // it('should RoundUp the value By -1',async () => {
  //   await ApplyDiscount_fn.RoundUp(ApplyDiscount_path.RoundUpMinusOne,ApplyDiscount_path.RoundUpApply)
  // });
  // it('should Reset the RoundUp value By -1',async () => {
  //   await ApplyDiscount_fn.RoundUp(ApplyDiscount_path.RoundUpMinusOne,ApplyDiscount_path.RoundUpReset)
  // });
  // it('should RoundUp the value By 0',async () => {
  //   await ApplyDiscount_fn.RoundUp(ApplyDiscount_path.RoundUpZero,ApplyDiscount_path.RoundUpApply)
  // });
  // it('should Reset the RoundUp value By 0',async () => {
  //   await ApplyDiscount_fn.RoundUp(ApplyDiscount_path.RoundUpZero,ApplyDiscount_path.RoundUpReset)
  // });
  // it('should RoundUp the value By 1',async () => {
  //   await ApplyDiscount_fn.RoundUp(ApplyDiscount_path.RoundUpPlusOne,ApplyDiscount_path.RoundUpApply)
  // });
  // it('should Reset the RoundUp value By 1',async () => {
  //   await ApplyDiscount_fn.RoundUp(ApplyDiscount_path.RoundUpPlusOne,ApplyDiscount_path.RoundUpReset)
  // });
  // it('should RoundUp the value By 2',async () => {
  //   await ApplyDiscount_fn.RoundUp(ApplyDiscount_path.RoundUpPlusTwo,ApplyDiscount_path.RoundUpApply)
  // });
  // it('should Reset the RoundUp value By 2',async () => {
  //   await ApplyDiscount_fn.RoundUp(ApplyDiscount_path.RoundUpPlusTwo,ApplyDiscount_path.RoundUpReset)
  // });
  //  it('should change a Valid From date to the Quote summary page',async () => {
  //     await browser.pause(4000)
  //    await EndCustomer_fn.DateSelecter(EndCustomer_path.validFrom,EndCustomer_path.NextMonthBtn,EndCustomer_path.DatePath)
  //   });
  //   it('should change a Valid To date to the Quote summary page',async () => {
  //     await browser.pause(4000)
  //    await EndCustomer_fn.DateSelecter(EndCustomer_path.validTill,EndCustomer_path.NextMonthBtn,EndCustomer_path.DatePath)
  //   });
  /************************* End Customer Field Validations ************************ */
  
  //   it('should not allow a user select a Valid Till date is LeserThen Vaild From date',async () => {
  //     await browser.pause(4000)
  //     await EndCustomer_fn.DateSelecter(EndCustomer_path.validFrom,EndCustomer_path.NextMonthBtn,EndCustomer_path.DatePath) 
  //     await browser.pause(2000)
  //     await actionsWrappers.Click(QuoteBtnPath.RequestApproval)
  //     await actionsWrappers.snackBarValidate(common.snackbar,EndCustomerIp.ErrMsgEndCusTillDate)
  //   });
  // it('should fill the SPR fields to the Quote summary page',async () => {
  //   await browser.pause(4000)
  //   await EndCustomer_fn.SPRFieldsFill(EndCustomer_path.EndCusRefeNum,EndCustomerIp.EndCusRefNum,EndCustomer_path.EndCusName,EndCustomerIp.EndCusName,EndCustomer_path.ProjectName,EndCustomerIp.EndCusProject,EndCustomer_path.CompetitorName,EndCustomerIp.EndCusCompititers,
  //     EndCustomer_path.PriceJustification,EndCustomerIp.PriceJustification)
  // });
  // it('should validate a Mandatory SPR fields in the Quote Summary Page',async () => {
  //    await Quote_fn.QuoteBtnIdentify(QuoteBtnPath.CreateOrREqApproveBtn,QuoteIp.CreateQuoteBtnTxt,QuoteBtnPath.CreateQuoteBtn,QuoteBtnPath.RequestApproval)
  //    await EndCustomer_fn.SPRFieldValidate(EndCustomer_path.ErrCusName,EndCustomer_path.ErrCusName,EndCustomerIp.ErrMsgEndCusName)
  //    await EndCustomer_fn.SPRFieldValidate(EndCustomer_path.ErrProjectName,EndCustomer_path.ErrProjectName,EndCustomerIp.ErrMsgProjectName)
  //    await EndCustomer_fn.SPRFieldValidate(EndCustomer_path.ErrCompetitor,EndCustomer_path.ErrCompetitor,EndCustomerIp.ErrMsgCompetitors)
  //    await EndCustomer_fn.SPRFieldValidate(EndCustomer_path.ErrPriceJustification,EndCustomer_path.ErrPriceJustification,EndCustomerIp.ErrMsgPriceJustification)
  //   });
  // it('should add Required date to the Quote summary page',async () => {
  //   await browser.pause(4000)
  //   await actionsWrappers.scrollEle(EndCustomer_path.RequiredDate)
  //   await EndCustomer_fn.DateSelecter(EndCustomer_path.RequiredDateIcon,EndCustomer_path.NextMonthBtn,EndCustomer_path.DatePath)
  // });
  /* ************************ Creating a Quote validations ************************ */
  // it('should create a Quote',async () => {
  //   await Quote_fn.QuotePopUP(QuoteBtnPath.CreateOrREqApproveBtn,QuoteIp.CreateQuoteBtnTxt,QuoteBtnPath.CreateQuoteBtn,QuoteBtnPath.RequestApproval,
  //     QuoteBtnPath.QuoteConfWindow,QuoteIp.CreateQuoteText,QuoteBtnPath.CreateQuoteName,QuoteIp.QuoteName,QuoteBtnPath.ConfBtn,
  //     QuoteBtnPath.ReqApprovalQuoteName,QuoteIp.QuoteName,QuoteBtnPath.Comments,QuoteIp.comments,QuoteBtnPath.ConfBtn)
  // });
  //   it('should validate a mandatory field in the POPUP window which is opend',async () => {
  //     await browser.pause(4000)
  //     await Quote_fn.PopUPFieldValidation(QuoteBtnPath.CreateOrREqApproveBtn,QuoteIp.CreateQuoteBtnTxt,QuoteBtnPath.CreateQuoteBtn,QuoteBtnPath.RequestApproval,
  //       QuoteBtnPath.QuoteConfWindow,QuoteIp.CreateQuoteText,QuoteBtnPath.ConfBtn,QuoteBtnPath.ErrQuoteName,QuoteIp.ErrMsgcreateQuoteName,QuoteBtnPath.ConfCancel,
  //       QuoteBtnPath.Approval2,QuoteBtnPath.ApproverInput1,QuoteBtnPath.ConfBtn,QuoteBtnPath.ErrApprover,QuoteIp.ErrMsgApprover,
  //       QuoteBtnPath.ApproverInput2,QuoteBtnPath.ConfBtn,QuoteBtnPath.ErrApprover,QuoteIp.ErrMsgApprover,
  //       QuoteBtnPath.ApproverInput1,QuoteBtnPath.ConfBtn,QuoteBtnPath.ErrApprover,QuoteIp.ErrMsgApprover,
  //       QuoteBtnPath.ConfBtn,QuoteBtnPath.ErrReqApprovalQuoteName,QuoteIp.ErrMsgReqApprovalQuoteName,
  //       QuoteBtnPath.ErrComment,QuoteIp.ErrMsgCommentName,QuoteBtnPath.ConfCancel)
  // });
  // it('should save a Quote as a Draft in Quote Summary Page',async () => {
  //   await Quote_fn.saveAsDraft(QuoteBtnPath.SaveAsDraft,QuoteBtnPath.CreateQuoteName,QuoteIp.QuoteName,QuoteBtnPath.ConfBtn)
  // });
  // it('should validate that crated quote is placed on the landing page',async () => {
  //   await Quote_fn.QuoteNameValidation(QuoteBtnPath.QuoteOrderEditFirst,QuoteBtnPath.QuoteOrderNameInput,QuoteIp.QuoteName)
  //   await browser.pause(5000)
  // });
  it('should print a value',async () => {
    // await actionsWrappers.MoveTo(ApplyDiscount_path.TotalTextValue)
    await ApplyDiscount_fn.ApplyDiscountAmountValid(ApplyDiscount_path.TotalTextValue)
  });


});
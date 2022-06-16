const assert = require("assert");
const path = require("path");
const cart_path = require("../../../../PageObjects/BrowsePages/Cart");
const common = require("../../../../PageObjects/Common/commonObjects");
const LoginPage = require("../../../../PageObjects/Login.page");
const LogOutPage = require("../../../../PageObjects/logout.page");
const B2B_loginIp = require("../../../../Inputs/B2B_login");
const actionsWrappers = require("../../../../../CommonActions/ActionsWrappers");
const cart_fn = require("../../../../CommonFunctions/AddingProductToCart/AddingProductToCart");
var CartIp = require("../../../../Inputs/Browse/CartIp");
const approval_path = require("../../../../PageObjects/SalesModule/summarypage/Attach_Tag_Comment.page");
const approval_fn = require("../../../../CommonFunctions/salesModule/SalesCards/ApprovalCard")
const approvalIp = require("../../../../Inputs/salesModule/summarypage/ApprovalsIp")
const sellerInfo_path = require("../../../../PageObjects/SalesModule/summarypage/SellerInformation.page");
const sellerInfo_fn = require("../../../../CommonFunctions/salesModule/SalesCards/sellerInfoCard")
const sellerInfoIp = require("../../../../Inputs/salesModule/summarypage/SellerInfoCardIP")
const currency_path = require("../../../../PageObjects/SalesModule/summarypage/Attach_Tag_Comment.page");
const currency_fn = require("../../../../CommonFunctions/salesModule/SalesCards/currency")
const currencyIp = require("../../../../Inputs/salesModule/summarypage/currencyIp")
const attach_fn = require("../../../../CommonFunctions/salesModule/SalesCards/Attach")
const attachIp = require("../../../../Inputs/salesModule/summarypage/AttachIp")
const Tag_fn = require("../../../../CommonFunctions/salesModule/SalesCards/tag")
const TagIp = require("../../../../Inputs/salesModule/summarypage/TagCard")
const QuoteBtnPath = require("../../../../PageObjects/SalesModule/summarypage/quoteBtn.pag");
const Quote_fn = require("../../../../CommonFunctions/salesModule/SalesCards/QuoteBtn")
const QuoteIp = require("../../../../Inputs/salesModule/summarypage/QuoteBTnsIp")
const Term_path = require("../../../../PageObjects/SalesModule/summarypage/termsCard.page");
const Term_fn = require("../../../../CommonFunctions/salesModule/SalesCards/termsCard")
const TermIp = require("../../../../Inputs/salesModule/summarypage/TermsCard")
const ApplyDiscount_path = require("../../../../PageObjects/SalesModule/summarypage/ApplyDiscountCard.page");
const ApplyDiscount_fn = require("../../../../CommonFunctions/salesModule/SalesCards/ApplyDiscountCard")
const ApplyDiscountIp = require("../../../../Inputs/salesModule/summarypage/ApplyDiscountIP")
const EndCustomer_path = require("../../../../PageObjects/SalesModule/summarypage/EndCustomerCard.page");
const EndCustomer_fn = require("../../../../CommonFunctions/salesModule/SalesCards/EndCustomerCard")
const EndCustomerIp = require("../../../../Inputs/salesModule/summarypage/EndCustomerIp")
const prodTable_path = require("../../../../PageObjects/SalesModule/summarypage/ProductTable.page");
const prodTable_fn = require("../../../../CommonFunctions/salesModule/SalesCards/ProductTable");
const SidNavQuote_path = require("../../../../PageObjects/SalesModule/summarypage/sidNavQuote.page");
const sidnav_fn = require("../../../../CommonFunctions/salesModule/SalesCards/sideNav");
const SidnavIp = require("../../../../Inputs/salesModule/summarypage/sidnavIp")
const QuotefilterPath = require("../../../../PageObjects/SalesModule/summarypage/QuoteFilterCard.page");
const quotefilter_fn = require("../../../../CommonFunctions/salesModule/SalesCards/QuoteFilterCard");
const QuoteFilterIp = require("../../../../Inputs/salesModule/summarypage/QuoteFilterCardIp")
const OrderFilterPath = require("../../../../PageObjects/SalesModule/summarypage/OrderFilterCard.page");
const OrderFIlter_fn = require("../../../../CommonFunctions/salesModule/SalesCards/OrderFilterCard");
const OrderFIlterIp = require("../../../../Inputs/salesModule/summarypage/OrderFilterCardIp");
const QuoteBTnsIp = require("../../../../Inputs/salesModule/summarypage/QuoteBTnsIp");
const approvals_path = require("../../../../PageObjects/Settings/Approvals.page");
const approvals_fn = require("../../../../CommonFunctions/settings/approvals")
var approvalsip = require("../../../../Inputs/settings/AprovalIP");



describe("cart Page", () => {


    it("Should allow to access login ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dev3.myapptino.com/");
    })
    // it("cart to summary page ", async () => {
    //     await browser.refresh()
    //     await cart_fn.ClickAndclearCart(cart_path.cartIcon);
    //     await cart_fn.selectProducts(CartIp.itemName);
    //     await browser.pause(3000)
    //     await assert.strictEqual(
    //     await common.snackbar.getText(), CartIp.cartAlert);
    //     // await cart_fn.SerchProdUpdateQuanty(CartIp.itemName1, CartIp.ProdQty)
    //     await cart_fn.UpdateQuantyAlert(CartIp.ProdQty1)
    //     await actionsWrappers.clearValues(await cart_path.selectbuyer);
    //     await cart_fn.carttoSummary(CartIp.BuyerName1, await cart_path.createQuote);
    // })
    // it('should add a Required date field',async () => {
    //     await EndCustomer_fn.RequiredDateFieldBuyer(QuoteBtnPath.BuyerReqForQuoteBtn,
    //         EndCustomer_path.RequiredDateIcon,EndCustomer_path.NextMonthBtn,EndCustomer_path.DatePath,)
    // });
    // it('should add a Required date field',async () => {
    //     await EndCustomer_fn.RequiredDateValid(QuoteBtnPath.CreateOrREqApproveBtn,QuoteIp.CreateQuoteBtnTxt,QuoteBtnPath.CreateQuoteBtn,QuoteBtnPath.RequestApproval,
    //         EndCustomer_path.RequiredDateIcon,EndCustomer_path.NextMonthBtn,EndCustomer_path.DatePath,
    //         approval_path.Tag, TagIp.tag, approval_path.Tag)
    // });
    // it('should add a Required Tag field',async () => {
    //     await browser.pause(5000)
    //     await EndCustomer_fn.RequiredDateValid(QuoteBtnPath.CreateOrREqApproveBtn,QuoteIp.CreateQuoteBtnTxt,QuoteBtnPath.CreateQuoteBtn,QuoteBtnPath.RequestApproval,
    //         EndCustomer_path.RequiredDateIcon,EndCustomer_path.NextMonthBtn,EndCustomer_path.DatePath,
    //         approval_path.Tag, TagIp.tag, approval_path.Tag)
    // });
    // it('should create a Quote',async () => {
    //     await browser.pause(5000)
    //     await Quote_fn.QuotePopUP(QuoteBtnPath.CreateOrREqApproveBtn,QuoteIp.CreateQuoteBtnTxt,QuoteBtnPath.CreateQuoteBtn,QuoteBtnPath.RequestApproval,
    //         QuoteBtnPath.QuoteConfWindow,QuoteIp.CreateQuoteText,QuoteBtnPath.CreateQuoteName,QuoteIp.QuoteName,QuoteBtnPath.ConfBtn,
    //         QuoteBtnPath.ReqApprovalQuoteName,QuoteIp.QuoteName,QuoteBtnPath.Comments,QuoteIp.comments,QuoteBtnPath.ConfBtn)
    // });
    // it('should validate that crated quote is placed on the landing page',async () => {
    //     await browser.pause(3000)
    //     await Quote_fn.QuoteNameValidation(QuoteBtnPath.QuoteOrderEditFirst,QuoteBtnPath.QuoteOrderNameInput,QuoteIp.QuoteName)
    //     await browser.pause(5000)
    // });

    // it('should filter the Quote name',async () => {
    //     await Quote_fn.open()
    //     await browser.pause(8000)
    //     await quotefilter_fn.AddFilter1(QuotefilterPath.AllFilterTab,QuotefilterPath.quoteName,
    //         QuoteFilterIp.QuoteNameOrginal,QuotefilterPath.ApplyBtn)
    // });


    // it('should apply fillter using QuoteName & update the Quote name & change the name into orginal name',async () => {
    //     await Quote_fn.open()
    //     await browser.pause(8000)
    //     await quotefilter_fn.AddFilter1(QuotefilterPath.AllFilterTab,QuotefilterPath.quoteName,
    //     QuoteFilterIp.QuoteNameOrginal,QuotefilterPath.ApplyBtn)
    //     await browser.pause(5000)
    //     await Quote_fn.UpdateQuoteName(QuoteBtnPath.SelectfirstData,QuoteBtnPath.QuoteOrderNameEditIcon,QuoteBtnPath.QuoteOrderNameInput,
    //       QuoteBTnsIp.EditQuoteName,QuoteBtnPath.QuoteOrderConfyesBtn)
    //     await Quote_fn.QuoteNameValidation(QuoteBtnPath.QuoteOrderEditFirst,QuoteBtnPath.QuoteOrderNameInput,QuoteIp.EditQuoteName)
    //     await actionsWrappers.Click(SidNavQuote_path.BuyerCloseCardBtn)
    //     await quotefilter_fn.ClearFilter(QuotefilterPath.AllFilterTab,QuotefilterPath.ClearAllBtn,QuotefilterPath.ApplyBtn)
    //     await browser.pause(5000)
    //     await Quote_fn.UpdateQuoteName(QuoteBtnPath.SelectfirstData,QuoteBtnPath.QuoteOrderNameEditIcon,QuoteBtnPath.QuoteOrderNameInput,
    //       QuoteFilterIp.QuoteNameOrginal,QuoteBtnPath.QuoteOrderConfyesBtn)
    //   });
    //   it('should create RFQ as a buyer then as a seller it will review the RFQ quote',async () => {
    //     await LoginPage.open();
    //     await LoginPage.login(B2B_loginIp.Buyer3Email, B2B_loginIp.Buyer3Password);
    //     await actionsWrappers.urlValidation("/dev3.myapptino.com/");
    //     await cart_fn.ClickAndclearCart(cart_path.cartIcon);
    //     await browser.pause(4000)
    //     await cart_fn.selectProducts(CartIp.itemName);
    //     await browser.pause(4000)
    //     await assert.strictEqual(
    //     await common.snackbar.getText(), CartIp.cartAlert);
    //     await actionsWrappers.Click(cart_path.createQuote)
    //     await EndCustomer_fn.RequiredDateFieldBuyer(QuoteBtnPath.BuyerReqForQuoteBtn,
    //         EndCustomer_path.RequiredDateIcon,EndCustomer_path.NextMonthBtn,EndCustomer_path.DatePath)
    //     await browser.pause(5000)
    //     await actionsWrappers.Click(QuoteBtnPath.BuyerReqForQuoteBtn)
    //     await Quote_fn.createQuote(QuoteBtnPath.CreateQuoteName,QuoteIp.RfqQuoteName,QuoteBtnPath.ConfBtn)
    //     await browser.pause(9000)
    //     await LogOutPage.logout(LogOutPage.logouticon,LogOutPage.logoutBtn,common.snackbar,
    //     B2B_loginIp.logoutAlertMsg)
    //     await browser.pause(5000)
    //     await LoginPage.open();
    //     await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
    //     await actionsWrappers.urlValidation("/dev3.myapptino.com/");
    //     await Quote_fn.open()
    //     await browser.pause(5000)
    //     await quotefilter_fn.AddFilter1(QuotefilterPath.AllFilterTab,QuotefilterPath.quoteName,
    //     QuoteFilterIp.RfqQname,QuotefilterPath.ApplyBtn)
    //     await browser.pause(5000)
    //     await Quote_fn.RespondReviewQuote(QuoteBtnPath.SelectfirstData,SidNavQuote_path.RespondBtn,QuoteBtnPath.RequestApproval,
    //       QuoteBtnPath.Comments,QuoteBTnsIp.comments,QuoteBtnPath.ConfBtn,
    //   SidNavQuote_path.SubmitReviewBtn,QuoteBtnPath.Comments,QuoteBTnsIp.comments,QuoteBtnPath.ConfBtn)
    //   await actionsWrappers.Click(common.close)
    //   });
    //   it('should review the Quote as a seller',async () => {
    //   await Quote_fn.open()
    //   await browser.pause(5000)
    //   await quotefilter_fn.MultipleFilter(QuotefilterPath.AllFilterTab,QuotefilterPath.quoteName,QuoteFilterIp.RfqQname,
    //       QuotefilterPath.QuoteStatus,QuoteFilterIp.QuoteStatus8,QuotefilterPath.ApplyBtn)
    //   await Quote_fn.RespondReviewQuote(QuoteBtnPath.SelectfirstData,SidNavQuote_path.ReviewBtn,SidNavQuote_path.SubmitReviewBtn,
    //       QuoteBtnPath.Comments,QuoteBTnsIp.comments,QuoteBtnPath.ConfBtn,
    //       SidNavQuote_path.SubmitReviewBtn,QuoteBtnPath.Comments,QuoteBTnsIp.comments,QuoteBtnPath.ConfBtn)
    // await actionsWrappers.Click(common.closeCardQuote)
    // await quotefilter_fn.ClearFilter(QuotefilterPath.AllFilterTab,QuotefilterPath.ClearAllBtn,QuotefilterPath.ApplyBtn)

    //   });
    //   it('should sumbit the Approved quote to Buyer ',async () => {
    //     await Quote_fn.open()
    //     await browser.pause(5000)
    //     await quotefilter_fn.AddFilter(QuotefilterPath.AllFilterTab,QuotefilterPath.QuoteStatus,QuoteFilterIp.QuoteStatus9)
    //     await Quote_fn.sumbitQuoteToCus(QuoteBtnPath.SelectfirstData,EndCustomer_path.RequiredDateIcon,
    //         EndCustomer_path.NextMonthBtn,EndCustomer_path.DatePath,SidNavQuote_path.ConfYesBtn)
    //     await actionsWrappers.Click(common.closeCardQuote)
    //     await quotefilter_fn.ClearFilter(QuotefilterPath.AllFilterTab,QuotefilterPath.ClearAllBtn,QuotefilterPath.ApplyBtn)
    //   });

    // it('should Clone the latest version of quote', async () => {
    //     await Quote_fn.open() /* its should removed before all the it testcase is run  */
    //     await quotefilter_fn.AddFilter1(QuotefilterPath.AllFilterTab, QuotefilterPath.quoteName,
    //         QuoteFilterIp.RfqQname, QuotefilterPath.ApplyBtn)
    //     await actionsWrappers.Click(QuoteBtnPath.SelectfirstData)
    //     await Quote_fn.cloneQuoteseller(SidNavQuote_path.CreateOrREqApproveBtn, QuoteIp.CreateQuoteBtnTxt, QuoteBtnPath.CreateQuoteBtn, QuoteBtnPath.RequestApproval,
    //         EndCustomer_path.RequiredDateIcon, EndCustomer_path.NextMonthBtn, EndCustomer_path.DatePath, approval_path.Tag, TagIp.tag, approval_path.Tag,
    //         SidNavQuote_path.CreateOrREqApproveBtn, QuoteIp.CreateQuoteBtnTxt, QuoteBtnPath.CreateQuoteBtn, QuoteBtnPath.RequestApproval,
    //         QuoteBtnPath.QuoteConfWindow, QuoteIp.CreateQuoteText, QuoteBtnPath.CreateQuoteName, QuoteIp.QuoteName, QuoteBtnPath.ConfBtn,
    //         QuoteBtnPath.ReqApprovalQuoteName, QuoteIp.QuoteName, QuoteBtnPath.Comments, QuoteIp.comments, QuoteBtnPath.ConfBtn)
    //     await browser.pause(2000)
    //     await quotefilter_fn.ClearFilter(QuotefilterPath.AllFilterTab, QuotefilterPath.ClearAllBtn, QuotefilterPath.ApplyBtn)

    // });
    // it('should cancel the created cloned Quote', async () => {
    //     await browser.pause(2000)
    //     await Quote_fn.cancelQuote(QuoteBtnPath.SelectfirstData, SidNavQuote_path.MoreOptionBtn, SidNavQuote_path.CancelQuoteBtn,
    //         SidNavQuote_path.CancelMsgBox, SidnavIp.cancelMsg1, QuoteBtnPath.ConfBtn)
    //     await actionsWrappers.Click(common.closeCardQuote)

    // });
    // it('should clone the order lost quote',async () => {
    //     await Quote_fn.open() /* its should removed before all the it testcase is run  */
    //     await quotefilter_fn.AddFilter(QuotefilterPath.AllFilterTab, QuotefilterPath.QuoteStatus,QuoteFilterIp.QuoteStatus6)
    //     await actionsWrappers.Click(QuoteBtnPath.SelectfirstData)
    //     await Quote_fn.cloneQuoteseller(SidNavQuote_path.CreateOrREqApproveBtn, QuoteIp.CreateQuoteBtnTxt, QuoteBtnPath.CreateQuoteBtn, QuoteBtnPath.RequestApproval,
    //         EndCustomer_path.RequiredDateIcon, EndCustomer_path.NextMonthBtn, EndCustomer_path.DatePath, approval_path.Tag, TagIp.tag, approval_path.Tag,
    //         SidNavQuote_path.CreateOrREqApproveBtn, QuoteIp.CreateQuoteBtnTxt, QuoteBtnPath.CreateQuoteBtn, QuoteBtnPath.RequestApproval,
    //         QuoteBtnPath.QuoteConfWindow, QuoteIp.CreateQuoteText, QuoteBtnPath.CreateQuoteName, QuoteIp.QuoteName, QuoteBtnPath.ConfBtn,
    //         QuoteBtnPath.ReqApprovalQuoteName, QuoteIp.QuoteName, QuoteBtnPath.Comments, QuoteIp.comments, QuoteBtnPath.ConfBtn)
    //     await browser.pause(2000)
    //     await quotefilter_fn.ClearFilter(QuotefilterPath.AllFilterTab, QuotefilterPath.ClearAllBtn, QuotefilterPath.ApplyBtn)   
    // });

    // it('should create SPR Quote as a buyer then as a seller it will review the RFQ quote', async () => {
    //     await LoginPage.open();
    //     await LoginPage.login(B2B_loginIp.Buyer3Email, B2B_loginIp.Buyer3Password);
    //     await actionsWrappers.urlValidation("/dev3.myapptino.com/");
    //     await cart_fn.ClickAndclearCart(cart_path.cartIcon);
    //     await browser.pause(4000)
    //     await cart_fn.selectProducts(CartIp.itemName);
    //     await browser.pause(4000)
    //     await assert.strictEqual(
    //         await common.snackbar.getText(), CartIp.cartAlert);
    //     await cart_fn.SerchProdUpdateQuanty(CartIp.itemName1, CartIp.ProdQty)
    //     await actionsWrappers.Click(cart_path.createQuote)
    //     await cart_fn.UpdateQuantyAlert(CartIp.ProdQty1, cart_path.createQuote)
    //     await browser.pause(3000)
    //     await ApplyDiscount_fn.ApplyTargetPriceOrDisc(ApplyDiscount_path.TargetDiscount, ApplyDiscount_path.TargetDiscount,
    //         ApplyDiscountIp.ByDiscount)
    //     await EndCustomer_fn.RequiredDateFieldBuyer(QuoteBtnPath.BuyerReqForQuoteBtn,
    //         EndCustomer_path.RequiredDateIcon, EndCustomer_path.NextMonthBtn, EndCustomer_path.DatePath)
    //     await browser.pause(5000)
    //     await EndCustomer_fn.BuyerSPRFieldValid(QuoteBtnPath.BuyerReqForQuoteBtn, EndCustomer_path.BuyerEndCusRefNum, EndCustomerIp.EndCusRefNum,
    //         EndCustomer_path.EndCusName, EndCustomerIp.EndCusName, EndCustomer_path.ProjectName, EndCustomerIp.EndCusProject, EndCustomer_path.BuyerEndCusCompitetor,
    //         EndCustomerIp.EndCusCompititers, EndCustomer_path.PriceJustification, EndCustomerIp.EndCusPriceJustification)
    //     await browser.pause(3000)
    //     await actionsWrappers.Click(QuoteBtnPath.BuyerReqForQuoteBtn)
    //     await Quote_fn.createQuote(QuoteBtnPath.CreateQuoteName, QuoteIp.SPRQuoteName, QuoteBtnPath.ConfBtn)
    //     await browser.pause(9000)
    //     await LogOutPage.logout(LogOutPage.logouticon, LogOutPage.logoutBtn, common.snackbar,
    //         B2B_loginIp.logoutAlertMsg)
    //     await browser.pause(5000)
    //     await LoginPage.open();
    //     await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
    //     await actionsWrappers.urlValidation("/dev3.myapptino.com/");
    //     await Quote_fn.open()
    //     await browser.pause(5000)
    //     await quotefilter_fn.AddFilter1(QuotefilterPath.AllFilterTab, QuotefilterPath.quoteName,
    //         QuoteFilterIp.SPRQuoteName, QuotefilterPath.ApplyBtn)
    //     await browser.pause(5000)
    //     await Quote_fn.RespondReviewQuote(QuoteBtnPath.SelectfirstData, SidNavQuote_path.RespondBtn, QuoteBtnPath.RequestApproval,
    //         QuoteBtnPath.Comments, QuoteBTnsIp.comments, QuoteBtnPath.ConfBtn,
    //         SidNavQuote_path.SubmitReviewBtn, QuoteBtnPath.Comments, QuoteBTnsIp.comments, QuoteBtnPath.ConfBtn)
    //     await actionsWrappers.Click(common.closeCardQuote)
    // });
    // it('should add aditional discount & given Tareget Discount also to the SPR Quote and Review & respond to buyer', async () => {
    //     await browser.refresh()
    //     await browser.pause(5000)
    //     await quotefilter_fn.MultipleFilter(QuotefilterPath.AllFilterTab, QuotefilterPath.quoteName, QuoteFilterIp.SPRQuoteName,
    //         QuotefilterPath.QuoteStatus, QuoteFilterIp.QuoteStatus8, QuotefilterPath.ApplyBtn)
    //     await Quote_fn.RespondReviewQuote(QuoteBtnPath.SelectfirstData, SidNavQuote_path.ReviewBtn, SidNavQuote_path.SubmitReviewBtn,
    //         QuoteBtnPath.Comments, QuoteBTnsIp.comments, QuoteBtnPath.ConfBtn,
    //         SidNavQuote_path.SubmitReviewBtn, QuoteBtnPath.Comments, QuoteBTnsIp.comments, QuoteBtnPath.ConfBtn)
    //     await actionsWrappers.Click(common.closeCardQuote)
    //     await browser.refresh()
    //     await browser.pause(5000)
    //     await quotefilter_fn.AddFilter(QuotefilterPath.AllFilterTab, QuotefilterPath.QuoteStatus, QuoteFilterIp.QuoteStatus9)
    //     await ApplyDiscount_fn.respondQuoteWithApplyDis(QuoteBtnPath.SelectfirstData, ApplyDiscount_path.ByDiscountBtn,ApplyDiscount_path.TargetDisSeller,ApplyDiscount_path.ApplyDisApply,
    //         ApplyDiscount_path.ByDiscountBtn,ApplyDiscount_path.AddOnDisSeller,ApplyDiscount_path.ByDiscountInput,ApplyDiscountIp.ByDiscount,ApplyDiscount_path.ApplyDisApply,
    //         ApplyDiscount_path.IncreaseBtn,ApplyDiscount_path.ApplyDisApply,
    //         EndCustomer_path.RequiredDateIcon,EndCustomer_path.NextMonthBtn, EndCustomer_path.DatePath, SidNavQuote_path.ConfYesBtn)
    //     await actionsWrappers.Click(common.closeCardQuote)
    //     await quotefilter_fn.ClearFilter(QuotefilterPath.AllFilterTab, QuotefilterPath.ClearAllBtn, QuotefilterPath.ApplyBtn)

    // });

    it('Complete approval flow with all the users available mapped in tags',async () => {
        await approvals_fn.open();
        await approvals_fn.CreateApprGrp1(approvalsip.approvName2,approvals_path.ConfSavelBtn)
        await browser.pause(2000)
        await approvals_fn.AddUserGrp(approvalsip.grpName1,approvalsip.approver1,approvalsip.approver1,approvals_path.ConfSavelBtn)
        await approvals_fn.AddUserGrp(approvalsip.grpName2,approvalsip.approver3,approvalsip.approver3,approvals_path.ConfSavelBtn)
        await approvals_fn.AddRange(approvalsip.endRange,approvalsip.grpName1,approvals_path.ConfSavelBtn)
        await approvals_fn.AddRange(approvalsip.endRange1,approvalsip.grpName2,approvals_path.ConfSavelBtn)

    });


    // it('should logged out from the application',async () => {
    //     await LogOutPage.logout(LogOutPage.logouticon,LogOutPage.logoutBtn,common.snackbar,
    //         B2B_loginIp.logoutAlertMsg)

    // });

});
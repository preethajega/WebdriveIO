const assert = require("assert");
const path = require("path");
const cart_path = require("../../../../PageObjects/BrowsePages/Cart");
const common = require("../../../../PageObjects/Common/commonObjects");
const LoginPage = require("../../../../PageObjects/Login.page");
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
const OrderFIlterIp = require("../../../../Inputs/salesModule/summarypage/OrderFilterCardIp")



describe("cart Page", () => {


    //  it("Should allow to access login ", async () => {
    //     await LoginPage.open();
    //     await LoginPage.login(B2B_loginIp.Buyer3Email, B2B_loginIp.Buyer3Password);
    //     await actionsWrappers.urlValidation("/dev3.myapptino.com/");
    // })
    // it("cart to summary page ", async () => {
    //     await cart_fn.ClickAndclearCart(cart_path.cartIcon);
    //     await browser.pause(3000)
    //     await cart_fn.selectProducts(CartIp.itemName);
    //     await browser.pause(3000)
    //     await assert.strictEqual(
    //     await common.snackbar.getText(), CartIp.cartAlert);
    //     await cart_fn.SerchProdUpdateQuanty(CartIp.itemName1, CartIp.ProdQty)
    //     await actionsWrappers.Click(cart_path.createQuote)
    //     await cart_fn.UpdateQuantyAlert(CartIp.ProdQty1)
    // })

    // it('should add a Required date field',async () => {
    //     await EndCustomer_fn.RequiredDateFieldBuyer(QuoteBtnPath.BuyerReqForQuoteBtn,
    //         EndCustomer_path.RequiredDateIcon,EndCustomer_path.NextMonthBtn,EndCustomer_path.DatePath,)
    // });
    // it('should create a RFQ Quote',async () => {
    //     await browser.pause(5000)
    //     await actionsWrappers.Click(QuoteBtnPath.BuyerReqForQuoteBtn)
    //     await Quote_fn.createQuote(QuoteBtnPath.CreateQuoteName,QuoteIp.QuoteName,QuoteBtnPath.ConfBtn)
    // });
    // it('should validate that crated quote is placed on the landing page',async () => {
    //     await browser.pause(3000)
    //     await Quote_fn.QuoteNameValidation(QuoteBtnPath.QuoteOrderEditFirst,QuoteBtnPath.QuoteOrderNameInput,QuoteIp.QuoteName)
    //     await browser.pause(5000)
    // });
    /* It will directly take us Quotes Landing Page */
  // it('should navigate to the Quotes landing page',async () => {
  // await LoginPage.open();
  // await LoginPage.login(B2B_loginIp.Buyer3Email, B2B_loginIp.Buyer3Password);
  // await actionsWrappers.urlValidation("//dev3.myapptino.com/");
  //   await Quote_fn.open();
  //   await actionsWrappers.urlValidation("/Quotes/Quote-landing");
  // });
  // it('should edit the landing page',async () => {
  //     await browser.pause(5000)
  //     await actionsWrappers.checkClickableAnddoubleClick(QuoteBtnPath.QuoteOrderEditFirst)
  // });
    // it('should Edit the created RFQ and update for new version as a buyer',async () => {
    //     await browser.pause(5000)
    //     await actionsWrappers.Click(SidNavQuote_path.EditQuoteBtn)
    //     await ApplyDiscount_fn.ApplyTargetPriceOrDisc(ApplyDiscount_path.TargetDiscount,ApplyDiscount_path.TargetDiscount,ApplyDiscountIp.ByDiscount1)
    //     await EndCustomer_fn.QuoteEditSpr(SidNavQuote_path.SumbitBtn,EndCustomer_path.BuyerEndCusRefNum,EndCustomer_path.BuyerEndCusRefNum,EndCustomerIp.EndCusRefNum,
    //         EndCustomer_path.EndCusName,EndCustomerIp.EndCusName,EndCustomer_path.ProjectName,EndCustomerIp.EndCusProject,EndCustomer_path.BuyerEndCusCompitetor,
    //         EndCustomerIp.EndCusCompititers,EndCustomer_path.PriceJustification,EndCustomerIp.EndCusPriceJustification)
    //     await browser.pause(3000)
    //     await EndCustomer_fn.SumbitVersionQuoteBox(SidNavQuote_path.ConfYesBtn)
    // });
    // it('should Export the cretaed RFQ as a PDF',async () => {
    //   await browser.pause(3000)
    //   await sidnav_fn.DownlaodPdf()
    // });
    // it('should Clone the latest version of quote',async () => {
    //   await Quote_fn.cloneQuote(QuoteBtnPath.CreateOrREqApproveBtn,QuoteIp.CreateQuoteBtnTxt,QuoteBtnPath.CreateQuoteBtn,QuoteBtnPath.BuyerSidNavReqForQuoteBtn,
    //     EndCustomer_path.RequiredDateIcon,EndCustomer_path.NextMonthBtn,EndCustomer_path.DatePath,approval_path.Tag, TagIp.tag, approval_path.Tag,
    //     QuoteBtnPath.CreateOrREqApproveBtn,QuoteIp.CreateQuoteBtnTxt,QuoteBtnPath.CreateQuoteBtn,QuoteBtnPath.BuyerSidNavReqForQuoteBtn,
    //         QuoteBtnPath.QuoteConfWindow,QuoteIp.CreateQuoteText,QuoteBtnPath.CreateQuoteName,QuoteIp.QuoteName,QuoteBtnPath.ConfBtn,
    //         QuoteBtnPath.CreateQuoteName,QuoteIp.QuoteName,QuoteBtnPath.ConfBtn)
    // });
    // it('should cancel the created cloned Quote',async () => {
    //   await browser.pause(2000)
    //   await Quote_fn.cancelQuote(QuoteBtnPath.SelectfirstData,SidNavQuote_path.MoreOptionBtn,SidNavQuote_path.CancelQuoteBtn,
    //     SidNavQuote_path.CancelMsgBox,SidnavIp.cancelMsg1,QuoteBtnPath.ConfBtn) 
    // });
    // it('should Download the products from Quote in excel',async () => {
    //   await browser.pause(5000)
    //   await Quote_fn.ExportProduct(QuoteBtnPath.SelectfirstData,SidNavQuote_path.ExportBtn)
    // });
    // it('should cancel the inprogress Quote',async () => {
    //   await browser.pause(5000)
    //   await quotefilter_fn.AddFilterTemp(QuotefilterPath.TempFilterBtn,QuotefilterPath.QuoteStatus,QuoteFilterIp.QuoteStatus3)
    //   await browser.pause(3000)
    //   await Quote_fn.cancelQuote(QuoteBtnPath.SelectfirstData,SidNavQuote_path.MoreOptionBtn,SidNavQuote_path.CancelQuoteBtn,
    //     SidNavQuote_path.CancelMsgBox,SidnavIp.cancelMsg1,QuoteBtnPath.ConfBtn) 
    //   await actionsWrappers.snackBarValidate(common.snackbar,QuoteFilterIp.quotecancelMsg)
    // });
    /******* create a Quote with SPR ******** */
        it("cart to summary page Select product, update qty and move to quote cart and Save RFQ with SPR ", async () => {
        await cart_fn.ClickAndclearCart(cart_path.cartIcon);
        await browser.pause(3000)
        await cart_fn.selectProducts(CartIp.itemName);
        await browser.pause(3000)
        await assert.strictEqual(
        await common.snackbar.getText(), CartIp.cartAlert);
        await cart_fn.SerchProdUpdateQuanty(CartIp.itemName1, CartIp.ProdQty)
        await actionsWrappers.Click(cart_path.createQuote)
        await cart_fn.UpdateQuantyAlert(CartIp.ProdQty1)
    })


    
});
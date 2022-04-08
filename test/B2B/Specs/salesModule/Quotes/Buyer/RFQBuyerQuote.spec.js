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


describe("cart Page", () => {


     it("Should allow to access login ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.Buyer3Email, B2B_loginIp.Buyer3Password);
        await actionsWrappers.urlValidation("/dev3.myapptino.com/");
    })
    it("cart to summary page ", async () => {
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

    it('should add a Required date field',async () => {
        await EndCustomer_fn.RequiredDateFieldBuyer(QuoteBtnPath.BuyerReqForQuoteBtn,
            EndCustomer_path.RequiredDateIcon,EndCustomer_path.NextMonthBtn,EndCustomer_path.DatePath,)
    });
    it('should create a Quote',async () => {
        await browser.pause(5000)
        await actionsWrappers.Click(QuoteBtnPath.BuyerReqForQuoteBtn)
        await Quote_fn.createQuote(QuoteBtnPath.CreateQuoteName,QuoteIp.QuoteName,QuoteBtnPath.ConfBtn)
    });
    it('should validate that crated quote is placed on the landing page',async () => {
        await browser.pause(3000)
        await Quote_fn.QuoteNameValidation(QuoteBtnPath.QuoteOrderEditFirst,QuoteBtnPath.QuoteOrderNameInput,QuoteIp.QuoteName)
        await browser.pause(5000)
    });
    
});
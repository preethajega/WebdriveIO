const QuotefilterPath = require("../../../../PageObjects/SalesModule/summarypage/QuoteFilterCard.page");
const LoginPage = require("../../../../PageObjects/Login.page");
const B2B_loginIp = require("../../../../Inputs/B2B_login");
const actionsWrappers = require("../../../../../CommonActions/ActionsWrappers");
const Quoteip=require("../../../../Inputs/salesModule/summarypage/QuoteFilterCardIp")
const Quotebtn=require("../../../../CommonFunctions/salesModule/SalesCards/QuoteBtn")
const QuoteFilterCommon=require("../../../../CommonFunctions/salesModule/SalesCards/Quotefiltercard1")



describe("Quote filter ", async () => {
   
it('Should allow to access login First Two value' , async () => {
    await LoginPage.open();
    await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
    await actionsWrappers.urlValidation("/dev3.myapptino.com/");
    await Quotebtn.open()
    await browser.pause(5000)

    await actionsWrappers.HoverAndClick(QuotefilterPath.Name,QuotefilterPath.NameButton,QuotefilterPath.ColumnsButton)
    await QuoteFilterCommon.CheckTheButton(QuotefilterPath.AttSubTotal,QuotefilterPath.SubTotalEnableButton)
    await browser.pause(2000)
    await actionsWrappers.Click(QuotefilterPath.CloseTheTab)
    await browser.pause(2000)

    await QuoteFilterCommon.ClickDoubleSetValue(QuotefilterPath.AllFilterTab,QuotefilterPath.scrollToEle,QuotefilterPath.StartValue,Quoteip.StartValue,QuotefilterPath.EndValue,Quoteip.EndValue,QuotefilterPath.ApplyBtn)
    await actionsWrappers.scrollEle(QuotefilterPath.ScrollThSubTotal)
    await QuoteFilterCommon.ValidationDoubleValue(QuotefilterPath.TdSubTotal,Quoteip.StartValue,Quoteip.EndValue)
    await browser.pause(4000)
    await QuoteFilterCommon.ClearAllandApply(QuotefilterPath.AllFilterTab,QuotefilterPath.ClearAllBtn,QuotefilterPath.ApplyBtn)

})

it('Should allow to access Secound Two value' , async () => {

    await actionsWrappers.scrollEle(QuotefilterPath.Name)
    await browser.pause(4000)
    await actionsWrappers.HoverAndClick(QuotefilterPath.Name,QuotefilterPath.NameButton,QuotefilterPath.ColumnsButton)
    await QuoteFilterCommon.CheckTheButton(QuotefilterPath.AttTaxable,QuotefilterPath.TaxableEnableButton)
    await browser.pause(2000)
    await actionsWrappers.Click(QuotefilterPath.CloseTheTab)
    await browser.pause(2000)
   
    await QuoteFilterCommon.ClickDoubleSetValue(QuotefilterPath.AllFilterTab,QuotefilterPath.scrollToEle,QuotefilterPath.StartTaxableAmount,Quoteip.StartTaxableAmount,QuotefilterPath.EndTaxableAmount,Quoteip.EndTaxableAmount,QuotefilterPath.ApplyBtn)
    await actionsWrappers.scrollEle(QuotefilterPath.ScrollThTaxableAmount)
    await browser.pause(5000)
    await QuoteFilterCommon.ValidationDoubleValue(QuotefilterPath.TdTaxableAmount,Quoteip.StartTaxableAmount,Quoteip.EndTaxableAmount)
    await browser.pause(5000)
    await QuoteFilterCommon.ClearAllandApply(QuotefilterPath.AllFilterTab,QuotefilterPath.ClearAllBtn,QuotefilterPath.ApplyBtn)

})

it('Should allow to access Third Two value' , async () => {

    await actionsWrappers.scrollEle(QuotefilterPath.Name)
    await browser.pause(2000)
    await actionsWrappers.HoverAndClick(QuotefilterPath.Name,QuotefilterPath.NameButton,QuotefilterPath.ColumnsButton)
    await QuoteFilterCommon.CheckTheButton(QuotefilterPath.AttTotal,QuotefilterPath.TotalEnableButton)
    await browser.pause(2000)
    await actionsWrappers.Click(QuotefilterPath.CloseTheTab)
    await browser.pause(2000)

   
    await QuoteFilterCommon.ClickDoubleSetValue(QuotefilterPath.AllFilterTab,QuotefilterPath.scrollToEle,QuotefilterPath.StartTotal,Quoteip.StartTotal,QuotefilterPath.EndTotal,Quoteip.EndTotal,QuotefilterPath.ApplyBtn)
    await actionsWrappers.scrollEle(QuotefilterPath.ScrollThTotal)
    await browser.pause(2000)
    await QuoteFilterCommon.ValidationDoubleValue(QuotefilterPath.TdTotal,Quoteip.StartTotal,Quoteip.EndTotal)
    await browser.pause(2000)
    await QuoteFilterCommon.ClearAllandApply(QuotefilterPath.AllFilterTab,QuotefilterPath.ClearAllBtn,QuotefilterPath.ApplyBtn)

})

})

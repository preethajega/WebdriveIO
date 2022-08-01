const LoginPage = require("../../../../PageObjects/Login.page");
const B2B_loginIp = require("../../../../Inputs/B2B_login");
const actionsWrappers=require("../../../../../CommonActions/ActionsWrappers")
const landing=require("../../../../CommonFunctions/salesModule/SalesCards/OrderFilterCard")
const filtercommon=require("../../../../CommonFunctions/salesModule/SalesCards/Quotefiltercard1")
const OrderPage=require("../../../../PageObjects/SalesModule/summarypage/OrderFilterCard.page")
const Orderip=require("../../../../Inputs/salesModule/summarypage/OrderFilterCardIp")



describe('Order Filder', async() => {

    it('Should allow order filter1', async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dev3.myapptino.com/");
        await landing.open();
        await browser.pause(10000)

        await actionsWrappers.HoverAndClick(OrderPage.Name,OrderPage.NameButton,OrderPage.ColumnsButton)
        await filtercommon.CheckTheButton(OrderPage.AttSubTotal,OrderPage.SubTotalEnableButton)
        await browser.pause(2000)
        await actionsWrappers.Click(OrderPage.CloseTheTab)
        await browser.pause(2000)

        await filtercommon.ClickDoubleSetValue(OrderPage.AllFilterTab,OrderPage.scrollToEle,OrderPage.StartValue,Orderip.StartValue,OrderPage.EndValue,Orderip.EndValue,OrderPage.ApplyBtn)
        await browser.pause(4000)
        await actionsWrappers.scrollEle(OrderPage.ScrollTdSubTotal)
        await filtercommon.ValidationDoubleValue(OrderPage.TdSubTotal,Orderip.StartValue,Orderip.EndValue)
        await browser.pause(3000);
        await filtercommon.ClearAllandApply(OrderPage.AllFilterTab,OrderPage.ClearAllBtn,OrderPage.ApplyBtn)
    });

    it('Should allow order filter2', async () => {
        await actionsWrappers.scrollEle(OrderPage.ScrollOrderId)
        await browser.pause(4000)
        await actionsWrappers.HoverAndClick(OrderPage.Name,OrderPage.NameButton,OrderPage.ColumnsButton)
        await filtercommon.CheckTheButton(OrderPage.AttTaxable,OrderPage.TaxableEnableButton)
        await browser.pause(2000)
        await actionsWrappers.Click(OrderPage.CloseTheTab)
        await browser.pause(2000)

        await filtercommon.ClickDoubleSetValue(OrderPage.AllFilterTab,OrderPage.scrollToEle,OrderPage.StartTaxableAmount,Orderip.StartTaxableAmount,OrderPage.EndTaxableAmount,Orderip.EndTaxableAmount,OrderPage.ApplyBtn)
        await actionsWrappers.scrollEle(OrderPage.ScrollTdTaxableamount)
        await browser.pause(4000)
        await filtercommon.ValidationDoubleValue(OrderPage.TdTaxableAmount,Orderip.StartTaxableAmount,Orderip.EndTaxableAmount)
        await browser.pause(3000);
        await filtercommon.ClearAllandApply(OrderPage.AllFilterTab,OrderPage.ClearAllBtn,OrderPage.ApplyBtn)
    });

    it('Should allow order filter3', async () => {
        await actionsWrappers.scrollEle(OrderPage.ScrollOrderId)
        await browser.pause(4000)
        await actionsWrappers.HoverAndClick(OrderPage.Name,OrderPage.NameButton,OrderPage.ColumnsButton)
        await filtercommon.CheckTheButton(OrderPage.AttTotal,OrderPage.TotalEnableButton)
        await browser.pause(2000)
        await actionsWrappers.Click(OrderPage.CloseTheTab)
        await browser.pause(2000)
        
        await filtercommon.ClickDoubleSetValue(OrderPage.AllFilterTab,OrderPage.scrollToEle,OrderPage.StartTotal,Orderip.StartTotal,OrderPage.EndTotal,Orderip.EndTotal,OrderPage.ApplyBtn)
        await actionsWrappers.scrollEle(OrderPage.ScrollTdTotal)
        await browser.pause(4000)
        await filtercommon.ValidationDoubleValue(OrderPage.TdTotal,Orderip.StartTotal,Orderip.EndTotal)
        await browser.pause(3000);
        await filtercommon.ClearAllandApply(OrderPage.AllFilterTab,OrderPage.ClearAllBtn,OrderPage.ApplyBtn)
    });

    
});
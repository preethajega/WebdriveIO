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
const CalIP=require('../../../Inputs/salesModule/summarypage/ProductTableCal_IP')
const financialpage=require('../../../PageObjects/SalesModule/summarypage/finicialSummaryCard.page')
const priceDetailpage=require('../../../PageObjects/SalesModule/summarypage/ApplyDiscountCard.page')
const ApplyDisCommon=require('../../../CommonFunctions/salesModule/SalesCards/ApplyDiscountCard')
const ApplyDisIP=require('../../../Inputs/salesModule/summarypage/ApplyDiscountIP')


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
      await actionsWrappers.scrollEle(prodTable_path.ScrolProduct);
      await actionsWrappers.clearAndsetValue(prodTable_path.unitListPrice(0),CalIP.ULP2)
      await browser.pause(3000)
      await actionsWrappers.clearAndsetValue(prodTable_path.discount(0),CalIP.DIS2)
      await browser.pause(2000)
      const value1=await prodTable_fn.UnitPriceCalc1(CalIP.ULP2,CalIP.DIS2)
      const value2=await prodTable_fn.eleValue(prodTable_path.unitPrice(0))
      await prodTable_fn.Validation(value1,value2)
        //  await browser.refresh()
        //  await browser.pause(5000)
      
    });

    it("Change the Unit Price & Cost Check the margin ",async () => {
      // await actionsWrappers.scrollEle(prodTable_path.unitListPrice(0));
      await actionsWrappers.clearAndsetValue(prodTable_path.unitPrice(1),CalIP.UP)
      await browser.pause(3000)
      await actionsWrappers.clearAndsetValue(prodTable_path.productCost(1),CalIP.Cost1)
      await browser.pause(2000)
      const value1=await prodTable_fn.MarginCalc1(CalIP.UP,CalIP.Cost1)
      const value2=await prodTable_fn.eleValue(prodTable_path.margin(1))
      await prodTable_fn.Validation(value1,value2)
      await browser.pause(5000)
      await browser.refresh()
      await browser.pause(5000)        
    });

    it('Change the Unit Price & Cost & addon cost Check the margin',async () => {
      await actionsWrappers.clearAndsetValue(prodTable_path.unitPrice(1),CalIP.UP)
      await browser.pause(4000)
      await actionsWrappers.clearAndsetValue(prodTable_path.productCost(1),CalIP.Cost1)
      await browser.pause(4000)
      await actionsWrappers.clearAndsetValue(prodTable_path.addonCost(1),CalIP.Addoncost)
      await browser.pause(3000)
      const value1=await prodTable_fn.MarginCalcwithAddon1(CalIP.UP,CalIP.Cost1,CalIP.Addoncost)
      await browser.pause(2000)
      const value2=await prodTable_fn.eleValue(prodTable_path.margin(1))
      await prodTable_fn.Validation(value1,value2)
      await browser.pause(3000)
    });

    it("Change the Unit Price & Cost Check the DMC ",async () => {
      await prodTable_fn.ChangeDMCorGM()
      await actionsWrappers.scrollEle(prodTable_path.ScrolProduct)
      await actionsWrappers.clearAndsetValue(prodTable_path.unitPrice(1),CalIP.UP)
      await browser.pause(3000)
      await actionsWrappers.clearAndsetValue(prodTable_path.productCost(1),CalIP.Cost1)
      await browser.pause(2000)
      const value1=await prodTable_fn.DMCCal1(CalIP.Cost1,CalIP.UP)
      const value2=await prodTable_fn.eleValue(prodTable_path.dmc(1))
      await prodTable_fn.Validation(value1,value2)
      
    });

     it('Change the Unit Price & Cost & addon cost Check the DMC',async () => {
      await actionsWrappers.clearAndsetValue(prodTable_path.unitPrice(1),CalIP.UP)
      await browser.pause(3000)
      await actionsWrappers.clearAndsetValue(prodTable_path.productCost(1),CalIP.Cost1)
      await browser.pause(2000)
      await actionsWrappers.clearAndsetValue(prodTable_path.addonCost(1),CalIP.Addoncost)
      await browser.pause(2000)
      const value1=await prodTable_fn.DMCCalwithAddon1(CalIP.UP,CalIP.Cost1,CalIP.Addoncost)
      await browser.pause(2000)
      const value2=await prodTable_fn.eleValue(prodTable_path.dmc(1))
      await prodTable_fn.Validation(value1,value2)
      await browser.pause(3000)
      await prodTable_fn.ChangeDMCorGM()

    });

    it('Amount Calculation',async () => {
      await actionsWrappers.scrollEle(prodTable_path.ScrolProduct)
       await prodTable_fn.AddedTwoValue(prodTable_path.unitPrice(1),CalIP.UP,prodTable_path.askedQuantity(1),CalIP.Qty3)
       const value1=await prodTable_fn.Amuntcal1(CalIP.UP,CalIP.Qty3)
       await browser.pause(2000)
       const value2=await prodTable_fn.eleText(prodTable_path.Amount(2))
       await prodTable_fn.Validation(value1,value2)
       await browser.pause(2000)
    });

    it('PF calculation',async () => {
      // await actionsWrappers.clearAndsetValue(prodTable_path.unitPrice(1),CalIP.UP)
      await actionsWrappers.clearAndsetValue(financialpage.PFInput1,CalIP.PF)
      await browser.pause(2000)
      const value1=await prodTable_fn.unitPFCalc1(await prodTable_fn.eleText(prodTable_path.Amount(2)),CalIP.PF)
      await browser.pause(2000)
      const value2=await prodTable_fn.eleText(prodTable_path.PFrate(2))
      await prodTable_fn.Validation(value1,value2)
    });

    it('Split AddOn Cost',async () => {
      await prodTable_fn.AddedTwoValue(prodTable_path.askedQuantity(0),CalIP.Qty1,prodTable_path.askedQuantity(1),CalIP.Qty1,)
      await prodTable_fn.AddedThreeValue(prodTable_path.productCost(0),CalIP.Cost1,prodTable_path.productCost(1),CalIP.Cost2,financialpage.AddOnCostInput1,CalIP.Addoncost)
      // ROW1 //
      const value1=await prodTable_fn.SplitAddOnCostRow1(CalIP.Cost1,CalIP.Cost2,CalIP.Addoncost)
      await browser.pause(2000)
      const value2=await prodTable_fn.eleValue(prodTable_path.addonCost(0))
      await prodTable_fn.Validation(value1,value2)
      await browser.pause(2000)
      // ROW2 //
      const value3=await prodTable_fn.SplitAddOnCostRow2(CalIP.Cost1,CalIP.Cost2,CalIP.Addoncost)
      await browser.pause(2000)
      const value4=await prodTable_fn.eleValue(prodTable_path.addonCost(1))
      await prodTable_fn.Validation(value3,value4)
      await browser.pause(2000)

    });

    it('Split Shipping Charges',async () => {
      await prodTable_fn.AddedTwoValue(prodTable_path.askedQuantity(0),CalIP.Qty1,prodTable_path.askedQuantity(1),CalIP.Qty1)
      await prodTable_fn.AddedThreeValue(prodTable_path.unitPrice(0),CalIP.UP,prodTable_path.unitPrice(1),CalIP.UP1,financialpage.ShippingCharge1,CalIP.shipCharge)
      // ROW1 //
      const value1=await prodTable_fn.SplitShippingChargeRow1(CalIP.UP,CalIP.UP1,CalIP.shipCharge)
      await browser.pause(2000)
      const value2=await prodTable_fn.eleValue(prodTable_path.shippingCharges(0))
      await prodTable_fn.Validation(value1,value2)
      await browser.pause(2000)
      // ROW2 //
      const value3=await prodTable_fn.SplitShippingChargeRow2(CalIP.UP,CalIP.UP1,CalIP.shipCharge)
      await browser.pause(2000)
      const value4=await prodTable_fn.eleValue(prodTable_path.shippingCharges(1))
      await prodTable_fn.Validation(value3,value4)
      await browser.pause(2000)

    });

    it('Check The Cost (Excl. Add-on cost) & Total cost',async () => {
      await actionsWrappers.scrollEle(prodTable_path.ScrolProduct);
      await prodTable_fn.AddedTwoValue(prodTable_path.productCost(0),CalIP.Cost1,prodTable_path.askedQuantity(0),CalIP.Qty2)
      await prodTable_fn.AddedTwoValue(prodTable_path.productCost(1),CalIP.Cost2,prodTable_path.askedQuantity(1),CalIP.Qty3)
      const value1=await prodTable_fn.Cost_Excl_Addoncost(CalIP.Cost1,CalIP.Qty2,CalIP.Cost2,CalIP.Qty3)
      await browser.pause(2000)
      const value2=await prodTable_fn.eleText(financialpage.Cost_ExcludeAddOnCostValue1)
      await prodTable_fn.Validation(value1,value2)
      await browser.pause(3000)

      ////// Change The AddonCost Check The Total Cost //////
      await actionsWrappers.clearAndsetValue(financialpage.AddOnCostInput1,CalIP.Addoncost)
      const value3=await prodTable_fn.TotalCost(CalIP.Cost1,CalIP.Qty2,CalIP.Cost2,CalIP.Qty3,CalIP.Addoncost)
      const value4=await prodTable_fn.eleText(financialpage.CostValue1)
      await prodTable_fn.Validation(value3,value4)
      await browser.pause(3000)
    });

    it('Check The GM & OverAll GM',async () => {
      await actionsWrappers.scrollEle(prodTable_path.ScrolProduct);
      await prodTable_fn.AddedTwoValue(prodTable_path.askedQuantity(0),CalIP.Qty1,prodTable_path.askedQuantity(1),CalIP.Qty1)
      await prodTable_fn.AddedTwoValue(prodTable_path.unitPrice(0),CalIP.UP,prodTable_path.productCost(0),CalIP.Cost1)
      await prodTable_fn.AddedTwoValue(prodTable_path.unitPrice(1),CalIP.UP1,prodTable_path.productCost(1),CalIP.Cost2)
      const value1=await prodTable_fn.FinancialGM(CalIP.UP,CalIP.UP1,CalIP.Cost1,CalIP.Cost2)
      await browser.pause(3000)
      const value2=await prodTable_fn.eleText1(financialpage.GM_ExcludeAddOnCostValue1)
      await prodTable_fn.Validation(value1,value2)
      await browser.pause(3000)

      ///// Change the AddOnCost & Check The Over All Margin ///////

      await actionsWrappers.clearAndsetValue(financialpage.AddOnCostInput1,CalIP.Addoncost)
      const value3=await prodTable_fn.FinancialOverAllGM(CalIP.UP,CalIP.UP1,CalIP.Cost1,CalIP.Cost2,CalIP.Addoncost)
      await browser.pause(3000)
      const value4=await prodTable_fn.eleText1(financialpage.OverAllGM_CostValue1)
      await prodTable_fn.Validation(value3,value4)
      await browser.pause(3000)
      
    });

    it('Check The DMC & OverAll DMC',async () => {
      await prodTable_fn.ChangeDMCorGM()
      await actionsWrappers.scrollEle(prodTable_path.ScrolProduct);
      await prodTable_fn.AddedTwoValue(prodTable_path.askedQuantity(0),CalIP.Qty1,prodTable_path.askedQuantity(1),CalIP.Qty1)
      await prodTable_fn.AddedTwoValue(prodTable_path.unitPrice(0),CalIP.UP,prodTable_path.productCost(0),CalIP.Cost1)
      await prodTable_fn.AddedTwoValue(prodTable_path.unitPrice(1),CalIP.UP1,prodTable_path.productCost(1),CalIP.Cost2)
      const value1=await prodTable_fn.FinancialDMC(CalIP.Cost1,CalIP.Cost2,CalIP.UP,CalIP.UP1)
      await browser.pause(3000)
      const value2=await prodTable_fn.eleText1(financialpage.DMC_ExcludeAddOnCostValue1)
      await prodTable_fn.Validation(value1,value2)
      await browser.pause(3000)

    //   ///// Change the AddOnCost & Check The Over All DMC ///////

      await actionsWrappers.clearAndsetValue(financialpage.AddOnCostInput1,CalIP.Addoncost)
      const value3=await prodTable_fn.FinancialOverAllDMC(CalIP.Cost1,CalIP.Cost2,CalIP.Addoncost,CalIP.UP,CalIP.UP1)
      await browser.pause(3000)
      const value4=await prodTable_fn.eleText1(financialpage.OverAllDMC_CostValue1)
      await prodTable_fn.Validation(value3,value4)
      await browser.pause(3000)
      await prodTable_fn.ChangeDMCorGM()
    });

    it('Change the addon cost in product table & check the financial card',async () => {
      
      /////// Change the Addon Cost in single product ///////
      await actionsWrappers.scrollEle(prodTable_path.ScrolProduct);
      await prodTable_fn.AddedTwoValue(prodTable_path.addonCost(0),CalIP.Addoncost,prodTable_path.askedQuantity(0),CalIP.Qty3)
      const value1=await prodTable_fn.Amuntcal1(CalIP.Addoncost,CalIP.Qty3)
      await browser.pause(2000)
      const value2=await prodTable_fn.eleValue(financialpage.AddOnCostInput1)
      await prodTable_fn.Validation(value1,value2)
      await browser.pause(2000)

      /////// Change the addon cost in Two product  ////////

        await prodTable_fn.AddedTwoValue(prodTable_path.addonCost(0),CalIP.Addoncost,prodTable_path.askedQuantity(0),CalIP.Qty2)
        await prodTable_fn.AddedTwoValue(prodTable_path.addonCost(1),CalIP.Addoncost1,prodTable_path.askedQuantity(1),CalIP.Qty3)
        const value3=await prodTable_fn.Cost_Excl_Addoncost(CalIP.Addoncost,CalIP.Qty2,CalIP.Addoncost1,CalIP.Qty3)
        await browser.pause(2000)
        const value4=await prodTable_fn.eleValue(financialpage.AddOnCostInput1)
        await prodTable_fn.Validation(value3,value4)
        await browser.pause(3000)
    });

    it('Change the Shipping charge in product table & check the financial card and price detail',async () => {
      
      /////// Change the shipping charge in single product ///////
      await actionsWrappers.scrollEle(prodTable_path.ScrolProduct);
      await prodTable_fn.AddedTwoValue(prodTable_path.shippingCharges(0),CalIP.shipCharge,prodTable_path.askedQuantity(0),CalIP.Qty3)
      const value1=await prodTable_fn.Amuntcal1(CalIP.shipCharge,CalIP.Qty3)
      await browser.pause(2000)
      const value2=await prodTable_fn.eleValue(financialpage.ShippingCharge1)
      await browser.pause(2000)
      const value3=await prodTable_fn.eleText(priceDetailpage.ShippingChargeTxtValue)
      await prodTable_fn.Validation1(value1,value2,value3)
      await browser.pause(2000)

      ///// Change the shipping charge in Two product  ////////

        await prodTable_fn.AddedTwoValue(prodTable_path.shippingCharges(0),CalIP.shipCharge,prodTable_path.askedQuantity(0),CalIP.Qty2)
        await prodTable_fn.AddedTwoValue(prodTable_path.shippingCharges(1),CalIP.shipCharge1,prodTable_path.askedQuantity(1),CalIP.Qty3)
        const value4=await prodTable_fn.Cost_Excl_Addoncost(CalIP.shipCharge,CalIP.Qty2,CalIP.shipCharge1,CalIP.Qty3)
        await browser.pause(2000)
        const value5=await prodTable_fn.eleValue(financialpage.ShippingCharge1)
        const value6=await prodTable_fn.eleText(priceDetailpage.ShippingChargeTxtValue)
        await prodTable_fn.Validation1(value4,value5,value6)
        await browser.pause(3000)
    });

    it('Apply Discount Card',async () => {
      ////// New Sub Total /////
      await ApplyDisCommon.ApplyDiscBYAddOnOverAllDis(priceDetailpage.ByAmountBtn,priceDetailpage.NewSubTotal,priceDetailpage.ByAmountInput,ApplyDisIP.NewsubTot1,priceDetailpage.ApplyDisApply)
      await browser.pause(3000)
      await prodTable_fn.NewSubTotal(prodTable_path.Amount(1),prodTable_path.Amount(2),priceDetailpage.SubTotalTxtValue)
      await browser.pause(2000)
      await ApplyDisCommon.ResetDiscount(priceDetailpage.NewSubTotal,priceDetailpage.ApplyDisReset)
      ///// Discount Amount /////
      await ApplyDisCommon.ApplyDiscBYAmount(priceDetailpage.DiscountAmntBtn,priceDetailpage.ByAmountInput,ApplyDisIP.ByAmount,priceDetailpage.ApplyDisApply)
      await browser.pause(2000)
      await prodTable_fn.NewSubTotal(prodTable_path.Amount(1),prodTable_path.Amount(2),priceDetailpage.SubTotalTxtValue)
      ////// Over All Discount /////
      await ApplyDisCommon.ApplyDiscBYAddOnOverAllDis(priceDetailpage.ByDiscountBtn,priceDetailpage.OverAllDisSeller,priceDetailpage.ByDiscountInput,ApplyDisIP.ByDiscount,priceDetailpage.ApplyDisApply)
      await browser.pause(2000)
      await prodTable_fn.ByDiscount(prodTable_path.unitListPrice(0),prodTable_path.discount(0),prodTable_path.unitPrice(0),prodTable_path.askedQuantity(0),prodTable_path.Amount(1),prodTable_path.Amount(2),priceDetailpage.SubTotalTxtValue)
      await ApplyDisCommon.ResetDiscount(priceDetailpage.ByDiscountBtn,priceDetailpage.ApplyDisReset)
      ////// Add On Discount //////

      // await ApplyDisCommon.ApplyDiscBYAmount(priceDetailpage.AddOnDiscount,priceDetailpage.ByDiscountInput,ApplyDisIP.ByDiscount1,priceDetailpage.ApplyDisApply)
      // await ApplyDisCommon.IncreseDecreseDis(priceDetailpage.IncreaseBtn,priceDetailpage.ApplyDisApply)
      // await browser.pause(2000)
      // await ApplyDisCommon.IncreseDecreseDis(priceDetailpage.DecreaseBtn,priceDetailpage.ApplyDisApply)

      await prodTable_fn.AddOnDis(ApplyDisIP.ByDiscount)
    });

    it('Check The Round Up',async () => {
      //// Change the unit price And Quantity ////
      await prodTable_fn.RemoveProd(prodTable_path.CheckBox,prodTable_path.RemoveBtn,prodTable_path.YesBtn)
      await prodTable_fn.AddedTwoValue(prodTable_path.unitPrice(0),CalIP.UP2,prodTable_path.askedQuantity(0),CalIP.Qty1)
      await browser.pause(2000)

      ///// PlusOne //////
      let value=await prodTable_fn.RoundUpcal(priceDetailpage.RoundUpPlusOne,priceDetailpage.RoundUpPlusOne)
      await browser.pause(1000)
      await actionsWrappers.Click1(priceDetailpage.RoundUpApply)
      await browser.pause(2000)
      let value2=await prodTable_fn.eleValue(prodTable_path.unitPrice(0))
      await prodTable_fn.Validation(value,value2)
      await ApplyDisCommon.RoundUp(priceDetailpage.RoundUpPlusOne,priceDetailpage.RoundUpReset)

      ////// plus Two /////
    let value3=await prodTable_fn.RoundUpcal(priceDetailpage.RoundUpPlusTwo,priceDetailpage.RoundUpPlusTwo)
    await browser.pause(1000)
    await actionsWrappers.Click1(priceDetailpage.RoundUpApply)
    await browser.pause(2000)
    let value4=await prodTable_fn.eleValue(prodTable_path.unitPrice(0))
    await prodTable_fn.Validation(value3,value4)
    await ApplyDisCommon.RoundUp(priceDetailpage.RoundUpPlusTwo,priceDetailpage.RoundUpReset)

      ////// Minus One //////
    let value5=await prodTable_fn.RoundUpcal(priceDetailpage.RoundUpMinusOne,priceDetailpage.RoundUpMinusOne)
    await browser.pause(1000)
    await actionsWrappers.Click1(priceDetailpage.RoundUpApply)
    await browser.pause(2000)
    let value6=await prodTable_fn.eleValue(prodTable_path.unitPrice(0))
    await prodTable_fn.Validation(value5,value6)
    await ApplyDisCommon.RoundUp(priceDetailpage.RoundUpMinusOne,priceDetailpage.RoundUpReset)

      ////// Minus Two //////
    let value7=await prodTable_fn.RoundUpcal(priceDetailpage.RoundUpMinusTwo,priceDetailpage.RoundUpMinusTwo)
    await browser.pause(1000)
    await actionsWrappers.Click1(priceDetailpage.RoundUpApply)
    await browser.pause(2000)
    let value8=await prodTable_fn.eleValue(prodTable_path.unitPrice(0))
    await prodTable_fn.Validation(value7,value8)
    await ApplyDisCommon.RoundUp(priceDetailpage.RoundUpMinusTwo,priceDetailpage.RoundUpReset)

    //    ///// Zero //////
    let value9=await prodTable_fn.RoundUpcal(priceDetailpage.RoundUpZero,priceDetailpage.RoundUpZero)
    await browser.pause(1000)
    await actionsWrappers.Click1(priceDetailpage.RoundUpApply)
    await browser.pause(2000)
    let value10=await prodTable_fn.eleValue(prodTable_path.unitPrice(0))
    await prodTable_fn.Validation(value9,value10)
    await ApplyDisCommon.RoundUp(priceDetailpage.RoundUpZero,priceDetailpage.RoundUpReset)
     });

});
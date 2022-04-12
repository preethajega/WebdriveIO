const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const EndCusip = require("../../../Inputs/salesModule/summarypage/EndCustomerIp");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const assert = require("assert");
const Tag_fn = require("../../../CommonFunctions/salesModule/SalesCards/tag")
const EndCustomer_path = require("../../../PageObjects/SalesModule/summarypage/EndCustomerCard.page");




class EndCusCard extends Page {

    Tag = async (Tagpath, TagIp,tagpath) => {
        await actionWrapper.clearValueAndSetValueSelectDropdown(Tagpath, TagIp)
        await actionWrapper.Click(tagpath)
    }
    QuoteBtnIdentify = async(sumbitBtn,sumbitIp,CreateQuoteBtn,ReqApprovalBtn)=>{
        console.log(await sumbitBtn.getText());
        if ((await sumbitBtn.getText()) === sumbitIp) 
        {
            await actionWrapper.Click(CreateQuoteBtn)
            await browser.pause(2000)
        }
        else
        {
            await actionWrapper.Click(ReqApprovalBtn)
            await browser.pause(2000)
        }
    }

    DateSelecter = async(validFromPath,NextMonBtn,datepath)=>{
        await actionWrapper.MoveTo(validFromPath)
        await browser.pause(2000)
        await actionWrapper.Click(NextMonBtn)
        await browser.pause(1000)
        await actionWrapper.Click(datepath)
    }
    SPRFieldsFill =async(CusNumPath,CusNumIp,CusNamePath,CusNameIp,ProjectNamePath,ProjectNameIp,competitorpath,competitorIp,
        PriceJustifiPath,PriceJustifiIp)=>{
        await actionWrapper.clickAndSetvalue(CusNumPath,CusNumIp)
        await actionWrapper.clickAndSetvalue(CusNamePath,CusNameIp)
        await actionWrapper.clickAndSetvalue(ProjectNamePath,ProjectNameIp)
        await actionWrapper.clickSetvalueAndSelectoption(competitorpath,competitorIp)
        await actionWrapper.clickAndSetvalue(PriceJustifiPath,PriceJustifiIp)
    }
    SPRFiledUpdate = async(CusNumPath,CusNumIp,CusNamePath,CusNameIp,ProjectNamePath,ProjectNameIp,competitorpath,competitorIp,
        PriceJustifiPath,PriceJustifiIp)=>{
        await actionWrapper.clearAndsetValue(CusNumPath,CusNumIp)
        await actionWrapper.clearAndsetValue(CusNamePath,CusNameIp)
        await actionWrapper.clearAndsetValue(ProjectNamePath,ProjectNameIp)
        await actionWrapper.clearValueAndSetValueSelectDropdown(competitorpath,competitorIp)
        await actionWrapper.clearAndsetValue(PriceJustifiPath,PriceJustifiIp)
    }
    SPRFieldValidate = async(fieldPath,Fieldpaths,snakip)=>{
        await actionWrapper.MoveTo(fieldPath)
        await actionWrapper.snackBarValidate(Fieldpaths,snakip)
    }
    RequiredDateValid = async(sumbitBtn,sumbitIp,CreateQuoteBtn,ReqApprovalBtn,validFromPath,NextMonBtn,datepath,Tagpath, TagIp,tagpath)=>{
        await this.QuoteBtnIdentify(sumbitBtn,sumbitIp,CreateQuoteBtn,ReqApprovalBtn)
        if (await common.snackbar.isDisplayed()){
            if ((await common.snackbar.getText()) === EndCusip.ReqDeliveryDate) {
                await browser.pause(3000)
                await actionWrapper.scrollEle(EndCustomer_path.RequiredDate)
                await browser.pause(2000)
                this.DateSelecter(validFromPath,NextMonBtn,datepath)       
            }
            else{
                await browser.pause(3000)
                await this.Tag(Tagpath, TagIp,tagpath)
            }
        }
    }
    /************ BUYER SIDE METHOD ************ */

    RequiredDateFieldBuyer = async(btnpath,validFromPath,NextMonBtn,datepath)=>{
        await actionWrapper.Click(btnpath)
        if ((await common.snackbar.getText()) === EndCusip.ReqDeliveryDate) {
            await browser.pause(3000)
            await actionWrapper.scrollEle(EndCustomer_path.RequiredDate)
            await browser.pause(2000)
            this.DateSelecter(validFromPath,NextMonBtn,datepath)       
        }
    }
    QuoteEditSpr = async(btnpath,CusNumPath1,CusNumPath,CusNumIp,CusNamePath,CusNameIp,ProjectNamePath,ProjectNameIp,competitorpath,
        competitorIp,PriceJustifiPath,PriceJustifiIp)=>{
        await actionWrapper.Click(btnpath)
        await browser.pause(2000)
        if ((await EndCustomer_path.ErrCusName.isDisplayed()) === true ) {
            await browser.pause(2000)
            await actionWrapper.MoveTo(CusNumPath1)
            await this.BuyerSPRFieldsFill(CusNumPath,CusNumIp,CusNamePath,CusNameIp,ProjectNamePath,ProjectNameIp,
                competitorpath,competitorIp,PriceJustifiPath,PriceJustifiIp)
        }
    }
    BuyerSPRFieldsFill =async(CusNumPath,CusNumIp,CusNamePath,CusNameIp,ProjectNamePath,ProjectNameIp,competitorpath,competitorIp,
        PriceJustifiPath,PriceJustifiIp)=>{
        await actionWrapper.clickAndSetvalue(CusNumPath,CusNumIp)
        await browser.pause(2000)
        await actionWrapper.clickAndSetvalue(CusNamePath,CusNameIp)
        await browser.pause(2000)
        await actionWrapper.clickAndSetvalue(ProjectNamePath,ProjectNameIp)
        await browser.pause(2000)
        // await actionWrapper.MoveTo(competitorpath)
        await browser.pause(2000)
        await actionWrapper.clickSetvalueAndSelectoption1(competitorpath,competitorIp)
        await browser.pause(2000)
        await actionWrapper.clickAndSetvalue(PriceJustifiPath,PriceJustifiIp)

    }

}
module.exports = new EndCusCard();
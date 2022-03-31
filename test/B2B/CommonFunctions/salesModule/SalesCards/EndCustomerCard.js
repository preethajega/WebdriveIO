const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
// const compIp = require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const assert = require("assert");



class EndCusCard extends Page {

    DateSelecter = async(validFromPath,NextMonBtn,datepath)=>{
        await actionWrapper.Click(validFromPath)
        await actionWrapper.Click(NextMonBtn)
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

}
module.exports = new EndCusCard();
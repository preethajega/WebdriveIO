const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const zoneip = require("../../Inputs/settings/zoneIP");
const path = require("../../PageObjects/Settings/zone.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");
const { pathById } = require("../../PageObjects/Settings/zone.page");

class Zone extends Page {
    async open() {
        super.open(zoneip.zoneUrl); 
    }
    AddZone = async()=>{
        await browser.pause(5000)
        await actionWrapper.Click(path.AddZone)
        await browser.pause(2000)
        await actionWrapper.Click(path.DeleData)
        await actionWrapper.Click(path.StayOnPage)
        await actionWrapper.clearAndsetValue(path.zoneName,zoneip.zonename)
        await actionWrapper.Click(path.IsEnabled)
        await actionWrapper.clickSetvalueAndSelectoption(path.Branch,zoneip.branch1)
        await actionWrapper.clickSetvalueAndSelectoption(path.BU,zoneip.Bu1)
        await actionWrapper.Click(path.BU)
        await actionWrapper.clickSetvalueAndSelectSecondOption(path.Country,zoneip.country)
        await actionWrapper.Click(path.AddStateBtn)
        await actionWrapper.ClickElementAndkeyboardVal(path.state,zoneip.state)
        await actionWrapper.Click(path.AddStateBtn)
        await actionWrapper.clickSetvalueAndSelectoption(path.Distric,zoneip.District)
        await actionWrapper.Click(path.AddStateBtn)
        await actionWrapper.clickAndSetvalue(path.Pincode,zoneip.postalcode)
    }
    snakvalid = async(btn,snakpath,snakip)=>{
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(snakpath,snakip)
    }
    Deletezone= async()=>{
        await actionWrapper.Click(path.DeleData)
        await actionWrapper.Click(path.MoreOption)
        await actionWrapper.Click(path.DeleteZone)
    }
    MandtoryFieldvalid = async()=>{
        await actionWrapper.Click(path.AddZone)
        await actionWrapper.Click(path.saveBtn)
    } 

}
module.exports = new Zone();
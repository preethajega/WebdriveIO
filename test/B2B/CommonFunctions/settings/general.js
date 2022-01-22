const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const genIp = require("../../Inputs/settings/GeneralIP");
const path = require("../../PageObjects/Settings/General.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class General extends Page {

    async open() {
        super.open(genIp.CompUrl); 
    }
    Addcur = async () =>{
        await actionWrapper.Click(path.AddCurBtn)
        await actionWrapper.clearAndsetValue(path.Code,genIp.code)
        await actionWrapper.Click(path.Name)
        await actionWrapper.clearValue_selectDropdownvalue(path.Format,genIp.format)
        await actionWrapper.clickAndSetvalue(path.Symbol,genIp.symbol)
        await actionWrapper.clearAndsetValue(path.Factor,genIp.factor)
    }
}
module.exports = new General();
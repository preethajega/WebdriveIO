const Page = require("../../../../B2B/PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const common = require("../../../PageObjects/Common/commonObjects");
const path = require("../../../PageObjects/SalesModule/summarypage/ProductTable.page");
const assert = require("assert");

class productTable extends Page {
    ProdTableclearAndSetvalue = async(Inputpath,Inputvalue)=>{
        await browser.pause(5000)
        await actionsWrappers.clearAndsetValue(Inputpath,Inputvalue);

    }
}
module.exports = new productTable();
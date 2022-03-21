const Page = require("../../../PageObjects/page");

class EndCustomerCard extends Page{

/* ************* QUOTE VAIDITY DATE ************* */
    get validFrom(){
        return super.pathByXpath('(//*[text()="Quote Validity"]/following::input[1])[last()]');
    } 

    get validTo(){
        return super.pathByXpath('(//*[text()="Quote Validity"]/following::input[2])[last()]');
    } 
    get reorderBtn(){
        return super.pathById('reorder');
    }    

/* ************* SPR FIELDS  ************* */

    get EndCusName(){
        return super.pathByName('sprDetails.companyName')
    }
    get ProjectName(){
        return super.pathByName('sprDetails.projectName')
    }
    get CompetitorName(){
        return super.pathByName('sprDetails.competitorNames')
    }
    get PriceJustification(){
        return super.pathByName('sprDetails.priceJustification')
    }

}
module.exports = new(EndCustomerCard);


const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const compIp = require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const assert = require("assert");



class EndCusCard extends Page {

    SPRFields =async(CusNamePath,CusNameIp,ProjectNamePath,ProjectNameIp,competitorpath,competitorIp,PriceJustifiPath,PriceJustifiIp)=>{
        await actionWrapper.clickAndSetvalue(CusNamePath,CusNameIp)
        await actionWrapper.clickAndSetvalue(ProjectNamePath,ProjectNameIp)
        await actionWrapper.clickSetvalueAndSelectoption(competitorpath,competitorIp)
        await actionWrapper.clickAndSetvalue(PriceJustifiPath,PriceJustifiIp)
    }

}
module.exports = new EndCusCard();
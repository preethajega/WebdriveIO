const Page = require("../../../PageObjects/page");
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
// const compIp = require("../../Inputs/settings/CompanyIP");
const attchmentUpload = require("../../../../CommonActions/attchmentUpload");
const common = require("../../../PageObjects/Common/commonObjects");
const assert = require("assert");


class TermsCard extends Page{
    get DeleiverTerm(){
        return super.pathById('deliveryTermsId')
    }
    get PaymentTerm(){
        return super.pathById('paymentTermsId')
    }
    get WarrentyTerm(){
        return super.pathById('warrantyId')
    }
    get PFTerm(){
        return super.pathById('pkgFwdId')
    }
    get ModeOfDispatchTerm(){
        return super.pathById('dispatchInstructionsId')
    }
    get FreightTerm(){
        return super.pathById('freightId')
    }
    get InsuranceTerm(){
        return super.pathById('insuranceId')
    }
    get AddtionalTerm(){
        return super.pathByXpath('//textarea[@name="additionalTerms"]')
    }

}
module.exports = new(TermsCard);



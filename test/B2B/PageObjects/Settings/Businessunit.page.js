const Page = require("../../../B2B/PageObjects/page");

class BU extends Page {
    get addSymbol() {
        return super.pathByXpath('//button[@aria-label="Add business unit"]')
    }
    get options() {
        return super.pathByName('[3].unitName')
    }
    get priority(){
        return super.pathByName('[3].priority')
    }
    get savebtn(){
        return super.pathByXpath('//h5[text()="Options"]/preceding::button[1]');
    }
    get toaster(){
        return super.pathById('client-snackbar');
    }
    get options1(){
        return super.pathByName('[4].unitName')
    }
    get priority1(){
        return super.pathByName('[4].priority')
    }
    get errormsg(){
        return super.pathById('MSETT_PT_CD_4-helper-text')
    }
    get options2(){
        return super.pathByName('[5].unitName')
    }
    get priority2(){
        return super.pathByName('[5].priority')
    }
    get cancelbtn(){
        return super.pathByXpath('//h5[text()="Options"]/preceding::button[2]')
    }
    get DeleteMPDbtn(){
        return super.pathById('MSETT_PT_CDEL_0')
    }
    get deletebtn(){
        return super.pathById('MSETT_PT_CDEL_3')
    }
}
module.exports = new BU();


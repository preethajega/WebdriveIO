const Page = require("../../../B2B/PageObjects/page");

class Compiti extends Page {

    get compfield() {
        return super.pathByXpath('(//input[contains(@name,"competitorName")])[last()]')
    }
    get DeleCompti(){
        return super.pathByXpath('(//button[@aria-label="Delete Terms"])[last()]')
    }
    get Savebtn(){
        return super.pathByXpath('//h5[text()="Options"]/preceding::button[1]')
        // return super.pathByXpath('//div[contains(@class,"MuiToolbar-root Mui")]/button[2]')
        // return super.pathByXpath('//button[@aria-label="Save"]')
    }
    get CancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get AddCompbtn(){
        return super.pathByXpath('//button[@aria-label="Add competitors"]')
    }


}
module.exports = new Compiti();
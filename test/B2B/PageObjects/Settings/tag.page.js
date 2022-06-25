const Page = require("../../../B2B/PageObjects/page");

class Tag extends Page{
    get GeneralTag(){
        return super.pathByName('tagsForm[0].lsTags')
    }
    get TeamTag(){
        return super.pathByName('tagsForm[1].lsTags')
    }
    get customerTag(){
        return super.pathByName('tagsForm[2].lsTags')
    }
    get DeleteMapedGen(){
        return super.pathByXpath('(//*[contains(@class,"deleteIconSmall")])[1]')
    }
    get TerityDeletedata(){
        return super.pathByXpath('(//*[contains(@class,"deleteIconSmall")])[3]')
    }
    get DeleteMapedTeam(){
        return super.pathByXpath('(//*[contains(@class,"deleteIconSmall")])[5]')
    }
    get DeleteMapedCus(){
        return super.pathByXpath('(//*[contains(@class,"deleteIconSmall")])[10]')
    }

    get GenDeletedata(){
        return super.pathByXpath('(//*[contains(@class,"deleteIconSmall")])[last()]')
    }
    get Savebtn(){
        return super.pathByXpath('//button[@id="loadingButton"]')
    }
    get CancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    
}
module.exports = new Tag();

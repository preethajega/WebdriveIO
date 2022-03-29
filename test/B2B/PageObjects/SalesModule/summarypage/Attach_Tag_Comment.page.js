const Page = require("../../../PageObjects/page");

class AttachTagComment extends Page {

    /* ************* ATTACHMENT CARD ************* */
    get SideNavAttach() {
        return super.pathByXpath('//label[@for="attachments-editSideNav"]//span[@role="button"]')
    }
    get QuoteOrderAttach() {
        return super.pathByXpath('//span[@role="button"]')
    }
    get attachDeleFirst(){
        return super.pathByXpath('(//button[@aria-label="delete"])[1]')
    }
    get attachDeleLast(){
        return super.pathByXpath('(//button[@aria-label="delete"])[last()]')
    }
    get ConfCancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get ConfYesBtn(){
        return super.pathByXpath('//button[@aria-label="Yes"]')
    }

    /* ************* TAG CARD ************* */
    get Tag() {
        return super.pathByXpath('//input[@id="tags-outlined"]')
    }
    get TagEdit(){
        return super.pathByXpath('//div[@class="MuiBox-root css-k008qs"]/button')
    }
    get TagSave(){
        return super.pathByXpath('(//div[@class="MuiBox-root css-k008qs"]/button)[last()]')
    }
    get TagCancel(){
        return super.pathByXpath('(//div[@class="MuiBox-root css-k008qs"]/button)[1]')
    }
    get clearAllTag(){
        return super.pathByXpath('//*[@placeholder="Search for tags"]/following-sibling::div/button[@title="Clear"]')
    }

    /* ************* COMMENTS CARD ************* */


    /* ************* APPROVAL CARD ************* */
    get ApprovalGrp() {
        return super.pathByXpath('//input[@id="ApprovalGroup"]')
    }

    /* ************* CURRENCY CARD ************* */
    get currency() {
        return super.pathById('currencyDashboard')
    }
    get currencyClear(){
        return super.pathByXpath('(//label[text()="Currency"]/following::div/button[1])[1]')
    }
    get CurrFactor(){
        return super.pathByName('cfactor')
    }
}
module.exports = new AttachTagComment();

const Page = require("../../../B2B/PageObjects/page");

class Zone extends Page{
    get AddZone(){
        return super.pathByXpath('//button[@aria-label="Add Zone"]')
    }
    get MoreOption(){
        return super.pathByXpath('//button[@aria-label="moreOptions"]')
    }
    get DeleteZone(){
        return super.pathByXpath('//ul[@role="menu"]/li')
    }
    get ConfDeleBtn(){
        return super.pathByXpath('//button[@aria-label="Delete"]')
    }
    get ConfCancelBtn(){
        return super.pathByXpath('//button[text()="Cancel"]')
    }

    get zoneName(){
        return super.pathByName('zoneName')
    }
    get IsEnabled(){
        return super.pathByXpath('//div[contains(@class,"MuiListItemS")]')
    }
    get Branch(){
        return super.pathByXpath('(//input[contains(@name,"branchId")])[last()]')
    }
    get BU(){
        return super.pathByXpath('(//input[contains(@name,"businessUnitId")])[last()]')
    }
    get AddBranchBu(){
        return super.pathByXpath('(//button[@aria-label="Add business units"])[last()]')
    }
    get DeleBranchBU(){
        return super.pathByXpath('(//button[@aria-label="Delete business units"])[last()]')
    }
    get Country(){
        return super.pathById('countries')
    }
    get AddStateBtn(){
        return super.pathByXpath('//button[contains(@class,"MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeS")]')
    }
    get state(){
        return super.pathById('states')
    }
    get Distric(){
        return super.pathByXpath('//input[@placeholder="Search by district"]')
    }
    get Pincode(){
        return super.pathByName('pincode')
    }
    get Clear(){
        return super.pathByXpath('(//button[@aria-label="Clear"])[last()]')
    }
    get saveBtn(){
        return super.pathByXpath('//button[@aria-label="Save"]')
    }
    get CancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get errBranch(){
        return super.pathByXpath('//p[text()="Required"]')
    }
    get DeleData(){
        return super.pathByXpath('(//div[@class="scrollbar-container ps"]/div)[last()]')
    }
    get StayOnPage(){
        return super.pathByXpath('//div[@class="SnackbarItem-action"]/button[1]')
    }

}
module.exports = new Zone();

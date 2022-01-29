const Page = require("../../../B2B/PageObjects/page");

class Team extends Page{
    //add User card
    get AddUserbtn (){
        return super.pathByXpath('//button[@aria-label="Add User"]')
    }
    get Name(){
        return super.pathByName('displayName')
    }
    get Code(){
        return super.pathByName('userCode')
    }
    get MobileNo(){
        return super.pathByName('mobileNo')
    }
    get Email(){
        return super.pathByName('email')
    }
    get JobTitle(){
        return super.pathByName('jobTitle')
    }
    get Department(){
        return super.pathByName('department')
    }
    get Role(){
        return super.pathByXpath('//input[@name="roleName"]')
    }
    get Savebtn(){
        return super.pathByXpath('//button[@id="loadingButton"]')
    }
    get CancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get Closecard(){
        return super.pathByXpath('//button[@aria-label="close"]')
    }
    
    get ErrormsgName(){
        return super.pathByXpath("//p[text()='Name required']") 
    }
    get ErrormsgEmail(){
        return super.pathByXpath("//p[text()='Email id required']") 
    }
    get ErrormsgRole(){
        return super.pathByXpath("//p[text()='Role is Required']") 
    }
    get EmailexistMsg(){
        return super.pathByXpath("//p[text()='Email id already exists']")
    }
    get Editdata(){
        return super.pathByXpath('//table/tbody/tr[12]')
    }
    get Editdata1(){
        return super.pathByXpath('//table/tbody/tr[11]')
    }
    get UserInviteBtn(){
        return super.pathByXpath('//button[@aria-label="Invite"]')
    }

    //
    get refershbtn (){
        return super.pathByXpath('//button[@aria-label="refresh"]')
    }
    get Editbtn(){
        return super.pathByXpath("//span[text()='Edit']")
    }
    get Tags(){
        return super.pathByXpath('//input[@placeholder="Search"]')
    }
    get DeleteTag(){
        return super.pathByXpath('//div[@role="combobox"]/div/div/div[3]/button[@aria-label="Clear"]')
    }
    get BUAddBtn(){
        return super.pathById("addNew")
    }
    get Branch1(){
        return super.pathById("branch0")
    }
    get BU1(){
        return super.pathById("businessUnit0")
    }
    get Branch2(){
        return super.pathById("branch1")
    }
    get BU2(){
        return super.pathById("businessUnit1")
    }
    get Branch3(){
        return super.pathById("branch2")
    }
    get BU3(){
        return super.pathById("businessUnit2")
    }
    get DeleteBU1(){
        return super.pathByXpath('//div[@class="MuiCardContent-root css-2c2xgk"]/div[1]/div[2]/div[3]')
    }
    get DeleteBU2(){
        return super.pathByXpath('//div[@class="MuiCardContent-root css-2c2xgk"]/div[1]/div[3]/div[3]')
    }
    get DeleteBU3(){
        return super.pathByXpath('//div[@class="MuiCardContent-root css-2c2xgk"]/div[1]/div[4]/div[3]')
    }
    get ErrormsgBU(){
        return super.pathById('branch2-helper-text')
    }
    get MoreOptionbtn (){
        return super.pathByXpath('//button[@aria-label="moreOptions"]')
    }
    get Activatebtn(){
        return super.pathByXpath("//span[text()='Activate']")
    }
    get ConfYesBtn(){
        return super.pathByXpath('//button[@aria-label="Yes"]')
    }
    get ConfcancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get Deletebtn(){
        return super.pathByXpath("//span[text()='Delete']")
    }
    get Inactivebtn(){
        return super.pathByXpath("//span[text()='Inactivate']")
    }
    get SwapRolebtn(){
        return super.pathByXpath("//span[text()='Swap Owner Role']")
    }
    get Reinvitebtn(){
        return super.pathByXpath("//span[text()='Reinvite']")
    }
   


}
module.exports = new Team();
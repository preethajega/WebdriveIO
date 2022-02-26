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
        return super.pathByXpath('(//table/tbody/tr)[last()]')
    }
    get Editdata1(){
        return super.pathByXpath('//table/tbody/tr[22]')
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
        return super.pathByXpath('//div[contains(@class,"MuiContainer-root MuiContainer-m")]/div[2]//button[@aria-label="Clear"]')
    }
    get BUAddBtn(){
        return super.pathById("addNew")
    }
    get Branch(){
        return super.pathByXpath('(//input[@placeholder="Search A Branch"])[last()]')
    }
    get BU(){
        return super.pathByXpath('(//input[@placeholder="Search A Business Unit"])[last()]')
    }
    get DeleteBU(){
        return super.pathByXpath('(//button[@id="deleteBU"])[last()]')
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
        return super.pathByXpath("//button[@aria-label='moreOptions']")
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
   get errMail(){
       return super.pathByXpath('//p[text()="Email id already exists"]')
   }
   get InvaliMail(){
       return super.pathByXpath('//p[text()="Invalid email id"]')
   }


}
module.exports = new Team();
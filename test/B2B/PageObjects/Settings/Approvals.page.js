const Page = require("../../../B2B/PageObjects/page");

class Approval extends Page{
    get CreateApprBtn(){
        return super.pathByXpath('//button[@aria-label="Create Approval"]')
    }
    get MoreOptionbtn (){
        return super.pathByXpath('//button[@aria-label="moreOptions"]')
    }
    get EditAprgrp(){
        return super.pathById('editApproval')
    }
    get DeleteApr(){
        return super.pathById('deleteApproval')
    }
    get Refershbtn (){
        return super.pathByXpath('//button[@aria-label="refresh"]')
    }
    get ConfYesBtn(){
        return super.pathByXpath('//button[@aria-label="Yes"]')
    }
    get ConfDeleBtn(){
        return super.pathByXpath('//button[@aria-label="Delete"]')
    }
    get ConfcancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get ConfSavelBtn(){
        return super.pathByXpath('//button[@aria-label="Save"]')
    }
    get ApprName(){
        return super.pathByXpath('//input[@name="approvalName"]')
    }
    get ErrApprName(){
        return super.pathByXpath("//p[text()='Name required']")
    }
    get DeleteAprTab(){
        return super.pathByXpath('(//div[@class="scrollbar-container ps"]/div)[last()]')
    }
 //Add group card
    get GrpTab(){
        return super.pathById('wrapped-tab-0')
    }
    get AddGrpbtn(){
        return super.pathById("addNewUserGroup")
    }
    get Precedencebtn(){
        return super.pathById('totalPrecedence')
    }
    get ReviewerBtn(){
        return super.pathByXpath("(//div[contains(@class,'MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-1 c')]/div[1])[last()]")
        //return super.pathByXpath('(//*[starts-with(@id,"isReviewer")])[last()]')
    }
    get ApproverBtn(){
        return super.pathByXpath('(//*[starts-with(@class,"MuiFormControlL")])[last()]')
    }
    get OptionalAppro(){
        return super.pathByXpath('(//div[contains(@class,"MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 j")]/div/div/div/input)[last()]')
    }
    get GrpName(){
        return super.pathByXpath('(//*[starts-with(@id,"groupName")])[last()]')
    }
    get Precedence(){
        return super.pathByXpath('(//*[starts-with(@id,"precedence")])[last()]')
    }
    get Approvers(){
        return super.pathByXpath('(//*[starts-with(@id,"approvers")])[last()]')
    }
    get DefaultAppr(){
        return super.pathByXpath('(//*[starts-with(@id,"defaultApprover")])[last()]')
    }
    get DeleUserGrpbtn(){
        //return super.pathById('removeApproverGroup')
        return super.pathByXpath('(//button[@id="removeApproverGroup"])[last()]')
    }
    get EditUserGrp(){
        return super.pathByXpath('(//div[@id="panel1a-header"])[last()]')
    }
    get ErrOptiApproval(){
        return super.pathByXpath('//p[text()="Required"]')
    }
    get ErrGrpName(){
        return super.pathByXpath("//p[text()='Group Name required']")
    }
    get ErrPrecednce(){
        return super.pathByXpath("//p[text()='Precedence required']")
    }
    get ErrApprover(){
        return super.pathByXpath("//p[text()='Minimum 1 user required']")
    }
 // range card
    get RangTab(){
        return super.pathById('wrapped-tab-1')
    }
    get AddRangebtn(){
        return super.pathById("addNewRange")
    }
    get DeleteRangebtn(){
        return super.pathById('deleteRange')
        //return super.pathByXpath('//button[@id="deleteRange"])[last()']
    }
    get Endrange(){
        return super.pathByXpath('(//*[contains(@name,"endRange")])[last()]')
    }
    get ApprGrpName(){
        return super.pathByXpath('(//*[@placeholder="Search"])[last()]')
    }
    get DeleRannge(){
        return super.pathByXpath("(//*[@id='deleteRange'])[last()]")
    }
    get ErrRangegrpname(){
        return super.pathByXpath("//p[text()='Minimum 1 user group required']")
    }


    
}
module.exports = new Approval();

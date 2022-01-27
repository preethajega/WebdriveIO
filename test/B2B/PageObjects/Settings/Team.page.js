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
        return super.pathByXpath("//span[text()='Save']")
    }
    get CancelBtn(){
        return super.pathByXpath("//span[text()='Cancel']")
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
    get DeleteUser(){
        return super.pathByXpath('//tbody/tr[12]/td/span/span/input[@aria-labelledby="enhanced-table-checkbox-11"]')
    }
    get delete1(){
        return super.pathByXpath("/html/body/div[@id='root']/div[@class='MuiContainer-root MuiContainer-disableGutters']/div[@class='MuiBox-root jss161']/div[@class='MuiGrid-root jss159 MuiGrid-container']/div[@class='MuiGrid-root jss160 MuiGrid-item MuiGrid-grid-md-10']/div[@class='MuiBox-root jss163']/div[@class='MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded']/div[@class='MuiTableContainer-root']/table[@class='MuiTable-root MuiTable-stickyHeader']/tbody[@class='MuiTableBody-root']/tr[@class='MuiTableRow-root MuiTableRow-hover'][12]/td[@class='MuiTableCell-root MuiTableCell-body MuiTableCell-paddingCheckbox MuiTableCell-sizeSmall']")
    }
    get delete(){
        return super.pathByXpath('//input[@aria-labelledby="enhanced-table-checkbox-11"]')
    }


    //
    get refershbtn (){
        return super.pathByXpath('//button[@aria-label="refresh"]')
    }
    get Editbtn(){
        return super.pathByXpath("//span[text()='Edit']")
    }
    get MoreOptionbtn (){
        return super.pathByXpath('//button[@aria-label="moreOption"]')
    }
    get Activatebtn(){
        return super.pathByXpath("//span[text()='Activate']")
    }
    get Deletebtn(){
        return super.pathByXpath("//span[text()='Delete']")
    }
    get ConfYesBtn(){
        return super.pathByXpath("//span[text()='Yes']")
    }
    get ConfcancelBtn(){
        return super.pathByXpath("//span[text()='Cancel']")
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
    get Invitebtn(){
        return super.pathByXpath('//button[aria-label="Invite"]')
    }


}
module.exports = new Team();
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
    get Editdata(){
        return super.pathByXpath('//table/tbody/tr[12]')
    }
    get DeleteUser(){
        return super.pathByXpath('//div[@class="MuiTableContainer-root"]/table/tbody/tr[12]/td/span/span/input')
        //return super.pathByXpath('//tbody/tr[12]/td/span/span/input[@aria-labelledby="enhanced-table-checkbox-11"]')
    }
    get delete1(){
        return super.pathByXpath("/html/body/div[@id='root']/div[@class='MuiContainer-root MuiContainer-disableGutters']/div[@class='MuiBox-root jss161']/div[@class='MuiGrid-root jss159 MuiGrid-container']/div[@class='MuiGrid-root jss160 MuiGrid-item MuiGrid-grid-md-10']/div[@class='MuiBox-root jss163']/div[@class='MuiPaper-root MuiPaper-elevation1 MuiPaper-rounded']/div[@class='MuiTableContainer-root']/table[@class='MuiTable-root MuiTable-stickyHeader']/tbody[@class='MuiTableBody-root']/tr[@class='MuiTableRow-root MuiTableRow-hover'][12]/td[@class='MuiTableCell-root MuiTableCell-body MuiTableCell-paddingCheckbox MuiTableCell-sizeSmall']")
    }
    get delete(){
        return super.pathByXpath('//input[@aria-labelledby="enhanced-table-checkbox-11"]')
    }
    get UserInviteBtn(){
        return super.pathByXpath('//button[@aria-label="Invite"]')
        //return super.pathByXpath('//tbody/tr[12]/td/button[@id="loadingButton"]')
    }

    //
    get refershbtn (){
        return super.pathByXpath('//button[@aria-label="refresh"]')
    }
    get Editbtn(){
        return super.pathByXpath("//span[text()='Edit']")
    }
    get Tags(){
        return super.pathByXpath('//div/div/input[@placeholder="Search"]')
       // return super.pathByXpath('//input[@id='"tag"tags.data.id']')
        //return super.pathByXpath('//input[@placeholder="Search"]')
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
        return super.pathByXpath('//div[@class="MuiCardContent-root"]/div[1]/div[2]/div[3]')
    }
    get DeleteBU2(){
        return super.pathByXpath('//div[@class="MuiCardContent-root"]/div[1]/div[3]/div[3]')
    }
    get DeleteBU3(){
        return super.pathByXpath('//div[@class="MuiCardContent-root"]/div[1]/div[4]/div[3]')
    }
    get ErrormsgBU(){
        return super.pathById('branch0-helper-text')
    }
    get DeleteBU(){
        return super.pathById('deleteBU')
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
   


}
module.exports = new Team();
const Page = require("../../../B2B/PageObjects/page");

class Branch extends Page{

    get AddBranchbtn(){
      return super.pathByXpath('//button[@aria-label="Add Branch"]')
    }
    get SearchCompname(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[1]/div/input")
    }
    get searchcompnameClick(){
        return super.pathByXpath("//div[contains(@class,'pac-contai')]/div[2]/span/span")
    }
    get Branch(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[2]/div/input")
    }
    get AddressLine1(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[3]/div/textarea[1]")
    }
    get AddressLine2(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[4]/div/input")
    }
    get Region(){
         return super.pathById('country')
        //return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[5]/div/div[1]/div/div/button/span")
    }
    get State(){
        return super.pathById('state')
        //return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[5]/div/div[1]/div/input[@id='state']")
    }
    get Distric(){
        return super.pathById('district')
        //return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[5]/div[3]")
    }
    get Zipcode(){
        return super.pathByName('addressId.pinCodeId')
        //return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[5]/div[4]")
    }
    get City(){
        return super.pathByName('addressId.city')
        //return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[5]/div[5]")
    }
    get Lattitude(){
        return super.pathByName('addressId.lattitude')
        //return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[5]/div/div[1]/div/input[@name='addressId.lattitude']")
    }
    get Longitude(){
        return super.pathByName('addressId.longitude')
        //return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[5]/div[6]/div[2]")
    }
    get Billing(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[6]/div/div/label[1]/span/span[1]")
    }
    get Shipping(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[6]/div/div/label[2]/span/span[1]")
    }
    get ABNnumber(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[7]/div/input")
    }
    get BillingCode(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[8]/div[1]/div/input")
    }
    get ShipingCode(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[8]/div[2]/div/input")
    }
    get BranchCode(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[8]/div[3]/div/input")
    }
    get SalesOrgCode(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[8]/div[4]/div/input")
    }
    get ContactName(){
        return super.pathByName('addressId.primaryContact')
        }
    get PhoneNumber(){
        return super.pathByName('addressId.mobileNo')
    }
    get Warehouse(){
       
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[10]/div[1]/div/div/input")
    }
    get DefaultWarehouse(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[10]/div[2]/div/div/input")
    }
    get BusinessUnit(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[2]/div[11]/div/div/div/input")
    }
    get CancelBtn(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[3]/button[1]")
    }
    get SaveBtn(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[3]/button[2]")
    }
    get Deletedata(){
        return super.pathByXpath("//tbody/tr[1]")
    }
    get MapedData(){
        return super.pathByXpath("//tbody/tr[3]")
    }
    get Editdata(){
        return super.pathByXpath("//tbody/tr[1]")
    }
    get DeleteBtn(){
        return super.pathByXpath("//header[contains(@class,'MuiPaper-root MuiAppBar-root MuiAppBar-positionS')]/div[2]/button[1]")
    }
    get EditBtn(){
        return super.pathByXpath("//header[contains(@class,'MuiPaper-root MuiAppBar-root MuiAppBar-positionS')]/div[2]/button[2]")
    }
    get ConformCancelBtn(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogA")]/button[1]')
    }
    get ConformDeleteBtn(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogA")]/button[2]')
    }
}

module.exports = new(Branch);
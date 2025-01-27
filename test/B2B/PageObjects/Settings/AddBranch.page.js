const Page = require("../../../B2B/PageObjects/page");

class Branch extends Page{

    get AddBranchbtn(){
      return super.pathByXpath('//button[@aria-label="Add Branch"]')
    }
    get SearchCompname(){
        return super.pathByName('companyName')
    }
    get searchcompnameClick(){
        return super.pathByXpath("//div[contains(@class,'pac-contai')]/div[2]/span/span")
    }
    get Branch(){
        return super.pathByName('addressId.branchName')
    }
    get AddressLine1(){
        return super.pathByName('addressId.addressLine')
    }
    get AddressLine2(){
        return super.pathByName('addressId.locality')
    }
    get Region(){
         return super.pathById('country')
    }
    get State(){
        return super.pathById('state')
    }
    get Distric(){
        return super.pathById('district')
    }
    get Zipcode(){
        return super.pathByName('addressId.pinCodeId')
    }
    get City(){
        return super.pathByName('addressId.city')
    }
    get Lattitude(){
        return super.pathByName('addressId.lattitude')
    }
    get Longitude(){
        return super.pathByName('addressId.longitude')
    }
    get Billing(){
        return super.pathByXpath('//div[contains(@class,"MuiBox-root css-vxg")]/div/div/label/span/input[@name="addressId.isBilling"]')
       // return super.pathByName('addressId.isBilling')
    }
    get Shipping(){
        return super.pathByXpath('//div[contains(@class,"MuiBox-root css-vxg")]/div/div/label/span/input[@name="addressId.isShipping"]')
        //return super.pathByName('addressId.isShipping')
    }
    get ABNnumber(){
        return super.pathByName('addressId.gst')
    }
    get BillingCode(){
        return super.pathByName('addressId.billToCode')
    }
    get ShipingCode(){
        return super.pathByName('addressId.shipToCode')
    }
    get BranchCode(){
        return super.pathByName('salesBranchCode')
    }
    get SalesOrgCode(){
        return super.pathByName('salesOrgId')
    }
    get DDSalesOrgCode(){
        return super.pathByXpath('//input[@name="salesOrgId"]/following::button[2]')
    }
    get ContactName(){
        return super.pathByName('addressId.primaryContact')
    }
    get countrycode(){
        return super.pathByName('addressId.mobileNoCallingCode')
    }
    get PhoneNumber(){
        return super.pathByName('addressId.mobileNo')
    }
    get Warehouse(){
        return super.pathById('wareHouses')
    }
    get DefaultWarehouse(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogContent-root")]/div[10]/div[2]/div//input')
    }
    get BusinessUnit(){
        return super.pathById('businessUnit')
    }
    get CancelBtn(){
        return super.pathById('editDialogCancel')
    }
    get SaveBtn(){
        return super.pathById('editDialogButton')
    }
    get Deletedata(){
        return super.pathByXpath("//tbody/tr[1]")
    }
    get SelectLastData(){
        return super.pathByXpath("//tbody/tr[last()]")
    }
    get SelectFirstdata(){
        return super.pathByXpath("//tbody/tr[1]")
    }
    get WHClearBtn(){
        return super.pathByXpath('//input[@id="wareHouses"]/following::button[@title="Clear"][1]')
    }
    get BUClearBtn(){
        return super.pathByXpath('//input[@id="businessUnit"]/following::button[@title="Clear"][1]')
    }
    get EditBtn(){
        return super.pathByXpath('(//button[text()="Edit"])[last()]')
    }
    get FirstDeleteBtn(){
        return super.pathByXpath('//tbody/tr[1]//button[@aria-label="clear"]')
    }
    get LastDeleteBtn(){
        return super.pathByXpath('(//button[@aria-label="clear"])[last()]')
    }
    get ConformCancelBtn(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogA")]/button[1]')
    }
    get ConformDeleteBtn(){
        // return super.pathByXpath('//button[@aria-label="Delete"]')
        return super.pathByXpath('//div[contains(@class,"MuiDialogA")]/button[2]')
    }
    get errBranchName(){
        return super.pathByXpath("//p[text()='Branch Name required']")
    }
    get errAddress(){
        return super.pathByXpath("//p[text()='Address required']")
    }
    get errLocality(){
        return super.pathByXpath("//p[text()='Locality is required']")
    }
    get errCountry(){
        return super.pathByXpath("//p[text()='Country required']")
    }
    get errState(){
        return super.pathByXpath("//p[text()='State required']")
    }
    get errDistrict(){
        return super.pathByXpath("//p[text()='District required']")
    }
    get errPincode(){
        return super.pathByXpath("//p[text()='Pincode required']")
    }
    get errCity(){
        return super.pathByXpath("//p[text()='City required']")
    }
    get errTax(){
        return super.pathByXpath("//p[text()='Tax ID required']")
    }
    get errContactNam(){
        return super.pathByXpath("//p[text()='Contact Name is required']")
    }
    get errContactNumb(){
        return super.pathByXpath("//p[text()='Contact No is required']")
    }
}

module.exports = new(Branch);
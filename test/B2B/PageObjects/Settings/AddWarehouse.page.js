const Page = require("../../../B2B/PageObjects/page");

class Warehouse extends Page{

    get AddWarehouseBtn(){
        return super.pathByXpath('//button[@aria-label="Add Warehouse"]')
    }
    get WarehouseName(){
        return super.pathByName('wareHouseName')
    }
    get WarehouseCode(){
        return super.pathByName('wareHousecode')
    }
    get PlantCode(){
        return super.pathByName('plantCode')
    }
    get CompDefaultWarehouse(){
        return super.pathByXpath("//li[contains(@class,'MuiListItem-co')][1]/div[2]")
        //return super.pathByXpath("//li[@class='MuiListItem-container'][1]/div/div")
    }
    get MapwithEsixiting(){
        return super.pathByXpath("//li[contains(@class,'MuiListItem-co')][2]/div[2]")
        //return super.pathByXpath("//li[@class='MuiListItem-container'][2]/div/div")
    }
    get MappedAddress(){
        return super.pathById('address')
    }
    get SearchAddress(){
        return super.pathById('autocomplete')
    }
    get AddressName(){
         return super.pathByXpath("//input[@name='addressId.branchName']")
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
    get Province(){
        return super.pathById('state')
    }
    get District(){
        return super.pathByName('addressId.district')
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
    get ContactName(){
        return super.pathByName('contactPerson')
    }
    get ContactNumber(){
        return super.pathByName('contactNumber')
    }
    get CancelBtn(){
        return super.pathById('editDialogCancel')
    }
    get SaveBtn(){
        return super.pathById('editDialogButton')
    }
    get WarehouseTab(){
        return super.pathById('wrapped-tab-1')
    }
    get Deletedata(){
        return super.pathByXpath("//tbody/tr[1]")
    }
    get MapedData(){
        return super.pathByXpath("(//tbody/tr)[last()]")
    }
    get Editdata(){
        return super.pathByXpath("//tbody/tr[1]")
    }
    get FirstDeleteBtn(){
        return super.pathByXpath('(//button[@aria-label="clear"])[1]')
    }
    get LastDeleteBtn(){
        return super.pathByXpath('(//button[@aria-label="clear"])[last()]')
    }
    get EditBtn(){
        return super.pathByXpath("//header[contains(@class,'MuiPaper-root MuiPaper-e')]/div[2]/button[2]")
    }
    get ConformCancelBtn(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogA")]/button[1]')
    }
    get ConformDeleteBtn(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogA")]/button[2]')
    }
    get errWarehouseName(){
        return super.pathByXpath('//p[text()="Warehouse name required"]')
    }
    get errAddressName(){
        return super.pathByXpath("//p[text()='Address name required']")
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

}
module.exports = new(Warehouse);
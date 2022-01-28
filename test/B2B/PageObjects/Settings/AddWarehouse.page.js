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
        return super.pathByXpath("//li[@class='MuiListItem-container'][1]/div/div")
    }
    get MapwithEsixiting(){
        return super.pathByXpath("//li[@class='MuiListItem-container'][2]/div/div")
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
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[3]/button[1]")
    }
    get SaveBtn(){
        return super.pathByXpath("//div[contains(@class,'MuiPaper-root MuiDi')]/div[3]/button[2]")
    }
    get WarehouseTab(){
        return super.pathById('wrapped-tab-1')
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
module.exports = new(Warehouse);
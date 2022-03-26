const Page = require("../../../../B2B/PageObjects/page");

class SellerInfo extends Page{
/* *************** SELLER INFORMATION CARD **************** */
    get EditBtn(){
        return super.pathByXpath('//button[contains(@class,"MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPri")]')
    }
    get EditWareHouseBtn(){
        return super.pathByXpath('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium css-1w147j"]')
    }
    get EditSideNaveBtn(){
        return super.pathByXpath('(//button[contains(@class,"MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPri")])[2]')
    }

/* **************** ACCOUNT OWNER PART ******************* */

    get AccountOwnerSelect(){
        return super.pathByXpath('(//h6[text()="Account Owner"]/following::div/button[1])[1]')
    }
    get AccountOwnerClose(){
        return super.pathByXpath('(//h6[text()="Account Owner"]/following::div/button[2])[1]')
    }
    get AccountOwnerClearAll(){
        return super.pathByXpath('(//h6[text()="Account Owner"]/following::div/button[1])[2]')
    }
    get AccountOwnerInput(){
        return super.pathByXpath('//h6[text()="Account Owner"]/following::input')
    }
/* **************** BUSINESS UNIT PART ******************* */

    get BUSelect(){
        return super.pathByXpath('(//h6[text()="Business Unit"]/following::div/button[1])[1]')
    }
    get BUClose(){
        return super.pathByXpath('(//h6[text()=""Business Unit"]/following::div/button[2])[1]')
    }
    get BUClearAll(){
        return super.pathByXpath('(//h6[text()="Business Unit"]/following::div/button[1])[2]')
    }
    get BUInput(){
        return super.pathByXpath('//h6[text()="Business Unit"]/following::input')
    }
/* **************** SALES BRANCH PART ******************* */

    get SalesBranchSelect(){
        return super.pathByXpath('(//h6[text()="Sales Branch"]/following::div/button[1])[1]')
    }
    get SalesBranchClose(){
        return super.pathByXpath('(//h6[text()="Sales Branch"]/following::div/button[2])[1]')
    }
    get SalesBranchInput(){
        return super.pathByXpath('//h6[text()="Sales Branch"]/following::input')
    }
/* **************** DIVISION PART ******************* */

    get DivisionSelect(){
        return super.pathByXpath('(//h6[text()="Division"]/following::div/button[1])[1]')
    }
    get DivisionClose(){
        return super.pathByXpath('(//h6[text()="Division"]/following::div/button[2])[1]')
    }
    get DivisionClearAll(){
        return super.pathByXpath('(//h6[text()="Division"]/following::div/button[1])[2]')
    }
    get DivisionInput(){
        return super.pathByXpath('//h6[text()="Division"]/following::input')
    }
/* **************** CHANNEL PART ******************* */
    get ChannelSelect(){
        return super.pathByXpath('(//h6[text()="Channel"]/following::div/button[1])[1]')
    }
    get ChannelClose(){
        return super.pathByXpath('(//h6[text()="Channel"]/following::div/button[2])[1]')
    }
    get ChanelClearAll(){
        return super.pathByXpath('(//h6[text()="Channel"]/following::div/button[1])[2]')
    }
    get ChannelInput(){
        return super.pathByXpath('//h6[text()="Channel"]/following::input')
    }
/* **************** WAREHOUSE PART ******************* */
    get WarehouseSelect(){
        return super.pathByXpath('(//h6[text()="Warehouse"]/following::div/button[1])[1]')
    }
    get WarehouseClose(){
        return super.pathByXpath('(//h6[text()="Warehouse"]/following::div/button[2])[1]')
    }
    get WarehouseClearAll(){
        return super.pathByXpath('(//h6[text()="Warehouse"]/following::div/button[1])[2]')
    }
    get WarehouseInput(){
        return super.pathByXpath('//h6[text()="Warehouse"]/following::input')
    }
   

/* *************** BILL TO SHIP TO CARD **************** */
    get ShipToBtn(){
        return super.pathById('shippingChange')
    }
    get BillToOrderBtn(){
        return super.pathById('openAddress')
    }
    get BillToQuoteSidNavBtn(){
        return super.pathById('billingchange')
    }
    get ConfOkBillShip(){
        return super.pathById('apply')
    }
    get ConfCancelBillShip(){
        return super.pathById('cancel')
    }
    get selectData1(){
        return super.pathByXpath('(//input[@name="address-select"])[1]')
    }
    get selectData2(){
        return super.pathByXpath('(//input[@name="address-select"])[2]')
    }
    get selectData3(){
        return super.pathByXpath('(//input[@name="address-select"])[3]')
    }
    get selectLastData(){
        return super.pathByXpath('(//input[@name="address-select"])[last()]')
    }
}
module.exports = new(SellerInfo);
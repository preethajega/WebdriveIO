const Page = require("../../../../B2B/PageObjects/page");

class SellerInfo extends Page{
/* *************** SELLER INFORMATION CARD **************** */
    get EditBtn(){
        // return super.pathByXpath('(//div[@class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-9 css-1qpeb93"])[1]/button[2]')
        return super.pathByXpath('//button[contains(@class,"MuiIconButton-sizeMedium css-1yjqef3")]')
    }
    get EditWareHouseBtn(){
        return super.pathByXpath('//button[contains(@class,"MuiIconButton-sizeMedium css-1w147j")]')
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
    get AccountOwnerTxt(){
        return super.pathByXpath('//h5[text()="Account Owner"]/following::span[1]')
    }
    /* **************** BUSINESS UNIT PART ******************* */

    get BUSelect(){
        return super.pathByXpath('(//h6[text()="Business Unit"]/following::div/button[1])[1]')
    }
    get BUClose(){
        return super.pathByXpath('(//h6[text()="Business Unit"]/following::div/button[2])[1]')
    }
    get BUClearAll(){
        return super.pathByXpath('(//h6[text()="Business Unit"]/following::div/button[1])[2]')
    }
    get BUInput(){
        return super.pathByXpath('//h6[text()="Business Unit"]/following::input')
    }
    get BUTxt(){
        return super.pathByXpath('//h5[text()="Business Unit"]/following::h6[1]')
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
    get SalesTxt(){
        return super.pathByXpath('//h5[text()="Sales Branch"]/following::span[1]')
    }
    get SalesEle(){
        return super.pathByXpath('//h5[text()="Sales Branch"]')
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
    get DivisionTxt(){
        // return super.pathByXpath('//h5[text()="Division"]/following::div[1]')
        return super.pathByXpath('//h5[text()="Division"]/following::p[1]')
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
    get ChannelTxt(){
        return super.pathByXpath('//h5[text()="Channel"]/following::h6[1]')
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
    get WarehouseTxt(){
        return super.pathByXpath('//h4[text()="Warehouse"]/following::span[1]')
    }
   

/* *************** BILL TO SHIP TO CARD **************** */
    get ShipToBtn(){
        return super.pathByXpath('//button[@id="shippingchange"]')
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
        return super.pathByXpath('((//div[@role="dialog"])[last()]/div[1]/div/label/span/input)[last()]')
        // return super.pathByXpath('(//*[@id="cancel"]/preceding::span[@class="css-hyxlzm"])[last()]')
        // return super.pathByXpath('(//*[text()="Change Address"]/following-sibling::div[1]//label[2])[last()]')
        // return super.pathByXpath('((//*[@name="address-select"])[2]/parent::span/span)[1]')
        // return super.pathByXpath('(//input[@name="address-select"])[2]')
    }
    get selectData3(){
        return super.pathByXpath('(//input[@name="address-select"])[3]')
    }
    get selectLastData(){
        return super.pathByXpath('(//input[@name="address-select"])[last()]')
    }
}
module.exports = new(SellerInfo);
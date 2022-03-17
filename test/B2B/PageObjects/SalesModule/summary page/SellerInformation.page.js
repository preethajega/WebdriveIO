const Page = require("../../../../B2B/PageObjects/page");

class SellerInfo extends Page{
    get EditBtn(){
        return super.pathByXpath('//button[contains(@class,"MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPri")]')
    }
    get 
}
module.exports = new(SellerInfo);
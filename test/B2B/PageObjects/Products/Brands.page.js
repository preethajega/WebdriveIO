const Page = require("../../../B2B/PageObjects/page");

class Brands extends Page{
     

    get AddBrandBtn(){
      return super.pathByXpath('//*[text()="Delete"]/following::button[1]')
    }
    get Brandname(){
        return super.pathByXpath('//*[text()="Cancel"]/preceding::input[1]')
    }
    get DeleteBrand(){
        return super.pathByXpath('//*[text()="Delete"]')
    }


    get RequiredAlert () {
        return super.pathByXpath('//*[text()="Brand Name is required"]');
    }

    get AlreadyExisits() {
        return super.pathByXpath('//p[text()="brand Name already exists "]');

    }

    get BrandImage() {
        return super.pathByXpath('//h6[text()="Brands Image"]/following::input[1]');

    }

    get firstBrand () {
        return super.pathByXpath('(//*[contains(@class ,"MuiListItemText-primary css")])[1]');
    }

    get lastBrand () {
        return super.pathByXpath('(//*[contains(@class ,"MuiListItemText-primary css")])[last]');
    }
}
module.exports = new Brands();
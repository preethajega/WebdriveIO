const Page = require("../../../B2B/PageObjects/page");

class PriceList extends Page{
     
/* PriceList landing & Create PL card*/
    get CreatePriceList(){
      return super.pathByXpath('//*[text()="Create Price List"]')
    }
    get PLcode(){
        return super.pathByXpath('//input[@name="priceListName"]')
    }
    get PLdesc(){
        return super.pathByXpath('//textarea[@name="description"]')
    }
    get DefaultPL() {
        return super.pathByXpath('//input[@name="isDefault"]');
    }

    get approvalReqPL() {
        return super.pathByXpath('//input[@name="isDefault"]/following::input[1]');

    }
    get SelectPL () {
        return super.pathByXpath('//tbody[@class="MuiTableBody-root css-1xnox0e"]/tr[1]/td[1]');
    }

/*PriceList filter page */  

    get activePL() {
    return super.pathByXpath('//*[@type="radio"]/following::span[text()="Active"]');
    }
     get inactivePL () {
    return super.pathByXpath('//*[@type="radio"]/following::span[text()="In Active"]');
     }


/*PriceList Detail page */    

    get SearchPL () {
        return super.pathByXpath('//input[@placeholder="Search by price list name"]');
    }
    get DeletePL(){
        return super.pathByXpath('//*[text()="Delete Price list"]')
    }
    get addProdcuts () {
        return super.pathByXpath('//*[text()="Add Products"]');
    }
    get companySearch(){
          return super.pathByXpath('//*[@placeholder="Search Companies"]')
    }
    get AddCompany(){
          return super.pathByXpath('//*[text()="Add Companies"]')
    }
     
    get PLcode(){
        return super.pathByName('priceListCode')
    }

    get PLerpCode () {
        return super.pathByName('plnErpCode');
    }
    get SearchProducts(){
        return super.pathByXpath('//*[@placeholder="search for SKU & Name"]')
    }

    get CheckAll () {
        return super.pathByXpath('//*[@placeholder="search for SKU & Name"]/following::input[1]');      
    }
  
    get Applydiscount() {
          return super.pathByXpath('//*[text()="Apply Discount"]');
    }

    get Delete(){
        return super.pathByXpath('//*[text()="Apply Discount"]/preceding::button[1]');
    }

    get firstProductDisocunt(){
        return super.pathByName('products[0.discount]');
    }
    /*Add Products to list card */
    get prodBrand(){
        return super.pathByXpath('//*[text()="Brands"]/following::div[1]/input[1]');
    }
    get prodCategory(){
        return super.pathByXpath('//*[text()="Category"]/following::div[1]/input[1]');
    }
    get prodSubCategory(){
        return super.pathByXpath('//*[text()="Sub-Category"]/following::div[1]/input[1]]');
    }
    get prodGroup(){
        return super.pathByXpath('//*[text()="Product Group"]/following::div[1]/input[1]');
    }
    get products(){
        return super.pathByXpath('//*[text()="Products"]/following::div[1]/input[1]');
    }
    get prodDiscount(){
        return super.pathByXpath('//*[contains(text(),"Discounts")]/following::div[1]/input[1]');
    }
    get addproductList(){
        return super.pathByXpath('//*[text()="Add Products To List"]');
    }


}
module.exports = new PriceList();
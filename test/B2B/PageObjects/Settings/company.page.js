const Page = require("../../../B2B/PageObjects/page");
const { subindustry1 } = require("../../Inputs/settings/CompanyIP");

class Comp extends Page{
   
    get logoupload(){
        return super.pathByXpath('//span[@aria-label="upload picture"]')
       // return super.pathById("prefix-1")
    }
    get savebtn(){
        return super.pathById('loadingButton')
    }
    get cancelbtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get snackbar(){
        return super.pathById('client-snackbar');
    }
    get comperror(){
        return super.pathByXpath("//p[contains(@class,'MuiFormHelpe')]")
    }
    get noOption(){
        return super.pathByXpath("//div[@class='MuiAutocomplete-noOptions']")
    }
    get CompName(){
        return super.pathByName('name')
    }
    get EPNOName(){
        return super.pathByName('taxDetailsId.pan')
    }
    get AccType(){
        return super.pathByName('accountTypeId.name')
    }
    get SubIndustry1(){
        return super.pathByXpath("//div[contains(@class,'MuiForm')]/following::div[contains(@class,'MuiAutocomplete-e')]")
    }
    get SubIndustry(){
        return super.pathByName('subIndustryId')
    }
    get SubIndustryoption(){
        return super.pathByXpath("//ul[@id='mui-85097-popup']/li[1]")
    }
    get website(){
        return super.pathByName('website')
    }
    get BusinessType(){
        return super.pathByName('businessTypeId.name')
    }
    get currency(){
        return super.pathByName('currencyId.currencyCode')
    }
    get RefelectTxt(){
        return super.pathByXpath('//div[contains(@class,"MuiGrid-root Mui")][4]/div[2]/div')
    }
    get errWebsite(){
        return super.pathByXpath("//p[text()='website must be a url']")
    }
  // add warehouse card
    get Addwarehousebtn(){
        return super.pathByXpath('//button[@aria-label="Add Warehouse"]')
    }
    // add address card
    get Addaddressbtn(){
        return super.pathByXpath('//button[@aria-label="Add Address"]')
    }

    //branch address xpath
    get BAcheckbox(){
        return super.pathByXpath('//table/tbody/tr/td[1]')
    }
    get location(){
        return super.pathByXpath('//table/tbody/tr/td[2]')
    }
    get Address(){
        return super.pathByXpath('//table/tbody/tr/td[3]')
    }
    get Ebno(){
        return super.pathByXpath('//table/tbody/tr/td[4]')
    }
    get contactname(){
        return super.pathByXpath('//table/tbody/tr/td[5]')
    }
    get phonenum(){
        return super.pathByXpath('//table/tbody/tr/td[6]')
    }
    get businessunit(){
        return super.pathByXpath('//table/tbody/tr/td[8]')
    }

   //warehouse xpath
    get WHcheckbox(){
    return super.pathByXpath('//table/tbody/tr/td[1]')
    }
    get warehouse(){
        return super.pathByXpath('//table/tbody/tr/td[2]')
    }
    get identifier(){
        return super.pathByXpath('//table/tbody/tr/td[3]')
    }
    get Erpcode(){
        return super.pathByXpath('//table/tbody/tr/td[4]')
    }
    get branchname(){
        return super.pathByXpath('//table/tbody/tr/td[5]')
    }
    get city(){
        return super.pathByXpath('//table/tbody/tr/td[6]')
    }
}
module.exports =new Comp();
const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const BrandsIp = require("../../Inputs/Products/BrandsIp")
const path = require("../../PageObjects/Products/Brands.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");
const ActionsWrappers = require("../../../CommonActions/ActionsWrappers");
const commonObjects = require("../../PageObjects/Common/commonObjects");



class Brands extends Page {
    
    async open() {
        super.open("/brands"); 
    }
    
  
    CreateBrand = async(brandName,btn) =>{
        await actionWrapper.Click(path.AddBrandBtn)
        await actionWrapper.clickAndSetvalue(path.Brandname,brandName)
        await actionWrapper.Click(btn)
   
    }

    DeleteBrand = async (common) => {
        await actionWrapper.Click(path.DeleteBrand);
        await actionWrapper.Click(common);
    }

    UploadLogo = async(image,btn) =>{
        await browser.pause(2000);    
        await attchmentUpload.upload(path.BrandImage,image)
        await browser.pause(4000);  
        await actionWrapper.Click(btn);
       
    }

    
}

module.exports = new Brands();
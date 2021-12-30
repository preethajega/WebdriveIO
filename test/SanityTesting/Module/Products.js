const assert = require("assert");
const { time, exception } = require("console");
const { isYesterday } = require("date-fns");
const { taggedTemplateExpression } = require("jscodeshift");
const { format } = require("path");
let today =  new Date().toISOString().replace(/\/|-|:|/g,'');
const path = require('path');
const inventoryUpload = path.join(__dirname, './../../FileUtils/sample-inventory.xlsx');
const imageUpload = path.join(__dirname,'./../../FileUtils/profilepic.png');
const ProductImage = path.join(__dirname,'./../../FileUtils/download.jpg');
const productUpload=path.join(__dirname, './../../FileUtils/productUpload.xlsx');


describe("Sanity test check", () => {

    it("login page", () => {
        browser.url('/auth/login');
        browser.pause(3000);
        browser.getCookies();
        browser.deleteCookies();
        browser.maximizeWindow();
        browser.pause(3000);
        console.log(browser.getTitle);
        let loginUsername = $('[name="Username"]');
        let loginpassword = $('[name="Password"]');
        let signIn = $('#loadingButton');
        let Register = $('//*[text()="Sign Up"]');
        let mailReq = $('//p[text()="Email required"]');
        let pwdReq = $('//p[text()="Password required"]');
        let invaildMail = $('//p[text="Invalid business email"]');
        let userExist = $('//p[text="User does not exist"]');
        let incrtPwd = $('//p[text="Incorrect password"]');

        loginUsername.waitForDisplayed(2000);
        loginUsername.setValue("admin@apptino.com");
        loginpassword.waitForDisplayed(2000);
        loginpassword.setValue("Admin@123");
        signIn.click();
        if ((mailReq.isDisplayed()) || (invaildMail.isDisplayed())||(userExist.isDisplayed()))
        {
           loginUsername.click();
             browser.pause(2000)
              browser.keys(["\uE009", "a"]);
                loginUsername.keys("\uE003");   
                  loginUsername.setValue("admin@apptino.com");
                    signIn.click();
        }
        if((pwdReq.isDisplayed()) || (incrtPwd.isDisplayed()))
        {         
          loginpassword.click();
            browser.pause(2000)
             browser.keys(["\uE009", "a"]);
              loginpassword.keys("\uE003");   
                loginpassword.setValue("Admin@123");
                  signIn.click();
        }
        
        browser.pause(5000);
        browser.getUrl();
       expect(browser).toHaveUrlContaining('dashboard');



    });


   

    it("Create and delete the Brand", () => {
        
        let AddBrand = $('//span[text()="Delete"]/following::button[1]');
        let Brandname = $('//span[text()="Cancel"]/preceding::input[1]');
        let Submit = $('//*[@id="editDialogButton"]');
        let Cancel = $('#editDialogCancel');
        let save = $('#loadingButton');
        let DeleteBrand = $('//span[text()="Delete"]');
        let Yes = $('#yes');
        let snackbar = $('#client-snackbar');
        let nameExsists = $('//p[text()="brand Name already exists "]');

        browser.url("/brands");
        browser.pause(1000);
        AddBrand.click();
        browser.pause(1000);
        Brandname.setValue("Nokia");
        browser.pause(1000);
        Submit.click();
        if (nameExsists.isDisplayed()) {
            Brandname.click();
            browser.pause(1000);
            browser.keys(["\uE009", "a"]);
            Brandname.keys("\uE003");
            browser.pause(1000);
            Brandname.setValue('Sanity');
            Submit.click();
        }
        browser.pause(4000);
        assert.strictEqual(snackbar.getText(),"Brand added");


        let brandImage = $('//h6[text()="Brands Image"]/following::input[1]');
        browser.execute(
            (el) => el.style.display = 'block',
            brandImage);
        brandImage.waitForDisplayed();
        brandImage.setValue(imageUpload);
        browser.pause(2000);
        save.click();

        DeleteBrand.click();
        browser.pause(2000);
        Yes.click();
        browser.pause(2000);
        assert.strictEqual(snackbar.getText(),"Brand deleted successfully");


    })


    it("Create and delete the Category", ()=>{
       
      let AddCategoery=$('(//span[text()="Department"]/following::button[@aria-label="add"])[1]');
      let catName = $('//input[@name="name"]');
      let Department  =$('//span[text()="Department"]');
      let save=$('//span[text()="Save"]');
      let Cancel =$('//span[text()="Cancel"]');
      let newCategory=$('//span[text()="bocsh"]');
      let EditCategory=$('(//*[@aria-label="edit"])[last()]');
      let DeleteCategoery = $('(//*[@aria-label="delete"])[last()]');
      let Yes = $('#yes');
      let snackbar = $('#client-snackbar');



    browser.url("/categories");
    browser.pause(3000);
    Department.click();
     browser.pause(2000);
      AddCategoery.click();
      browser.pause(2000);
      catName.click();
      catName.keys(["\uE009", "a"]);
      catName.keys("\uE003");
      browser.pause(2000);
        catName.setValue("bocsh");

    let catIcon=$('//h6[text()="Icon"]/following::input[1]');
    catIcon.scrollIntoView();

      browser.execute(
        (el) => el.style.display = 'block',
          catIcon );
    catIcon.waitForDisplayed();
      catIcon.setValue(imageUpload);
        browser.pause(4000);
        save.click();       
assert.strictEqual(snackbar.getText(),"Saved successfully");

/*Edit category 
        browser.pause(2000);
  newCategory.click();  
    EditCategory.click();
      browser.pause(2000);
      let catImage=$('//h6[text()="Image"]/following::input[1]');
       catImage.scrollIntoView();
      browser.execute(
            (el) => el.style.display = 'block',
         catImage );
       catImage.waitForDisplayed();
       browser.pause(2000);
     catImage.setValue(imageUpload);
      browser.pause(2000);
         save.scrollIntoView();
         browser.pause(4000);
        save.click();
assert.strictEqual(snackbar.getText(),"Saved successfully");*/
/*Delete category */
browser.pause(2000);
  newCategory.click();  
     DeleteCategoery.click();
      browser.pause(2000);
        Yes.click();
          browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Deleted successfully");

    });

    it("Create and delete the product",()=>{
       
        let AddProdcut=$('#MPG_PPGL_CFBCPG');
        let save = $('//*[@id="editDialogButton"]');
        let Cancel =$('#editDialogCancel');
        let ProductName=$('//input[@name="name"]');
        let LeadTime=$('//input[@name="standardLeadTime"]');
        let Time=$('//input[@value="Days"]');
        let BrandName=$('//input[@id="brandsId"]');
        let Date =$('#date-picker-inline');
        let currentDate = $('//*[@class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-current MuiPickersDay-daySelected"]');
        let CreateVarient=$('#MPG_PPGL_CFBCPG');
        let productID=$('//input[@name="brandProductId"]');
        let cloneProdID=$('//input[@name="hsnCode"]/preceding::input[1]');
        let productVarient=$('//*[@name="productShortDescription"]');
        let primaryCategory=$('//*[@id="productSubCategories.primarySubcategoryName"]');
        let HSN=$('//input[@name="hsnCode"]');
        let unitPrice=$('//input[@name="unitListPrice"]');
        let UnitQty=$('//input[@name="unitQuantity"]');
        let PackQty=$('//input[@name="packagingQty"]');
        let UOM=$('//input[@name="unitOfMeasure"]');
        let MoreOptions=$('//button[@Title="More options"]');
        let DeleteProdvarient=$('//*[text()="Delete"]');
        let DeleteProd=$('//*[text()="Delete"]');
        let yes=$('#yes');
        let snackbar=$('#client-snackbar');
        let publish=$('//span[text()="Publish"]');
        let clone=$('//span[text()="Clone"]');
        let catalogID=$('//*[@name="extendedProductID"]');
        let subCategoery=$('//*[@placeholder="Search for Categories"]');
        let MSRP=$('//input[@name="unitMrp"]');
        let prodCost=$('//input[@name="productCost"]');
        let costValidty=$('//input[@name="costValidity"]');
        let vaildDate=$('//button[contains(@class,"daySelected")]/following::div[1]');
        let MOQ=$('//input[@name="outerPackQty"]/preceding::input[1]');
        let outerPack=$('//input[@name="outerPackQty"]');
        let isNew=$('//input[@name="showPrice"]/preceding::input[1]');
        let priceTocus=$('//input[@name="isDiscontinued"]');
        let movingProd=$('//input[@name="isBrandStock"]');
        let DisconProd=$('//input[@name="isDiscontinued"]');
        let disTocustmers=$('//input[@name="isListpricePublic"]');
        let internalProd=$('//input[@name="internal"]');
        let saveProd=$('#loadingButton');
        let lastProd=$('//h4[text()="Product Variants"]/following::div[contains(@class," MuiPaper-elevation1 MuiPaper-rounded")][last()]');
        let asset=$('//*[@id="Assets"]');
        let primeImage=$('(//*[@title="Make Primary Image"])[last()]');
        let freqBought=$('//*[@id="Frequently Bought Together"]');
        let frqBoughtVarient=$('//*[@placeholder="Search for Product Variant"]');
        let longDesc=$('//*[@id="Long Description & Keywords"]');
        let addKeywords=$('//*[@id="Long Description & Keywords"]/following::input[1]');
        let varientAccess=$('//*[@id="Variant Accessories"]');
        let addprodVarient=$('//*[@placeholder="Search for Product Variant"]');
        let spec=$('#Specifications');
        let specDesc=$('//*[@id="Specifications"]/following::input[1]');
        let specValue=$('//*[@id="Specifications"]/following::input[2]');
        let addtionalInfo=$('//*[@id="Additional Information"]');
        let packingDimensions=$('//*[@name="packagingDimension"]');
        let netWeight=$('//*[@name="netWeight"]');
        let eanUpc=$('//*[@name="ean"]');
        let orginCountry=$('//*[@name="ean"]/following::input[1]');
        let prodExsists=$('//p[text()="Product ID (SKU) already exists"]');
        let uploadProd=$('//*[text()="Upload Products"]');
        let groupAssign=$('//span[text()="Assign"]');
        let category=$('//span[text()="Assign"]/preceding::input[1]');
        let uploadSave=$('//span[text()="Save"]');
        let optionsMore=$('//span[text()="Create product variant"]/following::button[1]');

            


      /*create product*/
    browser.url("/create-products/productgroup-landing");
     browser.pause(1000);
      AddProdcut.click();
       browser.pause(1000);
        ProductName.setValue("1100");
         LeadTime.setValue("10");
           browser.pause(1000);
            Time.click();
             browser.pause(1000);
              browser.keys(["\uE009", "a"]);
               Time.keys("\uE003");
                browser.pause(1000);
                 Time.setValue("Days");
                   Time.keys("\uE015");
                     Time.keys("\uE007");
                       browser.pause(1000);
                        BrandName.setValue("HP");
                          browser.pause(1000);
                           BrandName.keys("\uE015");
                             browser.pause(1000);
                               BrandName.keys("\uE007");
                                 browser.pause(1000);
                                  Date.click();
                                   currentDate.click();
                                      save.click();
                                        browser.pause(2000);
assert.strictEqual(snackbar.getText(),'Product group created');

/* upload product */
 MoreOptions.click();
  browser.pause(1000);
   uploadProd.click();
    
   let uploadFile = $('#upload-excel-file');
      browser.execute(
           
           (el) => el.style.display = 'block',
           uploadFile
       );
       uploadFile.waitForDisplayed();
       uploadFile.setValue(productUpload);

       category.setValue("Apple watch");
       browser.pause(1000);
         category.keys("\uE015");
           browser.pause(1000);
             category.keys("\uE007");
               groupAssign.click();
             /*   uploadSave.click();*/

      
                

        /*create product variant*/
    browser.refresh();
    CreateVarient.click();
      browser.pause(1000);
       productID.setValue("1100 black");
         productVarient.setValue("Nokia 1100");
          primaryCategory.setValue("Apple watch");
           browser.pause(1000);
             primaryCategory.keys("\uE015");
               browser.pause(1000);
                 primaryCategory.keys("\uE007");
                   HSN.setValue("7");
                    browser.pause(1000);
                      HSN.keys("\uE015");
                         browser.pause(1000);
                           HSN.keys("\uE007");
                             unitPrice.setValue("10000");
                                UnitQty.setValue("1");
                                  PackQty.setValue("1");
                                     UOM.setValue("NOS");
                                       save.click();
                                         if(prodExsists.isDisplayed()){
                                             productVarient.click();
                                              browser.keys(["\uE009", "a"]);
                                               productVarient.keys("\uE003");
                                                 browser.pause(2000);
                                                  productVarient.setValue("Nokia 11000 test");
                                                   save.click();
                                         }
                                         
                                        browser.pause(1000);
assert.strictEqual(snackbar.getText(),'Product created');
   
    catalogID.setValue('12345');
     subCategoery.setValue('mobile phones');
       subCategoery.keys("\uE015");
        browser.pause(1000);
         subCategoery.keys("\uE007");
           longDesc.click();
           browser.pause(1000);
            addKeywords.setValue('nokia');
              addKeywords.keys('\uE007');
                  asset.click();
                    let prodImg=$('//*[@id="button-file"]');
                        browser.execute(
                           (el) => el.style.display = 'block',
                             prodImg );
                          prodImg.waitForDisplayed();
                       prodImg.setValue(imageUpload);
                  prodImg.pause(2000);
              prodImg.waitForDisplayed();
           prodImg.setValue(ProductImage);
       prodImg.pause(1000);
     primeImage.click();
  /* freqBought.click();
     frqBoughtVarient.setValue('redmi');
       frqBoughtVarient.keys('\uE015');
         browser.pause(1000);
          frqBoughtVarient.keys('\uE007');*/
    
          spec.click();
            browser.pause(1000);
             specDesc.setValue("nokia best mobile");
              specValue.setValue('2500');
              browser.pause(1000);
                addtionalInfo.click();
                browser.pause(1000);
               packingDimensions.setValue('10*10');
              netWeight.setValue('250g');
            eanUpc.setValue(1100);
         

    MSRP.setValue('1000');
    prodCost.setValue('800');
      costValidty.click();
        vaildDate.click();
          MOQ.waitForClickable(1000);
          MOQ.setValue('2');
           outerPack.setValue('1');
           browser.pause(2000);
           orginCountry.setValue('China');
           browser.keys('\uE015');
           browser.pause(1000);
            browser.keys('\uE007');
            browser.pause(1000);
            isNew.scrollIntoView();
         
             /*isNew.click(); */
                   if(priceTocus.getValue()===true){
                     priceTocus.click();
                      }
                      if(disTocustmers.getValue()===true){
                        disTocustmers.click();
                         }                        
                          internalProd.click();
                            movingProd.click();
                              DisconProd.click();
                                saveProd.click();
                                  browser.pause(1000);
/*assert.strictEqual(snackbar.getText(),'Product updated');*/
                                      browser.pause(1000);
                                     publish.click();
                                       yes.click();
                                        browser.pause(1000);                            
/*assert.strictEqual(snackbar.getText(),'Product group published');*/
                                       browser.pause(1000);  
                                          clone.click();
                                            productID.setValue('1100 red');
                                              save.click();
                                              if(cloneProdID.isDisplayed()){
                                                cloneProdID.setValue('1100 Red');
                                                 save.click();}
                                                  browser.pause(1000);
/*assert.strictEqual(snackbar.getText(),'Product created'); */  
    MoreOptions.click();
     browser.pause(2000);
       DeleteProdvarient.click();
         browser.pause(1000);
           yes.click();
        
 /*assert.strictEqual(snackbar.getText(),'Product deleted');*/

    optionsMore.click();
      browser.pause(2000);
       DeleteProd.click();
        browser.pause(1000);
         yes.click();
          browser.pause(1000);
/*assert.strictEqual(snackbar.getText(),'1 products linked to this Product Group, kindly delete those products first');*/
          lastProd.scrollIntoView();
           browser.pause(1000);
            lastProd.click();
             browser.pause(1000);
              MoreOptions.click();
               browser.pause(1000);
                 DeleteProdvarient.click();
                   browser.pause(1000);
                     yes.click();
                       browser.pause(1000);
/*assert.strictEqual(snackbar.getText(),'Product deleted');*/
                          optionsMore.click();
                             browser.pause(1000);
                               DeleteProd.click();
                                 browser.pause(1000);
                                   yes.click();
                                     browser.pause(1000);
                                       browser.getUrl();       
expect(browser).toHaveUrlContaining('productgroup-landing');
      });

    it("Create and delete the Pricelist", ()=>{
       
      let CreatePriceList=$('//span[text()="Create Price List"]');
      let PlName = $('//input[@name="priceListName"]');
      let PlDesc =$('//textarea[@name="description"]');
      let PlCurrency =$('//input[@name="currencyId"]');
      let isDefaultPL=$('//input[@name="isDefault"]');
      let isApprovalPL=$('//input[@name="isDefault"]/following::input[1]');
      let save = $('//*[@id="editDialogButton"]');
      let Cancel =$('#editDialogCancel');
      let SearchPL=$('//input[@placeholder="Search by price list name"]');
      let SelectPL=$('//tbody[@class="MuiTableBody-root"]/tr[1]/td[1]'); 
      let DeletePL = $('//span[text()="Delete Price list"]');
      let submit = $('#loadingButton');
      let snackbar = $('#client-snackbar');
      let companySearch=$('//*[@placeholder="Search Companies"]');
      let addCompany=$('//span[text()="Add Companies"]');
      let addProdcuts=$('//span[text()="Add Products"]');
      let prodBrand=$('//*[text()="Brands"]/following::div[1]/input[1]');
      let prodCate=$('//*[text()="Catgeory"]/following::div[1]/input[1]');
      let prodSubcat=$('//*[text()="Sub-Category"]/following::div[1]/input[1]');
      let prodGroup=$('//*[text()="Product Group"]/following::div[1]/input[1]');
      let prodName=$('//*[text()="Products"]/following::div[1]/input[1]');
      let prodDisc=$('//*[contains(text(),"Discounts")]/following::div[1]/input[1]');
      let ProdToList=$('//span[text()="Add Products To List"]');
      let saveProd=$('//span[text()="Save"]');
      let checkAll=$('//span[@title="Checkall"]');
      let applyDisc=$('//span[text()="Apply Discount"]');
      let deleteprod=$('//span[text()="Delete"]');
      let discount=$('//*[@name="discount"]');





    browser.url("pricelist/landing");
     browser.pause(2000);
      CreatePriceList.click();
        browser.pause(1000);
         PlName.setValue("Sanity Pricelist");
          PlDesc.setValue("Testing");
           PlCurrency.setValue("INR");
            browser.pause(1000);
              PlCurrency.keys("\uE015");
               browser.pause(1000);
                 PlCurrency.keys("\uE007");
                  browser.pause(1000);
                     isApprovalPL.click();
                        save.click();
                           browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Pricelist Created");
    browser.refresh();
      SearchPL.setValue('Sanity');
        SelectPL.click();
        companySearch.setValue('a');
         browser.pause(1000);
          companySearch.keys("\uE015");
            browser.pause(1000);
              companySearch.keys("\uE007");
                browser.pause(1000);
                  companySearch.click();
                     addCompany.click();
                       submit.click();
                        browser.pause(2000);
assert.strictEqual(snackbar.getText(),"PriceList updated");
                  addProdcuts.click();
                    browser.pause(1000);
                     prodBrand.setValue('a');
                      browser.pause(1000);
                      prodBrand.keys("\uE015");
                       browser.pause(1000);
                        prodBrand.keys("\uE007");
                         browser.pause(1000);
                          prodCate.setValue('a');
                          browser.pause(1000);
                           prodCate.keys("\uE015");
                            browser.pause(1000);
                              prodCate.keys("\uE007");
                               browser.pause(1000);
                                prodSubcat.setValue('a');
                                browser.pause(1000);
                                 prodSubcat.keys("\uE015");
                                  browser.pause(1000);
                                   prodSubcat.keys("\uE007");
                                     browser.pause(1000);
                                      prodGroup.setValue('a');
                                      browser.pause(1000);
                                       prodGroup.keys("\uE015");
                                         browser.pause(1000);
                                          prodGroup.keys("\uE007");
                                            browser.pause(1000);
                                              prodName.setValue('a');
                                              browser.pause(1000);
                                               prodName.keys("\uE015");
                                                browser.pause(1000);
                                                  prodName.keys("\uE007");
                                                   browser.pause(1000);
                                                    prodDisc.setValue('10');
                                                      ProdToList.click();
                                                        saveProd.click();
                                                          browser.pause(2000);
                                                            checkAll.click();
                                                            applyDisc.click();
                                                           discount.setValue(10);
                                                          submit.click();
                                                        checkAll.scrollIntoView();
                                                      checkAll.click();
                                                    deleteprod.click();
                                                 submit.click();
                                             browser.pause(1000);                                                                                                                                                                                                                              
                                         DeletePL.click();
                                     browser.pause(1000);
                               submit.click();
                           browser.pause(1000);
                        browser.getUrl();
expect(browser).toHaveUrlContaining('pricelist/landing');
    });

    it("Create and delete the Inventory", ()=>{



    let AddInventory =$('//span[text()="Add New Inventory"]');
    let searchProduct=$('//input[@placeholder="Search for products"]');
    let SearchResult = $('//div[@class="MuiPaper-root MuiPaper-elevation1"]/div/ul/div[1]');
    let prodcutId=$('//input[@name="InventoryForm.productsId.brandProductId"]');
    let BrandName=$('//input[@name="InventoryForm.brandId.name"]');
    let shortDes=$('//input[@name="InventoryForm.productsId.productShortDescription"]');
    let ListPrice=$('//input[@name="InventoryForm.productsId.unitListPrice"]');
    let UniqueQty=$('//input[@name="InventoryForm.productsId.unitQuantity"]');
    let wareHouse=$('//input[@name="InventoryForm.wareHouseDtoId"]');
    let warehouseDrpdwn=$('//button[@title="Open"]');
    let stockQty=$('//input[@name="InventoryForm.stockQuantity"]');
    let safetyQty=$('//input[@name="InventoryForm.safetyStock"]');
    let availableQty=$('//input[@name="InventoryForm.availableQuantity"]');
    let avgCost=$('//input[@name="InventoryForm.averageCost"]');
    let cancel=$('//span[text()="Cancel"]');
    let save=$('#loadingButton');
    let snackbar = $('#client-snackbar');
    let search=$('//input[@placeholder="Search by Product ID"]');
    let MoreOptions=$('//button[@Title="More options"]');
    let Delete=$('//*[text()="Delete"]');
    let productResult=$('//div[@role="button"][1]');
    let maxValue=$('//p[contains(text(),"Maximum")]');




    browser.url("/inventory/landing");
     browser.pause(2000);
      AddInventory.click();
       browser.pause(1000);
    searchProduct.setValue("MQTX2HN/A");
      browser.pause(1000);
      SearchResult.click();
       safetyQty.scrollIntoView();
            if(!wareHouse.getValue()==='')
            {
              browser.keys(["\uE009", "a"]);
               wareHouse.keys('\uE003');
            }
        warehouseDrpdwn.click();
         wareHouse.setValue('a');
          browser.pause(1000);
            wareHouse.keys("\uE015");
             browser.pause(1000);
               wareHouse.keys("\uE007");
                browser.pause(1000);
                if(stockQty.getValue()===''){
                  stockQty.setValue('10');
                   browser.pause(1000);
                   }
                 if(safetyQty.getValue()===''){
                    safetyQty.setValue('1');
                        browser.pause(1000);
                   }
                    avgCost.setValue('01');
                           save.click();
                           if(maxValue.isDisplayed()){
                            browser.keys(["\uE009", "a"]);
                            avgCost.keys('\uE003');
                            avgCost.setValue(100);
                            save.click();
                           }
                            browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Saved successfully");

    search.setValue('MQTX2HN/A');
      browser.pause(1000);
        productResult.click();
          browser.pause(1000);
           MoreOptions.click();
            browser.pause(1000);
              Delete.click();
               browser.pause(1000);
                save.click();
                  browser.pause(1000);
assert.strictEqual(snackbar.getText(),"Saved successfully");
    });

    it("upload and delete the inventory", ()=>{

    let upload =$('//*[text()="Upload"]');
    let save=$('#loadingButton');
    let filters=$('//*[text()="Filters"]');
    let productID=$('//*[@id="brand"]/following::input[1]');
    let Apply=$('//*[text()="Apply"]');
    let checkbox=$('//input[@type="checkbox"]')
    let MoreOptions=$('//button[@Title="More options"]');
    let Delete=$('//*[text()="Delete"]');
    let snackbar = $('#client-snackbar');
    let alertMsg=$('//*[text()="Warehouse name not exist"]');
    let wareHouse=$('//*[contains(@name,"wareHouseName-inventoryForm")]');
    let filterResults=$('(//*[contains(@class,"-deleteIconSmall")])[last()]');
    let filterClear=$('//span[text()="Clear All"]');


    browser.url("/inventory/landing");
     browser.pause(2000);
     if(filterResults.isExisting())
           {    browser.pause(2000);
                filterResults.click();
               }

      upload.click();
        let uploadFile = $('#upload-excel-file');
            browser.execute(
                
                (el) => el.style.display = 'block',
                
                uploadFile
            );
    uploadFile.waitForDisplayed();
      uploadFile.setValue(inventoryUpload);
        browser.pause(2000);
        if(alertMsg.isDisplayed()){
        wareHouse.click();   
          browser.pause(1000);
            browser.keys("\uE015");
             browser.pause(1000);
                browser.keys("\uE007")

        }
          save.click();
            browser.pause(1000);
assert.strictEqual(snackbar.getText(),"Saved successfully");

    browser.refresh();
    filters.click();
    browser.pause(1000);
    filterClear.click();
     browser.pause(1000);
      productID.setValue('Z0WX1HN/A');
       browser.pause(1000);
        Apply.click();
         browser.pause(1000);

      checkbox.click();
        browser.pause(1000);
          MoreOptions.click();
            browser.pause(1000);
             Delete.click();
              browser.pause(1000);
               save.click();
                browser.pause(1000);
assert.strictEqual(snackbar.getText(),"Changes saved successfully");
    });
    
    it("Create and delete the Buyer", ()=>{

      let createCustomer=$('//span[text()="Create Customer"]');
      let BuyerName=$('//input[@name="companyName"]');
      let BranchName=$('//input[@name="regAddress.branchName"]');
      let Address=$('//*[@name="regAddress.addressLine"]');
      let locality=$('//*[@name="regAddress.locality"]');   
      let city=$('//input[@name="regAddress.city"]');
      let district=$('//input[@name="regAddress.district"]');
      let State=$('//input[@name="regAddress.state"]');
      let pin=$('//input[@name="regAddress.pinCodeId"]');
      let country=$('//input[@name="regAddress.country"]');
      let billing=$('//input[@name="regAddress.isBilling"]');
      let Shipping=$('//input[@name="regAddress.isShipping"]');
      let tax=$('//input[@name="regAddress.gst"]');
      let BusinessType=$('//input[@name="businesstype"]');
      let Currency=$('//input[@name="currencyId"]');
      let BuyerUsrName=$('//input[@name="displayName"]');
      let UsrMobileNo=$('//input[@name="mobileNo"]');
      let UsrEmail=$('//input[@name="userEmail"]');
      let UsrRole=$('//input[@name="roleName"]');
      let UsrDepartment=$('//input[@name="department"]');
      let usrJobTilte=$('//input[@name="jobTitle"]');
      let save=$('#editDialogButton');
      let cancel=$('#editDialogCancel');
      let custEdit=$('//*[text()="Company Details"]/following::button[1]');
      let invite=$('//*[text()="invite"]');
      let Buyerlist=$('//*[contains(@title,"Apple")]');
      let createUser=$('//*[text()="Create User"]');
      let createBranch=$('//span[text()="Create Branch"]');
      let usrmail=$('//input[@name="email"]');
      let Checkbox=$('(//input[@type="checkbox"])[last()]')
      let snackbar = $('#client-snackbar');
      let MoreOptions=$('//*[@title="More options"]');
      let deleteBuyer=$('//span[text()="Delete Customer"]');
      let userEdit=$('//span[text()="Edit"]');
      let userMoreOptions=$('//span[text()="Edit"]/following::button[@title="More options"]');
      let userDelete=$('//span[text()="Delete"]');
      let userReinvite=$('//span[text()="Reinvite"]');
      let yes=$('#yes');
      let alreadyExsists=$('//p[text()="Email already exists"]');
      let filter=$('//span[text()="Filters"]');
      let customerName=$('#companyName');
      let filterApply=$('//span[text()="Apply"]');
      let filterResults=$('(//*[@class="MuiChip-deleteIcon MuiChip-deleteIconSmall"])[last()]');
      let cusWebsite=$('//input[@name="website"]');
      let cusTaxid=$('//input[@name="taxDetailsId.pan"]');
      let cusSubIndustry=$('//input[@name="subIndustryId"]');
      let acuntOwner=$('//input[@name="subIndustryId"]/following::input[1]');
      let supportOwner=$('//input[@name="subIndustryId"]/following::input[2]');
      let contactsTab=$('//span[text()="Contacts"]');
      let preferenceTab=$('//span[text()="Preferences"]');
      let addressTab=$('//span[text()="Addresses"]');
      let inviteAccess=$('//input[@name="inviteAccess"]');
      let inventoryAccess=$('//input[@name="inventory"]');
      let showPrice=$('//*[@name="showPrice"]');
      let taxExempted=$('//input[@name="companyId.taxExempted"]');
      let branchName=$('//input[@name="branchName"]');
       let branchAddress=$('//textarea[@name="addressLine"]');
       let branchlocality=$('//input[@name="locality"]');
       let branchCity=$('//input[@name="city"]');
       let branchPin=$('//input[@name="pinCodeId"]');
       let branchState=$('//input[@name="state"]');
       let branchCountry=$('//input[@name="country"]');
       let branchDistrict=$('//input[@name="district"]');
       let branchLongitude=$('//input[@name="longitude"]');
       let branchbilling=$('//input[@name="isBilling"]');
       let branchShipping=$('//input[@name="isShipping"]');
       let branchtax=$('//input[@name="gst"]');
       let contactName=$('//input[@name="primaryContact"]');
       let contactNo=$('//input[@name="mobileNo"]');
       let submit=$('//*[@id="loadingButton"]');
       let goBack=$('//*[@title="Go Back"]');
       let firstCheckbox=$('//*[@type="checkbox"]');
       let edit=$('//*[text()="Edit"]');
       let deleteBtn=$('//*[text()="Delete"]');
       let branchTags=$('//*[@name="tags"]');
       let erpCode=$('//*[@name="erpCode"]');
       let vendorCode=$('//*[@name="vendorID"]');
       let exemptionId=$('//input[contains(@name,"ExemptionId")]');
       let close=$('//*[@title="Close"]');
     

    browser.url("/accounts/landing");
                if(filterResults.isDisplayed())
         {
          filterResults.click();
         }
        createCustomer.click();
         BuyerName.setValue("Apple India");
           browser.pause(1000);
             BuyerName.keys("\uE015");
              browser.pause(1000);
                 BuyerName.keys("\uE007")
                   BranchName.setValue("Coimbatore");
    if(Address.getValue()===''){
        Address.setValue("100 main road");
      }
        if(locality.getValue()===''){
          locality.setValue("US");
        }
         if(city.getValue()===''){
           city.setValue("coimbatore");
         }
         
         if(country.getValue()===''){
          country.setValue("India");
          browser.keys("\uE015");
          browser.pause(2000);
          browser.keys("\uE015");
          browser.keys("\uE007");

        }
            if(State.getValue()===''){
             State.setValue("Tamil Nadu");
               browser.keys("\uE015");
               browser.pause(2000);
               browser.keys("\uE007");
            }

           if(district.getValue()===''){
              district.setValue("coimbatore");
               browser.keys("\uE015");
                  browser.pause(2000);
                  browser.keys("\uE007");
            }
               if(pin.getValue()===''){
                 pin.setValue("641010");
                }
                 if(billing.getValue()===false){
                  billing.click();
                 }
                  if(Shipping.getValue()===false){
                    Shipping.click();
                   }
     tax.setValue("Gst");
      BusinessType.setValue("Dealer");
       browser.pause(1000);
       BusinessType.keys("\uE015");
        browser.pause(2000);
        BusinessType.keys("\uE007");
         browser.pause(1000);
          UsrDepartment.scrollIntoView();
            Currency.setValue("INR");
            browser.pause(2000);
             Currency.keys("\uE015");
              browser.pause(2000);
               Currency.keys("\uE007");
                browser.pause(2000);
                 BuyerUsrName.setValue("JD");
                  UsrMobileNo.setValue("90909090");
                     UsrEmail.setValue("manchester007"+today+"@gmail.com");
                        UsrRole.setValue("User");
                           browser.pause(2000);
                            UsrRole.keys("\uE015");
                              browser.pause(2000);
                               UsrRole.keys("\uE007");
                                usrJobTilte.setValue("user");
                                 UsrDepartment.setValue("EEE");
                                    save.click();
                                     browser.pause(1000);
                                       if(alreadyExsists.isDisplayed()){
                                         UsrEmail.click();
                                         browser.keys(["\uE009","a"]);
                                          UsrEmail.keys("\uE003");
                                           browser.pause(2000);
                                            UsrEmail.setValue('mkc3031'+today+'@gmail.com');
                                              save.click();}
/* assert.strictEqual(snackbar.getText(),"Account Created");*/
  
   browser.pause(1000);
   filter.click();
   browser.pause(1000);
    customerName.setValue('apple');
     customerName.keys("\uE015");
      browser.pause(1000);
       customerName.keys("\uE007");
        filterApply.click();
          browser.pause(2000);
            invite.click();
            browser.pause(2000);
/*assert.strictEqual(snackbar.getText(),"User invited");*/
  browser.pause(3000);
   Buyerlist.click();
   browser.pause(2000);
   custEdit.click();
    cusWebsite.setValue('www.apple.com');
     cusTaxid.setValue('GST');
      cusSubIndustry.scrollIntoView();
       cusSubIndustry.setValue('Tires & Rubber');
        cusSubIndustry.keys("\uE015");
         browser.pause(1000);
         cusSubIndustry.keys("\uE015");
         browser.pause(1000);
          cusSubIndustry.keys("\uE007");
           acuntOwner.scrollIntoView();
            acuntOwner.setValue('a')
              acuntOwner.keys("\uE015");
               browser.pause(2000);
               acuntOwner.keys("\uE015");
                 acuntOwner.keys("\uE007");
                  supportOwner.scrollIntoView();
                   supportOwner.setValue('a');
                     supportOwner.keys("\uE015");
                       browser.pause(2000);
                         supportOwner.keys("\uE007");
                           save.click();
                             
/*assert.strictEqual(snackbar.getText(),"Account updated successfully");*/  
  browser.pause(2000);                        
   createUser.click();
    BuyerUsrName.setValue("MK");
     UsrMobileNo.setValue("90909090");
      usrmail.setValue("realMadrid007"+today+"@gmail.com");
       UsrRole.setValue("User");
         browser.pause(1000);
           UsrRole.keys("\uE015");
            browser.pause(1000);
              UsrRole.keys("\uE007");
                save.click();
                 browser.pause(1000);
                                       if(alreadyExsists.isDisplayed()){
                                         UsrEmail.click();
                                         browser.keys(["\uE009","a"]);
                                          UsrEmail.keys("\uE003");
                                           browser.pause(2000);
                                            UsrEmail.setValue('mkw3031'+today+'@gmail.com');
                                              save.click();}
/*assert.strictEqual(snackbar.getText(),"Account updated successfully");*/
                    browser.pause(2000);
                     Checkbox.click();
                      browser.pause(1000);
                        invite.click();
                         browser.pause(2000);
/*assert.strictEqual(snackbar.getText(),"User invited");*/
          browser.refresh();
           MoreOptions.click();
            browser.pause(1000);
              deleteBuyer.click();
                 browser.pause(1000);
/*assert.strictEqual(snackbar.getText(),"Delete the Contacts other than default email user, before deleting company");*/
                       firstCheckbox.scrollIntoView();
                       firstCheckbox.click();
                              browser.pause(1000);
                              userMoreOptions.click();
                                browser.pause(2000);
                                  userReinvite.click();
                                
 /*assert.strictEqual(snackbar.getText(),"User reinvited");*/
          addressTab.click();
            firstCheckbox.click();
             deleteBtn.click();
             
/*assert.strictEqual(snackbar.getText(),"you can`t delete the register address");*/ 
                browser.refresh();
                  createBranch.click();
                    branchName.setValue("Coimabtore Branch");
                      branchAddress.setValue("16 avinashi road");
                      branchCountry.setValue("India");
                      browser.keys("\uE015");
                       browser.pause(2000);
                       browser.keys("\uE015");
                        browser.pause(2000);
                        browser.keys("\uE007");
                        branchState.setValue("Tamil nadu");
                         browser.keys("\uE015");
                          browser.pause(2000);
                           browser.keys("\uE007");
                           branchDistrict.setValue("Coimbatore");
                           browser.keys("\uE015");
                            browser.pause(2000);
                             browser.keys("\uE007");
                        branchlocality.setValue("coimbatore");
                         browser.keys("\uE015");
                          browser.pause(2000);
                           browser.keys("\uE007");
                           branchCity.setValue("coimbatore");
                             branchPin.setValue("641010");
                               branchState.setValue("Tamil nadu");
                                 
                                    branchtax.setValue('GST');
                                      contactName.setValue("admin");
                                        contactNo.setValue("9898989899");
                                          save.click();
                                                          
/*assert.strictEqual(snackbar.getText(),"Address added successfully");*/
                             browser.pause(2000);
                             addressTab.click();
                             browser.pause(1000);
                               Checkbox.click();
                                 edit.click();
                                   branchTags.scrollIntoView();
                                    branchTags.setValue('TN');
                                     branchTags.keys("\uE015");
                                       browser.pause(1000);
                                        branchTags.keys("\uE007");
                                          browser.pause(1000);
                                            erpCode.setValue("SYS2021");
                                             vendorCode.setValue("2021");
                                               save.click();
/*assert.strictEqual(snackbar.getText(),"Account updated successfully");*/
close.click();
browser.getUrl();
  expect(browser).toHaveUrlContaining('accounts/landing');
     Buyerlist.click();
      contactsTab.click();
       Checkbox.click();
        userEdit.click();
         usrJobTilte.scrollIntoView();
          usrJobTilte.setValue("QA");
           UsrDepartment.setValue("ECE");
             submit.click();             
/*assert.strictEqual(snackbar.getText(),"Saved successfully");*/

 browser.pause(1000);
  goBack.click();
   browser.pause();
    Checkbox.click();
     userMoreOptions.click();
      browser.pause(1000);
        userDelete.click();
         yes.click();
   
/*assert.strictEqual(snackbar.getText(),"User deleted successfully");*/
               browser.pause(1000);
                preferenceTab.click();
                  inviteAccess.scrollIntoView();
                   inviteAccess.click();
                     inventoryAccess.click();
                   /* showPrice.click();
                      taxExempted.click();
                      if(exemptionId.isDisplayed()){
                          exemptionId.setValue("test");
                          exemptionId.keys("\uE013");
                             browser.pause(1000);
                              exemptionId.keys("\uE007");
                              browser.pause(1000);
                               }*/
                          browser.pause(1000);
                           submit.click();
                            browser.pause(1000);
/*assert.strictEqual(snackbar.getText(),"Account updated successfully");*/

                                   
/*Buyer delete*/
    MoreOptions.waitForDisplayed(2000);
     MoreOptions.click();
      browser.pause(1000);
       deleteBuyer.click();
        browser.pause(1000);
         expect(yes).toBeExisting();
          yes.click();
           browser.getUrl();
expect(browser).toHaveUrlContaining('accounts/landing');


     });


    it("Create a Company Address",()=>{

       let addAddress =$('//*[text()="Add Address"]');
       let search=$('//input[@name="Search"]');
       let branchName=$('//input[@name="branchName"]');
       let branchAddress=$('//textarea[@name="addressLine"]');
       let locality=$('//input[@name="locality"]');
       let branchCity=$('//input[@name="city"]');
       let branchPin=$('//input[@name="pinCodeId"]');
       let branchDistrict=$('//input[@name="district"]');
       let branchState=$('//input[@name="state"]');
       let branchCountry=$('//input[@name="country"]');
       let Lattitude=$('//input[@name="lattitude"]');
       let Longitude=$('//input[@name="longitude"]');
       let billing=$('//input[@name="isBilling"]');
       let Shipping=$('//input[@name="isShipping"]');
       let warehouse=$('//input[@name="wareHouse"]');
       let tax=$('//input[@name="gst"]');
       let contactName=$('//input[@name="primaryContact"]');
       let contactNo=$('//input[@name="mobileNo"]');
       let save = $('#editDialogButton');
       let cancel=$('#editDialogCancel');
       let lastBranch=$('(//*[@type="checkbox"])[1]');
       let firstBranch=$('(//input[@type="checkbox"])[last()]');
       let cmpanyEdit=$('//*[text()="Edit"]');
       let cmpnyDelete=$('//*[text()="Delete"]');
       let snackbar =$('#client-snackbar');
       let yes=$('#yes');



     browser.url('/settings/company');
      browser.pause(1000);
      firstBranch.click();
       browser.pause(2000);
         cmpnyDelete.click();
           yes.click();
            browser.pause(2000);
            snackbar.scrollIntoView();
assert.strictEqual(snackbar.getText(),"Registered Address cannot be deleted");
             
browser.refresh();  
 addAddress.click();
  browser.pause(1000);
   branchName.setValue("Coimabtore ");
     branchAddress.setValue("16 avinashi road");
      locality.setValue("coimbatore");
      branchCountry.setValue("India");
      browser.keys("\uE015");
      browser.pause(1000);
      browser.keys("\uE015");
      browser.pause(1000);
      browser.keys("\uE007");
      branchState.setValue("Tamil nadu");
      browser.keys("\uE015");
      browser.pause(1000);
      browser.keys("\uE007");
      branchDistrict.setValue("Coimbatore");
      browser.keys("\uE015");
      browser.pause(1000);
      browser.keys("\uE007");
        branchCity.setValue("coimbatore");
         branchPin.setValue("641010");
            tax.setValue('GST');
                contactName.setValue("madhan");
                contactNo.setValue("9898989899");
                  save.click();
                   browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Address added successfully");
 
 lastBranch.scrollIntoView(0,3000);  
 browser.pause(5000);
  lastBranch.click();
      browser.pause(1000);
        cmpanyEdit.click();
          browser.pause(1000);
          branchName.setValue("Branch ");
          if(Shipping.getValue()==='true'){
            browser.pause(1000);
              Shipping.click();
          }
          contactName.setValue('kumar');
          browser.pause(1000);
            save.click();
             browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Address updated Successfully");
         
          
          lastBranch.scrollIntoView(0,3000);  
          browser.pause(2000);
           lastBranch.click();
            browser.pause(2000);
              cmpnyDelete.click();
                yes.click();
                 browser.pause(2000);
assert.strictEqual(snackbar.getText(),"Branch address deleted succesfully");
    });

 it("Create and delete the  user " ,() =>{

          let createUser = $('//button[@type="button"]/following::span[text()="Add User"]');
          let EmpName = $('//input[@name="displayName"]');
          let EmpMobile= $('//input[@name="mobileNo"]');
          let EmpEmail = $('//input[@name="email"]');
          let EmpJobTitle = $('//input[@name="jobTitle"]');
          let EmpDepart = $('//input[@name="department"]');
          let EmpRole = $('//input[@name="roleName"]');
          let EmpSave=$('#loadingButton');
          let invite=$('//*[contains(@title,"ABCD")]/following::td[5]');
          let Emplist=$('//*[contains(@title,"ABCD")]');
          let activeEmp=$('//*[contains(@title,"Admin")]');
          let MoreOptions=$('//button[@title="More options"]');
          let deleteEmp=$('//*[text()="Delete"]');
          let activateEmp=$('//*[text()="Activate"]');
          let inactivateEmp=$('//*[text()="Inactivate"]');
          let tags=$('//*[@placeholder="Search"]');
          let yes=$('#yes');
          let save=$('#loadingButton');
          let snackbar = $('#client-snackbar');
          let alreadyExsists=$('//p[text()="Email id already exists"]');
          let close=$('//button[@title="Close"]');
          


browser.url("/settings/team/landing");
createUser.doubleClick();   
 browser.pause(2000);
  EmpName.setValue('ABCD');
   EmpMobile.setValue('9090909090');
    EmpEmail.setValue("qa7"+today+"@gmail.com");
     EmpJobTitle.setValue('QA');
      EmpDepart.setValue('Accounts');
       EmpRole.setValue("user");
         browser.pause(1000);
          EmpRole.keys("\uE015");
           browser.pause(1000);
            EmpRole.keys("\uE007");
             browser.pause(2000);
              EmpSave.click();
              if(alreadyExsists.isDisplayed()){
                EmpEmail.click();
                 browser.keys(["\uE009", "a"]);
                 EmpEmail.keys("\uE003");
                  browser.pause(2000);
                   EmpEmail.setValue("mkc3031"+today+"@gmail.com");
                    EmpSave.click();
              }
               browser.pause(2000);
assert.strictEqual(snackbar.getText(),"User added successfully");

 /*invite the employee*/
    
    invite.click();
     browser.pause(2000);
/*assert.strictEqual(snackbar.getText(),"User invited");*/

/*edit the employee*/
Emplist.click();
tags.setValue('a');
tags.keys("\uE015");
browser.pause(1000);
tags.keys("\uE007");
save.click();
browser.pause(2000);
/*assert.strictEqual(snackbar.getText(),"User updated successfully");*/

/*delete the employee*/
   browser.refresh();
     MoreOptions.click();
      browser.pause(1000);
       deleteEmp.click();
        browser.pause(1000);
         yes.click();
         browser.pause(2000);
assert.strictEqual(snackbar.getText(),"User deleted successfully");

/*

browser.pause(2000);
activeEmp.click();
browser.pause('1000');
MoreOptions.click();
browser.pause(1000);
  inactivateEmp.click();
    yes.click();
    browser.pause(2000);
assert.strictEqual(snackbar.getText(),"User activated");


MoreOptions.click();
browser.pause(1000);
  activateEmp.click();
    yes.click();
    browser.pause(2000);
assert.strictEqual(snackbar.getText(),"User activated"); */

  

   }); 
    
});
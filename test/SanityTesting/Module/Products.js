const  assert = require("assert");
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

    it("login page", async() => {
      await  browser.url('/auth/login');
    await  browser.pause(3000);
    await  browser.getCookies();
      await  browser.deleteCookies();
      await  browser.maximizeWindow();
      await  browser.pause(3000);
        console.log(await browser.getTitle);
        let loginUsername = await $('[name="Username"]');
        let loginpassword =await $('[name="Password"]');
        let signIn = await $('#loadingButton');
        let Register = await $('//*[text()="Sign Up"]');
        let mailReq = await $('//p[text()="Email required"]');
        let pwdReq = await $('//p[text()="Password required"]');
        let invaildMail = await $('//p[text="Invalid business email"]');
        let userExist = await $('//p[text="User does not exist"]');
        let incrtPwd = await $('//p[text="Incorrect password"]');

        await loginUsername.waitForDisplayed(2000);
        await loginUsername.setValue("admin@apptino.com");
        await loginpassword.waitForDisplayed(2000);
        await loginpassword.setValue("Admin@123");
        await signIn.click();
        if ((await mailReq.isDisplayed()) || (await invaildMail.isDisplayed())||(await userExist.isDisplayed()))
        {
          await loginUsername.click();
        await  browser.pause(2000)
        await  browser.keys(["\uE009", "a"]);
          await loginUsername.keys("\uE003");   
          await  loginUsername.setValue("admin@apptino.com");
         await  signIn.click();
        }
        if((await pwdReq.isDisplayed()) || (await incrtPwd.isDisplayed()))
        {         
           await  browser.pause(2000)
           await  browser.keys(["\uE009", "a"]);
           await  loginpassword.keys("\uE003");   
           await  loginpassword.setValue("Admin@123");
           await  signIn.click();
        }
        
        await  browser.pause(5000);
        await  browser.getUrl();
        await  expect(await browser).toHaveUrlContaining('dashboard');



    });


   

    // it("Create and delete the Brand",async() => {
        
    //     let AddBrand = await $('//span[text()="Delete"]/following::button[1]');
    //     let Brandname = await $('//span[text()="Cancel"]/preceding::input[1]');
    //     let Submit = await $('//*[@id="editDialogButton"]');
    //     let Cancel = await $('#editDialogCancel');
    //     let save = await $('#loadingButton');
    //     let DeleteBrand = await $('//span[text()="Delete"]');
    //     let Yes = await $('#yes');
    //     let snackbar = await $('#client-snackbar');
    //     let nameExsists = await $('//p[text()="brand Name already exists "]');

    //     await browser.url("/brands");
    //     await browser.pause(1000);
    //     await  AddBrand.click();
    //     await browser.pause(1000);
    //     await  Brandname.setValue("Nokia");
    //     await browser.pause(1000);
    //     await  Submit.click();
    //     if (await nameExsists.isDisplayed()) {
    //       await  Brandname.click();
    //         await browser.pause(1000);
    //         await browser.keys(["\uE009", "a"]);
    //         await  Brandname.keys("\uE003");
    //         await browser.pause(1000);
    //         await Brandname.setValue('Sanity');
    //         await  Submit.click();
    //     }
    //     await browser.pause(4000);
    //     await assert.strictEqual(await await snackbar.getText(),"Brand added");


    //     let brandImage = await $('//h6[text()="Brands Image"]/following::input[1]');
    //     await browser.execute(
    //         (el) => el.style.display = 'block',
    //         await brandImage);
    //         await brandImage.waitForDisplayed();
    //         await brandImage.setValue(imageUpload);
    //     await browser.pause(2000);
    //     await save.click();

    //     awaitDeleteBrand.click();
    //     await browser.pause(2000);
    //     await Yes.click();
    //     await browser.pause(2000);
    //     await assert.strictEqual(await await snackbar.getText(),"Brand deleted successfully");


    // })


//     it("Create and delete the Category",async()=>{
       
//       let AddCategoery=await $('//span[text()="Add category"]');
//       let catName = await $('//input[@name="name"]');
//       let Department  =await $('//span[text()="Department"]');
//       let save=await $('//span[text()="Save"]');
//       let Cancel =await $('//span[text()="Cancel"]');
//       let EditCategory=await $('(//*[@aria-label="edit"])[last()]');
//       let DeleteCategoery = await $('(//*[@aria-label="delete"])[last()]');
//       let Yes = await $('#yes');
//       let snackbar = await $('#client-snackbar');



//     await browser.url("/categories");
//     await browser.pause(3000);
//      await AddCategoery.click();
//       await browser.pause(2000);
//       await catName.click();
//       await catName.keys(["\uE009", "a"]);
//       await catName.keys("\uE003");
//       await browser.pause(2000);
//       await catName.setValue("bocsh");

//     let catIcon=await $('//h6[text()="Icon"]/following::input[1]');
//     await catIcon.scrollIntoView();

//       await browser.execute(
//         (el) => el.style.display = 'block',
//         await catIcon );
//         await catIcon.waitForDisplayed();
//         await catIcon.setValue(imageUpload);
//         await browser.pause(4000);
//         await save.click();       
// await assert.strictEqual(await snackbar.getText(),"Saved successfully");

// /*Edit category 
//         await browser.pause(2000);
//  await newCategory.click();  
//   await EditCategory.click();
//       await browser.pause(2000);
//       let catImage=await $('//h6[text()="Image"]/following::input[1]');
//    await  catImage.scrollIntoView();
//       await browser.execute(
//             (el) => el.style.display = 'block',
//       await catImage );
//       await catImage.waitForDisplayed();
//        await browser.pause(2000);
//    await catImage.setValue(imageUpload);
//       await browser.pause(2000);
//        await save.scrollIntoView();
//          await browser.pause(4000);
//      await save.click();
// await assert.strictEqual(await snackbar.getText(),"Saved successfully");*/
// /*Delete category */
// await browser.pause(2000);
// await  DeleteCategoery.scrollIntoView();
// await DeleteCategoery.click();
//       await browser.pause(2000);
//       await Yes.click();
//           await browser.pause(2000);
// await assert.strictEqual(await snackbar.getText(),"Deleted successfully");

//     });

    it("Create and delete the product",async()=>{
       
        let AddProdcut=await $('#MPG_PPGL_CFBCPG');
        let save = await $('//*[@id="editDialogButton"]');
        let Cancel =await $('#editDialogCancel');
        let ProductName=await $('//input[@name="name"]');
        let LeadTime=await $('//input[@name="standardLeadTime"]');
        let Time=await $('//input[@value="Days"]');
        let BrandName=await $('//input[@id="brandsId"]');
        let Date =await $('#date-picker-inline');
        let currentDate = await $('//*[@class="MuiButtonBase-root MuiIconButton-root MuiPickersDay-day MuiPickersDay-current MuiPickersDay-daySelected"]');
        let CreateVarient=await $('#MPG_PPGL_CFBCPG');
        let productID=await $('//input[@name="brandProductId"]');
        let cloneProdID=await $('//input[@name="hsnCode"]/preceding::input[1]');
        let productVarient=await $('//*[@name="productShortDescription"]');
        let primaryCategory=await $('//*[@id="productSubCategories.primarySubcategoryName"]');
        let HSN=await $('//input[@name="hsnCode"]');
        let unitPrice=await $('//input[@name="unitListPrice"]');
        let UnitQty=await $('//input[@name="unitQuantity"]');
        let PackQty=await $('//input[@name="packagingQty"]');
        let UOM=await $('//input[@name="unitOfMeasure"]');
        let MoreOptions=await $('//button[@Title="More options"]');
        let DeleteProdvarient=await $('//*[text()="Delete"]');
        let DeleteProd=await $('//*[text()="Delete"]');
        let yes=await $('#yes');
        let snackbar=await $('#client-snackbar');
        let publish=await $('//span[text()="Publish"]');
        let clone=await $('//span[text()="Clone"]');
        let catalogID=await $('//*[@name="extendedProductID"]');
        let subCategoery=await $('//*[@placeholder="Search for Categories"]');
        let MSRP=await $('//input[@name="unitMrp"]');
        let prodCost=await $('//input[@name="productCost"]');
        let costValidty=await $('//input[@name="costValidity"]');
        let vaildDate=await $('//button[contains(@class,"daySelected")]/following::div[1]');
        let MOQ=await $('//input[@name="outerPackQty"]/preceding::input[1]');
        let outerPack=await $('//input[@name="outerPackQty"]');
        let isNew=await $('//input[@name="showPrice"]/preceding::input[1]');
        let priceTocus=await $('//input[@name="isDiscontinued"]');
        let movingProd=await $('//input[@name="isBrandStock"]');
        let DisconProd=await $('//input[@name="isDiscontinued"]');
        let disTocustmers=await $('//input[@name="isListpricePublic"]');
        let internalProd=await $('//input[@name="internal"]');
        let saveProd=await $('#loadingButton');
        let lastProd=await $('//h4[text()="Product Variants"]/following::div[contains(@class," MuiPaper-elevation1 MuiPaper-rounded")][last()]');
        let asset=await $('//*[@id="Assets"]');
        let primeImage=await $('(//*[@title="Make Primary Image"])[last()]');
        let freqBought=await $('//*[@id="Frequently Bought Together"]');
        let frqBoughtVarient=await $('//*[@placeholder="Search for Product Variant"]');
        let longDesc=await $('//*[@id="Long Description & Keywords"]');
        let addKeywords=await $('//*[@id="Long Description & Keywords"]/following::input[1]');
        let varientAccess=await $('//*[@id="Variant Accessories"]');
        let addprodVarient=await $('//*[@placeholder="Search for Product Variant"]');
        let spec=await $('#Specifications');
        let specDesc=await $('//*[@id="Specifications"]/following::input[1]');
        let specValue=await $('//*[@id="Specifications"]/following::input[2]');
        let addtionalInfo=await $('//*[@id="Additional Information"]');
        let packingDimensions=await $('//*[@name="packagingDimension"]');
        let netWeight=await $('//*[@name="netWeight"]');
        let eanUpc=await $('//*[@name="ean"]');
        let orginCountry=await $('//*[@name="ean"]/following::input[1]');
        let prodExsists=await $('//p[text()="Product ID (SKU) already exists"]');
        let uploadProd=await $('//*[text()="Upload Products"]');
        let groupAssign=await $('//span[text()="Assign"]');
        let category=await $('//span[text()="Assign"]/preceding::input[1]');
        let uploadSave=await $('//span[text()="Save"]');
        let optionsMore=await $('//span[text()="Create product variant"]/following::button[1]');

            


      /*create product*/
    await browser.url("/create-products/productgroup-landing");
     await browser.pause(1000);
     await AddProdcut.click();
       await browser.pause(1000);
       await ProductName.setValue("1100");
       await  LeadTime.setValue("10");
           await browser.pause(1000);
           await Time.click();
             await browser.pause(1000);
              await browser.keys(["\uE009", "a"]);
              await Time.keys("\uE003");
                await browser.pause(1000);
                await Time.setValue("Days");
                await Time.keys("\uE015");
                await   Time.keys("\uE007");
                       await browser.pause(1000);
                      await  BrandName.setValue("HP");
                          await browser.pause(1000);
                         await  BrandName.keys("\uE015");
                     await browser.pause(1000);
                     await   BrandName.keys("\uE007");
                          await browser.pause(1000);
                               await Date.click();
                               await  currentDate.click();
                               await   save.click();
                                        await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),'Product group created');

/* upload product */
await MoreOptions.click();
  await browser.pause(1000);
  await uploadProd.click();
    
   let uploadFile = await $('#upload-excel-file');
      await browser.execute(
           
           (el) => el.style.display = 'block',
           await uploadFile
       );
       await uploadFile.waitForDisplayed();
       await uploadFile.setValue(productUpload);

       await category.setValue("Apple watch");
       await browser.pause(1000);
       await  category.keys("\uE015");
           await browser.pause(1000);
           await  category.keys("\uE007");
           await   groupAssign.click();
             /*  await uploadSave.click();*/

      
                

        /*create product variant*/
    await browser.refresh();
    await CreateVarient.click();
      await browser.pause(1000);
      await productID.setValue("1100 black");
      await  productVarient.setValue("Nokia 1100");
      await primaryCategory.setValue("Apple watch");
           await browser.pause(1000);
           await primaryCategory.keys("\uE015");
               await browser.pause(1000);
              await primaryCategory.keys("\uE007");
              await  HSN.setValue("7");
                    await browser.pause(1000);
                   await  HSN.keys("\uE015");
                         await browser.pause(1000);
                        await HSN.keys("\uE007");
                        await unitPrice.setValue("10000");
                        await   UnitQty.setValue("1");
                        await PackQty.setValue("1");
                        await UOM.setValue("NOS");
                        await save.click();
                                         if(await prodExsists.isDisplayed()){
                                          awaitproductVarient.click();
                                              await browser.keys(["\uE009", "a"]);
                                              await productVarient.keys("\uE003");
                                                 await browser.pause(2000);
                                                 await  productVarient.setValue("Nokia 11000 test");
                                                 await  save.click();
                                         }
                                         
                                        await browser.pause(1000);
await assert.strictEqual(await snackbar.getText(),'Product created');
   
await catalogID.setValue('12345');
await subCategoery.setValue('mobile phones');
await  subCategoery.keys("\uE015");
        await browser.pause(1000);
       await subCategoery.keys("\uE007");
       await  longDesc.click();
           await browser.pause(1000);
           await  addKeywords.setValue('nokia');
           await addKeywords.keys('\uE007');
           await   asset.click();
                    let prodImg=await $('//*[@id="button-file"]');
                        await browser.execute(
                           (el) => el.style.display = 'block',
                           await prodImg );
                           await prodImg.waitForDisplayed();
                           await prodImg.setValue(imageUpload);
                           await prodImg.pause(2000);
                           await prodImg.waitForDisplayed();
                           await prodImg.setValue(ProductImage);
                           await prodImg.pause(1000);
                           await primeImage.click();
  /* await freqBought.click();
    await frqBoughtVarient.setValue('redmi');
     await frqBoughtVarient.keys('\uE015');
         await browser.pause(1000);
        await frqBoughtVarient.keys('\uE007');*/
    
        await spec.click();
            await browser.pause(1000);
            await  specDesc.setValue("nokia best mobile");
            await specValue.setValue('2500');
              await browser.pause(1000);
              await  addtionalInfo.click();
                await browser.pause(1000);
                await  packingDimensions.setValue('10*10');
                await netWeight.setValue('250g');
                await  eanUpc.setValue(1100);
         

                await MSRP.setValue('1000');
                await prodCost.setValue('800');
                await costValidty.click();
                await  vaildDate.click();
                await  MOQ.waitForClickable(1000);
                await MOQ.setValue('2');
                await   outerPack.setValue('1');
           await browser.pause(2000);
           await orginCountry.setValue('China');
           await browser.keys('\uE015');
           await browser.pause(1000);
            await browser.keys('\uE007');
            await browser.pause(1000);
            await  isNew.scrollIntoView();
         
             /*isNew.click(); */
                   if(await priceTocus.getValue()===true){
                    await   priceTocus.click();
                      }
                      if(await disTocustmers.getValue()===true){
                        await  disTocustmers.click();
                         }                        
                         await internalProd.click();
                         await movingProd.click();
                         await  DisconProd.click();
                        await  saveProd.click();
                                  await browser.pause(1000);
/*await assert.strictEqual(await snackbar.getText(),'Product updated');*/
                                      await browser.pause(1000);
                                      await  publish.click();
                                      await  yes.click();
                                        await browser.pause(1000);                            
/*await assert.strictEqual(await snackbar.getText(),'Product group published');*/
                                       await browser.pause(1000);  
                                       await  clone.click();
                                       await productID.setValue('1100 red');
                                       await  save.click();
                                              if(await cloneProdID.isDisplayed()){
                                                await cloneProdID.setValue('1100 Red');
                                                await save.click();}
                                                  await browser.pause(1000);
/*await assert.strictEqual(await snackbar.getText(),'Product created'); */  
await MoreOptions.click();
     await browser.pause(2000);
     await DeleteProdvarient.click();
         await browser.pause(1000);
         await  yes.click();
        
 /*await assert.strictEqual(await snackbar.getText(),'Product deleted');*/

 await optionsMore.click();
      await browser.pause(2000);
      await DeleteProd.click();
        await browser.pause(1000);
        await   yes.click();
          await browser.pause(1000);
/*await assert.strictEqual(await snackbar.getText(),'1 products linked to this Product Group, kindly delete those products first');*/
await  lastProd.scrollIntoView();
           await browser.pause(1000);
          await   lastProd.click();
             await browser.pause(1000);
            await MoreOptions.click();
               await browser.pause(1000);
               await  DeleteProdvarient.click();
                   await browser.pause(1000);
                   await yes.click();
                     await browser.pause(1000);
/*await assert.strictEqual(await snackbar.getText(),'Product deleted');*/
                   await optionsMore.click();
                             await browser.pause(1000);
                            await DeleteProd.click();
                                 await browser.pause(1000);
                                await yes.click();
                                     await browser.pause(1000);
                                       await browser.getUrl();       
await expect(await browser).toHaveUrlContaining('productgroup-landing');
      });

    it("Create and delete the Pricelist",async()=>{
       
      let CreatePriceList=await $('//span[text()="Create Price List"]');
      let PlName = await $('//input[@name="priceListName"]');
      let PlDesc =await $('//textarea[@name="description"]');
      let PlCurrency =await $('//input[@name="currencyId"]');
      let isDefaultPL=await $('//input[@name="isDefault"]');
      let isApprovalPL=await $('//input[@name="isDefault"]/following::input[1]');
      let save = await $('//*[@id="editDialogButton"]');
      let Cancel =await $('#editDialogCancel');
      let SearchPL=await $('//input[@placeholder="Search by price list name"]');
      let SelectPL=await $('//tbody[@class="MuiTableBody-root"]/tr[1]/td[1]'); 
      let DeletePL = await $('//span[text()="Delete Price list"]');
      let submit = await $('#loadingButton');
      let snackbar = await $('#client-snackbar');
      let companySearch=await $('//*[@placeholder="Search Companies"]');
      let addCompany=await $('//span[text()="Add Companies"]');
      let addProdcuts=await $('//span[text()="Add Products"]');
      let prodBrand=await $('//*[text()="Brands"]/following::div[1]/input[1]');
      let prodCate=await $('//*[text()="Catgeory"]/following::div[1]/input[1]');
      let prodSubcat=await $('//*[text()="Sub-Category"]/following::div[1]/input[1]');
      let prodGroup=await $('//*[text()="Product Group"]/following::div[1]/input[1]');
      let prodName=await $('//*[text()="Products"]/following::div[1]/input[1]');
      let prodDisc=await $('//*[contains(text(),"Discounts")]/following::div[1]/input[1]');
      let ProdToList=await $('//span[text()="Add Products To List"]');
      let saveProd=await $('//span[text()="Save"]');
      let checkAll=await $('//span[@title="Checkall"]');
      let applyDisc=await $('//span[text()="Apply Discount"]');
      let deleteprod=await $('//span[text()="Delete"]');
      let discount=await $('//*[@name="discount"]');





    await browser.url("pricelist/landing");
     await browser.pause(2000);
     await CreatePriceList.click();
        await browser.pause(1000);
        await  PlName.setValue("Sanity Pricelist");
        await  PlDesc.setValue("Testing");
        await PlCurrency.setValue("INR");
            await browser.pause(1000);
            await PlCurrency.keys("\uE015");
               await browser.pause(1000);
               await  PlCurrency.keys("\uE007");
                  await browser.pause(1000);
                 await  isApprovalPL.click();
                 await save.click();
                           await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"Pricelist Created");
    await browser.refresh();
    await SearchPL.setValue('Sanity');
    await  SelectPL.click();
    await companySearch.setValue('a');
         await browser.pause(1000);
         await  companySearch.keys("\uE015");
            await browser.pause(1000);
           await  companySearch.keys("\uE007");
                await browser.pause(1000);
               await   companySearch.click();
               await addCompany.click();
               await  submit.click();
                        await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"PriceList updated");
await  addProdcuts.click();
                    await browser.pause(1000);
                   await  prodBrand.setValue('a');
                      await browser.pause(1000);
                      await  prodBrand.keys("\uE015");
                       await browser.pause(1000);
                       await prodBrand.keys("\uE007");
                         await browser.pause(1000);
                         await prodCate.setValue('a');
                          await browser.pause(1000);
                          await   prodCate.keys("\uE015");
                            await browser.pause(1000);
                           await prodCate.keys("\uE007");
                               await browser.pause(1000);
                              await   prodSubcat.setValue('a');
                                await browser.pause(1000);
                               await   prodSubcat.keys("\uE015");
                                  await browser.pause(1000);
                                 await   prodSubcat.keys("\uE007");
                                     await browser.pause(1000);
                                    await prodGroup.setValue('a');
                                      await browser.pause(1000);
                                     await   prodGroup.keys("\uE015");
                                         await browser.pause(1000);
                                        await  prodGroup.keys("\uE007");
                                            await browser.pause(1000);
                                           await prodName.setValue('a');
                                              await browser.pause(1000);
                                             await prodName.keys("\uE015");
                                                await browser.pause(1000);
                                               await prodName.keys("\uE007");
                                                   await browser.pause(1000);
                                                  await prodDisc.setValue('10');
                                                  await ProdToList.click();
                                                  await saveProd.click();
                                                          await browser.pause(2000);
                                                         await checkAll.click();
                                                         await applyDisc.click();
                                                         await discount.setValue(10);
                                                         await submit.click();
                                                         await checkAll.scrollIntoView();
                                                         await checkAll.click();
                                                         await   deleteprod.click();
                                                         await submit.click();
                                             await browser.pause(1000);                                                                                                                                                                                                                              
                                             await  DeletePL.click();
                                     await browser.pause(1000);
                                     await submit.click();
                           await browser.pause(1000);
                        await browser.getUrl();
await expect(await browser).toHaveUrlContaining('pricelist/landing');
    });

    it("Create and delete the Inventory",async()=>{



    let AddInventory =await $('//span[text()="Add New Inventory"]');
    let searchProduct=await $('//input[@placeholder="Search for products"]');
    let SearchResult = await $('//div[@class="MuiPaper-root MuiPaper-elevation1"]/div/ul/div[1]');
    let prodcutId=await $('//input[@name="InventoryForm.productsId.brandProductId"]');
    let BrandName=await $('//input[@name="InventoryForm.brandId.name"]');
    let shortDes=await $('//input[@name="InventoryForm.productsId.productShortDescription"]');
    let ListPrice=await $('//input[@name="InventoryForm.productsId.unitListPrice"]');
    let UniqueQty=await $('//input[@name="InventoryForm.productsId.unitQuantity"]');
    let wareHouse=await $('//input[@name="InventoryForm.wareHouseDtoId"]');
    let warehouseDrpdwn=await $('//button[@title="Open"]');
    let stockQty=await $('//input[@name="InventoryForm.stockQuantity"]');
    let safetyQty=await $('//input[@name="InventoryForm.safetyStock"]');
    let availableQty=await $('//input[@name="InventoryForm.availableQuantity"]');
    let avgCost=await $('//input[@name="InventoryForm.averageCost"]');
    let cancel=await $('//span[text()="Cancel"]');
    let save=await $('#loadingButton');
    let snackbar = await $('#client-snackbar');
    let search=await $('//input[@placeholder="Search by Product ID"]');
    let MoreOptions=await $('//button[@Title="More options"]');
    let Delete=await $('//*[text()="Delete"]');
    let productResult=await $('//div[@role="button"][1]');
    let maxValue=await $('//p[contains(text(),"Maximum")]');




    await browser.url("/inventory/landing");
     await browser.pause(2000);
     await AddInventory.click();
       await browser.pause(1000);
       await searchProduct.setValue("MQTX2HN/A");
      await browser.pause(1000);
      await SearchResult.click();
      await  safetyQty.scrollIntoView();
              if((await wareHouse.getValue)!=='')
            {
              await browser.keys(["\uE009", "a"]);
              await wareHouse.keys('\uE003');
            }
            await  warehouseDrpdwn.click();
            await wareHouse.setValue('a');
          await browser.pause(1000);
          await wareHouse.keys("\uE015");
             await browser.pause(1000);
             await wareHouse.keys("\uE007");
                await browser.pause(1000);
                if(await stockQty.getValue()===''){
                  await stockQty.setValue('10');
                   await browser.pause(1000);
                   }
                 if(await safetyQty.getValue()===''){
                  await safetyQty.setValue('1');
                        await browser.pause(1000);
                   }
                   await avgCost.setValue('01');
                   await  save.click();
                           if(await maxValue.isDisplayed()){
                            await browser.keys(["\uE009", "a"]);
                            await avgCost.keys('\uE003');
                            await avgCost.setValue(100);
                            await save.click();
                           }
                            await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"Saved successfully");

await search.setValue('MQTX2HN/A');
      await browser.pause(1000);
      await productResult.click();
          await browser.pause(1000);
          await MoreOptions.click();
            await browser.pause(1000);
            await   Delete.click();
               await browser.pause(1000);
              await  save.click();
                  await browser.pause(1000);
await assert.strictEqual(await snackbar.getText(),"Saved successfully");
    });

    it("upload and delete the inventory",async()=>{

    let upload =await $('//*[text()="Upload"]');
    let save=await $('#loadingButton');
    let filters=await $('//*[text()="Filters"]');
    let productID=await $('//*[@id="brand"]/following::input[1]');
    let Apply=await $('//*[text()="Apply"]');
    let checkbox=await $('//input[@type="checkbox"]')
    let MoreOptions=await $('//button[@Title="More options"]');
    let Delete=await $('//*[text()="Delete"]');
    let snackbar = await $('#client-snackbar');
    let alertMsg=await $('//*[text()="Warehouse name not exist"]');
    let wareHouse=await $('//*[contains(@name,"wareHouseName-inventoryForm")]');
    let filterResults=await $('(//*[contains(@class,"-deleteIconSmall")])[last()]');
    let filterClear=await $('//span[text()="Clear All"]');


    await browser.url("/inventory/landing");
     await browser.pause(2000);
     if(await filterResults.isExisting())
           {    await browser.pause(2000);
            await filterResults.click();
               }

               await upload.click();
        let uploadFile = await $('#upload-excel-file');
            await browser.execute(
                
                (el) => el.style.display = 'block',
                
                await uploadFile
            );
            await uploadFile.waitForDisplayed();
            await  uploadFile.setValue(inventoryUpload);
        await browser.pause(2000);
        if(await alertMsg.isDisplayed()){
          await wareHouse.click();   
          await browser.pause(1000);
            await browser.keys("\uE015");
             await browser.pause(1000);
                await browser.keys("\uE007")

        }
        await save.click();
            await browser.pause(1000);
await assert.strictEqual(await snackbar.getText(),"Saved successfully");

    await browser.refresh();
    await filters.click();
    await browser.pause(1000);
    await filterClear.click();
     await browser.pause(1000);
     await  productID.setValue('Z0WX1HN/A');
       await browser.pause(1000);
       await Apply.click();
         await browser.pause(1000);

         await  checkbox.click();
        await browser.pause(1000);
        await MoreOptions.click();
            await browser.pause(1000);
            await   Delete.click();
              await browser.pause(1000);
              await  save.click();
                await browser.pause(1000);
await assert.strictEqual(await snackbar.getText(),"Changes saved successfully");
    });
    
    it("Create and delete the Buyer", async()=>{

      let createCustomer=await $('//span[text()="Create Customer"]');
      let BuyerName=await $('//input[@name="companyName"]');
      let BranchName=await $('//input[@name="regAddress.branchName"]');
      let Address=await $('//*[@name="regAddress.addressLine"]');
      let locality=await $('//*[@name="regAddress.locality"]');   
      let city=await $('//input[@name="regAddress.city"]');
      let district=await $('//input[@name="regAddress.district"]');
      let State=await $('//input[@name="regAddress.state"]');
      let pin=await $('//input[@name="regAddress.pinCodeId"]');
      let country=await $('//input[@name="regAddress.country"]');
      let billing=await $('//input[@name="regAddress.isBilling"]');
      let Shipping=await $('//input[@name="regAddress.isShipping"]');
      let tax=await $('//input[@name="regAddress.gst"]');
      let BusinessType=await $('//input[@name="businesstype"]');
      let Currency=await $('//input[@name="currencyId"]');
      let BuyerUsrName=await $('//input[@name="displayName"]');
      let UsrMobileNo=await $('//input[@name="mobileNo"]');
      let UsrEmail=await $('//input[@name="userEmail"]');
      let UsrRole=await $('//input[@name="roleName"]');
      let UsrDepartment=await $('//input[@name="department"]');
      let usrJobTilte=await $('//input[@name="jobTitle"]');
      let save=await $('#editDialogButton');
      let cancel=await $('#editDialogCancel');
      let custEdit=await $('//*[text()="Company Details"]/following::button[1]');
      let invite=await $('//*[text()="invite"]');
      let Buyerlist=await $('//*[contains(@title,"Apple")]');
      let createUser=await $('//*[text()="Create User"]');
      let createBranch=await $('//span[text()="Create Branch"]');
      let usrmail=await $('//input[@name="email"]');
      let Checkbox=await $('(//input[@type="checkbox"])[last()]')
      let snackbar = await $('#client-snackbar');
      let MoreOptions=await $('//*[@title="More options"]');
      let deleteBuyer=await $('//span[text()="Delete Customer"]');
      let userEdit=await $('//span[text()="Edit"]');
      let userMoreOptions=await $('//span[text()="Edit"]/following::button[@title="More options"]');
      let userDelete=await $('//span[text()="Delete"]');
      let userReinvite=await $('//span[text()="Reinvite"]');
      let yes=await $('#yes');
      let alreadyExsists=await $('//p[text()="Email already exists"]');
      let filter=await $('//span[text()="Filters"]');
      let customerName=await $('#companyName');
      let filterApply=await $('//span[text()="Apply"]');
      let filterResults=await $('(//*[@class="MuiChip-deleteIcon MuiChip-deleteIconSmall"])[last()]');
      let cusWebsite=await $('//input[@name="website"]');
      let cusTaxid=await $('//input[@name="taxDetailsId.pan"]');
      let cusSubIndustry=await $('//input[@name="subIndustryId"]');
      let acuntOwner=await $('//input[@name="subIndustryId"]/following::input[1]');
      let supportOwner=await $('//input[@name="subIndustryId"]/following::input[2]');
      let contactsTab=await $('//span[text()="Contacts"]');
      let preferenceTab=await $('//span[text()="Preferences"]');
      let addressTab=await $('//span[text()="Addresses"]');
      let inviteAccess=await $('//input[@name="inviteAccess"]');
      let inventoryAccess=await $('//input[@name="inventory"]');
      let showPrice=await $('//*[@name="showPrice"]');
      let taxExempted=await $('//input[@name="companyId.taxExempted"]');
      let branchName=await $('//input[@name="branchName"]');
       let branchAddress=await $('//textarea[@name="addressLine"]');
       let branchlocality=await $('//input[@name="locality"]');
       let branchCity=await $('//input[@name="city"]');
       let branchPin=await $('//input[@name="pinCodeId"]');
       let branchState=await $('//input[@name="state"]');
       let branchCountry=await $('//input[@name="country"]');
       let branchDistrict=await $('//input[@name="district"]');
       let branchLongitude=await $('//input[@name="longitude"]');
       let branchbilling=await $('//input[@name="isBilling"]');
       let branchShipping=await $('//input[@name="isShipping"]');
       let branchtax=await $('//input[@name="gst"]');
       let contactName=await $('//input[@name="primaryContact"]');
       let contactNo=await $('//input[@name="mobileNo"]');
       let submit=await $('//*[@id="loadingButton"]');
       let goBack=await $('//*[@title="Go Back"]');
       let firstCheckbox=await $('//*[@type="checkbox"]');
       let edit=await $('//*[text()="Edit"]');
       let deleteBtn=await $('//*[text()="Delete"]');
       let branchTags=await $('//*[@name="tags"]');
       let erpCode=await $('//*[@name="erpCode"]');
       let vendorCode=await $('//*[@name="vendorID"]');
       let exemptionId=await $('//input[contains(@name,"ExemptionId")]');
       let close=await $('//*[@title="Close"]');
     

    await browser.url("/accounts/landing");
                if(await filterResults.isDisplayed())
         {
          await filterResults.click();
         }
         await createCustomer.click();
         await BuyerName.setValue("Apple India");
           await browser.pause(1000);
           await BuyerName.keys("\uE015");
              await browser.pause(1000);
              await  BuyerName.keys("\uE007")
              await   BranchName.setValue("Coimbatore");
    if(await Address.getValue()===''){
      await Address.setValue("100 main road");
      }
        if(await locality.getValue()===''){
          await locality.setValue("US");
        }
         if(await city.getValue()===''){
          await city.setValue("coimbatore");
         }
         
         if(await country.getValue()===''){
          await country.setValue("India");
          await browser.keys("\uE015");
          await browser.pause(2000);
          await browser.keys("\uE015");
          await browser.keys("\uE007");

        }
            if(await State.getValue()===''){
              await  State.setValue("Tamil Nadu");
               await browser.keys("\uE015");
               await browser.pause(2000);
               await browser.keys("\uE007");
            }

           if(await district.getValue()===''){
            await district.setValue("coimbatore");
               await browser.keys("\uE015");
                  await browser.pause(2000);
                  await browser.keys("\uE007");
            }
               if(await pin.getValue()===''){
                await pin.setValue("641010");
                }
                 if(await billing.getValue()===false){
                  await billing.click();
                 }
                  if(await Shipping.getValue()===false){
                    await Shipping.click();
                   }
                   await tax.setValue("Gst");
                   await BusinessType.setValue("Dealer");
       await browser.pause(1000);
       await BusinessType.keys("\uE015");
        await browser.pause(2000);
        await  BusinessType.keys("\uE007");
         await browser.pause(1000);
         await  UsrDepartment.scrollIntoView();
         await   Currency.setValue("INR");
            await browser.pause(2000);
            await   Currency.keys("\uE015");
              await browser.pause(2000);
             await  Currency.keys("\uE007");
                await browser.pause(2000);
                await  BuyerUsrName.setValue("JD");
                await   UsrMobileNo.setValue("90909090");
               await  UsrEmail.setValue("manchester007"+today+"@gmail.com");
               await   UsrRole.setValue("User");
                           await browser.pause(2000);
                          await UsrRole.keys("\uE015");
                              await browser.pause(2000);
                             await  UsrRole.keys("\uE007");
                             await   usrJobTilte.setValue("user");
                             await UsrDepartment.setValue("EEE");
                                await save.click();
                                     await browser.pause(1000);
                                       if(await alreadyExsists.isDisplayed()){
                                        await  UsrEmail.click();
                                         await browser.keys(["\uE009","a"]);
                                         await  UsrEmail.keys("\uE003");
                                           await browser.pause(2000);
                                           await  UsrEmail.setValue('mkc3031'+today+'@gmail.com');
                                           await  save.click();}
/* await assert.strictEqual(await snackbar.getText(),"Account Created");*/
  
   await browser.pause(1000);
   await filter.click();
   await browser.pause(1000);
   await customerName.setValue('apple');
   await customerName.keys("\uE015");
      await browser.pause(1000);
      await  customerName.keys("\uE007");
      await  filterApply.click();
          await browser.pause(2000);
          await  invite.click();
            await browser.pause(2000);
/*await assert.strictEqual(await snackbar.getText(),"User invited");*/
  await browser.pause(3000);
  await Buyerlist.click();
   await browser.pause(2000);
   await custEdit.click();
   await cusWebsite.setValue('www.apple.com');
   await cusTaxid.setValue('GST');
   await  cusSubIndustry.scrollIntoView();
   await cusSubIndustry.setValue('Tires & Rubber');
   await  cusSubIndustry.keys("\uE015");
         await browser.pause(1000);
         await  cusSubIndustry.keys("\uE015");
         await browser.pause(1000);
         await  cusSubIndustry.keys("\uE007");
         await acuntOwner.scrollIntoView();
         await acuntOwner.setValue('a')
         await acuntOwner.keys("\uE015");
               await browser.pause(2000);
               await   acuntOwner.keys("\uE015");
              await  acuntOwner.keys("\uE007");
              await  supportOwner.scrollIntoView();
              await  supportOwner.setValue('a');
               await   supportOwner.keys("\uE015");
                       await browser.pause(2000);
                      await supportOwner.keys("\uE007");
                      await   save.click();
                             
/*await assert.strictEqual(await snackbar.getText(),"Account updated successfully");*/  
  await browser.pause(2000);                        
  await createUser.click();
  await BuyerUsrName.setValue("MK");
  await UsrMobileNo.setValue("90909090");
  await  usrmail.setValue("realMadrid007"+today+"@gmail.com");
  await UsrRole.setValue("User");
         await browser.pause(1000);
        await  UsrRole.keys("\uE015");
            await browser.pause(1000);
           await UsrRole.keys("\uE007");
           await save.click();
                 await browser.pause(1000);
                                       if(await alreadyExsists.isDisplayed()){
                                        await UsrEmail.click();
                                         await browser.keys(["\uE009","a"]);
                                         await UsrEmail.keys("\uE003");
                                           await browser.pause(2000);
                                           await UsrEmail.setValue('mkw3031'+today+'@gmail.com');
                                           await  save.click();}
/*await assert.strictEqual(await snackbar.getText(),"Account updated successfully");*/
                    await browser.pause(2000);
                    await Checkbox.click();
                      await browser.pause(1000);
                      await invite.click();
                         await browser.pause(2000);
/*await assert.strictEqual(await snackbar.getText(),"User invited");*/
          await browser.refresh();
          await MoreOptions.click();
            await browser.pause(1000);
            await deleteBuyer.click();
                 await browser.pause(1000);
/*await assert.strictEqual(await snackbar.getText(),"Delete the Contacts other than default email user, before deleting company");*/
await  firstCheckbox.scrollIntoView();
await  firstCheckbox.click();
                              await browser.pause(1000);
                             await  userMoreOptions.click();
                                await browser.pause(2000);
                               await userReinvite.click();
                                
 /*await assert.strictEqual(await snackbar.getText(),"User reinvited");*/
 await addressTab.click();
 await firstCheckbox.click();
 await   deleteBtn.click();
             
/*await assert.strictEqual(await snackbar.getText(),"you can`t delete the register address");*/ 
                await browser.refresh();
                await  createBranch.click();
               await  branchName.setValue("Coimabtore Branch");
               await branchAddress.setValue("16 avinashi road");
               await branchCountry.setValue("India");
                      await browser.keys("\uE015");
                       await browser.pause(2000);
                       await browser.keys("\uE015");
                        await browser.pause(2000);
                        await browser.keys("\uE007");
                       await branchState.setValue("Tamil nadu");
                         await browser.keys("\uE015");
                          await browser.pause(2000);
                           await browser.keys("\uE007");
                          await   branchDistrict.setValue("Coimbatore");
                           await browser.keys("\uE015");
                            await browser.pause(2000);
                             await browser.keys("\uE007");
                            await  branchlocality.setValue("coimbatore");
                         await browser.keys("\uE015");
                          await browser.pause(2000);
                           await browser.keys("\uE007");
                          await branchCity.setValue("coimbatore");
                          await  branchPin.setValue("641010");
                          await branchState.setValue("Tamil nadu");
                                 
                          await branchtax.setValue('GST');
                                   await  contactName.setValue("admin");
                                   await  contactNo.setValue("9898989899");
                                   await   save.click();
                                                          
/*await assert.strictEqual(await snackbar.getText(),"Address added successfully");*/
                             await browser.pause(2000);
                             await  addressTab.click();
                             await browser.pause(1000);
                             await Checkbox.click();
                             await edit.click();
                             await   branchTags.scrollIntoView();
                            await  branchTags.setValue('TN');
                            await branchTags.keys("\uE015");
                                       await browser.pause(1000);
                                      await branchTags.keys("\uE007");
                                          await browser.pause(1000);
                                         await erpCode.setValue("SYS2021");
                                         await vendorCode.setValue("2021");
                                         await  save.click();
/*await assert.strictEqual(await snackbar.getText(),"Account updated successfully");*/
await close.click();
await browser.getUrl();
  await expect(await browser).toHaveUrlContaining('accounts/landing');
  awaitBuyerlist.click();
  await contactsTab.click();
  await Checkbox.click();
  await  userEdit.click();
  await usrJobTilte.scrollIntoView();
  await usrJobTilte.setValue("QA");
 await  UsrDepartment.setValue("ECE");
 await  submit.click();             
/*await assert.strictEqual(await snackbar.getText(),"Saved successfully");*/

 await browser.pause(1000);
 await goBack.click();
   await browser.pause();
   await Checkbox.click();
   await  userMoreOptions.click();
      await browser.pause(1000);
      await  userDelete.click();
      await  yes.click();
   
/*await assert.strictEqual(await snackbar.getText(),"User deleted successfully");*/
               await browser.pause(1000);
               await   preferenceTab.click();
               await inviteAccess.scrollIntoView();
               await  inviteAccess.click();
                await  inventoryAccess.click();
                /* await showPrice.click();
                   await taxExempted.click();
                      if(await exemptionId.isDisplayed()){
                        await exemptionId.setValue("test");
                       await exemptionId.keys("\uE013");
                             await browser.pause(1000);
                            awaitexemptionId.keys("\uE007");
                              await browser.pause(1000);
                               }*/
                          await browser.pause(1000);
                          await submit.click();
                            await browser.pause(1000);
/*await assert.strictEqual(await snackbar.getText(),"Account updated successfully");*/

                                   
/*Buyer delete*/
await MoreOptions.waitForDisplayed(2000);
await MoreOptions.click();
      await browser.pause(1000);
      await  deleteBuyer.click();
        await browser.pause(1000);
         await expect(yes).toBeExisting();
         await yes.click();
           await browser.getUrl();
await expect(await browser).toHaveUrlContaining('accounts/landing');


     });


    it("Create a Company Address",async()=>{

       let addAddress =await $('//*[text()="Add Address"]');
       let search=await $('//input[@name="Search"]');
       let branchName=await $('//input[@name="branchName"]');
       let branchAddress=await $('//textarea[@name="addressLine"]');
       let locality=await $('//input[@name="locality"]');
       let branchCity=await $('//input[@name="city"]');
       let branchPin=await $('//input[@name="pinCodeId"]');
       let branchDistrict=await $('//input[@name="district"]');
       let branchState=await $('//input[@name="state"]');
       let branchCountry=await $('//input[@name="country"]');
       let Lattitude=await $('//input[@name="lattitude"]');
       let Longitude=await $('//input[@name="longitude"]');
       let billing=await $('//input[@name="isBilling"]');
       let Shipping=await $('//input[@name="isShipping"]');
       let warehouse=await $('//input[@name="wareHouse"]');
       let tax=await $('//input[@name="gst"]');
       let contactName=await $('//input[@name="primaryContact"]');
       let contactNo=await $('//input[@name="mobileNo"]');
       let save = await $('#editDialogButton');
       let cancel=await $('#editDialogCancel');
       let lastBranch=await $('(//*[@type="checkbox"])[1]');
       let firstBranch=await $('(//input[@type="checkbox"])[last()]');
       let cmpanyEdit=await $('//*[text()="Edit"]');
       let cmpnyDelete=await $('//*[text()="Delete"]');
       let snackbar =await $('#client-snackbar');
       let yes=await $('#yes');



     await browser.url('/settings/company');
      await browser.pause(1000);
      await  firstBranch.click();
       await browser.pause(2000);
       await cmpnyDelete.click();
       await  yes.click();
            await browser.pause(2000);
            await snackbar.scrollIntoView();
await assert.strictEqual(await snackbar.getText(),"Registered Address cannot be deleted");
             
await browser.refresh();  
await awaitaddAddress.click();
  await browser.pause(1000);
  await branchName.setValue("Coimabtore ");
  await branchAddress.setValue("16 avinashi road");
  await locality.setValue("coimbatore");
      await branchCountry.setValue("India");
      await browser.keys("\uE015");
      await browser.pause(1000);
      await browser.keys("\uE015");
      await browser.pause(1000);
      await browser.keys("\uE007");
      await  branchState.setValue("Tamil nadu");
      await browser.keys("\uE015");
      await browser.pause(1000);
      await browser.keys("\uE007");
      await branchDistrict.setValue("Coimbatore");
      await browser.keys("\uE015");
      await browser.pause(1000);
      await browser.keys("\uE007");
      await  branchCity.setValue("coimbatore");
      await  branchPin.setValue("641010");
        await  tax.setValue('GST');
        await  contactName.setValue("madhan");
         await  contactNo.setValue("9898989899");
         await   save.click();
                   await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"Address added successfully");
 
await lastBranch.scrollIntoView(0,3000);  
 await browser.pause(5000);
 await lastBranch.click();
      await browser.pause(1000);
      await cmpanyEdit.click();
          await browser.pause(1000);
          await  branchName.setValue("Branch ");
          if(await Shipping.getValue()==='true'){
            await browser.pause(1000);
            await Shipping.click();
          }
          await contactName.setValue('kumar');
          await browser.pause(1000);
          await  save.click();
             await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"Address updated Successfully");
         
          
await  lastBranch.scrollIntoView(0,3000);  
          await browser.pause(2000);
          await  lastBranch.click();
            await browser.pause(2000);
            await  cmpnyDelete.click();
            await  yes.click();
                 await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"Branch address deleted succesfully");
    });

 it("Create and delete the  user " , async()=>{


          let createUser = await $('//button[@type="button"]/following::span[text()="Add User"]')
          let EmpName = await $('//input[@name="displayName"]')
          let EmpMobile= await $('//input[@name="mobileNo"]');
          let EmpEmail = await $('//input[@name="email"]');
          let EmpJobTitle = await $('//input[@name="jobTitle"]');
          let EmpDepart = await $('//input[@name="department"]');
          let EmpRole = await $('//input[@name="roleName"]');
          let EmpSave=await $('#loadingButton');
          let invite=await $('//*[contains(@title,"ABCD")]/following::td[5]');
          let Emplist=await $('//*[contains(@title,"ABCD")]');
          let activeEmp=await $('//*[contains(@title,"Admin")]');
          let MoreOptions=await $('//button[@title="More options"]');
          let deleteEmp=await $('//*[text()="Delete"]');
          let activateEmp=await $('//*[text()="Activate"]');
          let inactivateEmp=await $('//*[text()="Inactivate"]');
          let tags=await $('//*[@placeholder="Search"]');
          let yes=await $('#yes');
          let save=await $('#loadingButton');
          let snackbar = await $('#client-snackbar');
          let alreadyExsists=await $('//p[text()="Email id already exists"]');
          let close=await $('//button[@title="Close"]');
          


await browser.url("/settings/team/landing");
await createUser.doubleClick();   
 await browser.pause(2000);
 await EmpName.setValue('ABCD');
 await EmpMobile.setValue('9090909090');
 await EmpEmail.setValue("qa7"+today+"@gmail.com");
 await EmpJobTitle.setValue('QA');
 await  EmpDepart.setValue('Accounts');
 await EmpRole.setValue("user");
         await browser.pause(1000);
        await  EmpRole.keys("\uE015");
           await browser.pause(1000);
          await  EmpRole.keys("\uE007");
             await browser.pause(2000);
            await   EmpSave.click();
              if(await alreadyExsists.isDisplayed()){
                await EmpEmail.click();
                 await browser.keys(["\uE009", "a"]);
                 await EmpEmail.keys("\uE003");
                  await browser.pause(2000);
                  await EmpEmail.setValue("mkc3031"+today+"@gmail.com");
                  await  EmpSave.click();
              }
               await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"User added successfully");

 /*invite the employee*/
    
 await invite.click();
     await browser.pause(2000);
/*await assert.strictEqual(await snackbar.getText(),"User invited");*/

/*edit the employee*/
await Emplist.click();
await tags.setValue('a');
await tags.keys("\uE015");
await browser.pause(1000);
await tags.keys("\uE007");
await save.click();
await browser.pause(2000);
/*await assert.strictEqual(await snackbar.getText(),"User updated successfully");*/

/*delete the employee*/
   await browser.refresh();
   await  MoreOptions.click();
      await browser.pause(1000);
      await deleteEmp.click();
        await browser.pause(1000);
        await  yes.click();
         await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"User deleted successfully");

/*

await browser.pause(2000);
await activeEmp.click();
await browser.pause('1000');
await MoreOptions.click();
await browser.pause(1000);
 await inactivateEmp.click();
  await yes.click();
    await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"User activated");


await MoreOptions.click();
await browser.pause(1000);
 await activateEmp.click();
 await  yes.click();
    await browser.pause(2000);
await assert.strictEqual(await snackbar.getText(),"User activated"); */

  

   }); 
    
});
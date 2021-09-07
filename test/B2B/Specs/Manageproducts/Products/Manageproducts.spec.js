const assert = require("assert");
const path = require('path');
const Product = require("../../PageObjects/./Manageproducts.page");
const LoginPage = require("../../../PageObjects/Login.page");
const ProductsActionWrapper = require("../../../CommonActions/Product");
const TestActionWrapper = require("../../../CommonFunctions/ActionsWrappers");
describe("Creating products", () => {
     it("Should allow to access login ", () => {
      
       LoginPage.open();
      LoginPage.login("admin@apptino.com", "Admin@123");  
   LoginPage.signinButton;
            
    })
 
    it("Navigate to Product group page ", () => {   
  TestActionWrapper.checkVisibleClickableMoveAndClick(Product.Icon); 
  TestActionWrapper.checkVisibleClickableAndClick(Product.PtdandPL);
  TestActionWrapper.checkVisibleClickableMoveAndClick(Product.managePtd);
    })
  
      
    it("should not allow to add new product ", () => {
  //  TestActionWrapper.checkVisibleClickableAndClick1()
   ProductsActionWrapper.createPrductGroup("brandName");
      // manageproducts.createPG(Product.save);
    //      TestActionWrapper.checkVisibleClickableMoveAndClick(Product.CreatePtd);
    //        TestActionWrapper.checkEnabledMoveAndSetValue(Product.PGname, "");
    // TestActionWrapper.ClickElementAndkeyboardVal(Product.Brandname, "\uE015");
    // TestActionWrapper.checkVisibleClickableMoveAndClick(Product.save);
       })

    
//        it("should  allow to add new product ", () => {
      
//       TestActionWrapper.checkEnabledMoveAndSetValue(Product.Ptdname, "Baby Products");
//       TestActionWrapper.ClickElementAndkeyboardVal(Product.brand, "\uE015");
//       TestActionWrapper.checkVisibleClickableMoveAndClick(Product.save);

 })


//     it("Not Allow to access without leadtime and effortfrom ", () => {
      
//       TestActionWrapper.checkEnabledMoveAndSetValue(Product.leadTime, "");
//       TestActionWrapper.checkEnabledMoveAndSetValue(Product.effFrom, "");
//       assert.strictEqual(Product.leadTimereq.getText(), 'Standard lead time required')     
//  })
    
//   it("Allow to access Product group details ", () => {  
//     TestActionWrapper.checkEnabledMoveAndSetValue(Product.PtdSeries, "API");
//  TestActionWrapper.checkEnabledMoveAndSetValue(Product.PLref, "85-10000");
//   TestActionWrapper.checkEnabledMoveAndSetValue(Product.leadTime, "20");
//   TestActionWrapper.checkEnabledMoveAndSetValue(Product.effFrom, "12/05/2020");
//  TestActionWrapper.checkVisibleClickableAndClick(Product.HighlightIcon);
//  TestActionWrapper.checkEnabledMoveAndSetValue(Product.Highlight, "products intended to be used on infants and children under the age of three.");
//  TestActionWrapper.checkVisibleClickableMoveAndClick(Product.AssertIcon);
//  var pathFile = '/Users/apptinoadmin/Downloads/gayu/palazzo-pants-300px.jpg'
// Product.Assert.addValue(pathFile)
//  browser.pause(3000);
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.AssertassImg);
// // TestActionWrapper.checkVisibleClickableAndClick(Product.relatedPtdIcon);
// //  TestActionWrapper.ClickElementAndkeyboardVal(Product.relatedPtd, "\uE015");
// //  Product.startrelated.click();
//    TestActionWrapper.checkVisibleClickableMoveAndClick(Product.variantIcon);
//  TestActionWrapper.SetValueElementAndkeyboardVal(Product.setvariantName,"powder", "\uE015");
//  TestActionWrapper.SetValueElementAndkeyboardVal(Product.setvariantAttribute,"Yashada Bhasma", "\uE015");
//      TestActionWrapper.checkVisibleClickableMoveAndClick(Product.variantAdd);
//       TestActionWrapper.ClickElementAndkeyboardVal(Product.variantName, "\uE015");
//     TestActionWrapper.ClickElementAndkeyboardVal(Product.variantAttribute, "\uE015");
//       TestActionWrapper.checkVisibleClickableMoveAndClick(Product.variantDelete);
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.specificationIcon);
//   TestActionWrapper.checkEnabledMoveAndSetValue(Product.specificationKeys, "oil");
//   TestActionWrapper.ClickElementAndkeyboardVal(Product.specificationValues, "Hair");
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.specificationAdd);
//   TestActionWrapper.checkEnabledMoveAndSetValue(Product.specificationKeys1, "oil");
//   TestActionWrapper.ClickElementAndkeyboardVal(Product.specificationValues2, "massage");
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.specificationDelete);
// TestActionWrapper.checkVisibleClickableMoveAndClick(Product.CPGsave);
    
//  })

//  it(" should not allow to nevigate to product overview page ", () => {

//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.Pcreate);
//    TestActionWrapper.checkEnabledMoveAndSetValue(Product.PtdID, "");
//      TestActionWrapper.checkEnabledMoveAndSetValue(Product.PtdName, "");
//      TestActionWrapper.checkEnabledMovedoubleClickDeleteAndSetValue(Product.UnitPrice, "");
//     TestActionWrapper.checkEnabledMoveAndSetValue(Product.UnitQty, "");
//   TestActionWrapper.checkEnabledMoveAndSetValue(Product.PackQty, "");
// TestActionWrapper.checkEnabledMoveAndSetValue(Product.UnitOfMeasure, "");
//  TestActionWrapper.checkVisibleClickableMoveAndClick(Product.saveBtn);
 
// })

// it("should allow to nevigate to product overview page ", () => {
  
//   TestActionWrapper.checkEnabledMoveAndSetValue(Product.PtdID, "AFI");
//   TestActionWrapper.checkEnabledMoveAndSetValue(Product.PtdName, "Baby powder");
//   TestActionWrapper.ClickElementAndkeyboardVal(Product.HSN, "\uE015");
//   TestActionWrapper.ClickElementAndkeyboardVal(Product.primarycategory, "\uE015");
//   TestActionWrapper.checkEnabledMovedoubleClickDeleteAndSetValue(Product.UnitPrice, "117");
//   TestActionWrapper.checkEnabledMoveAndSetValue(Product.UnitQty, "1");
// TestActionWrapper.checkEnabledMoveAndSetValue(Product.PackQty, "1");
// TestActionWrapper.checkEnabledMoveAndSetValue(Product.UnitOfMeasure, "Pc");
// TestActionWrapper.checkVisibleClickableMoveAndClick(Product.saveBtn);
// })

// it("Should allow to access to product overview page ", () => {
  
//   TestActionWrapper.ClickElementAndkeyboardVal(Product.secondaryCategory, "\uE015");
// TestActionWrapper.checkVisibleClickableMoveAndClick(Product.LongDescriptionIcon);
// TestActionWrapper.checkEnabledMoveAndSetValue(Product.LongDescription, "Baby products are specially formulated to be mild and non-irritating and use ingredients that are selected for these properties. Baby products include baby shampoos and baby lotions, oils, powders and creams.");
// TestActionWrapper.checkVisibleClickableMoveAndClick(Product.asserticon);
// var pathFile = '/Users/apptinoadmin/Downloads/gayu/palazzo-pants-300px.jpg'
// Product.Assert.addValue(pathFile)
//  browser.pause(3000);
// TestActionWrapper.checkVisibleClickableMoveAndClick(Product.assertassimg);
//  TestActionWrapper.checkVisibleClickableAndClick(Product.specificationicon);
//   TestActionWrapper.checkEnabledMoveAndSetValue(Product.Specificationkeys, "height");
//   TestActionWrapper.ClickElementAndkeyboardVal(Product.Specificationvalues, "5.8");
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.specificationadd);
//   TestActionWrapper.checkEnabledMoveAndSetValue(Product.Specificationkeys1, "size");
//   TestActionWrapper.ClickElementAndkeyboardVal(Product.Specificationvalues1, "small");
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.specificationdelete);
// TestActionWrapper.checkVisibleClickableMoveAndClick(Product.AdditionalInfo);
// TestActionWrapper.checkEnabledMoveAndSetValue(Product.PackagingDimension, "35mm");
// TestActionWrapper.checkEnabledMoveAndSetValue(Product.Netweight, "200g");
// TestActionWrapper.checkEnabledMoveAndSetValue(Product.EAN, "6753");
// TestActionWrapper.checkEnabledMoveAndSetValue(Product.UPC, "S675");

// TestActionWrapper.checkVisibleClickableAndClick(Product.showpricePublish);
// browser.pause(1000);
//     TestActionWrapper.checkVisibleClickableAndClick(Product.DiscountpricePublish);
//     browser.pause(1000);
//     TestActionWrapper.checkVisibleClickableAndClick(Product.Internal);
//     browser.pause(1000);
//        TestActionWrapper.checkVisibleClickableAndClick(Product.Discoutined);
//        browser.pause(1000);
//        TestActionWrapper.checkVisibleClickableAndClick(Product.Fastmoving);
//             browser.execute((elem) => {
//       elem.click();
//    }, Product.PtdSave );
//    browser.pause(3000);
//        TestActionWrapper.checkVisibleClickableMoveAndClick(Product.PublishButton);
//        TestActionWrapper.checkVisibleClickableMoveAndClick(Product.Publishyes); 
//       })

//      it("Should allow to Publish Product group ", () => {
//         TestActionWrapper.checkVisibleClickableMoveAndClick(Product.closeButton); 
//         TestActionWrapper.checkVisibleClickableMoveAndClick(Product.PublishPG); 
//         TestActionWrapper.checkVisibleClickableMoveAndClick(Product.OnlyPG); 
//         TestActionWrapper.checkVisibleClickableAndClick(Product.PGOk); 
//       })

// it("Should allow to search the product ", () => {
//   TestActionWrapper.checkEnabledMoveClearAndSetValue(Product.searchID, "AFI");
//   TestActionWrapper.ClickElementAndkeyboardVal(Product.kurtis, "\uE015");
// })
// })

// describe("Deleting products", () => {
// it("Should allow to unpublish and delete the product ", () => {  
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.PGCross); 
//   TestActionWrapper.checkEnabledMoveClearAndSetValue(Product.search, "Baby Products");
//   Product.box.scrollIntoView();
//   browser.pause(1000);
//   Product.box.click();
//   browser.pause(1000);
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.EditButton);
//   Product.Ptd.waitForDisplayed(5000);
//   TestActionWrapper.checkVisibleClickableAndClick(Product.Ptd);
//   Product.moreoption.waitForDisplayed(5000);
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.moreoption);
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.PtdUnpublish);
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.UnpublishYes);
//   browser.pause(2000);
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.moreoption1);
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.PtdDelete);
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.yesButton);
// })

// it("Should allow to unpublish and delete the product Group ", () => {
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.menu);
//   browser.pause(2000);
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.PtdgroupDelete);
//   browser.pause(2000);
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.Ptdgroupyes);

//   browser.pause(3000);
// })
// })





// describe("Clone the Product Group", () => {

//   it("Should allow to clone the product and product Group ", () => {  
//    browser.url("https://new.bcommerce.in/create-products/productgroup-landing");
//   TestActionWrapper.checkEnabledMoveAndSetValue (Product.search, 'Baby products'); 
//       Product.box1.scrollIntoView();
//       browser.pause(1000);
//       Product.box1.click();
//       browser.pause(3000);
//       TestActionWrapper.checkVisibleClickableMoveAndClick(Product.option);
//       TestActionWrapper.checkVisibleClickableMoveAndClick(Product.clonePG);
//       TestActionWrapper.checkEnabledMoveAndSetValue(Product.clonePGname, "Clone Product");
//       TestActionWrapper.ClickElementAndkeyboardVal(Product.clonePGbrand, "\uE015");
//       TestActionWrapper.checkVisibleClickableMoveAndClick(Product.clonesave);
//   })

//   it("Should allow to upload the product in PG landing page ", () => {
//     browser.url("https://new.bcommerce.in/create-products/detail/2348/prgoverview");
//     TestActionWrapper.checkVisibleClickableMoveAndClick(Product.option);
//   TestActionWrapper.checkVisibleClickableMoveAndClick(Product.uploadButton);
//     var path1 = '/Users/apptinoadmin/Downloads/Hsn .xlsx'
//    Product.uploadPtd.addValue(path1);
//    browser.pause(3000);
//    Product.checkbox.scrollIntoView();
//    Product.checkbox.click();
//    TestActionWrapper.ClickElementAndkeyboardVal(Product.clonePrimary, "\uE015");
//    TestActionWrapper.checkVisibleClickableMoveAndClick(Product.Assign);
//    TestActionWrapper.checkVisibleClickableAndClick(Product.Uploadsave);
//    browser.pause(2000)
// })
// })




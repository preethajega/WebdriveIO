const assert = require("assert");
// const LoginPage = require("../../PageObjects/./Login.page");
const AddingProducts = require('../CommonFunctions/AddingProductToCart/AddingProductToCart');
const Xpath = require("../PageObjects/Xpath");
const { search } = require("../CommonFunctions/AddingProductToCart/path");
let today =  new Date().toISOString().replace(/\/|-|:|/g,'');
let root = $("#root");
describe("Sanity test cases", () => {
  //    it("Public Page registration", () => {
  //       let contactName = $("[name='displayName']");
  //       let userEmail = $('[name="userEmail"]');
  //       let companyName = $('#autocomplete');
  //       let register = $('[class="MuiButton-label"]');
  //       let registerSuccess = $('//*[@id="root"]/div/div/div[2]/div/div/div[2]/div/h6');
  //       let addressDataLoaded = $('[name="regAddress.pinCodeId"]')
  //       browser.url("https://demo.myapptino.com/auth/register");
  //       browser.maximizeWindow();
  //   contactName.setValue(`test ${today}`);
  //   userEmail.setValue(`test${today}@gmail.com`);
  //   companyName.click();
  //   companyName.setValue("Apptino Software Private Limited");
  //   browser.pause(5000);
  //   companyName.keys("\uE015");
  //   browser.pause(300);
  //   companyName.keys("\uE007");
  //   browser.pause(3000);
  //   register.click();
  //   browser.pause(3000);
  //   root.saveScreenshot("./register.png");
  // })


  
// it("Add to cart and create lead", ()=>{
//   browser.url("https://demo.myapptino.com/");
//   let cart = $('//*[@id="root"]/header/div/div/div/div[3]/button[1]');
//   let search =$('//*[@id="root"]/header/div/div/div/div[2]/div/div[2]/div[1]/div/input');
//   let product = $("//div[2]/div[3]/div/div/div/div[1]/div[2]")
//   let addToCart = $('//*[@id="root"]/div[2]/div/div/div[1]/div[2]/div/div[4]/button');
//   let leadName = $("#fullName");
//   let leadEmail = $("#email");
//   let leadEnquiry = $('//*[@id="panel1bh-content"]/div/div/form/button');
//   let promptSnackbar = $("#client-snackbar");
//   browser.pause(5000);
//   search.setValue("6AV2124-0MC01-0AX0");
//   browser.pause(2000);
//    product.click();
//    browser.pause(2000);
//   addToCart.click();  
//   browser.pause(2000);
//   cart.click();
//   browser.pause(2000);
//   leadName.setValue("Test");
//   leadEmail.setValue("Test@gmai.com");
//   leadEnquiry.click();
//   console.log("Enquiry clicked" + promptSnackbar.isExisting());
//   browser.pause(5000);
//  })



// it("Create Lead", ()=>{
//   let cartIcon = $('//*[@id="root"]/header/div/div/div/div[3]/button[1]');
//   let name=$('#fullName');
//   let mail=$('#email');
//   let sendEnquiry=$('//*[@id="root"]/div[2]/div/div[1]/div/div[3]/div/form/button');
// browser.url('https://demo.myapptino.com/');
// browser.pause(5000);
// cartIcon.click();
// name.setValue("test");
// mail.setValue('test@gmail.com');
// sendEnquiry.click();
// browser.pause(5000);
// });


it("Create quote", () => {
    let businessmail=$('[name="Username"]');
 let password=$('[name="Password"]');
 let signin=$('[type="submit"]');
//  let addToCart=$('//*[@id="root"]/div[2]/div[1]/div[3]/div[2]/div[2]/div/div[2]/button');
// let cart = $('//*[@id="root"]/header/div/div/div/div[3]/button[1]');
// let addcustomPtd = $('//*[@id="root"]/div[2]/div/div[1]/div/div[1]/div[2]/button');
//  let selectbuyer=$('#asynchronous-demo');
//  let emptyCartSearch = $('//*[@id="root"]/div[2]/div/div[1]/div/div[2]/div/div/div/input');
// let emptyCartsearchedproduct =$('//*[@id="root"]/div[2]/div/div[1]/div/div[2]/div/div[2]/div/div/ul/div[1]')
// let search = $('//*[@id="root"]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div/div/div/input');
// let productSearched = $('//*[@id="root"]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div/div[2]/div/div/ul/div[1]');
//  let createQuote=$('//*[@id="root"]/div[2]/div/div[1]/div/div[2]/div/div/div[5]/button');
//  let createQuoteSummary = $('//*[@id="root"]/div[2]/header/div/button[2]');
//  let overall = $ ('//*[@id="dialog-title"]/h2')
//  let quoteName = $('#name');
//  let dialogReqApproval = $('//*[@id="Approval for overall gross margin 0 %."]');
//  let dialogCreateQuote = $('//*[@id="editDialogButton"]');
//  let approvalquotename =  $('#quoteName');
// let comments = $('[name="initiatedComments"]');
 browser.url('https://demo.myapptino.com/auth/login'); 
 browser.pause(3000);
 businessmail.setValue("admin@apptino.com")
 password.setValue("Admin@123");
 signin.click();
 browser.pause(3000);
//  cart.click();
//   browser.pause(1000);
//   let emptyCart = addcustomPtd.isExisting();
//  console.log(emptyCart + "44545454");
//  if(emptyCart){
//   emptyCartSearch.setValue("laptop");
//   emptyCartsearchedproduct.click();
//     } else 
//   {
//     search.setValue("laptop");
//     productSearched.click();
//  }
//  browser.pause(5000);
//     selectbuyer.click();
//   browser.pause(2000);
//   selectbuyer.keys("\uE015");
//   browser.pause(500);
//   selectbuyer.keys("\uE007");
//   createQuote.click();
//   browser.pause(2000);
//   createQuoteSummary.click();

//   if(requestapproval)
//   {
//     requestapproval = overall.isDisplayed();
//     approvalquotename.setValue("Test")
//     comments.setValue("Approval");
    
//       } else 
//     {
//       createQuoteSummary.click();
//   quoteName.setValue("Test");
//     }
//     dialogCreateQuote.click();
   










  // let getVal = CreateQuoteD.isDisplayed();
  //     createQuoteSummary.click();
  // quoteName.setValue("Test");

  // if(getVal === "REQUEST APPROVAL"){
  //   approvalquotename.setValue("Test")
  //   comments.setValue("Approval");
  //   dialogReqApproval.click();
  //   } else{
  //   dialogCreateQuote.click();
  //   }
//     browser.pause(2000);
});

it("Create order", () => {
  
let addToCart=$('//*[@id="root"]/div[2]/div[2]/div[2]/div/div/div/input');
let cart = $('//*[@id="root"]/header/div/div/div/div[3]/button[1]');
let addcustomPtd = $('//*[@id="root"]/div[2]/div/div[1]/div/div[1]/div[2]/button');
let selectbuyer=$('//*[@id="asynchronous-demo"]');
let createOrder=$('//*[@id="root"]/div[2]/div/div[1]/div/div[2]/div/div/div[4]/button');
let placeOrderSummary = $('//*[@id="root"]/div[2]/header/div/button[2]');
let orderName = $('[id="name"]');
let dialogCreateOrder = $('//*[@id="editDialogButton"]');
let promptSnackbar = $("#client-snackbar");
let emptyCartSearch = $('//*[@id="root"]/div[2]/div/div[1]/div/div[2]/div/div/div/input');
let emptyCartsearchedproduct =$('//*[@id="root"]/div[2]/div/div[1]/div/div[2]/div/div[2]/div/div/ul/div[1]')
let search = $('//*[@id="root"]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div/div/div/input');
let productSearched = $('//*[@id="root"]/div[2]/div/div[1]/div/div[1]/div[1]/div[2]/div[1]/div/div[2]/div/div/ul/div[1]');

browser.pause(3000);
 cart.click();
 browser.pause(1000);
 let emptyCart = addcustomPtd.isExisting();
 console.log(emptyCart + "44545454");
 if(emptyCart){
  emptyCartSearch.setValue("desktop");
  browser.pause(3000);
 emptyCartsearchedproduct.click();
  
  } else 
  {
    search.setValue("desktop");
    browser.pause(1000);
    productSearched.click();
 }
 selectbuyer.click();
    it("Public Page registration", () => {
       let contactName = $("[name='displayName']");
       let userEmail = $('[name="userEmail"]');
       let companyName = $('#autocomplete');
       let register = $('[class="MuiButton-label"]');
       let registerSuccess = $('//*[@id="root"]/div/div/div[2]/div/div/div[2]/div/h6');
       let addressDataLoaded = $('[name="regAddress.pinCodeId"]')
      //  https://demo.myapptino.com/auth/login
       browser.url("https://demo.myapptino.com/auth/register");
       browser.maximizeWindow();
   contactName.setValue(`test ${today}`);
   userEmail.setValue(`test${today}@gmail.com`);
   companyName.click();
   companyName.setValue("Apptino Software Private Limited");
   browser.pause(5000);
   companyName.keys("\uE015");
   browser.pause(300);
   companyName.keys("\uE007");
   browser.pause(3000);
   register.click();
   browser.pause(3000);
   root.saveScreenshot("./register.png");
 })


 it("Add to cart and create lead", ()=>{
 browser.url("https://demo.myapptino.com");
 let cart = $("//*[@id='root']/header/div/div/div[3]/button[1]");
 let search =$('//div[1]/input');
 let product = $("//div/ul/div[1]/div[2]")
 let addToCart = $("//div[2]/div/div[4]/button");
 let leadName = $("#fullName");
 let leadEmail = $("#email");
 let leadEnquiry = $("//div/div/form/button");
 let promptSnackbar = $("#client-snackbar");
 browser.pause(8000);
 search.setValue("DCF 4");
 browser.pause(500);
  product.click();
  browser.pause(1000);
 addToCart.click();
 cart.click();
 leadName.setValue("Test");
 leadEmail.setValue("Test@gmai.com");
 leadEnquiry.click();
 console.log("Enquiry clicked" + promptSnackbar.isExisting());
})



it("Create Lead", ()=>{
 let cartIcon = $("//*[@id='root']/header/div/div/div[3]/button[1]");
 let name=$('#fullName');
 let mail=$('#email');
 let sendEnquiry=$('.MuiButton-containedPrimary');
browser.url('https://demo.myapptino.com/');
browser.pause(8000);
cartIcon.click();
name.setValue("test");
mail.setValue('test@gmail.com');
sendEnquiry.click();
});


it("Create quote", () => {
   let businessmail=$('[name="Username"]');
let password=$('[name="Password"]');
let signin=$('[type="submit"]');
let addToCart=$('//*[@id="root"]/div[2]/div[1]/div[3]/div[2]/div[2]/div/div[2]/button');
let cart = $('//header/div/div/div[3]/button[1]');
let addcustomPtd = $('//*[@id="root"]/div[2]/div[2]/div[1]/div[2]/button');
let selectbuyer=$('#asynchronous-demo');
let emptyCartSearch = $('//*[@id="root"]/div[2]/div[2]/div[2]/div/div/div/input');
let emptyCartsearchedproduct =$('//*[@id="root"]/div[2]/div[2]/div[2]/div/div[2]/div/div/ul/div[1]')
let search = $('//*[@id="root"]/div[2]/div/div[1]/div[1]/div[2]/div[1]/div/div/div/input');
let productSearched = $('//*[@id="root"]/div[2]/div/div[1]/div[1]/div[2]/div[1]/div/div[2]/div/div/ul/div[1]');
let createQuote=$('//*[@id="root"]/div[2]/div/div[2]/div/div/div[5]/button');
let createQuoteSummary = $('//*[@id="root"]/div[2]/header/div/button[2]');
let quoteName = $('[name="quoteName"]');
let dialogReqApproval = $('//*[@id="Approval for overall gross margin 0 %."]');
let dialogCreateQuote = $('//*[@id="Create Quote"]');
let comments = $('[name="initiatedComments"]');
browser.url('https://new.bcommerce.in/');
browser.pause(1000);
businessmail.setValue("admin@apptino.com")
password.setValue("Admin@123");
signin.click();
cart.click();
 browser.pause(1000);
 let emptyCart = addcustomPtd.isExisting();
console.log(emptyCart + "44545454");
if(emptyCart){
 emptyCartSearch.setValue("DCF 4");
 browser.pause(1000);
emptyCartsearchedproduct.click();
   } else
 {
   search.setValue("DCF 4");
   browser.pause(1000);
   productSearched.click();
}
   selectbuyer.click();
 browser.pause(2000);
 selectbuyer.keys("\uE015");
 browser.pause(500);
 selectbuyer.keys("\uE007");
 createQuote.click();
 browser.pause(2000);

 let getVal = createQuoteSummary.getText();
   createQuoteSummary.click();
 quoteName.setValue("Test");

 if(getVal === "REQUEST APPROVAL"){
   comments.setValue("Approval");
   dialogReqApproval.click();
   } else{
   dialogCreateQuote.click();
   }
   browser.pause(2000);
});

it("Create order", () => {
 let addToCart=$('//*[@id="root"]/div[2]/div[2]/div[2]/div/div/div/input');
let cart = $("//*[@id='root']/header/div/div/div[3]/button[1]");
let addcustomPtd = $('//*[@id="root"]/div[2]/div[2]/div[1]/div[2]/button');
let selectbuyer=$('//*[@id="asynchronous-demo"]');
let createOrder=$('//*[@id="root"]/div[2]/div/div[2]/div/div/div[4]/button');
let placeOrderSummary = $('//*[@id="root"]/div[2]/header/div/button[2]');
let orderName = $('[id="name"]');
let dialogCreateOrder = $('//*[@id=" Place Order"]');
let promptSnackbar = $("#client-snackbar");
let emptyCartSearch = $('//*[@id="root"]/div[2]/div[2]/div[2]/div/div/div/input');
let emptyCartsearchedproduct =$('//*[@id="root"]/div[2]/div[2]/div[2]/div/div[2]/div/div/ul/div[1]')
let search = $('//*[@id="root"]/div[2]/div/div[1]/div[1]/div[2]/div[1]/div/div/div/input');
let productSearched = $('//*[@id="root"]/div[2]/div/div[1]/div[1]/div[2]/div[1]/div/div[2]/div/div/ul/div[1]');

browser.pause(3000);
cart.click();
browser.pause(1000);
let emptyCart = addcustomPtd.isExisting();
console.log(emptyCart + "44545454");
if(emptyCart){
 emptyCartSearch.setValue("DCF 4");
 browser.pause(3000);
emptyCartsearchedproduct.click();
  } else
 {
   search.setValue("DCF 4");
   browser.pause(1000);
   productSearched.click();
}
selectbuyer.click();
browser.pause(1000);
selectbuyer.keys("\uE015");
browser.pause(500);
selectbuyer.keys("\uE007");
createOrder.click();
browser.pause(1000);
placeOrderSummary.click();
orderName.setValue("Test");
dialogCreateOrder.click();
browser.pause(5000);

});





// it("Create Product Group", () => {
  
// let Icon = $("//header/div/div/div[3]/button[2]");
// let Products = $('//*[@id="Products "]');
// let productsSubMenu = $('[id="Products"]');
// let createPG = $('#MPG_PPGL_CFBCPG');
// let PGname = $('[name="name"]');
// let brands = $('#brandsId');
// let dialogPGCreate = $('[id="editDialogButton"]');
// browser.url("https://demo.myapptino.com/create-products/productgroup-landing");
// browser.pause(5000);
// createPG.click();
// PGname.setValue("Test PG");
// brands.click();
// browser.pause(3000);
// brands.keys("\uE015");
// browser.pause(500);
// brands.keys("\uE007");
// dialogPGCreate.click();
// });

// it("Create products", ()=>{
//   let productCreate = $('#MPG_PPGL_CFBCPG');
//   let brandProductId = $('[name="brandProductId"]');
//   let productName = $('[name="productShortDescription"]');
//   let hsnCode = $('[name="hsnCode"]');
//   let primaryCategory = $('//*[@id="productSubCategories.primarySubcategoryName"]');
//   let ULP = $('[name="unitListPrice"]');
//   let unitQnty = $('[name="unitQuantity"]');
//   let packQnty = $('[name="packagingQty"]');
//   let unitOfMeasure = $('[name="unitOfMeasure"]');
//   let createProduct = $('[id="editDialogButton"]');
//   browser.pause(3000);
//   productCreate.click();
//   brandProductId.setValue(today);
//   productName.setValue("Test");
//   hsnCode.click();
//   browser.pause(3000);
//   hsnCode.keys("\uE015");
// browser.pause(500);
// hsnCode.keys("\uE007");
// primaryCategory.click()
// browser.pause(3000);
// primaryCategory.keys("\uE015");
// browser.pause(500);
// primaryCategory.keys("\uE007");
// ULP.setValue(1000);
// unitQnty.setValue(1);
// packQnty.setValue(2);
// unitOfMeasure.setValue(100);
// browser.pause(500);
// createProduct.click();
// browser.pause(2000);
// });



// it("Create Company", ()=>{
  
// let Icon = $("//header/div/div/div[3]/button[2]");
// let Companies = $('//*[@id="Companies"]');
// let createCompany = $("//header/div/button[1]");
// let companyName = $('[name="companyName"]');
// let branchName = $('[name="regAddress.branchName"]');
// let businessType = $('[name="businesstype"]');
// let currencyId = $('[name="currencyId"]');
// let contactName = $('[name="displayName"]');
// let businessEmail = $('[name="userEmail"]');
// let save = $('//*[@id="editDialogButton"]');
// browser.url("https://demo.myapptino.com/accounts/landing");
// browser.pause(5000);
// createCompany.click();
// companyName.setValue("Apptino S");
// browser.pause(1000);
// companyName.keys("\uE015");
// companyName.keys("\uE007");
// branchName.setValue("Kandanchavadi");
// browser.pause(500);
// businessType.click();
// browser.pause(1000);
// businessType.keys("\uE015");
// businessType.keys("\uE007");
// currencyId.click();
// browser.pause(1000);
// currencyId.keys("\uE015");
// currencyId.keys("\uE007");
// contactName.setValue("test" + today);
// businessEmail.setValue(today+"@gmail.com");
// save.click();
// browser.pause(1000);
// });

// it("Create Address", ()=>{
//   let Icon = $("//header/div/div/div[3]/button[2]");
// let Companies = $('#Companies');
// let search = $('[name="Search"]');
// let branchName = $('[name="branchName"]');
// let save = $('[id="editDialogButton"]');
// let firstRow = $('//tbody/tr[1]/td[2]');
// let createBranch = $('#MPG_PPGOD_CPUB');
// browser.url("https://demo.myapptino.com/accounts/landing");
// browser.pause(3000);
// firstRow.click();
// createBranch.click();
// search.setValue("Apptino S");
// browser.pause(1000);
// search.keys("\uE015");
// search.keys("\uE007");
// branchName.setValue("Kandanchavadi");
// browser.pause(500);
// save.click();
// browser.pause(2000)
// });



// it("Create Brand", ()=>{
    
//   let Icon = $('//*[@id="root"]/header/div/div/div[3]/button[2]');
//   let Product = $('//*[@id="Products "]');
//   let Brands = $('//*[@id="Brands"]');
//   let Addbrand = $('//header/div/button[2]');
//   let Brandname = $("//div[3]/div/div[2]/div/div/input");
//   let save = $('//*[@id="editDialogButton"]');
//   let Delete = $('//*[@id="root"]/div[2]/div/div[2]/header/div/button[1]');
//   let Yes = $('//*[@id="yes"]');
//   browser.url("https://demo.myapptino.com/brands");
//   browser.pause(8000);
//   Addbrand.click();
// Brandname.setValue("test" + today);
// save.click();
// browser.pause(500);
// Delete.click();
// browser.pause(500);
// Yes.click();
// browser.pause(8000);
// })





// it("Create Category", ()=>{
  
  
// let Icon = $("//header/div/div/div[3]/button[2]");
// let Product = $('//*[@id="Products "]');
// let Categories = $('//*[@id="Categories"]');
// let Addcategory = $('//header/div/button[1]');
// let Categoryname = $("//div[3]/div/div[2]/div/div/input");
// let save = $('//*[@id="editDialogButton"]');
// let Delete = $('//*[@id="root"]/div[2]/div/div[2]/header/div/button[1]')
// let Yes = $('//*[@id="yes"]');
// browser.url("https://demo.myapptino.com/categories");
//   browser.pause(8000);
//   Addcategory.click();
// Categoryname.setValue("test" + today);
// save.click();
// browser.pause(500);
// Delete.click();
// browser.pause(500);
// Yes.click();
// browser.pause(8000)
// })





// it("Create Board", ()=>{
  
//   let Icon = $("//header/div/div/div[3]/button[2]");
//   let Boards = $('//*[@id="Boards"]');
//   let Addboard = $('//*[@id="root"]/div[2]/header/div/button[1]');
//   let BoardName = $('[name="projectName"]');
//   let Modules = $('//*[@id="modules"]');
//   let save = $('//*[@id="editDialogButton"]');
//   let selectBoard = $('//*[@id="root"]/div[2]/div[2]/div/div/div/div/div[3]');
//   let Addlist = $('//*[@id="root"]/div[2]/div[2]/div/div/div/button');
//   let taskname = $("//textarea[1]");
//   let Addtolist = $('//*[@id="root"]/div[2]/div[2]/div/div[2]/div/div/button[2]');
//     browser.url("https://demo.myapptino.com/boards")
//       browser.pause(8000);
//       Addboard.click();
//      BoardName.setValue("test" + today);
//   Modules.click();
//   Modules.keys("\uE015");
//   browser.pause(1000);
//   Modules.keys("\uE007");
//   browser.pause(1000);
//   save.click();
//   browser.pause(2000);
//   selectBoard.click();
//   browser.pause(500);
//   Addlist.click();
//   taskname.setValue("Test");
//   browser.pause(1000);
//   Addtolist.click();
//   browser.pause(2000);
  
//   })
  
  })
})

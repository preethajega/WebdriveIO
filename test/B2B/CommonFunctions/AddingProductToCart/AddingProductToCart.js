const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const path = require("../../PageObjects/BrowsePages/Cart");
const assert = require("assert");
const common = require("../../PageObjects/Common/commonObjects");
var CartIP = require("../../Inputs/Browse/CartIp");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const CartIp = require("../../Inputs/Browse/CartIp");
const { uploadExcel } = require("../../Inputs/Browse/CartIp");

class AddProduct {
  
 
  clickEnquiryIcon = async () => {
    await actionWrapper.checkVisibleClickableAndClick(await path.enqBtn);
  };

  clickgetQuoteBtn = async () => {
    if(await actionWrapper.eleDisplayed(await path.getQuote))
    await actionWrapper.checkVisibleClickableAndClick(await path.getQuote);
  };

   // to click create quote cart page
   cartCreateQuote = async () => {
    await actionWrapper.checkVisibleClickableAndClick(
      await path.createQuote
    );
  };

  // to click create order btn in cart page
  cartCreateOrder = async () => {
    await actionWrapper.checkVisibleClickableAndClick(
      await path.createOrder
    );
  };


  
  
  // to select buyer in cart page with search value
  selectBuyer = async () => {
    await actionWrapper.searchAndselectDrpdownusingKeyboard(
          CartIP.BuyerName,await path.selectbuyer
    );
  };


  // Navigate cart page & clear cart
  ClickAndclearCart = async (productId) => {
    await actionWrapper.checkVisibleClickableAndClick(await path.cartIcon);
    await browser.pause(2000);
    if (await path.mycart.isExisting()) {
      await actionWrapper.checkVisibleClickableAndClick(await path.moreOptions);
      await browser.pause(2000);
      await actionWrapper.checkVisibleClickableAndClick(await path.clearCart);
      await actionWrapper.checkVisibleClickableAndClick(await common.yes);
    }
    
  };

// to select products in cart page with search value
selectProducts = async (productId) => {
  await actionWrapper.selectfirstDropdownValue(
    await path.cartSearch,productId,await path.searchResultsImage
  );
};


  // product search and add to cart from header search
  addToCartFromHeaderSearch = async () => {
    await actionWrapper.checkVisibleClickableAndClick(
     await path.searchBox);
    await actionWrapper.checkEnabledClearAndSetValue(
     await path.searchBox,CartIP.ProdName);
    // will click the first result available
    await actionWrapper.checkVisibleClickableMove(
     await path.searchResultsImage)
    await actionWrapper.checkVisibleClickableAndClick(
     await path.addToCart);
     await actionWrapper.checkVisibleClickableAndClick(
       await path.cartIcon);

    
  };

  // to add custom product
  addCustomProductInCart = async (productDesc, productId, unitPrice) => {
    await actionWrapper.checkVisibleClickableAndClick(
      await path.addCustomProduct
    );
    await actionWrapper.checkEnabledClearAndSetValue(
      await path.customProductDescription,
      productDesc
    );
    await actionWrapper.checkEnabledClearAndSetValue(
      await path.customProductID,
      productId
    );
    await actionWrapper.clearAndsetValue(
      await path.customUnitPrice,
      unitPrice
    );
  };

 
  //to add products via excel
  uploadProducts = async () =>{
    await actionWrapper.checkVisibleClickableAndClick(
      await path.uploadBtn
    );
    await attchmentUpload.upload(
      await path.uploadFile,
      uploadExcel
    );
    await actionWrapper.checkVisibleClickableAndClick(
      await path.addtoCartBtn
    )
  }
 
 
  //to create random enquiry
  RandomEnqiury = async ()=>{
    
    await actionWrapper.checkEnabledClearAndSetValue(
      await path.contactPerson,
      CartIP.ContactPerson
    );
    await actionWrapper.checkEnabledClearAndSetValue(
      await path.custEmail,
      CartIP.CustomerEmail
    );
    await  this.cartCreateEnquiry(CartIP.suceessAlert);
  }


  // to create a lead
  createEnquiry = async (buyerName,ContactNo,Attchment,alertmsg) => {
     await actionWrapper.checkEnabledAndSetValue(
      await path.leadName,CartIP.LeadName     
    );

    await actionWrapper.ClickElementAndkeyboardVal(
     await path.LeadbuyerName,buyerName
    );
    
    if ((await path.companyName.getValue()) === "") {
      await actionWrapper.checkEnabledClearAndSetValue(
        await path.companyName,
        CartIP.CompanyName
      );
    }
    if ((await path.contactPerson.getValue()) === "") {
      await actionWrapper.checkEnabledClearAndSetValue(
        await path.contactPerson,
        CartIP.ContactPerson
      );
    }
    if ((await path.custEmail.getValue()) === "") {
      await actionWrapper.checkEnabledClearAndSetValue(
        await path.custEmail,
        CartIP.CustomerEmail
      );
    } 

   await actionWrapper.checkEnabledClearAndSetValue(
      await path.custContactNo,ContactNo
      );
    
    await actionWrapper.ClickElementAndkeyboardVal(
      await path.source,CartIp.Source
    );

    await path.message.waitForDisplayed(1000);
    await actionWrapper.checkEnabledClearAndSetValue(
      await path.message,
      CartIP.Message
    );
    await attchmentUpload.upload(
      await path.attachmentEnquiry,
      Attchment
    );
    await this.cartCreateEnquiry(alertmsg);
   
  };
  // to click create enquiry btn in cart page
  cartCreateEnquiry = async (alertmsg) => {

    await actionWrapper.checkVisibleClickableMoveAndClick(
      await path.createEnquiry
    );
    if(await common.snackbar.getText() === CartIP.uploadAlert ){
      await actionWrapper.checkVisibleClickableMoveAndClick(
        await path.createEnquiry
      );
    }
   await assert.strictEqual(
      await common.snackbar.getText(),alertmsg 
    
    );
  };

}



module.exports = new AddProduct();

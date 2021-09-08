const path = require("../../B2C/PageObjects/Checkout.page");
const TestActionWrapper = require("../../CommonActions/ActionsWrappers");


var searchProdTocart = function () {
    this.searchProd= async (Prodname,Qty,ele)=>{
        await TestActionWrapper.clearAndsetValue(path.searchButtonHeader,Prodname);
        await TestActionWrapper.checkVisibleClickableAndClick(path.results);
        await TestActionWrapper.checkVisibleClickableAndClick(path.AddToCartInDetailPage);
        await TestActionWrapper.clearAndsetValue(path.qntyAfterAddToCart,Qty);
        await TestActionWrapper.checkVisibleClickableAndClick(ele);
  
    }

     this.cartChanges= async (ele)=>{
        await  actionwrappers.checkVisibleClickableAndClick(path.cartIcon);
        await  actionwrappers.checkVisibleClickableAndClick(ele);
        
     }
  

    }
    module.exports = new searchProdTocart();
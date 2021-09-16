const path = require("../../B2C/PageObjects/Checkout.page");
var actionwrappers = require("./../../CommonActions/ActionsWrappers");


var searchProdTocart = function () {
    this.searchProd= async (Prodname,Qty,ele)=>{
        await actionwrappers.clearAndsetValue(path.searchButtonHeader,Prodname);
        await actionwrappers.checkVisibleClickableAndClick(path.results);
        await actionwrappers.checkVisibleClickableAndClick(path.AddToCartInDetailPage);
        await actionwrappers.clearAndsetValue(path.qntyAfterAddToCart,Qty);
        await actionwrappers.checkVisibleClickableAndClick(ele);
  
    }

     this.cartChanges= async (ele)=>{
        await actionwrappers.checkVisibleClickableAndClick(path.cartIcon);
        await actionwrappers.checkVisibleClickableAndClick(ele);
        
     }
  

    }
    module.exports = new searchProdTocart();
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

    this.buyProd= async(Prodname) =>{
        await actionwrappers.clearAndsetValue(path.searchButtonHeader,Prodname);
        await actionwrappers.checkVisibleClickableAndClick(path.results);
        await actionwrappers.checkClickableAndClick(path.BuyNowInDetailPage);
    }

     this.cartChanges= async (ele)=>{
        await actionwrappers.checkVisibleClickableAndClick(path.cartIcon);
        await actionwrappers.checkVisibleClickableAndClick(ele);
        
     }

     this.prodChanges= async (ele) =>{
        let btnDisplayed= await ele.isDisplayed();
        if(btnDisplayed){
            for (let i = 0; i < 20; i++) 
            {
             await actionwrappers.checkVisibleClickableAndClick(ele);
             await browser.refresh();
            if(btnDisplayed==false){
                break;
            }
            }
           }
          }
         }
    module.exports = new searchProdTocart();
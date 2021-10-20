const path = require("../../B2C/PageObjects/Checkout.page");
var actionwrappers = require("./../../CommonActions/ActionsWrappers");


var searchProdTocart = function () {
    this.searchProd= async (Prodname,Qty,ele)=>{
        await actionwrappers.clearAndsetValue(path.searchProduct,Prodname);
        await actionwrappers.checkVisibleClickableAndClick(path.results);
        await actionwrappers.checkVisibleClickableAndClick(path.addTocartBtn);
        await actionwrappers.clearAndsetValue(path.qntyAfterAddToCart,Qty);
        await actionwrappers.checkVisibleClickableAndClick(ele);
  
    }

    this.buyProd= async(Prodname) =>{
        await actionwrappers.clearAndsetValue(path.searchProduct,Prodname);
        await actionwrappers.checkVisibleClickableAndClick(path.results);
        await actionwrappers.checkClickableAndClick(path.buyNowBtn);
    }

     this.cartChanges= async (ele)=>{
        await actionwrappers.checkVisibleClickableAndClick(path.cartIcon);
        await actionwrappers.checkVisibleClickableAndClick(ele);
        
     }

     this.prodChanges= async (ele,ele2) =>{
            let emptyCart = await ele2.isDisplayed();
               for (let i = 0; i < 20; i++) 
            {
             await actionwrappers.checkVisibleClickableAndClick(ele);
             await browser.refresh();  
             if(emptyCart){
                break;
            }   
           }        
          }
         }
    module.exports = new searchProdTocart();
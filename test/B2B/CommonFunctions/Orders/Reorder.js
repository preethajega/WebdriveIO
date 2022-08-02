
const ActionsWrappers = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../PageObjects/page");
const toasterip=require('../../Inputs/Orders/Reorder_ip')
const Reorderpage=require('../../PageObjects/Orders/Reorder');



class Reorder extends Page{
     
    OpenTheOrder=async(ele,moreoption,keyvalue)=>{
       await ActionsWrappers.Click(ele)
        await browser.pause(5000)
        await ActionsWrappers.ClickElementAndkeyboardVal(moreoption,keyvalue)
        await browser.pause(2000)
    
    }

    AddProduct=async(scrollele,search,searchvalue,clickdropvalue,toasterpath,SuccsesAdingproductToasterIp)=>{
        await ActionsWrappers.scrollEle(scrollele)
        await browser.pause(2000)
        await ActionsWrappers.clickAndSetvalue(search,searchvalue)
        await browser.pause(2000)
        await ActionsWrappers.Click(clickdropvalue)
        await browser.pause(2000)
        await ActionsWrappers.snackBarValidate(toasterpath,SuccsesAdingproductToasterIp)
        // await ActionsWrappers.Click(placeorderutton)
    }


    ValidationOfRequestPrice=async(snackbar,scrollele,search,searchvalue,clickdropvalue,toasterpath,SuccsesAdingproductToasterIp)=>{
       
    for(let i=0;await snackbar.isDisplayed()===true;i++){
        if(await snackbar.getText()===toasterip.RequiredpriceUnknownMsg){
            await ActionsWrappers.scrollEle(Reorderpage.CheckRequestPrice)
            await browser.pause(3000)
            await ActionsWrappers.Click1(Reorderpage.RequestPriceInput)
            await ActionsWrappers.Click(Reorderpage.RemoveProduct)
            await ActionsWrappers.Click(Reorderpage.RemoveProductYesButton)
            await this.AddProduct(scrollele,search,searchvalue,clickdropvalue,toasterpath,SuccsesAdingproductToasterIp)
        }
         
    }
}

        ValidationOfMOQ=async(path,ErrorMsg)=>{

            for(let i=0;await path.isDisplayed()===true;i++){
                let a=await Reorderpage.PackOfQTY.getText()
                // console.log(a)
                 let b=a.slice(7);
                 let c=parseInt(b)
                 if (c%2!==0) {
                    if(a=="Pack of 3"){
                     await ActionsWrappers.scrollEle(Reorderpage.InputMOQ)
                     await browser.pause(2000)
                     await ActionsWrappers.clickAndSetvalue(Reorderpage.InputMOQ,"2")
                     await ActionsWrappers.Click(Reorderpage.BTHQuantity);
                     await ActionsWrappers.snackBarValidate(ErrorMsg,"MOQ is 3")
                     await ActionsWrappers.clickAndSetvalue(Reorderpage.InputMOQ,"4")
                     await ActionsWrappers.Click(Reorderpage.BTHQuantity);
                     await ActionsWrappers.snackBarValidate(ErrorMsg,"Enter in multiples of 3")
                     await ActionsWrappers.ClickAndUpArrow(Reorderpage.InputMOQ)
                     await ActionsWrappers.Click(Reorderpage.PlaceOrderBtn)
                   }
                   if(a=="Pack of 5"){
                    await ActionsWrappers.scrollEle(Reorderpage.InputMOQ)
                    await browser.pause(2000)
                    await ActionsWrappers.clickAndSetvalue(Reorderpage.InputMOQ,"3")
                    await ActionsWrappers.Click(Reorderpage.BTHQuantity);
                    await browser.pause(2000)
                    await ActionsWrappers.snackBarValidate(ErrorMsg,"MOQ is 5")
                    await ActionsWrappers.clickAndSetvalue(Reorderpage.InputMOQ,"6")
                    await ActionsWrappers.Click(Reorderpage.BTHQuantity);
                    await browser.pause(2000)
                    await ActionsWrappers.snackBarValidate(ErrorMsg,"Enter in multiples of 5")
                    await ActionsWrappers.ClickAndUpArrow(Reorderpage.InputMOQ)
                    await ActionsWrappers.Click(Reorderpage.PlaceOrderBtn)
                    
                   }
                    
                }else if(c%2==0){
                    if(a=="Pack of 2"){
                        await ActionsWrappers.scrollEle(Reorderpage.InputMOQ)
                        await browser.pause(2000)
                        await ActionsWrappers.clickAndSetvalue(Reorderpage.InputMOQ,"1")
                        await ActionsWrappers.Click(Reorderpage.BTHQuantity);
                        await browser.pause(2000)
                        await ActionsWrappers.snackBarValidate(ErrorMsg,"MOQ is 2")
                        await ActionsWrappers.clickAndSetvalue(Reorderpage.InputMOQ,"7")
                        await ActionsWrappers.Click(Reorderpage.BTHQuantity);
                        await browser.pause(2000)
                        await ActionsWrappers.snackBarValidate(ErrorMsg,"Enter in multiples of 2")
                        await ActionsWrappers.ClickAndUpArrow(Reorderpage.InputMOQ)
                        await ActionsWrappers.Click(Reorderpage.PlaceOrderBtn)
                      
                     }
                     if(a=="Pack of 4"){
                        await ActionsWrappers.scrollEle(Reorderpage.InputMOQ)
                        await browser.pause(2000)
                        await ActionsWrappers.clickAndSetvalue(Reorderpage.InputMOQ,"3")
                        await ActionsWrappers.Click(Reorderpage.BTHQuantity);
                        await browser.pause(2000)
                        await ActionsWrappers.snackBarValidate(ErrorMsg,"MOQ is 4")
                        await ActionsWrappers.clickAndSetvalue(Reorderpage.InputMOQ,"9")
                        await ActionsWrappers.Click(Reorderpage.BTHQuantity);
                        await browser.pause(2000)
                        await ActionsWrappers.snackBarValidate(ErrorMsg,"Enter in multiples of 4")
                        await ActionsWrappers.ClickAndUpArrow(Reorderpage.InputMOQ)
                        await ActionsWrappers.Click(Reorderpage.PlaceOrderBtn)
                       
                     }
                       if(a=="Pack of 10"){
                        await ActionsWrappers.scrollEle(Reorderpage.InputMOQ)
                        await browser.pause(2000)
                        await ActionsWrappers.clickAndSetvalue(Reorderpage.InputMOQ,"7")
                        await ActionsWrappers.Click(Reorderpage.BTHQuantity);
                        await browser.pause(2000)
                        await ActionsWrappers.snackBarValidate(ErrorMsg,"MOQ is 10")
                        await ActionsWrappers.clickAndSetvalue(Reorderpage.InputMOQ,"11")
                        await ActionsWrappers.Click(Reorderpage.BTHQuantity);
                        await browser.pause(2000)
                        await ActionsWrappers.snackBarValidate(ErrorMsg,"Enter in multiples of 10")
                        await ActionsWrappers.ClickAndUpArrow(Reorderpage.InputMOQ)
                        await ActionsWrappers.Click(Reorderpage.PlaceOrderBtn)
                       
                     }
                }else{
                    break
                }
                

            }

        }
}
module.exports =new Reorder()





// let a=53;

// for (i=0;i<5;i++){
//     let c=a+i
//     if(c%5==0){
//         console.log(c)
//         break
//     }
// }
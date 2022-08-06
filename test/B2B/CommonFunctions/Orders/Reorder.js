
const ActionsWrappers = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../PageObjects/page");
const toasterip=require('../../Inputs/Orders/Order_ip')
const Reorderpage=require('../../PageObjects/Orders/Order.path')
const requiredate=require("../../CommonFunctions/salesModule/SalesCards/EndCustomerCard")
const requirepage=require("../../PageObjects/SalesModule/summarypage/EndCustomerCard.page")
const landing=require('../../CommonFunctions/salesModule/SalesCards/OrderFilterCard')
const Login=require('../../PageObjects/Login.page')





class Reorder extends Page{
     
    OpenTheOrder=async(ele,moreoption,keyvalue)=>{
       await ActionsWrappers.Click(ele)
        await browser.pause(5000)
        await ActionsWrappers.ClickElementAndkeyboardVal(moreoption,keyvalue)
        await browser.pause(2000)
    
    }

    AddProduct=async(scrollele,search,searchvalue,clickdropvalue,toasterpath,SuccsesAdingproductToasterIp,placeorderbutton)=>{
        await ActionsWrappers.scrollEle(scrollele)
        await browser.pause(2000)
        await ActionsWrappers.clickAndSetvalue(search,searchvalue)
        await browser.pause(2000)
        await ActionsWrappers.Click(clickdropvalue)
        await browser.pause(2000)
        await ActionsWrappers.snackBarValidate(toasterpath,SuccsesAdingproductToasterIp)
        await browser.pause(2000)
        await ActionsWrappers.Click(placeorderbutton)
    }

    RequiredDate=async(Toaster,DateaddToasterIp,BScrollToShip,PlaceOrderBtn)=>{
        await ActionsWrappers.snackBarValidate(Toaster,DateaddToasterIp)
        await ActionsWrappers.scrollEle(BScrollToShip)
        await requiredate.DateSelecter(requirepage.RequiredDeliveryDateBuyer,requirepage.NextMonthBtn,requirepage.DatePath)
        await ActionsWrappers.Click(PlaceOrderBtn)
    }


    ValidationOfRequestPrice=async(snackbar,scrollele,search,searchvalue,clickdropvalue,toasterpath,SuccsesAdingproductToasterIp,placeorderbutton)=>{
       
    for(let i=0;await snackbar.isDisplayed()===true;i++){
        if(await snackbar.getText()===toasterip.RequiredpriceUnknownMsg){
            await ActionsWrappers.scrollEle(Reorderpage.CheckRequestPrice)
            await browser.pause(3000)
            await ActionsWrappers.Click1(Reorderpage.RequestPriceInput)
            await ActionsWrappers.Click(Reorderpage.RemoveProduct)
            await ActionsWrappers.Click(Reorderpage.RemoveProductYesButton)
            await this.AddProduct(scrollele,search,searchvalue,clickdropvalue,toasterpath,SuccsesAdingproductToasterIp,placeorderbutton)
        }
         
    }
}

        ValidationOfMOQ=async(PackOfQTY,ErrorMsg)=>{

            // for(let i=0; snackbar.isDisplayed()===true;i++){
                let a=await PackOfQTY.getText()
                console.log(a)
                 let b=a.slice(7);
                 let c=parseInt(b)
                 console.log(c)
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
                }
                
            // }

        }

        LandingAndValidationOfStatus=async(ALLTab,namefilter,setvalue,applybtn,Sproductid,OrderStatus,IPstatusOfOrder)=>{
            await landing.open();
            await browser.pause(10000)
            await ActionsWrappers.Click(ALLTab)
            await ActionsWrappers.clickAndSetvalue(namefilter,setvalue)
            await ActionsWrappers.Click(applybtn)
            await browser.pause(1000)
            await ActionsWrappers.Click(Sproductid)
            await browser.pause(2000)
            await ActionsWrappers.Validate(OrderStatus,IPstatusOfOrder)
        }

        LoginPage=async(email,password)=>{
           await Login.open() 
           await Login.login(email,password);
           await ActionsWrappers.urlValidation("/dev3.myapptino.com/");
        }

      EmptyInputValidate=async(ele,placeorderbutton,msgalert,ipalert,value)=>{
            await ActionsWrappers.Click(ele)
            await ActionsWrappers.clearValues(ele)
            await browser.pause(2000)
            await ActionsWrappers.Click(placeorderbutton)
            await ActionsWrappers.Validate(msgalert,ipalert)
            await ActionsWrappers.clickAndSetvalue(ele,value)
            await ActionsWrappers.Click(placeorderbutton)
        }

    // Buyer Side Cancel Order Validation //

     CancelValidationOfBuyer=async(OrderStatus,IpOrderStatus,ReasonOfCancel,IPReasonOfCancel,RequestEditBtn,Toaster,CancelOrderErorrMsg,MoreOption,CancelKey)=>{
      await ActionsWrappers.Validate(OrderStatus,IpOrderStatus)
      await browser.pause(2000)
      await ActionsWrappers.Validate(ReasonOfCancel,IPReasonOfCancel)
      await browser.pause(2000)
      await ActionsWrappers.ClickAndSnackBarValidate(RequestEditBtn,Toaster,CancelOrderErorrMsg)
      await browser.pause(2000)
      await ActionsWrappers.ClickElementAndkeyboardVal(MoreOption,CancelKey)
      await browser.pause(1000)
      await ActionsWrappers.snackBarValidate(Toaster,CancelOrderErorrMsg)
      await browser.pause(1000)
      await ActionsWrappers.Click1(MoreOption)


    }

    // Seller Side Cancel Order Validation //

     CancelValidationOfSeller=async(ReasonOfCancel,IPReasonOfCancel,Btn,Toaster,CancelOrderErorrMsg,Btn1,MoreOption,CancelKey)=>{
      await ActionsWrappers.Validate(ReasonOfCancel,IPReasonOfCancel)
      await browser.pause(2000)
      await ActionsWrappers.ClickAndSnackBarValidate(Btn,Toaster,CancelOrderErorrMsg)
      await browser.pause(2000)
      await ActionsWrappers.ClickAndSnackBarValidate(Btn1,Toaster,CancelOrderErorrMsg)
      await browser.pause(2000)
      await ActionsWrappers.selectDrpdownusingKeyboard(MoreOption)
      await ActionsWrappers.snackBarValidate(Toaster,CancelOrderErorrMsg)
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





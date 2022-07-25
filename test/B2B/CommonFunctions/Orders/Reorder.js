
const ActionsWrappers = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../PageObjects/page");


class Reorder extends Page{
     
    OpenTheOrder=async(ele,moreoption,keyvalue)=>{
       await ActionsWrappers.Click(ele)
        await browser.pause(5000)
        await ActionsWrappers.ClickElementAndkeyboardVal(moreoption,keyvalue)
        await browser.pause(2000)
    
    }

    AddProduct=async(scrollele,search,searchvalue,clickdropvalue,toasterpath,SuccsesAdingproductToasterIp,placeorderbtn,requiredDateToasterIp)=>{
        await ActionsWrappers.scrollEle(scrollele)
        await browser.pause(2000)
        await ActionsWrappers.clickAndSetvalue(search,searchvalue)
        await browser.pause(2000)
        await ActionsWrappers.Click(clickdropvalue)
        await browser.pause(2000)
        await ActionsWrappers.snackBarValidate(toasterpath,SuccsesAdingproductToasterIp)
        // await ActionsWrappers.scrollEle(scrollele2)
        await ActionsWrappers.Click(placeorderbtn)
        await ActionsWrappers.snackBarValidate(toasterpath,requiredDateToasterIp)
    }


    validation=async(path)=>{
        const toast=await path.getText()

        if(toast=="Order has product(s) with prices unknown, Remove product(s) with unknown price or ask for quote"){
           console.log("hii iam jas000000000")

        }
        else if(toast=="MOQ is 5 for FG100024"){
         console.log("hi iam ji 1111111111")
        }
       
    }


   
    

}
module.exports =new Reorder()
const actionWrapper = require("../../../../CommonActions/ActionsWrappers");
const Page = require("../../../PageObjects/page");
const path = require("../../../PageObjects/SalesModule/summarypage/QuoteFilterCard.page");
const filterip=require("../../../Inputs/salesModule/summarypage/QuoteFilterCardIp");



class Quotefilder1 extends Page{

    ClickAllFilterTabAndScrollDown= async (selecttab,scrollele)=>{
       await actionWrapper.Click1(selecttab)
       await actionWrapper.scrollEle(scrollele)
    }

    ClickSingleSetValue= async (selecttab,scrollele,pathstart,startip,confbtnpath)=>{
        await actionWrapper.Click1(selecttab)
        await actionWrapper.scrollEle(scrollele)
        await actionWrapper.clickAndSetvalue(pathstart,startip)
        await actionWrapper.Click1(confbtnpath)
        await browser.pause(5000)
     }
    ClickDoubleSetValue=async (selecttab,scrollele,setpath,setvalue,setpath1,setvalue1,confbtnpath)=>{
        await actionWrapper.Click1(selecttab)
        await actionWrapper.scrollEle(scrollele)
        await actionWrapper.clickAndSetvalue(setpath,setvalue)
        await actionWrapper.clickAndSetvalue(setpath1,setvalue1)
        await actionWrapper.Click1(confbtnpath)
        await browser.pause(5000)
    }

    GetText=async(path)=>{
       const text=await path
       const gettext=await text.getText()
       console.log(gettext)
    }


    ValidationSingleValue=async(path,input)=>{
    //   await this.GetText(path)

       const text=await path
       const gettext=await text.getText()

       if(input<=gettext){
        console.log("true");
       }else{
        console.log("false")
       }

    }

    ValidationDoubleValue=async(path,input1,input2)=>{

       
        const gettext=await path.getText()

        if((input1<=gettext)&&(input2>=gettext)){
            console.log("true")
        }else{
            console.log("false")
        }
    }


    ClearAllandApply=async(filtertab,clearall,apply)=>{
       await actionWrapper.Click1(filtertab)
       await actionWrapper.Click1(clearall)
       await actionWrapper.Click1(apply)
    }
     
    GetAttr=async(path)=>{
        const attr=await path.getAttribute('class')
        console.log(attr)
    }
    

    CheckTheButton=async(attrpath,ClickTheEnableButton)=>{
      const attribute=await path.AttQuoteId.getAttribute('class')
      const isEnable=await attrpath.getAttribute('class')

      if(attribute===isEnable){
           console.log(isEnable+"CLASSNAME")
      }else{
        await actionWrapper.Click(ClickTheEnableButton)
        await browser.pause(3000)
      }


    }
    
    //  CheckTheTable=async (CheckTheEnableButton,ClickTheEnableButton)=>{

    //     const isenable = await CheckTheEnableButton.isEnabled()
    //     await browser.pause(3000)

    //     // if (isenable==true) {

    //     //     await actionWrapper.Click(ClickTheEnableButton)
    //     //     await browser.pause(3000)
    //     //     console.log(isenable+"selected is true")
            
    //     // }else{
    //     //     // await actionWrapper.Click(ClickTheEnableButton)
    //     //     // await browser.pause(3000)
    //     //     console.log(isenable+"selected is false")
    //     // }
    
    //  }

}
module.exports = new Quotefilder1();
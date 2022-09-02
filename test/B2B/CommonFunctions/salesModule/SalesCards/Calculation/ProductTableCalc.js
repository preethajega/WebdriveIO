const actionWrapper = require("../../../../../CommonActions/ActionsWrappers");
const path = require("../../../../PageObjects/SalesModule/summarypage/ProductTable.page");
const Page = require("../../../../PageObjects/page");
const TableIP=require('../../../../Inputs/salesModule/summarypage/ProductTableCal_IP')
const ApplyDisCommon=require('../../../../CommonFunctions/salesModule/SalesCards/ApplyDiscountCard')
const ApplyDisIP=require('../../../../Inputs/salesModule/summarypage/ApplyDiscountIP')
const priceDetailpage=require('../../../../PageObjects/SalesModule/summarypage/ApplyDiscountCard.page')
const prodTable_path = require("../../../../PageObjects/SalesModule/summarypage/ProductTable.page");



class CalcFunction extends Page{

    async open(url) {
        super.open(url);
    }

eleValue(ele){
    return ele.getValue();
}
 


// UnitPriceCalc = async(num1,num2) => {
// /*unitList price and dicount% */
//  num1 *( num2 /100);
// }

// MarginCalc = async(num1,num2) =>{
//     /*unitprice and cost */
//   ((num1-num2)/num1)*100
// }
// DMCCal = async(num1,num2) =>{
//     /*unitprice and cost */
//     (num1/num2)*100
// }

// MarginCalcwithAddon = async(num1,num2,num3) =>{
//     /*unitprice and cost and addoncost */
//     ((num1-(num2+num3))/num1)*100
// }

// DMCCalwithAddon = async(num1,num2,num3) =>{
//     /*unitprice and cost */
//     (num1/(num2+num3))*100
// }

// Amuntcal =async(num1,num2) =>{
//     /*unitprice and askedqty */
//     num1*num2
// }

// unitPFCalc= async(num1,num2) =>{
//     /*amount and PF */
//     num1/num2
// }
  ///// NEW ////


UnitPriceCalc1=async(num1,num2)=>{
    /*num1=unitList price and num2=dicount% */
    let unitprice=num1-(num1 *( num2 /100));
    return unitprice
}

MarginCalc1 = async(num1,num2) =>{
    /*num1=unitprice and num2=cost */
  let Margin=((num1-num2)/num1)*100
  let MarginCal=Margin.toFixed(2)
  return MarginCal
}

MarginCalcwithAddon1 = async(num1,num2,num3) =>{
    /*num1=unitprice and num2=cost and num3=addoncost */
    let margin= ((num1-(num2+num3))/num1)*100
    let MWAC=margin.toFixed(2)
    return MWAC
}

DMCCal1 = async(num1,num2) =>{
    /*num1=cost and num2=unitprice */
    let DMC=(num1/num2)*100
    let DMCcal=DMC.toFixed(2)
    return DMCcal
}

DMCCalwithAddon1 = async(num1,num2,num3) =>{
    /*num1=unitprice and num2=cost and num3=AddonCost */
    let DMC=((num2+num3)/num1)*100
    let DMCWAC=DMC.toFixed(2)
    return DMCWAC
}

Amuntcal1 =async(num1,num2) =>{
    /*num1=unitprice and num2=askedqty */
    let AMUNT=num1*num2
    let Amount=AMUNT.toFixed(2)
    return Amount
}
unitPFCalc1= async(num1,num2) =>{
    /*num1=amount and num2=PF */
    let PF=(num2/100)*num1
    console.log(num1);
    console.log(num2);
    console.log(PF);
    let PFcal=PF.toFixed(2)
    return PFcal
}

SplitAddOnCostRow1=async(uc1,uc2,AOC)=>{
    /*num1=cost1 & num2=cost2 & num3=addoncost */
    let cost=(uc1/(uc1+uc2))*AOC
    let cost1=cost.toFixed(2)
    return cost1
}
SplitAddOnCostRow2=async(uc1,uc2,AOC)=>{
    /*num1=cost1 & num2=cost2 & num3=addoncost */
    let cost=(uc2/(uc1+uc2))*AOC
    let cost1=cost.toFixed(2)
    return cost1
}

SplitShippingChargeRow1=async(up1,up2,SCH)=>{
    /*num1=up1 & num2=up2 & num3=shipping charge */
    let ShipCharge=(up1/(up1+up2))*SCH
    return ShipCharge
}
SplitShippingChargeRow2=async(up1,up2,SCH)=>{
    /*num1=up1 & num2=up2 & num3=shipping charge */
    let ShipCharge=(up2/(up1+up2))*SCH
    return ShipCharge
}

Cost_Excl_Addoncost=async(uc1,qty1,uc2,qty2)=>{
    let Cost=((uc1*qty1)+(uc2*qty2))
    return Cost
}
TotalCost=async(uc1,qty1,uc2,qty2,AOC)=>{
    let Cost=((uc1*qty1)+(uc2*qty2)+(AOC))
    return Cost
}

FinancialGM=async(up1,up2,uc1,uc2)=>{
    let GM=(((up1+up2)-(uc1+uc2))/(up1+up2))*100
    let GM1=GM.toFixed(2)
    return GM1
}

FinancialOverAllGM=async(up1,up2,uc1,uc2,AOC)=>{
    let OGM=(((up1+up2)-(uc1+uc2+AOC))/(up1+up2))*100
    let OGM1=OGM.toFixed(2)
    return OGM1
}

FinancialDMC=async(uc1,uc2,up1,up2)=>{
   let DMC=((uc1+uc2)/(up1+up2))*100
   let DMC1=DMC.toFixed(2)
   return DMC1
}
FinancialOverAllDMC=async(uc1,uc2,AOC,up1,up2)=>{
    let ODMC=((uc1+uc2+AOC)/(up1+up2))*100
    let ODMC1=ODMC.toFixed(2)
    return ODMC1
}

NewSubTotal_INC_Row1=async(ulp1,subtotal,newsubtot)=>{
   const per=(ulp1/subtotal)*100
   const applynew=newsubtot*(per/100)
   return applynew
}
NewSubTotal_INC_Row2=async(ulp2,subtotal,newsubtot)=>{
    const per=(ulp2/subtotal)*100
    const applynew=newsubtot*(per/100)
    return applynew
 }


///// Common function /////


Validation=async(value1,value2)=>{
    if (value1==value2) {
        console.log(value1,value2)
        console.log("success")
    }else{
        console.log("failure")
        console.log(value1,value2)
    }
}

Validation1=async(value1,value2,value3)=>{
    if ((value1==value2)&&(value1==value3)) {
        console.log(value1,value2,value3)
        console.log("success")
    }else{
        console.log("failure")
        console.log(value1,value2,value3)
    }
}

  AddedTwoValue=async(path1,value1,path2,value2)=>{
    await actionWrapper.clearAndsetValue(path1,value1)
    await browser.pause(2000)
    await actionWrapper.clearAndsetValue(path2,value2)
    await browser.pause(2000)
  }
  AddedThreeValue=async(path1,value1,path2,value2,path3,value3)=>{
    await actionWrapper.clearAndsetValue(path1,value1)
    await browser.pause(2000)
    await actionWrapper.clearAndsetValue(path2,value2)
    await browser.pause(2000)
    await actionWrapper.clearAndsetValue(path3,value3)
    await browser.pause(2000)
  }
  ClickAndSave=async(path,btn)=>{
    await actionWrapper.Click(path)
    await actionWrapper.Click(btn)
    await browser.pause(3000)
  }

  eleText=async(ele)=>{
    let text=await ele.getText()
    let value=text.slice(1)
    let Value1=value.replace(/,/g, '')
    let value2=parseFloat(Value1)
    return value2
   }
   eleText1=async(ele)=>{
    let text=await ele.getText()
    let Value=parseFloat(text.replace(/%/g, ''))
    let value2=Value.toFixed(2)
    return value2
   }

   ChangeDMCorGM=async()=>{
    await this.open(TableIP.SettingModuleUrl)
    await browser.pause(5000)
    await this.ClickAndSave(path.DMCToggleBtn,path.SaveBtn)
    await this.open(TableIP.QuoteSummaryUrl)
    await browser.pause(5000)
   }

//    text=async(ele)=>{
//     let text=await ele.getText()
//     let value=text.slice(1)
//     let Value1=value.replace(/,/g, '')
//     let value2=parseFloat(Value1)
//     return value2
//    }

   NewSubTotal=async(ele1,ele2,ele3)=>{
    const value1=await this.eleText(ele1)
    const value2=await this.eleText(ele2)
    const value3=await this.eleText(ele3)
    if ((value1+value2)==value3) {
        console.log("new sub total correct")
        console.log(value1,value2,value3);
    }else{
        console.log("wrong");
        console.log(value1,value2,value3);

    }
   }


   ByDiscount=async(ulp1,dis1,up1,qty1,amnt11,amnt22,subtot1)=>{
    const ulp=await this.eleValue(ulp1)
    const dis=await this.eleValue(dis1)
    const up=await this.eleValue(up1)
    const qty=await this.eleValue(qty1)
    const amnt1= await this.eleText(amnt11)
    const amnt2=await this.eleText(amnt22)
    const upcal=await this.UnitPriceCalc1(ulp,dis)
    const amntcal=await this.Amuntcal1(up,qty)
    const subtot=await this.eleText(subtot1)
    if (upcal==up) {  
      if (amntcal==amnt1) {
        if ((amnt1+amnt2)==subtot) {
            console.log("sucsessssssss");
        } 
      }
    }
   }

   AddOnDis=async(DisIP)=>{
    await ApplyDisCommon.ApplyDiscBYAmount(priceDetailpage.AddOnDiscount,priceDetailpage.ByDiscountInput,DisIP,priceDetailpage.ApplyDisApply)
    let inputvalue=await this.eleValue(priceDetailpage.ByDiscountInput)
    let disValue=await this.eleValue(prodTable_path.discount(0))

    if ((inputvalue*1==disValue)) {
        await ApplyDisCommon.IncreseDecreseDis(priceDetailpage.IncreaseBtn,priceDetailpage.ApplyDisApply)
        let inputvalue=await this.eleValue(priceDetailpage.ByDiscountInput)
        let disValue=await this.eleValue(prodTable_path.discount(0))  

        if ((inputvalue*2==disValue)) {
            await ApplyDisCommon.IncreseDecreseDis(priceDetailpage.DecreaseBtn,priceDetailpage.ApplyDisApply)
            let inputvalue=await this.eleValue(priceDetailpage.ByDiscountInput)
            let disValue=await this.eleValue(prodTable_path.discount(0))

            if (inputvalue==disValue) {
                console.log("decrease");
            }else{
                console.log(inputvalue,disValue);
                console.log("DEC");

            }  
        }
    }
   }


//    roundupPlusTwo=async()=>{
//     let text=await ele.getText()
//     let value=text.slice(1)
//     var numarray=value.split('.');
//     var a=new Array();
//     a=numarray;
//     var c=parseInt(a[1])
//     var b=18
//     if(c+1==b){
//     console.log("crt");
//    }else{
//     console.log("wrong")
//     }
//    }

roundupPlusTwo=async()=>{
    await this.eleText()
}
// export const roundUp = (num, precision) => {
//     precision = Math.pow(10, precision)
//     return Math.ceil(num * precision) / precision
// }
// export const round5 = (x) => {
//     return Math.ceil(x / 5) * 5;
// }
// export const getRoundup = (products, roundValue, crncyfactor, buyerCurrencyIsBase) => {
//     _.each(products, item => {
//         item.actualdisc = item.discount
//         item.acturalUP = item.unitPrice
//         item.unitPrice = roundUp(item.unitPrice, roundValue)
//         if (buyerCurrencyIsBase) {
//             item.unitPriceBackUp = item.unitPrice / crncyfactor
//         } else {
//             item.unitPriceBackUp = _.cloneDeep(item.unitPrice)
//         }
//     })
//     return products
// }





} 
module.exports = new CalcFunction();

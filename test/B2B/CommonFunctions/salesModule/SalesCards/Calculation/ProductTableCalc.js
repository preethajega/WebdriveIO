const actionWrapper = require("../../../../../CommonActions/ActionsWrappers");
const path = require("../../../../PageObjects/SalesModule/summarypage/ProductTable.page");


class CalcFunction {

 

eleValue(ele){
    return ele.getValue();
}
 

UnitPriceCalc = async(num1,num2) => {
/*unitList price and dicount% */
 num1 *( num2 /100);
}

MarginCalc = async(num1,num2) =>{
    /*unitprice and cost */
  ((num1-num2)/num1)*100
}
DMCCal = async(num1,num2) =>{
    /*unitprice and cost */
    (num1/num2)*100
}

MarginCalcwithAddon = async(num1,num2,num3) =>{
    /*unitprice and cost and addoncost */
    ((num1-(num2+num3))/num1)*100
}

DMCCalwithAddon = async(num1,num2,num3) =>{
    /*unitprice and cost */
    (num1/(num2+num3))*100
}

Amuntcal =async(num1,num2) =>{
    /*unitprice and askedqty */
    num1*num2
}

unitPFCalc= async(num1,num2) =>{
    /*amount and PF */
    num1/num2
}


} 
module.exports = new CalcFunction();

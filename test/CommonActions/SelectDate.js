const actionWrapper = require("../CommonActions/ActionsWrappers");
const common = require("../B2B/PageObjects/Common/commonObjects");


var selectReqDate = function() {
     this.selectDate= async(path)=>{
        await actionWrapper.checkClickableAndClick(path);
     }

    this.clickAndSelectNextDate = async (dateElement) => {
       await this.selectDate(dateElement);
        await actionWrapper.checkClickableAndClick(await common.nextDate);
    }

    this.clickAndSelectNextMonthDate = async (dateElement) => {
        await this.selectDate(dateElement);
         await actionWrapper.checkClickableAndClick(await common.nextMonth);
         await actionWrapper.checkClickableAndClick(await common.nextmonthDate);
     }

     this.selectYearandMonth =async (dateElement) =>{
        await this.selectDate(dateElement);
        await actionWrapper.checkClickableAndClick(await common.openYearview);
        await actionWrapper.checkClickableAndClick(await common.selectedYear);
        await actionWrapper.checkClickableAndClick(await common.selectedMonth);
        await actionWrapper.checkClickableAndClick(await common.nextDate);
     }






}
module.exports = new selectReqDate();
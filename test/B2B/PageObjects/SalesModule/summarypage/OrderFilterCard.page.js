const Page = require("../../../PageObjects/page");

class OrderFilter extends Page{
    /****************** SELLERSIDE FILTER CARD ***************** */
    /****************** BUYERSIDE FILTER CRAD ***************** */
    get OrderStatus(){
        return super.pathById('checkboxes-tags-demo')
    }
    get OrderId(){
        return super.pathById('oid')
    }
    get OrderName(){
        return super.pathById('oname')
    }
    get OrderBuyerInfo(){
        return super.pathById('checkboxes-Accounts')
    }
    get OrderstartDate(){
        return super.pathByXpath('//label[text()="Start Date"]/following::input[1]')
    }
    get OrderEndDate(){
        return super.pathByXpath('//label[text()="End Date"]/following::input[1]')
    }
    get StartValue(){
        return super.pathById('startValue')
    }
    get EndValue(){
        return super.pathById('endValue')
    }
    get StartTaxableAmount(){
        return super.pathByName('startTaxableAmount')
    }
    get EndTaxableAmount(){
        return super.pathByName('endTaxableAmount')
    }
    get StartTotal(){
        return super.pathByName('startGrandTotal')
    }
    get EndTotal(){
        return super.pathByName('endGrandTotal')
    }
    get cancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get ApplyBtn(){
        return super.pathByXpath('//button[@aria-label="Apply"]')
    }
    get ClearAllBtn(){
        return super.pathByXpath('//button[@aria-label="clearAll"]')
    }
    get AllFilterTab(){
        return super.pathById('filter-tab-0')
    }
    get scrollToEle(){
        return super.pathByXpath('//h6[text()="Taxable Range"]')
    }
    get NameButton(){
        return super.pathByXpath('//span[text()="Name"]/following::button[1]')
    }
    get Name(){
        return super.pathByXpath('//span[text()="Name"]')
    }
    get CloseTheTab(){
        return super.pathByXpath('//div[@class="MuiBackdrop-root MuiBackdrop-invisible css-esi9ax"]')
    }
    get ColumnsButton(){
        return super.pathByXpath('//li[text()="Columns"]')
    }
    get TotalItemsEnableButton(){
        return super.pathByXpath('//span[@class="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-13x6f3s"][text()="Total Items"]')

    }
    get TaxableEnableButton(){
        return super.pathByXpath('//span[@class="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-13x6f3s"][text()="Taxable Amount"]')

    }
    get TotalEnableButton(){
        return super.pathByXpath('//span[@class="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-13x6f3s"][text()="Total"]')
    }
    get SubTotalEnableButton(){
        return super.pathByXpath('//span[@class="MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-13x6f3s"][text()="Subtotal"]')
    }
    get TdSubTotal(){
        return super.pathByXpath('//tbody/tr[1]/td[12]/p')
    }    
    get TdTotalItems(){
        return super.pathByXpath('//tbody/tr[1]/td[13]/p')
    }
    get TdTaxableAmount(){
        return super.pathByXpath('//tbody/tr[1]/td[14]/p')
    }
    get TdTotal(){
        return super.pathByXpath('//tbody/tr[1]/td[15]/p')
    }
    get ScrollTdTotal(){
        return super.pathByXpath('//span[text()="Total"][@class="MuiButtonBase-root MuiTableSortLabel-root css-dx096b"]')
    }
    get ScrollTdSubTotal(){
        return super.pathByXpath('//span[text()="Subtotal"]')
    }
    get ScrollTdTaxableamount(){
        return super.pathByXpath('//span[text()="Taxable Amount"]')
    }
    get ScrollOrderId(){
        return super.pathByXpath('//span[text()="Order Id"]')
    }


    // Get Atribute //

    get AttQuoteId(){
        return super.pathByXpath('//div[@class="MuiFormGroup-root css-1h7anqn"]/div/div[2]/following::span[2]')
    }

    get AttSubTotal(){
        return super.pathByXpath('//div[@class="MuiFormGroup-root css-1h7anqn"]/div[10]/div[2]/following::span[2]')
    }

    get AttTaxable(){
        return super.pathByXpath('//div[@class="MuiFormGroup-root css-1h7anqn"]/div[12]/div[2]/following::span[2]')
    }

    get AttTotal(){
        return super.pathByXpath('//div[@class="MuiFormGroup-root css-1h7anqn"]/div[13]/div[2]/following::span[2]')
    }


}
module.exports = new OrderFilter();

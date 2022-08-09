const Page = require("../../../PageObjects/page");

class QuoteFilter extends Page{
    get TempFilterBtn(){
        return super.pathByXpath('//button[@aria-label="filter"]')
    }
    get TempApplyBtn(){
        return super.pathById('filterApply')
    }
    get TempClearAllBtn(){
        return super.pathByXpath('//button[@aria-label="clearAll"]')
    }

        /****************** SELLERSIDE FILTER CARD ***************** */

    /****************** BUYERSIDE FILTER CARD ***************** */

    get QuoteStatus(){
        return super.pathById('checkboxes-tags-demo')
    }
    get quoteId(){
        return super.pathById('qid')
    }
    get quoteName(){
        return super.pathByXpath('//input[@id="qname"]')
    }
    get BuyerInfo(){
        return super.pathById('checkboxes-Accounts')
    }
    get startDate(){
        return super.pathByXpath('//label[text()="Start Date"]/following::input[1]')
    }
    get EndDate(){
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
    get AddFilterBtn(){
        return super.pathByXpath('//button[@aria-label="Add Tab for filters"]')
    }
    get AllFilterBtn(){
        return super.pathByXpath('//span[text()="All"]/button')
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
    get ColumnsButton(){
        return super.pathByXpath('//li[text()="Columns"]')
    }
    get CloseTheTab(){
        return super.pathByXpath('//div[@class="MuiBackdrop-root MuiBackdrop-invisible css-esi9ax"]')
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
        return super.pathByXpath('//tbody/tr[1]/td[9]/p')
    }    
    get TdTotalItems(){
        return super.pathByXpath('//tbody/tr[1]/td[10]/p')
    }
    get TdTaxableAmount(){
        return super.pathByXpath('//tbody/tr[1]/td[11]/p')
    }
    get TdTotal(){
        return super.pathByXpath('//tbody/tr[1]/td[12]/p')
    }
    get ScrollThTotal(){
        return super.pathByXpath('//span[text()="Total"]')
    } 

    get ScrollThSubTotal(){
        return super.pathByXpath('//span[text()="Subtotal"]')
    }

    get ScrollThTotalItems(){
        return super.pathByXpath('//span[text()="Total Items"]')
    }

    get ScrollThTaxableAmount(){
        return super.pathByXpath('//span[text()="Taxable Amount"]')
    }

    /// Get Attribute ///
  
    get AttQuoteId(){
        return super.pathByXpath('//div[@class="MuiFormGroup-root css-1h7anqn"]/div/div[2]/following::span[2]')
    }

    get AttSubTotal(){
        return super.pathByXpath('//div[@class="MuiFormGroup-root css-1h7anqn"]/div[7]/div[2]/following::span[2]')
    }

    get AttTaxable(){
        return super.pathByXpath('//div[@class="MuiFormGroup-root css-1h7anqn"]/div[9]/div[2]/following::span[2]')
    }

    get AttTotal(){
        return super.pathByXpath('//div[@class="MuiFormGroup-root css-1h7anqn"]/div[10]/div[2]/following::span[2]')
    }


}
module.exports = new QuoteFilter();

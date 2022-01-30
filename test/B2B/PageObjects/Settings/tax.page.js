const Page = require("../../../B2B/PageObjects/page");

class Tax extends Page{
    get CancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get SavelBtn(){
        return super.pathByXpath('//button[@aria-label="Save"]')
    }
    get Addbtn(){
        return super.pathByXpath('//button[@aria-label="add"]')
    }
    get DeletlastTax(){
        return super.pathByXpath('(//button[@aria-label="delete"])[last()]')
    }
    get DeleteFirstTax(){
        return super.pathByXpath('(//button[@aria-label="delete"])[1]')
    }
    get ErrTax_exem_prod(){
        return super.pathByXpath("//p[text()='Required']")
    }
//   Tax card
    get TaxNameTab(){
        return super.pathById("wrapped-tab-0")
    }
    get TaxName(){
        return super.pathByXpath('(//input[contains(@name,"taxName")])[last()]')
    }
    get TaxRate(){
        return super.pathByXpath('(//input[contains(@name,"rate")])[last()]')
    }
    get ErrTaxRateMax(){
        return super.pathByXpath("//p[text()='Maximum 100']")
    }

//  Tax Group Card
    get TaxGrpTab(){
        return super.pathById("wrapped-tab-1")
    }
    get EditTaxGrp(){
        return super.pathByXpath('(//div[@id="panel1a-header"])[last()]')
    }
    get TaxgrpName(){
        return super.pathByXpath('(//input[contains(@name,"taxGroupName")])[last()]')
    }
    get TaxName(){
        return super.pathByXpath('(//input[contains(@name,"taxReqLs")])[last()]')
    }
    get CompoundTax(){
        return super.pathByXpath('(//input[contains(@name,"compoundTax")])[last()]')
    }
    get DefaultTaxforgrp(){
        return super.pathByXpath('(//input[contains(@class,"MuiSwitch-input")])[last()]')
    }
    get DefaGrplabel(){
        return super.pathByXpath('//div[text()="***Field is disabled, already default assigned to a tax group"]')
    }
    get ErrTaxgrpNam(){
        return super.pathByXpath("//p[text()='Tax group name required']")
    }
    get ErrTaxNam(){
        return super.pathByXpath("//p[text()='Minimum 1 tax name required']")
    }
    get ErrCompTax(){
        return super.pathByXpath("//div[text()='No options - Compound tax can be selected only if there are 2 tax name']")
    }
//  Tax Product Tax Code Card
    get ProdTaxCodeTab(){
        return super.pathById("wrapped-tab-2")
    }
    get ProTaxCode(){
        return super.pathByXpath('(//input[contains(@name,"hsncode")])[last()]')
    }
    get ProDescrp(){
        return super.pathByXpath('(//input[contains(@name,"description")])[last()]')
    }
    get ProBtwState(){
        return super.pathByXpath('(//input[contains(@name,"interTaxGrp")])[last()]')
    }
    get ProwithinState(){
        return super.pathByXpath('(//input[contains(@name,"intraTaxGrp")])[last()]')
    }
//  Tax Excemption Card
    get TaxExcemTab(){
        return super.pathById("wrapped-tab-3")
    }
    get ExempName(){
        return super.pathByXpath('(//input[contains(@name,"taxExemptName")])[last()]')
    }
    get CustmerRadBtn(){
        return super.pathByXpath('(//input[@name="position"][@value="customer"])[last()]')
    }
    get ItemRadBtn(){
        return super.pathByXpath('(//input[@name="position"][@value="item"])[last()]')
    }
   

}
module.exports = new Tax();

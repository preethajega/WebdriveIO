const Page = require("../../../B2B/PageObjects/page");

class Terms extends Page{
    get AddBtn(){
        return super.pathById('MSETT_PT_CFBA')
    }
    // Delivery,Mode,Frieght,Insurance,Packing,Warranty terms
    get Delivery(){
        return super.pathByXpath("//div[text()='Delivery Terms']")
    }
    get Mode(){
        return super.pathByXpath("//div[text()='Mode of Dispatch']")
    }
    get Freight(){
        return super.pathByXpath("//div[text()='Freight Charges']")
    }
    get Insurance(){
        return super.pathByXpath("//div[text()='Insurance']")
    }
    get Packing(){
        return super.pathByXpath("//div[text()='Packaging & Forwarding']")
    }
    get Warranty(){
        return super.pathByXpath("//div[text()='Warranty Terms']")
    }
    get TermName(){
        return super.pathByXpath('(//input[contains(@name,"description")])[last()]')
    }
    get TermCode(){
        return super.pathByXpath('(//input[contains(@name,"deliveryTermsCode")])[last()]')
    }
    get ModeTerm(){
        return super.pathByXpath('(//input[contains(@name,"dispatchInstructionsCode")])[last()]')
    }
    get ModeTermInputfitst(){
       return super.pathByXpath('(//input[contains(@name,"termData[0].description")])[1]')
    }
    get ModeTermFirst(){
        return super.pathByXpath('(//input[contains(@name,"dispatchInstructionsCode")])[1]')
    }
    get FrightTerm(){
        return super.pathByXpath('(//input[contains(@name,"freightCode")])[last()]')
    }
    get InsuranceTerm(){
        return super.pathByXpath('(//input[contains(@name,"insuranceCode")])[last()]')
    }
    get PFTerm(){
        return super.pathByXpath('(//input[contains(@name,"packageForwardingCode")])[last()]')
    }
    get WarrantyTerm(){
        return super.pathByXpath('(//input[contains(@name,"warrantyCode")])[last()]')
    }
    get NeedApprovalFirst(){
        // return super.pathByXpath('(//span[starts-with(@class,"MuiSwitch-root ")]//span//input)[last()]')
        return super.pathByXpath('(//span[starts-with(@class,"MuiSwitch-root ")])[1]')
    }
    get NeedApproval(){
        return super.pathByXpath('(//span[starts-with(@class,"MuiSwitch-root ")])[last()]')
    }
    get Default(){
        return super.pathByXpath('(//span[@class="css-hyxlzm"])[last()]')
    }
    get DeletelastTerm(){
        return super.pathByXpath('(//button[starts-with(@id,"MSETT_PT_CDEL_")])[last()]')
    }
    get DeleteFirstTerm(){
        return super.pathByXpath('//*[@id="MSETT_PT_CDEL_0"]')
    }
    get ErrOptionsField(){
        return super.pathByXpath("//p[text()='Description required']")
    }
    get Isneeded(){
        return super.pathByXpath('(//div[contains(@class,"MuiBox-root css-1k")]/label/span[contains(@class,"MuiSwi")])[last()]')
    }
    get FreightDefault(){
        return super.pathByXpath('(//div[@class="MuiBox-root css-1p8uycm"]/label)[last()]')
    }
/* **************** INSURANCE,P&F Terms  ************************ */
    get Value(){
        return super.pathByXpath('(//input[contains(@name,"Value")])[last()]')
    }
    get Percent(){
        return super.pathByXpath('(//input[contains(@name,"Percentage")])[last()]')
    }
/* **************** Payment Terms  ************************ */
    get AddPayTermBtn(){
        return super.pathByXpath('//button[@aria-label="Add Terms"]')
    }
    get Payment(){
        return super.pathByXpath("//div[text()='Payment Terms']")
    }
    get PaymentTerm(){
        return super.pathByXpath('(//textarea[starts-with(@id,"MSETT_PT_CPT_CPT_")])[last()]')
    }
    get PaymentCode(){
        return super.pathByXpath('(//input[starts-with(@id,"MSETT_PT_CPT_CPC_")])[last()]')
    }
    get OrderStatus(){
        return super.pathByXpath('(//input[starts-with(@id,"MSETT_PT_CPT_COS_")])[last()]')
    }
    get DueDays(){
        return super.pathByXpath('(//input[starts-with(@id,"MSETT_PT_CPT_CDD_")])[last()]')
    }
    get Percentage(){
        return super.pathByXpath('(//input[starts-with(@id,"MSETT_PT_CPT_CP_")])[last()]')
    }
    get NeedAppro(){
        return super.pathByXpath('(//div[contains(@class,"MuiCardConte")]/div[2]/div[3]/div[1]/div/ul/li/div[2])[last()]')
    }
    get Paymentgateway(){
        return super.pathByXpath('(//span[starts-with(@class,"MuiSwitch-swi")])[last()]')
    }
    get B2CTerm(){
        return super.pathByXpath('(//input[starts-with(@name,"b2C")])[last()]')
    }
    get PayDefaultTerm(){
        return super.pathByXpath('(//input[starts-with(@id,"MSETT_PT_CPT_CDT_")])[last()]')
    }
    get DeleteastPayterm(){
        return super.pathByXpath('(//button[starts-with(@id,"MSETT_PT_CPT_CD_")])[last()]')
    }
    get DeleteFirstPayTerm(){
        return super.pathById('MSETT_PT_CPT_CD_0')
    }
    get Savebtn(){
        return super.pathByXpath('//button[@id="loadingButton"]')
    }
    get CancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get ErrNameField(){
        return super.pathByXpath("//p[text()='Description required']")
    }
    get Errpaycode(){
        return super.pathByXpath("//p[text()='Payment Code required']")
    }
    get Errpayorderstatus(){
        return super.pathByXpath("//p[text()='Order Status required']")
    }
    get ErrpayDays(){
        return super.pathByXpath("//p[text()='Days required']")
    }
    get ErrpayPercentage(){
        return super.pathByXpath("//p[text()='Percentage required']")
    }
    get Errpercent2(){
        return super.pathByXpath("//p[text()='Sum of percentage must be 100%']")
    }

}
module.exports = new Terms();

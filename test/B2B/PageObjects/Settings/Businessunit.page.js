const Page = require("../../../B2B/PageObjects/page");

class BU extends Page {

    get AddBtn(){
        return super.pathById('MSETT_PT_CFBA')
    }
    get savebtn(){
        return super.pathByXpath('//button[@id="loadingButton"]')
    }
    get cancelbtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get NameErrmsg(){
        return super.pathByXpath('//p[text()="Name required"]')
    }

// ************************   DIVISION & CHANNEL CARD  **************************
    
    get DivisionTab(){
        return super.pathById('wrapped-tab-0')
    }
    get ChannelTab(){
        return super.pathById('wrapped-tab-2')
    }

    get delefirstDiv_Cha(){
        return super.pathByXpath('(//button[starts-with(@id,"deleteBtn_")])[1]')
    }
    get delelastDiv_Cha(){
        return super.pathByXpath('(//button[starts-with(@id,"deleteBtn_")])[last()]')
    }
    get NameDiv_Cha(){
        return super.pathByXpath('(//div[starts-with(@class,"MuiGrid-root MuiGrid-item MuiGrid-grid-sm-5")]/div/div/input)[last()]')
    }
    get codeDiv_Cha(){
        return super.pathByXpath('(//input[starts-with(@class,"MuiOutlinedInput-i")])[last()]')
    }
    get codeErrMag(){
        return super.pathByXpath('//p[text()="Required"]')
    }

// ************************   BUSINESSUNIT CARD  **************************
    get BUTab(){
        return super.pathById('wrapped-tab-1')
    }
    get addSymbol() {
        return super.pathByXpath('//button[@aria-label="Add business unit"]')
    }
    get Name() {
        return super.pathByXpath('(//div[starts-with(@class,"MuiGrid-root MuiGrid-item MuiGrid-grid-sm-6")]/div/div/input)[last()]')
    }
    get Code(){
        return super.pathByXpath('(//input[@id="margin-none"])[last()]')
        }
    get priority(){
        return super.pathByXpath('(//input[starts-with(@id,"MSETT_PT_CD_")])[last()]')
    }
    get delefirstBU(){
        return super.pathByXpath('(//button[starts-with(@id,"MSETT_PT_CDEL_")])[1]')
    }
    get delelastBU(){
        return super.pathByXpath('(//button[starts-with(@id,"MSETT_PT_CDEL_")])[last()]')
    }
    get ProityErrMag(){
        return super.pathByXpath('//p[text()="Required"]')
    }


}
module.exports = new BU();


const Page = require("../../../B2B/PageObjects/page");

class Customer extends Page{

/* ******************** SEARCH BAR VALID PATHS *********************** */  
    get SearchBar(){
        return super.pathByXpath('//input[contains(@placeholder,"city, state & etc")]')
    }
    get SearchBarClose(){
        return super.pathByXpath('//button[@aria-label="clear"]')
    }
    get CheckTxtCity(){
        return super.pathByXpath('//td[text()="chennai"]')
    }
    get CheckTxtCusName(){
        return super.pathByXpath("(//td[text()='Apptino'])[1]")
    }
    get CheckTxtERPCode(){
        return super.pathByXpath("(//td[text()='C102780'])[1]")
    }
    get MobNOErrtext(){
        return super.pathByXpath('//p[text()="Mobile no. is not vaild"]')
    }

/* ******************** FILTER CARD *********************** */  
    get FilterBtn(){
        return super.pathByXpath('//button[@aria-label="filter"]')
    }
    get UserStatus(){
        return super.pathById('status')
    }
    get CusName(){
        return super.pathById('companyName')
    }
    get City(){
        return super.pathByXpath('//div[@class="MuiBox-root css-87igiv"][2]/div[1]//input')
    }
    get State(){
        return super.pathByXpath('//div[@class="MuiBox-root css-87igiv"][2]/div[2]//input')
    }
    get country(){
        return super.pathByXpath('//div[@class="MuiBox-root css-87igiv"][2]/div[3]//input')
    }
    get ApplyBtn(){
        return super.pathById('filterApply')
    }
    get CancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get Editbtn(){
        return super.pathByXpath('//button[@aria-label="primaryAction"]')
    }
    get ClearAll(){
        return super.pathByXpath('//button[@aria-label="clearAll"]')
    }
    get ProtalAcees(){
        return super.pathByXpath('(//div[contains(@class,"MuiListItemSecon")]//label)[2]')
    }
    get DeactivateCus(){
        return super.pathByXpath('(//div[contains(@class,"MuiListItemSecon")]//label)[1]')
    }
    get ActiveText(){
        return super.pathByXpath("(//p[text()='Active'])[1]")
    }
    get InvitedText(){
        return super.pathByXpath("(//p[text()='Invited'])[1]")
    }
    get StateTNText(){
        return super.pathByXpath("(//td[text()='Tamil Nadu'])[1]")
    }
    get ProtalAcessText(){
        return super.pathByXpath("(//p[text()='Yes'])[1]")
    }
    get DeactivateCusText(){
        return super.pathByXpath("//p[text()='Deactivated']")
    }
    


/* ******************** CREATE CUSTOMER CARD *********************** */  
    get AddCustomer(){
        return super.pathByXpath('//button[@aria-label="Create Customer"]')
    }
    get DeleCustomer(){
        return super.pathByXpath('//span[text()="Delete Customer"]')
    }
    get BranchName(){
        return super.pathByName('regAddress.branchName')
    }
    get TaxNum(){
        return super.pathByName('regAddress.gst')
    }
    get BusinessType(){
        return super.pathByXpath('//input[@name="businesstype"]')
    }
    get Currency(){
        return super.pathByXpath('//input[@name="currencyId"]')
    }
    get ErrBusinessType(){
        return super.pathByXpath('//p[text()="Business type is required"]')
    }
    get ErrCurrency(){
        return super.pathByXpath('//p[text()="Currency is required"]')
    }

/* ******************** CUSTOMER USER DETAILS CARD *********************** */  
    get Name(){
        return super.pathByName('displayName')
    }
    get MobNo(){
        return super.pathByName('regAddress.mobileNo')
    }
    get countryCode(){
        return super.pathById('country-select-demo')
    }
    get BusinessMail(){
        return super.pathByName('userEmail')
    }
    get role(){
        return super.pathByXpath('//input[@name="roleName"]')
    }
    get JobTitle(){
        return super.pathById('jobTitle')
    }
    get Depart(){
        return super.pathById('department')
    }
/* ******************** CUSTOMER  OVERVIEW CARD *********************** */  

    get EditCustOverview(){
        return super.pathByXpath('//button[@aria-label="action"]')
    }
    get CustName(){
        return super.pathByName('name')
    }
    get Website(){
        return super.pathByName('website')
    }
    get TaxId(){
        return super.pathByName('taxDetailsId.pan')
    }
    get DefCurr(){
        return super.pathByName('currencyId.currencyCode')
    }
    get BUType(){
        return super.pathByName('[name="businessTypeId.name"]')
    }
    get AccType(){
        return super.pathByName('accountTypeId.name')
    }
    get SubIndustry(){
        return super.pathByXpath('//input[@name="subIndustryId"]')
    }
    get AccOwner(){
        return super.pathByXpath('(//input[@placeholder="Search for Users"])[1]')
    }
    get SupportOwner(){
        return super.pathByXpath('(//input[@placeholder="Search for Users"])[last()]')
    }
    get CraeteUser(){
        return super.pathByXpath('//button[@aria-label="Create User"]')
    }
    get CreateAddress(){
        return super.pathByXpath('//button[@aria-label="Create Address"]')
    }
/* ******************** CUSTOMER  DETAILS PAGE *********************** */  
    get ContactTab(){
        return super.pathById('simple-tab-0')
    }
    get AddressTab(){
        return super.pathById('simple-tab-1')
    }
    get PreferenceTab(){
        return super.pathById('simple-tab-2')
    }
    get CofDeleBtn(){
        return super.pathById('yes')
    }
    get ConfCancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get uploadlogo(){
        return super.pathByXpath("//*[contains(text(),'Edit Company')]/following::input[1]")
    }

/* ******************** CONTACTS CARD *********************** */ 
    get InviteBtn(){
        return super.pathByXpath('(//tbody/tr)[last()]/td[7]/button')
    } 
    get EditLastUser(){
        return super.pathByXpath('(//tbody/tr)[last()]/td[1]')
    }
    get EditUserFirst(){
        return super.pathByXpath('(//tbody/tr)[1]/td[1]')
    }
    get UserInvite(){
        return super.pathByXpath('(//tbody/tr)[1]/td[7]/button')
    }
    get Editlastdata(){
        return super.pathByXpath('//tbody/tr[last()]')
    }
    get EditFirstData(){
        return super.pathByXpath('//tbody/tr[1]')
    }
    get Reinvite(){
        return super.pathByXpath('//ul/li[1]')
    }
    get DeleMailbtn(){
        return super.pathByXpath('//ul/li[last()]')
    }
    get MoreOption(){
        return super.pathByXpath('//button[@aria-label="moreOption"]')
    }
    get confSaveBtn(){
        return super.pathByXpath('//button[@aria-label="save"]')

    }
    get confyesBtn(){
        return super.pathByXpath('//button[@aria-label="Yes"]')

    }


/* ******************** ADDRESS CARD *********************** */  
    get DeleBranchBtn(){
        return super.pathByXpath('//button[@aria-label="secondaryAction"]')
    }
    get EditBtn(){
        return super.pathByXpath('//button[@aria-label="primaryAction"]')
    }
    get UncheckAllBtn(){
        return super.pathByXpath('//button[@aria-label="uncheck"]')
    }
    get tags(){
        return super.pathByXpath('//input[@name="tags"]')
    }
    get Zone(){
        return super.pathByXpath('//label[text()="Zone Name"]/following-sibling::div/input')
    }
    get SoldToCode(){
        return super.pathByName("addressId.soldToCode")
    }
    get VendorCode(){
        return super.pathByName('addressId.vendorID')
    }
    get BillTo(){
        return super.pathByName("addressId.billToCode")
    }
    get ShipTo(){
        return super.pathByName("addressId.shipToCode")
    }


/* ******************** PREFERENCE CARD *********************** */  
/* ******************** TERMS DEFAULT SETTINGS CARD *********************** */  
    get Delivery(){
        return super.pathByXpath('//input[@name="deliveryTermsId"]')
    }
    get Payment(){
        return super.pathByXpath('//input[@name="paymentTermsId"]')
    }
    get Warrenty(){
        return super.pathByXpath('//input[@name="warrantyId"]')
    }
    get PF(){
        return super.pathByXpath('//input[@name="pkgFwdId"]')
    }
    get Dispatch(){
        return super.pathByXpath('//input[@name="dispatchInstructionsId"]')
    }
    get Freight(){
        return super.pathByXpath('//input[@name="freightId"]')
    }
    get Insurance(){
        return super.pathByXpath('//input[@name="insuranceId"]')
    }

/* ******************** OTHER SETTINGS CARD *********************** */  
    get AccessUser(){
        return super.pathByXpath('//ul/li[1]/div[2]/span')
    }
    get Inventory(){
        return super.pathByXpath('//ul/li[2]/div[2]/span')
    }
    get GenricStock(){
        return super.pathByXpath('//ul/li[3]/div[2]/span')
    }
    get TaxExem(){
        return super.pathByXpath('//ul/li[4]/div[2]/span')
    }
    get TaxexemField(){
        return super.pathByXpath('//input[@name="companyId.taxExemptionId.id"]')
    }
/* ******************** PAGINATION CARD *********************** */ 
    get RowPerPage(){
        return super.pathByXpath('//div[@aria-haspopup="listbox"]')
    }
    get TwentyRows(){
        return super.pathByXpath('//li[@data-value="20"]')
    }
    get FityRows(){
        return super.pathByXpath('//li[@data-value="50"]')
    }
    get HundredRows(){
        return super.pathByXpath('//li[@data-value="100"]')
    }
    get PageText(){
        return super.pathByXpath('//p[contains(@class,"MuiTablePagination-d")]')
    }
    get PreviousePageBtn(){
        return super.pathByXpath('//button[@aria-label="Go to previous page"]')
    }
    get NextPageBtn(){
        return super.pathByXpath('//button[@aria-label="Go to next page"]')
    }

}

module.exports = new(Customer);
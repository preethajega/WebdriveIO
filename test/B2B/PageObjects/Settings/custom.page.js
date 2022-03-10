const Page = require("../../../B2B/PageObjects/page");

class Custom extends Page{

    get CancelBtn(){
        return super.pathByXpath('//button[@aria-label="cancel"]')
    }
    get SavelBtn(){
        return super.pathByXpath('//button[@aria-label="Save"]')
    }
    get CompTab(){
        return super.pathByXpath('//div[contains(@class,"scrollbar-container ps p")]/a[1]')
    }
    get CustomTab(){
        return super.pathByXpath('//div[contains(@class,"scrollbar-container ps p")]/a[17]')
    }
    get AddBranchbtn(){
        return super.pathByXpath('//button[@aria-label="Add Branch"]')
    }  
/*  ******************** BRANCH ******************* */
    get BranchLabel(){
        return super.pathByXpath('//span[text()="Branch Name"]/following::input[1]')
    }
    get BranchOpt(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[2]/div[2]/div/div[2]/span')
    }
    get BranchReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[2]/div[2]/div/div[3]/span')
    }
    get BranchHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[2]/div[2]/div/div[4]/span')
    }
    get BranchText(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogC")]/div[2]/label')
    }
/*  ********************** ADDRESS LINE ***************** */
    get AddressLabel(){
        return super.pathByXpath('//span[text()="Address Line"]/following::input[1]')
    }
    get AddressOpt(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[3]/div[2]/div/div[2]/span')
    }
    get AddressReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[3]/div[2]/div/div[3]/span')
    }
    get AddressHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[3]/div[2]/div/div[4]/span')
    }
    get AddressText(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogC")]/div[3]/label')
    }
/*  ********************** LOCALITY ***************** */
    get LocalityLabel(){
        return super.pathByXpath('//span[text()="Locality"]/following::input[1]')
    }
    get LocalityOpt(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[4]/div[2]/div/div[2]/span')
    }
    get LocalityReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[4]/div[2]/div/div[3]/span')
    }
    get LocalityHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[4]/div[2]/div/div[4]/span')
    }
    get LocalityText(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogC")]/div[4]/label')
    }

/*  ********************* CITY ****************** */
    get CityLabel(){
        return super.pathByXpath('//span[text()="City"]/following::input[1]')
    }
    get CityOpt(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[5]/div[2]/div/div[2]/span')
    }
    get CityReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[5]/div[2]/div/div[3]/span')
    }
    get CityHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[5]/div[2]/div/div[4]/span')
    }
    get CityText(){
        return super.pathByXpath('//div[contains(@class,"MuiBox-root css-1m")]/div[5]/label')
    }
/*  ******************** DISTRICT ******************* */
    
    get DistrLabel(){
        return super.pathByXpath('//span[text()="District"]/following::input[1]')
    }
    get DistrOpt(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[6]/div[2]/div/div[2]/span')
    }
    get DistrReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[6]/div[2]/div/div[3]/span')
    }
    get DistrHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[6]/div[2]/div/div[4]/span')
    }
    get DistrictText(){
        return super.pathByXpath('//div[contains(@class,"MuiBox-root css-1m")]/div[3]/label')
    }

/*  ********************* STATE ****************** */
    
    get StateLabel(){
        return super.pathByXpath('//span[text()="State"]/following::input[1]')
    }
    get StateOpt(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[7]/div[2]/div/div[2]/span')
    }
    get StateReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[7]/div[2]/div/div[3]/span')
    }
    get StateHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[7]/div[2]/div/div[4]/span')
    }
    get StateText(){
        return super.pathByXpath('//div[contains(@class,"MuiBox-root css-1m")]/div[2]//label')
    }
/*  ********************** PINCODE ***************** */

    get PincodeLabel(){
        return super.pathByXpath('//span[text()="Pincode"]/following::input[1]')
    }
    get PincodeOpt(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[8]/div[2]/div/div[2]/span')
    }
    get PincodeReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[8]/div[2]/div/div[3]/span')
    }
    get PincodeHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[8]/div[2]/div/div[4]/span')
    }
    get PincodeText(){
        return super.pathByXpath('//div[contains(@class,"MuiBox-root css-1m")]/div[4]/label')
    }
/*  ********************** COUNTRY ***************** */

    get CountryLabel(){
        return super.pathByXpath('//span[text()="Country"]/following::input[1]')
    }
    get CountryOpt(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[9]/div[2]/div/div[2]/span')
    }
    get CountryReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[9]/div[2]/div/div[3]/span')
    }
    get CountryHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[9]/div[2]/div/div[4]/span')
    }
    get CountryText(){
        return super.pathByXpath('//div[contains(@class,"MuiBox-root css-1m")]/div[1]//label')
    }
/*  ********************* PRIMARY CONTACT NO ****************** */

    get PrimContactNoLabel(){
        return super.pathByXpath('//span[text()="Primary contact"]/following::input[1]')
    }
    get PrimContactNoOpt(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[10]/div[2]/div/div[2]/span')
    }
    get PrimContactNoReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[10]/div[2]/div/div[3]/span')
    }
    get PrimContactNoHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[10]/div[2]/div/div[4]/span')
    }
    get PrimaryContactText(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogC")]/div[9]/div[1]/div/label')
    }
/*  ********************* CONTACT NO****************** */
    get ContactNoLabel(){
        return super.pathByXpath('//span[text()="Contact No"]/following::input[1]')
    }
    get ContactNoOpt(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[11]/div[2]/div/div[2]/span')
    }
    get ContactNoReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[11]/div[2]/div/div[3]/span')
    }
    get ContactNoHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[11]/div[2]/div/div[4]/span')
    }
    get ContactNoText(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogC")]/div[9]/div[2]/div/label')
    }

/*  ********************* TAX ****************** */
    
    get TaxLabel(){
        return super.pathByXpath('//span[text()="Tax ID / GST#"]/following::input[1]')
    }
    get TaxOpt(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[12]/div[2]/div/div[2]/span')
    }
    get TaxReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[12]/div[2]/div/div[3]/span')
    }
    get TaxHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[12]/div[2]/div/div[4]/span')
    }
    get TaxText(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogC")]/div[7]/label')
    }

}
module.exports = new Custom();

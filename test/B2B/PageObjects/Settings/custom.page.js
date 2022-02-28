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
        // return super.pathByXpath('//span[text()="Branch Name"]/following::input[2]')
    }
    get BranchReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[2]/div[2]/div/div[3]/span')
        // return super.pathByXpath('//span[text()="Branch Name"]/following::input[3]')
    }
    get BranchHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[2]/div[2]/div/div[4]/span')
        // return super.pathByXpath('//span[text()="Branch Name"]/following::input[4]')
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
        // return super.pathByXpath('//span[text()="Address Line"]/following::input[2]')
    }
    get AddressReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[3]/div[2]/div/div[3]/span')
        // return super.pathByXpath('//span[text()="Address Line"]/following::input[3]')
    }
    get AddressHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[3]/div[2]/div/div[4]/span')
        // return super.pathByXpath('//span[text()="Address Line"]/following::input[4]')
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
        // return super.pathByXpath('//span[text()="Locality"]/following::input[2]')
    }
    get LocalityReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[4]/div[2]/div/div[3]/span')
        // return super.pathByXpath('//span[text()="Locality"]/following::input[3]')
    }
    get LocalityHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[4]/div[2]/div/div[4]/span')
        // return super.pathByXpath('//span[text()="Locality"]/following::input[4]')
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
        // return super.pathByXpath('//span[text()="City"]/following::input[2]')
    }
    get CityReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[5]/div[2]/div/div[3]/span')
        // return super.pathByXpath('//span[text()="City"]/following::input[3]')
    }
    get CityHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[5]/div[2]/div/div[4]/span')
        // return super.pathByXpath('//span[text()="City"]/following::input[4]')
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
        // return super.pathByXpath('//span[text()="District"]/following::input[2]')
    }
    get DistrReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[6]/div[2]/div/div[3]/span')
        // return super.pathByXpath('//span[text()="District"]/following::input[3]')
    }
    get DistrHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[6]/div[2]/div/div[4]/span')
        // return super.pathByXpath('//span[text()="District"]/following::input[4]')
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
        // return super.pathByXpath('//span[text()="State"]/following::input[2]')
    }
    get StateReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[7]/div[2]/div/div[3]/span')
        // return super.pathByXpath('//span[text()="State"]/following::input[3]')
    }
    get StateHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[7]/div[2]/div/div[4]/span')
        // return super.pathByXpath('//span[text()="State"]/following::input[4]')
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
        // return super.pathByXpath('//span[text()="Pincode"]/following::input[2]')
    }
    get PincodeReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[8]/div[2]/div/div[3]/span')
        // return super.pathByXpath('//span[text()="Pincode"]/following::input[3]')
    }
    get PincodeHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[8]/div[2]/div/div[4]/span')
        // return super.pathByXpath('//span[text()="Pincode"]/following::input[4]')
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
        // return super.pathByXpath('//span[text()="Country"]/following::input[2]')
    }
    get CountryReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[9]/div[2]/div/div[3]/span')
        // return super.pathByXpath('//span[text()="Country"]/following::input[3]')
    }
    get CountryHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[9]/div[2]/div/div[4]/span')
        // return super.pathByXpath('//span[text()="Country"]/following::input[4]')
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
        // return super.pathByXpath('//span[text()="Primary contact"]/following::input[2]')
    }
    get PrimContactNoReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[10]/div[2]/div/div[3]/span')
        // return super.pathByXpath('//span[text()="Primary contact"]/following::input[3]')
    }
    get PrimContactNoHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[10]/div[2]/div/div[4]/span')
        // return super.pathByXpath('//span[text()="Primary contact"]/following::input[4]')
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
        // return super.pathByXpath('//span[text()="Contact No"]/following::input[2]')
    }
    get ContactNoReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[11]/div[2]/div/div[3]/span')
        // return super.pathByXpath('//span[text()="Contact No"]/following::input[3]')
    }
    get ContactNoHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[11]/div[2]/div/div[4]/span')
        // return super.pathByXpath('//span[text()="Contact No"]/following::input[4]')
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
        // return super.pathByXpath('//span[text()="Tax ID / GST#"]/following::input[2]')
    }
    get TaxReq(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[12]/div[2]/div/div[3]/span')
        // return super.pathByXpath('//span[text()="Tax ID / GST#"]/following::input[3]')
    }
    get TaxHide(){
        return super.pathByXpath('//ul[contains(@class,"MuiList-root MuiList-p")]/li[12]/div[2]/div/div[4]/span')
        // return super.pathByXpath('//span[text()="Tax ID / GST#"]/following::input[4]')
    }
    get TaxText(){
        return super.pathByXpath('//div[contains(@class,"MuiDialogC")]/div[7]/label')
    }

}
module.exports = new Custom();

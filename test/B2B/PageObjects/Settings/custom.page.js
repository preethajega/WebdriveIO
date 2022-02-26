const Page = require("../../../B2B/PageObjects/page");

class Custom extends Page{
    get BranchLabel(){
        return super.pathByXpath('//span[text()="Branch Name"]/following::input[1]')
    }
    get BranchReq(){
        return super.pathByXpath('//span[text()="Branch Name"]/following::input[2]')
    }
    get BranchOpt(){
        return super.pathByXpath('//span[text()="Branch Name"]/following::input[3]')
    }
    get BranchHide(){
        return super.pathByXpath('//span[text()="Branch Name"]/following::input[4]')
    }
    get AddressLabel(){
        return super.pathByXpath('//span[text()="Address Line"]/following::input[1]')
    }
    get AddressReq(){
        return super.pathByXpath('//span[text()="Address Line"]/following::input[2]')
    }
    get AddressOpt(){
        return super.pathByXpath('//span[text()="Address Line"]/following::input[3]')
    }
    get AddressHide(){
        return super.pathByXpath('//span[text()="Address Line"]/following::input[4]')
    }
    get LocalityLabel(){
        return super.pathByXpath('//span[text()="Locality"]/following::input[1]')
    }
    get LocalityReq(){
        return super.pathByXpath('//span[text()="Locality"]/following::input[2]')
    }
    get LocalityOpt(){
        return super.pathByXpath('//span[text()="Locality"]/following::input[3]')
    }
    get LocalityHide(){
        return super.pathByXpath('//span[text()="Locality"]/following::input[4]')
    }
    get CityLabel(){
        return super.pathByXpath('//span[text()="City"]/following::input[1]')
    }
    get CityReq(){
        return super.pathByXpath('//span[text()="City"]/following::input[2]')
    }
    get CityOpt(){
        return super.pathByXpath('//span[text()="City"]/following::input[3]')
    }
    get CityHide(){
        return super.pathByXpath('//span[text()="City"]/following::input[4]')
    }
    get DistrLabel(){
        return super.pathByXpath('//span[text()="District"]/following::input[1]')
    }
    get DistrReq(){
        return super.pathByXpath('//span[text()="District"]/following::input[2]')
    }
    get DistrOpt(){
        return super.pathByXpath('//span[text()="District"]/following::input[3]')
    }
    get DistrHide(){
        return super.pathByXpath('//span[text()="District"]/following::input[4]')
    }
    get StateLabel(){
        return super.pathByXpath('//span[text()="State"]/following::input[1]')
    }
    get StateReq(){
        return super.pathByXpath('//span[text()="State"]/following::input[2]')
    }
    get StateOpt(){
        return super.pathByXpath('//span[text()="State"]/following::input[3]')
    }
    get StateHide(){
        return super.pathByXpath('//span[text()="State"]/following::input[4]')
    }
    get PincodeLabel(){
        return super.pathByXpath('//span[text()="Pincode"]/following::input[1]')
    }
    get PincodeReq(){
        return super.pathByXpath('//span[text()="Pincode"]/following::input[2]')
    }
    get PincodeOpt(){
        return super.pathByXpath('//span[text()="Pincode"]/following::input[3]')
    }
    get PincodeHide(){
        return super.pathByXpath('//span[text()="Pincode"]/following::input[4]')
    }
    get CountryLabel(){
        return super.pathByXpath('//span[text()="Country"]/following::input[1]')
    }
    get CountryReq(){
        return super.pathByXpath('//span[text()="Country"]/following::input[2]')
    }
    get CountryOpt(){
        return super.pathByXpath('//span[text()="Country"]/following::input[3]')
    }
    get CountryHide(){
        return super.pathByXpath('//span[text()="Country"]/following::input[4]')
    }
    get PrimContactNoLabel(){
        return super.pathByXpath('//span[text()="Primary contact"]/following::input[1]')
    }
    get PrimContactNoReq(){
        return super.pathByXpath('//span[text()="Primary contact"]/following::input[2]')
    }
    get PrimContactNoOpt(){
        return super.pathByXpath('//span[text()="Primary contact"]/following::input[3]')
    }
    get PrimContactNoHide(){
        return super.pathByXpath('//span[text()="Primary contact"]/following::input[4]')
    }
    get ContactNoLabel(){
        return super.pathByXpath('//span[text()="Contact No"]/following::input[1]')
    }
    get ContactNoReq(){
        return super.pathByXpath('//span[text()="Contact No"]/following::input[2]')
    }
    get ContactNoOpt(){
        return super.pathByXpath('//span[text()="Contact No"]/following::input[3]')
    }
    get ContactNoHide(){
        return super.pathByXpath('//span[text()="Contact No"]/following::input[4]')
    }
    get TaxLabel(){
        return super.pathByXpath('//span[text()="Tax ID / GST#"]/following::input[1]')
    }
    get TaxReq(){
        return super.pathByXpath('//span[text()="Tax ID / GST#"]/following::input[2]')
    }
    get TaxOpt(){
        return super.pathByXpath('//span[text()="Tax ID / GST#"]/following::input[3]')
    }
    get TaxHide(){
        return super.pathByXpath('//span[text()="Tax ID / GST#"]/following::input[4]')
    }

}
module.exports = new Custom();

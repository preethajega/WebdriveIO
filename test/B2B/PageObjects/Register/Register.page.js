// import Page from "./page";
const Page = require("../../../B2B/PageObjects/page");

 class Register extends Page {
  
  
  get SignUpBtn() 
  { 
    return $("//div[2]/div/button") 
  }
  
  get ContactName() {
    return super.pathByName('displayName'); 
  }
  get primaryNameReq(){
    return super.pathByXpath('//p[text()="Primary contact name required"]'); 
  }  
   get emailId() { 
    return super.pathByName('userEmail'); 
  }
  get mailExisits() { 
    return super.pathByXpath('//p[text()="Email already exists"]'); 
  }
  get invaildMail() { 
    return super.pathByXpath('//p[text()="Invalid email"]');
  }
  get emailReq() {
    return super.pathByXpath('//p[text()="Email required"]');
   }
  get tax() { 
    return super.pathByName('regAddress.gst'); 
  }
  get taxReq() {
    return super.pathByXpath('//p[text()="GST required"]');
 }
 get companyName(){
  return super.pathByName('companyName'); 
 } 
 get companyNameReq(){
  return super.pathByXpath('//p[text()="Company name required"]'); 
 } 
 get addressLine(){
  return super.pathByName('regAddress.addressLine'); 
 } 
 get addressLineReq(){
  return super.pathByXpath('//p[text()="Address required"]'); 
 }
 get locality(){
  return super.pathByName('regAddress.locality'); 
 } 
 get localityReq(){
  return super.pathByXpath('//p[text()="Locality is required"]'); 
 }
 get country(){
  return super.pathByName('regAddress.country'); 
 } 
 get countryReq(){
  return super.pathByXpath('//p[text()="Country required"]'); 
 }
 get state(){
  return super.pathByName('regAddress.state'); 
 } 
 get stateReq(){
  return super.pathByXpath('//p[text()="State required"]'); 
 }
 get district(){
  return super.pathByName('regAddress.district'); 
 } 
 get districtReq(){
  return super.pathByXpath('//p[text()="District required"]'); 
 }
 get pincode(){
  return super.pathByName('regAddress.pinCodeId'); 
 } 
 get pincodeReq(){
  return super.pathByXpath('//p[text()="Pincode required"]'); 
 }
 get city(){
  return super.pathByName('regAddress.city'); 
 } 
 get cityReq(){
  return super.pathByXpath('//p[text()="City required"]'); 
 }
get regButton() {
    return super.pathByXpath('//button[@id="loadingButton"]');
}
get Required(){
  return super.pathByXpath('//p[contains(text(),"required")]'); 
}
get sucess(){
  return super.pathByXpath('//h6[text()=" Successfully Registered"]');
}
}

module.exports = new (Register);
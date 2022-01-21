const Page = require("../../PageObjects/page");

class Summary extends Page {
  // common methods for path
  open() {
    super.open(); //this will append `login` to the baseUrl to form complete URL
  }
/* BusinessUnit & approval details */
  get businessUnit() {
    return  super.pathById('BusinessUnits-outlined');
  }

  get quoteOwners() {
    return  super.pathById('quote-owners-select');
  }

  get selectedOwners() {
    return super.pathByXpath('(//div[@role="button"][last()])');
  }

  get approvalGroup() {
    return  super.pathById('ApprovalGroup');
  }

  get currencyFactor() {
    return  super.pathById('currencyDashboard');
  }


























get cartCreateQuoteBtn() {
  return  super.pathByXpath('//div[4]/button');
}

get cartCreateOrderBtn() {
  return  super.pathById('MBRW_PC_CCQ');
}


get RequireDate() {
  return  super.pathByName('customerRequiredDate');
}

get nextmonth() {
return  super.pathByXpath('/html/body/div[6]/div[3]/div/div[2]/div[1]/div[1]/button[2]');
}

get Date() {
return  super.pathByXpath('/html/body/div[6]/div[3]/div/div[2]/div[2]/div/div[4]/div[4]/button');
}


get summarySellerCreateQuoteBtn() {
  return  super.pathById('loadingButton');
}

get summaryBuyerCreateQuoteBtn() {
  return  super.pathByXpath('//div[2]/header/div/button[1]');
}

get summaryCreateOrderBtn() {
  return  super.pathById('MBRW_PS_CCO');
}

get summaryRequestApprovalBtn(){
  return  super.pathByXpath('//*[@id="root"]/div[2]/header/div/button[2]');
}
// empty cart enquiry elements paths




// need to  check till here

get newSubTotalBtn(){
  return  super.pathByXpath('//div[2]/div/div[1]/div[2]/div/div/input');
}

get subtotalValue(){
  return  super.pathByXpath('//div/div[2]/div[2]/h6');
}

get currencyValue(){
  return super.pathByXpath('//div[2]/div/div[1]/div[2]/div/div/div/p');
}

get applyBtnSubTotal(){
  return super.pathByXpath('//div/div[2]/div/div[1]/div[3]/button[2]')
}

get totalValues() {
  return $$('//div[2]/div/div[4]/div[2]/h5');
}

get addcustomPtd() {
  return  super.pathById('MBRW_PCE_CACP');
}

get emptyCartSearch() {
  return  super.pathById('MBRW_PCE_CAMP_CSP');
}

get Qnty(){
  return super.pathById('MBRW_PQS_CP_CQ')
}






get leadTime(){
  return super.pathById('MBRW_PQS_CP_CLT')
}
get tax(){
  return super.pathById('MBRW_PQS_CP_CT')
}

// seller info
get sellerInfoChange(){
  return super.pathById('MBRW_PQS_CSI_CC')
}

get radioBtnSellerAddress(){
  return super.pathById('MBRW_PQS_CSI_CC_CA')
}

get saveBtn(){
  return super.pathById('MBRW_PQS_CSI_CC_CS')
}

get buyerInfoShippingAddress(){
  return super.pathById('MBRW_PQS_CBSA_CC')
}

get buyerInfoBillingAddress(){
  return super.pathById('MBRW_PQS_CBBA_CC')
}

get deliveryTerms(){
  return super.pathById('MBRW_PQS_COI_CDT')
}
get paymentTerms(){
  return super.pathById('MBRW_PQS_COI_CPT')
}

get warranty(){
  return super.pathById('MBRW_PQS_COI_CW')
}

get packagingForwarding(){
  return super.pathById('MBRW_PQS_COI_CPF')
}
get dispatchInstructions(){
  return super.pathById('MBRW_PQS_COI_CDI')
}
get freight(){
  return super.pathById('MBRW_PQS_COI_CF')
}
get insurance(){
  return super.pathById('MBRW_PQS_COI_CI')
}

get additionalTerms(){
  return super.pathById('MBRW_PQS_COI_CAT')
}

get dateCustInfo(){
  return super.pathById('MBRW_PQS_CCI_CD')
}
// by default select the last date in the first row 
get selectDate(){
  return super.pathByXpath("(//div[@class='MuiPickersCalendar-week'])[1]/div[7]/button")
}

get customerRefInfo(){
  return super.pathByName('Reference')
}

get companyNameInfo(){
  return super.pathByName('sprDetails.companyName')
}

get projectNameInfo(){
  return super.pathByName('sprDetails.projectName')
}
get competitorsInfo(){
  return super.pathById('sprDetails.competitorNames')
}
get priceJustificationInfo(){
  return super.pathById('priceJustification')
}
}

module.exports = new Summary();

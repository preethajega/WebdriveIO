const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const customerip = require("../../Inputs/Customers/customerIP");
const path = require("../../PageObjects/Customers/customer.page");
const custompath = require("../../PageObjects/Settings/customization.page");
const branchpath = require("../../PageObjects/Settings/AddBranch.page");
const Branchip= require("../../Inputs/settings/BranchIP");
const teampath = require("../../PageObjects/Settings/Team.page");
const teamip = require("../../Inputs/settings/TeamIP");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class customer extends Page {

    async open() {
        super.open(customerip.customUrl); 
    }
    AddCustomer = async(sercompnamepath,secrchip,BranchPath,Branchip,taxpath,taxip,butypePath,buTypeIp,currpath,currIp)=>{
        await actionWrapper.Click(path.AddCustomer)
        await actionWrapper.clickSetvalueAndSelectoption(sercompnamepath,secrchip)
        await actionWrapper.clickAndSetvalue(BranchPath,Branchip)
        await actionWrapper.clickAndSetvalue(taxpath,taxip)
        await actionWrapper.clickSetvalueAndSelectoption(butypePath,buTypeIp)
        await actionWrapper.clickSetvalueAndSelectoption(currpath,currIp)

    }
    AddCustDetail = async(namepath,nameip,mobileNopath,mobilenoaIp,bUmailpath,bUPath,
        rolePath,roleIp,jobTitPath,JobTitIp,DepartPath,DepartIp)=>{
        await actionWrapper.clickAndSetvalue(namepath,nameip)
        await actionWrapper.clickAndSetvalue(mobileNopath,mobilenoaIp)
        await actionWrapper.clickAndSetvalue(bUmailpath,bUPath)
        await actionWrapper.clickSetvalueAndSelectoption(rolePath,roleIp)
        await actionWrapper.clickAndSetvalue(jobTitPath,JobTitIp)
        await actionWrapper.clickAndSetvalue(DepartPath,DepartIp)
    }
    snakbar = async(btn,snakpath,snakip)=>{
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(snakpath,snakip)
        await browser.pause(2000)
    }
    FilterSetValue = async(valpath,valIp,Btn)=>{
        await actionWrapper.Click(path.FilterBtn)
        await actionWrapper.clickAndSetvalue(valpath,valIp)
        await actionWrapper.Click(Btn)
    }
    FilterDropDown = async(valpath,valIp,Btn)=>{
        await actionWrapper.Click(path.FilterBtn)
        await actionWrapper.clickSetvalueAndSelectoption(valpath,valIp)
        await actionWrapper.Click(Btn)
    }
    AddBranchMaual = async(Branch,BranchName,AddressLine1,AddressLine1IP,AddressLine2,AddressLine2IP,Region,Regionip,
        State,Provicence,Distric,DistrictIp,Zipcode,ZipcodeIp,City,cityIP,Lattitude,LattitudeIp,Longitude,LongitudeIp,ABNnumber,ABNnumberIp,
        ContactName,ContactNameIp,PhoneNumber,PhoneNumberIp)=>{
        await actionWrapper.Click(path.CreateAddress)
        await actionWrapper.clickAndSetvalue(Branch,BranchName)
        await actionWrapper.clickAndSetvalue(AddressLine1,AddressLine1IP)
        await actionWrapper.clickAndSetvalue(AddressLine2,AddressLine2IP)
        await actionWrapper.clickSetvalueAndSelectSecondOption(Region,Regionip)
        await actionWrapper.clickSetvalueAndSelectoption(State,Provicence)
        await actionWrapper.clickSetvalueAndSelectoption(Distric,DistrictIp)
        await actionWrapper.clickAndSetvalue(Zipcode,ZipcodeIp)
        await actionWrapper.clickAndSetvalue(City,cityIP)
        await actionWrapper.clickAndSetvalue(Lattitude,LattitudeIp)
        await actionWrapper.clickAndSetvalue(Longitude,LongitudeIp)
        /*await actionWrapper.Click(path.Billing)
        await actionWrapper.Click(path.Shipping)*/
        await actionWrapper.clickAndSetvalue(ABNnumber,ABNnumberIp)
        await actionWrapper.clickAndSetvalue(ContactName,ContactNameIp)
        await actionWrapper.clickAndSetvalue(PhoneNumber,PhoneNumberIp)   
    }
    AddBranchAutoFill= async(SearchCompname,SearchCompnameIp,Branch,BranchName,ABNnumber,ABNnumberIp,ContactName,ContactNameIp,PhoneNumber,PhoneNumberIp)=>{
        await actionWrapper.Click(path.CreateAddress)
        await actionWrapper.clickSetvalueAndSelectoption(SearchCompname,SearchCompnameIp)
        await actionWrapper.clickAndSetvalue(Branch,BranchName)
        await actionWrapper.clickAndSetvalue(ABNnumber,ABNnumberIp)
        await actionWrapper.clickAndSetvalue(ContactName,ContactNameIp)
        await actionWrapper.clickAndSetvalue(PhoneNumber,PhoneNumberIp)   
    }
    AddUser = async(Name,name,MobileNo,phNum,elepath,eleip,JobTitle,jobtitle,Department,depart,Role,role)=>{
        await actionWrapper.Click(path.CraeteUser)
        await actionWrapper.clickAndSetvalue(Name,name)
        await actionWrapper.clickAndSetvalue(MobileNo,phNum)
        await actionWrapper.clickAndSetvalue(elepath,eleip)
        await actionWrapper.clickAndSetvalue(JobTitle,jobtitle)
        await actionWrapper.clickAndSetvalue(Department,depart)
        await actionWrapper.clickSetvalueAndSelectSecondOption(Role,role)
    }
    DeleBranch = async(deledata)=>{
        await actionWrapper.Click(deledata)
        await actionWrapper.Click(path.DeleBranchBtn)
    }
    Edit_DeleUser = async(deletdata,btn)=>{
        await actionWrapper.Click(deletdata)
        await actionWrapper.Click(path.MoreOption)
        await actionWrapper.Click(btn)
    }
    DeleCus= async()=>{
        await actionWrapper.Click(teampath.MoreOptionbtn)
        await actionWrapper.Click(path.DeleMailbtn)
    }
    EditPreference = async(EditPaths,EditPath,editIp)=>{
        await actionWrapper.clearValues(EditPaths)
        await actionWrapper.clickSetvalueAndSelectoption(EditPath,editIp)
    }
    OtherSettings = async()=>{
        await actionWrapper.Click(path.AccessUser)
        await actionWrapper.Click(path.Inventory)
        await actionWrapper.Click(path.GenricStock)
    }
    TaxExemp = async(excemPath,exemIp)=>{
        await actionWrapper.Click(path.TaxExem)
        await actionWrapper.clickSetvalueAndSelectoption(excemPath,exemIp)
    }
    MandatoryFieldvalid = async(elepath,eleip) => {
        await actionWrapper.Click(path.CraeteUser)
        await actionWrapper.clickAndSetvalue(teampath.MobileNo,teamip.phNum)
        await actionWrapper.Click(branchpath.SaveBtn)
        await actionWrapper.snackBarValidate(elepath,eleip)
        await actionWrapper.Click(path.CancelBtn)
    }
    CusMandatoryValid = async(snakpath,snakip)=>{
        await actionWrapper.Click(path.AddCustomer)
        await actionWrapper.Click(branchpath.SaveBtn)
        await actionWrapper.snackBarValidate(snakpath,snakip)
        await actionWrapper.Click(path.CancelBtn)
    }
    ClearFilter= async()=>{
        await actionWrapper.Click(path.FilterBtn)
        await actionWrapper.Click(path.ClearAll)
        await actionWrapper.Click(path.ApplyBtn)
    }
    EditFieldCompOverView = async(Elepath,EleIp)=>{
        await actionWrapper.Click(path.EditCustOverview)
        await actionWrapper.clearAndsetValue(Elepath,EleIp)
    }
    EditDropDownCompOverView = async(Clpath,Ele2Path,Ele2Ip)=>{
        await actionWrapper.Click(path.EditCustOverview)
        await actionWrapper.clearValues(Clpath)
        await actionWrapper.clickSetvalueAndSelectSecondOption(Ele2Path,Ele2Ip)
    }
    PageInationValid = async(perPagePath,elem,eleIp)=>{
        await actionWrapper.Click(path.RowPerPage)
        await actionWrapper.Click(perPagePath)
        if(await elem.getText() === eleIp) {
            return true
          }
    }
    labelCheck = async(btn,textpath,textip)=>{
        await browser.pause(1000)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(textpath,textip)
        await actionWrapper.Click(teampath.CancelBtn)
        await browser.pause(2000)
    }
    clearLabel= async(clearPath)=>{
        await actionWrapper.clearValues(clearPath)
        await actionWrapper.Click(teampath.Savebtn)
        await browser.pause(2000)
    }
    

}
module.exports = new customer();
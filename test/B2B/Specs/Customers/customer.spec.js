const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
var customerip = require("../../Inputs/Customers/customerIP");
const customer_fn = require("../../CommonFunctions/Customers/customer")
const customer_path = require("../../PageObjects/Customers/customer.page");
const custom_fn = require("../../CommonFunctions/settings/custom")
const custom_path = require("../../PageObjects/Settings/custom.page");
var customip = require("../../Inputs/settings/customIP");
const branchpath = require("../../PageObjects/Settings/AddBranch.page");
const Branchip= require("../../Inputs/settings/BranchIP");
const teampath = require("../../PageObjects/Settings/Team.page");
const teamip = require("../../Inputs/settings/TeamIP");
const common = require("../../PageObjects/Common/commonObjects");
const Comp_fn = require("../../CommonFunctions/settings/ComP");
const Comp_path = require("../../PageObjects/Settings/company.page");



describe('Customer page', () => {
    it("Should allow to access login into Customer Page ", async () => {
        await LoginPage.open();
        await LoginPage.login(B2B_loginIp.OwnerEmail, B2B_loginIp.OwnerPassword);
        await actionsWrappers.urlValidation("/dashboard");
        await customer_fn.open();
        await actionsWrappers.urlValidation("/accounts/landing");
    });
    it('should create user without Default user with Cancel',async () => {
        await customer_fn.AddCustomer(branchpath.SearchCompname,Branchip.searchcompname1,customer_path.BranchName,Branchip.BranchName,
            customer_path.TaxNum,customerip.TaxId,customer_path.BusinessType,customerip.BuType,customer_path.Currency,customerip.Curr)
            await browser.pause(2000)
            await customer_fn.snakbar(branchpath.CancelBtn,common.snackbar,customerip.cusSaveAlert)                    
    });
    it('should create user without Default user with save',async () => {
        await customer_fn.AddCustomer(branchpath.SearchCompname,Branchip.searchcompname1,customer_path.BranchName,Branchip.BranchName,
            customer_path.TaxNum,customerip.TaxId,customer_path.BusinessType,customerip.BuType,customer_path.Currency,customerip.Curr)
            await browser.pause(2000)
            await customer_fn.snakbar(branchpath.SaveBtn,common.snackbar,customerip.cusSaveAlert)                    
    });
    it('should filter the Customer using City',async () => {
        await browser.pause(2000)
        await customer_fn.FilterSetValue(customer_path.City,customerip.city1,customer_path.ApplyBtn)
    });
    it('should delete a created Customer with confirm cancel',async () => {
        await actionsWrappers.Click(customer_path.EditFirstData)
        await customer_fn.DeleCus()
        await customer_fn.snakbar(branchpath.ConformCancelBtn,common.snackbar,customerip.cusDeleAlert)                    
    });
    it('should delete a created Customer with confirm Delete',async () => {
        await customer_fn.DeleCus()
        await customer_fn.snakbar(branchpath.ConformDeleteBtn,common.snackbar,customerip.cusDeleAlert)                    
    });
    it('should remove the Appliyed Filter',async () => {
        await browser.pause(1000)
        await customer_fn.ClearFilter()
    });
    it('should validate a BusinessType Field in Create Customer Card',async () => {
        await customer_fn.CusMandatoryValid(customer_path.ErrBusinessType,customerip.errBusinessType)
    });
    it('should validate a Currency Field in Create Customer Card',async () => {
        await customer_fn.CusMandatoryValid(customer_path.ErrCurrency,customerip.errCurrency)
    });
    it('should change the custom Settings mode Optional into Required',async () => {
        await custom_fn.open();
        await custom_fn.Status(custom_path.BranchReq, custom_path.AddressReq, custom_path.LocalityReq, custom_path.CityReq, custom_path.DistrReq, custom_path.StateReq,
            custom_path.PincodeReq, custom_path.CountryReq, custom_path.PrimContactNoReq, custom_path.ContactNoReq, custom_path.TaxReq)
        await custom_fn.snakBarValid(custom_path.SavelBtn)
        await customer_fn.open();
    });
    it('should validate a Branch Name field',async () => {
        await browser.pause(1000)
        await customer_fn.CusMandatoryValid(branchpath.errBranchName,Branchip.errmsgBranchName)
    });
    it('should validate a Address field',async () => {
        await customer_fn.CusMandatoryValid(branchpath.errAddress,Branchip.errmsgAddress)
    });
    it('should validate a Locality field',async () => {
        await customer_fn.CusMandatoryValid(branchpath.errLocality,Branchip.errmsgLocality)
    });
    it('should validate a Country field',async () => {
        await customer_fn.CusMandatoryValid(branchpath.errCountry,Branchip.errmsgCountry)
    });
    it('should validate a State field',async () => {
        await customer_fn.CusMandatoryValid(branchpath.errState,Branchip.errmsgState)
    });
    it('should validate a District field',async () => {
        await customer_fn.CusMandatoryValid(branchpath.errDistrict,Branchip.errmsgDistrict)
    });
    it('should validate a Pincode field',async () => {
        await customer_fn.CusMandatoryValid(branchpath.errPincode,Branchip.errmsgPinCode)
    });
    it('should validate a City field',async () => {
        await customer_fn.CusMandatoryValid(branchpath.errCity,Branchip.errmsgCity)
    });
    it('should validate a Tax field',async () => {
        await customer_fn.CusMandatoryValid(branchpath.errTax,Branchip.errmsgTax)
    });
    it('should validate a Contact Name field',async () => {
        await customer_fn.CusMandatoryValid(branchpath.errContactNam,Branchip.errmsgContactName)
    });
    it('should validate a Contact Number field',async () => {
        await customer_fn.CusMandatoryValid(branchpath.errContactNumb,Branchip.errmsgContactNumb)
    });
    it('should change the Customization mode into Optional',async () => {
        await custom_fn.open();
        await custom_fn.Status(custom_path.BranchOpt, custom_path.AddressOpt, custom_path.LocalityOpt, custom_path.CityOpt, custom_path.DistrOpt, custom_path.StateOpt,
            custom_path.PincodeOpt, custom_path.CountryOpt, custom_path.PrimContactNoOpt, custom_path.ContactNoOpt, custom_path.TaxOpt)
         await custom_fn.snakBarValid(custom_path.SavelBtn) 
         await customer_fn.open();
    });
   it('should change the Branch Label Text with save', async () => {
      await custom_fn.open();
      await actionsWrappers.clickAndSetvalue(custom_path.BranchLabel, customip.branch)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await customer_fn.open();
      await customer_fn.labelCheck(customer_path.AddCustomer,custom_path.BranchText,customip.branchText)
      await custom_fn.open();
      await customer_fn.clearLabel(custom_path.BranchLabel)
    });
   it('should change the Address Line Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.AddressLabel, customip.address)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await customer_fn.open();
      await customer_fn.labelCheck(customer_path.AddCustomer,custom_path.AddressText, customip.addressText)
      await custom_fn.open();
      await customer_fn.clearLabel(custom_path.AddressLabel)

    });
   it('should change the Locality Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.LocalityLabel, customip.locality)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await customer_fn.open();
      await customer_fn.labelCheck(customer_path.AddCustomer,custom_path.LocalityText, customip.localityText)
      await custom_fn.open();
      await customer_fn.clearLabel(custom_path.LocalityLabel)

    });
   it('should change the city Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.CityLabel, customip.city)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await customer_fn.open();
      await customer_fn.labelCheck(customer_path.AddCustomer,custom_path.CityText, customip.cityText)
      await custom_fn.open();
      await customer_fn.clearLabel(custom_path.CityLabel)

    });
   it('should change the District Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.DistrLabel, customip.district)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await customer_fn.open();
      await customer_fn.labelCheck(customer_path.AddCustomer,custom_path.DistrictText, customip.districtText)
      await custom_fn.open();
      await customer_fn.clearLabel(custom_path.DistrLabel)

    });
   it('should change the State Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.StateLabel, customip.state)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await customer_fn.open();
      await customer_fn.labelCheck(customer_path.AddCustomer,custom_path.StateText, customip.stateText)
      await custom_fn.open();
      await customer_fn.clearLabel(custom_path.StateLabel)

    });
   it('should change the Pincode Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.PincodeLabel, customip.pincode)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await customer_fn.open();
      await customer_fn.labelCheck(customer_path.AddCustomer,custom_path.PincodeText, customip.pincodeText)
      await custom_fn.open();
      await customer_fn.clearLabel(custom_path.PincodeLabel)

    });
   it('should change the Country Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.CountryLabel, customip.country)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await customer_fn.open();
      await customer_fn.labelCheck(customer_path.AddCustomer,custom_path.CountryText, customip.countryText)
      await custom_fn.open();
      await customer_fn.clearLabel(custom_path.CountryLabel)

    });
   it('should change the Primary Contact Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.PrimContactNoLabel, customip.primaryContact)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await customer_fn.open();
      await customer_fn.labelCheck(customer_path.AddCustomer,custom_path.PrimaryContactText, customip.primaryContactText)
      await custom_fn.open();
      await customer_fn.clearLabel(custom_path.PrimContactNoLabel)

    });
   it('should change the Contact No Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.ContactNoLabel, customip.contactNo)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await customer_fn.open();
      await customer_fn.labelCheck(customer_path.AddCustomer,custom_path.ContactNoText, customip.contactNoText)
      await custom_fn.open();
      await customer_fn.clearLabel(custom_path.ContactNoLabel)

    });
   it('should change the Tax Label Text with save', async () => {
      await browser.pause(2000)
      await actionsWrappers.clickAndSetvalue(custom_path.TaxLabel, customip.tax)
      await custom_fn.snakBarValid(custom_path.SavelBtn)
      await customer_fn.open();
      await customer_fn.labelCheck(customer_path.AddCustomer,custom_path.TaxText, customip.taxText)
      await custom_fn.open();
      await customer_fn.clearLabel(custom_path.TaxLabel)
      await customer_fn.open();
    });

    it('should Create a New Customer with Default User and click cancel',async () => {
        await customer_fn.AddCustomer(branchpath.SearchCompname,Branchip.searchcompname,customer_path.BranchName,Branchip.BranchName,
            customer_path.TaxNum,customerip.TaxId,customer_path.BusinessType,customerip.BuType,customer_path.Currency,customerip.Curr)
        await customer_fn.AddCustDetail(customer_path.Name,customerip.Name,customer_path.MobNo,customerip.MobNo,
            customer_path.BusinessMail,customerip.mail1,customer_path.role,customerip.Role,customer_path.JobTitle,customerip.JobTitle,customer_path.Depart,customerip.Depart)
        await customer_fn.snakbar(branchpath.CancelBtn,common.snackbar,customerip.cusSaveAlert)        
    });
    it('should Create a New Customer with Default User and click save',async () => {
        await customer_fn.AddCustomer(branchpath.SearchCompname,Branchip.searchcompname,customer_path.BranchName,Branchip.BranchName,
            customer_path.TaxNum,customerip.TaxId,customer_path.BusinessType,customerip.BuType,customer_path.Currency,customerip.Curr)
        await customer_fn.AddCustDetail(customer_path.Name,customerip.Name,customer_path.MobNo,customerip.MobNo,customer_path.BusinessMail,customerip.mail1,
            customer_path.role,customerip.Role,customer_path.JobTitle,customerip.JobTitle,customer_path.Depart,customerip.Depart)
        await browser.pause(2000)
        await customer_fn.snakbar(branchpath.SaveBtn,common.snackbar,customerip.cusSaveAlert)        
    });
    
    it('should filter the Customer using City',async () => {
        await browser.pause(2000)
        await customer_fn.FilterSetValue(customer_path.City,customerip.city,customer_path.ApplyBtn)
    });
    it('should Invite the user while staying on the Landing page',async () => {
        await actionsWrappers.Click(customer_path.UserInvite)
        await actionsWrappers.snackBarValidate(common.snackbar,teamip.invitealert) 
    });
    it('should Add a Branch to the Exisiting Customer By Manualy Enter',async () => {
        await actionsWrappers.Click(customer_path.EditFirstData)
        await customer_fn.AddBranchMaual(branchpath.Branch,Branchip.BranchName,branchpath.AddressLine1,Branchip.AddressLine1,
            branchpath.AddressLine2,Branchip.AddressLine2,branchpath.Region,Branchip.Region,branchpath.State,Branchip.Provicence,branchpath.Distric,
            Branchip.District,branchpath.Zipcode,Branchip.Zipcode,branchpath.City,Branchip.city,branchpath.Lattitude,Branchip.Lattitude,branchpath.Longitude,
            Branchip.Longitude,branchpath.ABNnumber,Branchip.ABNnumber,branchpath.ContactName,Branchip.ContactName,branchpath.PhoneNumber,Branchip.PhoneNumber)
        await customer_fn.snakbar(branchpath.SaveBtn,common.snackbar,customerip.AddressSaveAlert)
    });
    it('should delete a Created Branch',async () => {
        await browser.pause(2000)
        await customer_fn.DeleBranch(customer_path.Editlastdata)
        await customer_fn.snakbar(branchpath.ConformDeleteBtn,common.snackbar,customerip.BranchDeleAlert)
    });
    it('should Add Branch to the Exisiting Cutomer by AutoFill Option',async () => {
        await customer_fn.AddBranchAutoFill(branchpath.SearchCompname,Branchip.searchcompname,branchpath.Branch,Branchip.BranchName1,branchpath.ABNnumber,Branchip.ABNnumber,
            branchpath.ContactName,Branchip.ContactName1,branchpath.PhoneNumber,Branchip.PhoneNumber1)
        await customer_fn.snakbar(branchpath.SaveBtn,common.snackbar,customerip.AddressSaveAlert)
    });
    it('should delete a Created Branch',async () => {
        await browser.pause(2000)
        await customer_fn.DeleBranch(customer_path.Editlastdata)
        await customer_fn.snakbar(branchpath.ConformDeleteBtn,common.snackbar,customerip.BranchDeleAlert)
    });
    it('should not allow a user to delete a Registerd Address of Customer',async () => {
        await customer_fn.DeleBranch(customer_path.EditFirstData)
        await customer_fn.snakbar(branchpath.ConformDeleteBtn,common.snackbar,customerip.BranchErrAlert)
        await actionsWrappers.Click(customer_path.UncheckAllBtn)
    });
    it('should Create a User to the Exisiting customer ',async () => {
        await customer_fn.AddUser(teampath.Name,teamip.name,teampath.MobileNo,teamip.phNum,teampath.Email,teamip.email,teampath.JobTitle,teamip.jobtitle,
            teampath.Department,teamip.depart,teampath.Role,customerip.Role)
        await customer_fn.snakbar(branchpath.SaveBtn,common.snackbar,customerip.UserSaveAlert)
    });
    it('should Invite a User',async () => {
        await browser.pause(3000)
        await actionsWrappers.Click(customer_path.InviteBtn)
        await actionsWrappers.snackBarValidate(common.snackbar,teamip.invitealert) 
    });
    it('should ReInvite a User',async () => {
        await browser.pause(3000)
        await customer_fn.Edit_DeleUser(customer_path.EditLastUser,customer_path.Reinvite)
        await actionsWrappers.snackBarValidate(common.snackbar,teamip.reinvitealert)  
    });
    it('should delete a created User with confirm delete in the Customer page',async () => {
        await customer_fn.Edit_DeleUser(customer_path.EditLastUser,customer_path.DeleMailbtn)
        await customer_fn.snakbar(teampath.ConfYesBtn,common.snackbar,customerip.UserDeleAlert)
    });
    it('should Edit the Preference Terms',async () => {
        await actionsWrappers.Click(customer_path.PreferenceTab)
        await customer_fn.EditPreference(customer_path.PF,customer_path.PF,customerip.pf)
        await customer_fn.snakbar(teampath.Savebtn,common.snackbar,customerip.TermsUpdateAlert)
    });
    it('should Edit Other Settings in Preference Tab',async () => {
        await customer_fn.OtherSettings()
        await customer_fn.snakbar(teampath.Savebtn,common.snackbar,customerip.TermsUpdateAlert)
    });
    it('shoud Add the Tx Exemption to the Customers',async () => {
        await customer_fn.TaxExemp(customer_path.TaxexemField,customerip.TaxExemField)
        await customer_fn.snakbar(teampath.Savebtn,common.snackbar,customerip.TermsUpdateAlert)
    });
    it('should validate a Name field', async () => {
        await browser.pause(3000)
        await customer_fn.MandatoryFieldvalid(teampath.ErrormsgName, teamip.errmdsgName)
    });
    it('should validate a Email field', async () => {
        await customer_fn.MandatoryFieldvalid(teampath.ErrormsgEmail, teamip.errmsgEmail)
    });
    it('should validate a Role field', async () => {
        await customer_fn.MandatoryFieldvalid(teampath.ErrormsgRole, teamip.errmsgRole)
    });
    it('should delete a Customer with mapped with Quote & order confirm Delete',async () => {
        await customer_fn.DeleCus()
        await customer_fn.snakbar(branchpath.ConformDeleteBtn,common.snackbar,customerip.cusDeleAlert)                    
    });
    it('should remove the Appliyed Filter',async () => {
        await browser.pause(1000)
        await customer_fn.ClearFilter()
        await actionsWrappers.Click(teampath.Closecard)
    });
    it('should filter Using a Customer Name',async () => {
        await customer_fn.FilterDropDown(customer_path.CusName,customerip.cusName1,customer_path.ApplyBtn)
    });
    it('should delete a Customer with mapped with Quote & order confirm Delete',async () => {
        await actionsWrappers.Click(customer_path.EditFirstData)
        await customer_fn.DeleCus()
        await actionsWrappers.snackBarValidate(common.snackbar,customerip.mapedCusDeleAlert)                    
    });
    it('should remove the Appliyed Filter',async () => {
        await browser.pause(1000)
        await customer_fn.ClearFilter()
        await actionsWrappers.Click(teampath.Closecard)
    });
    it('should filter Using a Customer Name',async () => {
        await browser.pause(2000)
        await customer_fn.FilterDropDown(customer_path.CusName,customerip.cusName2,customer_path.ApplyBtn)
    });
    it('should Uplaod the logo in the customer OverView Card',async () => {
        await actionsWrappers.Click(customer_path.EditFirstData)
        await actionsWrappers.Click(customer_path.EditCustOverview)
        await Comp_fn.UploadLogo(branchpath.SaveBtn)
        await actionsWrappers.snackBarValidate(common.snackbar,customerip.comUpdateAlert)
    });
    it('should Edit the Company Overview Details Name & Account Owner',async () => {
        await browser.pause(3000)
        await customer_fn.EditCompOverView(customer_path.CustName,customerip.cusName2,customer_path.AccOwner,customerip.cusName1)
        await browser.pause(3000)
        await customer_fn.snakbar(branchpath.SaveBtn,common.snackbar,customerip.comUpdateAlert)
    });
    it('should remove the Appliyed Filter',async () => {
        await browser.pause(1000)
        await customer_fn.ClearFilter()
        await browser.pause(1000)
        await actionsWrappers.Click(teampath.Closecard)
    });
    it('should change the pagination 20 Rows into 50 rows',async () => {
        await customer_fn.PageInationValid(customer_path.FityRows,customer_path.PageText,customerip.fiyText)
    });
});
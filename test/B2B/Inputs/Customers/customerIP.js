let today =  new Date().toISOString().replace(/\/|-|:|/g,'');
function Customip(){
    const path = require('path');
    this.customUrl="/accounts/landing"
    this.TaxId="TH123"
    this.BuType="Dealer"
    this.BuType1="End User"
    this.Curr="INR"
    this.Curr1="Usd"
    this.Name="sam"
    this.Name1="Ram"
    this.MobNo="852677"
    this.MobNo1="12344"
    this.mail1="testing"+today+"@gmail.com"
    this.mail2="testers@gamil.com"
    this.mail="pree@gmail.com"
    this.Role="Admin"
    this.Role1="QA Admin"
    this.JobTitle="Tester"
    this.JobTitle1="Testing Team"
    this.Depart="QA"
    this.Depart1="Quality Analysit"
    this.city="Theni"
    this.city1="Ponnagaram Colony"
    this.state="Tamil Nadu"
    this.state1="Delhi"
    this.country="Tamil Nadu"
    this.country1="Delhi"
    this.status="Active"
    this.status1="In Active"
    this.status2="Invited"
    this.status3="Invite"
    this.cusName="LS MILLS, Reg Office"
    this.cusName1="preetha"
    this.cusName4="Growmax"
    this.cusName2="Apptino"
    this.cusName3="EXCEL SOLUTIONS"
    this.supportOwner="Admin"
    this.supportOwner1="Madhan"
    this.taxId="ABN123"
    this.taxId1="ABN321"
    this.subIndustry="Auto Parts & Equipments"
    this.subIndustry1="Tires & Rubber"
    this.TwentyText="1–20 of "
    this.fityText="1–50 of "
    this.HundredText="1–100 of "
    this.TaxExemField="Dealer"
    this.tag1="south"
    this.tag="north"
    this.zone="North"
    this.zone1="TN"
    this.VendorCode="VEN123"
    this.VendorCode1="VEN321"
    this.shipToCode="SH123"
    this.shipToCode1="SH321"
    this.BillToCode="BL123"
    this.BillToCode1="BL321"
    this.SoldToCode="GST54321"
    this.SoldToCode1="GST91234"

    this.pf="10% of total value"
    this.cusSaveAlert="Account Created"
    this.AddressSaveAlert="Address saved successfully"
    this.BranchDeleAlert="Branch address deleted succesfully"
    this.cusDeleAlert="Customer deleted succesfully"
    this.UserSaveAlert="User created successfully"
    this.UserDeleAlert="User deleted successfully"
    this.TermsUpdateAlert="Account updated successfully"
    this.BranchErrAlert="Registered Address cannot be deleted"
    this.mapedCusDeleAlert="Customer has linked with quote and orders, So it cannot be deleted"
    this.mapedCusDeleAlert1="Customer has linked with quote, So it cannot be deleted"
    this.MapedDeleAlert="Delete the Contacts other than default email user, before deleting company"
    this.errBusinessType="Business type is required"
    this.errCurrency="Currency is required"
    this.comUpdateAlert="Company updated successfully"
    this.ActiveText="Active"
    this.ProtalAcessText="Yes"
}
module.exports = new Customip();

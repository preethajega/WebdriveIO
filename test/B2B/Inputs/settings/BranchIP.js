function Branchip() {
    const path = require('path');
    this.BranchUrl = "/settings/company"
    this.searchcompname = "LS MILLS, Reg "
    this.searchcompname1 = "Rani Paints "
    this.EditSearchCompname = "Theni bus stand"
    this.BranchName = "Theni"
    this.BranchName1="Madurai"
    this.EditBranchName = "THENI"
    this.AddressLine1 = "351, Madurai Main Rd"
    this.EditAddressLine1 = "351, Madurai Main Rd S"
    this.AddressLine2 = "Sidco Thoz"
    this.EditAddressLine2 = "Sidco Thoz As"
    this.Region = "India"
    this.InvalidRegion = "104"
    this.Provicence = "Tamil Nadu"
    this.InvalidProvicence = ""
    this.District = "Theni"
    this.Zipcode = "625531"
    this.city = "Theni Allinagaram"
    this.Lattitude = "10.0050499"
    this.Longitude = "77.4943426"
    this.ABNnumber = "LS123"
    this.EditABNnumber = "TH123"
    this.BillingCode = "Ls1"
    this.EditBillingCode = "TH1"
    this.ShippingCode = "Ls2"
    this.EditShippingCode = "TH2"
    this.BranchCode = "Ls3"
    this.EditBranchCode = "TH3"
    this.SalesorgCode = "Ls4"
    this.EditSalesorgCode = "TH4"
    this.ContactName = "Priya"
    this.ContactName1 = "Vishnu"

    this.EditContactName = "Prema"
    this.PhoneNumber = "9832228765"
    this.PhoneNumber1 = "9823120991"
    this.EditPhoneNumber = "8732278991"
    this.Warehouse1 = "Theni"
    this.Warehouse = "Chennai"
    this.EditWarehouse = "Trichy Branch"
    this.InvalidWarehouse = "covai12"
    this.DefaultWarehouse = "Chennai"
    this.DefaultWarehouse1 = "Theni"
    this.BusinessUnit = "FG"
    this.BusinessUnit1 = "SFG"
    this.BusinessUnit2 = "Equip"
    this.BusinessUnit3 = "spar"
    this.countrycode="+91"
    this.saveAlert = "Saved Successfully"
    this.DeleteAlert = "Branch address deleted succesfully"
    this.MapedBranchDeleteAlert = "Theni address mapped with BusinessUnit/WareHouse/Zone/User cannot be deleted"
    this.MapedDeleteAlert = "Chennai address mapped with BusinessUnit/WareHouse/Zone/User cannot be deleted"
    this.MappedDeleteMSG="Registered Address cannot be deleted"
    this.errmsgBranchName = "Branch Name required"
    this.errmsgAddress = "Address required"
    this.errmsgLocality = "Locality is required"
    this.errmsgCountry = "Country required"
    this.errmsgState = "State required"
    this.errmsgPinCode = "Pincode required"
    this.errmsgDistrict = "District required"
    this.errmsgCity = "City required"
    this.errmsgTax = "Tax ID required"
    this.errmsgContactName = "Contact Name is required"
    this.errmsgContactNumb = "Contact No is required"

// /*   **************** DEV Inputs      **************** */
//     this.branch ="";
     
}
module.exports = new Branchip();
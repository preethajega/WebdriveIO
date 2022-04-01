function Registerip(){
    const path = require('path');
    this.name ="madhan";
    this.email="madhan"+new Date().toISOString().replace(/\/|-|:|/g,'').slice(4,-7)+"@gmail.com";
    this.newMail="kumar"+new Date().toISOString().replace(/\/|-|:|/g,'').slice(4,-7)+"@gmail.com";
    this.tax="29GGGGG1314R9Z6";
    this.company="Growmax.io";
    this.address="#143, MGR Salai";
    this.locality="Kandhanchavadi";
    this.country="india";
    this.state="Tamil Nadu";
    this.city="chennai";
    this.pincode="600096";
    this.nameReq="Primary contact name required";
    this.mailReq="Email required";
    this.taxReq="GST required";
    this.companyreq="Company name required";
    this.addressReq="Address required";
    this.countryReq="Country required";
    this.stateReq="State required";
    this.DistrictReq="District required";
    this.cityReq="City required";
    this.pincodeReq="Pincode required";
    this.localityReq="Locality is required";



}

module.exports = new Registerip();
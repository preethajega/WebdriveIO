function Compip() {     
    const path = require('path');
    this.CompUrl="/settings/company"
    this.uploadimg = path.join(__dirname,'./../../../FileUtils/Growmax PWA Icon 500x500.png');
    this.compname = "aru pvt ltd"
    this.ebno ="3421"
    this.subindustry='Aerospace & Defence'
    this.acctype="buyer"
    this.website="https://www.aru.com.in"
    this.businesstype="designer"
    this.refelecttxt ="Industry Type : Manufacturers of parts and accessories for automobiles and motor"
    this.currency="Euro"
    this.saveAlert="Company details updated successfully"
    this.errorAlert=""
    this.comperrormsg="Company Name required"
    this.websiteErrormsg='website must be a url'



}
module.exports = new Compip();
function Compip() {     
    const path = require('path');
    this.CompUrl="/settings/company"
    this.uploadimg = path.join(__dirname,'./../../../FileUtils/Growmax PWA Icon 500x500.png');
    this.compname = "aru pvt ltd"
    this.compname1 = "arupvtltd"
    this.OrgComName="Growmax"
    this.OrgWebSite="https://www.apptino.com.in"
    this.orgEbno="GM321"
    this.orgSubIndustry="Distributors - Industrial"
    this.ebno ="3421"
    this.ebno1 ="342111"
    this.subindustry1='Aerospace & Defence'
    this.subindustry='Consumer Retailing'
    this.subindustry1='Automobile Manufacturers'
    this.acctype="buyer"
    this.website="https://www.aru.com.in"
    this.website1="https://www.growmax.com.in"
    this.website2="Growmax"
    this.businesstype1="designer"
    this.businesstype="consumer"
    this.refelecttxt ='Industry Type : Distributors - Industrial Trading companies and other distributors of industrial equipment and products selling to businesses only'
    this.currency="Euro"
    this.saveAlert="Company details updated successfully"
    this.errorAlert=""
    this.comperrormsg="Company Name required"
    this.websiteErrormsg='website must be a url'
    this.errMsgcompname="Company Name required"


}
module.exports = new Compip();
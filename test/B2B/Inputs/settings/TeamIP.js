let today =  new Date().toISOString().replace(/\/|-|:|/g,'');
const path = require('path');
function Teamip(){
    this.teamUrl="/settings/team/landing"
    this.name="AAAdmin"
    this.code="ECP123"
    this.code1="PS123"
    this.phNum="8667328810"
    this.emails="preetha@apptino.com"
    this.email="preetha"+today+"@gmail.com"
    this.email1="demo1"+today+"@gmail.com"
    this.email2="preeyhas"+today+"@gmail.com"
    this.email3="testers"+today+"@gmail.com"
    this.invalidmail="application"
    this.jobtitle="QA"
    this.depart="Testing"
    this.role1="user"
    this.role="store"
    this.branch1="Chennai"
    this.branch2="Coimbatore"
    this.branch3="theni"
    this.branch4="citihealth"
    this.bu1="Eq"
    this.bu2="spares"
    this.bu3="FG"
    this.bu4="Finished"
    this.bu5="Raw"
    this.tag="south"
    this.tag1="north"
    this.tag2="tamil"
    this.tag3="head"
    this.alert="Saved successfully"
    this.mailexitsAlert="Email id already exists"
    this.invalidmailAlert="Invalid email id"
    this.errcodeAlert="Code already exist"
    this.deletealert="User deleted successfully"
    this.errmdsgName="Name required"
    this.errmsgEmail="Email id required"
    this.errmsgRole="Role required"
    this.errmsgBranch="Branch required"
    this.invitealert="User invited"
    this.reinvitealert="User reinvited"
    this.activatealert="User activated"
    this.inactivealert="User inactivated"
    this.swaprolealert="Owner role swapped!! you will be redirected to login page"
}
module.exports = new Teamip();
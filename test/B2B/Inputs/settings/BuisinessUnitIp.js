function Buip() {     
    const path = require('path');
    this.BUUrl="/settings/division-bu"
    this.divName="West"
    this.divName1="southEast"
    this.divName2="NortWest"
    this.divCode="DIV22"
    this.divCode1="DIV23"
    this.divCode2="DIV24"
    this.buName="Purchased Goods"
    this.buName1="Purchased Goods 1"
    this.buName2="finished Goods "
    this.priority="10"
    this.priority3="&*$"
    this.priority2="2"
    this.priority1='5'
    this.priority4='15'
    this.buCode="BU05"
    this.buCode2="BU07"
    this.buCode4="12"
    this.buCode3="20"
    this.chanName="Regular"
    this.chaname1="Odinary"
    this.chanName2="One Time Use"
    this.chanCode="CH002"
    this.chanCode1="CH003"
    this.chanCode2="CH004"
    this.buCodeExitAlert="Code BU05 already exist"
    this.priAlredExitAlert="Priority with value 10 already exist"
    this.buNameExitAlert="Purchased Goods already exists"
    this.saveAlert="Saved successfully"
    this.errorMsg1="Name required"
    this.divMapeAlert="Division mapped with product cannot be deleted!!!"
    this.buMapAlert="Business unit mapped with Branch cannot be deleted."
    this.channelMapAlert="Channel code already exist."
    this.emptyAlert="Please fill all required fields"
    this.divNameExitAlert="Division name already exist."
    this.divCodeExitAlert="Division code already exist."
    this.errorMsg="Required"
    this.codeErrmsg="Required"
    this.channelNameExitAlert="Channel name already exist."
    this.channelCodeExitAlert="Channel code already exist."

}
module.exports= new Buip();
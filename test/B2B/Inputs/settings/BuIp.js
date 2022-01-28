function Buip() {     
    const path = require('path');
    this.BUUrl="/settings/businessunit"
    this.options="Purchased Goods"
    this.priority="10"
    this.saveAlert="Changes saved successfully"
    this.options1="Purchased Goods 1"
    this.priority1="&*$"
    this.errorMsg="Required"
    this.options2="purchese Goods 2"
    this.priority2="2"
    this.errorAlert="Priority with value 2 already exist"
    this.priority3='5'
    this.updateop='zen'
    this.updatepri='6'
    this.errorAlert1="Purchased Goods already exists"
    this.errorMsg1="Name required"
    this.mapedalert="BusinessUnit mapped with Branch cannot be deleted!!!"

}
module.exports= new Buip();
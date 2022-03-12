let today =  new Date().toISOString().replace(/\/|-|:|/g,'');
function profileip(){
    this.ProfileUrl="/settings/profile"
    this.saveAlert="Changes saved successfully"
    this.OrgProfileName="Apptino Admin"
    this.OrgMobNum="8790563540"
    this.OrgAlterMobNum="8790563541"
    this.OrgAlterEmail="admin@growmax.com"
    this.name="Growmax"
    this.name1="Apptino"
    this.Mobnum="9725661"
    this.Mobnum1="2399875"
    this.AlterMobNum="82345600"
    this.AlterMobNum1="7689933"
    this.AlterMail="Admin"+today+"@apptino.com"

/* *********** App Setup ********** */
    this.AppSaveAlert="Successfully Updated"
    this.APIUrl="/settings/api_key"
    this.errName="Name required"
    this.orgName="GrowMax"

/* *********** API ********** */
    this.copyTxt="Copied"
    this.AppSetUp="/settings/app"

    

}
module.exports = new profileip();

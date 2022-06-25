function Tagip(){
    const path = require('path');
    this.tagUrl="/settings/tags"
    this.gentag1="genTag"
    this.gentag="genAdmin"
    this.teamtag="teamtag"
    this.teamtag1="teamAdmin"
    this.cusTag="custags"
    this.cusTag1="cusAdmin"
    this.savealert="Changes saved successfully"
    this.genAlert="genadmin already exists"
    this.teamAlert="teamtag already exists"
    this.cusAlert="custags already exists"
    this.mapedGenalert="Changes saved successfully, #new already assigned with User/Account. Please remove from User/Account before deleting"
    this.mapedTeamalert="Changes saved successfully, #admin already assigned with User/Account. Please remove from User/Account before deleting"
    this.mapedCusalert="Changes saved successfully, #user already assigned with User/Account. Please remove from User/Account before deleting"

}
module.exports = new Tagip();
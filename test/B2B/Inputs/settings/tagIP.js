function Tagip(){
    const path = require('path');
    this.tagUrl="/settings/tags"
    this.teritytag="chennai"
    this.gentag="2022"
    this.savealert="Changes saved successfully"
    this.tertyalert="chennai already exists"
    this.genalert="2022 already exists"
    this.mapedtertyalert="#headoffice already asign with User/Account.Please remove from User/Account before deleting"
}
module.exports = new Tagip();
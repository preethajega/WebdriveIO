function Compip() {     
    const path = require('path');
    this.CompUrl="/settings/company"
    this.uploadimg = path.join(__dirname,'./../../../FileUtils/Growmax PWA Icon 500x500.png');

}
module.exports = new Compip();
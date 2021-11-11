function ProfileInput() { 
     const path = require('path');
     this.profileImage= path.join(__dirname,"./../../FileUtils/ProfileImage.jpg");
     this.profilepath = path.join(__dirname,"./../../FileUtils/Growmax PWA Icon 500x500.png");
     this.name="madhan";
     this.mail="smk@gmail.com";


}


module.exports = new ProfileInput();
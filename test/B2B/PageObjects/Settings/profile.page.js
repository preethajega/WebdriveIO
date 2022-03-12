const Page = require("../../../B2B/PageObjects/page");

class profile extends Page{

/*  *********************** Welcome card ******************** */
    get logoupload(){
        return super.pathByXpath('//input[@id="appIconUpload"]')
    }
    get LogoUplaodProfile(){
        return super.pathByXpath('//div[@class="MuiBox-root css-1bml4dd"]/input')
        // return super.pathByXpath('//input[@accept=".jpg, .jpeg, .png"]')
    }
    get Name(){
        return super.pathByName('ProfileData.displayName')
    }
    get MobNum(){
        return super.pathByName("ProfileData.phoneNumber")
    }
    get AlterMobNum(){
        return super.pathByName('ProfileData.secondaryPhoneNumber')
    }
    get AlterEmail(){
        return super.pathByName("ProfileData.secondaryEmail")
    }
/*  *********************** Change Password card ******************** */
get OldPwd(){
        return super.pathByName("ChangePassword.OldPassword")
    }
    get ErrOldPwd(){
        return super.pathByXpath('//p[text()="Old password required"]')
    }
    get NewPwd(){
        return super.pathByName("ChangePassword.NewPassword")
    }
    get ErrNewPwd(){
        return super.pathByXpath('//p[text()="New Password required"]')
    }
    get ConfirmPwd(){
        return super.pathByName("ChangePassword.ConfirmPassword")
    }
    get ErrConfirmPwd(){
        return super.pathByXpath('//p[text()="Confirm password required"]')
    }
/* ************************ Preferences card ******************** */
    get TimeZone(){
        return super.pathByXpath('//input[@name="PrefrenceData.timeZone"]')
    }
    get DateDisply(){
        return super.pathByXpath('//input[@name="dateFormat"]')
    }
    get TimeDisply(){
        return super.pathByXpath('//input[@name="timeFormat"]')
    }

/* ************************  API Setting page ******************** */
    get Copy(){
        return super.pathById('copy')
    }
    get ApiField(){
        return super.pathById('apiKey')
    }
    get ErrName(){
        return super.pathByXpath('//p[text()="Name required"]')
    }

}
module.exports =new profile();
const Page = require('./page');
const ActionsWrappers = require('../../CommonActions/ActionsWrappers');

class LoginPage extends Page {
    get logouticon(){
        return super.pathById('userIcon')
    }
    get logoutBtn(){
        return super.pathByXpath('//button[text()="Logout"]')
    }
    get loggedMailName(){
        return super.pathByXpath('//div[@class="MuiBox-root css-1y19tqg"]/p[1]')
    }
    logout= async(logouticon,logoutBtn,snakbarPath,snakbarIp)=>{
        await ActionsWrappers.Click(logouticon)
        await ActionsWrappers.Click(logoutBtn)
        await ActionsWrappers.snackBarValidate(snakbarPath,snakbarIp)
    }
}
module.exports = new LoginPage();

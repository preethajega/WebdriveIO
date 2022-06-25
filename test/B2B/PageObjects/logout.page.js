const Page = require('./page');
const ActionsWrappers = require('../../CommonActions/ActionsWrappers');

class LoginPage extends Page {
    get logouticon(){
        return super.pathById('userIcon')
    }
    get logoutBtn(){
        return super.pathByXpath('//button[text()="Logout"]')
    }
    logout= async(logouticon,logoutBtn,snakbarPath,snakbarIp)=>{
        await ActionsWrappers.Click(logouticon)
        await ActionsWrappers.Click(logoutBtn)
        await ActionsWrappers.snackBarValidate(snakbarPath,snakbarIp)
    }
}
module.exports = new LoginPage();

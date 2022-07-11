const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () { return super.pathByName('Email') }
    get inputPassword () { return super.pathByName("Password") }
    get btnSubmit () { return super.pathByXpath('//button[@type="submit"]') }
    get homePge(){return super.pathById('Home')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
       await this.inputUsername.setValue(username);
       await this.inputPassword.setValue(password);
       await this.btnSubmit.click(); 
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('auth/login');
    }
}

module.exports = new LoginPage();

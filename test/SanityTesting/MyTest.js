
const assert = require("assert");
const LandingActions = require("../SanityTesting/LandingActions.js");
describe("Sanity test check", () => {
    
// it("upload products", () =>{
//     browser.url('https://new.bcommerce.in/auth/login');
//         browser.setTimeout({ 'pageLoad': 10000 });
//         browser.getCookies();
//         browser.deleteCookies();
//         console.log(browser.getTitle);
//         let loginUsername = $('[name="Username"]');
//         let loginpassword = $('[name="Password"]');
//         let signIn = $('#loadingButton');
//         let signUP = $('[@class="MuiButtonBase-root MuiButton-root MuiButton-outlined jss56 MuiButton-outlinedPrimary MuiButton-fullWidth"]');
       
//         loginUsername.waitForDisplayed(10000);
//         loginUsername.setValue("admin@apptino.com");
//         loginpassword.waitForDisplayed(5000);
//         loginpassword.setValue("Admin@123");
//         signIn.click();
//         browser.pause('2000')
//         $('//*[@id="root"]/header/div/div/div/div[3]/button[1]').click();
//         browser.pause('3000')
//         $('//*[@id="root"]/div[2]/div/div[1]/div/div[1]/div[2]/button[2]').click();
//         browser.pause('1000')
//         $('/html/body/div[3]/div[3]/div/div/div[2]/div[1]/input').setValue("C:/Users/Madhan/Downloads/sample-cart.1fd3e1a4 (4).xlsx");
//  let uploadFile = $('#upload-excel-file')
//         browser.execute(
//             assign style to elem in the browser
//             (el) => el.style.display = 'block',
//             pass in element so we don't need to query it again in the browser
//             uploadFile
//         );
//         uploadFile.waitForDisplayed();
//         uploadFile.setValue("C:/Users/Madhan/Downloads/sample-cart.1fd3e1a4 (4).xlsx");
//         browser.pause(2000)
// $('[class="MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedPrimary"]').click();

// }); 


it ("invite employee", () =>{

    browser.url('https://new.bcommerce.in/auth/login');
            browser.setTimeout({ 'pageLoad': 10000 });
            browser.getCookies();
            browser.deleteCookies();
            console.log(browser.getTitle);
            let loginUsername = $('[name="Username"]');
            let loginpassword = $('[name="Password"]');
            let signIn = $('#loadingButton');
            let signUP = $('[@class="MuiButtonBase-root MuiButton-root MuiButton-outlined jss56 MuiButton-outlinedPrimary MuiButton-fullWidth"]');

        let createUser = $('//*[@id="root"]/div[2]/div/div/div[2]/div/header[2]/div/button[1]');
        let refresh = $('//button[@title="Click to Refresh"]');
        let EmpName = $('//input[@name="displayName"]');
        let EmpMobile = $('//input[@name="mobileNo"]');
        let EmpEmail = $('//input[@name="email"]');
        let EmpJobTitle = $('//input[@name="jobTitle"]');
        let EmpDepart = $('//input[@name="department"]');
        let EmpRole = $('//input[@name="roleName"]');
        let close=$('//button[@title="Close"]');
        let EmpSave=$('//button[@id="loadingButton"]');
        let EmpCancel=$('//button[@class="MuiButtonBase-root MuiButton-root MuiButton-text"]');
        let Assigntag=$('//span[text()="Assign Tags"]/parent::button[1');
        let EditEmp=$('//span[text()="Edit"]/parent::button[1]');
        let more =$('//button[@title="More options"]');
        let swap=$('//ul[@class="MuiList-root MuiMenu-list MuiList-padding"]/li[1]');
        let inActive=$('//ul[@class="MuiList-root MuiMenu-list MuiList-padding"]/li[2]');
        let DeleteUsr=$('//ul[@class="MuiList-root MuiMenu-list MuiList-padding"]/li[3]');
        let RemoveTag=$('//ul[@class="MuiList-root MuiMenu-list MuiList-padding"]/li[4]');

        
      

           
            loginUsername.waitForDisplayed(10000);
            loginUsername.setValue("admin@apptino.com");
            loginpassword.waitForDisplayed(5000);
            loginpassword.setValue("Admin@123");
            signIn.click();
            browser.pause('2000')

            browser.url("https://new.bcommerce.in/settings/team/landing");
            browser.pause('20000')

           





});

});

const assert = require("assert");
const LoginPage = require("../../PageObjects/./Login.page");

describe("Test for Login page", () => {
  it("Invalid username ", () => {
    // browser.url("https://new.bcommerce.in/auth/login");
      LoginPage.open();
        LoginPage.login("admin", "Admin@123");
        assert.strictEqual(LoginPage.InvalidEmailId.getText(),'Invalid business email');
        browser.pause(3000);
  })
  it("Does not exist username ", () => {
  LoginPage.open();
        LoginPage.login("Admin@apptina.com", "Admin@123");
         assert.strictEqual(LoginPage.DoesnotExist.getText(),'User does not exist');
        browser.pause(3000);
      })
      it("Without username ", () => {
        LoginPage.open();
        LoginPage.login( "", "Admin@123");
         assert.strictEqual(LoginPage.withoutUsername.getText(),"Email required");
        browser.pause(3000);
      })
      it("Inactive username ", () => {
        LoginPage.open();
        LoginPage.login( "vijaymashre01@gmail.com", "Admin@123");
        assert.strictEqual(LoginPage.InactiveUser.getText(),'User does not exist');
        browser.pause(3000);
      })


  it("Invalid password ", () => {
    LoginPage.open();
        LoginPage.login("admin@apptino.com", "ADmin@123");
        assert.strictEqual(LoginPage.IncorrectPassword.getText(),'Incorrect password');
        browser.pause(3000);
  })
  it("Entervalid password ", () => {
    LoginPage.open();
        LoginPage.login("admin@apptino.com", "admin123");
        assert.strictEqual(LoginPage.EnterValidPassword.getText(),'Password should be atleast 8 characters long and should contain one number, one uppercase character and one special character');
      });

  it("Without  password ", () => {
    LoginPage.open();
    LoginPage.login("admin@apptino.com", "");
    assert.strictEqual(LoginPage.WithoutPassword.getText(),"Password required");
      })
   
    it("Without  password and Username ", () => {
      LoginPage.open();
      LoginPage.login("", "");
      assert.strictEqual(LoginPage.withoutUsername.getText(),"Email required");
      assert.strictEqual(LoginPage.WithoutPassword.getText(),"Password required");
        })
      })

    describe("Should Enter valid input", () => {

it("should allow valid input", () => {
  LoginPage.open()
  LoginPage.login("admin@apptino.com", "Admin@123");  
  LoginPage.signinButton;
  browser.pause(3000);
  assert.strictEqual(LoginPage.Icon.isDisplayed(),true);
  })
})

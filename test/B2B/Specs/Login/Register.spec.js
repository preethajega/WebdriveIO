const assert = require("assert");
const Register = require("../../PageObjects/Register/Register.page");
const TestActionWrapper = require("../../CommonFunctions/ActionsWrappers");
describe("Register", () => {
  it("Navigate to Signup page ", () => {
     
    TestActionWrapper.checkVisibleClickableAndClick(Register.SignUpBtn); 
    console.log('click')          
  })

  it("should allow without Contact Name ", () => {
    
    Register.register("", "", "", "");
    assert.strictEqual(Register.required.getText(),'Primary contact name required');
    assert.strictEqual(Register.emailrequired.getText(),'Email required');
    assert.strictEqual(Register.gstrequired.getText(),'Email required');
  })
})


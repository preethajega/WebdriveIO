const input = require("./input");
const assert = require("assert");
const LoginPage = require("../../../PageObjects/Login.page")
const path = require("path");
const Brands = require("../../../PageObjects/Manageproduct/Brands/Brands.page");
const TestActionWrapper = require("../../../CommonActions/ActionsWrappers");

describe("Creating Brand", () => {
  it("Should allow to access login ", () => {
    browser.maximizeWindow();
     LoginPage.open();
     LoginPage.login("admin@apptino.com", "Admin@123");  
     LoginPage.signinButton;
     browser.pause(8000);
    })

    
    it("Navigate to Brands page ", () => {
    TestActionWrapper.checkVisibleClickableMoveAndClick(Brands.Icon);
    TestActionWrapper.checkVisibleClickableAndClick(Brands.PtdandPL);
    TestActionWrapper.checkVisibleClickableMoveAndClick(Brands.brand);
  });

  it("Should not allow to create brand without name ", () => {
    TestActionWrapper.checkVisibleClickableMoveAndClick(Brands.AddButton);
    TestActionWrapper.checkEnabledMoveAndSetValue(Brands.Name, "");
    TestActionWrapper.checkVisibleClickableMoveAndClick(Brands.saveButton);
    assert.strictEqual(Brands.Namerequired.getText(), "Brand Name is required");
    browser.pause(3000);
  });

  it("Should not allow to create already exists name ", () => {
    TestActionWrapper.checkEnabledMovedoubleClickDeleteAndSetValue(Brands.Name,"HP");
    TestActionWrapper.checkVisibleClickableMoveAndClick(Brands.saveButton);
    assert.strictEqual(Brands.Namerequired.getText(),"brand Name already exists");
    browser.pause(1000);
  });

  it("Should allow to create Brand Name", () => {
    TestActionWrapper.checkEnabledMovedoubleClickDeleteAndSetValue(input.Name,"Classmate");
    TestActionWrapper.checkVisibleClickableMoveAndClick(Brands.saveButton);
    browser.pause(3000);
  });

  it("Should allow to Edit ", () => {
    var pathFile = "/Users/apptinoadmin/Downloads/gayu/palazzo-pants-300px.jpg";
    Brands.Image.addValue(pathFile);
    browser.pause(3000);
    TestActionWrapper.checkVisibleClickableMoveAndClick(Brands.save);
  });
});

describe("To tag Brand with product", () => {
  it("Navigate to product group page ", () => {
    TestActionWrapper.checkVisibleClickableMoveAndClick(Brands.Icon);
    TestActionWrapper.checkVisibleClickableAndClick(Brands.PtdandPL);
    TestActionWrapper.checkVisibleClickableMoveAndClick(Brands.PG);
  });

  it("Create  product group and tag with brand ", () => {
    TestActionWrapper.checkVisibleClickableMoveAndClick(Brands.createPG);
    TestActionWrapper.checkEnabledMoveClearAndSetValue(Brands.PGName,"Brand test");
    TestActionWrapper.SetValueElementAndkeyboardVal(Brands.brandname,"Classmate","\uE015");
    TestActionWrapper.checkVisibleClickableMoveAndClick(Brands.savePG);
    browser.pause(5000);
  });

  it("Delete the product group ", () => {
    //  TestActionWrapper.checkVisibleClickableMoveAndClick(Brands.DeleteIcon);
    TestActionWrapper.checkVisibleClickableAndClick(Brands.DeleteBtn);
    TestActionWrapper.checkVisibleClickableAndClick(Brands.yesButton);
    browser.pause(2000);
  });
});

describe(" Delete Brand", () => {
  it("Should allow to Delete Brand Name", () => {
    browser.url("https://new.bcommerce.in/brands");
    browser
      .$(
        ".MuiList-root MuiList-dense MuiList-padding .MuiButtonBase-root MuiListItem-root MuiListItem-dense MuiListItem-gutters MuiListItem-button Mui-selected:nth-child(1 )"
      )
      .click("//ul/div[n]");
    // console.log("in view port", Brands.select.isDisplayedInViewport());
    //  Brands.select.scrollIntoView();
    //  console.log("in view port", Brands.select.isDisplayedInViewport());
    //  Brands.select.scrollIntoView();
    //  console.log("in view port", Brands.select.isDisplayedInViewport());
    Brands.select.click();
    // Brands.select.selectByVisibleText('Classmate');
    // TestActionWrapper.checkVisibleClickableAndClick(Brands.select)
    TestActionWrapper.checkVisibleClickableMoveAndClick(Brands.Delete);
    TestActionWrapper.checkVisibleClickableMoveAndClick(Brands.yesButton);
    browser.pause(3000);
  });
});

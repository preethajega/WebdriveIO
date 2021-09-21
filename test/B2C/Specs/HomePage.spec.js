var actionwrappers = require("./../../CommonActions/ActionsWrappers");
var LoginPage = require("../PageObjects/Login.page");
const loginInput = require("../Input/Login.io");
var dbConnectionB2C = require("../../CommonActions/DatabaseConnection");
var  menuNavigation= require("../CommonFunctions/MenuNavigation");
const assert = require("assert");
const ProdInput = require("../Input/Product.io");
var homePage = require("../PageObjects/Home.page");

describe("Checkout  page", () => {
    let otp;
    let test;
  
    it("Opening and clicking login button", async () => {
      await LoginPage.open();
      await LoginPage.wait();
    });

    it("select from major categoeries" , async () =>{
        await menuNavigation.selectMajorCategoery(homePage.majorCategoery);
    });

    it ("select from  first subcategeory" , async () => {
        await menuNavigation.selectsubCategoeries(homePage.majorCategoery,homePage.sucategoery1);

    });

    it ("select from second subcategeory" , async () => {
        await menuNavigation.selectsubCategoeries(homePage.majorCategoery,homePage.sucategoery2);

    });

    it ("Change the Branch Name" , async () => {
        await homePage.branchSelection(ProdInput.branch);
    });
    

      
});
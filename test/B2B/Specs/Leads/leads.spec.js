const assert = require("assert");
const path = require("path");
const cart_path = require("../../PageObjects/BrowsePages/Cart");
const common_path =require("../../PageObjects/Common/commonObjects");
const LoginPage = require("../../PageObjects/Login.page");
var B2B_loginIp = require("../../Inputs/B2B_login");
var  AddProduct= require("../../CommonFunctions/AddingProductToCart/AddingProductToCart");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");

describe("Leads Page", () => {
    it("Should allow to access login ",async () => {
        await  browser.maximizeWindow();
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
        await   AddProduct.clickCartIcon();
           
        })


})
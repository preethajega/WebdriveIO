const assert = require("assert");
const path = require("path");
const cart_path = require("../../PageObjects/BrowsePages/Cart");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const cart_fn= require("../../CommonFunctions/AddingProductToCart/AddingProductToCart");
var CartIp= require("../../Inputs/Browse/CartIp");





describe("Leads Page", () => {
        it("Should allow to access login ",async () => {
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
             
        })

        it("Create lead W/o Products ",async () => {
        await  cart_fn.ClickAndclearCart();
        await  cart_fn.createEnquiry(CartIp.BuyerName,CartIp.ContactNo,CartIp.Attachment,CartIp.suceessAlert);
        });

        it("Create lead W/o Products & Attachments ",async () => {
        await cart_fn.RandomEnqiury();
        });

        it("Add product to cart & create lead  ",async () => {
        await  cart_fn.ClickAndclearCart();
        await  cart_fn.selectProducts(CartIp.ProdName);
        await  cart_fn.clickEnquiryIcon();
        await  cart_fn.createEnquiry(CartIp.BuyerName,CartIp.ContactNo,CartIp.Attachment,CartIp.suceessAlert);
        });

        it("Upload excel in  cart & create lead  ",async () => {
            await  cart_fn.ClickAndclearCart();
            await  cart_fn.uploadProducts();
            await  cart_fn.clickEnquiryIcon();
            await  cart_fn.createEnquiry(CartIp.BuyerName,
                CartIp.ContactNo,CartIp.Attachment,CartIp.suceessAlert);
            
         });

         it("Select product from header & create lead  ",async () => {
            await  cart_fn.ClickAndclearCart();
            await  cart_fn.addToCartFromHeaderSearch();
            await  cart_fn.clickEnquiryIcon();
            await  cart_fn.createEnquiry(CartIp.BuyerName,
                CartIp.ContactNo,CartIp.Attachment,CartIp.suceessAlert);
            
         });




        it("Add custom product to cart & create lead  ",async () => {
            await  cart_fn.ClickAndclearCart();
            await  cart_fn.addCustomProductInCart(CartIp.custProdDesc,
                CartIp.custProdid,CartIp.custProdprice);
            await  cart_fn.clickEnquiryIcon();
            await  cart_fn.createEnquiry(CartIp.BuyerName,
                CartIp.ContactNo,CartIp.Attachment,CartIp.customAlert);
            
         });

        
         



})
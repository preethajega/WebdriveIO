const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const tag_path = require("../../PageObjects/Settings/tag.page");
const tag_fn= require("../../CommonFunctions/settings/tag")
var tagip= require("../../Inputs/settings/tagIP");
const common = require("../../PageObjects/Common/commonObjects");
const ActionsWrappers = require("../../../CommonActions/ActionsWrappers");

describe('Tag Page', () => {
     it("Should allow to access login into Tag page ",async () => {
        await  LoginPage.open();
        await  LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);  
        await  actionsWrappers.urlValidation("/dashboard");
        await  tag_fn.open();
        await  actionsWrappers.urlValidation("/tags");
       });
      it('should add a Terity Tag with cancel',async () => {
           await tag_fn.AddTag(tag_path.TerityTag,tagip.teritytag,tag_path.TerityTag,tag_path.CancelBtn)
      });
      it('should add a Terity Tag with save',async () => {
         await tag_fn.AddTag(tag_path.TerityTag,tagip.teritytag,tag_path.TerityTag,tag_path.Savebtn)
      });
      it('should add a General Tag with cancel',async () => {
         await tag_fn.AddTag(tag_path.GeneralTag,tagip.gentag,tag_path.GeneralTag,tag_path.CancelBtn)
      });
      it('should add a General Tag with save',async () => {
         await tag_fn.AddTag(tag_path.GeneralTag,tagip.gentag,tag_path.GeneralTag,tag_path.Savebtn)
      });
      it('should not allow a user enter the same terity tag',async () => {
         await tag_fn.Existalert(tag_path.TerityTag,tagip.teritytag,tag_path.TerityTag,common.snackbar,tagip.tertyalert)
      });
      it('should not allow a user enter the same general tag',async () => {
         await tag_fn.Existalert(tag_path.GeneralTag,tagip.gentag,tag_path.GeneralTag,common.snackbar,tagip.genalert)
      });
      it('should delete a Terity tag with cancel',async () => {
         await tag_fn.Deletetag(tag_path.TerityTag,tag_path.TerityDeletedata,tag_path.CancelBtn,
            common.snackbar,tagip.savealert)
      });
      it('should delete a Terity tag with save',async () => {
         await tag_fn.Deletetag(tag_path.TerityTag,tag_path.TerityDeletedata,tag_path.Savebtn,
            common.snackbar,tagip.savealert)
      });
      it('should not allow a user to delete the maped terity tag with cancel',async () => {
         await tag_fn.Deletetag(tag_path.TerityTag,tag_path.DeleteMapedterity,tag_path.CancelBtn,
            common.snackbar,tagip.mapedtertyalert)
      });
      it('should not allow a user to delete the maped terity tag with save',async () => {
         await tag_fn.Deletetag(tag_path.TerityTag,tag_path.DeleteMapedterity,tag_path.Savebtn,
            common.snackbar,tagip.mapedtertyalert)
      });
      it('should delete a General tag with cancel',async () => {
         await tag_fn.Deletetag(tag_path.GeneralTag,tag_path.GenDeletedata,tag_path.CancelBtn,
            common.snackbar,tagip.savealert)
      });
      it('should delete a General tag with save',async () => {
         await tag_fn.Deletetag(tag_path.GeneralTag,tag_path.GenDeletedata,tag_path.Savebtn,
           common.snackbar,tagip.savealert)
      });
});
const assert = require("assert");
const path = require("path");
const LoginPage = require("../../PageObjects/Login.page");
const B2B_loginIp = require("../../Inputs/B2B_login");
const actionsWrappers = require("../../../CommonActions/ActionsWrappers");
const tag_path = require("../../PageObjects/Settings/tag.page");
const tag_fn = require("../../CommonFunctions/settings/tag")
var tagip = require("../../Inputs/settings/tagIP");
const common = require("../../PageObjects/Common/commonObjects");
const ActionsWrappers = require("../../../CommonActions/ActionsWrappers");

describe('Tag Page', () => {
   it("Should allow to access login into Tag page ", async () => {
      await LoginPage.open();
      await LoginPage.login(B2B_loginIp.OwnerEmail,B2B_loginIp.OwnerPassword);
      await actionsWrappers.urlValidation("/dashboard");
      await tag_fn.open();
      await actionsWrappers.urlValidation("/tags");
   });
/* *************** GENERAL TAG *************** */
   it('should add a General Tag with cancel', async () => {
      await browser.pause(2000)
      await tag_fn.AddTag(tag_path.GeneralTag,tagip.gentag,tag_path.GeneralTag,tag_path.CancelBtn)
   });
   it('should add a General Tag with save', async () => {
      await browser.pause(2000)
      await tag_fn.AddTag(tag_path.GeneralTag,tagip.gentag,tag_path.GeneralTag,tag_path.Savebtn)
      await browser.pause(3000)
   });
   
   it('should not allow a user enter the same General tag', async () => {
      await browser.refresh()
      await tag_fn.Existalert(tag_path.GeneralTag,tagip.gentag,tag_path.GeneralTag,common.snackbar,tagip.genAlert)
      await browser.pause(3000)
   });
   it('should delete a General tag with cancel', async () => {
      await browser.pause(2000)
      await tag_fn.Deletetag(tag_path.GeneralTag,tag_path.CancelBtn,common.snackbar,tagip.savealert)
   });
   it('should delete a General tag with save', async () => {
      await browser.pause(2000)
      await tag_fn.Deletetag(tag_path.GeneralTag,tag_path.Savebtn,common.snackbar,tagip.savealert)
   });
   it('should not allow a user to delete the maped General tag with cancel', async () => {
      await browser.pause(3000)
      await tag_fn.DeleteMapedtag(tag_path.GeneralTag,tag_path.DeleteMapedGen,tag_path.CancelBtn,
         common.snackbar,tagip.mapedGenalert)
   });
   it('should not allow a user to delete the maped General tag with save', async () => {
      await browser.pause(3000)
      await tag_fn.DeleteMapedtag(tag_path.GeneralTag,tag_path.DeleteMapedGen,tag_path.Savebtn,
         common.snackbar,tagip.mapedGenalert)
   });

/* *************** TEAM TAG *************** */
   it('should add a Team Tag with cancel', async () => {
      await browser.pause(3000)
      await tag_fn.AddTag(tag_path.TeamTag,tagip.teamtag,tag_path.GeneralTag,tag_path.CancelBtn)
   });
   it('should add a Team Tag with save', async () => {
      await browser.pause(2000)
      await tag_fn.AddTag(tag_path.TeamTag,tagip.teamtag,tag_path.GeneralTag,tag_path.Savebtn)
      await browser.pause(3000)
   });
   it('should not allow a user enter the same Team tag', async () => {
      await browser.refresh()
      await tag_fn.Existalert(tag_path.TeamTag,tagip.teamtag,tag_path.TeamTag,common.snackbar,tagip.teamAlert)
      await browser.pause(2000)
   });
   it('should not allow a user to delete the maped Team tag with cancel', async () => {
      await browser.pause(2000)
      await tag_fn.DeleteMapedtag(tag_path.TeamTag,tag_path.DeleteMapedTeam,tag_path.CancelBtn,
         common.snackbar,tagip.mapedTeamalert)
   });
   it('should not allow a user to delete the maped Team tag with save', async () => {
      await browser.pause(2000)
      await tag_fn.DeleteMapedtag(tag_path.TeamTag,tag_path.DeleteMapedTeam,tag_path.Savebtn,
         common.snackbar,tagip.mapedTeamalert)
   });
   it('should delete a Team tag with cancel', async () => {
      await browser.pause(3000)
      await tag_fn.Deletetag(tag_path.TeamTag,tag_path.CancelBtn,common.snackbar,tagip.savealert)
   });
   it('should delete a Team tag with save', async () => {
      await browser.pause(2000)
      await tag_fn.Deletetag(tag_path.TeamTag,tag_path.Savebtn,common.snackbar,tagip.savealert)
   });
/* *************** CUSTOMER TAG *************** */
   it('should add a Customer Tag with cancel', async () => {
      await browser.pause(1000)
      await tag_fn.AddTag(tag_path.customerTag,tagip.gentag,tag_path.GeneralTag,tag_path.CancelBtn)
   });
   it('should add a Customer Tag with save', async () => {
      await browser.pause(2000)
      await tag_fn.AddTag(tag_path.customerTag,tagip.gentag,tag_path.GeneralTag,tag_path.Savebtn)
   });

   it('should not allow a user enter the same Customer tag', async () => {
      await browser.refresh()
      await tag_fn.Existalert(tag_path.customerTag,tagip.cusTag,tag_path.customerTag,common.snackbar,tagip.cusAlert)
      await browser.pause(2000)
   });
   it('should not allow a user to delete the maped Customer tag with cancel', async () => {
      await browser.pause(2000)
      await tag_fn.DeleteMapedtag(tag_path.customerTag,tag_path.DeleteMapedCus,tag_path.CancelBtn,
         common.snackbar,tagip.mapedCusalert)
   });
   it('should not allow a user to delete the maped Customer tag with save', async () => {
      await browser.pause(2000)
      await tag_fn.DeleteMapedtag(tag_path.customerTag,tag_path.DeleteMapedCus,tag_path.Savebtn,
         common.snackbar,tagip.mapedCusalert)
   });
   it('should delete a Customer tag with cancel', async () => {
      await browser.pause(3000)
      await tag_fn.Deletetag(tag_path.customerTag,tag_path.CancelBtn,common.snackbar,tagip.savealert)
   });
   it('should delete a Customer tag with save', async () => {
      await browser.pause(2000)
      await tag_fn.Deletetag(tag_path.customerTag,tag_path.Savebtn,common.snackbar,tagip.savealert)
   });

   // it('santy', async () => {
   //    await tag_fn.AddTag(tag_path.TerityTag,tagip.gentag,tag_path.TerityTag,tag_path.Savebtn)
   //    await tag_fn.AddTag(tag_path.GeneralTag,tagip.gentag,tag_path.GeneralTag,tag_path.Savebtn)
   //    await browser.refresh()
   //    await tag_fn.Existalert(tag_path.TerityTag,tagip.gentag,tag_path.TerityTag,common.snackbar,tagip.tertyalert)
   //    await browser.refresh()
   //    await tag_fn.Existalert(tag_path.GeneralTag,tagip.gentag,tag_path.GeneralTag,common.snackbar,tagip.genalert)
   //    await browser.refresh()
   //    await tag_fn.Deletetag(tag_path.TerityTag,tag_path.TerityDeletedata,tag_path.Savebtn,
   //       common.snackbar,tagip.savealert)
   //    await browser.refresh()
   //    await tag_fn.Deletetag(tag_path.GeneralTag,tag_path.GenDeletedata,tag_path.Savebtn,
   //       common.snackbar,tagip.savealert)
   //    await tag_fn.Deletetag(tag_path.TerityTag,tag_path.DeleteMapedterity,tag_path.Savebtn,
   //       common.snackbar,tagip.mapedtertyalert)
   //    await tag_fn.Deletetag(tag_path.TerityTag,tag_path.DeleteMapedGen,tag_path.Savebtn,
   //       common.snackbar,tagip.mapedtertyalert)
   // });
});
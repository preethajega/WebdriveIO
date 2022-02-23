const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const moduleAuthip = require("../../Inputs/settings/ModuleAuthIP");
const path = require("../../PageObjects/Settings/ModuleAuth.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");

class ModuleAuth extends Page {
    async open() {
        super.open(moduleAuthip.ModuleAuthUrl); 
    }
    AddRole = async()=>{
        await actionWrapper.Click(path.AddRole)
        await actionWrapper.clickAndSetvalue(path.RoleName,moduleAuthip.roleName)
        await actionWrapper.clickAndSetvalue(path.RoleDesc,moduleAuthip.roleDesc)
        await actionWrapper.clickSetvalueAndSelectoption(path.AcctypeName,moduleAuthip.accType)
        await actionWrapper.clickSetvalueAndSelectoption(path.AccesClone,moduleAuthip.accessClone)
    }
    EditRole = async()=>{
        await actionWrapper.Click(path.Moreoption)
        await actionWrapper.Click(path.Edit)
        await actionWrapper.clickSetvalueAndSelectoption(path.RoleId,moduleAuthip.roleName)
        await actionWrapper.clearAndsetValue(path.RoleName,moduleAuthip.editRoleName)
        await actionWrapper.clearAndsetValue(path.RoleDesc,moduleAuthip.editRoledesc)
    }
    DeleteRole = async()=>{
        await actionWrapper.Click(path.Moreoption)
        await actionWrapper.Click(path.Delete)
        await actionWrapper.clickSetvalueAndSelectoption(path.DeleteRole,moduleAuthip.editRoleName)
    }
    EditDeleFieldValid= async(option)=>{
        await actionWrapper.Click(path.Moreoption)
        await actionWrapper.Click(option)
    }
    AddFieldValid = async()=>{
        await actionWrapper.Click(path.AddRole)
    }
    snakvalid = async(btn,snakpath,snakip)=>{
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(snakpath,snakip)
    }
}
module.exports = new ModuleAuth();
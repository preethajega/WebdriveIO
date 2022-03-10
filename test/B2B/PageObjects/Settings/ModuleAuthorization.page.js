const Page = require("../../../B2B/PageObjects/page");

class ModuleAuth extends Page{
/* ************** CREATE ROLE CARD ************ */
    get AddRole(){
        return super.pathByXpath('//button[@aria-label="Add Roles"]')
    }
    get RoleName(){
        return super.pathByName('roleName')
    }
    get RoleDesc(){
        return super.pathByName('roleDescription')
    }
    get AcctypeName(){
        return super.pathByName('accountType.name')
    }
    get AccesClone(){
        return super.pathByName('accessGroupFrom.accountTypeId.name')
    }
    get ErrorRoleName(){
        return super.pathByXpath('//p[text()="Role name required"]')
    }
    get ErrorRoleDsc(){
        return super.pathByXpath('//p[text()="Role description required"]')
    }
    get ErrorAccType(){
        return super.pathByXpath('//p[text()="Account type required"]')
    }
    get ErrorAccesClone(){
        return super.pathByXpath('//p[text()="Permission group to clone required"]')
    }
    get CancelBtn(){
        return super.pathById('editDialogCancel')
    }
    get SaveBtn(){
        return super.pathById('editDialogButton')
    }

/* ************** EDIT ROLE CARD ************ */
    get RoleId(){
        return super.pathByName('roleId')
    }
    get Moreoption(){
        return super.pathByXpath('//button[@aria-label="moreOptions"]')
    }
    get Edit(){
        return super.pathByXpath('//ul[@role="menu"]/li[1]')
    }
    get errRoleId(){
        return super.pathByXpath('//p[text()="Role required"]')
    }
/* ************** DELETE ROLE CARD ************ */
    get DeleteRole(){
        return super.pathByName('deleteRole.roleId.roleName')
    }
    get DeleteBtn(){
        return super.pathByXpath('//button[@aria-label="Delete"]')
    }
    get ErrDeleteRole(){
        return super.pathByXpath('//p[text()="Select role to delete"]')
    }
    get Delete(){
        return super.pathByXpath('//ul[@role="menu"]/li[2]')
    }

}
module.exports = new ModuleAuth();

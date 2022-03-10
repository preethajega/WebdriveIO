function ModuleAuth(){
    this.ModuleAuthUrl="/settings/module_authorization"
    this.roleName="Tester"
    this.roleDesc="Testing Team"
    this.accType="Buyer"
    this.accessClone="Admin"
    this.editRoleName="Testers"
    this.editRoledesc="TestingTeam"
    this.errRolename="Role name required"
    this.errRoleDesc="Role description required"
    this.errAccType="Account type required"
    this.errAccesClone="Permission group to clone required"
    this.errDeleteRole="Select role to delete"
    this.errRoleid="Role required"
    this.saveAlert="Saved successfully"
    this.deleteAlert="Role deleted successfully"

}
module.exports = new ModuleAuth();
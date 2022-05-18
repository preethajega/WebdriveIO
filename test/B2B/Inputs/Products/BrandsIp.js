function BrandsIp(){
    const path = require('path');
    this.BrandsUrl="/brands";
    this.BrandName="Sanity Brand";
    this.imageUpload = path.join(__dirname,'./../../../FileUtils/profilepic.png');
    this.ErrBrandname="Brand Name is required"
    this.AlreadyExsists="brand Name already exists";
    this.saveAlert="Brand added"
    this.deleteSucess="Brand deleted successfully"
    this.UploadSucess='Sanity Brand updated successfully'
    this.deleteAlert="Brands mapped with product can't be deleted"

}
module.exports = new BrandsIp();
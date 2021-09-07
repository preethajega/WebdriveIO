function loginInput() {        
    this.validMobile = 8610492575;
    this.newMobileNumber = `9`+ Math.floor(Math.random() * 900000000);
 
}


module.exports = new loginInput();

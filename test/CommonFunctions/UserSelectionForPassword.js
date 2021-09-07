
const UsersSelectionandPsd = () =>{

    this.usersSelection = (email, password) => {
        if (email === 'admin@apptino.com' || email === 'b2bseller.suser@gmail.com' || email === 'vijay@apptino.com' || email === 'jayabharathi@apptino.com' || email ==='narendran@apptino.com' || email == 'aravindan@apptino.com' || email == 'sudhakar@apptino.com' || email == 'jayabharathipalanisamy@yahoo.com') {
            return password = 'Admin@123'
          } else if(email === 'b2bseller.demo@gmail.com' || email == 'aburva@apptino.com') {
            return password = 'Demo#123#'
            }
    }
}
module.exports = new UsersSelectionandPsd();
    
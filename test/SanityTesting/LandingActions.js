
class LandingActions {
   
      get Filterbutton() {
        return  super.pathByXpath('//div[2]/div/div/div/div[1]/button');
     }

     get QuoteName() {
      return  super.pathById('qname');
   }
      

      ClickCheckBox(value){

       return  $(`//*[contains(text(),value)]/preceding::td[1]`)
      }

      InviteEmp(value){
      return   $(`//*[contains(text(),value)]/following::td[5]`)

      }






};

module.exports = new LandingActions();
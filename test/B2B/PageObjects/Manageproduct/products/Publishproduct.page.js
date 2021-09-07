const Page = require("../../PageObjects/page");
class publish extends Page {
    open() {
        super.open('auth/login'); 
      }
      get search() {
        return  $$('//div[6]/div/input');
      }

      get selectPG() {
        return  $$('//div/table/tbody/tr[1]');
      }

      get selectProduct() {
        return  $$('//div[2]/div[2]/div[2]/div[2]/div/div/div/div[1]/div[2]');
      }

      get publishProduct() {
        return  super.pathById('MPG_PPGO_CP');
              }

      get yes() {
      return  super.pathById('yes');
     }
     get publishPG() {
      return  super.pathById('MPG_PPGLB_CP');
           }

           get selectProduct() {
            return  $$('//div[2]/div[2]/div[2]/div[2]/div/div/div/div[1]/div[2]');
          }

}

module.exports = new publish();
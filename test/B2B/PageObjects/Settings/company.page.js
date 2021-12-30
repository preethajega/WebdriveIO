const Page = require("../../../B2B/PageObjects/page");

class Comp extends Page{
   // get logobtn(){
     //   return super.pathByXpath("")
   // }
    get logoupload(){
        return super.pathById("prefix-1")
    }
    get savebtn(){
        return super.pathById('loadingButton')
    }

}
module.exports =new Comp();
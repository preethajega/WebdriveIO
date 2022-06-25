const actionWrapper = require("../../../CommonActions/ActionsWrappers");
const Page = require("../../../B2B/PageObjects/page");
const tagip = require("../../Inputs/settings/tagIP");
const path = require("../../PageObjects/Settings/tag.page");
const attchmentUpload = require("../../../CommonActions/attchmentUpload");
const common = require("../../PageObjects/Common/commonObjects");
const assert = require("assert");



class Tag extends Page {

    async open() {
        super.open(tagip.tagUrl); 
    }
    AddTag= async(path,input,ele,btn) =>{
        await actionWrapper.clickAndSetvalue(path,input)
        await ele.keys("\uE007")
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(common.snackbar,tagip.savealert)
    }
    Existalert = async(path1,input,ele,elepath,errip) =>{
        await actionWrapper.clickAndSetvalue(path1,input)
        await ele.keys("\uE007")
        await actionWrapper.snackBarValidate(elepath,errip)
    }
    DeleteMapedtag = async(path1,ele,btn,snakpath,errip) =>{
        await actionWrapper.Click(path1)
        await actionWrapper.Click(ele)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(snakpath,errip)
    }
    Deletetag = async(elepath,btn,snakpath,errip) =>{
        await actionWrapper.Click(elepath)
        await actionWrapper.clearValueKeyboard(elepath)
        await actionWrapper.Click(btn)
        await actionWrapper.snackBarValidate(snakpath,errip)
    }

}
module.exports = new Tag();
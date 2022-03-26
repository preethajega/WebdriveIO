const Page = require("../../../PageObjects/page");

class Task extends Page{

/* **************** TASK ******************** */

    get TaskBtn(){
        return super.pathByXpath('//h4[text()="Tasks"]/following-sibling::button')
    }
    get TaskName(){
        return super.pathByName('task.taskName')
    }   
    get LinkTask(){
        return super.pathByXpath('//input[@placeholder="Search for Tasks"]')
    }
    get Attcah(){
        return super.pathByXpath('//label[@for="button-file"]')
    }
     get TaskClose(){
        return super.pathByXpath('//h4[text()="Create task"]/following-sibling::div/button[3]')
    }
    get save(){
        return super.pathByXpath('//h4[text()="Create task"]/following-sibling::div/button[2]')
    }
    get cancel(){
        return super.pathByXpath('//h4[text()="Create task"]/following-sibling::div/button[1]')
    }
    get BoardName(){
        return super.pathByName('task.project')
    }
    get SelectTemplate(){
        return super.pathByXpath('//input[@placeholder="Search for templates"]')
    }
    get Status(){
        return super.pathByName('task.statusId')
    }
    get AsignUser(){
        return super.pathByXpath('//input[@placeholder="Search for Users"]')
    }
    get LinkDocumentIdentifi(){
        return super.pathByXpath('//label[text()="Linked document identifier"]/following-sibling::div/input')
    }
    get DueDate(){
        return super.pathByXpath('//label[text()="Due Date"]/following-sibling::div/input')
    }
    get Priority(){
        return super.pathByXpath('//label[text()="Priority"]/following-sibling::div/input')
    }
    get ErrTaskName(){
        return super.pathByXpath('//p[text()="Task name required"]')
    }
    get ErrBoardName(){
        return super.pathByXpath('//p[text()="Board is required"]')
    }
    get ErrStatus(){
        return super.pathByXpath('//p[text()="Status is required"]')
    }
    get AttachDelete(){
        return super.pathByXpath('(//button[@aria-label="delete"])[last()]')
    }
    get ErrTaskName(){
        return super.pathByXpath('')
    }
    get ErrTaskName(){
        return super.pathByXpath('')
    }
    get ErrTaskName(){
        return super.pathByXpath('')
    }


/* **************** EDIT TASK ******************** */

    get MarkAsTemplate(){
        return super.pathByXpath('//button[@aria-label="Mark as template "]')
    }
    get ReturnTask(){
        return super.pathByXpath('//*[text()="RETURN TASK"]//parent::button')
    }
    get SumbitTask(){
        return super.pathByXpath('//*[text()="SUBMIT TASK"]//parent::button')
    }
/* **************** CHECK LIST ******************** */
    get CheckListAddItem(){
        return super.pathByXpath('(//h4[text()="Checklist"]/following-sibling::div//span)[1]')
    }
    get ItemInput(){
        return super.pathByXpath('//input[@placeholder="Enter an item"]')
    }
    get ItemCancelBtn(){
        return super.pathByXpath('(//button[text()="Cancel"])[last()]')
    }
    get AddItemBtn(){
        return super.pathByXpath('//button[text()="Add"]')
   }
   get ItemCheckBox(){
       return super.pathByXpath('//ul/li[1]//input')
   }
   get ItemDelete(){
       return super.pathByXpath('//ul/li[1]//button')
   }
/* **************** COMMENTS ******************** */

   get CommentInput(){
       return super.pathByXpath('//textarea[@placeholder="Add a comment"]')
   }
   get PostBtn(){
       return super.pathByXpath('//button[@aria-label="Post"]')
   }
   get CommentTab(){
       return super.pathByXpath('//button[text()="Comments"]')
   }

   get HistoryTab(){
    return super.pathByXpath('//button[text()="History"]')
}
}
module.exports = new Task();




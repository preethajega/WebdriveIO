const assert = require("assert");
const path = require('path');
const Category = require("../../PageObjects/Categories.page");
const TestActionWrapper = require("../../../CommonFunctions/ActionsWrappers");
describe("Creating Major Category", () => {
     it("Should allow to access login ", () => {
        Category.open()
        Category.login("admin@apptino.com", "Admin@123");  
      browser.pause(3000);
     
   })

   it("Navigate to Categories page ", () => {   
 TestActionWrapper.checkVisibleClickableMoveAndClick(Category.Icon); 
 TestActionWrapper.checkVisibleClickableAndClick(Category.PtdandPL);
 TestActionWrapper.checkVisibleClickableMoveAndClick(Category.categories);
   })
    

    it("Should not allow to Create new category without name ", () => {   
        TestActionWrapper.checkVisibleClickableMoveAndClick(Category.AddButton); 
        TestActionWrapper.checkEnabledMoveAndSetValue(Category.Name, "");
        TestActionWrapper.checkVisibleClickableMoveAndClick(Category.saveButton); 
        assert.strictEqual(Category.namerequired.getText(), 'Category Name is required');
         
    })

    it("Should not allow to Create new category with already exsit name ", () => {   
       
        TestActionWrapper.checkEnabledMoveAndSetValue(Category.Name, "Manufacturer");
        TestActionWrapper.checkVisibleClickableMoveAndClick(Category.saveButton); 
        browser.pause(1000);
        assert.strictEqual(Category.nameexsits.getText(), 'Category Name already exists');
    })

    it("Should allow to Create new category ", () => {   
        TestActionWrapper.checkEnabledMovedoubleClickDeleteAndSetValue(Category.Name, "CREATIVE");
        TestActionWrapper.checkVisibleClickableAndClick(Category.saveButton); 
         browser.pause(2000);
    })

    it("Should allow to save Description ", () => {   
        TestActionWrapper.checkEnabledMovedoubleClickDeleteAndSetValue(Category.Description, "Bring your binge-watching and music enjoyment up a notch! The Stage series of soundbars is the perfect space-saving solution to upgrading the audio from your computer and TV's built-in speakers.");
        TestActionWrapper.checkVisibleClickableAndClick(Category.save); 
         browser.pause(2000);
    })

    it("Should  allow to insert Image ", () => {   
        var pathFile1 = '/Users/apptinoadmin/Downloads/gayu/palazzo-pants-thumb.jpg'
        Category.Image1.addValue(pathFile1)
        browser.pause(3000);
        TestActionWrapper.checkVisibleClickableAndClick(Category.save); 
        Category.Image2.scrollIntoView();
        var pathFile2 = '/Users/apptinoadmin/Downloads/gayu/palazzo-pants-thumb.jpg'
        Category.Image2.addValue(pathFile2)
        TestActionWrapper.checkVisibleClickableAndClick(Category.save); 
        browser.pause(3000);
    })

        })

    //     describe("Creating Category", () => {

    //     it("Should not allow to Create new category without name ", () => {   
    //         TestActionWrapper.checkVisibleClickableMoveAndClick(Category.AddButton1); 
    //         TestActionWrapper.checkEnabledMoveAndSetValue(Category.Name, "");
    //         TestActionWrapper.checkVisibleClickableMoveAndClick(Category.saveButton); 
    //         assert.strictEqual(Category.namerequired.getText(), 'Category Name is required');
             
    //     })
    
    //      it("Should allow to Create new category ", () => {   
    //         TestActionWrapper.checkEnabledMovedoubleClickDeleteAndSetValue(Category.Name, "Creative Stage");
    //         TestActionWrapper.checkVisibleClickableAndClick(Category.saveButton); 
    //          browser.pause(2000);
    //     })
    
    //     it("Should allow to save Description ", () => {   
    //         TestActionWrapper.checkEnabledMovedoubleClickDeleteAndSetValue(Category.Description, "2.1 High Performance Under-monitor Soundbar with Subwoofer for TV, Computers, and Ultrawide Monitors");
    //         TestActionWrapper.checkVisibleClickableAndClick(Category.save); 
    //          browser.pause(2000);
    //     })

    //     it("Should  allow to insert Image ", () => {   
    //             var pathFile1 = '/Users/apptinoadmin/Downloads/gayu/palazzo-pants-thumb.jpg'
    //             Category.Image1.addValue(pathFile1)
    //             browser.pause(3000);
    //             TestActionWrapper.checkVisibleClickableAndClick(Category.save); 
    //             Category.Image2.scrollIntoView();
    //             var pathFile2 = '/Users/apptinoadmin/Downloads/gayu/palazzo-pants-thumb.jpg'
    //             Category.Image2.addValue(pathFile2)
    //             TestActionWrapper.checkVisibleClickableAndClick(Category.save); 
    //             browser.pause(3000);
    //         })
    // })


    // describe("Creating SubCategory", () => {

    //     it("Should not allow to Create new category without name ", () => {   
    //         TestActionWrapper.checkVisibleClickableMoveAndClick(Category.AddButton1); 
    //         TestActionWrapper.checkEnabledMoveAndSetValue(Category.Name, "");
    //         TestActionWrapper.checkVisibleClickableMoveAndClick(Category.saveButton); 
    //         assert.strictEqual(Category.namerequired.getText(), 'Category Name is required');
             
    //     })
    
    //      it("Should allow to Create new category ", () => {   
    //         TestActionWrapper.checkEnabledMovedoubleClickDeleteAndSetValue(Category.Name, "Creative Pebble Plus");
    //         TestActionWrapper.checkVisibleClickableAndClick(Category.saveButton); 
    //          browser.pause(2000);
    //     })
    
    //     it("Should allow to save Description ", () => {   
    //         TestActionWrapper.checkEnabledMovedoubleClickDeleteAndSetValue(Category.Description, "2.1 USB Desktop Speakers with Subwoofer");
    //         TestActionWrapper.checkVisibleClickableAndClick(Category.save); 
    //          browser.pause(2000);
    //     })

    //     it("Should  allow to insert Image ", () => {   
    //         var pathFile1 = '/Users/apptinoadmin/Downloads/gayu/palazzo-pants-thumb.jpg'
    //         Category.Image1.addValue(pathFile1)
    //         browser.pause(3000);
    //         TestActionWrapper.checkVisibleClickableAndClick(Category.save); 
    //         var pathFile2 = '/Users/apptinoadmin/Downloads/gayu/palazzo-pants-thumb.jpg'
    //         Category.Image2.addValue(pathFile2)
    //         TestActionWrapper.checkVisibleClickableAndClick(Category.save); 
    //         browser.pause(3000);
    //     })
    // })

    // describe("T0 Tag with product", () => {

    //     it("Navigate to product group page ", () => {
    //         TestActionWrapper.checkVisibleClickableMoveAndClick(Category.Icon); 
    //         TestActionWrapper.checkVisibleClickableAndClick(Category.PtdandPL);
    //         TestActionWrapper.checkVisibleClickableMoveAndClick(Category.PG);
    //      })

    //      it("Create  product group  ", () => {
    //         TestActionWrapper.checkVisibleClickableMoveAndClick(Category.createPG); 
    //         TestActionWrapper.checkEnabledMoveClearAndSetValue(Category.PGName, "CREATIVE");
    //         TestActionWrapper.ClickElementAndkeyboardVal(Category.brandname, "\uE015");
    //         TestActionWrapper.checkVisibleClickableMoveAndClick(Category.savePG);
            
    //      })

    //      it("Create  product and publish  ", () => {
    //         TestActionWrapper.checkVisibleClickableMoveAndClick(Category.createPtd); 
    //         TestActionWrapper.checkEnabledMoveAndSetValue(Category.PtdID, "5V 2A");
    //           TestActionWrapper.checkEnabledMoveAndSetValue(Category.PtdName, "Creative Pebble V2");
    //           TestActionWrapper.ClickElementAndkeyboardVal(Category.HSN, "\uE015");
    //           TestActionWrapper.SetValueElementAndkeyboardVal(Category.primarycategory,"Creative Pebble Plus", "\uE015");
    //           TestActionWrapper.checkEnabledMovedoubleClickDeleteAndSetValue(Category.UnitPrice, "117");
    //           TestActionWrapper.checkEnabledMoveAndSetValue(Category.UnitQty, "1");
    //         TestActionWrapper.checkEnabledMoveAndSetValue(Category.PackQty, "1");
    //         TestActionWrapper.checkEnabledMoveAndSetValue(Category.UnitOfMeasure, "1");
    //         TestActionWrapper.checkVisibleClickableAndClick(Category.saveBtn);
    //         TestActionWrapper.checkEnabledMoveAndSetValue(Category.Ptdcost, "5500");
    //         TestActionWrapper.checkVisibleClickableAndClick(Category.SBtn);
    //         TestActionWrapper.checkVisibleClickableMoveAndClick(Category.publish);
    //         TestActionWrapper.checkVisibleClickableAndClick(Category.yes);
    //      })

    //      it("Publish PG  ", () => {
    //         TestActionWrapper.checkVisibleClickableMoveAndClick(Category.close);
    //         TestActionWrapper.checkVisibleClickableAndClick(Category.publishPG);
    //         TestActionWrapper.checkEnabledMoveAndSetValue(Category.leadTime, "20");
    //         TestActionWrapper.checkEnabledMoveAndSetValue(Category.effFrom, "12/10/2020");
    //       TestActionWrapper.checkVisibleClickableAndClick(Category.SBtn);
    //       TestActionWrapper.checkVisibleClickableAndClick(Category.publishPG);
    //       TestActionWrapper.checkVisibleClickableMoveAndClick(Category.OnlypublishPG);
    //       TestActionWrapper.checkVisibleClickableAndClick(Category.Ok);
    //      })
    // })
    // describe("Search  product", () => {

    //     it("Should allow to search the product ", () => {
    //           TestActionWrapper.SetValueElementAndkeyboardVal(Category.searchID, "5V 2A","\uE015" );
    //          browser.pause(2000);
    //         })
    // })
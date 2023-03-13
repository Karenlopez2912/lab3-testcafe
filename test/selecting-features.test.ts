
import { features } from "process";
import { Driver, driverInstance } from "../src/driver";
import { TestCafePage } from "../src/pages/test-cafe-page";
jest.setTimeout(70000)

describe('Selecting important Features', () => {
    let testCafePage: TestCafePage;
    let  Features = ['Support for testing on remote devices','Easy embedding into a Continuous integration system','Advanced traffic and markup analysis']
 //Features: Support for testing on remote devices, Re-using existing JavaScript code for testing, Running tests in background and/or in parallel in multiple browsers,
    //Easy embedding into a Continuous integration system, Advanced traffic and markup analysis    

    beforeAll(async () => {              
        await driverInstance.startDriver();
        testCafePage = new TestCafePage();  
    });

    afterAll(async () => {
        //await driverInstance.();
    });

    it('Go To Page', async () => {
        await testCafePage.navigateTo('https://devexpress.github.io/testcafe/example/');


     });
    
    it('Selecting features', async () => {
        await testCafePage.selectImportantFeatures(Features, '')
         
    })    
})

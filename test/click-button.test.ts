// import { driverInstance } from "../src/core/driver";
import { driverInstance } from "../src/driver";
import { TestCafePage } from "../src/pages/test-cafe-page";
jest.setTimeout(5000)
describe('Feature Click Button', () => {
    let testCafePage: TestCafePage;

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

    it('Click Populate Button', async () => {
        await testCafePage.clickButton();
    
    });
});
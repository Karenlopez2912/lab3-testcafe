import { Interface } from "readline";
import { driverInstance } from "../src/driver";
import { TestCafePage } from "../src/pages/test-cafe-page";
jest.setTimeout(5000)
describe('Selecting Interface', () => {
    let testCafePage: TestCafePage;
    let interf='JavaScript API'
// Interfaces: Command line, JavaScript API, Both

    beforeAll(async () => {              
        await driverInstance.startDriver();
        testCafePage = new TestCafePage(); 
    });

    afterAll(async () => {
        //await driverInstance.();
    });

    it('Go To Page', async () => {
        await testCafePage.navigateTo('https://devexpress.github.io/testcafe/example/');

    }) 

    it('Select interface', async () => {
        
        await testCafePage.selectInterface('#preferred-interface',interf)
    })
    
})
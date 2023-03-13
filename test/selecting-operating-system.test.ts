import { driverInstance } from "../src/driver";
import { TestCafePage } from "../src/pages/test-cafe-page";
jest.setTimeout(5000)
describe('Selecting Operating System', () => {
    let testCafePage: TestCafePage;
    const Windows= '#windows';
    const MacOS= '#macos';
    const Linux= '#linux';
    let OS= Windows;
    
    beforeAll(async () => {              
        await driverInstance.startDriver();
        testCafePage = new TestCafePage(); 
        
    });

    afterAll(async () => {
        //await driverInstance.();
    });

    it('Go To Page', async () => {
        await testCafePage.navigateTo('https://devexpress.github.io/testcafe/example/');

    // Operating Systems: #Windows, #macos, #linux
        await testCafePage.selectOperatingSystem(OS)
    })

    })

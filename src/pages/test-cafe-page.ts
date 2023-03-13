import { features } from "process";
import { text } from "stream/consumers";
import { BasePage } from "./base-page";

export class TestCafePage extends BasePage {
    check(arg0: string) {
        throw new Error("Method not implemented.");
    }
    // Locators
    public searchbox: string = '//input[@name="name"]';
    public populateButton = '//input[@id="populate"]';
    public remotetesting = '#remote-testing';
    public reusingcode = '#reusing-js-code';
    public backgroundtesting = '#background-parallel-testing';
    public continuosintegration = '#continuous-integration-embedding';
    public trafficanalysis = '#traffic-markup-analysis';
    public Windows = '#windows';
    public MacOS = '#macos';
    public Linux = '#linux';
    public preferedinterface = '#preferred-interface';
    static waitForTimeout: any;
    
    constructor(){
        super();
    }

    async setSearchBox(text: string) {
     
        await this.driver.Page.fill(this.searchbox, text);
    }

   async clickButton() {
        await this.driver.Page.click(this.populateButton);
    }

    async selectInterface(locator: string, interf: string) {
        
        await this.driver.Page.locator('#preferred-interface').selectOption(interf)
    }
    async selectOperatingSystem(locator:string) {
        await this.driver.Page.check(locator);
    }
    
    async selectImportantFeatures(Features: string[], locator:string) { 

    if (Features.includes('Support for testing on remote devices')){;
        await this.driver.Page.locator('#remote-testing').click();
      }
        if (Features.includes('Re-using existing JavaScript code for testing')) {;
        await this.driver.Page.locator('#reusing-js-code').click();
        }
        if (Features.includes('Running tests in background and/or in parallel in multiple browsers')) {;
        await this.driver.Page.locator('#background-parallel-testing').click();
        }
        if (Features.includes('Easy embedding into a Continuous integration system')) {;
        await this.driver.Page.locator('#continuous-integration-embedding').click();
        }
       if (Features.includes('Advanced traffic and markup analysis')) {
        await this.driver.Page.locator('#traffic-markup-analysis').click()
       }
       
    } 
async TestCafePage() {
    await this.driver.Page.waitForTimeout(7000);
    }


}


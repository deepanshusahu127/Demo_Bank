import { Loginpage } from "../page/loginpage";
import { expect,Page } from "playwright/test";
import {accountPage} from "../page/accountPage";
import testdata  from "../testdata/account.json";

type accountDetails =
{
    AccountName : string,
    InitialBalance : string
}
export class LoginAction{
    constructor(
        private readonly loginpage:Loginpage,
        private readonly accountPages: accountPage
    )
    {}
        async loginDetails(UserName:string,Password:string){
            await this.loginpage.username.fill(UserName)
            await this.loginpage.password.fill(Password)
            await this.loginpage.remainderme.check()
            await this.loginpage.loginbutton.click()
            await expect(this.loginpage.page).toHaveTitle('Bank Dashboard – SecureBank Demo | QA Playground');
            
        }

        // add Account scenario
        async addAccounts(UserName:string,Password:string,testdata: accountDetails)
        {

            //login
            await this.loginpage.username.fill(UserName)
            await this.loginpage.password.fill(Password)
            await this.loginpage.remainderme.check()
            await this.loginpage.loginbutton.click()

            // Add a new account
            await this.accountPages.addAccount.click();
            //await this.accountPages.page.waitForEvent('dialog');
            await this.accountPages.accountName.fill(testdata.AccountName)
            await this.accountPages.accountTypeDropDownClick.click()
            await this.accountPages.selectDropDown.click();
            await expect(this.accountPages.selectDropDown).toBeVisible();
            await this.accountPages.initialBalance.fill(testdata.InitialBalance)
            await this.accountPages.statusCheckBox.check();
            await this.accountPages.saveAccountButton.click();
            await this.accountPages.page.waitForLoadState('networkidle');
            // Step 3: Verify count increased by 1 (Best Practice)
            await expect(this.accountPages.accountVerify).toBeVisible();
        
            
        }
    }



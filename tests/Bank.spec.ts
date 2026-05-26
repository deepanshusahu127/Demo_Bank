import { test, expect } from '../src/fixture/fixture';
import testdata from "../src/testdata/login.json"
import accuntdata from  "../src/testdata/account.json"

test('Login with admin', async ({ page,appAction}) => {
    await page.goto(testdata.BaseURL)
    await appAction.login.loginDetails(testdata.loginDetails.username,testdata.loginDetails.password)
})

test('Create a new Account and verify Account count', async({page, appAction}) => {
    await page.goto(testdata.BaseURL)
    //await appAction.login.loginDetails(testdata.loginDetails.username,testdata.loginDetails.password);
    await appAction.login.addAccounts(testdata.loginDetails.username,testdata.loginDetails.password,accuntdata.accountDetails);
})


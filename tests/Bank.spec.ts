import { test, expect } from '../src/fixture/fixture';
import testdata from "../src/testdata/login.json"
test('Login with admin', async ({ page,appAction}) => {
    await page.goto(testdata.BaseURL)
    await appAction.login.loginDetails(testdata.loginDetails.username,testdata.loginDetails.password)
    


})

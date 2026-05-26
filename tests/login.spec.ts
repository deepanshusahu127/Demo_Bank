import {test} from "../src/fixture/fixture";
import testdata from "../src/testdata/login.json";

test("login to application", async ({page, appAction}) => {
    //login the applications
    await page.goto(testdata.BaseURL);
    await appAction.login.loginDetails(testdata.loginDetails.username,testdata.loginDetails.password);
})


test("logout  to application", async ({page, appAction}) => {
    //login the applications
    await page.goto(testdata.BaseURL);
    await appAction.login.verifylogout(testdata.loginDetails.username,testdata.loginDetails.password);
})


test("Create Account", async ({page, appAction}) => {
    //login the applications
    await page.goto(testdata.BaseURL);
    await appAction.login.createAccount(testdata.loginDetails.username,testdata.loginDetails.password,testdata.AccountName);
})

import {test} from "../src/fixture/fixture";
import testdata from "../src/testdata/login.json";

test("login to application", async ({page, appAction}) => {
    //login the applications
    await page.goto(testdata.BaseURL);
    await appAction.loginActions.loginToAcpplication(testdata.loginDetails);
})
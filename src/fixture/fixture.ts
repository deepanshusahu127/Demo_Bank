import {test as base, expect} from "@playwright/test";
import {loginAction} from "../action/loginaction";
import testdata from "../testdata/login.json";

type appActions = {
    loginActions : loginAction
}

type Fixtures = {
    appAction : appActions
}

export const test = base.extend<Fixtures>({
    appAction : async ({page}, use) => {
        const appAction : appActions = {
            loginActions : new loginAction(page)
        }
        await use(appAction);
    }
});

export {expect}
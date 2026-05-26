import { test as base, expect } from "@playwright/test";
import { LoginAction } from "../action/loginaction"
import { Loginpage } from "../page/loginpage";
import {accountPage} from "../page/accountPage";

type appActions = {
    
    login: LoginAction;
    //account: LoginAction
}
type Fixtures = {
    appAction : appActions;
    
}

export const test = base.extend<Fixtures>({
    appAction: async ({page}, use) => {
        const appAction: appActions = {
            
          login: new LoginAction(new Loginpage(page), (new accountPage(page)))
            
        }
        await use(appAction);
    }
})

export{expect};
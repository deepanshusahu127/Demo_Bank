import { test as base, expect } from "@playwright/test";
import { LoginAction } from "../action/loginaction"
import { Loginpage } from "../page/loginpage";

type appActions = {
    
    login: LoginAction;
}
type Fixtures = {
    appAction : appActions;
    
}

export const test = base.extend<Fixtures>({
    appAction: async ({page}, use) => {
        const appAction: appActions = {
            
            login: new LoginAction(new Loginpage(page))
            
        }
        await use(appAction);
    }
})

export{expect};
import { Loginpage } from "../page/loginpage";
import { expect,Page } from "playwright/test";
export class LoginAction{
    constructor(private readonly loginpage:Loginpage)
    {}
        async loginDetails(UserName:string,Password:string){
            await this.loginpage.username.fill(UserName)
            await this.loginpage.password.fill(Password)
            await this.loginpage.remainderme.check()
            await this.loginpage.loginbutton.click()
            await expect(this.loginpage.page).toHaveTitle('Bank Dashboard – SecureBank Demo | QA Playground');
            
        }
    }

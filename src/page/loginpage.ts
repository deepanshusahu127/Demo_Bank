import {Locator,Page} from "@playwright/test"
 export class Loginpage{
    readonly page:Page
    readonly username:Locator
    readonly password:Locator
    readonly remainderme:Locator
    readonly loginbutton:Locator
    readonly BankLogo:Locator
    constructor(page:Page){
        this.page=page;
        this.username=page.getByPlaceholder("Enter your username")
        this.password=page.getByPlaceholder("Enter your password")
        this.remainderme=page.locator("//button[@id='remember-me']")
        this.loginbutton=page.locator("//button[@id='login-btn']")
        this.BankLogo=page.locator("//span[@id='brand-name']")


}
}
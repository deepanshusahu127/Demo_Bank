import {Locator,Page} from "@playwright/test"
 export class DashBoardPage{
    readonly page:Page
    readonly dashboardbutton:Locator
    readonly password:Locator
    readonly remainderme:Locator
    readonly loginbutton:Locator
    readonly BankLogo:Locator
    constructor(page:Page){
        this.page=page;
        this.dashboardbutton=page.getByTestId("nav-dashboard")
        this.password=page.getByPlaceholder("Enter your password")
        this.remainderme=page.locator("//button[@id='remember-me']")
        this.loginbutton=page.locator("//button[@id='login-btn']")
        this.BankLogo=page.locator("//span[@id='brand-name']")


}
}
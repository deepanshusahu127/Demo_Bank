import {Locator,Page} from "@playwright/test"
 export class Loginpage{
    readonly page:Page
    readonly username:Locator
    readonly password:Locator
    readonly remainderme:Locator
    readonly loginbutton:Locator
    readonly BankLogo:Locator
    //dashboard
    readonly Total_balance:Locator
    readonly Active_Acounts:Locator
    readonly Total_transaction:Locator
    readonly LogoutButton:Locator
    //account
    readonly Addaccount:Locator
    readonly AccountName:Locator
    readonly Accountype:Locator
    readonly Selecttype:Locator
    readonly intialBalance:Locator
    readonly saveaccount:Locator
    readonly sucmsg:Locator
    constructor(page:Page){
        this.page=page;
        this.username=page.getByPlaceholder("Enter your username")
        this.password=page.getByPlaceholder("Enter your password")
        this.remainderme=page.locator("//button[@id='remember-me']")
        this.loginbutton=page.locator("//button[@id='login-btn']")
        this.BankLogo=page.locator("//span[@id='brand-name']")
        //dashboard
        this.Total_balance=page.locator("//div[@id='total-balance-title']")
        this.Active_Acounts=page.locator("//div[@id='accounts-count-title']")
        this.Total_transaction=page.locator("//div[@id='transactions-count-title']")
        this.LogoutButton=page.locator("//button[@id='logout-btn']")
        //create acccount
        this.Addaccount=page.locator("//a[@id='add-account-link']")
        this.AccountName=page.getByTestId("account-name-input")
        this.Accountype=page.locator("//button[@id='account-type']")
        this.Selecttype=page.locator('select[aria-hidden="true"]')
        this.intialBalance=page.getByTestId("initial-balance-input")
        this.saveaccount=page.getByTestId("save-account-button")
        this.sucmsg=page.locator("//div[text()='Account created successfully!']")
        

        


}
}
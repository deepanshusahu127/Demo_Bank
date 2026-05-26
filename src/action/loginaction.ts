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
        async verifylogout(UserName:string,Password:string){
            await this.loginpage.username.fill(UserName)
            await this.loginpage.password.fill(Password)
            await this.loginpage.remainderme.check()
            await this.loginpage.loginbutton.click()
            await expect(this.loginpage.page).toHaveTitle('Bank Dashboard – SecureBank Demo | QA Playground');
            await  expect(this.loginpage.Total_balance).toBeVisible();
            await expect(this.loginpage.Total_transaction).toBeVisible()
            await expect(this.loginpage.Active_Acounts).toBeVisible()
            await this.loginpage.LogoutButton.click()

        }
        async createAccount(UserName:string,Password:string,Name:string,Accounttype:string){
             await this.loginpage.username.fill(UserName)
            await this.loginpage.password.fill(Password)
            await this.loginpage.remainderme.check()
            await this.loginpage.loginbutton.click()
            await expect(this.loginpage.page).toHaveTitle('Bank Dashboard – SecureBank Demo | QA Playground');
            await this.loginpage.Addaccount.click()
            await this.loginpage.AccountName.fill(Name)
        
            await this.loginpage.Selecttype.selectOption({ value: "credit"})
            
            await  this.loginpage.intialBalance.fill("200")
            await this.loginpage.saveaccount.click()
            expect(this.loginpage.sucmsg).toBeVisible()
            


        }
    }

import {Page, Locator} from "@playwright/test";

export class loginPage {
    readonly page : Page;
    readonly username : Locator;
    readonly password : Locator;
    readonly loginButton : Locator;
    readonly userLoginValidation : Locator;


    constructor(page : Page) {
        this.page = page;
        this.username = page.getByRole('textbox', {name: 'Username'});
        this.password = page.getByPlaceholder('Enter your password');
        this.loginButton = page.locator('//button[@id="login-btn"]');
        this.userLoginValidation = page.locator('//span[@id="username-display" and contains(text(), "admin")]')
    }
}
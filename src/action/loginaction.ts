import {Page, expect} from "@playwright/test";
import {loginPage} from "../page/loginpage";
import testdata from "../testdata/login.json";

type loginDetails = {
    username : string,
    password : string,
}

export class loginAction {
    private readonly loginPages : loginPage;

    constructor(page:Page)
    {
        this.loginPages = new loginPage(page); 
    }


    async loginToAcpplication(testdata: loginDetails) 
    {
        await this.loginPages.username.fill(testdata.username);
        await this.loginPages.password.fill(testdata.password);
        await expect(this.loginPages.loginButton).toBeVisible();
        await this.loginPages.loginButton.click();
        await expect(this.loginPages.userLoginValidation).toBeVisible();
    }
}
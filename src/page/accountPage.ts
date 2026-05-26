import {Page, Locator} from "@playwright/test"

export class accountPage
{
    // add account
    readonly page: Page;
    readonly addAccount: Locator
    readonly accountName: Locator
    readonly accountTypeDropDownClick: Locator;
    readonly selectDropDown: Locator
    readonly initialBalance: Locator;
    readonly statusCheckBox: Locator
    readonly saveAccountButton: Locator;
    readonly accountVerify : Locator;



    readonly accountURL : Locator    
    readonly totalAccountVerification : Locator

    constructor(page:Page)
    {
        // add account
        this.page = page;
        this.addAccount = page.locator('//a[@id="add-account-link"]')
        this.accountName = page.locator('//input[contains(@placeholder, "e.g., My Savings Account")]')
        this.accountTypeDropDownClick = page.locator('//button[@id="account-type"]')
        this.selectDropDown = page.locator('//span[contains(text(), "Savings Account")]')
        this.initialBalance = page.locator('//input[@id="initial-balance"]')
        this.statusCheckBox = page.locator('//button[@id="status-active"]')
        this.saveAccountButton = page.locator('//button[@id="save-account-btn"]')
        this.accountVerify = page.locator('//a[contains(text() , "Aditya Birla")]')


        this.accountURL = page.locator('//a[@id="nav-transactions"]/preceding::a[@href="/bank/accounts"]')
        this.totalAccountVerification = page.locator('')
    }
}
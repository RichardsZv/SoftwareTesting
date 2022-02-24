import {BasePage} from '../pageobjects/basePage';
import {CreateAccountPage} from "../pageobjects/createAccountPage";
import {CheckEmailPage} from '../pageobjects/checkEmailPage'

class Pages{
    constructor(){
        this.basePage = new BasePage();//we assign base page
        this.createAccountPage = new CreateAccountPage();
        this.checkEmailPage = new CheckEmailPage();
    }
}

export const pages = new Pages();



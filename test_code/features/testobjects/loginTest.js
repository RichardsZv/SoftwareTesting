import { pages } from "../support/pages";

export class LoginTest {
    async fillEmailField(email){
        await pages.basePage.getEmailInputField().setValue(email);
    }

    async fillPosswordField(password){
        await pages.basePage.getPasswordInputField().setValue(password);
    }

    async assertInvalidCardentialsMsg(){
        await pages.basePage.getInvalidCredentialsMsg().waitForDisplayed({timeout: 5000});
        await expect(pages.basePage.getInvalidCredentialsMsg()).toHaveText("Invalid username and/or password.");
    }
}
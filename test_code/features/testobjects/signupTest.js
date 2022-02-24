import { pages } from "../support/pages";
import { data } from "../support/data";

export class SignupTest {
   async fillOutCreateAccountForm(){
       if(await pages.createAccountPage.getCookieFrame().isDisplayed({timeout: 5000})){
           await browser.switchToFrame(await pages.createAccountPage.getCookieFrame());
           await pages.createAccountPage.getAcceptCookiesButton().click();
       }

       await pages.createAccountPage.getInputField("email").setValue(await data.userData.OracleUser.email);
       await pages.createAccountPage.getInputField("password").setValue(await data.userData.OracleUser.password);
       await pages.createAccountPage.setDropdownValue("country", await data.userData.OracleUser.country);
       await pages.createAccountPage.setDropdownValue("state", await data.userData.OracleUser.state);
       await pages.createAccountPage.getInputField("retypePassword").setValue(await data.userData.OracleUser.password);
       await pages.createAccountPage.getInputField("firstName").setValue(await data.userData.OracleUser.firstName);
       await pages.createAccountPage.getInputField("lastName").setValue(await data.userData.OracleUser.lastName);
       await pages.createAccountPage.getInputField("jobTitle").setValue(await data.userData.OracleUser.jobTitle);
       await pages.createAccountPage.getInputField("workPhone").setValue(await data.userData.OracleUser.phone);
       await pages.createAccountPage.getInputField("companyName").setValue(await data.userData.OracleUser.company);
       await pages.createAccountPage.getInputField("address1").setValue(await data.userData.OracleUser.address);
       await pages.createAccountPage.getInputField("city").setValue(await data.userData.OracleUser.city);
       await pages.createAccountPage.getInputField("postalCode").setValue(await data.userData.OracleUser.postcode);
   }

    async assertCheckEmailPage() {
        await pages.checkEmailPage.getCheckEmailHeader().waitForDisplayed({ timeout: 5000 });
        await expect(await pages.checkEmailPage.getEmailText()).toHaveText(`We sent an email to ${await data.userData.OracleUser.email} with a button to verify your email address.`);
    }
}
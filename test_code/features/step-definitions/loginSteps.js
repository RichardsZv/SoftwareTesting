import { Given, When, Then } from "@wdio/cucumber-framework";
import {tests} from "../support/tests";

When("User inputs wrong email", async function () {
  await tests.loginTest.fillEmailField("sdafasgh@gmail.com");
});

When("User inputs wrong password", async function () {
  await tests.loginTest.fillPosswordField("dasgdsag");
});

Then("User sees invalid credentials message", async function () {
  await tests.loginTest.assertInvalidCardentialsMsg();
});

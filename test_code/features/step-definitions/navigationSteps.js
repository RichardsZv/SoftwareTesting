import { Given, When, Then } from "@wdio/cucumber-framework";
import {tests} from "../support/tests"

//For log in
Given("User has opened Oracle Profile page", async function () {
  await tests.navigationTest.openOracleProfilePage();
});

When("User presses sign in button", async function () {
  await tests.navigationTest.pressSignInButton();
});

//For signup
When("User presses the Create Account button", async function () {
  await tests.navigationTest.pressCreateAccountButton();
});

When("User presses Create Account button", async function () {
  await tests.navigationTest.pressSignUpButton();
});

Then("User is redirected to Check Your Email page", async function () {
  await tests.signupTest.assertCheckEmailPage();
});
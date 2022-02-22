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
  console.log("User presses the Create Account button");
});

When("User presses Create Account button", async function () {
  console.log("User presses Create Account button");
});

Then("User is redirected to Check Your Email page", async function () {
  console.log("User is redirected to Check Your Email page");
});
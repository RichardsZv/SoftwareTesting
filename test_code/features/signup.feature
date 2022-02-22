Feature: Oracle sign up test

Scenario: Sign up with new user
    Given User has opened Oracle Profile page
    When User presses the Create Account button
    And User fills out Create Account form
    And User presses Create Account button
    Then User is redirected to Check Your Email page

    
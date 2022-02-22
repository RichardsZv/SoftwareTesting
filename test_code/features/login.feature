Feature: Oracle Login test

Scenario Outline: Invalid login with user
  Given User has opened Oracle Profile page
  When User inputs <email> as the email
  And User inputs <password> as the password
  And User presses sign in button
  Then User sees invalid credentials message

  Examples:
    | email                 | password  |
    | dsagfghjkas@gmail.com | 124123521 |
    | gdsageasghj@gmail.com | 21423155  |
    | gdsags@gmail.com      | 21423     |
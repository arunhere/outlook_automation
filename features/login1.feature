Feature: Test Login functionality

  Scenario: Login with valid credentials
    # Given user enters username "gokulnathm+dev1@pando.ai" and password "Gopal@123" with URL "https://outlook.live.com/owa"
    Given user navigates to outlook "https://outlook.live.com/owa"
    When user enter the user name
    Then click on sign in button
    And user enter password on the password page
    Then click again on sign in button
    And user lands on the home page 
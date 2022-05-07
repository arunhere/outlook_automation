Feature: Test Login functionality

  Scenario: Login outlook with valid credentials and send a test mail
    Given user navigates to outlook "https://outlook.live.com/owa" and enteres the username "arun27.here@outlook.com" and password "Welcomepassword@1"
    When user clicks the new message button and enters the To email "arun27.here@outlook.com" and send the email
    Then open the inbox and check for the received email and open the email

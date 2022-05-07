const assert = require('assert');
const { login, composeEmail, checkEmail, closeDriver } = require('../../selenium/send_email_outlook');

const { Given, When, Then } = require('@cucumber/cucumber');

Given('user navigates to outlook {string} and enteres the username {string} and password {string}', { timeout: 80000 }, async function (url, username, password) {
  console.log(url, username, password);
  await login(url, username, password);
  return true;
});

When('user clicks the new message button and enters the To email {string} and send the email', { timeout: 80000 }, async function (toEmail) {
  await composeEmail(toEmail);
  return true;
});

Then('open the inbox and check for the received email and open the email', { timeout: 80000 }, async function () {
  await checkEmail();
  await closeDriver();
  return true;
});

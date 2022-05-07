const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
const chromedriver = require('chromedriver');
const assert = require('assert');
let driver = new Builder().forBrowser('chrome').build();
const sleep = async (milliseconds) => {
    return new Promise((resolve) => setTimeout(() => resolve(), milliseconds));
};

const login = async (url, username, password) => {
    await sleep(2000)
    await driver.get(url);
    await sleep(5000)
    await driver.findElement(By.xpath("//*[text()='Sign in']")).click();
    await sleep(5000)
    await driver.findElement(By.name('loginfmt')).sendKeys(username);
    await driver.findElement(By.xpath("//input[@type='submit']")).click();
    await driver.findElement(By.name('passwd')).sendKeys(password);
    await sleep(2000)
    await driver.findElement(By.xpath("//input[@type='submit']")).click();
    await driver.findElement(By.id('KmsiCheckboxField')).click();
    await driver.findElement(By.xpath("//input[@type='submit']")).click();
    await sleep(10000)
    return true;
};

const composeEmail = async (toMail) => {
    await driver.findElement(By.xpath("//*[text()='New message']")).click();
    await sleep(5000)
    await driver.findElement(By.xpath('//*[contains(@class,"ms-BasePicker-input pickerInput")]')).sendKeys("arun27.here@outlook.com");
    await driver.findElement(By.xpath('//*[contains(@title,"Send")]')).click();
    await sleep(3000)
    await driver.findElement(By.xpath("//*[contains(@class,'ms-Dialog-action')]//span[text()='Send']")).click();
    await sleep(2000)
    return true;
};

const checkEmail = async () => {
    await sleep(10000)
    await driver.findElement(By.xpath("//div[@role='listbox']/div[contains(@class,'customScrollBar')]/div/div")).click();
    await sleep(3000)
    let textvalue = await driver.findElement(By.xpath("//*[@class='wide-content-host']/descendant::span[text()='Arunkumar Annadurai']")).getText();
    assert.equal('Arunkumar Annadurai', textvalue)
    return true;
};

const closeDriver = async () => {
    await driver.quit();
    return true;
};

module.exports = {
    login,
    composeEmail,
    checkEmail,
    closeDriver,
};

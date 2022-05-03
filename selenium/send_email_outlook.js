const { Builder, Browser, By, Key, until } = require('selenium-webdriver');
const chromedriver = require('chromedriver');
const assert = require('assert');
let driver = new Builder().forBrowser('chrome').build();
async function sleep(milliseconds) {
    return new Promise((resolve) => setTimeout(() => resolve(), milliseconds));
}
async function website() {
    await driver.get('https://outlook.live.com/owa');
    await sleep(5000)
    await driver.findElement(By.xpath("//*[text()='Sign in']")).click();
    await sleep(5000)
    await driver.findElement(By.name('loginfmt')).sendKeys("arun27.here@outlook.com");
    await driver.findElement(By.xpath("//input[@type='submit']")).click();
    await driver.findElement(By.name('passwd')).sendKeys("Welcomepassword@1");
    await sleep(2000)
    await driver.findElement(By.xpath("//input[@type='submit']")).click();
    await driver.findElement(By.id('KmsiCheckboxField')).click();
    await driver.findElement(By.xpath("//input[@type='submit']")).click();
    await sleep(5000)
}
async function dashboardAction() {
    await driver.findElement(By.xpath("//*[text()='New message']")).click();
    await sleep(2000)
    await driver.findElement(By.xpath('//*[contains(@class,"ms-BasePicker-input pickerInput")]')).sendKeys("arun27.here@outlook.com");
    await driver.findElement(By.xpath('//*[contains(@title,"Send")]')).click();
    await sleep(3000)
    await driver.findElement(By.xpath("//*[contains(@class,'ms-Dialog-action')]//span[text()='Send']")).click();
    await sleep(2000)
    // await driver.findElement(By.xpath('//span [text()="Inbox"]')).click();
    // await sleep(3000)
    await driver.findElement(By.xpath("//div[@role='listbox']/div[contains(@class,'customScrollBar')]/div/div")).click();
    await sleep(3000)
    let textvalue = await driver.findElement(By.xpath("//*[@class='wide-content-host']/descendant::span[text()='Arunkumar Annadurai']")).getText();
    assert.equal('Arunkumar Annadurai', textvalue)
}

website().then(() => {
    console.log("launched the page")
    dashboardAction().then(async () => {
        console.log("action and assertion success")
        await driver.quit();
    }).catch((err) => {
        console.log(err + "failed")
    })
}).catch((err) => {
    console.log(err + "failed")
})
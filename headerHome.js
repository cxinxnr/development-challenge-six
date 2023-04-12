const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const assert = require('assert')
const service = ()=> chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());


async function run() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get("https://qa.medcloud.link/")
    await driver.executeScript("window.scrollBy(0, 4000);")
    await driver.sleep(3000)
    await driver.findElement(By.id("headerHome")).click()
    await driver.sleep(2000)
    const currentPosition = await driver.executeScript('return window.pageYOffset;');
if (currentPosition == 0) {
    console.log('A página rolou ate a seção certa');
} else {
    console.log('A página não rolou até a seção certa');
}
    
}
run();
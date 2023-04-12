const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const assert = require('assert')
const service = ()=> chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());


async function run() {
    let driver = await new Builder().forBrowser('chrome').build()
    await driver.get("https://qa.medcloud.link/")
    await driver.findElement(By.id("headerPlans")).click()
    await driver.sleep(4000)
    const currentPosition = await driver.executeScript('return window.pageYOffset;');
 
if (currentPosition == 13156) {
    console.log('A página rolou ate a seção certa');
} else {
    console.log('A página não rolou até a seção certa');
}
    
}
run();
// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Header-Entrar', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Header-Entrar', async function() {
    await driver.get("https://qa.medcloud.link/")
    await driver.findElement(By.xpath("//*[@id=\"__next\"]/nav/div[5]/button[2]")).click()
  })
})

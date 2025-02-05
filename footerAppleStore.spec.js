// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Footer-AppleStore', function() {
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
  it('Footer-AppleStore', async function() {
    await driver.get("https://qa.medcloud.link/")
    {
      const attribute = await driver.findElement(By.xpath("//*[@id=\"__next\"]/section[7]/section/div[1]/div[2]/div[3]/ul/li[1]/a")).getAttribute("href")
      vars["x"] = attribute
    }
    assert(vars["x"].toString() == "https://apps.apple.com/br/app/medcloud-2-0/id1486223140")
    await driver.findElement(By.css(".sm\\3Aw-full:nth-child(5) li:nth-child(1) > a")).click()
  })
})

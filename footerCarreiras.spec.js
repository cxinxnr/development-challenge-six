// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Footer-Carreiras', function() {
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
  it('Footer-Carreiras', async function() {
    await driver.get("https://qa.medcloud.link/")
    {
      const attribute = await driver.findElement(By.xpath("//*[@id=\"__next\"]/section[7]/section/div[1]/div[2]/div[2]/ul/li[2]/a")).getAttribute("href")
      vars["x"] = attribute
    }
    assert(vars["x"].toString() == "careers.html")
    await driver.findElement(By.linkText("Carreiras")).click()
    await driver.sleep(2000)
    assert(await driver.findElement(By.css(".sm\\3Atext-left")).getText() == "Faça parte do Time Medcloud!")
  })
})

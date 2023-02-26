const { assert } = require('assert');
const { Given, When, Then, AfterAll } = require('@cucumber/cucumber');
const{Builder, By, until}=require('selenium-webdriver');

let driver=new Builder().forBrowser('chrome').build();

Given('User is on library app page', async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.get("https://library-app.firebaseapp.com");
    
});



When('User enter email in email field',async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.findElement(By.xpath("//input[@id='ember26']")).sendKeys('abc@gmail.com');

});


When('Clicks on invitation button',async function () {
    // Write code here that turns the phrase above into concrete actions
    await driver.findElement(By.xpath("//button[contains(text(),'Request invitation')]")).click();
    await driver.sleep(3000);
});


Then('Display success message',async function () {
    // Write code here that turns the phrase above into concrete actions
    let successText=await driver.findElement(By.xpath("//div[contains(text(),'Thank you! We saved')]"));
    await driver.wait(until.elementIsVisible(successText),30000,'After every 30 sec',5000);
    
});

AfterAll(async function(){
    driver.quit();
});
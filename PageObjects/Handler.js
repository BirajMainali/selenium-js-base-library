import {until} from "selenium-webdriver";

export default class Handler {

    confirm_alert = async () => {
        await driver.wait(until.alertIsPresent());
        const alert = await driver.switchTo().alert();
        await alert.accept();
    }


    handle_prompt = async () => {
        await driver.wait(until.alertIsPresent())
        const alert = await driver.switchTo().alert();
        await alert.sendKeys("web automation");
    }
}
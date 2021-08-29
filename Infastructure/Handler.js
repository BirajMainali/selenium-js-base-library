import {until} from "selenium-webdriver";
import BasePage from "./BasePage.js";

export default class Handler {

    confirm_alert = async () => {
        await new BasePage().sleep(1)
        await driver.wait(until.alertIsPresent());
        const alert = await driver.switchTo().alert();
        await alert.accept();
        await new BasePage().sleep(2)
    }


    handle_prompt = async () => {
        await new BasePage().sleep(1)
        await driver.wait(until.alertIsPresent())
        const alert = await driver.switchTo().alert();
        await alert.sendKeys("web automation");
        await new BasePage().sleep(1)
    }

}
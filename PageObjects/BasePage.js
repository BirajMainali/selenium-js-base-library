import {Builder, By, Key, until} from 'selenium-webdriver';

const driver = new Builder().forBrowser('firefox').build();
export default class BasePage {
    constructor() {
        global.driver = driver;
    }

    /**
     * @param URL
     * @returns {Promise<void>}
     */
    go_to_url = async (URL) => {
        await driver.get(URL);
    }

    /**
     *
     * @param css
     * @param searchText
     * @returns {Promise<void>}
     */
    enter_text_by_css = async (css, searchText) => {
        await driver.findElement(By.css(css)).sendKeys(searchText);
    }
    /**
     *
     * @param Xpath
     * @returns {Promise<void>}
     */
    click_by_Xpath = async (Xpath) => {
        await driver.findElement(By.xpath(Xpath)).click();
    }

    /**
     *
     * @param id
     * @returns {Promise<void>}
     */

    click_by_Id = async (id) => {
        await driver.findElement(By.id(id)).click();
    }

    find_by_className = async (className) => {
        await driver.findElement({className: className});
    }

    /**
     *
     * @param className
     * @returns {Promise<void>}
     */
    clear_input_by_className = async (className) => {
        await driver.findElement({className: className}).clear();
    }
    /**
     *
     * @param Xpath
     * @returns {Promise<void>}
     */
    find_By_Xpath = async (Xpath) => await driver.findElement(By.xpath(Xpath));

    /**
     *
     * @param className
     * @param input
     * @returns {Promise<void>}
     */
    send_keys_by_className = async (className, input) => {
        await this.clear_input_by_className(className);
        await driver.findElement({className: className}).sendKeys(input);
    }

    /**
     *
     * @param className
     * @returns {Promise<void>}
     */
    click_by_className = async (className) => {
        await driver.findElement(By.className(className)).click();
    }

    /**
     *
     * @param Xpath
     * @param input
     * @returns {Promise<void>}
     */
    send_keys_by_Xpath = async (Xpath, input) => {
        await driver.findElement(By.xpath(Xpath)).sendKeys(input, Key.RETURN);
    }

    /**
     *
     * @param second
     */
    sleep = (second) => new Promise(resolve => setTimeout(resolve, (second * 1000)));

    /**
     *
     * @returns {Promise<void>}
     * @constructor
     */
    ConfirmAlert = async () => {
        await driver.wait(until.alertIsPresent());
        const alert = await driver.switchTo().alert();
        await alert.accept();
    }
}
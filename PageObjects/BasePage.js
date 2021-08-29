import {Builder, By, Key} from 'selenium-webdriver';

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

    find_element_by_className = async (className) => {
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
     * @param xpath
     * @returns {Promise<void>}
     */
    find_element_by_xpath = async (xpath) => await driver.findElement(By.xpath(xpath));

    /**
     *
     * @param className
     * @param input
     * @returns {Promise<void>}
     */
    enter_text_by_className = async (className, input) => {
        await this.clear_input_by_className(className);
        await driver.findElement({className: className}).sendKeys(input);
    }

    /**
     *
     * @param xpath
     * @returns {Promise<T>}
     */
    get_text_by_xpath = async (xpath) => await driver.findElement(By.xpath(xpath)).getText().then((value) => value);

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
     * @param xpath
     * @param input
     * @returns {Promise<void>}
     */
    enter_text_by_xpath = async (xpath, input) => {
        await driver.findElement(By.xpath(xpath)).sendKeys(input, Key.RETURN);
    }

    /**
     *
     * @param second
     */
    sleep = (second) => new Promise(resolve => setTimeout(resolve, (second * 1000)));


}
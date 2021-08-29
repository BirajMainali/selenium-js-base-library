import {Builder, By, Key} from 'selenium-webdriver';

const driver = new Builder().forBrowser('firefox').build();
export default class BasePage {
    constructor() {
        global.driver = driver;
    }


    scroll_top_to_bottom = async () => {
        await this.sleep(0.5);
        await driver.executeScript("window.scrollTo({  top: 10000000,left: 100,behavior: 'smooth' });");
        await this.sleep(1);
    }

    /**
     *
     * @param id
     * @returns {Promise<T>}
     */
    get_text_by_id = async (id) => await driver.findElement(By.id(id)).getText().then((value) => value);

    /***
     *
     * @param name
     * @returns {Promise<void>}
     */
    click_by_name = async (name) => {
        await this.sleep(1);
        await driver.findElement(By.name(name)).click();
    }

    /**
     *
     * @param name
     * @param text
     * @returns {Promise<void>}
     */
    enter_text_and_return_by_name = async (name, text) => {
        await this.sleep(1);
        await driver.findElement(By.name(name)).sendKeys(text, Key.RETURN);
    }


    /**
     *
     * @param id
     * @param text
     * @returns {Promise<void>}
     */

    enter_text_and_return_by_id = async (id, text) => {
        await this.sleep(1);
        await driver.findElement(By.id(id)).sendKeys(text, Key.RETURN);
    }
    /**
     *
     * @param name
     * @param text
     * @returns {Promise<void>}
     */

    enter_text_by_name = async (name, text) => {
        await driver.findElement(By.name(name)).sendKeys(text);
    }

    /**
     *
     * @param id
     * @param text
     * @returns {Promise<void>}
     */
    enter_text_by_Id = async (id, text) => {
        await this.sleep(1);
        await driver.findElement(By.id(id)).sendKeys(text);
    }

    /**
     * @param URL
     * @returns {Promise<void>}
     */
    go_to_url = async (URL) => {
        await this.sleep(1);
        await driver.get(URL);
    }

    /**
     *
     * @param css
     * @param searchText
     * @returns {Promise<void>}
     */
    enter_text_by_css = async (css, searchText) => {
        await this.sleep(1);
        await driver.findElement(By.css(css)).sendKeys(searchText);
    }
    /**
     *
     * @param xpath
     * @returns {Promise<void>}
     */
    click_by_xpath = async (xpath) => {
        await this.sleep(1);
        await driver.findElement(By.xpath(xpath)).click();
    }

    /**
     *
     * @param id
     * @returns {Promise<void>}
     */

    click_by_Id = async (id) => {
        await this.sleep(1);
        await driver.findElement(By.id(id)).click();
    }
    /**
     *
     * @param className
     * @returns {Promise<void>}
     */
    find_element_by_className = async (className) => {
        await driver.findElement({className: className});
    }

    /**
     *
     * @param className
     * @returns {Promise<void>}
     */
    clear_input_by_className = async (className) => {
        await this.sleep(1);
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
    get_text_by_xpath = async (xpath) => {
        await this.sleep(2);
        return await driver.findElement(By.xpath(xpath)).getText().then((value) => value);
    }

    /**
     *
     * @param className
     * @returns {Promise<void>}
     */
    click_by_className = async (className) => {
        await this.sleep(1);
        await driver.findElement(By.className(className)).click();
    }

    /**
     *
     * @param xpath
     * @param input
     * @returns {Promise<void>}
     */
    enter_text_by_xpath = async (xpath, input) => {
        await this.sleep(1);
        await driver.findElement(By.xpath(xpath)).sendKeys(input, Key.RETURN);
    }

    /**
     *
     * @param second
     */
    sleep = (second) => new Promise(resolve => setTimeout(resolve, (second * 1000)));


}

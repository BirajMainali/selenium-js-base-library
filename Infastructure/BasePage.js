import {Builder, By, Key} from 'selenium-webdriver';

const driver = new Builder().forBrowser('firefox').build();
export default class BasePage {
    constructor() {
        global.driver = driver;
    }

    /**
     * back to previous page
     * @returns {Promise<void>}
     */
    back = async () => {
        await this.sleep(2);
        await driver.executeScript(`window.history.back()`);
    }

    /**
     * Move forward to previous page
     * @returns {Promise<void>}
     */
    forward = async () => {
        await this.sleep(2);
        await driver.executeScript(`window.history.forward()`);
    }

    /**
     * fill all the input field by type
     * @param is_string_amount
     * @returns {Promise<void>}
     */

    fill_form = async (is_string_amount = false) => {
        await this.sleep(2);
        await driver.executeScript(`
        const form_input_elem = document.querySelectorAll('input');
          for (let i = 0; i < form_input_elem.length; i++) {
          const elem = form_input_elem[i];
          if (elem.type === "text") {
            if (${is_string_amount}) {
              elem.value = 100;
            } else {
              elem.value = "auto complete [i]";
            }
          } else if (elem.type === "email") {
            elem.value = "auto@gmail.com";
          } else if (elem.type === "radio" || elem.type == "checkbox") {
            elem.value = true;
          } else if (elem.type === "tel") {
            elem.value = 98000000;
          } else if (elem.type === "number") {
            elem.value = 100;
          }
        }`);
        await this.sleep(2);
    }

    /**
     * scroll browser window top to bottom
     * @returns {Promise<void>}
     */
    scroll_top_to_bottom = async () => {
        await this.sleep(0.5);
        await driver.executeScript("window.scrollTo({  top: 10000000,left: 100,behavior: 'smooth' });");
        await this.sleep(1);
    }

    /**
     * get element value by id
     * @param id
     * @returns {Promise<T>}
     */
    get_text_by_id = async (id) => await driver.findElement(By.id(id)).getText().then((value) => value);

    /***
     * click any element by its name attribute
     * @param name
     * @returns {Promise<void>}
     */
    click_by_name = async (name) => {
        await this.sleep(1);
        await driver.findElement(By.name(name)).click();
    }

    /**
     * enter text and press enter by name attribute
     * @param name
     * @param text
     * @returns {Promise<void>}
     */
    enter_text_and_return_by_name = async (name, text) => {
        await this.sleep(1);
        await driver.findElement(By.name(name)).sendKeys(text, Key.RETURN);
    }


    /**
     * enter text and press by id attribute
     * @param id
     * @param text
     * @returns {Promise<void>}
     */

    enter_text_and_return_by_id = async (id, text) => {
        await this.sleep(1);
        await driver.findElement(By.id(id)).sendKeys(text, Key.RETURN);
    }

    /**
     * enter text by name attribute
     * @param name
     * @param text
     * @returns {Promise<void>}
     */

    enter_text_by_name = async (name, text) => {
        await driver.findElement(By.name(name)).sendKeys(text);
    }

    /**
     * enter text by id attribute
     * @param id
     * @param text
     * @returns {Promise<void>}
     */
    enter_text_by_Id = async (id, text) => {
        await this.sleep(1);
        await driver.findElement(By.id(id)).sendKeys(text);
    }

    /**
     * goto next new url
     * @param URL
     * @returns {Promise<void>}
     */
    go_to_url = async (URL) => {
        await this.sleep(1);
        await driver.get(URL);
    }

    /**
     * enter text by class selector
     * @param css
     * @param searchText
     * @returns {Promise<void>}
     */
    enter_text_by_css = async (css, searchText) => {
        await this.sleep(1);
        await driver.findElement(By.css(css)).sendKeys(searchText);
    }

    /**
     * click target element by Xpath
     * @param xpath
     * @returns {Promise<void>}
     */
    click_by_xpath = async (xpath) => {
        await this.sleep(1);
        await driver.findElement(By.xpath(xpath)).click();
    }

    /**
     * click target element by its id attribute
     * @param id
     * @returns {Promise<void>}
     */

    click_by_Id = async (id) => {
        await this.sleep(1);
        await driver.findElement(By.id(id)).click();
    }

    /**
     * fine element by its classname
     * @param className
     * @returns {Promise<void>}
     */
    find_element_by_className = async (className) => {
        await driver.findElement({className: className});
    }

    /**
     * clear input value | text by classname
     * @param className
     * @returns {Promise<void>}
     */
    clear_input_by_className = async (className) => {
        await this.sleep(1);
        await driver.findElement({className: className}).clear();
    }

    /**
     * find target element by Xpath
     * @param xpath
     * @returns {Promise<void>}
     */
    find_element_by_xpath = async (xpath) => await driver.findElement(By.xpath(xpath));

    /**
     * clear previous text and fill new text by class name
     * @param className
     * @param input
     * @returns {Promise<void>}
     */
    enter_text_by_className = async (className, input) => {
        await this.clear_input_by_className(className);
        await driver.findElement({className: className}).sendKeys(input);
    }

    /**
     * get text content by Xpath
     * @param xpath
     * @returns {Promise<T>}
     */
    get_text_by_xpath = async (xpath) => {
        await this.sleep(2);
        return await driver.findElement(By.xpath(xpath)).getText().then((value) => value);
    }

    /**
     * click target element by classname
     * @param className
     * @returns {Promise<void>}
     */
    click_by_className = async (className) => {
        await this.sleep(1);
        await driver.findElement(By.className(className)).click();
    }

    /**
     * enter a new text in target element and press ENTER | Key : 10
     * @param xpath
     * @param input
     * @returns {Promise<void>}
     */
    enter_text_by_xpath = async (xpath, input) => {
        await this.sleep(1);
        await driver.findElement(By.xpath(xpath)).sendKeys(input, Key.RETURN);
    }

    /**
     * wait for a second before performing new promise
     * @param second
     */
    sleep = (second) => new Promise(resolve => setTimeout(resolve, (second * 1000)));


}

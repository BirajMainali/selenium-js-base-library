import BasePage from "../Infastructure/BasePage.js";
import Handler from "../Infastructure/Handler.js";
import assert from "assert";


const input = Object.freeze({
    newTodo: "Fixing new bug by evening",
    updateTodo: "Fixing previous by night",
    complete_update_todo: "Bug has not been fixed"
})
export default class HomePage extends BasePage {

    constructor() {
        super();
        this.Handler = new Handler();
    }

    add_todo_adds = async () => {
        // todo Input element
        await this.enter_text_by_xpath('/html/body/div/div/div[2]/div[1]/div[1]/div/input', input.newTodo);
    }

    ensure_todo_added = async () => {
        const todo = await this.get_text_by_xpath("/html/body/div/div/div[2]/div[2]/table/tbody/tr/td[3]/span");
        assert.strictEqual(todo, input.newTodo);
    }

    edit_todo_edits = async () => {
        // enable for edit
        await this.click_by_xpath("/html/body/div/div/div[2]/div[2]/table/tbody/tr/td[4]/div/button[1]");
        // send update input
        await this.enter_text_by_className('editedContent', input.updateTodo);
        // saving changes
        await this.click_by_xpath('/html/body/div/div/div[2]/div[2]/table/tbody/tr/td[4]/div/button[1]');
    }

    complete_todo_completes = async () => {
        // clicking compete todo check box
        await this.click_by_xpath('/html/body/div/div/div[2]/div[2]/table/tbody/tr/td[2]/div/input');
    }

    edit_completed_todo_edits = async () => {
        // enable fo edit
        await this.click_by_xpath('/html/body/div/div/div[2]/div[2]/table/tbody/tr/td[4]/div/button[1]');
        // handling confirmation alert
        await this.Handler.confirm_alert();
        // sending new update input
        await this.enter_text_by_className('editedContent', input.complete_update_todo);
        // changing state complete to incomplete
        await this.click_by_xpath('/html/body/div/div/div[2]/div[2]/table/tbody/tr/td[2]/div/input');
        // clicking complete checkbox
        await this.click_by_xpath('/html/body/div/div/div[2]/div[2]/table/tbody/tr/td[4]/div/button[1]');
    }

    remove_todo_removes = async () => {
        // chinking remove button
        await this.click_by_xpath('/html/body/div/div/div[2]/div[2]/table/tbody/tr/td[4]/div/button[2]');
        // handling confirmation alert
        await this.Handler.confirm_alert();
    }


}
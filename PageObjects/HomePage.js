import BasePage from "./BasePage.js";

const input = Object.freeze({
    newTodo: "Fixing new bug by evening",
    updateTodo: "Fixing previous by night",
    complete_update_todo: "Bug has not been fixed"
})

export default class HomePage extends BasePage {


    add_todo_adds = async () => {
        // todo Input element
        await this.send_keys_by_Xpath('/html/body/div/div/div[2]/div[1]/div[1]/div/input', input.newTodo);
    }

    edit_todo_edits = async () => {
        await this.sleep(3);
        // enable for edit
        await this.click_by_Xpath("/html/body/div/div/div[2]/div[2]/table/tbody/tr/td[4]/div/button[1]");
        // send update input
        await this.send_keys_by_className('editedContent', input.updateTodo);
        await this.sleep(1);
        // saving changes
        await this.click_by_Xpath('/html/body/div/div/div[2]/div[2]/table/tbody/tr/td[4]/div/button[1]');
    }

    complete_todo_completes = async () => {
        await this.sleep(3);
        // clicking compete todo check box
        await this.click_by_Xpath('/html/body/div/div/div[2]/div[2]/table/tbody/tr/td[2]/div/input');
    }

    edit_completed_todo_enables = async () => {
        await this.sleep(3);
        // enable fo edit
        await this.click_by_Xpath('/html/body/div/div/div[2]/div[2]/table/tbody/tr/td[4]/div/button[1]');
        await this.sleep(2)
        // handling confirmation alert
        await this.ConfirmAlert();
        // sending new update input
        await this.send_keys_by_className('editedContent', input.complete_update_todo);
        // changing state complete to incomplete
        await this.click_by_Xpath('/html/body/div/div/div[2]/div[2]/table/tbody/tr/td[2]/div/input');
        await this.sleep(2)
        // clicking complete checkbox
        await this.click_by_Xpath('/html/body/div/div/div[2]/div[2]/table/tbody/tr/td[4]/div/button[1]');
    }

    remove_todo_removes = async () => {
        await this.sleep(5);
        // chinking remove button
        await this.click_by_Xpath('/html/body/div/div/div[2]/div[2]/table/tbody/tr/td[4]/div/button[2]');
        await this.sleep(2);
        // handling confirmation alert
        await this.ConfirmAlert();
    }


}
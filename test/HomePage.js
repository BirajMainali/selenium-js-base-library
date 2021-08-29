import HomePage from "../PageObjects/HomePage.js";
import BasePage from "../Infastructure/BasePage.js";


describe('This is the todo app testing box', function () {
    this.timeout(50000);
    beforeEach(async () => {
        const baseurl = 'https://birajmainali.github.io/Todo/';
        await new HomePage().go_to_url(baseurl);
    });

    afterEach(async () => {
        await new BasePage().sleep(2);
    });

    it('Adding new todo item', async () => {

        await new HomePage().add_todo_adds();
    });

    it('Ensure todo is added', async () => {
        await new HomePage().ensure_todo_added();
    });

    it('Editing added todo item', async () => {
        await new HomePage().edit_todo_edits();
    });

    it('Complete added todo item', async () => {
        await new HomePage().complete_todo_completes();
    });

    it('Enable completed todo item, Enables and Edit', async () => {
        await new HomePage().edit_completed_todo_edits();
    });

    it('Remove added todo', async () => {
        await new HomePage().remove_todo_removes();
        done();
    });
})
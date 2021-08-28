import HomePage from "../PageObjects/HomePage.js";


describe('This is the describe block', function () {
    this.timeout(50000);
    beforeEach(function () {
    });

    afterEach(function () {
    });

    it('Adding new todo item', async () => {
        const baseurl = 'https://birajmainali.github.io/Todo/';
        await new HomePage().go_to_url(baseurl);
        await new HomePage().add_todo_adds("Auto Added");
    });

    it('Editing added todo item', async () => {
        await new HomePage().edit_todo_edits();
    });

    it('Complete added todo item', async () => {
        await new HomePage().complete_todo_completes();
    });

    it('Enable for completed todo item', async () => {
        await new HomePage().edit_completed_todo_enables();
    });

    it('Remove added todo', async () => {
        await new HomePage().remove_todo_removes();
    });
})
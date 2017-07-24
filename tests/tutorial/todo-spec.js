describe('angular homepage todo list', function () {
    it('should add a todo', function () {
        browser.get('https://angularjs.org');

        // add item to todolist
        element(by.model('todoList.todoText')).sendKeys('write first protractor test');
        element(by.css('[value="add"]')).click();

        let todoList = element.all(by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(3);
        expect(todoList.get(2).getText()).toEqual('write first protractor test');

        // remove item from todolist
        todoList.get(2).element(by.css('input')).click();
        let completedAmount = element.all(by.css('.done-true'));
        expect(completedAmount.count()).toEqual(2);
    });
});
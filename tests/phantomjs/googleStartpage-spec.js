let fs = require('fs');

describe('check that start page has a title', function () {
    // execute before every test
    beforeEach(function () {
        browser.ignoreSynchronization = true;
        browser.get('https://www.google.de/');
    });

    // tests are here
    it('should have a title', function () {
        expect(browser.getTitle()).toEqual('Google');
    });

    it('should enter in search and check the search result', function () {
        browser.takeScreenshot().then(png => {
            let stream = fs.createWriteStream('./var/screens/startpage.png');
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
    });
});
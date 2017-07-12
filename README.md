# experiment-protractor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This os just a prototype for protractor.


# Requirements

You need [NodeJS](https://nodejs.org/en/) installed with [NPM](https://www.npmjs.com/) and [Yarn](https://yarnpkg.com/lang/en/).

_Optional_ you can also install the headless browser [PhantomJS](http://phantomjs.org/) but this isn't a common case as you normally want to test with real browsers.


## Setup

To get this project run just switch to the project folder an execute

```
yarn install
```

Afterwards get the webdriver installed with

```
webdriver-manager update
```

You can run the webdriver by executing

```
webdriver-manager start
```

You can check if the webdriver is running on [http://localhost:4444/wd/hub](http://localhost:4444/wd/hub).


## Angular Tutorial Test

_Ensure that the webdriver is running!_
The tests can be simple executed by running

```
./node_modules/.bin/protractor tests/tutorial/conf.js
```


## PhantomJS Test

To run these tests you need to run the PhantomJS webdriver instead of the webdriver coming with protractor.
You can achieve that (_if you have installed PhantomJS_) by executing

```
phantomjs --webdriver=9515
```

Then as before just execute protractor

```
./node_modules/.bin/protractor tests/phantomjs/conf.js 
```


## Using Protractor Without Angular

Protractor is looking for AngularJS by default. You can turn off that behaviour by adding the following line in your _spec_ file before you start requesting any url

```javascript
browser.ignoreSynchronization = true;
```

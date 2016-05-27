# gh-status-methods

[![NPM version](https://img.shields.io/npm/v/gh-status-methods.svg)](https://www.npmjs.com/package/gh-status-methods)
[![Build Status](https://travis-ci.org/shinnn/gh-status-methods.svg?branch=master)](https://travis-ci.org/shinnn/gh-status-methods)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/gh-status-methods.svg)](https://coveralls.io/github/shinnn/gh-status-methods)
[![Dependency Status](https://david-dm.org/shinnn/gh-status-methods.svg)](https://david-dm.org/shinnn/gh-status-methods)
[![devDependency Status](https://david-dm.org/shinnn/gh-status-methods/dev-status.svg)](https://david-dm.org/shinnn/gh-status-methods#info=devDependencies)

Get all methods in the [Github Status](https://status.github.com/) API

```javascript
const ghStatusMethods = require('gh-status-methods');

ghStatusMethods().then(({status_url, messages_url, last_message_url, daily_summary}) => {
  status_url; //=> 'https://status.github.com/api/status.json'
  messages_url; //=> 'https://status.github.com/api/messages.json'
  last_message_url; //=> 'https://status.github.com/api/last-message.json'
  daily_summary; //=> 'https://status.github.com/api/daily-summary.json'
});
```

## Installation

[Use npm.](https://docs.npmjs.com/cli/install)

```
npm install gh-status-methods
```

## API

```javascript
const ghStatusMethods = require('gh-status-methods');
```

### ghStatusMethods([*options*])

*options*: `Object` ([`Request` options](https://github.com/request/request#requestoptions-callback))  
Return: [`Promise`](http://www.ecma-international.org/ecma-262/6.0/#sec-promise-constructor) instance

It makes an API request to get all methods in the [Github Status API](https://status.github.com/api), and returns a promise.

The promise will be [*fulfilled*](https://promisesaplus.com/#point-26) with a [JSON object](https://developer.github.com/v3/rate_limit/#response) if successful, otherwise [*rejected*](https://promisesaplus.com/#point-30) with an error.

## License

Copyright (c) 2016 [Shinnosuke Watanabe](https://github.com/shinnn)

Licensed under [the MIT License](./LICENSE).

/*!
 * gh-status-methods | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/gh-status-methods
*/
'use strict';

const ghStatusGet = require('gh-status-get');

function extractBody({body}) {
  return body;
}

module.exports = function ghStatusMethods(options) {
  return ghStatusGet('api.json', options).then(extractBody);
};

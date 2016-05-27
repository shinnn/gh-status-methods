'use strong';

const ghStatusMethods = require('.');
const test = require('tape');

test('ghStatusMethods()', t => {
  t.plan(3);

  t.strictEqual(ghStatusMethods.name, 'ghStatusMethods', 'should have a function name.');

  ghStatusMethods().then(json => {
    t.deepEqual(
      json,
      {
        /* eslint-disable camelcase */
        daily_summary: 'https://status.github.com/api/daily-summary.json',
        last_message_url: 'https://status.github.com/api/last-message.json',
        messages_url: 'https://status.github.com/api/messages.json',
        status_url: 'https://status.github.com/api/status.json'
        /* eslint-enable camelcase */
      },
      'should get all methods in the Github Status API.'
    );
  });

  ghStatusMethods({method: 'POST'}).then(t.fail, err => {
    t.strictEqual(
      err.message.includes('Invalid `method` option: \'POST\'.'),
      true,
      'should pass its first argument to the underlying module.'
    );
  });
});

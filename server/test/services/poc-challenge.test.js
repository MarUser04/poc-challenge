const assert = require('assert');
const app = require('../../src/app');

describe('\'poc-challenge\' service', () => {
  it('registered the service', () => {
    const service = app.service('poc-challenge');

    assert.ok(service, 'Registered the service');
  });
});

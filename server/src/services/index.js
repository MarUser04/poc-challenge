const pocChallenge = require('./poc-challenge/poc-challenge.service.js');
const forms = require('./forms/forms.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(pocChallenge);
  app.configure(forms);
};

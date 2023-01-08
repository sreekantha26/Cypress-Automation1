const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl":"https://dev-rhipe-signup.azurewebsites.net/",
    //specPattern:'cypress/Integration/Examples/*.js'
    specPattern:'cypress/Integration/testcases/*.js'
  },
});

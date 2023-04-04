const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "xkvw9q",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

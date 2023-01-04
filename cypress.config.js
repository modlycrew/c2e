module.exports = {
  projectId: '9g6ao3',
  defaultTimeoutInterval: 10000,
  defaultCommandTimeout: 20000,
  numTestsKeptInMemory: 500,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    experimentalRunAllSpecs: true,
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: ['./examples/**/*.spec.js', 'src/**/*.test.js'],
  },
};

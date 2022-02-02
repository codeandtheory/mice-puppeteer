/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

module.exports = {
  rootDir: '.',
    testTimeout: 40000,
    globals: {
      URL: "https://dev2.venetianlasvegas.com/meetings"
    },
    testMatch: [
      '<rootDir>/*.test.js'
    ],
    "preset": "jest-puppeteer"
};

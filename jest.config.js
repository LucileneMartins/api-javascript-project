module.exports = {
    testTimeout: 20000,
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    "reporters": [
      "default",
      ["jest-html-reporters", {
        "publicPath": "./report",
        "filename": "report.html",
        "pageTitle":"Report Api-Test",
        "expand": true,
        "openReport": true
      }]

    ]
  };

  
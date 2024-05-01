module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  testMatch: ["**/*.test.js"],
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./html-report",
        filename: "report.html",
        expand: true,
      },
    ],
  ],
};

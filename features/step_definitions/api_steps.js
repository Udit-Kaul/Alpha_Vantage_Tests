const { Given, When, Then } = require("cucumber");
const axios = require("axios");
const { apiBaseUrl, apiKey } = require("./config");

require("dotenv").config();

let response;

Given("I have access to AlphaVantage API", function () {
  //No code required here, as the API_KEY is loaded from the .env file
});

When(
  "/^I request stock information for symbol (.*)$/",
  async function (symbol) {
    response = await fetchData(symbol);
  }
);

When(
  "I request stock information for an invalid symbol (.*)$/",
  async function (symbol) {
    response = await fetchData(symbol);
  }
);

Then(
  "/^I should receive a successful response with stock data containing symbol (.*)$/",
  function (symbol) {
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("Global Quote");
    const responseSymbol = response["Global Quote"]["01. symbol"];
    expect(responseSymbol).toBe(symbol);
  }
);

Then("I should receive an error response", function () {
  expect(response.status).toBe(404);
});

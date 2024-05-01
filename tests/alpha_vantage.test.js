/**
 * This file contains Jest-Cucumber test definitions for the AlphaVantage API.
 * The method blocks are intentionally left empty as the automation logic is defined in the step definitions (api_steps.js).
 * Jest-Cucumber uses these test definitions to map feature file scenarios to step definitions.
 * Each step in the feature files corresponds to a method block defined here.
 */

const { defineFeature, loadFeature } = require("jest-cucumber");
const feature = loadFeature("./features/alpha_vantage.feature");

defineFeature(feature, (test) => {
  test("Retrieve stock information for multiple symbols", ({
    given,
    when,
    then,
  }) => {
    given("I have access to AlphaVantage API", () => {});

    when(/^I request stock information for symbol (.*)$/, (arg0) => {});

    then(
      /^I should receive a successful response with stock data containing symbol (.*)$/,
      (arg0) => {}
    );
  });

  test("Retrieve invalid stock information", ({ given, when, then }) => {
    given("I have access to AlphaVantage API", () => {});

    when(
      /^I request stock information for an invalid symbol (.*)$/,
      (arg0) => {}
    );

    then("I should receive an error response", () => {});
  });
});

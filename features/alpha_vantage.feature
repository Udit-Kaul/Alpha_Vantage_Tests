Feature: AlphaVantage API Test
  As a user
  I want to test AlphaVantage API endpoints
  So that I can verify the functionality

  Scenario Outline: Retrieve stock information for multiple symbols
    Given I have access to AlphaVantage API
    When I request stock information for symbol "<symbol>"
    Then I should receive a successful response with stock data containing symbol <symbol>

    Examples:
      | symbol |
      | MSFT   |
      | GOOGL  |

  Scenario Outline: Retrieve invalid stock information
    Given I have access to AlphaVantage API
    When I request stock information for an invalid symbol <symbol>
    Then I should receive an error response

    Examples:
      | symbol      |
      | test        |
      | WronfSymbol |

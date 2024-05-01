#The test cases will be looking at the Quote Endpoint

```
Example API : https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo
```

#Positive Test Cases


## These tests verify that the function behaves as expected under normal conditions.
```
    Example :
    "Global Quote": {
        "01. symbol": "IBM",
        "02. open": "166.4900",
        "03. high": "166.7600",
        "04. low": "165.2605",
        "05. price": "166.2000",
        "06. volume": "6011634",
        "07. latest trading day": "2024-04-30",
        "08. previous close": "167.4300",
        "09. change": "-1.2300",
        "10. change percent": "-0.7346%"
  }
    ```

    -Valid Symbol: 
    ##Test Case Description: Verify that the API returns accurate stock data for a valid symbol.
    ###Pre-Conditions: API access and a known valid stock symbol (e.g., "AAPL").
    ###Test Steps:
        Send a request to the GlobalQuote function with the symbol "AAPL".
    ###Test Data: Symbol: "AAPL"
    ###Expected Result: The API returns real-time stock data for Apple Inc., including the price, volume, and other relevant information.
    Post Condition: N/A
        
    -Valid Symbol with Low Activity: 
      ##Test Case Description: Verify that the API returns accurate stock data for a stock symbol known for low trading activity 
    ###Pre-Conditions: API access and a known valid stock symbol (e.g., "AEAE").
    ###Test Steps:
        Send a request to the GlobalQuote function with the symbol "AEAE".
    ###Test Data: Symbol: "AEAE"
    ###Expected Result: The API returns real-time stock data for Altenergy Acquisition Corp, including the price, volume, and other relevant information.
    Post Condition: N/A    
    
    -Valid Symbol with High Activity: Test with a valid stock symbol known for low trading activity to ensure the API can handle different volumes of data.
    -Market Open: Test during the stock market's open hours to ensure real-time data is accurately fetched and returned.
    -Market Close: Test after the stock market has closed to verify that the last closing price is accurately fetched and returned.


Negative Test Cases

These tests check how the system handles invalid or unusual input.

    Invalid Symbol: Test with a stock symbol that does not exist (e.g., "XXXX") to ensure the API properly handles and returns an error or appropriate message.
    Empty Symbol: Test with an empty symbol parameter to check if the API handles it gracefully, potentially returning an error message.
    Special Characters: Include special characters or symbols in the stock symbol field to test the API's input validation.
    Numeric Input: Provide a numeric input as the symbol to evaluate how the system manages non-alphabetic characters in a primarily alphabetic field.
    Excessively Long Symbol: Test with a symbol that exceeds typical length (e.g., a string of 50 characters) to check if there is a limit and how it's enforced.

Boundary Test Cases

These tests examine the function's behavior at the limits of acceptable input and operational conditions.

    High Frequency Requests: Rapidly fire multiple requests to GlobalQuote for the same or different symbols to check if there is any rate limiting, and if so, how it is communicated to the user.
    Data Precision: Verify the precision of financial data returned (like price) to ensure it meets financial data standards and whether it rounds correctly.
    Simultaneous Requests: Send multiple requests simultaneously to check how well the API handles concurrent load.
    Case Sensitivity: Test the API with lower case, upper case, and mixed case symbols to determine if the symbol input is case-sensitive.
    Edge of Market Hours: Test right when the market opens or closes to see if there's any delay in data updates or inaccuracies at these critical times.

Each of these manual test cases should include steps to execute the test, expected results, and criteria for pass or fail, ensuring a comprehensive evaluation of the GlobalQuote function's robustness, error handling, and overall performance.
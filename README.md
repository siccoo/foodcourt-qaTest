# FoodCourt QA Engineer Assessment

### Test Automation of the login process done on `login.cy.js` of `App.js` using cypress automation tool

```
Check Page Elements:
Verifies that the login page on App.js is displayed by checking the presence of the heading.

Invalid Login:
Enters incorrect credentials.
Clicks the login button.
Asserts that the error message is visible and contains the correct text.

Valid Login:
Enters correct credentials.
Clicks the login button.
Asserts that an alert with the text "Login successful" is displayed.
Checks that no error message is displayed.

Handle Empty Input Fields:
Clicks the login button without entering any credentials.
Asserts that the error message is visible and contains the correct text.

Handle Only Username Input:
Enters only the username.
Clicks the login button.
Asserts that the error message is visible and contains the correct text.

Handle Only Password Input:
Enters only the password.
Clicks the login button.
Asserts that the error message is visible and contains the correct text.
```

### Performance Testing

#### Create a test case for Order Placement with Configuring Multiple Users.

```
Design:

One of the Key Scenarios: Multiple users add some product in cart with multiple request then placing order simultaneously.

Set Up Test Environment: Have a staging environment that looks exactly like your production.

Write Test Scripts: Execute users ordering and add orders to the cart using a load testing tools.


Tools:

Apache JMeter: Open source software, designed to load test functional behavior and measure performance.

Gatling: Support for complex load testing scenarios, tidy performance testing due to its scripting language.

Locust: the easy and scalable way to test your code


Why:

JMeter: Classic and intuitive, with a broad user community and libraries.

Gatling: Scala Library for the most expressive and expedition test scenarios, ever.

Locust — simple load-testing framework


Example of JMeter Test Plan

Thread Group: Simulate more user

HyperText Transfer Protocol request: Order placement in this case is the http order.

Assertions -- whether the responses were successful or errors.
```

### API Testing

#### Test an API Endpoint to Retrieve the List of Available Restaurants

```
Positive Test Cases:

Valid Request:
Send a GET request to /api/restaurants.
Assert the status code is 200.
Assert the response contains a list of restaurants with valid details (e.g., name, location, cuisine).


Negative Test Cases:

Invalid Endpoint:
Send a GET request to /api/nonexistent.
Assert the status code is 404.
Assert the response contains an appropriate error message.

Unauthorized Access:
Send a GET request to /api/restaurants without authentication if the endpoint requires it.
Assert the status code is 401.
Assert the response contains an appropriate error message.


Example using Postman/Newman
Create Collection: Add requests for positive and negative scenarios.
Run Collection: Use Newman to run the collection and generate reports.
```

```javascript
// Postman request example
{
  "info": {
    "name": "Restaurant API Test",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Get Restaurants",
      "request": {
        "method": "GET",
        "header": [],
        "url": {
          "raw": "http://localhost:3000/api/restaurants",
          "protocol": "http",
          "host": [
            "localhost"
          ],
          "port": "3000",
          "path": [
            "api",
            "restaurants"
          ]
        }
      },
      "response": []
    }
  ]
}



```

### Database Testing

#### Verify Data Integrity and Consistency

```javascript

```

### End-to-End Testing

#### User Journey: Search for a Restaurant, Place an Order, Make a Payment, Receive Order Confirmation

```javascript

```

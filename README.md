# FoodCourt QA Engineer Assessment

### Test Automation of the login process done on `login.cy.js` of `App.js` using cypress automation tool

```
Explanation to what I did on login.cy.js file

Check Page Elements:
    - Verifies that the login page on App.js is displayed by checking the presence of the heading.

Invalid Login:
    - Enters incorrect credentials.
    - Clicks the login button.
    - Asserts that the error message is visible and contains the correct text.

Valid Login:
    - Enters correct credentials.
    - Clicks the login button.
    - Asserts that an alert with the text "Login successful" is displayed.
    - Checks that no error message is displayed.

Handle Empty Input Fields:
    - Clicks the login button without entering any credentials.
    - Asserts that the error message is visible and contains the correct text.

Handle Only Username Input:
    - Enters only the username.
    - Clicks the login button.
    - Asserts that the error message is visible and contains the correct text.

Handle Only Password Input:
    - Enters only the password.
    - Clicks the login button.
    - Asserts that the error message is visible and contains the correct text.
```

### Performance Testing

#### Create a test case for Order Placement with Configuring Multiple Users.

```
Design:
    - One of the Key Scenarios: Multiple users add some product in cart with multiple request then placing order simultaneously.
    - Set Up Test Environment: Have a staging environment that looks exactly like your production.
    - Write Test Scripts: Execute users ordering and add orders to the cart using a load testing tools.

Tools:
    - Apache JMeter: Open source software, designed to load test functional behavior and measure performance.
    - Gatling: Support for complex load testing scenarios, tidy performance testing due to its scripting language.
    - Locust: the easy and scalable way to test your code

Why:
    - JMeter: Classic and intuitive, with a broad user community and libraries.
    - Gatling: Scala Library for the most expressive and expedition test scenarios, ever.
    - Locust — simple load-testing framework

Example of JMeter Test Plan
    - Thread Group: Simulate more user
    - HyperText Transfer Protocol request: Order placement in this case is the http order.
    - Assertions -- whether the responses were successful or errors.
```

### API Testing

#### Test an API Endpoint to Retrieve the List of Available Restaurants including positive & negative test cases scenarios

```
Positive Test Cases:

Valid Request:
    - Send a GET request to /api/restaurants.
    - Assert the status code is 200.
    - Assert the response contains a list of restaurants with valid details (e.g., name, location, cuisine).


Negative Test Cases:

Invalid Endpoint:
    - Send a GET request to /api/nonexistent.
    - Assert the status code is 404.
    - Assert the response contains an appropriate error message.

Unauthorized Access:
    - Send a GET request to /api/restaurants without authentication if the endpoint requires it.
    - Assert the status code is 401.
    - Assert the response contains an appropriate error message.

Example using Postman/Newman:
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

```
Setup: Use a testing database that mimics production.
Initial State: Ensure the database is in a known state before transactions.
Execute Transactions: Perform a series of transactions (e.g., place orders, update user details).

Verify:
    - Check that all data is correctly inserted, updated, or deleted.
    - Ensure referential integrity is maintained (e.g., foreign keys are correct).
    - Validate data consistency across tables (e.g., order total matches sum of item prices).

Example using SQL
    - Before Transaction: SELECT * FROM orders WHERE user_id = 1;
    - Perform Transaction: Insert a new order.
    - After Transaction: SELECT * FROM orders WHERE user_id = 1;
    - Verify: Check the new order is present and all details are correct.
```

### End-to-End Testing

#### User Journey: Search for a Restaurant, Place an Order, Make a Payment, Receive Order Confirmation

```javascript
// User Journey Example using Cypress

describe("End-to-End Test for Food Delivery App", () => {
  it("should complete the user journey from search to order confirmation", () => {
    // Open the app
    cy.visit("http://localhost:3000");

    // Search for a restaurant
    cy.get("#searchInput").type("Pizza");
    cy.get("#searchButton").click();
    cy.get("#searchResults").should("contain", "Pizza Place");

    // Place an order
    cy.get("#restaurant-1").click();
    cy.get("#addItem-1").click();
    cy.get("#checkoutButton").click();
    cy.get("#cart").should("contain", "Pizza");

    // Make a payment
    cy.get("#paymentInput").type("4111111111111111");
    cy.get("#submitPaymentButton").click();
    cy.get("#paymentSuccess").should("contain", "Payment successful");

    // Receive order confirmation
    cy.get("#orderConfirmation").should("contain", "Order confirmed");
  });
});
```

```
Explanation of the User Journey

Open the App:
    - Launch the application.
    - Verify the home screen is displayed.

Search for a Restaurant:
    - Enter search criteria.
    - Submit the search.
    - Verify the search results are displayed.

Place an Order:
    - Select a restaurant.
    - Add items to the cart.
    - Proceed to checkout.
    - Verify the cart details are correct.

Make a Payment:
    - Enter payment details.
    - Submit the payment.
    - Verify the payment is processed successfully.

Receive Order Confirmation:
    - Verify an order confirmation notification is displayed.
    - Check the order details are correct in the notification.

```

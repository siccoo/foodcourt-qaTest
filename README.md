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
#### Designing a Performance Test for Simultaneous Order Placement

```
Design:

Identify Key Scenarios: Multiple users placing orders simultaneously.
Set Up Test Environment: Ensure a staging environment that mimics production.
Create Test Scripts: Simulate users placing orders using a performance testing tool.


Tools:

JMeter: Open-source tool that simulates a heavy load on a server, group of servers, network, or object to test its strength or analyze overall performance under different load types.
Gatling: Provides advanced load testing scenarios, and its scripting language allows for detailed performance testing.
Locust: Python-based tool for easy and scalable load testing.


Why:

JMeter: Well-established, with extensive community support and plugins.
Gatling: Scala-based DSL allows for detailed and maintainable test scripts.
Locust: Easy to write and scale test scripts with Python, JavaScript etc.


Example of JMeter Test Plan
Thread Group: Simulate multiple users.
HTTP Request: Simulate the order placement request.
Assertions: Check for successful responses and errors.
```

### API Testing
#### Test an API Endpoint to Retrieve the List of Available Restaurants

```

```

```javascript

```

### Database Testing
#### Verify Data Integrity and Consistency

```javascript
    
```

### End-to-End Testing
#### User Journey: Search for a Restaurant, Place an Order, Make a Payment, Receive Order Confirmation

```javascript
    
```
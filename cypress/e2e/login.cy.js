/* eslint-disable no-undef */
describe('Login Page Test', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001'); // Change this to the URL of your React app
    });
  
    it('should display login page', () => {
      cy.get('h1').should('contain', 'Login Page');
    });
  
    it('should display an error message for invalid login', () => {
      cy.get('#username').type('wronguser');
      cy.get('#password').type('wrongpassword');
      cy.get('#loginButton').click();
      
      // Assert that the error message is displayed and contains the correct text
      cy.get('#errorMessage').should('be.visible').and('contain', 'Invalid username or password');
    });
  
    it('should login successfully with correct credentials', () => {
      cy.get('#username').type('chilakamichael001@gmail.com');
      cy.get('#password').type('admin123');
      cy.get('#loginButton').click();
  
      // Capture the alert and assert its content
      cy.on('window:alert', (text) => {
        expect(text).to.contains('Login successful');
      });
  
      // Check that the error message is not displayed
      cy.get('#errorMessage').should('not.exist');
    });
  
    it('should handle empty input fields', () => {
      cy.get('#loginButton').click();
      
      // Assert that the error message is displayed for empty fields
      cy.get('#errorMessage').should('be.visible').and('contain', 'Invalid username or password');
    });
  
    it('should handle only username input', () => {
      cy.get('#username').type('admin');
      cy.get('#loginButton').click();
      
      // Assert that the error message is displayed for missing password
      cy.get('#errorMessage').should('be.visible').and('contain', 'Invalid username or password');
    });
  
    it('should handle only password input', () => {
      cy.get('#password').type('admin');
      cy.get('#loginButton').click();
      
      // Assert that the error message is displayed for missing username
      cy.get('#errorMessage').should('be.visible').and('contain', 'Invalid username or password');
    });
  });
  
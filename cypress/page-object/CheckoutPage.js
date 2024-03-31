class Checkout{
    fillYourInformation(){
cy.get('[data-test="firstName"]').type("John")
cy.get('[data-test="lastName"]').type("Doe")
cy.get('[data-test="postalCode"]').type("123456789")

    }
    completeAnOrder(){
cy.get('[data-test="continue"]').click()
cy.get('[data-test="finish"]').click()             
    }
}

export const checkoutPage = new Checkout()
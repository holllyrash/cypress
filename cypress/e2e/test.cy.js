describe("Cypress tests", ()=>{
    beforeEach("Visit test sile", ()=>{
    cy.visit("https://www.saucedemo.com/") 
    cy.login()   
    })
// it("Sorting by price", ()=>{
// cy.get('[class="product_sort_container"]').select("Price (low to high)")
// cy.get('[class="product_sort_container"]').should("have.value", "lohi")
// })

// it("Add product to cart", ()=>{
// cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
// cy.get('[data-test="shopping-cart-badge"]').should("be.visible")
// })

it("Make an order", ()=>{
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[class="shopping_cart_link"]').click()
    cy.get('[data-test="checkout"]').click()
    cy.get('[data-test="firstName"]').type("John")
    cy.get('[data-test="lastName"]').type("Doe")
    cy.get('[data-test="postalCode"]').type("123456789")
    cy.get('[data-test="continue"]').click()
    cy.get('[data-test="finish"]').click()
    cy.url("eq", "https://www.saucedemo.com/checkout-complete.html")
    })
})
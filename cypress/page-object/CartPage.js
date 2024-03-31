class Cart{
    continueShopping(){
cy.get('[data-test="continue-shopping"]').click()
    }
    checkoutAnOrder(){
cy.get('[data-test="checkout"]').click()
    }
}

export const cartPage = new Cart()
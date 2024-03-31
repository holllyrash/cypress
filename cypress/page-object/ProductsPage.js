class Products{
    addAllProductsToCart(){
cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
    }
    goToCart(){
cy.get('[data-test="shopping-cart-link"]').click()      
    }
}

export const productsPage = new Products()
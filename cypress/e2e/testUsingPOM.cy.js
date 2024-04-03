import { cartPage } from "../page-object/CartPage";
import { checkoutPage } from "../page-object/CheckoutPage"; 
import { productsPage } from "../page-object/ProductsPage";

describe ("Cypress tests using POM", ()=>{


        it("Make an order for all available producs", ()=>{
            cy.visit("https://www.saucedemo.com/") 
            cy.login()   
            productsPage.addAllProductsToCart()
            productsPage.goToCart()
            cartPage.checkoutAnOrder()
            checkoutPage.fillYourInformation()
            checkoutPage.completeAnOrder()
            cy.url("eq", "https://www.saucedemo.com/checkout-complete.html")
            })
})
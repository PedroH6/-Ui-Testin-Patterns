/// <reference types="cypress" />

class cartPage {
    get #finished() {return cy.get('[data-testid="addToCart"]')}
    get #checkout() {return cy.get('[data-testid="completeCheckout"]')}


    addProductToCart() {
        this.#finished.click()
        this.#checkout.click()
    }
    
}

module.exports = new cartPage()
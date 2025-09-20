/// <reference types="cypress" />

class productPage {
    get #product() {return cy.get(':nth-child(2) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]')}
    get #addToCart() {return cy.get('[data-testid="addToCart"]')}

    addProductToCart() {
        this.#product.click()
        this.#addToCart.click()
    }
}

module.exports = new productPage()
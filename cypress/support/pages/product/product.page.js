/// <reference types="cypress" />

class productPage {
    get #product() {return cy.get(':nth-child(2) > .r-18u37iz > :nth-child(1) > [data-testid="productDetails"]')}
    get #addToCart() {return cy.get('[data-testid="addToCart"]')}
    get #update() {return cy.get('[data-testid="addItem"]')}
    get #remove() {return cy.get('[data-testid="remove"]')}

    addProductToCart() {
        this.#product.click()
        this.#addToCart.click()
    }
    updateProductToCart() {
        this.#update.click()
    }
    removeProductToCart() {
        this.#remove.click()
    }
}

module.exports = new productPage()
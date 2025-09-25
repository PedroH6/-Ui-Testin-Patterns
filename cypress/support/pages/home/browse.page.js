/// <reference types="cypress" />


export const browsePage = {
    openMenu(menu) {
        return cy.get(`[href="/Tab/${menu}"]`).click()
    }
}
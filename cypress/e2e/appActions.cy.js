/// <reference types="cypress" />

const { email, password } = require('../fixtures/dada.json')

describe('Teste do carrinho', () => {
    it('Deve entrar como usuário e adicionar um produto ao carrinho', () => {
        cy.login(email, password)
        cy.get('[data-testid="goBackHome"]').should('exist')
    })
})
/// <reference types="cypress" />

const { homePage } = require("../support/pages/home.page");
const loginPage = require("../support/pages/login.page");
const { email, password } = require('../fixtures/dada.json');
const { profilePage } = require("../support/pages/profile.page");

describe('Teste de autenticação', () => {
  beforeEach(() => {
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
  });


  it('Deve fazer login com sucesso', () => {
    homePage.openMenu('Account')
    loginPage.login(email, password)
    homePage.openMenu('Account')
    profilePage.customeMenu().should('contain.text', 'EBAC Cliente')
  })
})
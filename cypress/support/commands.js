// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { homePage } = require("./pages/home/home.page");
import { browsePage } from "./pages/home/browse.page";
import cartPage from "./pages/product/cart.page";
import loginPage from "./pages/login/login.page";
import productPage from "./pages/product/product.page";

Cypress.Commands.add('login', (email, password) => { 
    cy.setCookie('ebacStoreVersion', 'v2', { domain: 'lojaebac.ebaconline.art.br' })
    cy.visit('/')
    homePage.openMenu('Account')
    loginPage.login(email, password)
    browsePage.openMenu('Browse')
    productPage.addProductToCart()
    cartPage.addProductToCart()
})
/// <reference types="cypress" />

const productPage = require("../support/pages/product/product.page");
const { browsePage } = require("../support/pages/home/browse.page");

describe("Teste de adicionar, remover e atualizar item no carrinho", () => {
  beforeEach(() => {
    cy.setCookie("ebacStoreVersion", "v2", {
      domain: "lojaebac.ebaconline.art.br",
    });
    cy.visit("/");
  });

  it("Deve adicionar um item no carrinho", () => {
    cy.intercept("GET", "**/public/getProducts?limit=10&skip=0", {fixture: 'produtcts.json'}).as("addCart");
    browsePage.openMenu("Browse");
    productPage.addProductToCart();
    cy.get('[data-testid="itemsQty"]').should("have.length", 1);
  });

  it("Deve atualizar o item no carrinho", () => {
    cy.intercept("GET", "**/public/getProducts?limit=10&skip=0", {fixture: 'produtcts.json'}).as("updateCart");
    browsePage.openMenu("Browse");
    productPage.addProductToCart();
    productPage.updateProductToCart();
    cy.get('[data-testid="itemsQty"]').should("have.length", 1);
  });

  it("Deve remover o item no carrinho", () => {
    cy.intercept("GET", "**/public/getProducts?limit=10&skip=0", {fixture: 'produtcts.json'}).as("removeCart");
    browsePage.openMenu("Browse");
    productPage.addProductToCart();
    productPage.removeProductToCart();
    cy.get('[data-testid="itemsQty"]').should("not.exist");
  })
});

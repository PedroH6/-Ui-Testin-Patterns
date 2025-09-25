/// <reference types="cypress" />

import { homePage } from "../support/pages/home/home.page";
import loginPage from "../support/pages/login/login.page";
import { profilePage } from "../support/pages/profile/profile.page";
const { email, password } = require('../fixtures/dada.json');

describe("Teste de autenticação", () => {
  beforeEach(() => {
    cy.setCookie("ebacStoreVersion", "v2", {
      domain: "lojaebac.ebaconline.art.br",
    });
    cy.visit("/");
  });

  it("Deve fazer login com sucesso", () => {
    homePage.openMenu("Account");
    loginPage.login(email, password);
    homePage.openMenu("Account");
    profilePage.customeName().should("contain.text", "EBAC Cliente");
  });
});

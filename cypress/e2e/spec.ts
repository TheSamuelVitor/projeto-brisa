import * as cypress from "cypress";

// const url = "https://projeto-brisa-rouge.vercel.app/";
const url = "localhost:4200/";

describe("pagina principal", () => {
  it("pagina principal", () => {
    cy.visit(url);
    cy.get('input[name="email"]').type("samuel@gmail.com");
    cy.get('input[name="senha"]').type("1234");
    cy.get(".login").click();
    expect(true).to.equal(true);
    cy.contains("Sobre o Projeto");
    cy.contains("Equipe").click();
    
    cy.contains("Equipes");
    cy.get(".add").click();
    cy.get(".cancelar").click();
    
    cy.contains("Membros").click();
    cy.get(".add").click();
    cy.get(".cancelar").click();
    
    cy.contains("Projetos").click();
    cy.get(".add").click();
    cy.get(".cancelar").click();

    cy.contains("Tarefas").click();
    cy.get(".add").click();
    cy.get(".cancelar").click();
  });
});

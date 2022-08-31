import * as cypress from "cypress";

// const url = "https://projeto-brisa-rouge.vercel.app/";
const url = "localhost:4200/";

describe("pagina principal", () => {
  it("pagina principal", () => {
    cy.visit(url);
    cy.get('input[name="email"]').type("usuario@email.com");
    cy.get('input[name="senha"]').type("1234");
    cy.get(".login").click();
    expect(true).to.equal(true);
    cy.contains("Sobre o Projeto");
  });
});

describe("pagina equipes", () => {
  it("get equipes", () => {
    cy.contains("Equipe").click();
    cy.contains("Equipes");
  });

  it("cria equipes", () => {
    cy.get(".add").click();
    cy.get(".cancelar").click();
  });
});

describe("pagina membros", () => {
  it("pagina membros", () => {
    cy.contains("Membros").click();
  });

  it("cria membros", () => {
    cy.get(".add").click();
    cy.get(".cancelar").click();
  });
});

describe("pagina projetos", () => {
  it("pagina projetos", () => {
    cy.contains("Projetos").click();
  });

  it("cria projeto", () => {
    cy.get(".add").click();
    cy.get(".cancelar").click();
  });
});
describe("pagina tarefas", () => {
  it("pagina tarefas", () => {
    cy.contains("Tarefas").click();
  });

  it("cria tarefa", () => {
    cy.get(".add").click();
    cy.get(".cancelar").click();
  });
});

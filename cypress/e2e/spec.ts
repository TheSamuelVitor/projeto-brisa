import * as cypress from "cypress";

// const url = "https://projeto-brisa-rouge.vercel.app/";
const url = 'localhost:4200/'

function teste() {
  cy.visit(url)
}

describe("pagina principal", () => {
  it("pagina principal", () => {
    expect(true).to.equal(true);
    cy.visit(url);
    cy.contains("Sobre o Projeto");
  });
});


describe("pagina equipes", () => {
  it("get equipes", () => {
    cy.visit(url + "equipes");
    cy.contains("Equipes");
  });

  it("cria equipes", () => {
    cy.visit(url + "equipes/create/");
  });
});

describe("pagina membros", () => {
  it("pagina membros", () => {
    cy.visit(url + "membros");
    cy.contains("Membros");
  });

  it("cria membros", () => {
    cy.visit(url + "membros/create/");
  });
});

describe("pagina projetos", () => {
  it("pagina projetos", () => {
    cy.visit(url + "projetos");
    cy.contains("Projetos");
  });

  it("cria projeto", () => {
    cy.visit(url + "projetos/create/");
  });
});

describe("pagina tarefas", () => {
  it("pagina tarefas", () => {
    cy.visit(url + "tarefas");
    cy.contains("Tarefas");
  });

  it("cria tarefa", () => {
    cy.visit(url + "tarefas/create/");
    teste()
  });
});

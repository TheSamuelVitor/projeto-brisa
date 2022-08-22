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
    cy.get('.add').click();
    // cy.get('input[name="name_team"]').type('Vingadores')
    // cy.get('.salvar').click();
    cy.get('.cancelar').click();
  });
});

describe("pagina membros", () => {
  it("pagina membros", () => {
    cy.visit(url + "membros");
    cy.contains("Membros");
  });

  it("cria membros", () => {
    cy.get('.add').click();
    /*
    cy.get('input[name="name_team"]').type('Vingadores')
    */
    cy.get('.cancelar').click();
  });
});

describe("pagina projetos", () => {
  it("pagina projetos", () => {
    cy.visit(url + "projetos");
    cy.contains("Projetos");
  });

  it("cria projeto", () => {
    cy.get('.add').click();
    cy.get('.cancelar').click();
  });
});

describe("pagina tarefas", () => {
  it("pagina tarefas", () => {
    cy.visit(url + "tarefas");
    cy.contains("Tarefas");
  });

  it("cria tarefa", () => {
    cy.get('.add').click();
    cy.get('.cancelar').click();
    teste()
  });
});

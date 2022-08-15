<div style="display: inline-block; justify-content: center">
    <img alt="Golang Logo" height="70" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" />
    <img alt="PostgreSQL Logo" height="70" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
    <img alt="Logo Angular" height="70" width="70" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg">
</div>

# Projeto Brisa

- Projeto criado por Samuel Vitor;
- Desafio proposto a Brisanet aos seus aprendizes;

## Informações sobre o sistema

- Desenvolvido com Angular Postgres e Go.
- Para poder usar:
  - Criar uma equipe, pois estará associada aos seguintes passos;
  - Criar um membro, apenas preencher os campos presentes e escolher uma equipe previamente criada;
  - Criar um projeto, preencha os campos e defina a equipe que gerenciará o projeto;
  - Criar uma tarefa, estará associada a um membro da equipe e a um projeto criado.

### Como rodar este projeto

```bash
# clonando o repositório
git clone https://github.com/TheSamuelVitor/projeto-brisa
```

É necessario ter instalado o node e o npm

```bash
# importando node_modules
npm install
```

Agora basta rodar o projeto com um dos comandos abaixo

```bash
# ambos os comandos podem ser usados
npm start
ng serve
```

### Atividades

- [x] Página dashboard;

- [x] Página equipes;
  - [x] Mostrar equipes;
  - [x] Criar equipes;
  - [x] Editar equipe;
  - [x] Deletar equipe;

- [x] Página membros;

  - [x] Mostrar membros;
  - [x] Criar membros;
    - [x] Associar membro a equipe;
  - [x] Editar membro;
  - [x] Deletar membro;

- [x] Página projetos;

  - [x] Mostrar projetos;
  - [x] Criar projetos;
    - [x] Associar projeto a equipe;
  - [x] Editar projeto;
  - [x] Deletar projeto;

- [x] Página tarefas;

  - [x] Mostrar tarefas;
  - [x] Criar tarefas;
    - [x] Associar tarefa a projeto e a equipe;
  - [x] Editar tarefa;
  - [x] Deletar tarefa;

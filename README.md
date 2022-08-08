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
  - [x] Página criação de equipes;
  - [ ] Editar equipe;

- [x] Página membros;
  - [x] Página criação de membros;
    - [x] Associar membro a equipe;
  - [ ] Editar membro;

- [x] Página projetos;
  - [x] Página criação de projetos;
    - [x] Associar projeto a equipe;
  - [ ] Editar projeto;

- [x] Página tarefas;
  - [x] Página criação de tarefas;
    - [x] Associar tarefa a projeto e a equipe
  - [ ] Editar tarefa;
<div style="display: inline-block; justify-content: center">
    <img alt="Golang Logo" height="70" width="70" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" />
    <img alt="PostgreSQL Logo" height="70" width="60" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
    <img alt="Logo Angular" height="70" width="70" src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg">
</div>

# Projeto Brisa
- Deploed no Vercel, o qual pode acessar <a href="https://projeto-brisa-rouge.vercel.app/">aqui</a>.
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

### Teste com cypress

```bash
# comando para abrir o CLI do cypress e poder rodar testes automatizados
./node_modules/.bin/cypress open
```

### Atividades

- [X] Página dashboard;
- [X] Página equipes;

  - [X] Mostrar equipes;
  - [X] Criar equipes;
  - [X] Editar equipe;
  - [X] Deletar equipe;
- [X] Página membros;

  - [X] Mostrar membros;
  - [X] Criar membros;
    - [X] Associar membro a equipe;
  - [X] Editar membro;
  - [X] Deletar membro;
- [X] Página projetos;

  - [X] Mostrar projetos;
  - [X] Criar projetos;
    - [X] Associar projeto a equipe;
  - [X] Editar projeto;
  - [X] Deletar projeto;
- [X] Página tarefas;

  - [X] Mostrar tarefas;
  - [X] Criar tarefas;
    - [X] Associar tarefa a projeto e a equipe;
  - [X] Editar tarefa;
  - [X] Deletar tarefa;

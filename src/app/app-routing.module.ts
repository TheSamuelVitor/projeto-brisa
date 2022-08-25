import { PaginaEquipeComponent } from './equipes/pagina-equipe/pagina-equipe.component';
import { CreateProjetosComponent } from './projetos/create-projetos/create-projetos.component';
import { CreateMembrosComponent } from './membros/create-membros/create-membros.component';
import { CreateTarefasComponent } from './tarefas/create-tarefas/create-tarefas.component';
import { CreateEquipeComponent } from './equipes/create-equipe/create-equipe.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ProjetosComponent } from './views/projetos/projetos.component';
import { TarefasComponent } from './views/tarefas/tarefas.component';
import { EquipeComponent } from './views/equipe/equipe.component';
import { MembroComponent } from './views/membro/membro.component';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UpdateEquipeComponent } from './equipes/update-equipe/update-equipe.component';
import { UpdateMembroComponent } from './membros/update-membro/update-membro.component';
import { UpdateProjetoComponent } from './projetos/update-projeto/update-projeto.component';
import { UpdateTarefaComponent } from './tarefas/update-tarefa/update-tarefa.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "equipes",
    component: EquipeComponent
  },
  {
    path: "equipes/dados/:id",
    component: PaginaEquipeComponent
  },
  {
    path: "equipes/create",
    component: CreateEquipeComponent
  },
  {
    path: "equipes/update/:id",
    component: UpdateEquipeComponent
  },
  {
    path: "membros",
    component: MembroComponent
  },
  {
    path: "membros/create",
    component: CreateMembrosComponent
  },
  {
    path: "membros/update/:id",
    component: UpdateMembroComponent
  },
  {
    path:"projetos",
    component: ProjetosComponent
  },
  {
    path: "projetos/create",
    component: CreateProjetosComponent
  },
  {
    path:"projetos/update/:id",
    component: UpdateProjetoComponent
  },
  {
    path: "tarefas",
    component: TarefasComponent
  },
  {
    path: "tarefas/create",
    component: CreateTarefasComponent
  },
  {
    path:"tarefas/update/:id",
    component: UpdateTarefaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

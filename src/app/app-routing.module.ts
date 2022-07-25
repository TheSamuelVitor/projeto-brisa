import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEquipeComponent } from './equipes/create-equipe/create-equipe.component';
import { CreateMembrosComponent } from './membros/create-membros/create-membros.component';
import { CreateProjetosComponent } from './projetos/create-projetos/create-projetos.component';
import { CreateTarefasComponent } from './tarefas/create-tarefas/create-tarefas.component';

import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EquipeComponent } from './views/equipe/equipe.component';
import { MembroComponent } from './views/membro/membro.component';
import { ProjetosComponent } from './views/projetos/projetos.component';
import { TarefasComponent } from './views/tarefas/tarefas.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "equipes",
    component: EquipeComponent
  },
  {
    path: "equipes/create",
    component: CreateEquipeComponent
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
    path:"projetos",
    component: ProjetosComponent
  },
  {
    path: "projetos/create",
    component: CreateProjetosComponent
  },
  {
    path: "tarefas",
    component: TarefasComponent
  },
  {
    path: "tarefas/create",
    component: CreateTarefasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

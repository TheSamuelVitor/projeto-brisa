import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
    path: "membros",
    component: MembroComponent
  },
  {
    path:"projetos",
    component: ProjetosComponent
  },
  {
    path: "tarefas",
    component: TarefasComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

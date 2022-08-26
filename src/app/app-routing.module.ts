import { AuthGuard } from './guards/auth-guard.guard';
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
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "equipes",
    component: EquipeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "equipes/dados/:id",
    component: PaginaEquipeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "equipes/create",
    component: CreateEquipeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "equipes/update/:id",
    component: UpdateEquipeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "membros",
    component: MembroComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "membros/create",
    component: CreateMembrosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "membros/update/:id",
    component: UpdateMembroComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"projetos",
    component: ProjetosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "projetos/create",
    component: CreateProjetosComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"projetos/update/:id",
    component: UpdateProjetoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "tarefas",
    component: TarefasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "tarefas/create",
    component: CreateTarefasComponent,
    canActivate: [AuthGuard]
  },
  {
    path:"tarefas/update/:id",
    component: UpdateTarefaComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AuthGuard } from "./guards/auth-guard.guard";
import { LoginComponent } from "./pages/login/login.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";

import { EquipeComponent } from "./pages/equipes/equipe/equipe.component";
import { PaginaEquipeComponent } from "./pages/equipes/pagina-equipe/pagina-equipe.component";
import { CreateEquipeComponent } from "./pages/equipes/create-equipe/create-equipe.component";
import { UpdateEquipeComponent } from "./pages/equipes/update-equipe/update-equipe.component";

import { MembroComponent } from "./pages/membros/membro/membro.component";
import { CreateMembrosComponent } from "./pages/membros/create-membros/create-membros.component";
import { UpdateMembroComponent } from "./pages/membros/update-membro/update-membro.component";

import { CreateProjetosComponent } from "./pages/projetos/create-projetos/create-projetos.component";
import { UpdateProjetoComponent } from "./pages/projetos/update-projeto/update-projeto.component";
import { ProjetosComponent } from "src/app/pages/projetos/projetos/projetos.component";

import { TarefasComponent } from "src/app/pages/tarefas/tarefas/tarefas.component";
import { CreateTarefasComponent } from "./pages/tarefas/create-tarefas/create-tarefas.component";
import { UpdateTarefaComponent } from "./pages/tarefas/update-tarefa/update-tarefa.component";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "",
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "equipes",
    component: EquipeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "equipes/dados/:id",
    component: PaginaEquipeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "equipes/create",
    component: CreateEquipeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "equipes/update/:id",
    component: UpdateEquipeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "membros",
    component: MembroComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "membros/create",
    component: CreateMembrosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "membros/update/:id",
    component: UpdateMembroComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "projetos",
    component: ProjetosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "projetos/create",
    component: CreateProjetosComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "projetos/update/:id",
    component: UpdateProjetoComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "tarefas",
    component: TarefasComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "tarefas/create",
    component: CreateTarefasComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "tarefas/update/:id",
    component: UpdateTarefaComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

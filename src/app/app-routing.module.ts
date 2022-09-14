import { NotfoundComponent } from "./pages/notfound/notfound.component";
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
import { PaginaMembroComponent } from "./pages/membros/pagina-membro/pagina-membro.component";
import { PaginaProjetoComponent } from "./pages/projetos/pagina-projeto/pagina-projeto.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "equipes",
    component: EquipeComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "equipes/dados/:id",
    component: PaginaEquipeComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "equipes/create",
    component: CreateEquipeComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "equipes/update/:id",
    component: UpdateEquipeComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "membros",
    component: MembroComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "membros/create",
    component: CreateMembrosComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "membros/update/:id",
    component: UpdateMembroComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "membros/dados/:id",
    component: PaginaMembroComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "projetos",
    component: ProjetosComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "projetos/create",
    component: CreateProjetosComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "projetos/update/:id",
    component: UpdateProjetoComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "projetos/dados/:id",
    component: PaginaProjetoComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "tarefas",
    component: TarefasComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "tarefas/create",
    component: CreateTarefasComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "tarefas/update/:id",
    component: UpdateTarefaComponent,
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "**",
    component: NotfoundComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

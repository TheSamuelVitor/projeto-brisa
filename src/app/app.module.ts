import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// Imports do Angular Material
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatTreeModule } from "@angular/material/tree";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { LayoutModule } from "@angular/cdk/layout";

// Imports das respectivas paginas
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { HeaderComponent } from "./template/header/header.component";
import { LoginComponent } from "./pages/login/login.component";
import { httpInterceptorProviders } from "./httpinterceptors";
import { NavComponent } from "./template/nav/nav.component";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth-guard.guard";

import { EquipeComponent } from "./pages/equipes/equipe/equipe.component";
import { CreateEquipeComponent } from "./pages/equipes/create-equipe/create-equipe.component";
import { ReadEquipeComponent } from "./pages/equipes/read-equipe/read-equipe.component";
import { UpdateEquipeComponent } from "./pages/equipes/update-equipe/update-equipe.component";
import { DeleteWarningComponent } from "./pages/equipes/pagina-equipe/delete-warning/delete-warning.component";
import { PaginaEquipeComponent } from "./pages/equipes/pagina-equipe/pagina-equipe.component";

import { MembroComponent } from "./pages/membros/membro/membro.component";
import { CreateMembrosComponent } from "./pages/membros/create-membros/create-membros.component";
import { ReadMembrosComponent } from "./pages/membros/read-membros/read-membros.component";
import { UpdateMembroComponent } from "./pages/membros/update-membro/update-membro.component";
import { PaginaMembroComponent } from "./pages/membros/pagina-membro/pagina-membro.component";
import { DeleteWarningComponentMembros } from "./pages/membros/pagina-membro/delete-warning/delete-warning.component";

import { ProjetosComponent } from "./pages/projetos/projetos/projetos.component";
import { CreateProjetosComponent } from "./pages/projetos/create-projetos/create-projetos.component";
import { ReadProjetosComponent } from "./pages/projetos/read-projetos/read-projetos.component";
import { UpdateProjetoComponent } from "./pages/projetos/update-projeto/update-projeto.component";
import { DeleteWarningComponentProjeto } from "./pages/projetos/pagina-projeto/delete-warning/delete-warning.component";

import { TarefasComponent } from "./pages/tarefas/tarefas/tarefas.component";
import { CreateTarefasComponent } from "./pages/tarefas/create-tarefas/create-tarefas.component";
import { DeleteWarningComponentTarefas } from "./pages/tarefas/read-tarefas/delete-warning/delete-warning.component";
import { ReadTarefasComponent } from "./pages/tarefas/read-tarefas/read-tarefas.component";
import { UpdateTarefaComponent } from "./pages/tarefas/update-tarefa/update-tarefa.component";
import { PaginaProjetoComponent } from './pages/projetos/pagina-projeto/pagina-projeto.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    NavComponent,
    HeaderComponent,

    EquipeComponent,
    CreateEquipeComponent,
    ReadEquipeComponent,
    UpdateEquipeComponent,
    DeleteWarningComponent,
    PaginaEquipeComponent,

    MembroComponent,
    CreateMembrosComponent,
    ReadMembrosComponent,
    PaginaMembroComponent,
    UpdateMembroComponent,
    DeleteWarningComponentMembros,

    ProjetosComponent,
    CreateProjetosComponent,
    ReadProjetosComponent,
    UpdateProjetoComponent,
    DeleteWarningComponentProjeto,

    TarefasComponent,
    CreateTarefasComponent,
    ReadTarefasComponent,
    UpdateTarefaComponent,
    DeleteWarningComponentTarefas,
    PaginaProjetoComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    LayoutModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatRadioModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService, AuthGuard, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}

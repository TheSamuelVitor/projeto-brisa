import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
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

import { CreateEquipeComponent } from "./pages/equipes/create-equipe/create-equipe.component";
import { PaginaEquipeComponent } from "./pages/equipes/pagina-equipe/pagina-equipe.component";
import { UpdateEquipeComponent } from "./pages/equipes/update-equipe/update-equipe.component";
import { DeleteWarningComponent } from "./pages/equipes/pagina-equipe/delete-warning/delete-warning.component";

import { ProjetosComponent } from "src/app/pages/projetos/projetos/projetos.component";
import { ReadProjetosComponent } from "./pages/projetos/read-projetos/read-projetos.component";
import { CreateProjetosComponent } from "./pages/projetos/create-projetos/create-projetos.component";
import { UpdateProjetoComponent } from "./pages/projetos/update-projeto/update-projeto.component";

import { TarefasComponent } from "src/app/pages/tarefas/tarefas/tarefas.component";
import { CreateTarefasComponent } from "./pages/tarefas/create-tarefas/create-tarefas.component";
import { ReadTarefasComponent } from "./pages/tarefas/read-tarefas/read-tarefas.component";
import { UpdateTarefaComponent } from "./pages/tarefas/update-tarefa/update-tarefa.component";

import { MembroComponent } from "./pages/membros/membro/membro.component";
import { CreateMembrosComponent } from "./pages/membros/create-membros/create-membros.component";
import { ReadMembrosComponent } from "./pages/membros/read-membros/read-membros.component";
import { UpdateMembroComponent } from "./pages/membros/update-membro/update-membro.component";



import { HeaderComponent } from "./template/header/header.component";
import { LoginComponent } from "./pages/login/login.component";
import { httpInterceptorProviders } from "./httpinterceptors";
import { NavComponent } from "./template/nav/nav.component";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./guards/auth-guard.guard";

@NgModule({
  declarations: [
    DashboardComponent,

    CreateEquipeComponent,
    UpdateEquipeComponent,
    PaginaEquipeComponent,

    MembroComponent,
    CreateMembrosComponent,
    UpdateMembroComponent,
    ReadMembrosComponent,

    ProjetosComponent,
    CreateProjetosComponent,
    ReadProjetosComponent,
    UpdateProjetoComponent,

    TarefasComponent,
    CreateTarefasComponent,
    ReadTarefasComponent,
    UpdateTarefaComponent,

    HeaderComponent,
    AppComponent,
    NavComponent,
    DeleteWarningComponent,
    LoginComponent,
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

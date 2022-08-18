import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
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

// Import componentes da tela
import { HeaderComponent } from "./components/template/header/header.component";
import { NavComponent } from "./components/template/nav/nav.component";

// Imports da tela
import { DashboardComponent } from "./views/dashboard/dashboard.component";

import { EquipeComponent } from "./views/equipe/equipe.component";
import { CreateEquipeComponent } from "./equipes/create-equipe/create-equipe.component";
import { ReadEquipeComponent } from "./equipes/read-equipe/read-equipe.component";
import { UpdateEquipeComponent } from "./equipes/update-equipe/update-equipe.component";
import { DeleteWarningComponent } from './equipes/read-equipe/delete-warning/delete-warning.component';

import { MembroComponent } from "./views/membro/membro.component";
import { CreateMembrosComponent } from "./membros/create-membros/create-membros.component";
import { ReadMembrosComponent } from "./membros/read-membros/read-membros.component";
import { UpdateMembroComponent } from "./membros/update-membro/update-membro.component";

import { ProjetosComponent } from "./views/projetos/projetos.component";
import { CreateProjetosComponent } from "./projetos/create-projetos/create-projetos.component";
import { ReadProjetosComponent } from "./projetos/read-projetos/read-projetos.component";
import { UpdateProjetoComponent } from "./projetos/update-projeto/update-projeto.component";

import { TarefasComponent } from "./views/tarefas/tarefas.component";
import { CreateTarefasComponent } from "./tarefas/create-tarefas/create-tarefas.component";
import { ReadTarefasComponent } from "./tarefas/read-tarefas/read-tarefas.component";
import { UpdateTarefaComponent } from "./tarefas/update-tarefa/update-tarefa.component";

@NgModule({
  declarations: [
    DashboardComponent,

    EquipeComponent,
    CreateEquipeComponent,
    UpdateEquipeComponent,
    ReadEquipeComponent,

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
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatGridListModule,
    AppRoutingModule,
    MatToolbarModule,
    HttpClientModule,
    MatSidenavModule,
    MatTooltipModule,
    MatSelectModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    MatRadioModule,
    MatListModule,
    MatCardModule,
    BrowserModule,
    MatTreeModule,
    MatIconModule,
    MatMenuModule,
    LayoutModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

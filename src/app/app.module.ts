import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Imports do Angular Material
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'

import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatSnackBarModule} from  '@angular/material/snack-bar'
import { MatGridListModule } from '@angular/material/grid-list'

// Import componentes da tela
import { HeaderComponent } from './components/template/header/header.component';
import { NavComponent } from './components/template/nav/nav.component';

// Imports da tela
import { DashboardComponent } from './views/dashboard/dashboard.component';

import { MembroComponent } from './views/membro/membro.component';
import { CreateMembrosComponent } from './membros/create-membros/create-membros.component';

import { EquipeComponent } from './views/equipe/equipe.component';
import { CreateEquipeComponent } from './equipes/create-equipe/create-equipe.component';

import { TarefasComponent } from './views/tarefas/tarefas.component';
import { CreateTarefasComponent } from './tarefas/create-tarefas/create-tarefas.component';

import { ProjetosComponent } from './views/projetos/projetos.component';
import { CreateProjetosComponent } from './projetos/create-projetos/create-projetos.component';
import { HttpClientModule } from '@angular/common/http';
import { ReadEquipeComponent } from './equipes/read-equipe/read-equipe.component';
import { ReadMembrosComponent } from './membros/read-membros/read-membros.component';
import { ReadProjetosComponent } from './projetos/read-projetos/read-projetos.component';
import { ReadTarefasComponent } from './tarefas/read-tarefas/read-tarefas.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    DashboardComponent,
    MembroComponent,
    EquipeComponent,
    TarefasComponent,
    ProjetosComponent,
    CreateEquipeComponent,
    CreateMembrosComponent,
    CreateProjetosComponent,
    CreateTarefasComponent,
    ReadEquipeComponent,
    ReadMembrosComponent,
    ReadProjetosComponent,
    ReadTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatSnackBarModule,
    HttpClientModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

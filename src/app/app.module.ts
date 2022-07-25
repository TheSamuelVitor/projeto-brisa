import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list'
import { MatButtonModule } from '@angular/material/button'

import { MatCardModule } from '@angular/material/card';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { MembroComponent } from './views/membro/membro.component';
import { EquipeComponent } from './views/equipe/equipe.component';
import { TarefasComponent } from './views/tarefas/tarefas.component';
import { ProjetosComponent } from './views/projetos/projetos.component';
import { CreateEquipeComponent } from './equipes/create-equipe/create-equipe.component';
import { CreateMembrosComponent } from './membros/create-membros/create-membros.component';
import { CreateProjetosComponent } from './projetos/create-projetos/create-projetos.component';
import { CreateTarefasComponent } from './tarefas/create-tarefas/create-tarefas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    DashboardComponent,
    MembroComponent,
    EquipeComponent,
    TarefasComponent,
    ProjetosComponent,
    CreateEquipeComponent,
    CreateMembrosComponent,
    CreateProjetosComponent,
    CreateTarefasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

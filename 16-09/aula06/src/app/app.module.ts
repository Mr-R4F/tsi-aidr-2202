import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //*****
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BDuasViasComponent } from './views/b-duas-vias/b-duas-vias.component';
import { E1Component } from './views/e1/e1.component';
import { E2Component } from './views/e2/e2.component';

@NgModule({ //declaração de todos os componentes na aplicação (modificar, deve MEXER AQUI)
  declarations: [
    AppComponent,
    BDuasViasComponent,
    E1Component,
    E2Component
  ],
  imports: [ //coisas importadas para funcionar a aplicação // mexer aqui para ativar o módulo
    BrowserModule,
    FormsModule //<-------- ADICIONAR ISTO PARA FUNCIONAR **
  ],
  providers: [],
  bootstrap: [AppComponent] //base de aplicação
})
export class AppModule { }

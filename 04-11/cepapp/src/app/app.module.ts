import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CepComponent } from './views/cep/cep.component';
import { HttpClientModule } from "@angular/common/http"; //para fazer a chamada de API chamar ISTO

@NgModule({
  declarations: [
    AppComponent,
    CepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule //possui um modulo hhtp client que é usado para fazer as chamadas de api * usar nos serviços
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

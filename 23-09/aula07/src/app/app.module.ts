import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExemploNgIfComponent } from './views/exemplo-ng-if/exemplo-ng-if.component';
import { Exemplo2NgIfComponent } from './views/exemplo2-ng-if/exemplo2-ng-if.component';
import { Exemplo3NgIfComponent } from './views/exemplo3-ng-if/exemplo3-ng-if.component';
import { Exemplo4NgIfComponent } from './views/exemplo4-ng-if/exemplo4-ng-if.component';
import { Exemplo1NgForComponent } from './views/exemplo1-ng-for/exemplo1-ng-for.component';
import { Exemplo2NgForComponent } from './views/exemplo2-ng-for/exemplo2-ng-for.component';
import { Exemplo3NgForComponent } from './views/exemplo3-ng-for/exemplo3-ng-for.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgIfComponent,
    Exemplo2NgIfComponent,
    Exemplo3NgIfComponent,
    Exemplo4NgIfComponent,
    Exemplo1NgForComponent,
    Exemplo2NgForComponent,
    Exemplo3NgForComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

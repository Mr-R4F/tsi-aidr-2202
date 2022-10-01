import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExemploNgSwitchComponent } from './views/exemplo-ng-switch/exemplo-ng-switch.component';
import { Exemplo2NgSwitchComponent } from './views/exemplo2-ng-switch/exemplo2-ng-switch.component';
import { Exemplo3NgSwitchComponent } from './views/exemplo3-ng-switch/exemplo3-ng-switch.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemploNgSwitchComponent,
    Exemplo2NgSwitchComponent,
    Exemplo3NgSwitchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

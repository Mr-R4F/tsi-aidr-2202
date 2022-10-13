import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { E1Component } from './views/exercicios02/e1/e1.component';
import { E2Component } from './views/exercicios02/e2/e2.component';
import { E3Component } from './views/exercicios02/e3/e3.component';
import { E4Component } from './views/exercicios02/e4/e4.component';
import { E5Component } from './views/exercicios02/e5/e5.component';
import { E6Component } from './views/exercicios02/e6/e6.component';
import { E7Component } from './views/exercicios02/e7/e7.component';
import { E8Component } from './views/exercicios02/e8/e8.component';
import { E9Component } from './views/exercicios02/e9/e9.component';
import { E10Component } from './views/exercicios02/e10/e10.component';

@NgModule({
  declarations: [
    AppComponent,
    E1Component,
    E2Component,
    E3Component,
    E4Component,
    E5Component,
    E6Component,
    E7Component,
    E8Component,
    E9Component,
    E10Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

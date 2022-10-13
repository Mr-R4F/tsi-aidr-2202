import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { E1Component } from './views/exercicios01/e1/e1.component';
import { E2Component } from './views/exercicios01/e2/e2.component';
import { E3Component } from './views/exercicios01/e3/e3.component';
import { E4Component } from './views/exercicios01/e4/e4.component';
import { E5Component } from './views/exercicios01/e5/e5.component';

@NgModule({
  declarations: [
    AppComponent,
    E1Component,
    E2Component,
    E3Component,
    E4Component,
    E5Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExInterpComponent } from './views/ex-interp/ex-interp.component';
import { E1Component } from './views/e1/e1.component';
import { E2Component } from './views/e2/e2.component';
import { E3Component } from './views/e3/e3.component';
import { E4Component } from './views/e4/e4.component';

@NgModule({
  declarations: [
    AppComponent,
    ExInterpComponent,
    E1Component,
    E2Component,
    E3Component,
    E4Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

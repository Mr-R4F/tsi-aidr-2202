import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { E1Component } from './views/e1/e1.component';
import { E2Component } from './views/e2/e2.component';
import { E3Component } from './views/e3/e3.component';
import { E4Component } from './views/e4/e4.component';
import { T1Component } from './views/t1/t1.component';
import { T2Component } from './views/t2/t2.component';
import { T3Component } from './views/t3/t3.component';
import { T4Component } from './views/t4/t4.component';
import { T5Component } from './views/t5/t5.component';

@NgModule({
  declarations: [
    AppComponent,
    E1Component,
    E2Component,
    E3Component,
    E4Component,
    T1Component,
    T2Component,
    T3Component,
    T4Component,
    T5Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

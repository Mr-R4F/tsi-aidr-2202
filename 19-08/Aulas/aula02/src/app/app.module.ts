import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NomeComponent } from './views/nome/nome.component';
import { DataComponent } from './views/data/data.component';
import { SobreComponent } from './views/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    NomeComponent,
    DataComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FilmeComponent } from './views/filme/filme.component';
import { JogosComponent } from './views/jogos/jogos.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmeComponent,
    JogosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

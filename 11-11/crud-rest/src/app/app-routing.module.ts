import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './views/cliente/cliente.component';

const routes: Routes = [
  {path: 'cliente', component: ClienteComponent} //jogar isso na app componente (outlet)
]; //mapeamento das rotas (passar caminho e qual componete vai carrergar)

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

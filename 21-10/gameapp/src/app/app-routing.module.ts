import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JogoComponent } from './views/jogo/jogo.component';
import { SobreComponent } from './views/sobre/sobre.component';

const routes: Routes = [
  {
    path: 'jogo',
    component: JogoComponent
  }, //toda vez que tiver aqui aciona este componente
  {
    path: 'sobre',
    component: SobreComponent
  } 
  //definir onde vai retorna -> outlet (lugar onde vai carregat tudo da URL) -> muda apenas uma parte
]; //isso que importa, o modeulo de rotas usa para definir os links
//para criar rotas defina objetos para rotas (caminho do link e componenete)
//path -> caminho para onde vai, componenet -> diz o componente que vai carregar (colocar a classe)

@NgModule({ //
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

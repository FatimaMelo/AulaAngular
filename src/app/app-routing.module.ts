import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './components/detalhes/detalhes.component';
import { CelularComponent } from './components/celular/celular.component';
import { ListaComponent } from './components/lista/lista.component';

const routes: Routes = [
  {path:'detalhes', component:DetalhesComponent},
  {path:'produtos', component:CelularComponent},
  {path:'lista', component:ListaComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';

const routes: Routes = [
  {
    path: 'home',
    component: CabecalhoComponent
  },
  {
    path: 'criar-nota',
    component: CabecalhoComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

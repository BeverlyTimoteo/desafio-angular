import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'futurocooperado', loadChildren: () => import('./futuro-cooperado/futuro-cooperado.module').then(m => m.FuturoCooperadoModule) },
  { path: '', pathMatch: 'full', redirectTo: '/futurocooperado' },
  { path: '**', pathMatch: 'full', redirectTo: '/futurocooperado' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


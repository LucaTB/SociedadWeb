import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/pages/home/home.component';
import { FechasComponent } from 'src/app/components/pages/fechas/fechas.component';
import { BandsComponent } from 'src/app/components/pages/bands/bands.component';
import { SaltoComponent } from 'src/app/components/pages/bands/salto/salto.component';
import { WhoComponent } from 'src/app/components/pages/who/who.component';
import { AfiliarseComponent } from 'src/app/components/pages/afiliarse/afiliarse.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'fechas',
    component: FechasComponent,
  },
  {
    path: 'bands',
    component: BandsComponent,
  },
  {
    path: 'who',
    component: WhoComponent,
  },
  {
    path: 'afiliarse',
    component: AfiliarseComponent,
  },
  {
    path: 'bands/salto',
    component: SaltoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

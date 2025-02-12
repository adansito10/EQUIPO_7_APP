import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservaCitaPage } from './reserva-cita.page';

const routes: Routes = [
  {
    path: '',
    component: ReservaCitaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservaCitaPageRoutingModule {}

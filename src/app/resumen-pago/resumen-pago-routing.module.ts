import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumenPagoPage } from './resumen-pago.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenPagoPageRoutingModule {}

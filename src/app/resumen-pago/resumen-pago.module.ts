import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenPagoPageRoutingModule } from './resumen-pago-routing.module';

import { ResumenPagoPage } from './resumen-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenPagoPageRoutingModule
  ],
  declarations: [ResumenPagoPage]
})
export class ResumenPagoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReservaCitaPageRoutingModule } from './reserva-cita-routing.module';

import { ReservaCitaPage } from './reserva-cita.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservaCitaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ReservaCitaPage]
})
export class ReservaCitaPageModule {}

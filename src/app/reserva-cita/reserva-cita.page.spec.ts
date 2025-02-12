import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReservaCitaPage } from './reserva-cita.page';

describe('ReservaCitaPage', () => {
  let component: ReservaCitaPage;
  let fixture: ComponentFixture<ReservaCitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservaCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

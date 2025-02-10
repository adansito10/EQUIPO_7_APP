import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ResumenPagoPage } from './resumen-pago.page';

describe('ResumenPagoPage', () => {
  let component: ResumenPagoPage;
  let fixture: ComponentFixture<ResumenPagoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumenPagoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

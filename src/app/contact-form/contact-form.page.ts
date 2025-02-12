import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.page.html',
  styleUrls: ['./contact-form.page.scss'],
  standalone:false
})
export class ContactFormPage implements OnInit {
  ngOnInit(): void {
  }
  
  nombre: string = '';
  apellido: string = '';
  email: string = '';

  procederPago() {
    console.log('Nombre:', this.nombre);
    console.log('Apellido:', this.apellido);
    console.log('Email:', this.email);
  }
}
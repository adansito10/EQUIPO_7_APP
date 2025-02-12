import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reserva-cita',
  templateUrl: './reserva-cita.page.html',
  styleUrls: ['./reserva-cita.page.scss'],
  standalone: false
})
export class ReservaCitaPage implements OnInit {
  formulario: FormGroup;

  constructor(private fb: FormBuilder, private alertCtrl: AlertController) {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      telefono: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      fecha: ['', Validators.required],
      hora: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  async enviarFormulario() {
    if (this.formulario.valid) {
      console.log('Datos del formulario:', this.formulario.value);

      // Mostrar mensaje de confirmación
      const alert = await this.alertCtrl.create({
        header: 'Cita Registrada ✅',
        message: 'Se ha registrado tu cita, consulta tu cita en consultas.',
        buttons: ['OK']
      });

      await alert.present();

      // Reiniciar formulario después de enviar
      this.formulario.reset();
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Error 🚨',
        message: 'Por favor, completa todos los campos correctamente.',
        buttons: ['OK']
      });

      await alert.present();
    }
  }
}

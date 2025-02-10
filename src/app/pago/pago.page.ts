import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
  standalone: false
})
export class PagoPage implements OnInit {
  producto: any;
  cantidad: number = 1;
  total: number = 0;
  metodoPago: string = '';
  cupón: string = '';

  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.obtenerDatosProducto();
  }

  obtenerDatosProducto() {
    const data = this.route.snapshot.queryParams;
    if (data && data['producto']) {
      this.producto = JSON.parse(data['producto']);
      this.cantidad = data['cantidad'] ? Number(data['cantidad']) : 1;
      this.total = this.producto.price * this.cantidad;
    }
  }

  confirmarPago() {
    if (!this.metodoPago) {
      this.mostrarToast('Por favor, selecciona un método de pago.', 'warning');
      return;
    }

    this.mostrarToast(`Pago confirmado con ${this.metodoPago}`, 'success');
    
    setTimeout(() => {
      this.navCtrl.navigateBack('/tabs/tab1');
    }, 2000);
  }

  async mostrarToast(mensaje: string, color: 'success' | 'warning' | 'danger') {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      color: color,
      position: 'bottom'
    });
    toast.present();
  }
}
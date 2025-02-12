import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
  standalone:false
})
export class CarritoPage implements OnInit {

  carrito: any[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
      this.carrito = JSON.parse(carritoGuardado);
    }
  }

  eliminarProducto(index: number) {
    this.carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  finalizarCompra() {
    alert('Compra realizada con éxito');
    localStorage.removeItem('carrito'); 
    this.carrito = [];
    this.router.navigate(['/']); 
  }
}

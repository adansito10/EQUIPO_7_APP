import { Component } from '@angular/core';
import { MenuController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false
})
export class Tab1Page {
  
  nombreUsuario: string = 'Usuario'; 
  vistaProductos: string = 'grid'; 

  productos = [
    { id: 1, nombre: 'Albumes', descripcion: 'Álbum fotográfico personalizado', precio: 30.00, image: 'https://www.officedepot.com.mx/medias/100060916.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDQ0Njk4fGltYWdlL2pwZWd8YURSbEwyaGpNQzh4TURreU5qWTBNamsxTkRJM01DOHhNREF3TmpBNU1UWXVhbkJuWHpFeU1EQm1kSGN8YjdjN2JkMWVjZjVhODIyZDRjMWEzYzZiNmMzMWQ2NTk1Y2QxMDI5MDBhMWM3YzU3N2QzMjU3NzAyMzU2YmE2OA' },
    { id: 2, nombre: 'Cojines', descripcion: 'Cojines personalizados con fotos', precio: 200.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxdvIYISKID5z4j7rvS20K4UxD7iO-6Z80g&s' },
    { id: 3, nombre: 'Collages', descripcion: 'Collages de fotos para decorar', precio: 50.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8aoBKqYJdS8wwCkuLVNhm8jrQJcXpdAjtxQ&s' },
    { id: 4, nombre: 'Llaveritos', descripcion: 'Llaveros personalizados con imágenes', precio: 25.00, image: 'https://i.etsystatic.com/18644311/r/il/15254a/5873337001/il_570xN.5873337001_2t4b.jpg' },
  ];
  
  productosFiltrados = [...this.productos]; 
  carrito: any[] = JSON.parse(localStorage.getItem('carrito') || '[]'); 
  contadorCarrito: number = this.carrito.reduce((total, p) => total + p.cantidad, 0);

  constructor(
    private menuCtrl: MenuController,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  cambiarVista(vista: string) {
    this.vistaProductos = vista;
  }

  buscarProducto(event: any) {
    const texto = event.target.value.toLowerCase();
    if (texto && texto.trim() !== '') {
      this.productosFiltrados = this.productos.filter(producto => 
        producto.nombre.toLowerCase().includes(texto)
      );
    } else {
      this.productosFiltrados = [...this.productos];
    }
  }

  agregarAlCarrito(producto: any) {
    let item = this.carrito.find(p => p.id === producto.id);
  
    if (item) {
      item.cantidad++;
    } else {
      this.carrito.push({ ...producto, cantidad: 1 });
    }
  
    this.actualizarCarrito();
  }

  aumentarCantidad(id: number) {
    let item = this.carrito.find(p => p.id === id);
    if (item) {
      item.cantidad++;
      this.actualizarCarrito();
    }
  }

  disminuirCantidad(id: number) {
    let item = this.carrito.find(p => p.id === id);
    if (item && item.cantidad > 1) {
      item.cantidad--;
      this.actualizarCarrito();
    } else {
      this.eliminarDelCarrito(id);
    }
  }

  eliminarDelCarrito(id: number) {
    this.carrito = this.carrito.filter(p => p.id !== id);
    this.actualizarCarrito();
  }

  actualizarCarrito() {
    this.contadorCarrito = this.carrito.reduce((total, p) => total + p.cantidad, 0);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  verDetalles(id: number) {
    this.router.navigate(['/detalle-producto', id]);
  }

  async cerrarSesion() {
    const alert = await this.alertCtrl.create({
      header: 'Cerrar sesión',
      message: '¿Estás seguro de que quieres cerrar sesión?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Salir',
          handler: () => {
            localStorage.removeItem('usuario');
            this.router.navigate(['/login']);
            this.menuCtrl.close();
          }
        }
      ]
    });

    await alert.present();
  }
}

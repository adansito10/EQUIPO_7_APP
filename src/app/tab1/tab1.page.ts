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
  carrito: any[] = []; 
  contadorCarrito: number = 0; 

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
    this.carrito = JSON.parse(localStorage.getItem('carrito') || '[]');
  
    let item = this.carrito.find(p => p.id === producto.id);
  
    if (item) {
      item.cantidad += 1; // Si ya está en el carrito, aumenta la cantidad
    } else {
      producto.cantidad = 1;
      producto.enCarrito = true;
      this.carrito.push(producto);
    }

    this.contadorCarrito = this.carrito.reduce((total, p) => total + p.cantidad, 0);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  cambiarCantidad(producto: any, cambio: number) {
    let index = this.carrito.findIndex(p => p.id === producto.id);
    if (index !== -1) {
      this.carrito[index].cantidad += cambio;
      if (this.carrito[index].cantidad <= 0) {
        this.carrito.splice(index, 1);
        producto.enCarrito = false;
      }
    }

    this.contadorCarrito = this.carrito.reduce((total, p) => total + p.cantidad, 0);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }

  verDetalleProducto(id: number) {
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

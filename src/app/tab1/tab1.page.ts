import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone:false
})
export class Tab1Page {
  
  nombreUsuario: string = 'Usuario'; 
  vistaProductos: string = 'grid'; 

  productos = [
    { id: 1, nombre: 'Albumes', descripcion: 'Peine de madera natural', precio: 30.00, image: 'https://www.officedepot.com.mx/medias/100060916.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDQ0Njk4fGltYWdlL2pwZWd8YURSbEwyaGpNQzh4TURreU5qWTBNamsxTkRJM01DOHhNREF3TmpBNU1UWXVhbkJuWHpFeU1EQm1kSGN8YjdjN2JkMWVjZjVhODIyZDRjMWEzYzZiNmMzMWQ2NTk1Y2QxMDI5MDBhMWM3YzU3N2QzMjU3NzAyMzU2YmE2OA' },
    { id: 2, nombre: 'Cojines', descripcion: 'Perfume exclusivo para caballeros', precio: 200.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxdvIYISKID5z4j7rvS20K4UxD7iO-6Z80g&s' },
    { id: 3, nombre: 'Collages', descripcion: 'Navaja de afeitar profesional', precio: 50.00, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8aoBKqYJdS8wwCkuLVNhm8jrQJcXpdAjtxQ&s' },
    { id: 4, nombre: 'Llaveritos', descripcion: 'Cera modeladora para barba', precio: 25.00, image: 'https://i.etsystatic.com/18644311/r/il/15254a/5873337001/il_570xN.5873337001_2t4b.jpg' },
  ];
  
  productosFiltrados = [...this.productos]; 

  constructor(private menuCtrl: MenuController) {}

  cerrarMenu() {
    this.menuCtrl.close('menuPrincipal');
  }

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

  verDetalles(productoId: number) {
    console.log(`Ver detalles del producto con ID: ${productoId}`);
  }
}

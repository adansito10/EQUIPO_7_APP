import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
  standalone: false
})
export class DetalleProductoPage implements OnInit {
  productoId!: number;
  cantidadSeleccionada: number = 1;
  cardData: any;

  productos = [
    { id: 1, title: 'Albumes', price: 350, stock: 15, description: 'Guarda tus mejores recuerdos en nuestros albumes personalizados', image: 'https://www.officedepot.com.mx/medias/100060916.jpg-1200ftw?context=bWFzdGVyfHJvb3R8NDQ0Njk4fGltYWdlL2pwZWd8YURSbEwyaGpNQzh4TURreU5qWTBNamsxTkRJM01DOHhNREF3TmpBNU1UWXVhbkJuWHpFeU1EQm1kSGN8YjdjN2JkMWVjZjVhODIyZDRjMWEzYzZiNmMzMWQ2NTk1Y2QxMDI5MDBhMWM3YzU3N2QzMjU3NzAyMzU2YmE2OA' },
    { id: 2, title: 'Cojines', price: 30, stock: 10, description: 'decorar tus cojines con tus mejores fotos', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgxdvIYISKID5z4j7rvS20K4UxD7iO-6Z80g&s' },
    { id: 3, title: 'Collage', price: 80, stock: 7, description: 'Marca tus mejores fotos en nuestros cuadros que tenemos para ti  ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8aoBKqYJdS8wwCkuLVNhm8jrQJcXpdAjtxQ&s' },
    { id: 4, title: 'Llaverito', price: 80, stock: 7, description: 'Marca tus mejores fotos en nuestros cuadros que tenemos para ti  ', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8aoBKqYJdS8wwCkuLVNhm8jrQJcXpdAjtxQ&s' },

  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.productoId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('ID del producto:', this.productoId);

    this.cardData = this.productos.find(p => p.id === this.productoId);
  }

  aumentarCantidad() {
    if (this.cantidadSeleccionada < this.cardData.stock) {
      this.cantidadSeleccionada++;
    }
  }

  disminuirCantidad() {
    if (this.cantidadSeleccionada > 1) {
      this.cantidadSeleccionada--;
    }
  }
}
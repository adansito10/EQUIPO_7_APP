import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  category: string = 'all';

  services = [
    { name: 'Quinceaños', price: 50, category: 'all', image: 'https://images.squarespace-cdn.com/content/v1/5feba61e53772d5386a5f7a1/1625093554041-UGA979DJ3A5I11TGLKWK/Fotografi%CC%81a%2Bquincean%CC%83os%2Bchapala-1-11.jpg' },
    { name: 'Bodas', price: 35, category: 'all', image: 'https://cdn0.bodas.com.mx/article/3583/3_2/1280/jpg/53853-boda.webp' },
    { name: 'Comuniones', price: 30, category: 'all', image: 'assets/everyday-shirt.jpg' },
    { name: 'Confirmaciones', price: 55, category: 'all', image: 'assets/camiour-shirt.jpg' }
  ];

  constructor(private navCtrl: NavController) {}

  filteredServices() {
    if (this.category === 'all') return this.services;
    return this.services.filter(service => service.category === this.category);
  }

  verDetalles(service: any) {
    this.navCtrl.navigateForward(['/servicios/detalle-servicio'], {
      queryParams: { service: JSON.stringify(service) }
    });
  }
};

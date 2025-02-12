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
    { name: 'Comuniones', price: 30, category: 'all', image: 'https://img.freepik.com/foto-gratis/retrato-nino-preparandose-su-primera-comunion_23-2149377998.jpg' },
    { name: 'Quinceaños', price: 50, category: 'all', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5h1rycFCWz4lRi-tSDdqnUPt_NE3JHYkeqA&s', video: 'https://example.com/video1.mp4' },
    { name: 'Bodas', price: 35, category: 'all', image: 'https://www.lacabina.mx/wp-content/uploads/2020/05/fotografo-para-bodas-en-puebla-ivan-cozatl-19.jpg' },
    { name: 'Babyshower', price: 55, category: 'all', image: 'https://i0.wp.com/paolocasasfotografo.com/wp-content/uploads/2024/01/baby5-scaled.webp?fit=1707%2C2560&ssl=1' },
    { name: 'video de graduacion', price: 50, category: 'video', image: 'https://videos.pexels.com/video-files/7945884/7945884-hd_1080_1920_25fps.mp4' },
    { name: 'Bodas', price: 30, category: 'video', image: 'https://videos.pexels.com/video-files/28952509/12526887_360_640_30fps.mp4' },
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

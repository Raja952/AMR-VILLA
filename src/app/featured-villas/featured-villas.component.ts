import { Component } from '@angular/core';

@Component({
  selector: 'app-featured-villas',
  templateUrl: './featured-villas.component.html',
  styleUrls: ['./featured-villas.component.scss']
})
export class FeaturedVillasComponent {
  villas = [
    { name: 'Azure Pool Villa', location: 'Lonavala', price: 12000, guests: 12, beds: 5, tag: 'Popular', img: 'assets/images/villa-1.jpg' },
    { name: 'Palm Grove Retreat', location: 'Alibaug', price: 15500, guests: 15, beds: 6, tag: 'New', img: 'assets/images/villa-2.jpg' },
    { name: 'Sunset Heights', location: 'Karjat', price: 9500, guests: 10, beds: 4, tag: 'Best Value', img: 'assets/images/villa-3.jpg' }
  ];
}

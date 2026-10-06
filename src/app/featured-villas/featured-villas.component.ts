import { Component } from '@angular/core';

interface Villa { name: string; image: string; }

@Component({
  selector: 'app-featured-villas',
  templateUrl: './featured-villas.component.html',
  styleUrls: ['./featured-villas.component.scss']
})
export class FeaturedVillasComponent {
  villas: Villa[] = [
    { name: 'Villa One', image: 'assets/images/villa-1.jpg' },
    { name: 'Villa Two', image: 'assets/images/villa-2.jpg' }
  ];
}

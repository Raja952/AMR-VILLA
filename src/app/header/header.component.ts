import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  villasOpen = false;
  menuOpen = false;
  isHome = true;

  navLinks = [
    { label: 'Home', link: '/', exact: true, dropdown: false },
    { label: 'Our Villas', link: '/villas', exact: false, dropdown: true },
    { label: 'About Us', link: '/about', exact: false, dropdown: false },
    { label: 'Contact Us', link: '/contact', exact: false, dropdown: false },
    { label: 'Blog', link: '/blog', exact: false, dropdown: false }
  ];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(e => {
        this.isHome = e.urlAfterRedirects.split(/[?#]/)[0] === '/';
        this.menuOpen = false;
      });
  }
}

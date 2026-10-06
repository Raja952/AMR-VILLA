import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-featured-villas></app-featured-villas>
  `
})
export class HomeComponent {}

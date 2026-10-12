import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturedVillasComponent } from './featured-villas/featured-villas.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BookComponent } from './pages/book/book.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'AMR Villas | Living Spaces' },
  { path: 'villas', component: FeaturedVillasComponent, title: 'Our Villas | AMR Villas' },
  { path: 'about', component: AboutComponent, title: 'About Us | AMR Villas' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us | AMR Villas' },
  { path: 'book', component: BookComponent, title: 'Book a Villa | AMR Villas' },
  { path: 'blog', component: BlogComponent, title: 'Blog | AMR Villas' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

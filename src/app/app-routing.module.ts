import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './about/about.component';
import { FeaturedVillasComponent } from './featured-villas/featured-villas.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';

const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Book Villa Stay' },
  { path: 'villas', component: FeaturedVillasComponent, title: 'Our Villas | Book Villa Stay' },
  { path: 'about', component: AboutComponent, title: 'About Us | Book Villa Stay' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us | Book Villa Stay' },
  { path: 'blog', component: BlogComponent, title: 'Blog | Book Villa Stay' },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}

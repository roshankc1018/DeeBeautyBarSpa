import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import all components that will be part of the routing
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Define application routes
const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Dee Beauty Bar - Home' }, // Default route to Home
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Dee Beauty Bar - Services',
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'Dee Beauty Bar - About Us',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Dee Beauty Bar - Contact',
  },
  { path: '**', redirectTo: '' }, // Wildcard route for any undefined paths, redirects to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the router at the application's root level
  exports: [RouterModule], // Export RouterModule to make router directives available to other modules
})
export class AppRoutingModule {}

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PharmYarokComponent } from './pharm-yarok/pharm-yarok.component';
import { ThreatsComponent } from './threats/threats.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pharm-yarok', component: PharmYarokComponent },
  { path: 'threats', component: ThreatsComponent },
  { path: '**', redirectTo: '' },
];

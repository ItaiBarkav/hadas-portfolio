import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PharmYarokComponent } from './pharm-yarok/pharm-yarok.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { ThreatsComponent } from './threats/threats.component';

export const routes: Routes = [
  { path: '', loadComponent: () => HomeComponent },
  { path: 'pharm-yarok', loadComponent: () => PharmYarokComponent },
  { path: 'threats', loadComponent: () => ThreatsComponent },
  { path: 'profiles', loadComponent: () => ProfilesComponent },
  { path: '**', redirectTo: '' },
];

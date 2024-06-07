import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SaudeoceanoComponent } from './components/saudeoceano/saudeoceano.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'saudeoceano', component: SaudeoceanoComponent},
  {path: '**', component: HomeComponent}

];

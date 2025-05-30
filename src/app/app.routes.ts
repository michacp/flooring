import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PrivacyPolicyComponent } from './core/components/privacy-policy/privacy-policy.component';

export const routes: Routes = [   // Redirección de ruta vacía a 'home'
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },




    { path: '**', redirectTo: 'home' }
];

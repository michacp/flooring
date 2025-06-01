import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { PrivacyPolicyComponent } from './core/components/privacy-policy/privacy-policy.component';
import { TermsOfServiceComponent } from './core/components/terms-of-service/terms-of-service.component';
import { DataDeletionInstructionsComponent } from './core/components/data-deletion-instructions/data-deletion-instructions.component';

export const routes: Routes = [   // Redirección de ruta vacía a 'home'
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
 { path: 'terms-of-service', component: TermsOfServiceComponent },
 { path: 'data-deletion-instructions', component: DataDeletionInstructionsComponent },



    { path: '**', redirectTo: 'home' }
];

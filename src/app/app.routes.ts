import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { ServicesComponent } from './features/services/services/services.component';
import { ContactComponent } from './features/contact/contact.component';
import { BookingComponent } from './features/booking/booking.component';
import { TermsAndConditionsComponent } from './features/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './features/privacy-policy/privacy-policy.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'book', component: BookingComponent },
  { path: 'terms', component: TermsAndConditionsComponent },
  { path: 'privacy', component: PrivacyPolicyComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

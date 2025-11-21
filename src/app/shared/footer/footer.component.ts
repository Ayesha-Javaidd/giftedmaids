import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  logoPreview: string | ArrayBuffer | null = 'assets/images/default-logo.png';

  brand = {
    name: 'Gifted Maids Glastonbury LLC',
  };

  menuLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
    { label: 'Terms and Conditions', path: '/terms' },
    { label: 'Privacy Policy', path: '/privacy' },
  ];

  phone = '508-280-9008';
  email = 'support@giftedmaidsct.com';
}

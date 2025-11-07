import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {

  logoPreview: string | ArrayBuffer | null = 'assets/images/default-logo.png';

  constructor(private router: Router) {}

  isMenuOpen = false;

  navLinks = [
    { label: 'Home', path: '/home' },
    { label: 'Services', path: '/services' },
    { label: 'Contact', path: '/contact' },
  ];

  ctaButton = {
    label: 'Book Now',
    path: '/book',
  };

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  searchQuery: string = '';

  onSearch() {
    if (!this.searchQuery.trim()) return;

    console.log('Searching for:', this.searchQuery);

    // Example: If searching among your nav pages
    const match = this.navLinks.find((link) =>
      link.label.toLowerCase().includes(this.searchQuery.toLowerCase())
    );

    if (match) {
      this.router.navigate([match.path]);
    } else {
      // If no match, route to a search result page (optional)
      this.router.navigate(['/search'], {
        queryParams: { q: this.searchQuery },
      });
    }

    this.searchQuery = '';
  }
}

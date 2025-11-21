import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-hero',
  imports: [CommonModule],
  templateUrl: './services-hero.component.html',
  styleUrl: './services-hero.component.css',
})
export class ServicesHeroComponent {
  @Input() services = [
    {
      icon: 'fas fa-broom',
      title: 'Deep Cleaning',
      description:
        'Thorough cleaning to remove built-up dirt, dust, and grime from hard-to-reach areas.',
    },
    {
      icon: 'fas fa-box-open',
      title: 'Move-In / Move-Out Cleaning',
      description:
        'Detailed cleaning to prepare your space before moving in or after moving out.',
    },
    {
      icon: 'fas fa-house',
      title: 'Residential Cleaning for Homes',
      description:
        'Removal of dust, debris, and construction residue for a polished finish.',
    },
  ];
}

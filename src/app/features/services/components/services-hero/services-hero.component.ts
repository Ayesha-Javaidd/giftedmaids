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
      title: 'Deep Cleaning',
      description:
        'Thorough cleaning to remove built-up dirt, dust, and grime from hard-to-reach areas.',
    },
    {
      title: 'Move-In / Move-Out Cleaning',
      description:
        'Detailed cleaning to prepare your space before moving in or after moving out.',
    },
    {
      title: 'Residential Cleaning for Homes',
      description:
        'Removal of dust, debris, and construction residue for a polished finish.',
    },
  ];
}

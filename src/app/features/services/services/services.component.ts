import { Component } from '@angular/core';
import { ServicesHeroComponent } from '../components/services-hero/services-hero.component';
import { CtaSectionComponent } from "../../home/components/cta-section/cta-section.component";

@Component({
  selector: 'app-services',
  imports: [ServicesHeroComponent, CtaSectionComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {}

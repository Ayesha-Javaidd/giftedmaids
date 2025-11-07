import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css'],
})
export class ServiceCardComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() price?: string; 
  @Input() link: string = '/book';
}

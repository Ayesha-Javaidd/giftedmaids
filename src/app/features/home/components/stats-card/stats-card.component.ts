import { CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.css'],
})
export class StatsCardComponent implements AfterViewInit {
  stats = [
    { number: '10', suffix: '', label: 'Years of Experience' },
    { number: '50', suffix: '+', label: 'Satisfied Clients' },
    { number: '10', suffix: '+', label: 'Trained Staff' },
    { number: '50', suffix: '+', label: 'Homes Cleaned' },
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const elements = this.el.nativeElement.querySelectorAll('.fade-up');

    // Set initial state
    elements.forEach((el: Element) => {
      (el as HTMLElement).classList.remove('in-view');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            element.classList.add('in-view');
          } else {
            element.classList.remove('in-view'); // remove when out of view
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% visible
        rootMargin: '0px 0px -50px 0px', // adds small buffer for smoother trigger
      }
    );

    elements.forEach((el: Element) => observer.observe(el));
  }
}

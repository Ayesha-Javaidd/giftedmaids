import { CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [CommonModule, ServiceCardComponent],
  templateUrl: './services-section.component.html',
  styleUrls: ['./services-section.component.css'],
})
export class ServicesSectionComponent implements AfterViewInit {
  services = [
    {
      image: 'assets/images/image1.png',
      title: 'Residential Cleaning for Homes',
      description:
        'Our standard cleaning service covers all the essentials to make your home shine, from dusting and vacuuming to kitchen and bathroom sanitation.',
      link: '/book',
    },
    {
      image: 'assets/images/image2.png',
      title: 'Move in and Move Out Cleaning',
      description:
        'Whether you’re moving in or out, we provide a thorough deep clean to ensure the property is spotless for the next occupants.',
      link: '/book',
    },
  ];

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      const elements = this.el.nativeElement.querySelectorAll('.slide-in');

      // Ensure all start hidden
      elements.forEach((el: HTMLElement) => el.classList.remove('in-view'));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as HTMLElement;
            // Only trigger when actually scrolled into view
            if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
              el.classList.add('in-view');
              observer.unobserve(el); // trigger only once
            }
          });
        },
        {
          threshold: 0.1, // triggers when 10% visible
          rootMargin: '0px 0px -150px 0px', // push trigger lower so it won't fire on load
        }
      );

      elements.forEach((el: Element) => observer.observe(el));
    });
  }
}

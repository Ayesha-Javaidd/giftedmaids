import { CommonModule } from '@angular/common';
import { Component, ElementRef, AfterViewInit, NgZone } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cta-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cta-section.component.html',
  styleUrls: ['./cta-section.component.css'],
})
export class CtaSectionComponent implements AfterViewInit {
  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      const section = this.el.nativeElement.querySelector('.fade-up-section');

      if (!section) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
              section.classList.add('in-view');
              observer.unobserve(section);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px', // triggers slightly before fully visible
        }
      );

      observer.observe(section);
    });
  }
}

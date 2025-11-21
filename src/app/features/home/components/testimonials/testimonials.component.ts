import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  NgZone,
} from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent implements AfterViewInit {
  @Input() testimonials!: { quote: string; author: string }[];

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      const cards = this.el.nativeElement.querySelectorAll('.fade-up-card');

      // start hidden
      cards.forEach((el: HTMLElement) => el.classList.remove('in-view'));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as HTMLElement;
            if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
              el.classList.add('in-view');
              observer.unobserve(el); // animate once
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
      );

      cards.forEach((el: Element) => observer.observe(el));
    });
  }
}

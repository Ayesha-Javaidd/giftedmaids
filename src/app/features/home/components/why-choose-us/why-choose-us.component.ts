import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  ElementRef,
  AfterViewInit,
  NgZone,
} from '@angular/core';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrls: ['./why-choose-us.component.css'],
})
export class WhyChooseUsComponent implements AfterViewInit {
  @Input() features!: { icon: string; title: string; description: string }[];

  constructor(private el: ElementRef, private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      const cards = this.el.nativeElement.querySelectorAll('.fade-up-card');

      // Ensure all start hidden
      cards.forEach((el: HTMLElement) => el.classList.remove('in-view'));

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const el = entry.target as HTMLElement;
            if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
              el.classList.add('in-view');
              observer.unobserve(el); // animate only once
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -100px 0px', // trigger slightly before fully visible
        }
      );

      cards.forEach((el: Element) => observer.observe(el));
    });
  }
}

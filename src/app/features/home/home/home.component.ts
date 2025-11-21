import { Component } from '@angular/core';
import { HeroAboutComponent } from '../components/hero-about/hero-about.component';
import { StatsCardComponent } from '../components/stats-card/stats-card.component';
import { ServicesSectionComponent } from '../components/services-section/services-section.component';
import { WhyChooseUsComponent } from '../components/why-choose-us/why-choose-us.component';
import { TestimonialsComponent } from '../components/testimonials/testimonials.component';
import { FaqSectionComponent } from '../components/faq-section/faq-section.component';
import { CtaSectionComponent } from '../components/cta-section/cta-section.component';
@Component({
  selector: 'app-home',
  imports: [
    HeroAboutComponent,
    StatsCardComponent,
    ServicesSectionComponent,
    WhyChooseUsComponent,
    TestimonialsComponent,
    FaqSectionComponent,
    CtaSectionComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  features = [
    {
      icon: 'fas fa-users',
      title: 'Professional Team',
      description:
        'Our dedicated team of cleaning experts has the experience and skills to provide thorough cleaning services, ensuring every corner of your home is spotless.',
    },
    {
      icon: 'fas fa-sliders-h',
      title: 'Customized Cleaning Plans',
      description:
        'We understand that every home is unique, which is why we offer personalized cleaning schedules to accommodate your specific requirements and preferences.',
    },
    {
      icon: 'fas fa-spray-can-sparkles',
      title: 'Quality Cleaning Products',
      description:
        'We utilize advanced and eco-friendly cleaning products to maintain a clean and healthy environment for you and your family.',
    },
    {
      icon: 'fas fa-star',
      title: 'Attention to Detail',
      description:
        'We pay attention to the smallest details to ensure thorough cleaning, giving you peace of mind and a hygienic living space.',
    },
  ];

  testimonials = [
    {
      quote: `I'm so impressed with the level of cleanliness and care the team provided. My home feels rejuvenated and fresh. Thank you!`,
      author: 'Happy Homeowners',
    },
    {
      quote: `The professionalism and efficiency of the cleaning crew exceeded my expectations. I highly recommend their services to anyone looking for top-notch house cleaning.`,
      author: 'Satisfied Customers',
    },
    {
      quote: `I can't thank the team enough for their exceptional service. They truly go above and beyond to ensure customer satisfaction. I'm a loyal customer for life!`,
      author: 'Repeat Clients',
    },
  ];

  faqs = [
    {
      question: 'What house cleaning services do you offer?',
      answer:
        'We offer regular cleaning, deep cleaning, move-in/move-out cleaning, and post-renovation services for homes and apartments.',
    },
    {
      question: 'Do I need to provide cleaning supplies?',
      answer:
        "No, our cleaners come with professional-grade, eco-friendly products and tools, so you don't have to worry about a thing.",
    },
    {
      question: 'How can I book a cleaning session?',
      answer:
        'You can book easily through our service booking page. We’ll confirm and schedule your cleaning right away.',
    },
    {
      question: 'Can I schedule recurring cleanings?',
      answer:
        'Absolutely! Choose weekly, bi-weekly, or monthly cleaning plans for consistent care and discounted rates.',
    },
    {
      question: 'Are your cleaners background-checked?',
      answer:
        'Yes. Every cleaner is vetted, background-checked, and professionally trained to ensure your safety and satisfaction.',
    },
  ];
}

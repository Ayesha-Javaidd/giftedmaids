import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-about',
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-about.component.html',
  styleUrl: './hero-about.component.css',
})
export class HeroAboutComponent {}

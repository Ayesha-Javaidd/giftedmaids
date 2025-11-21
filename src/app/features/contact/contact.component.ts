import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  success = '';
  error = '';

  // Simple email validation regex
  validateEmail(email: string): boolean {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  async sendMessage() {
    this.success = '';
    this.error = '';

    if (!this.name || !this.email || !this.message) {
      this.error = 'Please fill all fields.';
      return;
    }

    if (!this.validateEmail(this.email)) {
      this.error = 'Please enter a valid email address.';
      return;
    }

    const params = {
      from_name: this.name,
      from_email: this.email,
      message: this.message,
      to_email: environment.emailJS.templates.contact.adminEmail,
    };

    try {
      const res = await emailjs.send(
        environment.emailJS.serviceID,
        environment.emailJS.templates.contact.templateID,
        params,
        environment.emailJS.publicKey
      );

      if (res.status === 200) {
        this.success = 'Message sent successfully! We will contact you soon.';
        this.name = '';
        this.email = '';
        this.message = '';
      }
    } catch (err) {
      console.error(err);
      this.error = 'Failed to send message. Please try again.';
    }
  }
}
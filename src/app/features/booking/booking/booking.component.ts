import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as L from 'leaflet';
import emailjs from '@emailjs/browser';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit, AfterViewInit {
  selectedPackage: string | null = null;
  selectedAddOns: string[] = [];
  instructions = '';
  selectedDate = '';
  selectedTime = '';
  address = '';
  lat: number | null = null;
  lng: number | null = null;
  searchQuery = '';
  errorMessage = '';
  successMessage = '';
  showDateError = false;
  showTimeError = false;

  private map: any;
  private marker: any;

  // ✅ Packages
  packages = [
    {
      name: 'Standard Cleaning',
      description: '1 bedroom, 1 bathroom, 1 kitchen, 1 dining/living room.',
      price: 176,
      addOns: [
        { name: 'Microwave Cleaning (Inside & Outside)', price: 20 },
        { name: 'Stove Cleaning (Inside & Outside)', price: 40 },
        { name: 'Fridge Cleaning (Inside & Outside)', price: 35 },
      ],
    },
    {
      name: 'Deep Cleaning',
      description:
        'Thorough cleaning for all rooms, including baseboards and vents.',
      price: 220,
      addOns: [
        { name: 'Oven Deep Cleaning', price: 45 },
        { name: 'Window Interior Cleaning', price: 30 },
        { name: 'Cabinet Interior Cleaning', price: 25 },
      ],
    },
    {
      name: 'Move-In / Move-Out Cleaning',
      description:
        'Full property cleaning before moving in or after moving out.',
      price: 260,
      addOns: [
        { name: 'Garage Cleaning', price: 50 },
        { name: 'Balcony/Patio Cleaning', price: 30 },
        { name: 'Wall Spot Cleaning', price: 25 },
      ],
    },
    {
      name: 'Post-Construction Cleaning',
      description: 'Removes dust, paint marks, and residue from all surfaces.',
      price: 300,
      addOns: [
        { name: 'Debris Removal', price: 40 },
        { name: 'Window Polishing', price: 30 },
        { name: 'Floor Polishing', price: 50 },
      ],
    },
    {
      name: 'Office Cleaning',
      description:
        'Regular or deep cleaning for offices and commercial spaces.',
      price: 240,
      addOns: [
        { name: 'Computer Equipment Dusting', price: 25 },
        { name: 'Conference Room Sanitization', price: 30 },
        { name: 'Kitchenette Cleaning', price: 20 },
      ],
    },
    {
      name: 'Airbnb / Rental Cleaning',
      description:
        'Fast turnaround cleaning between guest stays, includes linens change.',
      price: 200,
      addOns: [
        { name: 'Laundry & Linen Service', price: 35 },
        { name: 'Fridge Restock (Basic Items)', price: 25 },
        { name: 'Toiletry Refill', price: 15 },
      ],
    },
  ];

  get selectedPackageDetails() {
    return this.packages.find((p) => p.name === this.selectedPackage);
  }

  get totalPrice(): number {
    let total = this.selectedPackageDetails?.price || 0;
    if (this.selectedPackageDetails) {
      const selectedAddOnObjects = this.selectedPackageDetails.addOns.filter(
        (a) => this.selectedAddOns.includes(a.name)
      );
      total += selectedAddOnObjects.reduce((sum, a) => sum + a.price, 0);
    }
    return total;
  }

  async ngOnInit() {
    const iconRetinaUrl =
      'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png';
    const iconUrl =
      'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png';
    const shadowUrl =
      'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png';
    L.Marker.prototype.options.icon = L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      shadowSize: [41, 41],
    });
  }

  ngAfterViewInit() {
    this.map = L.map('map').setView([24.8607, 67.0011], 12);
    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
      {
        attribution: '© OpenStreetMap contributors © CARTO',
      }
    ).addTo(this.map);

    this.map.on('click', async (e: any) => {
      const { lat, lng } = e.latlng;
      this.setMarker(lat, lng);
      await this.reverseGeocode(lat, lng);
    });
  }

  private async reverseGeocode(lat: number, lng: number) {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json&accept-language=en`
    );
    const data = await response.json();
    this.address = data.display_name || 'Unknown location';
  }

  async searchLocation() {
    if (!this.searchQuery.trim()) {
      alert('Please enter an area or address.');
      return;
    }
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        this.searchQuery
      )}&accept-language=en`
    );
    const results = await response.json();

    if (results.length > 0) {
      const { lat, lon } = results[0];
      this.setMarker(parseFloat(lat), parseFloat(lon));
      this.map.setView([lat, lon], 15);
      this.address = results[0].display_name;
    } else {
      alert('No results found.');
    }
  }

  private setMarker(lat: number, lng: number) {
    this.lat = lat;
    this.lng = lng;
    if (this.marker) this.marker.remove();
    this.marker = L.marker([lat, lng]).addTo(this.map);
  }

  toggleAddOn(addOnName: string) {
    if (this.selectedAddOns.includes(addOnName)) {
      this.selectedAddOns = this.selectedAddOns.filter((a) => a !== addOnName);
    } else {
      this.selectedAddOns.push(addOnName);
    }
  }

  validateBooking(): boolean {
    this.errorMessage = '';
    this.showTimeError = false;
    this.showDateError = false;

    if (!this.selectedPackage) {
      this.errorMessage = 'Please select a package.';
      return false;
    }
    if (!this.selectedDate) {
      this.showDateError = true;
      return false;
    }
    if (!this.selectedTime) {
      this.showTimeError = true;
      return false;
    }

    const selectedDateTime = new Date(
      `${this.selectedDate}T${this.selectedTime}`
    );
    const now = new Date();
    if (selectedDateTime < now) {
      this.errorMessage = 'You cannot select a past date or time.';
      return false;
    }

    const day = selectedDateTime.getDay(); // 0=Sun ... 6=Sat
    const hour = selectedDateTime.getHours();

    if (day === 6) {
      this.errorMessage = 'We are closed on Saturdays.';
      return false;
    }
    if (day === 5 && (hour < 8 || hour >= 16)) {
      this.errorMessage = 'Friday hours: 8 AM - 4 PM only.';
      return false;
    }
    if (day >= 0 && day <= 4 && (hour < 9 || hour >= 17)) {
      this.errorMessage = 'Sun-Thu hours: 9 AM - 5 PM only.';
      return false;
    }
    if (!this.address) {
      this.errorMessage = 'Please select your location on the map.';
      return false;
    }

    return true;
  }

  async submitBooking() {
    if (!this.validateBooking()) return;

    // ✅ Prepare email template parameters
    const templateParams = {
      to_email: 'codebyhassann@gmail.com', // Gmail recipient
      package: this.selectedPackage,
      addOns: this.selectedAddOns.join(', ') || 'None',
      date: this.selectedDate,
      time: this.selectedTime,
      total: this.totalPrice,
      address: this.address,
      instructions: this.instructions || 'None',
    };

    try {
      // ✅ Send booking details via EmailJS
      const response = await emailjs.send(
        environment.emailJS.serviceID, // Gmail service ID
        environment.emailJS.templateID, // Template ID from EmailJS
        templateParams,
        environment.emailJS.publicKey
      );

      if (response.status === 200) {
        this.successMessage =
          '✅ Booking submitted successfully! Confirmation sent via email.';
        this.errorMessage = '';
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      this.errorMessage = 'Something went wrong while sending the booking.';
    }
  }

  openedPackage: string | null = null;

  togglePackage(pkgName: string) {
    this.openedPackage = this.openedPackage === pkgName ? null : pkgName;
  }

  getAddOnPrice(addOnName: string): number {
    if (!this.selectedPackageDetails) return 0;
    const addOn = this.selectedPackageDetails.addOns.find(
      (a) => a.name === addOnName
    );
    return addOn ? addOn.price : 0;
  }
}

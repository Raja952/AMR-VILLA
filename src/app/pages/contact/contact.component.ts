import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  submitted = false;
  readonly today = new Date().toISOString().slice(0, 10);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[+\d\s()-]{7,20}$/)]],
    destination: [''],
    checkIn: [''],
    checkOut: [''],
    guests: ['2'],
    message: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  submit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    const subject = encodeURIComponent(`Villa booking enquiry from ${value.name}`);
    const body = encodeURIComponent(
      `Name: ${value.name}\nEmail: ${value.email}\nPhone: ${value.phone}\n` +
      `Destination: ${value.destination || 'Not specified'}\nGuests: ${value.guests}\n` +
      `Check-in: ${value.checkIn || 'Flexible'}\nCheck-out: ${value.checkOut || 'Flexible'}\n\n` +
      `Message:\n${value.message}`
    );

    window.location.href = `mailto:info@bookvillastay.com?subject=${subject}&body=${body}`;
  }
}

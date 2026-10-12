import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

const checkoutAfterCheckin: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const checkIn = control.get('checkIn')?.value as string | undefined;
  const checkOut = control.get('checkOut')?.value as string | undefined;
  return checkIn && checkOut && checkOut <= checkIn ? { checkoutBeforeCheckin: true } : null;
};

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  submitted = false;
  readonly today = new Date().toISOString().slice(0, 10);

  form = this.fb.group({
    villa: ['', Validators.required],
    checkIn: ['', Validators.required],
    checkOut: ['', Validators.required],
    guests: ['2', Validators.required],
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[+\d\s()-]{7,20}$/)]],
    requests: ['']
  }, { validators: checkoutAfterCheckin });

  constructor(private fb: FormBuilder) {}

  submit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const booking = this.form.getRawValue();
    const subject = encodeURIComponent(`Villa booking request — ${booking.villa}`);
    const body = encodeURIComponent(
      `Villa: ${booking.villa}\nCheck-in: ${booking.checkIn}\nCheck-out: ${booking.checkOut}\n` +
      `Guests: ${booking.guests}\n\nGuest name: ${booking.name}\nEmail: ${booking.email}\n` +
      `Phone: ${booking.phone}\n\nAdditional requests: ${booking.requests || 'None'}`
    );

    window.location.href = `mailto:info@bookvillastay.com?subject=${subject}&body=${body}`;
  }
}

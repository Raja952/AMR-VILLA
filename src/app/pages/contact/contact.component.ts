import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <section class="container page">
      <h2>Contact Us</h2>
      <p>Tell us your dates and we will get back to you with available villas.</p>
      <!-- TODO: add contact details / reuse the enquiry form here -->
    </section>
  `,
  styles: [`.page { padding: 60px 20px; min-height: 50vh; } h2 { font-size: clamp(1.5rem, 5vw, 2rem); } h2 { font-weight: 400; font-size: 28px; margin-bottom: 12px; }`]
})
export class ContactComponent {}

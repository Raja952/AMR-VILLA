import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  template: `
    <section class="container page">
      <h2>Blog</h2>
      <p>Posts coming soon.</p>
    </section>
  `,
  styles: [`.page { padding: 60px 20px; min-height: 50vh; } h2 { font-size: clamp(1.5rem, 5vw, 2rem); } h2 { font-weight: 400; font-size: 28px; margin-bottom: 12px; }`]
})
export class BlogComponent {}

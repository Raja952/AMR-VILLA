import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  submitted = false;

  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    date: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  submit() {
    this.submitted = true;
    if (this.form.invalid) return;
    console.log(this.form.value); // call your service here
  }
}

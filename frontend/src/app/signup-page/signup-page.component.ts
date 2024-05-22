import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
// import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-signup-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './signup-page.component.html',
  styleUrl: './signup-page.component.css'
})
export class SignupPageComponent {
  form = this.fb.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  onSubmit() {
    const { username, email, password } = this.form.getRawValue();

    this.authService.register(email ?? '', username ?? '', password ?? '').subscribe(() => {
      this.router.navigate(['/']);
    });
  }


}

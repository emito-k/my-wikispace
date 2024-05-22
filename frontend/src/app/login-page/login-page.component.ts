import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule} from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  form = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  onSubmit() {
    const { email, password } = this.form.getRawValue();

    this.authService.login(email ?? '', password ?? '').subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error logging in user: ', error);
      }
    });
  }
}

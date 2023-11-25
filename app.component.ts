// login.component.ts

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(private userService: UserService) {}

  login() {
    if (this.loginForm.invalid) return;

    const credentials = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.userService.loginUser(credentials).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Handle success, maybe store the token in local storage
      },
      (error) => {
        console.error('Login failed:', error);
        // Handle error, show an error message to the user
      }
    );
  }
}

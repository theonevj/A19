// filepath: /e:/Theone/Project/Angular/A19/A19/src/app/login/login.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login(form: NgForm) {
    if (form.valid) {
      // Implement login logic here
      console.log('Username:', this.username);
      console.log('Password:', this.password);
    } else {
      console.log('Form is invalid');
    }
  }
}
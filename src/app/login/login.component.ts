import { Component } from '@angular/core';
import { MatDialogRef,MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [FormsModule, MatDialogModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private dialogRef: MatDialogRef<LoginComponent>) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      console.log('Login Successful');
      this.dialogRef.close('success');
    } else {
      alert('Invalid username or password');
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

}

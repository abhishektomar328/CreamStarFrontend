import { Component } from '@angular/core';
import { MatDialogRef,MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // Import HttpClientModule and HttpClient
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  password = '';

  constructor(private dialogRef: MatDialogRef<LoginComponent>,private http: HttpClient,private authService:AuthService) {}

  login() {
    // You can do actual login check here
    if (this.email && this.password) {
      const loginData = {
        email:this.email,
        password:this.password
      }
      this.http.post('http://localhost:5000/api/auth/signin', loginData).subscribe({
        next:(data:any)=>{
          console.log(data);
          if(data && data.token){
            this.authService.setToken(data.token, data.user.email);

            this.dialogRef.close('success');
          }
        },
        error:(error:any)=>{
          console.log(error);
        }
      })

    }
  }

}

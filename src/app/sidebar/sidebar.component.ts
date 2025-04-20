import { CommonModule } from '@angular/common';
import { Component, inject, TemplateRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog,MatDialogModule } from '@angular/material/dialog'; // Import MatDialog service
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,       
    MatButtonModule,      
    FormsModule,
    ReactiveFormsModule,
    LoginComponent,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarOpen = false;
  dialog = inject(MatDialog);

  // constructor(private dialog: MatDialog) {}






  toggleSidebar(action?: string) {
    console.log('Sidebar Toggled:', this.sidebarOpen);
    console.log('Sidebar Toggled:', action); 
    this.sidebarOpen = !this.sidebarOpen;  
    if (action === 'admin') {
      this.openLoginDialog();
    } 
    }

    openLoginDialog() {
      console.log('Opening Login Dialog'); // <-- add this
      const dialogRef = this.dialog.open(LoginComponent, {
        width: '400px'
      });
    
      dialogRef.afterClosed().subscribe(result => {
        if (result === 'success') {
          console.log('Admin logged in successfully');
        }
      });
    }
    

    
    
  }


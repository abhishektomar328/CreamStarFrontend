import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatDialog,MatDialogModule } from '@angular/material/dialog'; // Import MatDialog service
import { LoginComponent } from '../login/login.component';


@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,RouterLink,MatDialogModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  sidebarOpen = false;
  constructor(private dialog: MatDialog) {}



  toggleSidebar(action?: string) {
    debugger;
    console.log('Sidebar Toggled:', this.sidebarOpen); // Debugging Log
    console.log('Sidebar Toggled:', action); // Debugging Log
    this.sidebarOpen = !this.sidebarOpen;   
    if (action === 'admin') {
      this.openAdminDialog()
    } 
    }

    openAdminDialog() {
      const dialogRef = this.dialog.open(LoginComponent, {
        width: '400px', // Set width of dialog
        disableClose: true, // Prevent closing on outside click
      });
  
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog closed with result:', result);
      });
    }
    
  }


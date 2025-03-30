import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  services: any[] = [];

  constructor(){
  }

  uploadImage(event: any, serviceIndex: number) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
      };
      reader.readAsDataURL(file);
    }
  }

  removeImage(serviceIndex: number, imageId: number) {
  }
}

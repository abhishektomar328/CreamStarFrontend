import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // <-- Import HttpClientModule here
import { Observable } from 'rxjs'; // For using Observables


@Component({
  selector: 'app-services',
  imports: [CommonModule,HttpClientModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  dtId:any = '67e6d0459eec4cf56e4a3d26';
  fdId:any = '67e6d0d49eec4cf56e4a3d2a';
  Om:any=[]
  Jm:any=[]
  Ls:any=[]
  Vt:any=[]
  Dt:any=[]
  Fd:any=[];
  Wp:any = [];
  Sb:any=[]
  services:any = []
  constructor(private http: HttpClient){
    
  }
  ngOnInit(): void {
    // Fetch categories when the component initializes
    this.getCategories();
  }
  getCategories(): void {
    this.http.get('https://creamstarbackend.onrender.com/api/image/images').subscribe({
      next: (data: any) => {
        console.log(data.categories);
        data.categories.forEach((category: any) => {
          if (category._id === this.dtId) {
            this.Dt = category.images; // Store Dance Troupes images
            console.log("Dance Troupes Images:", this.Dt);
          } else if (category._id === this.fdId) {
            this.Fd = category.images; // Store Flower Decoration images
            console.log("Flower Decoration Images:", this.Fd);
          }
        });
      },
      error: (error: any) => {
        console.error("Error fetching categories:", error);
      }
    });
  }
}
  

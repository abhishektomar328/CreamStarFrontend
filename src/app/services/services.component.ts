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
  SbpId:any= '67f149a21d70d1970f15cf62';
  VtId:any = '67f1f8bc8524798b34e0c1be';
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
            this.Dt = category.images;
            console.log("Dance Troupes Images:", this.Dt);
          } else if (category._id === this.fdId) {
            this.Fd = category.images;
            console.log("Flower Decoration Images:", this.Fd);
          }
          else if (category._id === this.SbpId) {
            this.Sb = category.images;
            console.log("School birthday parties:", this.Sb);
          }
          else if (category._id === this.VtId) {
            this.Vt = category.images; 
            console.log("Varmala themes:", this.Vt);
          }
          
        });
      },
      error: (error: any) => {
        console.error("Error fetching categories:", error);
      }
    });
  }
}
  

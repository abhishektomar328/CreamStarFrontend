import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'; // <-- Import HttpClientModule here
import { Observable } from 'rxjs'; // For using Observables
import { MatDialog } from '@angular/material/dialog';
import { EventBookingDialogComponent } from '../event-booking-dialog/event-booking-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-services',
  imports: [CommonModule,HttpClientModule,MatDialogModule,MatIcon],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  authService = inject(AuthService);

  constructor(private http: HttpClient,private dialog: MatDialog){

    
  }

  currentIndexes: { [key: string]: number } = {
    Om: 0,
    Jm: 0,
    Ls: 0,
    Vt: 0,
    Dt: 0,
    Fd: 0,
    Wp: 0,
    Sb: 0,
  };
  
  
  dtId:any = '67e6d0459eec4cf56e4a3d26';
  fdId:any = '67e6d0d49eec4cf56e4a3d2a';
  SbpId:any= '67f149a21d70d1970f15cf62';
  VtId:any = '67f1f8bc8524798b34e0c1be';
  OmId:any = '67f21c7110e8ae8cc6a0eb2f';
  JmId:any = '67f3334bb2bf66c04c43bb89';
  LsId:any = '67f34d72b2bf66c04c43bbed';
  WpId:any = '67f34d9ab2bf66c04c43bbf1'; 
  
  Om:any=[]
  Jm:any=[]
  Ls:any=[]
  Vt:any=[]
  Dt:any=[]
  Fd:any=[];
  Wp:any = [];
  Sb:any=[]

  services:any = []
  
  ngOnInit(): void {
    this.getCategories();
    console.log(this.authService.token())
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
          else if (category._id === this.OmId) {
            this.Om = category.images; 
            console.log("Varmala themes:", this.Om);
          }
          else if (category._id === this.JmId) {
            this.Jm = category.images; 
            console.log("Varmala themes:", this.Jm);
          }
          else if (category._id === this.LsId) {
            this.Ls = category.images; 
            console.log("Varmala themes:", this.Ls);
          }
          
          else if (category._id === this.WpId) {
            this.Wp = category.images; 
            console.log("Varmala themes:", this.Wp);
          }
          
        });
      },
      error: (error: any) => {
        console.error("Error fetching categories:", error);
      }
    });
  }
  openBookingDialog(category:any): void {
    const dialogRef=this.dialog.open(EventBookingDialogComponent, {
      width: '500px',
      height:'400px', // Optional: Set dialog width
      data:{category},
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Only refresh if there was a result (i.e., successful upload)
        this.getCategories();
      }
    });
    
  }
  deleteImageByCategory(categoryId:any,imagePublicId:any){
    const obj:any = {
      categoryId:categoryId,
      imagePublicId:imagePublicId

    }
    this.http.post('https://creamstarbackend.onrender.com/api/image/delByCategory',obj).subscribe({
      next:(data:any)=>{
        console.log(data);
        this.getCategories();

      },
      error:(error:any)=>{
        console.log(error);
      }
    })

  }

  prevImage(section: string) {
    if (this.currentIndexes[section] > 0) {
      this.currentIndexes[section]--;
    }
  }
  
  nextImage(section: string, array: any[]) {
    if (this.currentIndexes[section] < array.length - 1) {
      this.currentIndexes[section]++;
    }
  }

}
  

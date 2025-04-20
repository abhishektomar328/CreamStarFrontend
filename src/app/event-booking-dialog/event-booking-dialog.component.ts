import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule,MatDialogRef } from '@angular/material/dialog';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule




@Component({
  selector: 'app-event-booking-dialog',
  imports: [ CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule],
  templateUrl: './event-booking-dialog.component.html',
  styleUrl: './event-booking-dialog.component.css'
})
export class EventBookingDialogComponent {
  bookingForm: FormGroup;
  selectedFiles:any;

  constructor(@Inject(MAT_DIALOG_DATA) public data: { category: any }, private fb: FormBuilder,private snackBar: MatSnackBar,private dialogRef: MatDialogRef<EventBookingDialogComponent>,private http:HttpClient){
    this.bookingForm = this.fb.group({
      categoryName: [this.data.category, Validators.required],
      images: [[], [Validators.required]]
    })
  }

  onFileSelected(event: any): void {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedFiles = Array.from(files); // Store selected files in array
      this.bookingForm.patchValue({ images: this.selectedFiles });
    }
  }


  onSubmit(): void {
    if (this.bookingForm.valid) {
      const formData = new FormData();
      formData.append('categoryName', this.bookingForm.get('categoryName')?.value);

      this.selectedFiles.forEach((file:any) => {
        formData.append('images', file, file.name);
      });
      console.log("abhi",formData);

      // Make API call
      this.http.post('https://creamstarbackend.onrender.com/api/image/upload', formData).subscribe({
        next: (data:any) => {
          console.log(data);
          this.snackBar.open('Images uploaded successfully!', 'Close', { duration: 3000 });
          this.dialogRef.close(data); // Close dialog with response data
        },
        error: (error:any) => {
          this.snackBar.open(`Error uploading images: ${error.message}`, 'Close', { duration: 5000 });
        },
      });
    }
  }

}

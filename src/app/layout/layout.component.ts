// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-layout',
//   imports: [],
//   templateUrl: './layout.component.html',
//   styleUrl: './layout.component.css'
// })
// export class LayoutComponent {

// }



import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
    imports: [CommonModule,RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent implements AfterViewInit {
  private text = '   Turning Moments into Memories – 30 Years of Excellence!';
  private speed = 50; // speed in ms

  ngAfterViewInit(): void {
    this.typeWriter(0);
  }

  private typeWriter(i: number): void {
    if (i < this.text.length) {
      const span = document.getElementById('typed-text');
      if (span) {
        span.textContent += this.text.charAt(i);
        setTimeout(() => this.typeWriter(i + 1), this.speed);
      }
    }
  }

  images: string[] = [
    '/assets/owner1.jpg',
    '/assets/award1.jpg',
    '/assets/owner2.jpg',
    '/assets/award2.jpg'
  ];
  currentIndex = 0;
  
  ngOnInit() {
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 3000); // change image every 3 seconds
  }
  
}


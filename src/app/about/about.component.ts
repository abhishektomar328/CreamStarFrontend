import { AfterViewInit, Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
  ngAfterViewInit() {
    this.addScrollAnimation();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.addScrollAnimation();
  }

  addScrollAnimation() {
    const sections = document.querySelectorAll('.fade-in');
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
        section.classList.add('visible');
      }
    });
  }

}

import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.scss',
})
export class ScrollToTopComponent {
  show = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop > 100
    ) {
      this.show = true;
    } else if (
      (this.show && window.scrollY) ||
      document.documentElement.scrollTop ||
      document.body.scrollTop < 10
    ) {
      this.show = false;
    }
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0 });
  }
}

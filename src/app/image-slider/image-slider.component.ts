import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { LottieModule } from 'ngx-lottie';
import { MaterialModule } from '../material.module';
import { Image } from './types';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, LottieModule, MaterialModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
})
export class ImageSliderComponent {
  @Input() images: Image[] = [];

  currentIndex = 0;

  next(): void {
    if (this.currentIndex + 1 === this.images.length) {
      this.currentIndex = 0;
      return;
    }

    this.currentIndex++;
  }

  prev(): void {
    if (this.currentIndex - 1 < 0) {
      this.currentIndex = this.images.length - 1;
      return;
    }

    this.currentIndex--;
  }

  goToStory(index: number): void {
    this.currentIndex = index;
  }
}

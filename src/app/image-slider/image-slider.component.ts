import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { LottieModule } from 'ngx-lottie';
import { Image } from './types';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule, LottieModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ImageSliderComponent {
  @Input() images: Image[] = [];
}

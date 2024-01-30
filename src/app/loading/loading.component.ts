import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimationOptions, LottieModule } from 'ngx-lottie';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, LottieModule],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss',
})
export class LoadingComponent {
  loading: AnimationOptions = {
    path: '../../assets/loading.json',
  };
}

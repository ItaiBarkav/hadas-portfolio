import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LottieModule } from 'ngx-lottie';
import { AnimationOptions } from 'ngx-lottie/lib/symbols';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MaterialModule } from '../material.module';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-threats',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    ScrollToTopComponent,
    LottieModule,
  ],
  templateUrl: './threats.component.html',
  styleUrl: './threats.component.scss',
})
export class ThreatsComponent {
  story3: AnimationOptions = {
    path: '../../assets/threats/story3.json',
  };
}

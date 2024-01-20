import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';
import { ExploreProjectsComponent } from '../explore-projects/explore-projects.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { Image } from '../image-slider/types';
import { MaterialModule } from '../material.module';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-pharm-yarok',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    ScrollToTopComponent,
    ExploreProjectsComponent,
    BackToTopComponent,
    ImageSliderComponent,
  ],
  templateUrl: './pharm-yarok.component.html',
  styleUrl: './pharm-yarok.component.scss',
})
export class PharmYarokComponent {
  stories: Image[] = [
    {
      path: '../../assets/pharmYarok/userStory1.svg',
      text: "Avi is texting with the pharmacy's reps to get info on strains to buy.",
    },
    {
      path: '../../assets/pharmYarok/userStory2.svg',
      text: 'Avi is disappointed by the lack of info, recommendations, and images.',
    },
    {
      path: '../../assets/pharmYarok/userStory3.svg',
      text: 'Avi decides to search strains on the app.',
    },
    {
      path: '../../assets/pharmYarok/userStory4.svg',
      text: 'Avi quickly finds the info and images he needed and places an order.',
    },
    {
      path: '../../assets/pharmYarok/userStory5.svg',
      text: "Avi got the order, and he's relieved to have his medicine.",
    },
  ];
}

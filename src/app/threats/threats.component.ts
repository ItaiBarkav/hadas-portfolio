import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LottieModule } from 'ngx-lottie';
import { AnimationOptions } from 'ngx-lottie/lib/symbols';
import { AbstractCaseComponent } from '../case/abstract-case/abstract-case.component';
import { CaseHeaderComponent } from '../case/case-header/case-header.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { Image } from '../image-slider/types';
import { PersonasComponent } from './personas/personas.component';
import { Persona } from './personas/types';

@Component({
  selector: 'app-threats',
  standalone: true,
  imports: [
    CommonModule,
    AbstractCaseComponent,
    CaseHeaderComponent,
    LottieModule,
    ImageSliderComponent,
    PersonasComponent,
  ],
  templateUrl: './threats.component.html',
  styleUrls: [
    './threats.component.scss',
    '../case/abstract-case/abstract-case.component.scss',
  ],
})
export class ThreatsComponent {
  headerImg = '../../assets/threats/home.png';
  mobileHeaderImg = '../../assets/threats/home-mobile.png';
  story3: AnimationOptions = {
    path: '../../assets/threats/story3.json',
  };
  stories: Image[] = [
    {
      path: '../../assets/threats/story1.svg',
      text: "Oh no, There's a missile attack on the ship.",
    },
    {
      path: '../../assets/threats/story2.svg',
      text: "The controller's job is to group the same entities in the map, to have a clear view.",
    },
    {
      path: '../../assets/threats/story3.json',
      text: 'The controller groups again and again and again and again...',
      isLottie: true,
    },
    {
      path: '../../assets/threats/story4.svg',
      text: 'Now that the map is clear, other position holders can intercept the threat.',
    },
  ];
  personas: Persona[] = [
    {
      header: 'Defence Controller',
      image: '../../assets/threats/sergeant.svg',
      info: 'Responsible for alerting about potential threats and organizing the targets.',
      needs: 'Fast tools to perform quickly with a focus on map interaction.',
      painPoint:
        "The map area can be difficult to navigate and use when it's crowded.",
    },
    {
      header: 'Defence Officer',
      image: '../../assets/threats/lieutenant.svg',
      info: 'They manage the entire defence process.',
      needs:
        'Fast scanning of data: They need a single source that concentrates all relevant information.',
      painPoint:
        'Inconvenient consumption of data: the information is scattered in the map and not concentrated in 1 place.',
    },
    {
      header: 'Commanding Officer',
      image: '../../assets/threats/captain.svg',
      info: 'They supervise and control all events and transfer needed information.',
      needs: 'Similar to defence officers.',
      painPoint: 'Similar to defence officers.',
    },
  ];
}

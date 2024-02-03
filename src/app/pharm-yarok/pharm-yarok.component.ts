import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractCaseComponent } from '../case/abstract-case/abstract-case.component';
import { CaseHeaderComponent } from '../case/case-header/case-header.component';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { Image } from '../image-slider/types';
import { PersonasComponent } from './personas/personas.component';
import { Persona } from './personas/types';

@Component({
  selector: 'app-pharm-yarok',
  standalone: true,
  imports: [
    CommonModule,
    AbstractCaseComponent,
    CaseHeaderComponent,
    ImageSliderComponent,
    PersonasComponent,
  ],
  templateUrl: './pharm-yarok.component.html',
  styleUrls: [
    './pharm-yarok.component.scss',
    '../case/abstract-case/abstract-case.component.scss',
  ],
})
export class PharmYarokComponent {
  headerImg = '../../assets/pharmYarok/header.png';
  mobileHeaderImg = '../../assets/pharmYarok/header-mobile.svg';
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

  personas: Persona[] = [
    {
      header: 'Leisure buyer',
      image: '../../assets/pharmYarok/person1.svg',
      info: 'They smoke for fun, and like trying popular strains with high THC levels.',
      needs: 'Fast delivery and freebies.',
      goals: 'being among the firsts to try new strains.',
      frustrations: 'Waiting for the delivery.',
    },
    {
      header: 'Carrier',
      image: '../../assets/pharmYarok/person2.svg',
      info: "The carrier handles someone else's orders, since they're not able to.",
      needs: 'making the same order every month quickly.',
      goals: 'having the same strains to keep a therapeutic sequence.',
      frustrations: 'when the usual order is out of stock.',
    },
    {
      header: 'Outlet buyer',
      image: '../../assets/pharmYarok/person3.svg',
      info: "They're patients for many years, and usually reorder the same strains.",
      needs: 'Getting affordable treatment.',
      goals: 'Keeping a therapeutic sequence.',
      frustrations: " there's no variety of discounted strains.",
    },
  ];
}

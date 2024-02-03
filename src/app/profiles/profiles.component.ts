import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AnimationOptions, LottieModule } from 'ngx-lottie';
import { AbstractCaseComponent } from '../case/abstract-case/abstract-case.component';
import { CaseHeaderComponent } from '../case/case-header/case-header.component';

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [
    CommonModule,
    AbstractCaseComponent,
    CaseHeaderComponent,
    LottieModule,
  ],
  templateUrl: './profiles.component.html',
  styleUrls: [
    './profiles.component.scss',
    '../case/abstract-case/abstract-case.component.scss',
  ],
})
export class ProfilesComponent {
  headerImg = '../../assets/profiles/header.svg';
  mobileHeaderImg = '../../assets/profiles/header-mobile.svg';
  visual2: AnimationOptions = {
    path: '../../assets/profiles/visual2.json',
  };
}

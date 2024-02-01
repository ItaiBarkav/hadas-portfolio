import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractCaseComponent } from '../case/abstract-case/abstract-case.component';
import { CaseHeaderComponent } from '../case/case-header/case-header.component';

@Component({
  selector: 'app-profiles',
  standalone: true,
  imports: [CommonModule, AbstractCaseComponent, CaseHeaderComponent],
  templateUrl: './profiles.component.html',
  styleUrls: [
    './profiles.component.scss',
    '../case/abstract-case/abstract-case.component.scss',
  ],
})
export class ProfilesComponent {
  headerImg = '../../assets/profiles/header.png';
  mobileHeaderImg = '../../assets/profiles/header-mobile.png';
}

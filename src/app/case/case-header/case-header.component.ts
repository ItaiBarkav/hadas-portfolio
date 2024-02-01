import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../header/header.component';

@Component({
  selector: 'app-case-header',
  standalone: true,
  imports: [CommonModule, HeaderComponent],
  templateUrl: './case-header.component.html',
  styleUrl: './case-header.component.scss',
})
export class CaseHeaderComponent {
  @Input() set headerImg(url: string) {
    this.imageUrl = `url(${url})`;
  }
  @Input() set mobileHeaderImg(url: string) {
    this.mobileImageUrl = `url(${url})`;
  }

  imageUrl = '';
  mobileImageUrl = '';
}

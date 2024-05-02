import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, HostListener, Input } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent implements AfterViewInit {
  @Input() showTitle = true;

  width = 0;

  ngAfterViewInit(): void {
    this.width = window.innerWidth;
  }

  @HostListener('window:resize')
  onResize(): void {
    this.width = window.innerWidth;
  }
}

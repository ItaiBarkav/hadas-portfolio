import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  homeUrl = '/';
  aboutUrl = '#about';
  @Input() selectedLink: string | null = null;

  updateSelectedLink(selectedLink: string): void {
    this.selectedLink = selectedLink;
  }
}

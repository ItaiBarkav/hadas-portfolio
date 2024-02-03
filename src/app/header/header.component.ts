import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MaterialModule, FooterComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() selectedLink: string | null = null;

  homeUrl = '/';
  aboutUrl = '#about';
  _toggleMenu = false;

  updateSelectedLink(selectedLink: string): void {
    this.selectedLink = selectedLink;
    this.toggleMenu();
  }

  toggleMenu(): void {
    this._toggleMenu = !this._toggleMenu;
  }
}

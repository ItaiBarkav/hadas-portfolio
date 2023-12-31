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
  homeUrl = '/';
  aboutUrl = '#about';
  @Input() selectedLink: string | null = null;
  _toggleMenu = false;

  updateSelectedLink(selectedLink: string): void {
    this.selectedLink = selectedLink;
    this.toggleMenu();
  }

  toggleMenu(): void {
    this._toggleMenu = !this._toggleMenu;
  }
}

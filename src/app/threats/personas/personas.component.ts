import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Persona } from './types';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.scss',
})
export class PersonasComponent {
  @Input() personas: Persona[] = [];

  currentIndex = 0;

  next(): void {
    if (this.currentIndex + 1 === this.personas.length) {
      this.currentIndex = 0;
      return;
    }

    this.currentIndex++;
  }

  prev(): void {
    if (this.currentIndex - 1 < 0) {
      this.currentIndex = this.personas.length - 1;
      return;
    }

    this.currentIndex--;
  }

  goToStory(index: number): void {
    this.currentIndex = index;
  }
}

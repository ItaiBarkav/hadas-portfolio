import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, Input } from '@angular/core';
import { Persona } from './types';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PersonasComponent {
  @Input() personas: Persona[] = [];
}

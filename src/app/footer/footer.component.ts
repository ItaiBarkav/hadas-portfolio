import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}

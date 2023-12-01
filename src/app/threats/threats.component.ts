import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-threats',
  standalone: true,
  imports: [CommonModule, MaterialModule, FooterComponent],
  templateUrl: './threats.component.html',
  styleUrl: './threats.component.scss',
})
export class ThreatsComponent {}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'app-pharm-yarok',
  standalone: true,
  imports: [CommonModule, MaterialModule, FooterComponent],
  templateUrl: './pharm-yarok.component.html',
  styleUrl: './pharm-yarok.component.scss',
})
export class PharmYarokComponent {}

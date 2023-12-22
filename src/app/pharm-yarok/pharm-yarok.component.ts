import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ExploreProjectsComponent } from '../explore-projects/explore-projects.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MaterialModule } from '../material.module';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-pharm-yarok',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    ScrollToTopComponent,
    ExploreProjectsComponent,
  ],
  templateUrl: './pharm-yarok.component.html',
  styleUrl: './pharm-yarok.component.scss',
})
export class PharmYarokComponent {}

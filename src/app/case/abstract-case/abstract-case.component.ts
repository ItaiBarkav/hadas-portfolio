import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BackToTopComponent } from '../../back-to-top/back-to-top.component';
import { ExploreProjectsComponent } from '../../explore-projects/explore-projects.component';
import { FooterComponent } from '../../footer/footer.component';
import { LoadingComponent } from '../../loading/loading.component';
import { MaterialModule } from '../../material.module';
import { ScrollToTopComponent } from '../../scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-abstract-case',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    BackToTopComponent,
    ExploreProjectsComponent,
    FooterComponent,
    ScrollToTopComponent,
    LoadingComponent,
  ],
  templateUrl: './abstract-case.component.html',
  styleUrl: './abstract-case.component.scss',
})
export class AbstractCaseComponent {
  @Input() firstProject: string = '';
  @Input() secondProject: string = '';
}

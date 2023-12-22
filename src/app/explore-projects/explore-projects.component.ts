import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectNamePipe } from '../project-name.pipe';

@Component({
  selector: 'app-explore-projects',
  standalone: true,
  imports: [CommonModule, ProjectNamePipe],
  templateUrl: './explore-projects.component.html',
  styleUrl: './explore-projects.component.scss',
})
export class ExploreProjectsComponent {
  @Input() firstProject: string = '';
  @Input() secondProject: string = '';

  constructor(private router: Router) {}

  goTo(project: string): void {
    this.router.navigateByUrl(`/${project}`);
  }
}

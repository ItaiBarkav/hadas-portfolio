import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { PROTECTED } from '../password-dialog/config';
import { PasswordDialogComponent } from '../password-dialog/password-dialog.component';
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

  constructor(private router: Router, private matDialog: MatDialog) {}

  goTo(project: string): void {
    if (
      (project === 'threats' || project === 'profiles') &&
      localStorage.getItem(PROTECTED) === null
    ) {
      const passwordDialogRef = this.matDialog.open(PasswordDialogComponent);
      passwordDialogRef
        .afterClosed()
        .pipe(
          filter((isAllow) => isAllow),
          map(() => this.router.navigateByUrl(`/${project}`))
        )
        .subscribe();
    } else {
      this.router.navigateByUrl(`/${project}`);
    }
  }
}

import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { AbstractCaseComponent } from '../case/abstract-case/abstract-case.component';
import { HeaderComponent } from '../header/header.component';
import { PasswordDialogComponent } from '../password-dialog/password-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AbstractCaseComponent, PasswordDialogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  private readonly ABOUT = 'about';

  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller,
    private matDialog: MatDialog
  ) {}

  ngAfterViewInit(): void {
    if (this.router.url.includes(this.ABOUT)) {
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(this.ABOUT);
      }, 2000);
    }
  }

  goto(path: string, isProtected?: boolean): void {
    if (isProtected) {
      const passwordDialogRef = this.matDialog.open(PasswordDialogComponent);
      passwordDialogRef
        .afterClosed()
        .pipe(
          filter((isAllow) => isAllow),
          map(() => this.router.navigateByUrl(`/${path}`))
        )
        .subscribe();
    } else {
      this.router.navigateByUrl(`/${path}`);
    }
  }
}

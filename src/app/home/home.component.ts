import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractCaseComponent } from '../case/abstract-case/abstract-case.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, AbstractCaseComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  private readonly ABOUT = 'about';
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {}

  ngAfterViewInit(): void {
    if (this.router.url.includes(this.ABOUT)) {
      setTimeout(() => {
        this.viewportScroller.scrollToAnchor(this.ABOUT);
      }, 2000);
    }
  }

  goto(path: string): void {
    this.router.navigateByUrl(`/${path}`);
  }
}

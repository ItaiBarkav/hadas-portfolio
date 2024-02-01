import { Component } from '@angular/core';
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
export class HomeComponent {
  constructor(private router: Router) {}

  goto(path: string): void {
    this.router.navigateByUrl(`/${path}`);
  }
}

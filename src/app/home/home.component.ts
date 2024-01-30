import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BackToTopComponent } from '../back-to-top/back-to-top.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { LoadingComponent } from '../loading/loading.component';
import { MaterialModule } from '../material.module';
import { ScrollToTopComponent } from '../scroll-to-top/scroll-to-top.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    MaterialModule,
    FooterComponent,
    ScrollToTopComponent,
    BackToTopComponent,
    LoadingComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private router: Router) {}

  goto(path: string): void {
    this.router.navigateByUrl(`/${path}`);
  }
}

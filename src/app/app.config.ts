import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import player from 'lottie-web';
import { LottieModule, provideCacheableAnimationLoader } from 'ngx-lottie';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled',
      })
    ),
    provideClientHydration(),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(LottieModule.forRoot({ player: () => player })),
    provideCacheableAnimationLoader(),
  ],
};

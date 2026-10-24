import { provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [provideZoneChangeDetection(), ...appConfig.providers],
})
  .then(() => {
    const appRoot = document.querySelector('app-root');
    appRoot?.removeAttribute('ng-version');
  })
  .catch((err) => console.error(err));

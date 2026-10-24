import { provideHttpClient } from '@angular/common/http';
import { EnvironmentProviders, Provider } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideTranslateService } from '@ngx-translate/core';

/** Providers shared by component specs (router, http and translations). */
export const provideTestingDefaults = (): (Provider | EnvironmentProviders)[] => [
  provideRouter([]),
  provideHttpClient(),
  provideTranslateService({ lang: 'de' }),
];

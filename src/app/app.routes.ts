import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'privacy-policy',
    loadComponent: () =>
      import('./privacy-policy/privacy-policy.component').then(
        (m) => m.PrivacyPolicyComponent,
      ),
  },
  {
    path: 'legal-notice',
    loadComponent: () =>
      import('./legal-notice/legal-notice.component').then(
        (m) => m.LegalNoticeComponent,
      ),
  },
];

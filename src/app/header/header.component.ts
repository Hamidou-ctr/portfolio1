import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { scrollToId } from '../scroll.util';

@Component({
  selector: 'app-header',
  imports: [TranslateModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private readonly translate = inject(TranslateService);
  private readonly router = inject(Router);

  protected readonly currentLanguage = signal('de');
  protected readonly showMenu = signal(false);
  protected readonly selectedSection = signal<string | null>(null);

  protected changeLanguage(lang: string): void {
    this.translate.use(lang);
    this.currentLanguage.set(lang);
  }

  protected toggleMenu(): void {
    this.showMenu.update((open) => !open);
  }

  protected scrollToSection(sectionId: string): void {
    this.selectedSection.set(sectionId);
    this.showMenu.set(false);

    if (this.router.url === '/') {
      scrollToId(sectionId);
    } else {
      this.router.navigate(['/'], { queryParams: { scrollTo: sectionId } });
    }
  }
}

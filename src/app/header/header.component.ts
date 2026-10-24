import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

const NAVBAR_OFFSET_PX = 100;

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
      this.smoothScroll(sectionId);
    } else {
      this.router.navigate(['/'], { queryParams: { scrollTo: sectionId } });
    }
  }

  private smoothScroll(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const top =
        element.getBoundingClientRect().top +
        window.scrollY -
        NAVBAR_OFFSET_PX;

      window.scrollTo({ top, behavior: 'smooth' });
    }
  }
}

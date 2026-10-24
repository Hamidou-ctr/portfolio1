import {
  afterNextRender,
  Component,
  computed,
  DestroyRef,
  inject,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterOutlet,
} from '@angular/router';
import * as AOS from 'aos';
import { filter, map } from 'rxjs';

import { AboutMeComponent } from './about-me/about-me.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ReferencesComponent } from './references/references.component';

/** Routes that replace the one-page layout with a standalone page. */
const SPECIAL_PAGES = ['/privacy-policy', '/legal-notice'];

const SCROLL_OFFSET_PX = 100;
const HOVER_EFFECT_DURATION_MS = 300;
const AOS_REFRESH_DELAY_MS = 300;

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HomePageComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    ReferencesComponent,
    ContactMeComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: { '(document:click)': 'handleDocumentClick($event)' },
})
export class AppComponent {
  readonly title = 'Portfolio';

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  protected readonly isSpecialPage = computed(() =>
    SPECIAL_PAGES.some((page) => this.currentUrl().includes(page)),
  );

  constructor() {
    afterNextRender(() => {
      AOS.init();
      setTimeout(() => AOS.refresh(), AOS_REFRESH_DELAY_MS);
    });

    this.route.queryParams
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((params) => this.scrollToSection(params['scrollTo']));
  }

  protected handleDocumentClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;

    if (!target.classList.contains('clickable')) {
      this.triggerHoverEffect();
    }
  }

  private triggerHoverEffect(): void {
    const clickableElements = document.querySelectorAll('.clickable');

    clickableElements.forEach((element) =>
      element.classList.add('hover-effect'),
    );

    setTimeout(() => {
      clickableElements.forEach((element) =>
        element.classList.remove('hover-effect'),
      );
    }, HOVER_EFFECT_DURATION_MS);
  }

  private scrollToSection(sectionId: string | undefined): void {
    if (!sectionId) {
      return;
    }

    // Wait one tick so the target section is rendered.
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const top =
          element.getBoundingClientRect().top +
          window.scrollY -
          SCROLL_OFFSET_PX;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 10);
  }
}

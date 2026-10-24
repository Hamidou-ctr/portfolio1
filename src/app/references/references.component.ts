import {
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ScrollService } from '../service/service.component';

interface Reference {
  text: string;
  title: string;
  author: string;
  profileImage: string;
  name: string;
}

@Component({
  selector: 'app-references',
  templateUrl: './references.component.html',
  styleUrl: './references.component.scss',
})
export class ReferencesComponent {
  private readonly scrollService = inject(ScrollService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly referenceSection =
    viewChild.required<ElementRef<HTMLElement>>('refereceSection');

  protected readonly sections: readonly Reference[] = [
    {
      text: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      title: '',
      author: 'V. Schuster - Team Partner',
      profileImage: 'assets/img/profil.png',
      name: '',
    },
    {
      text: "Michael really kept the team together  We wouldn't have got this far without his commitment.",
      title: '',
      author: 'Another Author - Team Partner 11111111',
      profileImage: 'assets/img/profile1.png',
      name: '',
    },
    {
      text: 'Another reference text here.',
      title: '',
      author: 'Another Author - Team Partner 22222222',
      profileImage: 'assets/img/profil2.png',
      name: '',
    },
    {
      text: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      title: '',
      author: 'Another Author - Team Partner 33333333',
      profileImage: 'assets/img/profile3.png',
      name: '',
    },
  ];

  protected readonly currentIndex = signal(0);

  constructor() {
    afterNextRender(() => {
      this.scrollService.scrollToReference$
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe(() =>
          this.referenceSection().nativeElement.scrollIntoView({
            behavior: 'smooth',
          }),
        );
    });
  }

  protected nextSection(): void {
    this.currentIndex.update((i) => Math.min(i + 1, this.sections.length - 1));
  }

  protected previousSection(): void {
    this.currentIndex.update((i) => Math.max(i - 1, 0));
  }
}

import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ScrollService {
  private readonly scrollToReferenceSubject = new Subject<void>();

  /** Emits whenever a component asks the references section to scroll into view. */
  readonly scrollToReference$ = this.scrollToReferenceSubject.asObservable();

  scrollToReference(): void {
    this.scrollToReferenceSubject.next();
  }
}

import { TestBed } from '@angular/core/testing';

import { ScrollService } from './service.component';

describe('ScrollService', () => {
  it('should emit when scrollToReference is called', () => {
    const service = TestBed.inject(ScrollService);
    let emitted = 0;
    service.scrollToReference$.subscribe(() => emitted++);

    service.scrollToReference();

    expect(emitted).toBe(1);
  });
});

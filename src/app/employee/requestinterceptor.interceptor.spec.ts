import { TestBed } from '@angular/core/testing';

import { Requestinterceptor } from './requestinterceptor.interceptor';

describe('RequestinterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      Requestinterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: Requestinterceptor = TestBed.inject(Requestinterceptor);
    expect(interceptor).toBeTruthy();
  });
});

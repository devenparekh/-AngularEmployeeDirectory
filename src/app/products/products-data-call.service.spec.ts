import { TestBed } from '@angular/core/testing';

import { ProductsDataCallService } from './products-data-call.service';

describe('ProductsDataCallService', () => {
  let service: ProductsDataCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsDataCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

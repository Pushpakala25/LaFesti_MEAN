import { TestBed } from '@angular/core/testing';

import { PayservService } from './payserv.service';

describe('PayservService', () => {
  let service: PayservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PayservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

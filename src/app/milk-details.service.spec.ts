import { TestBed } from '@angular/core/testing';

import { MilkDetailsService } from './milk-details.service';

describe('MilkDetailsService', () => {
  let service: MilkDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MilkDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { OceanoService } from './oceano.service';

describe('OceanoService', () => {
  let service: OceanoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OceanoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

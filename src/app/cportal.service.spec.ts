import { TestBed } from '@angular/core/testing';

import { CportalService } from './cportal.service';

describe('CportalService', () => {
  let service: CportalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CportalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

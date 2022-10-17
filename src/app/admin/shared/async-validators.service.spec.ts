import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AsyncValidatorsService } from './async-validators.service';

describe('AsyncValidatorsService', () => {
  let service: AsyncValidatorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AsyncValidatorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

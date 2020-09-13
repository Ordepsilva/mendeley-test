import { TestBed } from '@angular/core/testing';

import { ApiMendeleyService } from './api-mendeley.service';

describe('ApiMendeleyService', () => {
  let service: ApiMendeleyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMendeleyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

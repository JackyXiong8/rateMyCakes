import { TestBed, inject } from '@angular/core/testing';

import { CakesService } from './cakes.service';

describe('CakesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CakesService]
    });
  });

  it('should be created', inject([CakesService], (service: CakesService) => {
    expect(service).toBeTruthy();
  }));
});

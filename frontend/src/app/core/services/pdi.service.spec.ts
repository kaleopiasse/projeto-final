import { TestBed } from '@angular/core/testing';

import { PdiService } from './pdi.service';

describe('PdiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PdiService = TestBed.get(PdiService);
    expect(service).toBeTruthy();
  });
});

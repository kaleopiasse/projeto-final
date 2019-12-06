import { TestBed } from '@angular/core/testing';

import { SelfFeedbackService } from './self-feedback.service';

describe('SelfFeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelfFeedbackService = TestBed.get(SelfFeedbackService);
    expect(service).toBeTruthy();
  });
});

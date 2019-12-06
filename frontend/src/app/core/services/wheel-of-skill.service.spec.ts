import { TestBed } from '@angular/core/testing';

import { WheelOfSkillService } from './wheel-of-skill.service';

describe('WheelOfSkillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WheelOfSkillService = TestBed.get(WheelOfSkillService);
    expect(service).toBeTruthy();
  });
});

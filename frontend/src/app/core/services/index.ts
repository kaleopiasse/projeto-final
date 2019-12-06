import { GoalsService } from './goals.service';
import { PdiService } from './pdi.service';
import { SelfFeedbackService } from './self-feedback.service';
import { UserService } from './user.service';
import { WheelOfSkillService } from './wheel-of-skill.service';

export * from './goals.service';
export * from './pdi.service';
export * from './self-feedback.service';
export * from './user.service';
export * from './wheel-of-skill.service';

export const services = [
  GoalsService,
  PdiService,
  SelfFeedbackService,
  UserService,
  WheelOfSkillService,
];

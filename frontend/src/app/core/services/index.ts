import { GoalsService } from './goals.service';
import { PdiService } from './pdi.service';
import { UserService } from './user.service';

export * from './goals.service';
export * from './pdi.service';
export * from './user.service';

export const services = [
  GoalsService,
  PdiService,
  UserService,
];

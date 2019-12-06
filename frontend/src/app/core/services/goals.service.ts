import { Observable } from 'rxjs';
import { GoalModel } from 'src/app/core/models';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { StatusOrPeriodModel } from '../models/goal.model';
import { ServiceEndpoints } from '../utils';
import { service } from '../utils/endpoints.util';

@Injectable()
export class GoalsService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getGoalStatus() {
    return this.http.get(service(ServiceEndpoints.Status)) as Observable<{items: StatusOrPeriodModel[]}>;
  }

  getGoalPeriods() {
    return this.http.get(service(ServiceEndpoints.Periods)) as Observable<{items: StatusOrPeriodModel[]}>;
  }

  getGoalByPdi(id: string) {
    return this.http.get(service(ServiceEndpoints.GoalsByPdi, id)) as Observable<{ items: GoalModel[]}>;
  }

  createGoals(goals: GoalModel[]) {
    return this.http.post(service(ServiceEndpoints.Goals), goals) as Observable<GoalModel[]>;
  }
}

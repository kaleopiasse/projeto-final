import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { WheelOfSkillsModel } from '../models';
import { service, ServiceEndpoints } from '../utils/endpoints.util';

@Injectable()
export class WheelOfSkillService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  createWheelOfSkills(wheelOfSkills: WheelOfSkillsModel) {
    return this.http.post(service(ServiceEndpoints.WheelOfSkills), wheelOfSkills) as Observable<WheelOfSkillsModel>;
  }

  getWhellOfSkillsByPdi(id: string) {
    return this.http.get(service(ServiceEndpoints.WheelOfSkillsByPdi, id)) as Observable<{ items: WheelOfSkillsModel[]}>;
  }
}

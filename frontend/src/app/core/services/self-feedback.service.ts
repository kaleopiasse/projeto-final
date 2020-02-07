import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { SelfFeedbackModel } from '../models';
import { service, ServiceEndpoints } from '../utils';

@Injectable()
export class SelfFeedbackService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  createSelfFeedback(selfFeedback: SelfFeedbackModel) {
    return this.http.post(service(ServiceEndpoints.SelfFeedbacks), selfFeedback) as Observable<SelfFeedbackModel>;
  }

  getSelfFeedbacksByPdi(id: string) {
    return this.http.get(service(ServiceEndpoints.SelfFeedbacksByPdi, id)) as Observable<{ items: SelfFeedbackModel[]}>;
  }
}

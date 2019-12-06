import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { PdiModel } from '../models/pdi.model';
import { service, ServiceEndpoints } from '../utils/endpoints.util';

@Injectable()
export class PdiService {

  constructor(
    private readonly http: HttpClient,
  ) { }

  getPdiByCollaboratorId(id: string) {
    return this.http.get(service(ServiceEndpoints.PdiByCollaboratorId, id)) as Observable<PdiModel[]>;
  }

  createPdis(pdi: PdiModel) {
    return this.http.post(service(ServiceEndpoints.Pdis), pdi) as Observable<PdiModel>;
  }
}

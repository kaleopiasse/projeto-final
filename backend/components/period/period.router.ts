import * as restify from 'restify';

import { ModelRouter } from '../../common/model-router';
import { Period } from './period.model';

class PeriodsRouter extends ModelRouter<Period> {

  constructor() {
    super(Period)
  }

  applyRoutes(application: restify.Server) {
    application.get(`${this.basePath}`, this.findAll)
  }

}

export const periodsRouter = new PeriodsRouter()
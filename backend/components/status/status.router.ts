import * as restify from 'restify';

import { ModelRouter } from '../../common/model-router';
import { Status } from './status.model';

class StatusRouter extends ModelRouter<Status> {

  constructor() {
    super(Status)
  }

  applyRoutes(application: restify.Server) {
    application.get(`${this.basePath}`, this.findAll)
  }

}

export const statusRouter = new StatusRouter()
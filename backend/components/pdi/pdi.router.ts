import * as mongoose from 'mongoose';
import * as restify from 'restify';

import { ModelRouter } from '../../common/model-router';
import { Pdi } from './pdi.model';

class PdisRouter extends ModelRouter<Pdi> {

  constructor() {
    super(Pdi)
  }

  protected prepareOne(query: mongoose.DocumentQuery<Pdi,Pdi>): mongoose.DocumentQuery<Pdi,Pdi>{
    return query.populate('user_sm_id', 'name')
  }

  applyRoutes(application: restify.Server) {
    application.get(`${this.basePath}`, this.findAll)
    application.get(`${this.basePath}/:id`, this.findById)
    application.post(`${this.basePath}`, this.save)
  }

}

export const pdisRouter = new PdisRouter()
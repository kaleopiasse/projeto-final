import * as mongoose from 'mongoose';
import * as restify from 'restify';

import { ModelRouter } from '../../common/model-router';
import { Pdi } from './pdi.model';

class PdisRouter extends ModelRouter<Pdi> {

  constructor() {
    super(Pdi)
  }

  findPdiByUserId = (req, resp, next) => {
    this.model.find({ user_collaborator_id: req.params.id })
      .populate('user_sm_id', 'name')
      .then(this.render(resp,next))
      .catch(next)
  }

  protected prepareOne(query: mongoose.DocumentQuery<Pdi,Pdi>): mongoose.DocumentQuery<Pdi,Pdi>{
    return query.populate('user_sm_id', 'name')
  }

  applyRoutes(application: restify.Server) {
    application.get(`${this.basePath}`, this.findAll)
    application.get(`${this.basePath}/:id`, this.findById)
    application.get(`${this.basePath}/collaborator/:id`, this.findPdiByUserId)
    application.post(`${this.basePath}`, this.save)
  }

}

export const pdisRouter = new PdisRouter()
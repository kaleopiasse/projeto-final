
import * as restify from 'restify';

import { ModelRouter } from '../../common/model-router';
import { Goal } from './goal.model';

class GoalsRouter extends ModelRouter<Goal> {

  constructor() {
    super(Goal)
  }

  findGoalsByPdi = (req, resp, next) => {
    this.model.find({ pdi_id: req.params.id })
      .then(this.renderAll(resp,next))
      .catch(next)
  }

  applyRoutes(application: restify.Server) {
    application.get(`${this.basePath}`, this.findAll)
    application.get(`${this.basePath}/:id`, this.findGoalsByPdi)
    application.post(`${this.basePath}`, this.save)
  }

}

export const goalsRouter = new GoalsRouter()
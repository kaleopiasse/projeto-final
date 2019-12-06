import * as restify from 'restify';

import { ModelRouter } from '../../common/model-router';
import { SelfFeedback } from './self-feedback.model';

class SelfFeedbackRouter extends ModelRouter<SelfFeedback> {

  constructor() {
    super(SelfFeedback)
  }

  findSelfFeedbacksByPdi = (req, resp, next) => {
    this.model.find({ pdi_id: req.params.id })
      .then(this.render(resp,next))
      .catch(next)
  }

  applyRoutes(application: restify.Server) {
    application.get(`${this.basePath}`, this.findAll)
    application.get(`${this.basePath}/:id`, [this.validateId, this.findSelfFeedbacksByPdi])
    application.post(`${this.basePath}`, this.save)
  }

}

export const selfFeedbackRouter = new SelfFeedbackRouter()
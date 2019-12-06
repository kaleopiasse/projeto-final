import * as restify from 'restify';

import { ModelRouter } from '../../common/model-router';
import { WheelOfSkill } from './wheel-of-skills.model';

class WheelOfSkillsRouter extends ModelRouter<WheelOfSkill> {

  constructor() {
    super(WheelOfSkill)
  }

  findWheelOfSkillsByPdi = (req, resp, next) => {
    this.model.find({ pdi_id: req.params.id })
      .then(this.render(resp,next))
      .catch(next)
  }

  applyRoutes(application: restify.Server) {
    application.get(`${this.basePath}`, this.findAll)
    application.get(`${this.basePath}/:id`, [this.validateId, this.findWheelOfSkillsByPdi])
    application.post(`${this.basePath}`, this.save)
  }

}

export const wheelOfSkillsRouter = new WheelOfSkillsRouter()